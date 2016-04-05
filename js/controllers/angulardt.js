materialAdmin

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

    .controller('missionsTable', ["ngTableParams", "$filter","$location", "$scope","$rootScope","missionService",function(ngTableParams, $filter,$location,$scope,$rootScope,missionService) {

        var self = this;

        self.gocheckpoint = function(mission){
            var id = mission.id;
            var data = []
            $rootScope.missiondata = mission;
            console.log($scope.missiondata)
            $location.path('/tables/checkpoints');
            missionService.getcheckpoints($scope.missiondata).then(function(results){
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



        var Missions = Parse.Object.extend("Mission");

        var missions = new Parse.Query(Missions);

        var init = function() {
            return missions.find({
                success: function (results) {
                    self.data = [];

                    angular.forEach(results, function (value) {

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
                            location: value.get("location"),
                            //completed: ((value.get("acceptedByUserId")).length > 0 ? (value.get("acceptedByUserId")).length : 0) * 100 / value.get("submissionsAllowed"),
                            completed: (value.get("acceptedByUserId")).length * 100 / value.get("submissionsAllowed"),
                            //completed: (value.get("acceptedByUserId")).length,
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

    .controller('checkpointable', ["ngTableParams","$filter", "$scope", "missionService","$location", function(ngTableParams,$filter,$scope,missionService,$location) {
        //.controller('mytable', ["ngTableParams", "$filter", "$scope", "campaignFactory", "campaignService", "$ocLazyLoad", "tableService", function(ngTableParams, $filter, $scope, campaignFactory, campaignService, $ocLazyLoad, tableService) {
        var self = this;

        $scope.mission = [];
        $scope.client = {"Id":"","Name":""}
        $scope.missionMinUser = "";

        self.data = [];
        var init3 = function () {
            missionService.getcheckpoints($scope.missiondata).then(function(results){
                angular.forEach(results, function (d) {

                    self.data.push({
                        id: d.id,
                        type: d.get("checkpointType"),
                        desc: d.get("desc"),
                        shortDescription: d.get("shortDescription"),
                        qty: d.get("quantity"),
                        nextCheckpointArray:d.get("nextCheckpointArray"),
                        ratingMidnumber:d.get("rating_midNumber"),


                    });
                },self.data)

            })
        }
        init3();

        //
        //var init3 = function () {
        //    missionService.getcheckpoints($scope.missiondata).then(function(results){
        //        angular.forEach(results, function (d) {
        //            var type = d.get("checkpointType");
        //            self.data.push({
        //                id: d.id,
        //                type: d.get("checkpointType"),
        //                desc: d.get("desc"),
        //                shortDescription: d.get("shortDescription"),
        //                qty: d.get("quantity"),
        //                nextCheckpointArray:d.get("nextCheckpointArray"),
        //                subpathParent:sPath.id,
        //                ratingMidnumber:d.get("rating_midNumber"),
        //
        //            });
        //        },self.data)
        //
        //    })
        //}
        //init3();



        // cheanges
        self.cdata = [];
        self.type =[];
        self.usersays = function (w){
            self.userSayas = [];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ;
            missionService.usersays(w).then(function(results){
                console.log(results);
                angular.forEach(results, function (d) {
                    var type = (d.get("checkpointType"));
                    var checklist = d.get("checklist_optionArray");
                    if (type.id==="HJBdFD1p5f" ){
                        self.userSayas = [
                            {"show":"Yes","Value":"Yes","Type":"HJBdFD1p5f"},
                            {"show":"No","Value":"No","Type":"HJBdFD1p5f"}
                        ]
                    }else if(type.id==="m17T0wLzwl"){
                        self.userSayas = [
                            {"show":"1","Value":"1","Type":"m17T0wLzwl"},
                            {"show":"2","Value":"2","Type":"m17T0wLzwl"},
                            {"show":"3","Value":"3","Type":"m17T0wLzwl"},
                            {"show":"4","Value":"4","Type":"m17T0wLzwl"},
                            {"show":"5","Value":"5","Type":"m17T0wLzwl"},
                            {"show":"6","Value":"6","Type":"m17T0wLzwl"},
                            {"show":"7","Value":"7","Type":"m17T0wLzwl"},
                            {"show":"8","Value":"8","Type":"m17T0wLzwl"},
                            {"show":"9","Value":"9","Type":"m17T0wLzwl"},
                            {"show":"10","Value":"10","Type":"m17T0wLzwl"}
                        ]

                    }
                    else {
                        angular.forEach(checklist,function(d,k){
                            var item = {

                             "show":d,"Value":k,"Type":"mXPtoIRsI2"

                            }
                            self.userSayas.push(item)

                        })
                    }
                },self.userSayas)

            })
        }
        var init2 = function() {
            missionService.selectpath($scope.missiondata).then(function(results){
                console.log($scope.missiondata)
                angular.forEach(results, function (d) {
                        var checktype = d.get("checkpointType");
                        var nextCheckpointArray = d.get("nextCheckpointArray")


                        var gotType = checktype.fetch().then(function (c){
                            self.type.push({
                                       "name": c.get("name"),
                                        "id": c.id,

                                    })
                        },function(e){

                        });
                        //console.log(d.get("nextCheckpointArray"));
                    //var cpA = d.get("nextCheckpointArray");


                    if(nextCheckpointArray instanceof Array){
                        if(nextCheckpointArray[1]===null){
                            console.log('working')
                            nextCheckpointArray[1]
                            self.cdata.push({
                                id: d.id,
                                name: d.get("checkpointType"),
                                desc: d.get("desc"),
                                shortDescription: d.get("shortDescription"),
                                types: self.type,
                                prevCheckpoint: d.get("prevCheckpoint"),
                                nextCheckpointArray: d.get("nextCheckpointArray"),
                                qty: d.get("quantity")
                            });
                        }

                    }else if (!(nextCheckpointArray instanceof Array)){
                        self.cdata.push({
                            id: d.id,
                            name: d.get("checkpointType"),
                            desc: d.get("desc"),
                            shortDescription: d.get("shortDescription"),
                            types: self.type,
                            prevCheckpoint: d.get("prevCheckpoint"),
                            nextCheckpointArray: d.get("nextCheckpointArray"),
                            qty: d.get("quantity")
                        });

                    }







                },self.cdata)

            })
        };
        init2();
        //end change 1
        self.localpaths = [];
        var logic = function () {
            missionService.getAllogicalpath($scope.missiondata).then(function(results){
                angular.forEach(results, function (d) {
                    var sPath = d.get("subpathParent")
                    var spath = sPath.fetch();

                    self.localpaths.push({
                        id: d.id,
                        type: d.get("checkpointType"),
                        desc: d.get("desc"),
                        shortDescription: d.get("shortDescription"),
                        qty: d.get("quantity"),
                        nextCheckpointArray:d.get("nextCheckpointArray"),
                        subpathParent:sPath.id,
                        ratingMidnumber:d.get("rating_midNumber"),

                    });
                },self.localpaths)

            })
        }
        logic();



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