(function () {
    'use strict';

    angular
        .module('photoBlogApp')
        .run(appRun);

    appRun.$inject = ['$rootScope'];

    function appRun($rootScope) {
        $rootScope.$on('$routeChangeSuccess', RouteSuccess);
    }

    function RouteSuccess(event, current, previous) {
        $rootScope.headerType = current.$$route.headerType;

        if (current.params.postId) {
            $rootScope.headerValue = current.params.postId;
        }
    }
})();