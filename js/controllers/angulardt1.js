materialAdmin

    .factory('missionsFactory', ["$q", function($q) {
        var self = this;

        var Missions = Parse.Object.extend("Mission");

        var missions = new Parse.Query(Missions);

        return {
            getData: function() {
                return missions.find({
                    success: function (results) {
                        data = [];

                        angular.forEach(results, function (value) {
                            this.push({
                                id: value.id,
                                name: value.get("name"),
                                startdate: value.get("startDate"),
                                location: value.get("location")
                            });
                        }, data);

                        return data;
                        //defer.resolve(results);
                        //defer.resolve(results.models);
                        //return results.models;
                    },
                    error: function (results, error) {
                        console.log(error);
                        //defer.reject(error);
                    }
                });

                //return defer.promise;
                //
                //return defer.promise;
            }
        };

        //var query = new Parse.Query(Fahras);
        //query.equalTo("type", "Domain");
        //var myCollection = query.collection();
        //
        //return {
        //    fetchDomains: function(){
        //        var defer = $q.defer();
        //
        //        myCollection.fetch({
        //            success : function(results) {
        //                defer.resolve(results.models);
        //                return results.models;
        //            },
        //            error : function(aError) {
        //                defer.reject(aError);
        //            }
        //        });
        //
        //        return defer.promise;
        //
        //    }
        //}
    }])

    .controller('missionsTable', ["ngTableParams", "$filter", "$scope", function(ngTableParams, $filter, $scope) {

        var self = this;

        var Missions = Parse.Object.extend("Mission");

        var missions = new Parse.Query(Missions);

        var init = function() {
            return missions.find({
                success: function (results) {
                    self.data = [];

                    angular.forEach(results, function (value) {
                        //var type = Parse.Object.extend("MissionType");
                        //var gotType1 = new Parse.Query(type);
                        //gotType1.equalTo("objectId", {
                        //    __type: "Pointer",
                        //    className: "Mission",
                        //    objectId: value.id
                        //});
                        //var gotType = gotType1.find({
                        //    success: function(result) {
                        //        return result;
                        //    }
                        //});
                        //    angular.forEach(results, function ( d) {
                        //        var typeId = d.get("missionType");
                        //        var gotType = typeId.fetch({
                        //            success: function(d) {
                        //                self.gotTypeX = d.get("type");
                        //                console.log(self.gotTypeX);
                        //
                        //
                        //            }
                        //        });


                        var typeId = value.get("missionType");
                        var gotType = typeId.fetch({
                            success: function(result) {
                                return result;
                            }
                        });
                        //console.log("Type ");
                        //console.log(gotType);
                        //console.log(gotType1);

                        self.data.push({
                            id: value.id,
                            name: value.get("name"),
                            startdate: value.get("startDate"),
                            enddate: value.get("endDate"),
                            location: value.get("location")
                            ,
                            //type: value.get("missionType").get("type")
                            type: gotType
                        });
                    }, self.data);

                    //console.log(self.data);
                },
                error: function (results, error) {
                    console.log(error);
                }
            });
        };

        init();

	

        $scope.$watch("filter.$", function () {
            self.tableParams.reload();
            self.tableParams.page(1);
        });

        self.tableParams = new ngTableParams(
            {
                page: 1,
                count: 10
            },
            {
                getData: function($defer, params) {

                    var filteredData = $filter('filter')(self.data, $scope.filter);

                    var orderedData = params.sorting() ?

                        $filter('orderBy')(filteredData, params.orderBy()) :

                        filteredData;

                    $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));

                    params.total(self.data.length);
                },

                $scope: $scope
            }
        );
    }])

    .controller('campaignsTable', ["ngTableParams", "$filter", "$scope", function(ngTableParams, $filter, $scope) {

        var self = this;

        var Campaigns = Parse.Object.extend("Campaign");

        var campaigns = new Parse.Query(Campaigns);

        var init = function() {
            return campaigns.find({
                success: function (results) {
                    self.data = [];

                    angular.forEach(results, function (value) {
                        this.push({
                            id: value.id,
                            name: value.get("name"),
                            client: value.get("client"),
                            startdate: value.get("createdAt"),
                            enddate: value.get("updatedAt"),
                            completed: value.get("location")
                        });
                    }, self.data);

                    console.log(self.data);
                },
                error: function (results, error) {
                    console.log(error);
                }
            });
        };

        init();

        $scope.$watch("filter.$", function () {
            self.tableParams.reload();
            self.tableParams.page(1);
        });

        self.tableParams = new ngTableParams(
            {
                page: 1,
                count: 10
            },
            {
                getData: function($defer, params) {

                    var filteredData = $filter('filter')(self.data, $scope.filter);

                    var orderedData = params.sorting() ?

                        $filter('orderBy')(filteredData, params.orderBy()) :

                        filteredData;

                    $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));

                    params.total(self.data.length);
                },

                $scope: $scope
            }
        );
    }])

    .controller('usersTable', ["ngTableParams", "$filter", "$scope", function(ngTableParams, $filter, $scope) {

        var self = this;

        var Users = Parse.Object.extend("User");

        var users = new Parse.Query(Users);

        var init = function() {
            return users.find({
                success: function (results) {
                    self.data = [];

                    angular.forEach(results, function (value) {
                        this.push({
                            id: value.id,
                            name: value.get("name"),
                            profilepic: value.get("profilePhoto"),
                            username: value.get("username"),
                            userlevel: value.get("userLevel")
                        });
                    }, self.data);

                    //console.log(self.data);
                },
                error: function (results, error) {
                    console.log(error);
                }
            });
        };

        init();

        $scope.$watch("filter.$", function () {
            self.tableParams.reload();
            self.tableParams.page(1);
        });

        self.tableParams = new ngTableParams(
            {
                //page: 1,
                count: 10
                //paginationMaxBlocks: 13,
                //paginationMinBlocks: 2
            },
            {
                //counts: [5, 10, 20],

                getData: function($defer, params) {

                    var filteredData = $filter('filter')(self.data, $scope.filter);

                    var orderedData = params.sorting() ?

                        $filter('orderBy')(filteredData, params.orderBy()) :

                        filteredData;

                    $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));

                    params.total(self.data.length);

                },

                $scope: $scope
            }
        );
    }])

    .controller('blogTable', ["ngTableParams", "$filter", "$scope", function(ngTableParams, $filter, $scope) {

        var self = this;

        var Blog = Parse.Object.extend("Blog");

        var blog = new Parse.Query(Blog);

        var init = function() {
            return blog.find({
                success: function (results) {
                    self.data = [];

                    angular.forEach(results, function (value) {
                        this.push({
                            id: value.id,
                            title: value.get("blogTitle"),
                            publishdate: value.get("createdAt"),
                            author: value.get("addedBy"),
                            comments: value.get("noOfComments"),
                            image: value.get("blogImage")
                        });
                    }, self.data);

                    console.log(self.data);
                },
                error: function (results, error) {
                    console.log(error);
                }
            });
        };

        init();

        $scope.$watch("filter.$", function () {
            self.tableParams.reload();
            self.tableParams.page(1);
        });

        self.tableParams = new ngTableParams(
            {
                page: 1,
                count: 10
            },
            {
                getData: function($defer, params) {

                    var filteredData = $filter('filter')(self.data, $scope.filter);

                    var orderedData = params.sorting() ?

                        $filter('orderBy')(filteredData, params.orderBy()) :

                        filteredData;

                    $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));

                    params.total(self.data.length);
                },

                $scope: $scope
            }
        );
    }])

    .controller('mytable', ["ngTableParams", "$filter", "$scope", "tableService", "missionsFactory", function(ngTableParams, $filter, $scope, tableService, missionsFactory) {
        //.controller('mytable', ["ngTableParams", "$filter", "$scope", "campaignFactory", "campaignService", "$ocLazyLoad", "tableService", function(ngTableParams, $filter, $scope, campaignFactory, campaignService, $ocLazyLoad, tableService) {
        var self = this;

        var Missions = Parse.Object.extend("Mission");

        var missions = new Parse.Query(Missions);

        var init = function() {
            return missions.find({
                success: function (results) {
                    self.data = [];

                    angular.forEach(results, function (value) {
                        this.push({
                            id: value.id,
                            name: value.get("name"),
                            startdate: value.get("startDate"),
                            enddate: value.get("endDate"),
                            location: value.get("location")
                        });
                    }, self.data);

                    //console.log(self.data);
                },
                error: function (results, error) {
                    console.log(error);
                }
            });
        };

        //self.run(init());
        init();
        //self.tableParams.getData();
        //
        //var data = self.pdata;
        //console.log("value of data " + datas);

        //self.data = [
        //    {
        //        id: 1000,
        //        name: "My Name",
        //        startdate: "12.12.2012",
        //        location: "Colombo"
        //    }
        //];

        //self.data = tableService.data;

        //self.data = missionsFactory.getData();

        //console.log(self.data);

        //missionsFactory.getData().then(function(data){
        //    self.gotdata = data;
        //    console.log(self.gotdata);
        //});
        //var data = self.gotdata;

        $scope.$watch("filter.$", function () {
            self.tableParams.reload();
            self.tableParams.page(1);
        });

        self.tableParams = new ngTableParams(
            {
                page: 1,
                count: 10
                //sorting: { id: "asc" }
            },   // table attributes
            //{dataset: self.data}            // table data
            {
                getData: function($defer, params) {

                    var filteredData = $filter('filter')(self.data, $scope.filter);

                    var orderedData = params.sorting() ?

                        $filter('orderBy')(filteredData, params.orderBy()) :

                        filteredData;

                    $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));

                    params.total(self.data.length);
                },

                $scope: $scope
            }
        );
    }])

    //.factory('missionsFactory', ["$q", function($q) {
    //    var self = this;
    //
    //    var Missions = Parse.Object.extend("Mission");
    //
    //
    //
    //    return {
    //        getData: function() {
    //            var defer = $q.defer();
    //
    //            var missions = new Parse.Query(Missions);
    //
    //            missions.find({
    //                success: function (results) {
    //                    data = [];
    //
    //                    angular.forEach(results, function (value) {
    //                        this.push({
    //                            id: value.id,
    //                            name: value.get("name"),
    //                            startdate: value.get("startDate"),
    //                            location: value.get("location")
    //                        });
    //                    }, data);
    //
    //                    //return data;
    //                    defer.resolve(results);
    //                    //defer.resolve(results.models);
    //                    //return results.models;
    //                },
    //                error: function (results, error) {
    //                    console.log(error);
    //                    defer.reject(error);
    //                }
    //            });
    //
    //            return defer.promise;
    //
    //            //return defer.promise;
    //        }
    //    };
    //
    //    //var query = new Parse.Query(Fahras);
    //    //query.equalTo("type", "Domain");
    //    //var myCollection = query.collection();
    //    //
    //    //return {
    //    //    fetchDomains: function(){
    //    //        var defer = $q.defer();
    //    //
    //    //        myCollection.fetch({
    //    //            success : function(results) {
    //    //                defer.resolve(results.models);
    //    //                return results.models;
    //    //            },
    //    //            error : function(aError) {
    //    //                defer.reject(aError);
    //    //            }
    //    //        });
    //    //
    //    //        return defer.promise;
    //    //
    //    //    }
    //    //}
    //}])

    //.controller('mytable', ["ngTableParams", "$filter", "$scope", function(ngTableParams, $filter, $scope) {
    //
    //    var self = this;
    //
    //    var Missions = Parse.Object.extend("Mission");
    //
    //    var missions = new Parse.Query(Missions);
    //
    //    var init = function() {
    //        missions.find({
    //            success: function (results) {
    //                self.data = [];
    //
    //                angular.forEach(results, function (value) {
    //                    this.push({
    //                        id: value.id,
    //                        name: value.get("name"),
    //                        startdate: value.get("startDate"),
    //                        location: value.get("location")
    //                    });
    //                }, self.data);
    //            },
    //            error: function (results, error) {
    //                console.log(error);
    //            }
    //        });
    //    };
    //
    //    init();
    //
    //    console.log(self.data);
    //
    //    $scope.$watch("filter.$", function () {
    //        self.tableParams.reload();
    //        self.tableParams.page(1);
    //    });
    //
    //    self.tableParams = new ngTableParams(
    //        {
    //            page: 1,
    //            count: 10
    //        },
    //        {
    //            getData: function($defer, params) {
    //
    //                var filteredData = $filter('filter')(self.data, $scope.filter);
    //
    //                var orderedData = params.sorting() ?
    //
    //                    $filter('orderBy')(filteredData, params.orderBy()) :
    //
    //                    filteredData;
    //
    //                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
    //
    //            },
    //
    //            $scope: $scope
    //        }
    //    );
    //}])
