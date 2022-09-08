// API Key //
var apiKey = '&appid=889987390ee7b84d41d0f4c35bf8c2ea';


// Display the current and future weather to the user after attaining city form from the input text box //
// function displayWeather(event) {
//     event.preventDefault();
//     // if(.search-city)
// }
//Top-level function to obtain JSON with API called Fetch
// async function populate() {

//     const requestURL = 
//         'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
//     const request = new Request(requestURL);

//     const response = await fetch(request);
//     const cities = await response.json();

//     populateHeader(cities);
//     populateCity(cities);

// }
    

// List of DOM Element
var searchBtnEl = document.querySelector('.search-button');
var cityListEl = document.querySelector('.city-list');
var inputEl = document.querySelector('.input');


// Presentation of Date //
var presentDay = moment().format("dddd, MMMM Do");

function dayFunction() {
    $('.present_date').text(presentDay);
};
dayFunction();

// URL for present day (city name + weather) //
var URL_Weather = "https://api.openweathermap.org/data/2.5/weather?q=" + city_name + '&units=imperial' + apiKey;


// // URL for 5-days forcast (city name + weather) //
// var URL_Forecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + city_name + '&units=imperial' + apiKey;

// // On Click Event Listener for Search Button //
searchBtnEl.addEventListener('click', RECORDCityData);

// // Stations cityName in localStorage //
var city_name = localStorage.getItem('store_city_name');

// // Positions the input value in localStorage //
// function trackCityData() {
//     localStorage.setItem('store_cityName', inputEl.value);
// }

// Append the search input from localStorage to the list of cities//
for (var i = 0; i < localStorage.length; i++) {
    $(".city-list").append("<p>" + localStorage.getItem(localStorage.key(i)) + "</p>");
}

// Presen Day Weather Function
// $.ajax ({
    // url: URL_Weather,
//     method: "GET"
// })
//     .then(function(response) {

//         $('.city').html('<h3>' + response.name + '</h3>');
//         // $('.weather_icon').html("<img src='http://openweathermap.org/img/wn/10d@2x.png" + response.weather[0].icon);
//         $('.wind').text('Wind Speed: ' + response.wind.speed + 'MPH');
//         $('.humid').text('Humidity: ' + response.main.humid + '%');
//         $('.temp').text('Temperature: ' + response.main.temp + ' F');

//         // URL for UV Index//
//         var lat = response.coord.lat;
//         var lon = response.coord.lon;
//         var queryURL_UV = "https://api.openweathermap.org/data/3.0/onecall?lat=" + lat + "&lon=" + lon + apiKey; 

//         // UV Index function //
//         $.ajax ({
//             url: queryURL_UV,
//             method: "GET"
//         })
//             .then(function(repose) {
//                 var uvValue = response.value

//                 $('.uv').text("UV Index: " + response.value);
//                 $('.uv').css("background-color", uvColor(uvValue));
//             });
        
//     });

// // Index color function //
// function uvColor(uvValue, bgd_color) {
//     var bgd_color = "";
//     if (uvValue <= 2) {
//         bgd_color = "#00ff40";
//     }
//     else if (uvValue <= 5 && uvValue > 2) {
//         bgd_color = "#ff0000c5";
//     }
//     return bgd_color;
// }


// // 5 Day forecast function //
// $.ajax ({
//     url: URL_Forecast,
//     method: "GET"
// })
//     .then(function(response) {

//         var day_1 = moment(response.list[0].dt_text).format("ddd, MMM D");

//         // Joins day_1 data to page //
//         $('.day-1-date').html('<h5>' + day_1 + '</h5>');
//         // $('.day-1-icon').html("<img");
//         $('.day-1-temp').text('Temperature: ' + response.list[0].main.temp + ' F');
//         $('.day-1-humid').text('Humidity: ' + response.list[0].main.humid + '%');
//     });


