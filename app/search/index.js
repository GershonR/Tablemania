define(['plugins/router', 'knockout'], function(router, ko) {
var childRouter = router
         .createChildRouter()
         .makeRelative({ moduleId: 'search', fromParent: true, dynamicHash: ':id' })
        .map([
            { route: ['search',''], moduleId: 'index/search', title: 'search', nav: true, hash:'#search' }
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