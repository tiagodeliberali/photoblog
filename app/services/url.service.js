(function () {
    'use strict';

    angular
        .module('photoBlogApp')
        .service('urlService', urlService);

    urlService.$inject = [];

    function urlService() {
        return {
            getCategoryUrl: getCategoryUrl,
            getPostUrl: getPostUrl,
            getHomeUrl: getHomeUrl,
            getCategoryThumb: getCategoryThumb,
            getGalleryThumb: getGalleryThumb,
            getGalleryImage: getGalleryImage,
            getPostImage: getPostImage,
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

        function getHomeSlideUrl(imageId) {
            return 'http://res.cloudinary.com/drzxualok/image/upload/c_thumb,g_face:center,h_550,w_1920/' + imageId;
        }
    }
})();