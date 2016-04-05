materialAdmin
    .controller('userCtrl', function($filter, $sce, ngTableParams, $scope,tableService,$location) {
        var data = tableService.data;
        var self = this;
        
        self.addUser = function (){



            var mission = {
                "fullName":self.fullName,
                "userLevel":self.userLevel,
                "Email":self.Email,
                "cEmail":self.cEmail,
                "password":self.password,
                "Profileimage":self.Profileimage
            };
            console.log(mission);
        };
    
        self.getUser = function (user){
            var data = tableService.data;
            self.forEach(data, function(u){
                if(u.id===user){
                    self.user = u;
                }
               
            });
            console.log(u);
        };
        
       
        
    
         //Editable
        self.tableEdit = new ngTableParams({
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
    
    
    })