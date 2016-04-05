materialAdmin
    .controller('tableCtrl', function($filter,$location, $sce,$scope, ngTableParams,$rootScope, tableService,missionService) {
        var data = tableService.data;

        //Basic Example
        this.tableBasic = new ngTableParams({
            page: 1,            // show first page
            count: 10           // count per page
        }, {
            total: data.length, // length of data
            getData: function ($defer, params) {
                $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });

        //Sorting
        this.tableSorting = new ngTableParams({
            page: 1,            // show first page
            count: 10,           // count per page
            sorting: {
                name: 'asc'     // initial sorting
            }
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                // use build-in angular filter
                var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;

                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });

        this.getUser = function (user) {
            // use build-in angular filter
            console.log(user);
            this.userdata = user;
        };

        this.tryFunction = function(value) {
            this.gocheckpoint(value);
            $location.path('/tables/checkpoints');
        };
        this.gocheckpoint = function(mission){
            var id = mission.id;
            var data = []
            $rootScope.missiondata = mission;
            console.log($scope.missiondata)
            $location.path('/tables/checkpoints');
            missionService.getcheckpints($scope.missiondata).then(function(results){
                self.cdata = [];
                angular.forEach(results, function (d) {
                    data.push({
                        id: d.id,
                        type: d.get("checkpointType"),
                        shortDescription: d.get("shortDescription"),
                        desc: d.get("desc")
                    });

                },data)
                $scope.cdata = data;
                $rootScope.checkPoints = data;
                console.log(self.cdata)
            })


        }


        this.reviews = function(){
            $location.path('/tables/reviews');
        };

        this.addUser = function (){
            var data = {
                "fullName":this.fullName,
                "userLevel":this.userLevel,
                "Email":this.Email,
                "cEmail":this.cEmail,
                "password":this.password,
                "Profileimage":this.Profileimage
            };
            console.log(data);
        };

        //Filtering
        this.tableFilter = new ngTableParams({
            page: 1,            // show first page
            count: 10
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                // use build-in angular filter
                var orderedData = params.filter() ? $filter('filter')(data, params.filter()) : data;

                this.id = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                this.name = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                this.email = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                this.username = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                this.contact = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

                params.total(orderedData.length); // set total for recalc pagination
                $defer.resolve(this.id, this.name, this.email, this.username, this.contact);
            }
        });


        this.createMission = function (){
            var mission = {
                "missionName":this.missionName,
                "missionType":this.missionType,
                "missionLocation":this.missionLocation,
                "missionClient":this.missionClient,
                "missionSubmissionAllowed":this.missionSubmissionAllowed,
                "missionCompaign":this.missionCompaign,
                "missionReward":this.missionReward,
                "missionMinUser":this.missionMinUser,
                "missionStartDate":this.missionStartDate,
                "missionEndDate":this.missionEndDate,
                "missionLinkIntrest":this.missionLinkIntrest,
                "missionBasicexample":this.missionBasicexample,
                "missionTimeAllowed":this.missionTimeAllowed,
                "missionCost":this.missionCost
            };
            console.log(mission);
        };


        this.tableEdit = new ngTableParams({
            page: 1,            // show first page
            count: 10,          // count per page
            filter: {
                //name: 'M'       // initial filter
            },
            sorting: {
                //name: 'asc'     // initial sorting
            }
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                // use build-in angular filter
                var filteredData = params.filter() ?
                    $filter('filter')(data, params.filter()) :
                    data;
                var orderedData = params.sorting() ?
                    $filter('orderBy')(filteredData, params.orderBy()) :
                    data;
                params.total(orderedData.length); // set total for recalc pagination
                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });

        //Editable

        this.tableSorting = new ngTableParams({
            page: 1,            // show first page
            count: 10,           // count per page
            sorting: {
                name: 'asc'     // initial sorting
            }
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                // use build-in angular filter
                var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;

                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });
    })
