function inTheaterController($scope, $http) {
    console.log("Now Playing");
    $scope.text = "Find a movie in theaters now!";

    $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=88a8qpv9kwg657jxb97ma5nn&page_limit=5&callback=JSON_CALLBACK', {
        params: {
            apikey: 'rd5c6aj88gw6ycbn4sv2n3a6',
            page_limit: '20',
            callback: 'JSON_CALLBACK'
        }
    }).success(function(successResponse) {
            console.log(successResponse);
            $scope.movies = successResponse.movies;
        }).error(function(errorResponse) {
            console.log(errorResponse);
        });

    $scope.favorite = function($index) {
        console.log($index);
        console.log($scope.movies[$index].title);
        $http.post('/tomatoes/new_favorite/', {
            title: $scope.movies[$index].title,
            poster: $scope.movies[$index].posters.original,
            identifier: $scope.movies[$index].id
        }).success(function(response) {
                console.log(response);
            }).error(function(response) {
                console.log(response);
            });
    };
}
