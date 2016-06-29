(function() {
    'use strict';

    angular
        .module('photoBlogApp')
        .config(appConfig);

    appConfig.$inject = ['$translateProvider'];

    function appConfig($translateProvider) {
        $translateProvider
            .translations('en', getEN())
            .translations('pt-BR', getPT())
            .uniformLanguageTag('bcp47')
            .determinePreferredLanguage()
            .fallbackLanguage('en');


        function getEN() {
            return {
                BLOGTITLE: 'Six Photo Project',
                BLOGDESCRIPTION: 'A six photos theme project, inspired by LensWork.com',
                ABOUTME: 'About Me',
                ABOUTMEDESCRIPTION: 'My name is Tiago Santos and I am an amateur photographer, specially pationated about people\'s portrait and urban photography.',
                CATEGORIES: 'Categories',
                FOLLOWME: 'Follow Me',
                RECENTPOSTS: 'Recent Posts',
                SEEPHOTOS: 'See Photos',
                POSTEDON: 'Posted on',
                SHARETHIS: 'Share this',
            };
        };

        function getPT() {
            return {
                BLOGTITLE: 'Projeto Seis Fotos',
                BLOGDESCRIPTION: 'Um projeto de temas em seis fotos, inspirado por LensWork.com',
                ABOUTME: 'Sobre',
                ABOUTMEDESCRIPTION: 'Meu nome é Tiago Santos e sou fotógrafo amador, apaixonado por retratos e fotografia urbana.',
                CATEGORIES: 'Categorias',
                FOLLOWME: 'Siga-me',
                RECENTPOSTS: 'Posts Recentes',
                SEEPHOTOS: 'Ver Fotos',
                POSTEDON: 'Postado em',
                SHARETHIS: 'Compartilhe',
            };
        };
    }
})();