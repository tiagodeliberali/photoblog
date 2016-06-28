(function() {
    'use strict';

    angular
        .module('photoBlogApp')
        .config(appConfig)
        .config(facebookConfig);

    appConfig.$inject = ['$routeProvider', 'angularjs-facebook-sdk'];

    function appConfig($routeProvider) {
        $routeProvider

            .when('/', {
            headerType: 'flexslider',
            templateUrl: 'app/blog/home.html',
            controller: 'homeController',
            controllerAs: 'home'
        })

        .when('/post/:postId', {
            headerType: 'pagetitle',
            templateUrl: 'app/blog/post.html',
            controller: 'postController',
            controllerAs: 'post'
        });
    }

    function facebookConfig(facebookConfigProvider) {
        facebookConfigProvider.setAppId(1643932782590470);
        facebookConfigProvider.setLanguage('en-US');
        facebookConfigProvider.setDebug(true);

        // When autoInit is setted to false you need to initialize
        // the facebookConfig service manually inside a run block.
        facebookConfigProvider.autoInit(false);

        // Same: developers.facebook.com/docs/javascript/reference/FB.init/
        facebookConfigProvider.setOptions({
            status: true
        });
    }
})();