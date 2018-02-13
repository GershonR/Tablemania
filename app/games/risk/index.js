define(['plugins/router', 'knockout'], function(router, ko) {
    var childRouter = router.createChildRouter()
        .makeRelative({
            moduleId:'games/risk',
            fromParent:true
        }).map([
			{ route: 'prevGames', moduleId: 'prevGames/index', title: 'Previous Games', type: 'intro', nav: true },
			{ route: 'viewParty', moduleId: 'viewParty/index', title: 'View Party', type: 'intro', nav: true },
			{ route: 'rules', moduleId: 'gameRules/index', title: 'View Rules', type: 'intro', nav: true },
            { route: ['', 'gameInfo'], moduleId: 'gameInfo/index', title: 'Game Info', type: 'intro', nav: true },
			{ route: 'start', moduleId: 'startGame/index', title: 'Play Game', type: 'intro', nav: true },
			{ route: 'gameOver', moduleId: 'endGame/index', title: 'Game Over', type: 'intro', nav: false }
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
