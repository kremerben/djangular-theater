theaterPlus.controller('similar', function($scope, $http, MovieService) {

	$scope.showSimilar = function () {
		MovieService.getSimilar($scope.similarSearch, MovieService.searchCountry, MovieService, function(data) {
			$scope.similarMovies = data.movies;
/* 			console.log(data); */
		});
	};
	
	$scope.showSimilarResults = true;

	$scope.moreInfo = function(index) {
		$scope.similarMovies[index].showInfo = true;
	};
	$scope.hideInfo = function(index) {
		$scope.similarMovies[index].showInfo = false;
	};
	
/*
	$scope.showSettings = false;
	$scope.toggleSettings = function() {
		$scope.showSettings = !$scope.showSettings;
	};
*/


});
