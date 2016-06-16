

.controller('homeController', ['$scope', function ($scope) {
    
}])

.controller('postController', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.post = $scope.posts[$routeParams.postId];
}])