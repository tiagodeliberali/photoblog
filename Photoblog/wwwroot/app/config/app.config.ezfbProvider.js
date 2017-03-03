(function() {
    'use strict';

    angular
        .module('photoBlogApp')
        .config(appConfig);

    appConfig.$inject = ['ezfbProvider'];

    function appConfig(ezfbProvider) {
        ezfbProvider.setLocale('pt_BR');

        ezfbProvider.setInitParams({
            appId: '1643932782590470',
            version: 'v2.6'
        });
    }
})();