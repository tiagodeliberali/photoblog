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
            rootScope.headerValue = service.getPost(current.params.postId).category.name;
        }

        if (current.params.categoryId) {
            rootScope.headerValue = service.getCategories()[current.params.categoryId].name;
        }
    }
})();