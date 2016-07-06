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

        vm.getCategoryUrl = urlService.getCategoryUrl;
        vm.getPostUrl = urlService.getPostUrl;
        vm.getHomeUrl = urlService.getHomeUrl;
        
        vm.getCategoryThumb = urlService.getCategoryThumb;
        vm.getPostImage = urlService.getPostImage;
        vm.getHomeSlideImage = urlService.getHomeSlideImage;
    }
})();