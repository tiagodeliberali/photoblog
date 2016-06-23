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

        vm.getCategoryThumb = getCategoryThumb;
        vm.getGalleryThumb = getGalleryThumb;
        vm.getGalleryImage = getGalleryImage;
        vm.getPostImage = getPostImage;

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
    }
})();