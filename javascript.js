// API Key //
var apiKey = 'a1592b841ec303cddcf1f50344cedc17';

// List of DOM Elements //
var searchBtn = document.querySelector('.scavenge');
var cityList = document.querySelector('.city-list');
var inputEl = document.querySelector('.input');

// URL for present day (city name + weather) //
var URL_Weather = "https://api.openweathermap.org/data/2.5/onecall?" + city_name + '&units=imperial' + apiKey

// URL for 5-days forcast (city name + weather) //
var URL_Forecast = "https://api.openweathermap.org/data/2.5/onecall?" + city_name + '&units=imperial' + apiKey

// Stations cityName in localStorage //
var cityName = localStorage.getItem('store_cityName');

// Positions the input value in localStorage //
function trackCityData() {
    localStorage.setItem('store_cityName', inputEl.value);
}

// Append the search input from localStorage to the list of cities//
for(var i = 0; i < localStorage.length; i++) {
    $('.city-list').append('<p>' + localStorage.getItem(localStorage,key(i)) + '</p>');
}

$.ajax ({
    url: URL_Weather,
    method: "GET"
})
    .then(function(response) {

        $('.city').html('<h3>' + response.name + '</h3>');
        $('.weather_icon').html("<img src='http://openweathermap.org/img/wn/10d@2x.png" + response.weather[0].icon);
        $('.wind').text('Wind Speed: ' + response.wind.speed + 'MPH');
        $('.humid').text('Humidity: ' + response.main.humid + '%');
        $('.temp').text('Temperature: ' + response.main.temp + ' F');

        // URL for UV Index//
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        var queryURL_UV = "https://api.openweathermap.org/data/3.0/onecall?lat=" + lat + "&lon=" + lon + apiKey; 

        // UV Index function //
        $.ajax ({
            url: queryURL_UV,
            method: "GET"
        })
            .then(function(repose) {
                var uvValue = response.value

                $('.uv').text("UV Index: " + response.value);
                $('.uv').css("background-color", uvColor(uvValue));
            });
        
    });

// Index color function
function uvColor(uvValue, bgd_color) {
    var bgd_color = "";
    if (uvValue <= 2) {
        bgd_color = "#00ff40";
    }
    else if (uvValue <= 5 && uvValue > 2) {
        bgd_color = "#ff0000c5";
    }
    return bgd_color;
}


