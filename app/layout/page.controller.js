(function() {
    'use strict';

    angular
        .module('photoBlogApp')
        .controller('pageController', pageController);

    pageController.$inject = ['dataService', 'urlService', '$interval'];

    function pageController(dataService, urlService, $interval) {
        var vm = this;

        vm.posts = dataService.getPosts();
        vm.categories = dataService.getCategories();

        vm.getCategoryUrl = urlService.getCategoryUrl;
        vm.getPostUrl = urlService.getPostUrl;
        vm.getHomeUrl = urlService.getHomeUrl;

        vm.getCategoryThumb = urlService.getCategoryThumb;
        vm.getPostImage = urlService.getPostImage;
        vm.getHomeSlideImage = urlService.getHomeSlideImage;

        vm.currentSlide = 0;

        var timeoutId = $interval(function() {
            vm.currentSlide = (vm.currentSlide + 1) % vm.posts.length;
        }, 7000);
    }
})();