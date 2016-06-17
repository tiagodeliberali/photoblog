(function () {
    'use strict';

    angular
        .module('photoBlogApp')
        .config(appConfig);

    appConfig.$inject = ['$routeProvider'];

    function appConfig($routeProvider) {
        $routeProvider

            .when('/', {
            headerType: 'flexslider',
            templateUrl: 'pages/home.html',
            controller: 'homeController',
            controllerAs: 'home'
        })

        .when('/post/:postId', {
            headerType: 'pagetitle',
            templateUrl: 'pages/post.html',
            controller: 'postController',
            controllerAs: 'post'
        });
    }
})();