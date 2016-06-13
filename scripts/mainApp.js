var mainApp = angular.module('photoBlogApp', ['ezfb', 'backand', 'ngRoute'])

.controller('pageController', ['$scope', function ($scope) {
    var blogData = {
        title: 'Six Photo Project',
        description: 'A six photos theme project, inspired by LensWork.com',

    };

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

    $scope.blog = blogData;
    $scope.posts = posts;

}])
