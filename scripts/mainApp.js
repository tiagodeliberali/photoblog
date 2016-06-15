var mainApp = angular.module('photoBlogApp', ['ezfb', 'backand', 'ngRoute'])

.config(function ($routeProvider) {

    $routeProvider

    .when('/', {
        headerType: 'flexslider',
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })

    .when('/post/:postId', {
        headerType: 'pagetitle',
        templateUrl: 'pages/post.html',
        controller: 'postController'
    });
})

.run(['$rootScope',  function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.headerType = current.$$route.headerType;

        if (current.params.postId) {
            $rootScope.headerValue = current.params.postId;
        }
    });
}])

.service('dataService', [function () {
    this.getBlogInfo = function () {
        var blogInfo = {
            title: 'Six Photo Project',
            description: 'A six photos theme project, inspired by LensWork.com',
            aboutMe: 'My name is Tiago Santos and I am an amateur photographer, specially pationated about people\'s portrait and urban photography.',
            pictureMe: 'https://scontent-gru.xx.fbcdn.net/v/t1.0-9/12644947_10153943869296474_2740697872058079782_n.jpg?oh=2c792d108c3b229d031a98b181869cc5&oe=57C266CA'
        };
        return blogInfo;
    }

    this.getPosts = function () {
        var posts = new Array();
        posts.push({
            id: 0,
            category: {
                id: 0,
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
            id: 0,
            name: 'Baby and children',
            description: 'Themes related to babies and children',
            posts: 1
        });

        categories.push({
            id: 1,
            name: 'Portraits',
            description: 'People and their worlds',
            posts: 0
        });

        categories.push({
            id: 2,
            name: 'Travel',
            description: 'Inspired by travels I did',
            posts: 0
        });

        categories.push({
            id: 3,
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

    $scope.getCategoryTitle = function (id) {
        return $scope.posts[id].category.name;
    }

    $scope.getCategoryUrl = function (id) {
        return '/#/category/' + id;
    }

    $scope.getPostUrl = function (id) {
        return '/#/post/' + id;
    }

    $scope.getHomeUrl = function () {
        return '/#/';
    }
}])

.controller('homeController', ['$scope', function ($scope) {
    
}])

.controller('postController', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.post = $scope.posts[$routeParams.postId];
}])