// Declare module that references our controllers.
var weatherApp = angular.module('weatherApp', ['ngRoute', 'weatherControllers']).config(function ($routeProvider) {

    
    'use strict';

    $routeProvider.when("/home", {
        /* When 'home' route is selected 
           use the 'list.html' template and the 'ListCtrl' controller. */
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
    })
    .when("/weather", {
        /* When 'weather' route is selected 
           use the 'weather.html' template and the 'WeatherCtrl' controller. */
        templateUrl: 'views/weather.html',
        controller:  'WeatherCtrl'
    })
    .when("/details/:cityCode", {
        /* When 'details' route is selected 
           use the 'details.html' template and the 'DetailsCtrl' controller. */
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl'
    }).
    // If no route is selected then use the 'home' route.
    otherwise({ redirectTo: '/home' });
});
