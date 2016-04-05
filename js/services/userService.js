/**
 * Created by nizar on 3/11/16.
 */
materialAdmin
     .service('userServices', [function(){
     	var self  = this;



     	//this.userdata = $resource("data/user.json");
        self.getusers = function() {
            var users = Parse.Object.extend("User");
            var users = new Parse.Query(users);
            return users.find({
                success: function (results) {
                    $scope.usersdata = results;
                   // console.log(results);
                },
                error: function (results, error) {
                    console.log(error);
                }
            });
            return users
        }

         self.getusersById = function() {
             var users = Parse.Object.extend("User");
             var users = new Parse.Query(users);

             return users.find({
                 success: function (results) {
                     // console.log(results);


                 },
                 error: function (results, error) {
                     console.log(error);
                 }
             });
             return users
         }




         self.createUser = function (item) {
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
    }])
     
                                        
    
