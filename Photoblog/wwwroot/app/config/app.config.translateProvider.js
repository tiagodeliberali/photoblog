(function() {
    'use strict';

    angular
        .module('photoBlogApp')
        .config(appConfig);

    appConfig.$inject = ['$translateProvider'];

    function appConfig($translateProvider) {
        $translateProvider
            .translations('en', getEN())
            .translations('pt', getPT())
            .uniformLanguageTag('bcp47')
            .registerAvailableLanguageKeys(['en', 'pt'], {
                'en*': 'en',
                'pt*': 'pt'
            })
            .determinePreferredLanguage()
            .fallbackLanguage('en');


        function getEN() {
            return {
                BLOGTITLE: 'Portraits',
                BLOGDESCRIPTION: 'Portraits that inspires',
                ABOUTME: 'About Me',
                ABOUTMEDESCRIPTION: 'My name is Tiago Santos and I am a photographer, specially pationated about people\'s portrait and urban photography.',
                CATEGORIES: 'Categories',
                FOLLOWME: 'Follow Me',
                RECENTPOSTS: 'Recent Posts',
                SEEPHOTOS: 'See Photos',
                POSTEDON: 'Posted on',
                SHARETHIS: 'Share this',
                SUBSCRIBE: 'Subscribe to Blog via Email',
                SUBSCRIBEMESSAGE: 'Enter your email address to subscribe to this blog and receive notifications of new posts by email.',
                SUBSCRIBEPLACEHOLDER: 'Your email address',
                SUBSCRIBEBUTTON: 'Subscribe',
            };
        };

        function getPT() {
            return {
                BLOGTITLE: 'Retratos',
                BLOGDESCRIPTION: 'Retratos que inspiram',
                ABOUTME: 'Sobre',
                ABOUTMEDESCRIPTION: 'Meu nome é Tiago Santos e sou fotógrafo, apaixonado por retratos e poesia da fotografia.',
                CATEGORIES: 'Categorias',
                FOLLOWME: 'Siga-me',
                RECENTPOSTS: 'Posts Recentes',
                SEEPHOTOS: 'Ver Fotos',
                POSTEDON: 'Postado em',
                SHARETHIS: 'Compartilhe',
                SUBSCRIBE: 'Receba as novidades por Email',
                SUBSCRIBEMESSAGE: 'Preencha seu email para se inscrever nesse blog e receber notificações de novos posts por email.',
                SUBSCRIBEPLACEHOLDER: 'Seu email',
                SUBSCRIBEBUTTON: 'Inscreva-se já!',
            };
        };
    }
})();