
const app = {
    init: () => {
        document
          .getElementById('btnGet')
            //fetch weather
          .addEventListener('click', app.fetchWeather);
        document
          .getElementById('btnCurrent')
            //click and get location
          .addEventListener('click', app.getLocation);
    },
    fetchWeather: (ev) => {
        //uses the values from lat and long to fetch the weather
        // let lat = document.getElementById('latitude').value;
        // let lon = document.getElementById('longitude').value;
        let lat = 39.31;
        let lon = -74.5;
        let key = '889987390ee7b84d41d0f4c35bf8c2ea';
        let lang = 'en';
        let units = 'imperial';
        let url = 'http://api.openweathermap.org/data/2.5/onecall?lat${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}'
          //fetch the weather - (fetch is promise based)
        fetch(url)
          .then(resp=>{
            if(!resp.ok) throw new Error(resp.statusText);
            return resp.json();
          })
          .then(data=>{
            app.showWeather(data);
          })
          .catch(console.err);
    },
    getLocation: (ev) => {
        let opts = {
            enableHighAccuracy: true,
            timeout: 1000 * 10, //10 seconds
            maximumAge: 1000 * 60 * 5, //5 minutes
        };  
        navigator.geolocation.getCurrentPosition(app.ftw, app.wtf, opts);
    }, 
    ftw: (position) => {
        // position succuess function 
        document.getElementById('latitude').value =
          position.coords.latitude.toFixed(2);
        document.getElementById('longitude').value =
          position.coords.longitude.toFixed(2);
          //set in 2 decimal places
    },
    wtf: (err) => {
        // geolocation failure function
        console.error(err);
    },
    showWeather: (resp) => {
        console.log(resp);
        let row = document.querySelector('.weather.row');
        //clear our the old weather and add the new weather
        // row.innerHTML = '';
        row.innterHTML = resp.daily
            .map((day,idx) => {
                if(idx < 5){
                    return '<p>Day</p>';
                }
             })
            .join(' ');

    //  let html = '<div class="col">
    //     <div class="card" style="width: 30vw">
    //         <h5 class="card-title p-2">Date</h5> 
    //         <img
    //           src="http://openweathermap.org/img/wn/10d@4x.png"
    //           class="card-img-top"
    //           alt="Weather description"
    //         />
    //         <div class="card-body">
    //             <h3 class="card-title">Weather Label</h3>
    //             <p class="card-text">High Temp Low Temp</p>
    //             <p class="card-text">Humidity</p>
    //             <p class="card-text">UV Index</p>
    //             <p class="card-text">Wind Speed</p>
    //         </div>
    //     </div>
    // </div>'
    },
};
//gets called right away
app.init();

// API Key //
// var apiKey = "a1592b841ec303cddcf1f50344cedc17";
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
// var searchBtn = $('.scavenge');
// var cityList = $('.city-list');
// var inputEl = $('.input');
// var seachCity = 

// Presentation of Date //
// var presentDay = moment().format("dddd, MMMM Do");

// function dayFunction() {
//     $('.present_date').text(presentDay);
// };
// dayFunction();

// URL for present day (city name + weather) //
// var URL_Weather = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"

// // URL for 5-days forcast (city name + weather) //
// var URL_Forecast = "https://api.openweathermap.org/data/2.5/onecall?" + city_name + '&units=imperial' + apiKey


// // Stations cityName in localStorage //
// var city_name = localStorage.getItem('store_cityName');

// // Positions the input value in localStorage //
// function trackCityData() {
//     localStorage.setItem('store_cityName', inputEl.value);
// }

// Append the search input from localStorage to the list of cities//
// for(var i = 0; i < localStorage.length; i++) {
//     $('.city-list').append('<p>' + localStorage.getItem(localStorage, apiKey(i)) + '</p>');
// }

// $.ajax ({
//     url: URL_Weather,
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

// // On Click Event Listener for Search Button //
// searchBtn.addEventListener('click', trackCityData);

