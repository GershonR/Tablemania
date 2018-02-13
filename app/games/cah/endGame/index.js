define(['durandal/system', 'durandal/app', 'jquery', 'knockout'], function(system, app, $, ko) {
    var Game = function (gifts) {
        var self = this;

        self.activate = function () {
            console.log('activate grid');
        };

        self.canActivate = function () {
            console.log('canActivate start');
            return true;
        };

        self.canDeactivate = function () {
            return app.showMessage('Are you sure you want to leave?', 'Leaving', ['Yes', 'No']);
        };

        self.deactivate = function () {
            console.log('deactivate start');
        };
    };

    return new Game();
});