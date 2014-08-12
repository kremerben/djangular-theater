var theaterPlus = angular.module('theaterPlus', ['ngRoute','ngResource']);

theaterPlus.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', { templateUrl: '/static/js/views/index.html', controller: 'indexController' }).
        when('/in_theaters', { templateUrl: '/static/js/views/in_theaters.html', controller: 'inTheaterController' }).
        when('/upcoming', { templateUrl: '/static/js/views/upcoming.html', controller: 'upcomingController' }).
        when('/similar', { templateUrl: '/static/js/views/similar.html', controller: 'similarController' }).
        when('/search', { templateUrl: '/static/js/views/search.html', controller: 'searchController' });
}]);
