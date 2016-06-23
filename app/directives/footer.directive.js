(function () {
    'use strict';

    /**
     * @desc order directive that is specific to the order module at a company named Acme
     * @example <div acme-order-calendar-range></div>
     */
    angular
        .module('photoBlogApp')
        .directive('photoblogFooter', photoblogFooter);

    function photoblogFooter() {
        var directive = {
            templateUrl: '/app/directives/footer.directive.html',
            restrict: 'EA'
        };

        return directive;
    }
})();