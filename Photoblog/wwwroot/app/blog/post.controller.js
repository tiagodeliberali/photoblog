(function () {
    'use strict';

    angular
        .module('photoBlogApp')
        .controller('postController', postController);

    postController.$inject = ['$routeParams', 'dataService', 'urlService'];

    function postController($routeParams, dataService, urlService) {
        var postId = $routeParams.postId;

        var vm = this;

        dataService.getPost(postId, function (result) {
            vm.post = result;
            vm.gallery = getGallery();
        });
        
        vm.getCurrentUrl = urlService.getCurrentUrl;

        function getGallery() {
            var gallery = new Array();

            for (var i in vm.post.images) {
                gallery.push({
                    thumb: urlService.getGalleryThumb(vm.post.images[i].url),
                    img: urlService.getGalleryImage(vm.post.images[i].url),
                    description: vm.post.images[i].description
                });
            }

            return gallery;
        }
    }
})();