// API Key //
var apiKey = 'a1592b841ec303cddcf1f50344cedc17';

// List of DOM Elements //
var searchBtn = document.querySelector('.scavenge');
var cityList = document.querySelector('.city-list');
var input = document.querySelector('.input');

// URL for present day (city name + weather) //
var URL_Weather = "https://api.openweathermap.org/data/2.5/onecall?" + city_name + '&units=imperial' + apiKey

// URL for 5-days forcast (city name + weather)//
var URL_Forecast = "https://api.openweathermap.org/data/2.5/onecall?" + city_name + '&units=imperial' + apiKey

