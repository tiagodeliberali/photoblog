(function() {
    'use strict';

    angular
        .module('photoBlogApp')
        .config(appConfig);

    appConfig.$inject = ['$routeProvider'];

    function appConfig($routeProvider) {
        $routeProvider

        .when('/', {
            headerType: 'flexslider',
            templateUrl: 'app/blog/home.html',
            controller: 'homeController',
            controllerAs: 'home'
        })

        .when('/post/:postId', {
            headerType: 'none',
            templateUrl: 'app/blog/post.html',
            controller: 'postController',
            controllerAs: 'post'
        })

        .when('/category/:categoryId', {
            headerType: 'pagetitle',
            templateUrl: 'app/blog/category.html',
            controller: 'categoryController',
            controllerAs: 'category'
        });
    }
})();