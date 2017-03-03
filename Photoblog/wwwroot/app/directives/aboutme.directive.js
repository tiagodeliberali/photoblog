(function () {
    'use strict';

    /**
     * @desc order directive that is specific to the order module at a company named Acme
     * @example <div acme-order-calendar-range></div>
     */
    angular
        .module('photoBlogApp')
        .directive('photoblogAboutme', photoblogAboutme);

    function photoblogAboutme() {
        var directive = {
            templateUrl: '/app/directives/aboutme.directive.html',
            restrict: 'EA'
        };

        return directive;
    }
})();