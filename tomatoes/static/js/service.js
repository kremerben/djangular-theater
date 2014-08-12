theaterPlus.factory('Favorite', function($resource) {
        return $resource('/favorite/:id');
    });


//
//theaterplus.factory('Theater', function($resource) {
//    return $resource("http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json?apikey=:key&callback=:callback",
//        {
//            key: "rd5c6aj88gw6ycbn4sv2n3a6",
//            callback: "JSON_CALLBACK"
//            {
//                fetch:{
//                    method:'JSONP'
//                }
//            }
//     });
//});



theaterPlus.factory('MovieService', function($http) {
    return {
    	searchCountry: "us",
        wishList: [],
        apikey: 'rd5c6aj88gw6ycbn4sv2n3a6',
		
        searchMovie: function (searchTerms, searchCountry, limit, callback) {
			$http.jsonp(
			 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?', {
			 params: {
				 apikey: 'rd5c6aj88gw6ycbn4sv2n3a6',
			     q: searchTerms,
			     page_limit: limit,
			     country: searchCountry || 'us',
			     callback: 'JSON_CALLBACK',
			 }
			}).success(function(data) {
                    callback(data);
            });
		},


        getSimilar: function (searchTerms, searchCountry, service, callback) {
        	service.searchMovie(searchTerms, searchCountry, 1, function(data) {
                    callback(data);
            });
            console.log(data);
        	var movieID = data.movies[0].id;
            console.log(movieID);
			$http.jsonp(
			 'http://api.rottentomatoes.com/api/public/v1.0/movies/'+movieID+'/similar.json?', {
			 params: {
				 apikey: apikey,
			     page_limit: '4',
			     country: searchCountry || 'us',
			     callback: 'JSON_CALLBACK',
			 }
			}).success(function(data) {
                    callback(data);
            });
		},

    
        getMovies: function (context, searchTerms, searchCountry, callback) {
			$http.jsonp(
			 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/'+context+'.json?', {
			 params: {
				 apikey: 'rd5c6aj88gw6ycbn4sv2n3a6',
			     q: searchTerms,
			     page_limit: '8',
			     country: searchCountry || 'us',
			     callback: 'JSON_CALLBACK',
			 }
			}).success(function(data) {
                    callback(data);
                    console.log(data);
            });
   		}


    }
});
