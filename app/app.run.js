(function() {
    'use strict';

    var rootScope;

    angular
        .module('photoBlogApp')
        .run(appRun)
        .run(facebookInit);

    appRun.$inject = ['$rootScope', 'angularjs-facebook-sdk'];

    function appRun($rootScope) {
        rootScope = $rootScope;

        rootScope.$on('$routeChangeSuccess', RouteSuccess);
    }

    function RouteSuccess(event, current, previous) {
        rootScope.headerType = current.$$route.headerType;

        if (current.params.postId) {
            rootScope.headerValue = current.params.postId;
        }
    }

    function facebookInit(facebookConfig) {
        facebookConfig.init().then(function() {
            console.log('Facebook SDK is loaded.');
        });
    }
})();