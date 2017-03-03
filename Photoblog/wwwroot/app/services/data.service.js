(function() {
    'use strict';

    angular
        .module('photoBlogApp')
        .service('dataService', dataService);

    dataService.$inject = ['$translate', '$http'];

    function dataService($translate, $http) {
        return {
            getPost: getPost,
            getPosts: getPosts,
            getCategories: getCategories,
            getCategory: getCategory,
            getPostsByCategory: getPostsByCategory
        };

        function getPostsByCategory(id, updatePostsByCategory) {
            $http.get('/api/datacategories/' + id)
                .success(function (response) {
                    updatePostsByCategory(response.posts);
                });
        }

        function getCategory(id, updatePostsByCategory) {
            $http.get('/api/datacategories/' + id)
                .success(function (response) {
                    updatePostsByCategory(response);
                });
        }

        function getPost(id, updatePost) {
            $http.get('/api/dataposts/' + id)
                .success(function (response) {
                    updatePost(response);
                });
        };

        function getPosts(updatePosts) {
            $http.get('/api/dataposts')
                .success(function (response) {
                    updatePosts(response);
                });
        }

        function getCategories(updateCategories) {
            $http.get('/api/datacategories')
                .success(function (response) {
                    updateCategories(response);
                });
        }

        function getLanguage() {
            var language = $translate.use();

            return language.substring(0, 2)
        }
    }
})();