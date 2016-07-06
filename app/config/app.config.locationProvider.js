(function() {
    'use strict';

    angular
        .module('photoBlogApp')
        .config(appConfig);

    appConfig.$inject = ['$locationProvider'];

    function appConfig($locationProvider) {
        $locationProvider.html5Mode(true);
    }
})();
