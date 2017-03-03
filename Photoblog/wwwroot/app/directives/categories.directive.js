(function () {
    'use strict';

    /**
     * @desc order directive that is specific to the order module at a company named Acme
     * @example <div acme-order-calendar-range></div>
     */
    angular
        .module('photoBlogApp')
        .directive('photoblogCategories', photoblogCategories);

    function photoblogCategories() {
        var directive = {
            templateUrl: '/app/directives/categories.directive.html',
            restrict: 'EA'
        };

        return directive;
    }
})();