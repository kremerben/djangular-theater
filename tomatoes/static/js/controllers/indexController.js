function indexController($scope, $http, MovieService) {
    MovieService.searchCountry = $scope.searchCountry;

	console.log("indexController");

//    $http.get('/all_favorites/').success(function(successResponse) {
//        console.log(successResponse);
//        $scope.favorites = successResponse;
//    }).error(function(errorResponse) {
//            console.log(errorResponse);
//        });
}
