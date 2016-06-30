(function() {
    'use strict';

    angular
        .module('photoBlogApp')
        .service('dataService', dataService);

    dataService.$inject = ['$translate'];

    function dataService($translate) {
        return {
            getPosts: getPosts,
            getCategories: getCategories
        };

        function getPosts() {
            var posts = new Array();
            var categories = getCategories();

            posts.push({
                en: {
                    title: 'Alice´s world',
                    description: 'What is important on the life of a baby? Here is a small overview about some important moments for Alice, shared by myself as father and photographer',
                    images: [{
                        description: 'Joy'
                    }, {
                        description: 'Hurry'
                    }, {
                        description: 'Fashion'
                    }, {
                        description: 'Friendship'
                    }, {
                        description: 'Happiness'
                    }, {
                        description: 'Break'
                    }]
                },
                pt: {
                    title: 'Mundo de Alice',
                    description: 'O que é importante na vida de um bebê? Um pouco sobre momentos importantes para a alice, compartilhados por mim como pai e fotógrafo',
                    images: [{
                        description: 'Alegria'
                    }, {
                        description: 'Pressa'
                    }, {
                        description: 'Moda'
                    }, {
                        description: 'Amizade'
                    }, {
                        description: 'Felicidade'
                    }, {
                        description: 'Pausa'
                    }]
                },
                id: 0,
                category: categories[0],
                date: new Date(2016, 6, 13),
                images: [{
                    img: 'v1466538132/p001_alice_02.jpg',
                }, {
                    img: 'v1466538129/p001_alice_03.jpg',
                }, {
                    img: 'v1466538125/p001_alice_07.jpg',
                }, {
                    img: 'v1466538126/p001_alice_04.jpg',
                }, {
                    img: 'v1466538127/p001_alice_05.jpg',
                }, {
                    img: 'v1466538127/p001_alice_01.jpg',
                }]
            });

            return getTranslatedEntityList(posts);
        }

        function getCategories() {
            var categories = new Array();

            categories.push({
                en: {
                    name: 'Baby and children',
                    description: 'Themes related to babies and children',
                },
                pt: {
                    name: 'Bebês e crianças',
                    description: 'Temas relacionados a bebês e crianças',
                },
                id: 0,
                posts: 1
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
                id: 1,
                posts: 0
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
                id: 2,
                posts: 0
            });

            categories.push({
                en: {
                    name: 'Cityscape',
                    description: 'Day by day at SP',
                },
                pt: {
                    name: 'Cidades',
                    description: 'Dia a dia em SP',
                },
                id: 3,
                posts: 0
            });

            return getTranslatedEntityList(categories);
        }

        function getTranslatedEntityList(entityList) {
            var language = getLanguage();

            for (var i in entityList) {
                var entity = entityList[i];
                var translatedInfo = entity[language];

                for (var key in translatedInfo) {
                    if (translatedInfo[key] !== undefined) {
                        if (translatedInfo[key] instanceof Array) {
                            for (var arrayElement in translatedInfo[key]) {
                                if (translatedInfo[key][arrayElement] !== undefined) {
                                    for (var j in translatedInfo[key][arrayElement]) {
                                        entity[key][arrayElement][j] = translatedInfo[key][arrayElement][j];
                                    }
                                }
                            }
                        }
                        else {
                            entity[key] = translatedInfo[key];
                        }
                    }
                }
            }

            return entityList;
        }

        function getLanguage() {
            var language = $translate.use();

            return language.substring(0, 2)
        }
    }
})();