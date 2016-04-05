materialAdmin

    // =========================================================================
    // WEATHER WIDGET
    // =========================================================================

    .directive('weatherWidget', function(){
        return {
            restrict: 'A',
            link: function(scope, element) {
                $.simpleWeather({
                    location: 'Austin, TX',
                    woeid: '',
                    unit: 'f',
                    success: function(weather) {
                        html = '<div class="weather-status">'+weather.temp+'&deg;'+weather.units.temp+'</div>';
                        html += '<ul class="weather-info"><li>'+weather.city+', '+weather.region+'</li>';
                        html += '<li class="currently">'+weather.currently+'</li></ul>';
                        html += '<div class="weather-icon wi-'+weather.code+'"></div>';
                        html += '<div class="dash-widget-footer"><div class="weather-list tomorrow">';
                        html += '<span class="weather-list-icon wi-'+weather.forecast[2].code+'"></span><span>'+weather.forecast[1].high+'/'+weather.forecast[1].low+'</span><span>'+weather.forecast[1].text+'</span>';
                        html += '</div>';
                        html += '<div class="weather-list after-tomorrow">';
                        html += '<span class="weather-list-icon wi-'+weather.forecast[2].code+'"></span><span>'+weather.forecast[2].high+'/'+weather.forecast[2].low+'</span><span>'+weather.forecast[2].text+'</span>';
                        html += '</div></div>';
                        $("#weather-widget").html(html);
                    },
                    error: function(error) {
                        $("#weather-widget").html('<p>'+error+'</p>');
                    }
                });
            }
        }
        
    })



    // =========================================================================
    // SWEATALERT
    // =========================================================================

    //Basic
    .directive('swalBasic', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal("Here's a message!");
                });
            }
        }
    })
    
    //A title with a text under
    .directive('swalText', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal("Here's a message!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, lobortis purus sed, pharetra felis")

                });
            }
        }
    })

    //A title with a text under Rizan
    .directive('swalCreateMission', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal({
                        //title: "Add/Edit Checkpoint",
                        //text: "Fill in the information below to create a checkpoint. Press the 'Add Checkpoint' button once your are done. All fields are mandatory.",
                        //formFields: [
                        //    { id: 'type', placeholder:'Mission Type' },
                        //    { id: 'quantity' },
                        //    { id: 'description', placeholder:'Start typing...'}
                        //],
                        //html: "<form ng-controller='sweetFormCtrl as ctrl' ng-submit='ctrl.submit()'> <p> Fill in the information below to create a checkpoint. Press the 'Add Checkpoint' button once your are done. All fields are mandatory. </p> <br> <label for='email'>Email address:</label> <input type='text' class='form-control' ng-model='ctrl.username'> </form>",
                        html: "<h2>Add/Edit Checkpoint</h2>" +
                            "<p>Fill in the information below to create a checkpoint. Press the 'Add Checkpoint' button once your are done. All fields are mandatory.</p>" +
                            "<form ng-app='mymod' ng-controller='MainCtrl as ctrl'>" +
                            "<input type='text' ng-model='ctrl.username'/>" +
                            "<input type='password' ng-model='ctrl.password'/>" +
                            "<button ng-click='ctrl.submit()'>Submit</button> </form>",
                        //showCancelButton: true,
                        //confirmButtonText: "Save",
                        //closeOnConfirm: false,
                        //closeOnCancel: false
                        showCancelButton: false,
                        showConfirmButton: false
                    }, function(isConfirm){
                        if (isConfirm) {
                            swal("Success!", "Data saved successfully", "success");
                        } else {
                            swal("Cancelled", "Data not saved", "error");
                        }
                    });

                });
            }
        }
    })

    //Success Message
    .directive('swalSuccess', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal("Good job!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, lobortis purus sed, pharetra felis", "success")

                });
            }
        }
    })

    //Success Message for Form Save
    .directive('swalSuccessForm', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal("Success!", "Your data was saved successfully!", "success")

                });
            }
        }
    })

    //Cancel Message for Form Save
    .directive('swalCancelForm', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal("Done!", "Your data was saved successfully!", "success")

                });
            }
        }
    })

    //Warning Message for form
    .directive('swalWarningForm', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal({
                        title: "Are you sure?",
                        text: "Your changes will not be saved!",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Yes, close it!",
                        closeOnConfirm: false
                    }, function(){
                        //echo ("<span data-dismiss='modal'></span>");
                        $('#myModal').modal('hide');
                        swal("Done!", "Your data was not saved.", "success");
                    });
                });
            }
        }
    })

    //Warning Message
    .directive('swalWarningDeletPath', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal({   
                        title: "Are you sure?",   
                        text: "You will not be able to recover this Logical Path!",
                        type: "warning",   
                        showCancelButton: true,   
                        confirmButtonColor: "#DD6B55",   
                        confirmButtonText: "Yes, delete it!",   
                        closeOnConfirm: false 
                    }, function(){
                        var rPath = scope.key.split('=')
                        var p = rPath[0];
                        var Checkpoint = Parse.Object.extend("Checkpoint");
                        var checkpoint = new Parse.Query(Checkpoint);
                        console.log(p);

                        var subpathParent = {
                            "__type":"Pointer",
                            className:"Checkpoint",
                            objectId:p
                        }
                        checkpoint.equalTo("subpathParent",subpathParent);



                        checkpoint.find({
                            success: function (d) {
                                console.log(d);

                                swal("Deleted!", "Your Logical Path has been deleted.", "success");

                            }

                        })


                    });
                });
            }
        }
    })

    .directive('swalWarningDeletCheckPoint', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal({
                        title: "Are you sure?",
                        text: "You will not be able to recover this Checkpoint!",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Yes, delete it!",
                        closeOnConfirm: false
                    }, function(){
                        var cp = scope.w.id
                        var Checkpoint = Parse.Object.extend("Checkpoint");
                        var checkpoint = new Parse.Query(Checkpoint);
                        var subpathParent = {
                            "__type":"Pointer",
                            className:"Checkpoint",
                            objectId:cp
                        }
                        console.log(cp);
                        checkpoint.equalTo("subpathParent",subpathParent);


                        checkpoint.count({
                            success: function (d) {
                                    console.log(d);
                                if(d>0){
                                    swal("Warning!", "You Can't delete Checkpoints which has Logical Paths.", "success");
                                }
                                else{
                                    var Check = Parse.Object.extend("Checkpoint");
                                    var check = new Parse.Query(Check);
                                    check.get(cp,{
                                        success: function (c) {
                                            console.log(c);
                                            console.log(scope.w);
                                            for(var i = scope.w.length - 1; i >= 0; i--){
                                                if(scope.w[i].id){
                                                    console.log('k')
                                                    scope.w.splice(i,1);
                                                }
                                            }

                                           // c.destroy({});
                                        }
                                    })
                                    swal("Deleted!", "Your Checkpoint has been deleted.", "success");

                                }
                            },error: function (e) {
                                console.log(e);
                            }

                        })


                    });
                });
            }
        }
    })

    .directive('swalWarningDeletMission', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal({
                        title: "Are you sure?",
                        text: "You will not be able to recover this Mission!",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Yes, delete it!",
                        closeOnConfirm: false
                    }, function(){
                        var ms = scope.w.id
                        var Mission = Parse.Object.extend("Mission");
                        var mission = new Parse.Query(Mission);
                        //var idx = scope.indexOf(scope);
                        //scope.$apply(function () {
                        //    scope.splice(idx, 1);
                        //});

                        //mission.get({})
                        mission.get(ms,{
                            success:function(d){
                                console.log(d);
                                d.destroy({});
                                swal("Deleted!", "Your Mission has been deleted.", "success");

                            }
                        })


                    });
                });
            }
        }
    })

    //Parameter
    .directive('swalParams', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal({   
                        title: "Are you sure?",   
                        text: "You will not be able to recover this imaginary file!",   
                        type: "warning",   
                        showCancelButton: true,   
                        confirmButtonColor: "#DD6B55",   
                        confirmButtonText: "Yes, delete it!",   
                        cancelButtonText: "No, cancel plx!",   
                        closeOnConfirm: false,   
                        closeOnCancel: false 
                    }, function(isConfirm){   
                        if (isConfirm) {     
                            swal("Deleted!", "Your imaginary file has been deleted.", "success");   
                        } else {     
                            swal("Cancelled", "Your imaginary file is safe :)", "error");   
                        } 
                    });
                });
            }
        }
    })

    //Custom Image
    .directive('swalImg', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal({   
                        title: "Sweet!",   
                        text: "Here's a custom image.",   
                        imageUrl: "img/thumbs-up.png" 
                    });
                });
            }
        }
    })
            
    //Auto Close Timer
    .directive('swalTimer', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                     swal({   
                        title: "Auto close alert!",   
                        text: "I will close in 2 seconds.",   
                        timer: 2000,   
                        showConfirmButton: false 
                    });
                });
            }
        }
    })

    

    // =========================================================================
    // GROWL
    // =========================================================================

    .directive('growlDemo', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                function notify(from, align, icon, type, animIn, animOut){
                    $.growl({
                        icon: icon,
                        title: ' Bootstrap Growl ',
                        message: 'Turning standard Bootstrap alerts into awesome notifications',
                        url: ''
                    },{
                            element: 'body',
                            type: type,
                            allow_dismiss: true,
                            placement: {
                                    from: from,
                                    align: align
                            },
                            offset: {
                                x: 20,
                                y: 85
                            },
                            spacing: 10,
                            z_index: 1031,
                            delay: 2500,
                            timer: 1000,
                            url_target: '_blank',
                            mouse_over: false,
                            animate: {
                                    enter: animIn,
                                    exit: animOut
                            },
                            icon_type: 'class',
                            template: '<div data-growl="container" class="alert" role="alert">' +
                                            '<button type="button" class="close" data-growl="dismiss">' +
                                                '<span aria-hidden="true">&times;</span>' +
                                                '<span class="sr-only">Close</span>' +
                                            '</button>' +
                                            '<span data-growl="icon"></span>' +
                                            '<span data-growl="title"></span>' +
                                            '<span data-growl="message"></span>' +
                                            '<a href="#" data-growl="url"></a>' +
                                        '</div>'
                    });
                }
                
                element.on('click', function(e){
                    e.preventDefault();
                    
                    var nFrom = attrs.from;
                    var nAlign = attrs.align;
                    var nIcons = attrs.icon;
                    var nType = attrs.type;
                    var nAnimIn = attrs.animationIn;
                    var nAnimOut = attrs.animationOut;

                    notify(nFrom, nAlign, nIcons, nType, nAnimIn, nAnimOut);
            
                })
                
                
            }
        }
    })

