// API Key set up
const apiKey = "889987390ee7b84d41d0f4c35bf8c2ea";





//fetch for geolocation
var baseURLCity = "http://api.openweathermap.org/geo/1.0/direct?q=";
var city = "Miami";
var limit = 1;

var url = baseURLCity + city + "&limit" + limit + "&appid=" + apiKey;

fetch(url, {method: "GET"})
    .then((response) => response.json())
    .then((data) => console.log(data));