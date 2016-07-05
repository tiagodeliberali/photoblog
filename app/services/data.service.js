(function() {
    'use strict';

    angular
        .module('photoBlogApp')
        .service('dataService', dataService);

    dataService.$inject = ['$translate', '$filter'];

    function dataService($translate, $filter) {
        return {
            getPost: getPost,
            getPosts: getPosts,
            getCategories: getCategories
        };

        function getPost(id) {
            var posts = getPosts();

            return $filter('filter')(posts, {link: id})[0];
        };

        function getPosts() {
            var posts = new Array();
            var categories = getCategories();

            var post001 = {
                id: 0,
                link: 'alice_world',
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
                    title: 'O Mundo de Alice',
                    description: 'O que é importante no mundo de uma criança? Aqui temos uma amostra de momentos importantes para a Alice, compartilhados por mim como fotógrafo e pai',
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
            };

            var post002 = {
                id: 1,
                link: 'landscapes',
                en: {
                    title: 'Landscapes at the edges of the day',
                    description: 'Photos from the beggining and end of the day',
                    images: [{
                        description: 'Before the sun'
                    }, {
                        description: 'Sun is coming'
                    }, {
                        description: 'Almost there'
                    }, {
                        description: 'Spectators waiting'
                    }, {
                        description: 'The sunshine'
                    }, {
                        description: 'End of the day'
                    }]
                },
                pt: {
                    title: 'Paisagens na beira do dia',
                    description: 'Capturas de imagens no início e fim do dia',
                    images: [{
                        description: 'Antes do sol'
                    }, {
                        description: 'O sol está vindo'
                    }, {
                        description: 'Quase lá'
                    }, {
                        description: 'Expectadores esperando'
                    }, {
                        description: 'O nascer do sol'
                    }, {
                        description: 'Fim do dia'
                    }]
                },
                category: categories[1],
                date: new Date(2016, 7, 13),
                images: [{
                    img: 'v1467588762/p002_landscape_01.jpg',
                }, {
                    img: 'v1467589030/p002_landscape_02.jpg',
                }, {
                    img: 'v1467588762/p002_landscape_04.jpg',
                }, {
                    img: 'v1467589030/p002_landscape_05.jpg',
                }, {
                    img: 'v1467588782/p002_landscape_06.jpg',
                }, {
                    img: 'v1467588763/p002_landscape_03.jpg',
                }]
            };

            posts.push(post001);
            posts.push(post002);

            return getTranslatedEntityList(posts);
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
                posts: 1
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
                posts: 1
            });

            // categories.push({
            //     en: {
            //         name: 'Portraits',
            //         description: 'People and their worlds',
            //     },
            //     pt: {
            //         name: 'Retratos',
            //         description: 'Pessoas e seus mundos',
            //     },
            //     id: 1,
            //     posts: 0
            // });

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