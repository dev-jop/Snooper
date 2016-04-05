materialAdmin

    .controller('blogSelect', [function() {
        var self = this;

        self.loadPage = "views/blogs/table.html";

        self.changeLoad = function(value) {
            if (value == 1) {
                self.loadPage = "views/blogs/table.html";
            } else if (value == 2) {
                self.loadPage = "views/blogs/create.html";
            }
        }
    }])

    .controller('blogControl', ["$location", "$rootScope", function($location, $rootScope) {
        var self = this;

        self.viewpost = function(blog){
            //self.thepost = blog;

            //var init = function () {
            var BlogPost = Parse.Object.extend("Blog");

            var query = new Parse.Query(BlogPost);

            query.equalTo("objectId", blog);

            query.find().then(function (result) {
                self.blogList = [];
                //promise.resolve(result);
                self.blogList.push(result[0].get("blogTitle"));

                $rootScope.myArr = self.blogList;
                console.log("The result blog array ");
                console.log(self.blogList);
                //self.checkO = result;
                $location.path('/tables/blogpost');
                //console.log(self.checkO);
            }, function (error) {
                //promise.error(error);
                console.log("The error object ");
                console.log(error);
            });

            //$location.path('/tables/blogpost');

                //self.blogObj = query.find({
                //    success: function (result) {
                //        //alert("Successfully retrieved " + result.length + " scores.");
                //        // Do something with the returned Parse.Object values
                //        //return {
                //        //    title: result.get("blogTitle"),
                //        //    image: result.get("blogImage"),
                //        //    content: result.get("blogContent")
                //        //};
                //        //console.log("The result of the blog object from id " + blog);
                //        //console.log(result);
                //
                //        //return result;
                //    },
                //    error: function (error) {
                //        alert("Error: " + error.code + " " + error.message);
                //    }
                //}).then(function () {
                //    $location.path('/tables/blogpost');
                //});
            //};
            //init();

            //console.log("The blog object ");
            //console.log(self.blogObj);

            //$location.path('/tables/blogpost');
        };
    }])