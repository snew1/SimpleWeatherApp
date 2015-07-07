# SimpleWeatherApp
This simple AngularJS based web app uses Yahoo weather API to display current and 5 day forecast for several cities

A hosted sample of this app can be seen at http://weather.samnew-portfolio.com/


This app was created for an AngularJS class assignment.

It allows users to see the current weather for four cities, they can filter the cities by name and temperature as well as switch between Celsius and Fahrenheit.

Clicking on a city's name brings up the 5-day forecast for that city.

The project contains an app.js and controller.js file that defines several controllers that provide the main functionality of the app.

The weather and details controllers send an ajax call to the Yahoo using their weather API to get data on several cites. The data is then parsed into JSON and the relevant information ie City Name, High Temperature is saved to objects to be displayed by the views.

The index.html page acts as a template for the other view pages and displays the relevent data based on which controller is being used

Twitter Bootstrap was used as a style template, this also allows for mobile responsiveness

Main code is contained in the js folder, views folder and index.html in the root folder
