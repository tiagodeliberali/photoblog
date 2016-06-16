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
            return vm.posts[id].category.name;
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