(function() {
    'use strict';

    var rootScope;

    angular
        .module('photoBlogApp')
        .run(appRun);

    appRun.$inject = ['$rootScope'];

    function appRun($rootScope) {
        rootScope = $rootScope;
        //location = $location;
        //window = $window;

        //window.ga('create', 'UA-80122651-1', 'auto');

        rootScope.$on('$routeChangeSuccess', RouteSuccess);
    }

    function RouteSuccess(event, current, previous) {
        rootScope.headerType = current.$$route.headerType;

        //window.ga('send', 'pageview', { page: location.url() });

        if (current.params.postId) {
            rootScope.headerValue = current.params.postId;
        }
    }
})();