/*global angular */

var weatherControllers = (function () {
    var weatherControllers = angular.module('weatherControllers', []);

    // Declare the application controller and inject the scope reference.
    weatherControllers.controller('AppCtrl', ['$scope', function ($scope) {
        // Define the title model.
        //$scope.units = ['f', 'c'];
        //$scope.unit = '';
        //$scope.updateUnit = function (input)
        //{
        //    $scope.unit = input;
        //    weatherService.getWeather($scope);
        //}
    }]);
    // Inject the scope and new weatherService reference into the controller.
    weatherControllers.controller('ListCtrl', ['$scope', 'weatherService',
                                  function ($scope, weatherService) {
                                      // Call another controller.				  
                                      weatherService.doSomething($scope);
                                  }]);
    // Inject the scope and new weatherService reference into the controller.
    weatherControllers.controller('WeatherCtrl', ['$scope', 'weatherService',
                                  function ($scope, weatherService) {
                                      // Define the forecast data.
                                      $scope.orderSet = "cityName"
                                      $scope.units = ['f', 'c'];
                                      $scope.unit = 'c';
                                      weatherService.getWeather($scope);
                                      $scope.updateUnit = function (input) {
                                          $scope.unit = input;
                                          weatherService.getWeather($scope);
                                      }
                                      
                                  }]);
    weatherControllers.controller('DetailsCtrl', ['$scope', '$routeParams', 'weatherService', function ($scope, $routeParams, weatherService) {
        //Define Forcast Data and pass city code to get extended details
        $scope.units = ['f', 'c'];
        $scope.unit = '';
        weatherService.getDetails($scope, $routeParams.cityCode);
        $scope.updateUnit = function (input) {
            $scope.unit = input;
            weatherService.getDetails($scope, $routeParams.cityCode);
        }

    }]);
    return weatherControllers;
}());