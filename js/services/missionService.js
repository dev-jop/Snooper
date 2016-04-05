/**
 * Created by nizar on 3/11/16.
 */
materialAdmin
    .service('missionService', [function(){
        var self  = this;


        //this.userdata = $resource("data/user.json");
        self.getmissions = function() {

            var Mission = Parse.Object.extend("Mission");
            var mission = new Parse.Query(Mission);

            return mission.find({
                success: function (results) {
                    console.log(results);

                },
                error: function (results, error) {
                    console.log(error);
                }
            });
        }

        self.getcheck = function() {

            var Checkpoint = Parse.Object.extend("Checkpoint");
            var checkpoint = new Parse.Query(Checkpoint);

            return checkpoint.find({
                success: function (results) {
                    console.log(results);

                },
                error: function (results, error) {
                    console.log(error);
                }
            });
        }

        self.getcheckpoints = function(mission) {
            var mid = mission.id;
            var Checkpoint = Parse.Object.extend("Checkpoint");
            var checkpoint = new Parse.Query(Checkpoint);
            checkpoint.equalTo("mission", {
                __type: "Pointer",
                className: "Mission",
                objectId: mid
            });

            //checkpoint.equalTo("subpathParent","undefined");
            checkpoint.doesNotExist("subpathParent");


            return checkpoint.find({
                success: function (results) {
                    console.log(results);

                },
                error: function (results) {
                    console.log(error);
                }
            });
        }

        self.getAllogicalpath = function(mission) {
            var mid = mission.id;
            var Checkpoint = Parse.Object.extend("Checkpoint");
            var checkpoint = new Parse.Query(Checkpoint);
            checkpoint.equalTo("mission", {
                __type: "Pointer",
                className: "Mission",
                objectId: mid
            });
            checkpoint.exists("subpathParent");



            return checkpoint.find({
                success: function (results) {
                    console.log(results);

                },
                error: function (results) {
                    console.log(error);
                }
            });
        }

        self.usersays = function(cp) {
            console.log(cp);
            var mid = cp;
            var Checkpoint = Parse.Object.extend("Checkpoint");
            var checkpoint = new Parse.Query(Checkpoint);
            checkpoint.equalTo("objectId",mid)
            return checkpoint.find({
                success: function (results) {
                    console.log(results);


                },
                error: function (results, error) {
                    console.log(error);
                }
            });
        }

        self.selectpath = function(mission) {
            console.log(mission.id);
            console.log(mission);
            var mid = mission.id;
            var checkpoint = Parse.Object.extend("Checkpoint");
            var q1 = new Parse.Query(checkpoint);
            var cp = new Parse.Query(checkpoint);
            cp.find({
                success: function (results) {

                },
                error: function (results, error) {
                }
            });


            var cid = ("mission", {
                __type: "Pointer",
                className: "Mission",
                objectId: mid
            });
            q1.equalTo("checkpointType", {
                __type: "Pointer",
                className: "CheckpointType",
                objectId: "HJBdFD1p5f"
            })

            q1.equalTo("mission", {
                __type: "Pointer",
                className: "Mission",
                objectId:mid
            })
            q1.doesNotExist("subpathParent");
            //q1.doesNotExist("nextCheckpointArray",cp)
            //q1.equalTo("nextCheckpointArray",1,null)
            var q2 = new Parse.Query(checkpoint);
            q2.equalTo("checkpointType", {
                __type: "Pointer",
                className: "CheckpointType",
                objectId: "m17T0wLzwl"
            })

            q2.equalTo("mission", {
                __type: "Pointer",
                className: "Mission",
                objectId:mid
            })

            q2.doesNotExist("subpathParent");
           // q2.doesNotExist("nextCheckpointArray",cp)

            //q2.equalTo("nextCheckpointArray",1,null)

            var q3 = new Parse.Query(checkpoint);
            q3.equalTo("checkpointType", {
                __type: "Pointer",
                className: "CheckpointType",
                objectId: "mXPtoIRsI2"
            })
            q3.equalTo("mission", {
                __type: "Pointer",
                className: "Mission",
                objectId:mid
            })
            //q3.doesNotExist("nextCheckpointArray",cp)
            //q3.equalTo("nextCheckpointArray",1,[null])
            q3.doesNotExist("subpathParent");



            var compquary = Parse.Query.or(q1,q2,q3);
            return compquary.find({
                success: function (results) {
                },
                error: function (results, error) {
                }
            });
        }



        self.createMission = function (item) {
            console.log(item);
            item.save(
                {
                    success: function (results) {
                        console.log(results);
                    },
                    error: function (results) {
                        alert("Failed to update item: " + results.message)
                    }
                });
        }

        self.removeMission = function (item) {

            item.destroy(
                {
                    success: function (results) {
                        console.log(results);
                    },
                    error: function (results) {
                        alert("Failed to delete item: " + results.message)
                    }
                });
        }


    }])
     
                                        
    
