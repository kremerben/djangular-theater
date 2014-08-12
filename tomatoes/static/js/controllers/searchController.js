function searchController($scope, $http, MovieService) {
	console.log("searchController");
	$scope.searchMovies = function () {
		MovieService.searchMovie($scope.movieSearch, MovieService.searchCountry, 12, function(data) {
			$scope.movies = data.movies;
			console.log(data);
		});
	};

	$scope.showResults = true;


	$scope.moreInfo = function(index) {
		$scope.movies[index].showInfo = true;
	};

	$scope.hideInfo = function(index) {
		$scope.movies[index].showInfo = false;
	};

	$scope.showSettings = false;

	$scope.toggleSettings = function() {
		$scope.showSettings = !$scope.showSettings;
	};
}
