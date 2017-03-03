(function () {
    'use strict';

    /**
     * @desc order directive that is specific to the order module at a company named Acme
     * @example <div acme-order-calendar-range></div>
     */
    angular
        .module('photoBlogApp')
        .directive('photoblogSubscribe', photoblogSubscribe);

    function photoblogSubscribe() {
        var directive = {
            templateUrl: '/app/directives/subscribe.directive.html',
            restrict: 'EA'
        };

        return directive;
    }
})();