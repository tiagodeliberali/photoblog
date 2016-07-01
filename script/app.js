(function () {
    'use strict';

    angular
        .module('photoBlogApp', ['ngRoute', 'jkuri.gallery', 'ezfb', 'pascalprecht.translate']);
})();
(function() {
    'use strict';

    var rootScope;
    var location;

    angular
        .module('photoBlogApp')
        .run(appRun);

    appRun.$inject = ['$rootScope', '$location'];

    function appRun($rootScope, $location) {
        rootScope = $rootScope;
        location = $location;

        ga('create', 'UA-80122651-1', 'auto');

        rootScope.$on('$routeChangeSuccess', RouteSuccess);
    }

    function RouteSuccess(event, current, previous) {
        rootScope.headerType = current.$$route.headerType;

        if (ga !== undefined && location !== undefined) {
            ga('send', 'pageview', { page: location.href });
        }

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

    postController.$inject = ['$routeParams', 'dataService', 'urlService'];

    function postController($routeParams, dataService, urlService) {
        var postId = $routeParams.postId;

        var vm = this;

        vm.post = dataService.getPosts()[postId];
        vm.gallery = getGallery();
        vm.getCurrentUrl = urlService.getCurrentUrl;

        function getGallery() {
            var gallery = new Array();

            for (var i in vm.post.images) {
                gallery.push({
                    thumb: urlService.getGalleryThumb(vm.post.images[i].img),
                    img: urlService.getGalleryImage(vm.post.images[i].img),
                    description: vm.post.images[i].description
                });
            }

            return gallery;
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('photoBlogApp')
        .config(appConfig);

    appConfig.$inject = ['ezfbProvider'];

    function appConfig(ezfbProvider) {
        ezfbProvider.setLocale('pt_BR');

        ezfbProvider.setInitParams({
            appId: '1643932782590470',
            version: 'v2.6'
        });
    }
})();
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
            headerType: 'pagetitle',
            templateUrl: 'app/blog/post.html',
            controller: 'postController',
            controllerAs: 'post'
        });
    }
})();
(function() {
    'use strict';

    angular
        .module('photoBlogApp')
        .config(appConfig);

    appConfig.$inject = ['$translateProvider'];

    function appConfig($translateProvider) {
        $translateProvider
            .translations('en', getEN())
            .translations('pt', getPT())
            .uniformLanguageTag('bcp47')
            .registerAvailableLanguageKeys(['en', 'pt'], {
                'en*': 'en',
                'pt*': 'pt'
            })
            .determinePreferredLanguage()
            .fallbackLanguage('en');


        function getEN() {
            return {
                BLOGTITLE: 'Six Photo Project',
                BLOGDESCRIPTION: 'A six photos theme project, inspired by LensWork.com',
                ABOUTME: 'About Me',
                ABOUTMEDESCRIPTION: 'My name is Tiago Santos and I am an amateur photographer, specially pationated about people\'s portrait and urban photography.',
                CATEGORIES: 'Categories',
                FOLLOWME: 'Follow Me',
                RECENTPOSTS: 'Recent Posts',
                SEEPHOTOS: 'See Photos',
                POSTEDON: 'Posted on',
                SHARETHIS: 'Share this',
            };
        };

        function getPT() {
            return {
                BLOGTITLE: 'Projeto Seis Fotos',
                BLOGDESCRIPTION: 'Um projeto de temas em seis fotos, inspirado por LensWork.com',
                ABOUTME: 'Sobre',
                ABOUTMEDESCRIPTION: 'Meu nome é Tiago Santos e sou fotógrafo amador, apaixonado por retratos e fotografia urbana.',
                CATEGORIES: 'Categorias',
                FOLLOWME: 'Siga-me',
                RECENTPOSTS: 'Posts Recentes',
                SEEPHOTOS: 'Ver Fotos',
                POSTEDON: 'Postado em',
                SHARETHIS: 'Compartilhe',
            };
        };
    }
})();
(function () {
    'use strict';

    /**
     * @desc order directive that is specific to the order module at a company named Acme
     * @example <div acme-order-calendar-range></div>
     */
    angular
        .module('photoBlogApp')
        .directive('photoblogAboutme', photoblogAboutme);

    function photoblogAboutme() {
        var directive = {
            templateUrl: '/app/directives/aboutme.directive.html',
            restrict: 'EA'
        };

        return directive;
    }
})();
(function () {
    'use strict';

    /**
     * @desc order directive that is specific to the order module at a company named Acme
     * @example <div acme-order-calendar-range></div>
     */
    angular
        .module('photoBlogApp')
        .directive('photoblogCategories', photoblogCategories);

    function photoblogCategories() {
        var directive = {
            templateUrl: '/app/directives/categories.directive.html',
            restrict: 'EA'
        };

        return directive;
    }
})();
(function () {
    'use strict';

    /**
     * @desc order directive that is specific to the order module at a company named Acme
     * @example <div acme-order-calendar-range></div>
     */
    angular
        .module('photoBlogApp')
        .directive('photoblogFollowme', photoblogFollowme);

    function photoblogFollowme() {
        var directive = {
            templateUrl: '/app/directives/followme.directive.html',
            restrict: 'EA'
        };

        return directive;
    }
})();
(function () {
    'use strict';

    /**
     * @desc order directive that is specific to the order module at a company named Acme
     * @example <div acme-order-calendar-range></div>
     */
    angular
        .module('photoBlogApp')
        .directive('photoblogFooter', photoblogFooter);

    function photoblogFooter() {
        var directive = {
            templateUrl: '/app/directives/footer.directive.html',
            restrict: 'EA'
        };

        return directive;
    }
})();
(function () {
    'use strict';

    /**
     * @desc order directive that is specific to the order module at a company named Acme
     * @example <div acme-order-calendar-range></div>
     */
    angular
        .module('photoBlogApp')
        .directive('photoblogRecentPosts', photoblogRecentPosts);

    function photoblogRecentPosts() {
        var directive = {
            templateUrl: '/app/directives/recentposts.directive.html',
            restrict: 'EA'
        };

        return directive;
    }
})();
(function () {
    'use strict';

    /**
     * @desc order directive that is specific to the order module at a company named Acme
     * @example <div acme-order-calendar-range></div>
     */
    angular
        .module('photoBlogApp')
        .directive('photoblogSlides', photoblogSlides);

    function photoblogSlides() {
        var directive = {
            templateUrl: '/app/directives/slides.directive.html',
            restrict: 'EA'
        };

        return directive;
    }
})();
(function () {
    'use strict';

    angular
        .module('photoBlogApp')
        .controller('pageController', pageController);

    pageController.$inject = ['dataService', 'urlService'];

    function pageController(dataService, urlService) {
        var vm = this;

        vm.posts = dataService.getPosts();
        vm.categories = dataService.getCategories();

        vm.getCategoryTitle = getCategoryTitle;
        vm.getCategoryUrl = urlService.getCategoryUrl;
        vm.getPostUrl = urlService.getPostUrl;
        vm.getHomeUrl = urlService.getHomeUrl;
        
        vm.getCategoryThumb = urlService.getCategoryThumb;
        vm.getPostImage = urlService.getPostImage;
        vm.getHomeSlideImage = urlService.getHomeSlideImage;

        function getCategoryTitle(id) {
            var categoryTitle = '<vazio>';

            if (id != undefined && vm.posts[id] != undefined) {
                categoryTitle = vm.posts[id].category.name;
            }

            return categoryTitle;
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('photoBlogApp')
        .service('dataService', dataService);

    dataService.$inject = ['$translate'];

    function dataService($translate) {
        return {
            getPosts: getPosts,
            getCategories: getCategories
        };

        function getPosts() {
            var posts = new Array();
            var categories = getCategories();

            posts.push({
                en: {
                    title: 'Alice´s world',
                    description: 'What is important on the life of a baby? Here is a small overview about some important moments for Alice, shared by myself as father and photographer',
                    images: [{
                        description: 'Joy'
                    }, {
                        description: 'Hurry'
                    }, {
                        description: 'Fashion'
                    }, {
                        description: 'Friendship'
                    }, {
                        description: 'Happiness'
                    }, {
                        description: 'Break'
                    }]
                },
                pt: {
                    title: 'O Mundo de Alice',
                    description: 'O que é importante no mundo de uma criança? Aqui temos uma amostra de momentos importantes para a Alice, compartilhados por mim como fotógrafo e pai',
                    images: [{
                        description: 'Alegria'
                    }, {
                        description: 'Pressa'
                    }, {
                        description: 'Moda'
                    }, {
                        description: 'Amizade'
                    }, {
                        description: 'Felicidade'
                    }, {
                        description: 'Pausa'
                    }]
                },
                id: 0,
                category: categories[0],
                date: new Date(2016, 6, 13),
                images: [{
                    img: 'v1466538132/p001_alice_02.jpg',
                }, {
                    img: 'v1466538129/p001_alice_03.jpg',
                }, {
                    img: 'v1466538125/p001_alice_07.jpg',
                }, {
                    img: 'v1466538126/p001_alice_04.jpg',
                }, {
                    img: 'v1466538127/p001_alice_05.jpg',
                }, {
                    img: 'v1466538127/p001_alice_01.jpg',
                }]
            });

            return getTranslatedEntityList(posts);
        }

        function getCategories() {
            var categories = new Array();

            categories.push({
                en: {
                    name: 'Baby and children',
                    description: 'Childhood universe',
                },
                pt: {
                    name: 'Bebês e crianças',
                    description: 'O universo infantil',
                },
                id: 0,
                posts: 1
            });

            // categories.push({
            //     en: {
            //         name: 'Portraits',
            //         description: 'People and their worlds',
            //     },
            //     pt: {
            //         name: 'Retratos',
            //         description: 'Pessoas e seus mundos',
            //     },
            //     id: 1,
            //     posts: 0
            // });

            // categories.push({
            //     en: {
            //         name: 'Travel',
            //         description: 'Inspired by travels I did',
            //     },
            //     pt: {
            //         name: 'Viagem',
            //         description: 'Inspirado em minhas viagens',
            //     },
            //     id: 2,
            //     posts: 0
            // });

            return getTranslatedEntityList(categories);
        }

        function getTranslatedEntityList(entityList) {
            var language = getLanguage();

            for (var i in entityList) {
                var entity = entityList[i];
                var translatedInfo = entity[language];

                copyProperties(translatedInfo, entity);
            }

            return entityList;
        }

        function copyProperties(fromEntity, toEntity) {
            for (var key in fromEntity) {
                if (fromEntity[key] === undefined) {
                    continue;
                }

                if (fromEntity[key] instanceof Array) {
                    copyArrayProperties(fromEntity[key], toEntity[key]);
                } else {
                    toEntity[key] = fromEntity[key];
                }
            }
        }

        function copyArrayProperties(fromEntityArray, toEntityArray) {
            for (var i in fromEntityArray) {
                if (fromEntityArray[i] === undefined) {
                    continue;
                }

                copyProperties(fromEntityArray[i], toEntityArray[i]);
            }
        }

        function getLanguage() {
            var language = $translate.use();

            return language.substring(0, 2)
        }
    }
})();
(function () {
    'use strict';

    angular
        .module('photoBlogApp')
        .service('urlService', urlService);

    urlService.$inject = ['$location'];

    function urlService($location) {
        return {
            getCategoryUrl: getCategoryUrl,
            getPostUrl: getPostUrl,
            getHomeUrl: getHomeUrl,
            getCategoryThumb: getCategoryThumb,
            getGalleryThumb: getGalleryThumb,
            getGalleryImage: getGalleryImage,
            getPostImage: getPostImage,
            getHomeSlideImage: getHomeSlideImage,
            getCurrentUrl: getCurrentUrl
        };

        function getCategoryUrl(id) {
            return '/#/category/' + id;
        }

        function getPostUrl(id) {
            return '/#/post/' + id;
        }

        function getHomeUrl() {
            return '/#/';
        }

        function getCategoryThumb(imageId) {
            return 'http://res.cloudinary.com/drzxualok/image/upload/c_lfill,h_80,w_80/' + imageId;
        }

        function getGalleryThumb(imageId) {
            return 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_150/' + imageId;
        }

        function getGalleryImage(imageId) {
            return 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,w_2000/' + imageId;
        }

        function getPostImage(imageId) {
            return 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_550,w_1170/' + imageId;
        }

        function getHomeSlideImage(imageId) {
            return 'http://res.cloudinary.com/drzxualok/image/upload/c_thumb,g_face:center,h_550,w_1920/' + imageId;
        }

        function getCurrentUrl() {
            return $location.absUrl();
        }
    }
})();
(function () {
    'use-strict';

    angular.module('jkuri.gallery', []).directive('ngGallery', ngGallery);

    ngGallery.$inject = ['$document', '$timeout', '$q', '$templateCache'];

    function ngGallery($document, $timeout, $q, $templateCache) {

        var defaults = {
            baseClass: 'ng-gallery',
            thumbClass: 'ng-thumb',
            templateUrl: 'ng-gallery.html'
        };

        var keys_codes = {
            enter: 13,
            esc: 27,
            left: 37,
            right: 39
        };

        function setScopeValues(scope, attrs) {
            scope.baseClass = scope.class || defaults.baseClass;
            scope.thumbClass = scope.thumbClass || defaults.thumbClass;
            scope.thumbsNum = scope.thumbsNum || 3; // should be odd
        }

        var template_url = defaults.templateUrl;
        // Set the default template
        $templateCache.put(template_url,
            '<div class="{{ baseClass }}">' +
            '  <div ng-repeat="i in images">' +
            '    <img ng-src="{{ i.thumb }}" class="{{ thumbClass }}" ng-click="openGallery($index)" alt="Image {{ $index + 1 }}" />' +
            '  </div>' +
            '</div>' +
            '<div class="ng-overlay" ng-show="opened">' +
            '</div>' +
            '<div class="ng-gallery-content" unselectable="on" ng-show="opened" ng-swipe-left="nextImage()" ng-swipe-right="prevImage()">' +
            '  <div class="uil-ring-css" ng-show="loading"><div></div></div>' +
            '<a href="{{getImageDownloadSrc()}}" target="_blank" ng-show="showImageDownloadButton()" class="download-image"><i class="fa fa-download"></i></a>' +
            '  <a class="close-popup" ng-click="closeGallery()"><i class="fa fa-close"></i></a>' +
            '  <a class="nav-left" ng-click="prevImage()"><i class="fa fa-angle-left"></i></a>' +
            '  <img ondragstart="return false;" draggable="false" ng-src="{{ img }}" ng-click="nextImage()" ng-show="!loading" class="effect" />' +
            '  <a class="nav-right" ng-click="nextImage()"><i class="fa fa-angle-right"></i></a>' +
            '  <span class="info-text">{{ index + 1 }}/{{ images.length }} - {{ description }}</span>' +
            '  <div class="ng-thumbnails-wrapper">' +
            '    <div class="ng-thumbnails slide-left">' +
            '      <div ng-repeat="i in images">' +
            '        <img ng-src="{{ i.thumb }}" ng-class="{\'active\': index === $index}" ng-click="changeImage($index)" />' +
            '      </div>' +
            '    </div>' +
            '  </div>' +
            '</div>'
        );

        return {
            restrict: 'EA',
            scope: {
                images: '=',
                thumbsNum: '@',
                hideOverflow: '='
            },
            controller: [
                '$scope',
                function ($scope) {
                    $scope.$on('openGallery', function (e, args) {
                        $scope.openGallery(args.index);
                    });
                }
            ],
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || defaults.templateUrl;
            },
            link: function (scope, element, attrs) {
                setScopeValues(scope, attrs);

                if (scope.thumbsNum >= 11) {
                    scope.thumbsNum = 11;
                }

                var $body = $document.find('body');
                var $thumbwrapper = angular.element(element[0].querySelectorAll('.ng-thumbnails-wrapper'));
                var $thumbnails = angular.element(element[0].querySelectorAll('.ng-thumbnails'));

                scope.index = 0;
                scope.opened = false;

                scope.thumb_wrapper_width = 0;
                scope.thumbs_width = 0;

                var loadImage = function (i) {
                    var deferred = $q.defer();
                    var image = new Image();

                    image.onload = function () {
                        scope.loading = false;
                        if (typeof this.complete === false || this.naturalWidth === 0) {
                            deferred.reject();
                        }
                        deferred.resolve(image);
                    };

                    image.onerror = function () {
                        deferred.reject();
                    };

                    image.src = scope.images[i].img;
                    scope.loading = true;

                    return deferred.promise;
                };

                var showImage = function (i) {
                    loadImage(scope.index).then(function (resp) {
                        scope.img = resp.src;
                        smartScroll(scope.index);
                    });
                    scope.description = scope.images[i].description || '';
                };

                scope.showImageDownloadButton = function () {
                    if (scope.images[scope.index] == null || scope.images[scope.index].downloadSrc == null) return
                    var image = scope.images[scope.index];
                    return angular.isDefined(image.downloadSrc) && 0 < image.downloadSrc.length;
                };

                scope.getImageDownloadSrc = function () {
                    if (scope.images[scope.index] == null || scope.images[scope.index].downloadSrc == null) return
                    return scope.images[scope.index].downloadSrc;
                };

                scope.changeImage = function (i) {
                    scope.index = i;
                    showImage(i);
                };

                scope.nextImage = function () {
                    scope.index += 1;
                    if (scope.index === scope.images.length) {
                        scope.index = 0;
                    }
                    showImage(scope.index);
                };

                scope.prevImage = function () {
                    scope.index -= 1;
                    if (scope.index < 0) {
                        scope.index = scope.images.length - 1;
                    }
                    showImage(scope.index);
                };

                scope.openGallery = function (i) {
                    if (typeof i !== undefined) {
                        scope.index = i;
                        showImage(scope.index);
                    }
                    scope.opened = true;
                    if (scope.hideOverflow) {
                        $('body').css({overflow: 'hidden'});
                    }

                    $timeout(function () {
                        var calculatedWidth = calculateThumbsWidth();
                        scope.thumbs_width = calculatedWidth.width;
                        //Add 1px, otherwise some browsers move the last image into a new line
                        var thumbnailsWidth = calculatedWidth.width + 1;
                        $thumbnails.css({width: thumbnailsWidth + 'px'});
                        $thumbwrapper.css({width: calculatedWidth.visible_width + 'px'});
                        smartScroll(scope.index);
                    });
                };

                scope.closeGallery = function () {
                    scope.opened = false;
                    if (scope.hideOverflow) {
                        $('body').css({overflow: ''});
                    }
                };

                $body.bind('keydown', function (event) {
                    if (!scope.opened) {
                        return;
                    }
                    var which = event.which;
                    if (which === keys_codes.esc) {
                        scope.closeGallery();
                    } else if (which === keys_codes.right || which === keys_codes.enter) {
                        scope.nextImage();
                    } else if (which === keys_codes.left) {
                        scope.prevImage();
                    }

                    scope.$apply();
                });

                var calculateThumbsWidth = function () {
                    var width = 0,
                        visible_width = 0;
                    angular.forEach($thumbnails.find('img'), function (thumb) {
                        width += thumb.clientWidth;
                        width += 10; // margin-right
                        visible_width = thumb.clientWidth + 10;
                    });
                    return {
                        width: width,
                        visible_width: visible_width * scope.thumbsNum
                    };
                };

                var smartScroll = function (index) {
                    $timeout(function () {
                        var len = scope.images.length,
                            width = scope.thumbs_width,
                            item_scroll = parseInt(width / len, 10),
                            i = index + 1,
                            s = Math.ceil(len / i);

                        $thumbwrapper[0].scrollLeft = 0;
                        $thumbwrapper[0].scrollLeft = i * item_scroll - (s * item_scroll);
                    }, 100);
                };

            }
        };
    }
})();
