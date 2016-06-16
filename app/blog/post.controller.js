(function () {
    'use strict';

    angular
        .module('photoBlogApp')
        .controller('postController', postController);

    postController.$inject = ['$routeParams', 'dataService'];

    function postController($routeParams, dataService) {
        var postId = $routeParams.postId;

        var vm = this;

        vm.post = dataService.getPosts()[postId];
    }
})();