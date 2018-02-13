define(['plugins/router', 'knockout'], function(router, ko) {
    var childRouter = router.createChildRouter()
        .makeRelative({
            moduleId:'categories',
            fromParent:true
        }).map([
            { route: 'singleplayer',        moduleId: 'singleplayer/index',     title: 'Singleplayer Games',        type: 'intro',      nav: true },
            { route: 'multiplayer',         moduleId: 'multiplayer/index',      title: 'Multiplayer Games',         type: 'intro',      nav: true },
            { route: 'strategy',            moduleId: 'strategy/index',         title: 'Strategy Games',            type: 'intro',      nav: true },
        ]).buildNavigationModel();

    return {
        router: childRouter,
        introSamples: ko.computed(function() {
            return ko.utils.arrayFilter(childRouter.navigationModel(), function(route) {
                return route.type == 'intro';
            });
        }),
        detailedSamples: ko.computed(function() {
            return ko.utils.arrayFilter(childRouter.navigationModel(), function(route) {
                return route.type == 'detailed';
            });
        })
    };
});
