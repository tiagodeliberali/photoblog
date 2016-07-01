(function() {
    'use strict';

    var rootScope;
    var location;

    angular
        .module('photoBlogApp')
        .run(appRun);

    appRun.$inject = ['$rootScope', '$location'];

    function appRun($rootScope, $location) {
        rootScope = $rootScope;
        location = $location;

        ga('create', 'UA-80122651-1', 'auto');

        rootScope.$on('$routeChangeSuccess', RouteSuccess);
    }

    function RouteSuccess(event, current, previous) {
        rootScope.headerType = current.$$route.headerType;

        if (ga !== undefined && location !== undefined && location.url !== undefined) {
            ga('send', 'pageview', { page: location.url() });
        }

        if (current.params.postId) {
            rootScope.headerValue = current.params.postId;
        }
    }
})();