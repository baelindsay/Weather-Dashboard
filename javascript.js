// Declare a variable to store the searched city
var city = " ";

// Declaration of variable list
var $ = document.getElementById;
var searchCity = ("$search-city");
var searchButton = $("#search-button");
var clearButton = $("#clear-history");
var cuurentCity = $("#current-city");
var currentTemperature = $("#temperature");
var currentHumity = $("#humity");
var currentWindSpeed = $("#wind-speed");
var currentUVindex = $("#uv-index");
var sCity = [];


// API Key set up
var apiKey = "416a9054aa7aee8b12a0a566e1c4fd9a";

// Create the AJAX call
function currentWeather(city){
    //this is a build of the URL so we can get data from server side
    var URL = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&APPID=" + apiKey;
    $.ajax({
        url: URL,
        method: "GET",
    }).then(function(response){

        // Parse the response to display the current weather & City name, Date, Weather icon
        console.log(response);
        //Data object from server side Api for icon property
        var weathericon = response.weather[0].icon;
        var iconURL = "https://openweathermap.org/img/wn/" + weathericon + "@2x.png";
        
    })
}

