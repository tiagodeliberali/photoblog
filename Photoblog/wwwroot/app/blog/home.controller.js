(function () {
    'use strict';

    angular
        .module('photoBlogApp')
        .controller('homeController', homeController);

    homeController.$inject = ['dataService'];
    
    function homeController(dataService) {
        var vm = this;
        
        dataService.getPosts(function (data) {
            vm.posts = data;
        });
    }
})();