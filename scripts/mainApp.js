var mainApp = angular.module('photoBlogApp', ['ezfb', 'backand', 'ngRoute'])

.config(function ($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })

    .when('/post/:postId', {
        templateUrl: 'pages/post.html',
        controller: 'postController'
    })

    .when('/login', {
        templateUrl: 'pages/login.html',
        controller: 'mainController'
    })

    .when('/start', {
        templateUrl: 'pages/start.html',
        controller: 'mainController'
    })

    .when('/result', {
        templateUrl: 'pages/result.html',
        controller: 'resultController'
    })

    .when('/test/:testId', {
        templateUrl: 'pages/test.html',
        controller: 'testController'
    })

})

.service('dataService', [function () {
    this.getBlogInfo = function () {
        var blogInfo = {
            title: 'Six Photo Project',
            description: 'A six photos theme project, inspired by LensWork.com',
            aboutMe: 'My name is <strong>Tiago Santos</strong> and I am an amateur photographer, specially pationated about people\'s portrait and urban photography.',
            pictureMe: 'https://scontent-gru.xx.fbcdn.net/v/t1.0-9/12644947_10153943869296474_2740697872058079782_n.jpg?oh=2c792d108c3b229d031a98b181869cc5&oe=57C266CA'
        };
        return blogInfo;
    }

    this.getPosts = function () {
        var posts = new Array();
        posts.push({
            id: 1,
            category: {
                id: 1,
                name: 'Baby and children',
                description: 'Themes related to babies and children'
            },
            title: 'Alice´s world',
            description: 'An overview about important thing in the world of Alice',
            date: new Date(2016, 6, 13),
            image: {
                url: 'https://drscdn.500px.org/photo/153246471/q%3D80_h%3D450/648e96cf4f0f7383270ea9c40f4abe42',
                description: 'Alice focused on the game'
            }
        });
        return posts;
    }

    this.getCategories = function () {
        var categories = new Array();

        categories.push({
            id: 1,
            name: 'Baby and children',
            description: 'Themes related to babies and children',
            posts: 1
        });

        categories.push({
            id: 2,
            name: 'Portraits',
            description: 'People and their worlds',
            posts: 0
        });

        categories.push({
            id: 3,
            name: 'Travel',
            description: 'Inspired by travels I did',
            posts: 0
        });

        categories.push({
            id: 4,
            name: 'Cityscape',
            description: 'Day by day exploration of SP',
            posts: 0
        });
        
        return categories;
    }
}])

.controller('mainController', ['$rootScope', '$scope', 'dataService', function ($rootScope, $scope, dataService) {
    $scope.blog = dataService.getBlogInfo();
    $scope.posts = dataService.getPosts();
    $scope.categories = dataService.getCategories();

    $scope.showHeader = function (headerType) {
        return $rootScope.headerType = headerType;
    }
}])

.controller('homeController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $rootScope.headerType = 'flexslider';
}])

.controller('postController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $rootScope.headerType = 'pagetitle';

}])