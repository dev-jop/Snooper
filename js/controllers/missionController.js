materialAdmin
    .controller('missionController', function($filter,  ngTableParams, tableService,$location) {
        var data = tableService.data;
       
        
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
    
    
         this.DatePicker1 = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                this.opened1 = true;

            };
            
        this.DatePicker2 = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                this.opened2 = true;

            }; 
            
         //Editable
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
    
    
    })