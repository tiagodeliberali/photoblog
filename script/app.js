(function () {
    'use strict';

    angular
        .module('photoBlogApp', ['ezfb', 'backand', 'ngRoute', 'jkuri.gallery']);
})();
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
})();
(function () {
    'use strict';

    var rootScope;
        
    angular
        .module('photoBlogApp')
        .run(appRun);

    appRun.$inject = ['$rootScope'];
    
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
})();

(function () {
    'use strict';

    angular
        .module('photoBlogApp')
        .controller('homeController', homeController);

    homeController.$inject = ['dataService'];
    
    function homeController(dataService) {
        var vm = this;
        
        vm.posts = dataService.getPosts();
    }
})();
(function () {
    'use strict';

    angular
        .module('photoBlogApp')
        .controller('postController', postController);

    postController.$inject = ['$routeParams', 'dataService'];

    function postController($routeParams, dataService) {
        var postId = $routeParams.postId;

        var vm = this;

        vm.post = dataService.getPosts()[postId];
    }
})();
(function () {
    'use strict';

    angular
        .module('photoBlogApp')
        .controller('pageController', pageController);

    pageController.$inject = ['dataService'];
    
    function pageController(dataService) {
        var vm = this;

        vm.blog = dataService.getBlogInfo();
        vm.posts = dataService.getPosts();
        vm.categories = dataService.getCategories();

        vm.getCategoryTitle = getCategoryTitle;
        vm.getCategoryUrl = getCategoryUrl;
        vm.getPostUrl = getPostUrl;
        vm.getHomeUrl = getHomeUrl;

        function getCategoryTitle(id) {
            var categoryTitle = '<vazio>';
            
            if (id != undefined && vm.posts[id] != undefined) {
                 categoryTitle = vm.posts[id].category.name;
            }
            
            return categoryTitle;
        }

        function getCategoryUrl(id) {
            return '/#/category/' + id;
        }

        function getPostUrl(id) {
            return '/#/post/' + id;
        }

        function getHomeUrl() {
            return '/#/';
        }
    }
})();
(function () {
    'use strict';

    angular
        .module('photoBlogApp')
        .service('dataService', dataService);

    dataService.$inject = [];

    function dataService() {
        return {
            getBlogInfo: getBlogInfo,
            getPosts: getPosts,
            getCategories: getCategories
        };

        function getBlogInfo() {
            var blogInfo = {
                title: 'Six Photo Project',
                description: 'A six photos theme project, inspired by LensWork.com',
                aboutMe: 'My name is Tiago Santos and I am an amateur photographer, specially pationated about people\'s portrait and urban photography.',
                pictureMe: 'https://scontent-gru.xx.fbcdn.net/v/t1.0-9/12644947_10153943869296474_2740697872058079782_n.jpg?oh=2c792d108c3b229d031a98b181869cc5&oe=57C266CA'
            };

            return blogInfo;
        }

        function getPosts() {
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
                    url: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_550,w_1170/v1466538132/p001_alice_02.jpg',
                    thumb: 'http://res.cloudinary.com/drzxualok/image/upload/c_lfill,h_80,w_80/v1466538132/p001_alice_02.jpg',
                    description: 'Joy'
                },
                gallery: [
                    {
                        thumb: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_150/v1466538132/p001_alice_02.jpg',
                        img: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,w_2000/v1466538132/p001_alice_02.jpg',
                        description: 'Joy'
                    },
                    {
                        thumb: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_150/v1466538129/p001_alice_03.jpg',
                        img: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,w_2000/v1466538129/p001_alice_03.jpg',
                        description: 'Hurry'
                    },
                    {
                        thumb: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_150/v1466538125/p001_alice_07.jpg',
                        img: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,w_2000/v1466538125/p001_alice_07.jpg',
                        description: 'Fashion'
                    },
                    {
                        thumb: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_150/v1466538126/p001_alice_04.jpg',
                        img: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,w_2000/v1466538126/p001_alice_04.jpg',
                        description: 'Friendship'
                    },
                    {
                        thumb: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_150/v1466538127/p001_alice_05.jpg',
                        img: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,w_2000/v1466538127/p001_alice_05.jpg',
                        description: 'Happiness'
                    },
                    {
                        thumb: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_150/v1466538127/p001_alice_01.jpg',
                        img: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,w_2000/v1466538127/p001_alice_01.jpg',
                        description: 'Break'
                    }
                ]
            });

            return posts;
        }

        function getCategories() {
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
    }
})();