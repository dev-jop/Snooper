materialAdmin

    .controller('createblog', [function() {
        var self = this;

        //self.title = "";
        //self.postcontent = "";
        //self.image = "";

        self.submit = function() {
            // Setup image to upload
            var fileUploadControl = $("#picture")[0];

            if (fileUploadControl.files.length > 0) {
                var file = fileUploadControl.files[0];
                var name = file.name;

                var parseFile = new Parse.File(name, file);

                parseFile.save().then(function () {
                }, function (error) {
                });
            }

            // User added the data
            var addeduser = {
                "__type": 'Pointer',
                "className": "MissionType",
                objectId: self.useradded
            };

            // Create new parse object
            var Blog = Parse.Object.extend("Blog");

            var blog = new Blog();

            // Add the data to the object
            blog.set("blogTitle", self.title);
            blog.set("blogContent", self.blogcontent);
            blog.set("blogImage", parseFile);
            //blog.set("addedBy",addeduser);

            // Save the data to the parse object
            blog.save({
                success: function (results) {
                    console.log(results);

                    self.title="";
                    self.postcontent = "";
                    self.image = null;
                },
                error: function (results, error) {
                    alert("Failed to save with Error " + error);
                }
            });

            //var data = {
            //    title: self.title,
            //    postcontent: self.postcontent,
            //    image: self.image
            //};
            //
            //console.log("The submitted data\n" + "title: " + data.title + "\npost: " + data.postcontent + "\nimage: " + data.image);
        }
    }])

    .controller("createuser" , [function(){
        var self = this;

        self.submit =function (){
            // Set Profile picture
            var fileUploadControl = $("#picture")[0];
            if (fileUploadControl.files.length > 0) {
                var file = fileUploadControl.files[0];
                var name = file.name;

                var parseFile = new Parse.File(name, file);
                console.log(name);
                parseFile.save().then(function () {
                }, function (error) {
                });
            }

            var user = Parse.Object.extend("User");
            var User = new user();

            var userLevel = {
                "__type":"Pointer",
                "className":"UserLevel",
                "ObjectId":self.userLevel
            }

            console.log(userLevel);


            User.set("name",self.fullName);
            User.set("username",self.Email);
            User.set("email",self.Email);
            User.set("userLevel",userLevel);
            User.set("password",self.password);
            User.set("profilePhoto",parseFile);
            console.log(User);
            User.save(
                {
                    success: function (results) {
                        console.log(results);
                        self.fullName="";
                        self.Email = "";
                        self.userLevel = "";
                        self.password ="";
                    },
                    error: function (results) {
                        console.log(results);

                    }
                });

        }


    }])

    .controller("createmission", [function() {
        var self = this;

        self.options1 = null;
        self.details1 = '';

        self.timeallowed = 1;

        self.type = "Store-Check";
        self.client = "choose client";
        //self.campaign = "choose a mission type";

        var Campaigns = Parse.Object.extend("Campaign");

        var campaigns = new Parse.Query(Campaigns);

        var init = function() {
            campaigns.find({
                success: function (results) {
                    self.camps = [];

                    angular.forEach(results, function (value) {
                        this.push({
                            id: value.id,
                            name: value.get("name")
                        });
                    }, self.camps);

                    console.log(self.camps);
                },
                error: function (results, error) {
                    console.log(error);
                }
            });
        };

        init();

        //self.campaign = self.camps[0].name;

        //self.campOptions = self.camps;

        self.submit = function() {
            // Set Images to Upload
            var fileUploadControl = $("#picture")[0];
            if (fileUploadControl.files.length > 0) {
                var file = fileUploadControl.files[0];
                var name = file.name;

                var parseFile = new Parse.File(name, file);

                parseFile.save().then(function () {
                }, function (error) {
                });
            }
            // Initiate Mission Object
            var mission = Parse.Object.extend("Mission");
            var Mission = new mission();
            console.log(self.image);

            // GeoLocation
            var geocodeObj = {
                "__type": "GeoPoint",
                "latitude":self.details1.geometry.location.lat(),
                "longitude": self.details1.geometry.location.lng()
            };

            // Set MissionType ObjectId as ForingKey
            var type = {
                "__type": 'Pointer',
                "className": "MissionType",
                objectId: self.type
            };

            // Set Campaign ObjectId as ForingKey
            var campaignId = {
                "__type": 'Pointer',
                "className": "Campaign",
                objectId: self.campaign
            };

            // Set Like Interest Pointer
            var likeInterest = {
                "__type":'Pointer',
                "likeInterest":self.likesandinterests

            }

            //var timeAllowed = self.timeallowed*60;

            // console.log(parse('{self.type}'));
            Mission.set("name",self.name);
            Mission.set("missionType",type);
            Mission.set("campaign",campaignId);
            //console.log("Camp Id ");
            //console.log(valueOf(self.campaign));
            //console.log(parseInt(self.campaign));
            Mission.set("minUserLevel",self.minuserlevel);
            Mission.set("startDate",self.startdate);
            Mission.set("endDate",self.enddate);
            Mission.set("timeAllowed",self.timeallowed*60);
            Mission.set("missionReward",self.reward);
            Mission.set("desc",self.description);
            Mission.set("missionCost",self.cost);
            Mission.set("location",self.location);
            Mission.set("locationGeoPoint",geocodeObj);
            Mission.set("submissionsAllowed",self.submissions);
            Mission.set("image",parseFile);
            //Mission.set("likeInterest",likeInterest);
            Mission.save(
                {
                    success: function (results) {
                        console.log(results);
                        self.name="";
                        self.type = "Store-Check";
                        self.campaign = self.camps[0].name;
                        self.minuserlevel = "";
                        self.startdate ="";
                        self.enddate = "";
                        self.timeAllowed = "";
                        self.reward = "";
                        self.description = "";
                        self.cost = "";
                        self.location = "";
                        self.submissions = "";
                        self.likesandinterests = "";
                        self.image = "";


                    },
                    error: function (results, error) {
                        console.log("Mission Save Error " + error);

                    }
                });
            console.log(Mission)
        };
    }])

    //.factory('TypeSelection', [function () {
    //    return {seltypetemp: ""};
    //}])


    //.controller('createcheckpoint1', [function(TypeSelection) {
    .controller('createcheckpoint1', ['$scope',function($scope) {
        var self = this;
        self.submit = function() {
            var Checkpoint = Parse.Object.extend("Checkpoint");
            var checkpoint = new Checkpoint();



            var PreviusCheckPoint =
                {"__type":"Pointer",
                    "className":"Checkpoint",
                    "objectId":$scope.Previus
                }



            var checkpointType = {
                __type:"Pointer",
                className:"CheckpointType",
                objectId:$scope.checkpointType.key
            }



            var mission = {
                __type:"Pointer",
                className:"Mission",
                objectId:$scope.missiondata.id
            }


            checkpoint.set("checkpointType",checkpointType);
            checkpoint.set("mission",mission);
            checkpoint.set("desc",self.description);
            checkpoint.set("shortDescription",self.shortDescription);
            checkpoint.set("reviewerInstructios",self.reviewerInstructios);
            if (typeof $scope.Previus !== "undefined") {
                checkpoint.set("prevCheckpoint", PreviusCheckPoint);
            }
            if(typeof $scope.subpathParent !=="undefined"){

                var subpathparent = {
                    "__type":"Pointer",
                    className:"Checkpoint",
                    objectId:$scope.subpathParent
                }
                checkpoint.set("subpathParent",subpathparent);
            }
            checkpoint.save(
                {
                    success: function (results) {
                        console.log(results);
                        $scope.Previus = "";
                        self.nextcheck = results;
                        if (typeof $scope.mainPathinSub !== "undefined"){
                            var SubcheckPoint = Parse.Object.extend("Checkpoint");
                            var subcheckPoint = new Parse.Query(SubcheckPoint);

                            subcheckPoint.get($scope.mainPathinSub,{
                                success: function (r) {
                                    r.set("nextCheckpointArray",[self.nextcheck,null])
                                    r.save();
                                    console.log(r)
                                },error:function (error) {
                                    console.log(error)
                                }
                            })

                        }

                        if (typeof $scope.ifThisThen !== "undefined" && typeof $scope.subpathParent !== "undefined" ){
                            var SubcheckPoint = Parse.Object.extend("Checkpoint");
                            var subcheckPoint = new Parse.Query(SubcheckPoint);
                            subcheckPoint.get($scope.subpathParent,{
                                success: function (r) {
                                    if($scope.checkPointType==="HJBdFD1p5f"){ // yes/No rule
                                        console.log('got An answer');
                                        if($scope.ifThisThen==="Yes"){
                                            var answer = true;
                                        }else{
                                            var answer = false;
                                        }
                                        console.log($scope.ifThisThen)
                                        r.set("yesno_Answer",answer)
                                        r.set("nextCheckpointArray",[null,self.nextcheck])
                                        r.save();
                                    }
                                    if ($scope.checkPointType==="m17T0wLzwl"){ // rating rule
                                        r.set("rating_midNumber",parseInt($scope.ifThisThen))
                                        console.log(self.nextcheck)
                                        r.set("nextCheckpointArray",[null,self.nextcheck])
                                        r.save();
                                    }
                                    if($scope.checkPointType ==="mXPtoIRsI2"){ // option rule

                                        console.log('type')
                                        console.log($scope.ifThisThen)

                                        r.set("checklist_positionForSubPath", parseInt($scope.ifThisThen))
                                        r.set("nextCheckpointArray",[null,self.nextcheck])
                                        r.save();
                                    }
                                    //

                                    console.log(r)
                                },error:function (error) {
                                    console.log(error)
                                }
                            })

                        }
                    },
                    error: function (results) {
                        console.log(results);

                    }
                });



            var data = {
                //type: self.TypeSelection,
                type: self.type,
                value: self.options ,
                description: self.description
            };

            console.log("The submitted data\n" + "type: " + data.type + "\nvalue: " + data.value + "\ndescription: " + data.description);
        };
    }])

    //.controller("createcheckpoint2", [function(TypeSelection) {
    .controller("createcheckpoint2", ['$scope',function($scope) {
        var self = this;

        self.submit = function() {
            var Checkpoint = Parse.Object.extend("Checkpoint");
            var checkpoint = new Checkpoint();

            var PreviusCheckPoint =
            {"__type":"Pointer",
                "className":"Checkpoint",
                "objectId":$scope.Previus
            }

            var checkpointType = {
                "__type":"Pointer",
                className:"CheckpointType",
                objectId:$scope.checkpointType.key
            }

            var mission = {
                __type:"Pointer",
                className:"Mission",
                objectId:$scope.missiondata.id
            }


            checkpoint.set("checkpointType",checkpointType);
            checkpoint.set("mission",mission);
            checkpoint.set("desc",self.description);
            checkpoint.set("shortDescription",self.shortDescription);
            checkpoint.set("reviewerInstructions",self.reviewerInstructions);
            checkpoint.set("checklist_optionArray",self.multiple);
            if (typeof $scope.Previus !== "undefined") {
                checkpoint.set("prevCheckpoint", PreviusCheckPoint);
            }
            if(typeof $scope.subpathParent !=="undefined"){

                var subpathparent = {
                    "__type":"Pointer",
                    className:"Checkpoint",
                    objectId:$scope.subpathParent
                }
                checkpoint.set("subpathParent",subpathparent);
            }

            checkpoint.save(
                {
                    success: function (results) {
                        console.log(results);
                        $scope.Previus = "";
                        if (typeof $scope.mainPathinSub !== "undefined"){
                            var SubcheckPoint = Parse.Object.extend("Checkpoint");
                            var subcheckPoint = new Parse.Query(SubcheckPoint);

                            subcheckPoint.get($scope.mainPathinSub,{
                                success: function (r) {
                                    r.set("nextCheckpointArray",[self.nextcheck,null])
                                    r.save();
                                    console.log(r)
                                },error:function (error) {
                                    console.log(error)
                                }
                            })

                        }

                        if (typeof $scope.ifThisThen !== "undefined" && typeof $scope.subpathParent !== "undefined" ){
                            var SubcheckPoint = Parse.Object.extend("Checkpoint");
                            var subcheckPoint = new Parse.Query(SubcheckPoint);
                            subcheckPoint.get($scope.subpathParent,{
                                success: function (r) {
                                    if($scope.checkPointType==="HJBdFD1p5f"){ // yes/No rule
                                        console.log('got An answer');
                                        if($scope.ifThisThen==="Yes"){
                                            var answer = true;
                                        }else{
                                            var answer = false;
                                        }
                                        console.log($scope.ifThisThen)
                                        r.set("yesno_Answer",answer)
                                        r.set("nextCheckpointArray",[null,self.nextcheck])
                                        r.save();
                                    }
                                    if ($scope.checkPointType==="m17T0wLzwl"){ // rating rule
                                        r.set("rating_midNumber",parseInt($scope.ifThisThen))
                                        console.log(self.nextcheck)
                                        r.set("nextCheckpointArray",[null,self.nextcheck])
                                        r.save();
                                    }
                                    if($scope.checkPointType ==="mXPtoIRsI2"){ // option rule

                                        console.log('type')
                                        console.log($scope.ifThisThen)

                                        r.set("checklist_positionForSubPath", parseInt($scope.ifThisThen))
                                        r.set("nextCheckpointArray",[null,self.nextcheck])
                                        r.save();
                                    }
                                    //

                                    console.log(r)
                                },error:function (error) {
                                    console.log(error)
                                }
                            })

                        }

                    },
                    error: function (results) {
                        console.log(results);

                    }
                });



            var data = {
                //type: self.TypeSelection,
                type: self.type,
                description: self.description,
                multiple: self.multiple,
                tags: self.tags
            };

            console.log("The submitted data\n" + "type: " + data.type + "\ndescription: " + data.description + "\nmultiple: " + data.multiple + "\ntags: " + data.tags);
        };
    }])

    //.controller("createcheckpoint3", [function(TypeSelection) {
    .controller("createcheckpoint3", ['$scope',function($scope) {
        var self = this;

        //self.TypeSelection = TypeSelection;

        self.submit = function() {
            var Checkpoint = Parse.Object.extend("Checkpoint");
            var checkpoint = new Checkpoint();

            var PreviusCheckPoint =
            {"__type":"Pointer",
                "className":"Checkpoint",
                "objectId":$scope.Previus
            }

            var checkpointType = {
                "__type":"Pointer",
                className:"CheckpointType",
                objectId:$scope.checkpointType.key
            }

            var mission = {
                __type:"Pointer",
                className:"Mission",
                objectId:$scope.missiondata.id
            }


            checkpoint.set("checkpointType",checkpointType);
            checkpoint.set("mission",mission);
            checkpoint.set("desc",self.description);
            checkpoint.set("shortDescription",self.shortDescription);
            checkpoint.set("reviewerInstructions",self.reviewerInstructions);
            if (typeof $scope.Previus !== "undefined") {
                checkpoint.set("prevCheckpoint", PreviusCheckPoint);
            }

            if(typeof $scope.subpathParent !=="undefined"){

                var subpathparent = {
                    "__type":"Pointer",
                    className:"Checkpoint",
                    objectId:$scope.subpathParent
                }

                checkpoint.set("subpathParent",subpathparent);

            }

            checkpoint.save(
                {
                    success: function (results) {
                        console.log(results);
                        self.nextcheck = results;
                        if (typeof $scope.mainPathinSub !== "undefined"){
                            var SubcheckPoint = Parse.Object.extend("Checkpoint");
                            var subcheckPoint = new Parse.Query(SubcheckPoint);

                            subcheckPoint.get($scope.mainPathinSub,{
                                success: function (r) {
                                    r.set("nextCheckpointArray",[self.nextcheck,null])
                                    r.save();
                                    console.log(r)
                                },error:function (error) {
                                    console.log(error)
                                }
                            })

                        }

                        if (typeof $scope.ifThisThen !== "undefined" && typeof $scope.subpathParent !== "undefined" ){
                            var SubcheckPoint = Parse.Object.extend("Checkpoint");
                            var subcheckPoint = new Parse.Query(SubcheckPoint);
                            subcheckPoint.get($scope.subpathParent,{
                                success: function (r) {
                                    if($scope.checkPointType==="HJBdFD1p5f"){ // yes/No rule
                                        console.log('got An answer');
                                        if($scope.ifThisThen==="Yes"){
                                            var answer = true;
                                        }else{
                                            var answer = false;
                                        }
                                        console.log($scope.ifThisThen)
                                        r.set("yesno_Answer",answer)
                                        r.set("nextCheckpointArray",[null,self.nextcheck])
                                        r.save();
                                    }
                                    if ($scope.checkPointType==="m17T0wLzwl"){ // rating rule
                                        r.set("rating_midNumber",parseInt($scope.ifThisThen))
                                        console.log(self.nextcheck)
                                        r.set("nextCheckpointArray",[null,self.nextcheck])
                                        r.save();
                                    }
                                    if($scope.checkPointType ==="mXPtoIRsI2"){ // option rule

                                        console.log('type')
                                        console.log($scope.ifThisThen)

                                        r.set("checklist_positionForSubPath", parseInt($scope.ifThisThen))
                                        r.set("nextCheckpointArray",[null,self.nextcheck])
                                        r.save();
                                    }
                                    console.log(r)
                                },error:function (error) {
                                    console.log(error)
                                }
                            })

                        }
                    },
                    error: function (results) {
                        console.log(results);

                    }
                });

            console.log("The submitted data\n" + "type: " + data.type + "\ndescription: " + data.description);
        };
    }])

    //.controller("createcheckpoint4", [function(TypeSelection) {
    .controller("createcheckpoint4", ['$scope','$rootScope',function($scope,$rootScope) {
        var self = this;
        self.position = [];
        self.details1 ="";
      //}





        //self.TypeSelection = TypeSelection
        $scope.getpos = function(event) {

            self.lat = event.latLng.lat();
            self.lng = event.latLng.lng();


            console.log(self.lat)
            self.location = {
                lat:self.lat,
                lng:self.lng
            };

            console.log(self.location)

        };

        self.details1 = "";



        self.mark = function(){
            var lat = self.details1.geometry.location.lat();
            var lng = self.details1.geometry.location.lng();
            self.marker = [lat,lng]
        };

        self.submit = function() {
            var Checkpoint = Parse.Object.extend("Checkpoint");
            var checkpoint = new Checkpoint();
            var PreviusCheckPoint =
            {"__type":"Pointer",
                "className":"Checkpoint",
                "objectId":$scope.Previus
            }


            //var geocodeObj = {
            //    "__type": "GeoPoint",
            //    "latitude":self.details1.geometry.location.lat(),
            //    "longitude": self.details1.geometry.location.lng()
            //}

            var checkpointType = {
                "__type":"Pointer",
                className:"CheckpointType",
                objectId:$scope.checkpointType.key
            }
            console.log(checkpointType);

            var mission = {
                __type:"Pointer",
                className:"Mission",
                objectId:$scope.missiondata.id
            }


            console.log(mission);
            var geocodeObj = {
                __type:"Array",
                className:"Checkpoint",
                checklist_optionArray:self.location

            }

            checkpoint.set("checkpointType",checkpointType);
            checkpoint.set("checklist_optionArray",[self.lat,self.lng]);
            checkpoint.set("mission",mission);
            checkpoint.set("desc",self.description);
            checkpoint.set("shortDescription",self.shortDescription);
            checkpoint.set("reviewerInstructios",self.reviewerInstructios);
            if (typeof $scope.Previus !== "undefined") {
                checkpoint.set("prevCheckpoint", PreviusCheckPoint);
            }
            if(typeof $scope.subpathParent !=="undefined"){

                var subpathparent = {
                    "__type":"Pointer",
                    className:"Checkpoint",
                    objectId:$scope.subpathParent
                }
                checkpoint.set("subpathParent",subpathparent);
            }


            console.log(checkpoint);
            checkpoint.save(
                {
                    success: function (results) {
                        console.log(results);
                        $scope.Previus = "";
                        self.nextcheck = results;
                        if (typeof $scope.mainPathinSub !== "undefined"){
                            var SubcheckPoint = Parse.Object.extend("Checkpoint");
                            var subcheckPoint = new Parse.Query(SubcheckPoint);

                            subcheckPoint.get($scope.mainPathinSub,{
                                success: function (r) {
                                    r.set("nextCheckpointArray",[self.nextcheck,null])
                                    r.save();
                                    console.log(r)
                                },error:function (error) {
                                    console.log(error)
                                }
                            })

                        }

                        if (typeof $scope.ifThisThen !== "undefined" && typeof $scope.subpathParent !== "undefined" ){
                            var SubcheckPoint = Parse.Object.extend("Checkpoint");
                            var subcheckPoint = new Parse.Query(SubcheckPoint);
                            subcheckPoint.get($scope.subpathParent,{
                                success: function (r) {
                                    if($scope.checkPointType==="HJBdFD1p5f"){ // yes/No rule
                                        console.log('got An answer');
                                        if($scope.ifThisThen==="Yes"){
                                            var answer = true;
                                        }else{
                                            var answer = false;
                                        }
                                        console.log($scope.ifThisThen)
                                        r.set("yesno_Answer",answer)
                                        r.set("nextCheckpointArray",[null,self.nextcheck])
                                        r.save();
                                    }
                                    if ($scope.checkPointType==="m17T0wLzwl"){ // rating rule
                                        r.set("rating_midNumber",parseInt($scope.ifThisThen))
                                        console.log(self.nextcheck)
                                        r.set("nextCheckpointArray",[null,self.nextcheck])
                                        r.save();
                                    }
                                    if($scope.checkPointType ==="mXPtoIRsI2"){ // option rule

                                        console.log('type')
                                        console.log($scope.ifThisThen)

                                        r.set("checklist_positionForSubPath", parseInt($scope.ifThisThen))
                                        r.set("nextCheckpointArray",[null,self.nextcheck])
                                        r.save();
                                    }
                                    //

                                    console.log(r)
                                },error:function (error) {
                                    console.log(error)
                                }
                            })

                        }


                    },
                    error: function (results) {
                        console.log(results);

                    }
                });



            var data = {
                //type: self.TypeSelection,
                type: self.seltypetemp,
                description: self.description,
                location: self.location
            };

            console.log("The submitted data\n" + "type: " + data.type + "\ndescription: " + data.description + "\nlocation: " + data.location);
        };
    }])


    //.controller('myselection', [function(TypeSelection) {
    .controller('myselection', ['$rootScope',function($rootScope) {
        var self = this;

        //self.TypeSelection = TypeSelection;
        //refthis.checktype = "views/checkpoints/checkpoint1.html";
        //refthis.changetype = function(value) {
        //    refthis.checktype = value;
        //    //refthis.checktype = "views/checkpoints/checkpoint2.html";
        //};
        //var temp = 1;
        //var prev = 0;
        self.options = [

            {"label" : "YesNo", "value" : 3,"key":"HJBdFD1p5f"},
            {"label" : "Video", "value" : 3 ,"key":"EGQzQkuIjR"},
            {"label" : "Text", "value" : 3 ,"key":"xzfincyx8z"},
            {"label" : "Rating", "value" : 2 ,"key":"m17T0wLzwl"},
            {"label" : "Checklist", "value" : 1 ,"key":"mXPtoIRsI2"},
            {"label" : "Location", "value" : 4 ,"key":"j4qTMcngbK"},
            {"label" : "Photo", "value" : 2 ,"key":"MUReLLcG5N"},
            {"label" : "Audio", "value" : 3 ,"key":"4DOIlWCkGF"}

            //{"label" : "First Type", "value" : 1, "url" : "views/checkpoints/checkpoint1.html"},
            //{"label" : "Second Type", "value" : 2, "url" : "views/checkpoints/checkpoint2.html"},
            //{"label" : "Third Type", "value" : 3, "url" : "views/checkpoints/checkpoint3.html"},
            //{"label" : "Fourth Type", "value" : 4, "url" : "views/checkpoints/checkpoint4.html"}

            //{"label" : "First Type", "url" : "views/checkpoints/checkpoint1.html"},
            //{"label" : "Second Type", "url" : "views/checkpoints/checkpoint2.html"},
            //{"label" : "Third Type", "url" : "views/checkpoints/checkpoint3.html"},
            //{"label" : "Fourth Type", "url" : "views/checkpoints/checkpoint4.html"}
        ];
        //this.seltypetemp = self.options[3].url;
        //self.options = ["First Type", "Second Type", "Third Type", "Fourth Type"];

        self.myselfunc = function(value) {

            if (!value) {
                $rootScope.checkpointType = value;
                return "views/checkpoints/checkpoint1.html";
            } else if (value.value == 2 ) {
                console.log((value.key))
                $rootScope.checkpointType = value;
            //} else if (value == 1) {
            //if (value.value == 1) {
            //if (value == 1) {
                //refthis.checktype = "views/checkpoints/checkpoint2.html";

                //prev = 1;
                return "views/checkpoints/checkpoint1.html";
            } else if (value.value == 1) {
                console.log((value.key))
                $rootScope.checkpointType = value;
            //} else if (value == 2) {
                //refthis.checktype = "views/checkpoints/checkpoint2.html";
                console.log(value + "In 2");
                //prev = 2;
                return "views/checkpoints/checkpoint2.html";
            } else if (value.value == 3) {
                console.log((value.key))
                $rootScope.checkpointType = value;
            //} else if (value == 3) {
                //refthis.checktype = "views/checkpoints/checkpoint3.html";
                console.log(value + "In 3");
                //prev = 3;
                return "views/checkpoints/checkpoint3.html";
            } else if (value.value == 4) {
                console.log((value.key))
                $rootScope.checkpointType = value;
            //} else if (value == 4) {
                //refthis.checktype = "views/checkpoints/checkpoint4.html";
                console.log(value + "In 4");
                //prev = 4;
                console.log((value.key))
                return "views/checkpoints/checkpoint4.html";
                $rootScope.checkpointType = value;
            }
            else {
                //if (prev == 2) {
                //    console.log("value of prev " + prev);
                //    return "views/checkpoints/checkpoint2.html";
                //} else if (prev == 3) {
                //    console.log("value of prev " + prev);
                //    return "views/checkpoints/checkpoint3.html";
                //} else if (prev == 4) {
                //    console.log("value of prev " + prev);
                //    return "views/checkpoints/checkpoint4.html";
                //} else if (prev == 1) {
                //    console.log("value of prev " + prev);
                //    return "views/checkpoints/checkpoint1.html";
                //}
                $rootScope.checkpointType = value;
                console.log("oh no, In else\n" + value);
                return "views/checkpoints/checkpoint1.html";
            }
            //console.log("value of temp " + temp + "\n" + value + "\nIn else");
        }
    }])

    .controller('selectpath', ['missionService','$scope','$rootScope',function(missionService,$scope,$rootScope) {
        var self = this;


        self.removeLogicalPath = function(path){
            var rPath = path.split('=')
            var p = rPath[0];
            var Checkpoint = Parse.Object.extend("Checkpoint");
            var checkpoint = new Checkpoint();

            console.log(p);


          //  checkpoint.equalTo("subpathParent",path)

        }


        self.localpaths = [];

        self.Mpath = function(last){
            angular.forEach(last, function (d) {
                var type = d.Value.split('|')
                var userAnswer = type[0];
                $rootScope.mainPathinSub = d.id;
                $rootScope.subpathParent = d.subpathParent;
                $rootScope.ifThisThen = userAnswer;
                $rootScope.checkPointType = d.Type;
            })
           console.log('Im parent:' + $scope.subpathParent +'\n' +'im the value:' + $scope.ifThisThen + '\n' + 'Im the type:' + $scope.checkPointType  +'\n' + 'Im in mai Path:' + $scope.mainPathinSub )
        }

        var logic = function () {


            missionService.getAllogicalpath($scope.missiondata).then(function(results){


                $scope.i = -1
                $scope.uservalueArray = []
                angular.forEach(results, function (d) {
                    $scope.i += 1
                    var sPath = d.get("subpathParent")
                    var spath = sPath.fetch();
                    var checktype = d.get("checkpointType");

                    var gotType = checktype.fetch().then(function (c){
                        self.type = c.get("name")
                    },function(e){

                    });
                    //self.yesno_Answer = sp.get("yesno_Answer");
                    //self.checkListposion = sp.get("checklist_positionForSubPath");
                    //self.ratingmidNumber = sp.get("rating_midNumber");
                    var subpathParent = d.get("subpathParent");
                    var path =""
                    self.yesno_Answer = "";
                    self.checkListposion = "";
                    self.ratingmidNumber = "";

                    var uservalue = subpathParent.fetch({

                    })

                    if (typeof subpathParent.get("yesno_Answer")  !== "undefined" ){
                        if (subpathParent.get("yesno_Answer") == true) {
                            $scope.uservalueArray.push("Yes")
                            self.userValue = "NO"


                        } else {
                            $scope.uservalueArray.push("No")
                            self.userValue ="YES"

                        }
                    }

                    if(typeof subpathParent.get("rating_midNumber") !== "undefined"){
                        self.userValue = subpathParent.get("rating_midNumber")
                        $scope.uservalueArray.push(self.userValue )
                    }

                    if(typeof subpathParent.get("checklist_positionForSubPath") !== "undefined"){

                        var checkoption =  subpathParent.get("checklist_positionForSubPath")
                        var data = subpathParent.get("checklist_optionArray");
                        self.userValue = data[checkoption]
                        $scope.uservalueArray.push(self.userValue)

                    }




                    console.log(uservalue)
                    var ratingmidNumber = d.get("rating_midNumber");
                    self.nextCheckpointArray = d.get("nextCheckpointArray");
                    var checkListposion = d.get("checklist_positionForSubPath");

                    self.localpaths.push({
                        id: d.id,
                        type: self.type,
                        desc: d.get("desc"),
                        shortDescription: d.get("shortDescription"),
                        qty: d.get("quantity"),
                        nextCheckpointArray:d.get("nextCheckpointArray"),
                        subpathParent:sPath.id,
                        ratingMidnumber:d.get("rating_midNumber"),
                        show:sPath.id + '=' +self.userValue ,
                        Value:''

                    });
                },self.localpaths)

            })
        }
        logic();


        self.submit = function() {
            var type = self.userssay.split('|')
            var cType = type[1];
            var userAnswer = type[0];
             var userSays = {
                 "show":self.tocheck + '=' + userAnswer,
                 "subpathParent":self.tocheck,
                 "Value":self.userssay,
                 "Type":cType


             }
            self.localpaths.push(userSays)

        }






    }])

    .controller('getsupport', [function() {
        var self = this;

        self.notify = false;

        self.submit = function() {
            var data = {
                subject: self.subject,
                notify: self.notify
            };

            // nullify data on submit
            self.subject = "";
            self.notify = false;

            console.log("The submitted data\n" + "subject: " + data.subject + "\nnotify: " + data.notify);
        }
    }])
