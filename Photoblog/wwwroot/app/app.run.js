(function() {
    'use strict';

    var rootScope;
    var location;
    var service;

    angular
        .module('photoBlogApp')
        .run(appRun);

    appRun.$inject = ['$rootScope', '$location', 'dataService'];

    function appRun($rootScope, $location, dataService) {
        rootScope = $rootScope;
        location = $location;
        service = dataService;

        ga('create', 'UA-80122651-1', 'auto');

        rootScope.$on('$routeChangeSuccess', RouteSuccess);
    }

    function RouteSuccess(event, current, previous) {
        rootScope.headerType = current.$$route.headerType;

        if (ga !== undefined && location !== undefined && location.url !== undefined) {
            ga('send', 'pageview', { page: location.url() });
        }

        if (current.params.postId) {
            service.getPost(current.params.postId, function (result) {
                rootScope.headerValue = result.category.name;
            });
        }

        if (current.params.categoryId) {
            service.getCategory(current.params.categoryId, function (data) {
                rootScope.headerValue = data.name;
            });
        }
    }
})();