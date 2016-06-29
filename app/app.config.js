(function() {
    'use strict';

    angular
        .module('photoBlogApp')
        .config(appConfig);

    appConfig.$inject = ['$routeProvider', 'ezfbProvider'];

    function appConfig($routeProvider, ezfbProvider) {
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

        ezfbProvider.setLocale('pt_BR');
        ezfbProvider.setInitParams({
            appId: '1643932782590470',
            version: 'v2.6'
        });
    }
})();