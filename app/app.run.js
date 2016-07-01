(function() {
    'use strict';

    var rootScope;

    angular
        .module('photoBlogApp')
        .run(appRun);

    appRun.$inject = ['$rootScope'];

    function appRun($rootScope) {
        rootScope = $rootScope;

        ga('create', 'UA-80122651-1', 'auto');

        rootScope.$on('$routeChangeSuccess', RouteSuccess);
    }

    function RouteSuccess(event, current, previous) {
        rootScope.headerType = current.$$route.headerType;

        ga('send', 'pageview', { page: current.params });

        if (current.params.postId) {
            rootScope.headerValue = current.params.postId;
        }
    }
})();