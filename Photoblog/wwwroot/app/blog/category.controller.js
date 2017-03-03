(function () {
    'use strict';

    angular
        .module('photoBlogApp')
        .controller('categoryController', categoryController);

    categoryController.$inject = ['$routeParams', 'dataService'];

    function categoryController($routeParams, dataService) {
        var categoryId = $routeParams.categoryId;

        var vm = this;

        vm.posts = dataService.getPostsByCategory(categoryId);
    }
})();