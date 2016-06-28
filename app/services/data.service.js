(function () {
    'use strict';

    angular
        .module('photoBlogApp')
        .service('dataService', dataService);

    dataService.$inject = [];

    function dataService() {
        return {
            getBlogInfo: getBlogInfo,
            getPosts: getPosts,
            getCategories: getCategories
        };

        function getBlogInfo() {
            var blogInfo = {
                title: 'Six Photo Project',
                description: 'A six photos theme project, inspired by LensWork.com',
                aboutMe: 'My name is Tiago Santos and I am an amateur photographer, specially pationated about people\'s portrait and urban photography.',
                pictureMe: 'http://res.cloudinary.com/drzxualok/image/upload/c_scale,w_333/v1466987949/profile.jpg',
                logo: './images/logo.png'
            };

            return blogInfo;
        }

        function getPosts() {
            var posts = new Array();

            posts.push({
                id: 0,
                category: {
                    id: 0,
                    name: 'Baby and children',
                    description: 'Themes related to babies and children'
                },
                title: 'Alice´s world',
                description: 'What is important on the life of a baby? Here is a small overview about some important moments for Alice, shared by myself as father and photographer',
                date: new Date(2016, 6, 13),
                images: [
                    {
                        img: 'v1466538132/p001_alice_02.jpg',
                        description: 'Joy'
                    },
                    {
                        img: 'v1466538129/p001_alice_03.jpg',
                        description: 'Hurry'
                    },
                    {
                        img: 'v1466538125/p001_alice_07.jpg',
                        description: 'Fashion'
                    },
                    {
                        img: 'v1466538126/p001_alice_04.jpg',
                        description: 'Friendship'
                    },
                    {
                        img: 'v1466538127/p001_alice_05.jpg',
                        description: 'Happiness'
                    },
                    {
                        img: 'v1466538127/p001_alice_01.jpg',
                        description: 'Break'
                    }
                ]
            });

            return posts;
        }

        function getCategories() {
            var categories = new Array();

            categories.push({
                id: 0,
                name: 'Baby and children',
                description: 'Themes related to babies and children',
                posts: 1
            });

            categories.push({
                id: 1,
                name: 'Portraits',
                description: 'People and their worlds',
                posts: 0
            });

            categories.push({
                id: 2,
                name: 'Travel',
                description: 'Inspired by travels I did',
                posts: 0
            });

            categories.push({
                id: 3,
                name: 'Cityscape',
                description: 'Day by day exploration of SP',
                posts: 0
            });

            return categories;
        }
    }
})();