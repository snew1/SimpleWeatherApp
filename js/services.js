weatherApp.factory("weatherService", function ($http) {
    'use strict';
    return {
        //doSomething: function ($scope) {
        //},

        //set city names and codes used by yahoo api
        getWeather: function ($scope) {
            $scope.cities = [{ name: "Vancouver", code: '9807' },
                             { name: "Honolulu", code: '2423945' },
                             { name: "San Diego", code: '2487889' },
                             { name: "Havana Cuba", code: '63817' }];

            var forecast = []; //init forecast
            var format = "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
            var yql = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where";

            // Call and wait for each data set to return before going to next city.
            angular.forEach($scope.cities, function (city) {
                var yahooAPI = "%20woeid%20%3D%20" + city.code + "%20and%20u%3D'" + $scope.unit + "'";
                var url = yql + yahooAPI + format;

                //cmake call to yahoo Api
                $http.get(url).success(function (data) {
                    try {
                        //parse Json
                        var stringified = JSON.stringify(data);          // Convert to a string.
                        stringified = stringified.split("\\n").join(""); // Remove new line '/n'.
                        var listing = JSON.parse(stringified);           // Convert to object.

                        //get json objects and assign them to corresponding city data
                        var currentWeather = listing.query.results.channel.item.forecast[0];
                        currentWeather.cityCode = city.code;
                        currentWeather.cityName = city.name;
                        currentWeather.hi = parseFloat(listing.query.results.channel.item.forecast[0].high);
                        currentWeather.lo = parseFloat(listing.query.results.channel.item.forecast[0].low);
                        forecast.push(currentWeather);
                    }
                    catch (error) {
                        alert("Weather reading error:" + error.name + ": "
                        + error.message);
                    }
                });
            });
            //set all data to scope to be displayed
            $scope.forecast = forecast;
        },
        //set city details using passed in city code used by yahoo api to get data
        getDetails: function ($scope, cityCode) {
            var forecast = []; //init forecast
            var yahooAPI = "%20woeid%20%3D%20" + cityCode + "%20and%20u%3D'" + $scope.unit + "'";
            var format = "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
            var yql = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where";
            var url = yql + yahooAPI + format;

            //make call to yahoo api
            $http.get(url).success(function (data) {
                try {
                    //parce json
                    var stringified = JSON.stringify(data);
                    stringified = stringified.split("\\n").join("");
                    var listing = JSON.parse(stringified);
                    $scope.title = listing.query.results.channel.item.title;
                    //loop through next five days setting forecast data
                    for (var i = 0; i < 5; i++)
                    {
                        var ithday = listing.query.results.channel.item.forecast[i];
                        forecast.push(ithday);
                    }

                }
                catch (error) {
                    alert("Weather reading error:" + error.name + ": " + error.message);
                }
            });
            //set all data to scope to be displayed
            $scope.forecast = forecast;
        },
    }
});
