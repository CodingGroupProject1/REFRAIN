var lat;
var lon;

var happySongs = 'playlist/1479458365';
var sadSongs = 'playlist/1911334042';
var fearSongs = 'playlist/8646459442';
var surpriseSongs = 'playlist/8651277862';

var happyBtn = document.getElementById('happy-play');
var sadBtn = document.getElementById('sad-play');
var fearBtn = document.getElementById('fear-play')
var surpriseBtn = document.getElementById('surprise-play');

function getMyLocation() {
    if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(function(position){
        console.log(position);
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        fetch(
            'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&exclude=minutely,hourly,alerts&appid=f7e68c78a6c0589ffc5c75fdd1fe6b01')
        .then(function (response) {
            response.json()
            .then(function (data) {
                console.log("Weather data: ", data);
            })
        })
        console.log("Coordinates: ", lat, lon);
    });
    else {
        console.log("Geolocation not available on device");
    }
}
getMyLocation();
//get songs depending on button clicked


    fearBtn.addEventListener('click', () => {
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/' + fearSongs)
        .then(function (response) {
            response.json()
            .then(function (data){
                console.log("DEEZER DATA: ", data);
            })
        })
    });

    happyBtn.addEventListener('click', () => {
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/' + happySongs)
        .then(function (response) {
            response.json()
            .then(function (data){
                console.log("DEEZER DATA: ", data);
            })
        })
        window.open('https://api.deezer.com/' + happySongs, '_blank')
    });

    sadBtn.addEventListener('click', () => {
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/' + sadSongs)
        .then(function (response) {
            response.json()
            .then(function (data){
                console.log("DEEZER DATA: ", data);
            })
        })
    });

    surpriseBtn.addEventListener('click', () => {
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/' + surpriseSongs)
        .then(function (response) {
            response.json()
            .then(function (data){
                console.log("DEEZER DATA: ", data);
            })
        })
    });


//search bar
function searchFunction() {
    var searchInput = document.querySelector('#search-input');
    var searchBtn = document.querySelector('#searchBtn');
    console.log(searchInput.vaule)

    searchBtn.addEventListener('click', () => {
        var url = 'https://api.deezer.com/'
        window.open(url + searchInput.vaule, '_blank')
    })
}