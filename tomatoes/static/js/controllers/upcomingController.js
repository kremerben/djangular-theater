function upcomingController($scope, MovieService, Theater) {


    $scope.upcoming = Theater.fetch();
    console.log($scope.upcoming);


}


