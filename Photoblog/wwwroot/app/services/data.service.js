(function() {
    'use strict';

    angular
        .module('photoBlogApp')
        .service('dataService', dataService);

    dataService.$inject = ['$translate', '$filter', '$http'];

    function dataService($translate, $filter, $http) {
        return {
            getPost: getPost,
            getPosts: getPosts,
            getCategories: getCategories,
            getPostsByCategory: getPostsByCategory
        };

        function getPostsByCategory(id) {
            var posts = getPosts();

            return $filter('filter')(posts, {
                categoryId: id
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

        function getCategories() {
            var categories = new Array();

            categories.push({
                en: {
                    name: 'Baby and children',
                    description: 'Childhood universe',
                },
                pt: {
                    name: 'Bebês e crianças',
                    description: 'O universo infantil',
                },
                id: 0,
                posts: 2
            });

            categories.push({
                en: {
                    name: 'Travel',
                    description: 'Inspired by travels I did',
                },
                pt: {
                    name: 'Viagem',
                    description: 'Inspirado em minhas viagens',
                },
                id: 1,
                posts: 2
            });

            categories.push({
                en: {
                    name: 'Portraits',
                    description: 'People and their worlds',
                },
                pt: {
                    name: 'Retratos',
                    description: 'Pessoas e seus mundos',
                },
                id: 2,
                posts: 2
            });

            return getTranslatedEntityList(categories);
        }

        function getTranslatedEntityList(entityList) {
            var language = getLanguage();

            for (var i in entityList) {
                var entity = entityList[i];
                var translatedInfo = entity[language];

                copyProperties(translatedInfo, entity);
            }

            return entityList;
        }

        function copyProperties(fromEntity, toEntity) {
            for (var key in fromEntity) {
                if (fromEntity[key] === undefined) {
                    continue;
                }

                if (fromEntity[key] instanceof Array) {
                    copyArrayProperties(fromEntity[key], toEntity[key]);
                } else {
                    toEntity[key] = fromEntity[key];
                }
            }
        }

        function copyArrayProperties(fromEntityArray, toEntityArray) {
            for (var i in fromEntityArray) {
                if (fromEntityArray[i] === undefined) {
                    continue;
                }

                copyProperties(fromEntityArray[i], toEntityArray[i]);
            }
        }

        function getLanguage() {
            var language = $translate.use();

            return language.substring(0, 2)
        }
    }
})();