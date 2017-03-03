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
            getCategories: getCategories,
            getPostsByCategory: getPostsByCategory
        };

        function getPostsByCategory(id) {
            var posts = getPosts();

            return $filter('filter')(posts, {
                categoryId: id
            });
        }

        function getPost(id) {
            var posts = getPosts();

            return $filter('filter')(posts, {
                link: id
            })[0];
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
                categoryId: 0,
                category: categories[0],
                date: new Date(2016, 5, 13),
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
                        description: 'Reflections in the water'
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
                        description: 'Reflexos na água'
                    }, {
                        description: 'Expectadores esperando'
                    }, {
                        description: 'O nascer do sol'
                    }, {
                        description: 'Fim do dia'
                    }]
                },
                categoryId: 1,
                category: categories[1],
                date: new Date(2016, 5, 23),
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

            var post003 = {
                id: 2,
                link: 'glamour',
                en: {
                    title: 'Glamour',
                    description: 'Dresses for a wedding, setting the final details before the party.',
                    images: [{
                        description: 'Flowers near the face'
                    }, {
                        description: 'Adjusting the necktie'
                    }, {
                        description: 'Finishing the makeup'
                    }, {
                        description: 'Wearing the shoe'
                    }, {
                        description: 'Ready'
                    }, {
                        description: 'Soft light over the face'
                    }]
                },
                pt: {
                    title: 'Glamour',
                    description: 'Vestidos para um casamento, ajustando os últimos detalhes antes da festa.',
                    images: [{
                        description: 'Flores próximas ao rosto'
                    }, {
                        description: 'Ajustando a gravata'
                    }, {
                        description: 'Terminando a maquiagem'
                    }, {
                        description: 'Calçando o sapato'
                    }, {
                        description: 'Prontos'
                    }, {
                        description: 'Luz suave sobre o rosto'
                    }]
                },
                categoryId: 2,
                category: categories[2],
                date: new Date(2016, 6, 7),
                images: [{
                    img: 'v1467937835/p003_glamour_06.jpg',
                }, {
                    img: 'v1467938085/p003_glamour_02.jpg',
                }, {
                    img: 'v1467937849/p003_glamour_03.jpg',
                }, {
                    img: 'v1467937848/p003_glamour_04.jpg',
                }, {
                    img: 'v1467937851/p003_glamour_05.jpg',
                }, {
                    img: 'v1467937826/p003_glamour_01.jpg',
                }]
            };

            var post004 = {
                id: 3,
                link: 'kids',
                en: {
                    title: 'Kids portraits',
                    description: 'Candid portraits of kids while involved in their own world',
                    images: [{
                        description: 'Enchanted'
                    }, {
                        description: 'Assembling a house'
                    }, {
                        description: 'Enjoying the puffp'
                    }, {
                        description: 'Daydreaming'
                    }, {
                        description: 'My car'
                    }, {
                        description: 'Playing in the cradle'
                    }]
                },
                pt: {
                    title: 'Retratos de crianças',
                    description: 'Retratos de crianças envolvidas em seus próprios mundos',
                    images: [{
                        description: 'Encantada'
                    }, {
                        description: 'Montando uma casinha'
                    }, {
                        description: 'Aproveitando o puff'
                    }, {
                        description: 'Sonhando acordada'
                    }, {
                        description: 'Meu carro'
                    }, {
                        description: 'Brincando no berço'
                    }]
                },
                categoryId: 0,
                category: categories[0],
                date: new Date(2016, 6, 10),
                images: [{
                    img: 'v1468086036/p004_kids_03.jpg',
                }, {
                    img: 'v1468086037/p004_kids_02.jpg',
                }, {
                    img: 'v1468086032/p004_kids_05.jpg',
                }, {
                    img: 'v1468086039/p004_kids_04.jpg',
                }, {
                    img: 'v1468086038/p004_kids_01.jpg',
                }, {
                    img: 'v1468086027/p004_kids_06.jpg',
                }]
            };

            var post005 = {
                id: 4,
                link: 'lowkey',
                en: {
                    title: 'Low key profile portraits',
                    description: 'Single light portraits with heavy post production',
                    images: [{
                        description: 'Nicoly'
                    }, {
                        description: 'Lucas'
                    }, {
                        description: 'Vitória'
                    }, {
                        description: 'Tiago'
                    }, {
                        description: 'Fernando'
                    }, {
                        description: 'Nicoly'
                    }]
                },
                pt: {
                    title: 'Retratos com fundo escuro',
                    description: 'Retratos tirados com uma única fonte de luz e com bastante pós produção',
                    images: [{
                        description: 'Nicoly'
                    }, {
                        description: 'Lucas'
                    }, {
                        description: 'Vitória'
                    }, {
                        description: 'Tiago'
                    }, {
                        description: 'Fernando'
                    }, {
                        description: 'Nicoly'
                    }]
                },
                categoryId: 2,
                category: categories[2],
                date: new Date(2016, 6, 14),
                images: [{
                    img: 'v1468548290/p005_lowkey_11.jpg',
                }, {
                    img: 'v1468548290/p005_lowkey_10.jpg',
                }, {
                    img: 'v1468548286/p005_lowkey_08.jpg',
                }, {
                    img: 'v1468548292/p005_lowkey_09.jpg',
                }, {
                    img: 'v1468548291/p005_lowkey_07.jpg',
                }, {
                    img: 'v1469058436/p005_lowkey_13.jpg',
                }]
            };

            var post006 = {
                id: 5,
                link: 'theater',
                en: {
                    title: 'Interior of São Paulo Municipal Theater',
                    description: 'Travel to Sao Paulo to visit the Sao Paulo Municipal Museum.',
                    images: [{
                        description: 'Main stair'
                    }, {
                        description: 'Stair detail'
                    }, {
                        description: 'Main entrance roof'
                    }, {
                        description: 'Chairs'
                    }, {
                        description: 'Mirror'
                    }, {
                        description: 'Windows'
                    }]
                },
                pt: {
                    title: 'Interior do Teatro Municipal de São Paulo',
                    description: 'Viagem para São Paulo para visitar o Teatro Municipal.',
                    images: [{
                        description: 'Escada principal'
                    }, {
                        description: 'Detalhes da escada'
                    }, {
                        description: 'Teto da entrada principal'
                    }, {
                        description: 'Cadeiras'
                    }, {
                        description: 'Espelho'
                    }, {
                        description: 'Janelas'
                    }]
                },
                categoryId: 1,
                category: categories[1],
                date: new Date(2016, 6, 22),
                images: [{
                    img: 'v1469227618/p006_teatro_01.jpg',
                }, {
                    img: 'v1469227607/p006_teatro_02.jpg',
                }, {
                    img: 'v1469227614/p006_teatro_03.jpg',
                }, {
                    img: 'v1469227618/p006_teatro_04.jpg',
                }, {
                    img: 'v1469227623/p006_teatro_05.jpg',
                }, {
                    img: 'v1469227614/p006_teatro_06.jpg',
                }]
            };

            posts.push(post001);
            posts.push(post002);
            posts.push(post003);
            posts.push(post004);
            posts.push(post005);
            posts.push(post006);

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