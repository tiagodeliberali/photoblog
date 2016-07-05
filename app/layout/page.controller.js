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

            var post = dataService.getPost(id);

            if (id != undefined && post != undefined) {
                categoryTitle = post.category.name;
            }

            return categoryTitle;
        }
    }
})();