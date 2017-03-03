(function() {
    'use strict';

    angular
        .module('photoBlogApp')
        .controller('pageController', pageController);

    pageController.$inject = ['dataService', 'urlService', '$interval'];

    function pageController(dataService, urlService, $interval) {
        var vm = this;

        dataService.getCategories(function (data) {
            vm.categories = data;
        });

        vm.getCategoryUrl = urlService.getCategoryUrl;
        vm.getPostUrl = urlService.getPostUrl;
        vm.getHomeUrl = urlService.getHomeUrl;

        vm.getCategoryThumb = urlService.getCategoryThumb;
        vm.getPostImage = urlService.getPostImage;
        vm.getHomeSlideImage = urlService.getHomeSlideImage;

        vm.currentSlide = 0;

        dataService.getPosts(function (data) {
            vm.posts = data;

            var timeoutId = $interval(function () {
                vm.currentSlide = (vm.currentSlide + 1) % vm.posts.length;
            }, 15000);
        });
    }
})();