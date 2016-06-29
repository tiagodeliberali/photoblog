(function () {
    'use strict';

    angular
        .module('photoBlogApp')
        .controller('postController', postController);

    postController.$inject = ['$routeParams', 'dataService', 'urlService'];

    function postController($routeParams, dataService, urlService) {
        var postId = $routeParams.postId;

        var vm = this;

        vm.post = dataService.getPosts()[postId];
        vm.gallery = getGallery();
        vm.getCurrentUrl = urlService.getCurrentUrl;

        function getGallery() {
            var gallery = new Array();

            for (var i in vm.post.images) {
                gallery.push({
                    thumb: urlService.getGalleryThumb(vm.post.images[i].img),
                    img: urlService.getGalleryImage(vm.post.images[i].img),
                    description: vm.post.images[i].description
                });
            }

            return gallery;
        }
    }
})();