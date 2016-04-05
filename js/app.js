//ParseProvider.initialize("snooper_app_id", "snooper_js_key");
//ParseProvider.serverURL = "http://backend.snooper-app.com:1337/snooper";
var materialAdmin = angular.module('materialAdmin', [
    'ngAnimate',
    'ngResource',
    'ui.router',
    //'ui.bootstrap',
    'angular-loading-bar',
    'oc.lazyLoad',
    'nouislider',
    'ngTable',

    //'ngRoute',
    //'ngCookies',
    //'ngFileUpload',
    //'ngAnimate',
    'ui.bootstrap',
    'ngParse',
    'ngAutocomplete',
    'textAngular',
    'ngTagsInput',
    'ngRoute',
    'angularjs-dropdown-multiselect',
    'hljs',
    'angular.filter',

    'ngMap'
]).service('Session', function () {
    this.create = function (sessionId, userId, userRole) {
        this.id = sessionId;
        this.userId = userId;
        this.userRole = userRole;
    };
    this.destroy = function () {
        this.id = null;
        this.userId = null;
        this.userRole = null;
    };
}).constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
}).constant('USER_ROLES', {
    all: '*',
    admin: 'adm',
    editor: 'com'
}).factory('AuthService',['Session', '$rootScope','$q','$window','$location',
    function ( Session,$scope,$rootScope,$q, $window,$location) {
        var authService = this;

        $scope.currentUser = Parse.User.current();
        authService.login = function (credentials) {
            return  Parse.User.logIn(credentials.username, credentials.password, {
                    success: function(user) {
                        Session.create(user.id,user.usernamme,
                            user.type);
                        return user;
                    },
                    error: function(user, error) {
                        alert("Unable to log in: " + error.code + " " + error.message);
                    }

                }

            );
        };
        authService.isAuthenticated = function () {
            return !!Session.userId;
        };

        authService.logout = function(){
            Parse.User.logOut();
            $scope.currentUser = null;
            $scope.$apply();
            console.log('logout');
            Session.destroy();
        };


        authService.isAuthorized = function (authorizedRoles) {
            if (!angular.isArray(authorizedRoles)) {
                authorizedRoles = [authorizedRoles];
            }
            return (authService.isAuthenticated() &&
            authorizedRoles.indexOf(Session.userRole) !== -1);
        };

        return authService;
    }]).run(function ($rootScope, AUTH_EVENTS, AuthService) {
    $rootScope.$on('$stateChangeStart','AUTH_EVENTS','AuthService',
        function (event, next) {
            console.log(next);
            var authorizedRoles = next.data.authorizedRoles;
            if (!AuthService.isAuthorized(authorizedRoles)) {
                event.preventDefault();
                if (AuthService.isAuthenticated()) {
                    // user is not allowed
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                } else {
                    console.log('okk');
                    // user is not logged in
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                }
            }

        });
}).factory('AuthResolver',['$q','$rootScope' ,'$state',function ($q, $rootScope, $state) {
    return {
        resolve: function () {
            var deferred = $q.defer();
            var unwatch = $rootScope.$watch('currentUser', function (currentUser) {
                if (angular.isDefined(currentUser)) {
                    if (currentUser) {
                        console.log(currentUser);
                        deferred.resolve(currentUser);
                    } else {
                        deferred.reject();
                        $state.go('login');
                    }
                    unwatch();
                }
            });
            return deferred.promise;
        }

    };
}]).config(function ($httpProvider) {
    $httpProvider.interceptors.push([
        '$injector',
        function ($injector) {
            return $injector.get('AuthInterceptor');
        }
    ]);
}).factory('AuthInterceptor',['$rootScope','$q', 'AUTH_EVENTS',
    function ($rootScope, $q,AUTH_EVENTS) {
        return {
            responseError: function (response,scope) {
                $rootScope.$broadcast({
                    401: AUTH_EVENTS.notAuthenticated,
                    403: AUTH_EVENTS.notAuthorized,
                    419: AUTH_EVENTS.sessionTimeout,
                    440: AUTH_EVENTS.sessionTimeout
                }[response.status], response);
                scope.$apply();

                return $q.reject(response);
            }
        };
    }]).controller('LoginController',
    function ($scope, $rootScope, AUTH_EVENTS, AuthService,USER_ROLES,$location,Session,AuthResolver) {

        this.login = 1;
        this.register = 0;
        this.forgot = 0;

    $scope.scenario = 'Sign up';
    $scope.currentUser = Parse.User.current();

   // $rootScope.currentUser = null;
    $rootScope.userRoles = USER_ROLES;
    $rootScope.isAuthorized = AuthService.isAuthorized;

    $scope.setCurrentUser = function (currentUser) {
        $rootScope.currentUser = currentUser;
        $rootScope.$apply();

    };

    //$scope.logOut = function () {
    //    AuthService.logout();
    //};


    $scope.signUp = function(form) {

        var user = new Parse.User();
        user.set("email", form.email);
        user.set("username", form.username);
        user.set("password", form.password);

        user.signUp(null, {
            success: function(user) {
                console.log(user);
                $scope.currentUser = user;
                $location.path("/tables/main-dashboard");
                $scope.$apply();
            },
            error: function(user, error) {

                alert("Unable to sign up:  " + error.code + " " + error.message);
            }
        });
        return deferred.promise;
    };


    var sefl = this;
    $scope.logIn = function (form) {

        console.log(form)
        AuthService.login(form).then(function (user) {
            //  $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            $scope.setCurrentUser(user);
            $location.path("/tables/main-dashboard")
            $rootScope.$apply();
            return user;
        }, function () {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            $rootScope.$apply();

        });
    };

    //$scope.logIn = function(form) {
    //    var deferred = $q.defer();
    //    console.log('ok')
    //    Parse.User.logIn(form.username, form.password, {
    //
    //        success: function(user) {
    //            $location.path("/tables/main-dashboard")
    //            deferred.resolve(user);
    //            $scope.currentUser = user;
    //            $window.sessionStorage["userInfo"] = user;
    //            $scope.$apply();
    //        },
    //        error: function(user, error) {
    //            deferred.reject(error);
    //            alert("Unable to log in: " + error.code + " " + error.message);
    //        }
    //
    //    }
    //
    //    );
    //    return deferred.promise;
    //};

    $scope.logOut = function() {
        Parse.User.logOut();
        Session.destroy();
        $scope.currentUser = null;
        $location.path('/login')
        AuthService.logout();
    };
}).
factory("authenticationSvc", function() {
    var userInfo;
    function getUserInfo() {
        return userInfo;
    }
});


 