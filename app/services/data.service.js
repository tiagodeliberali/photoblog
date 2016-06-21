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
                pictureMe: 'https://scontent-gru.xx.fbcdn.net/v/t1.0-9/12644947_10153943869296474_2740697872058079782_n.jpg?oh=2c792d108c3b229d031a98b181869cc5&oe=57C266CA'
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
                description: 'An overview about important thing in the world of Alice',
                date: new Date(2016, 6, 13),
                image: {
                    url: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_550,w_1170/v1466538132/p001_alice_02.jpg',
                    thumb: 'http://res.cloudinary.com/drzxualok/image/upload/c_lfill,h_80,w_80/v1466538132/p001_alice_02.jpg',
                    description: 'Joy'
                },
                gallery: [
                    {
                        thumb: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_150/v1466538132/p001_alice_02.jpg',
                        img: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,w_2000/v1466538132/p001_alice_02.jpg',
                        description: 'Joy'
                    },
                    {
                        thumb: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_150/v1466538129/p001_alice_03.jpg',
                        img: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,w_2000/v1466538129/p001_alice_03.jpg',
                        description: 'Hurry'
                    },
                    {
                        thumb: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_150/v1466538125/p001_alice_07.jpg',
                        img: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,w_2000/v1466538125/p001_alice_07.jpg',
                        description: 'Fashion'
                    },
                    {
                        thumb: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_150/v1466538126/p001_alice_04.jpg',
                        img: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,w_2000/v1466538126/p001_alice_04.jpg',
                        description: 'Friendship'
                    },
                    {
                        thumb: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_150/v1466538127/p001_alice_05.jpg',
                        img: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,w_2000/v1466538127/p001_alice_05.jpg',
                        description: 'Happiness'
                    },
                    {
                        thumb: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,h_150/v1466538127/p001_alice_01.jpg',
                        img: 'http://res.cloudinary.com/drzxualok/image/upload/c_limit,w_2000/v1466538127/p001_alice_01.jpg',
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