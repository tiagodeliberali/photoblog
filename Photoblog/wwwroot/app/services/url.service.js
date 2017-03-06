(function() {
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
            return '/category/' + id;
        }

        function getPostUrl(id) {
            return '/post/' + id;
        }

        function getHomeUrl() {
            return '/';
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
            return 'http://res.cloudinary.com/drzxualok/image/upload/c_thumb,g_face,h_650,w_1920/' + imageId;
        }

        function getCurrentUrl() {
            return $location.absUrl();
        }
    }
})();