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
                    url: 'https://drscdn.500px.org/photo/153246471/q%3D80_h%3D450/648e96cf4f0f7383270ea9c40f4abe42',
                    description: 'Alice focused on the game'
                },
                galery: [
                    {
                        thumb: 'images/thumbs/1.jpg',
                        img: 'images/1.jpg',
                        description: 'Image 1'
                    },
                    {
                        thumb: 'images/thumbs/2.jpg',
                        img: 'images/2.jpg',
                        description: 'Image 2'
                    },
                    {
                        thumb: 'images/thumbs/3.jpg',
                        img: 'images/3.jpg',
                        description: 'Image 3'
                    },
                    {
                        thumb: 'images/thumbs/3.jpg',
                        img: 'images/3.jpg',
                        description: 'Image 3'
                    },
                    {
                        thumb: 'images/thumbs/3.jpg',
                        img: 'images/3.jpg',
                        description: 'Image 3'
                    },
                    {
                        thumb: 'images/thumbs/3.jpg',
                        img: 'images/4.jpg',
                        description: 'Image 4'
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