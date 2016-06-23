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
        vm.gallery = getGallery();

        function getGallery() {
            var gallery = new Array();

            for (var i in vm.post.images) {
                gallery.push({
                    thumb: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_150/' + vm.post.images[i].img,
                    img: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,w_2000/' + vm.post.images[i].img
                });
            }

            return gallery;
        }
    }
})();