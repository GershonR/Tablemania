define(['durandal/app', 'jquery'], function (app) {
    var ctor = function () {
        this.displayName = 'Welcome to the Durandal Starter Kit!';
        this.description = 'Durandal is a cross-device, cross-platform client framework written in JavaScript and designed to make Single Page Applications (SPAs) easy to create and maintain.';
        this.features = [
            'Clean MV* Architecture',
            'JS & HTML Modularity',
            'Simple App Lifecycle',
            'Eventing, Modals, Message Boxes, etc.',
            'Navigation & Screen State Management',
            'Consistent Async Programming w/ Promises',
            'App Bundling and Optimization',
            'Use any Backend Technology',
            'Built on top of jQuery, Knockout & RequireJS',
            'Integrates with other libraries such as SammyJS & Bootstrap',
            'Make jQuery & Bootstrap widgets templatable and bindable (or build your own widgets).'
        ];

        

        $(".register").css("visibility", "hidden");
        $(".register").hide();
        $("#loginFailureNotice").hide();

        $("#signupBtn").click(function(){
            $("#signupBtn").prop("disabled", true);
            $("#confirmBtn").attr({value: "Sign up"});
            $("#signupBtn").css({"background-color":"#9ce5be", "outline":"0"});
            $("#confirmBtn").animate({top: "+195px"});
            $("#username").attr("placeholder", "username");
            $(".login").animate({top: "+146px"}, showRegisterFields);
            $(".login").animate({top: "+0px"}, 1);
            $("#confirmBtn").animate({top: "+0px"}, 1);
            registerMode = true;
        });
    
        $("#confirmBtn").click(function(){
          if(registerMode == false) {
            if($("#username").val() == "admin" && $("#password").val() == "password") {
              window.location.href = "loggedin.html"; //placeholder for actual logged in page
            //alert("login successful");
            } else {
              //show "login failed" message
              //alert("login failed");
              $("#loginFailureNotice").show();
            }  
          }
        });
        
    };

    //Note: This module exports a function. That means that you, the developer, can create multiple instances.
    //This pattern is also recognized by Durandal so that it can create instances on demand.
    //If you wish to create a singleton, you should export an object instead of a function.
    //See the "flickr" module for an example of object export.


    return ctor;
});
