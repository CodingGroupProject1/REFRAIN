//-------- PLAYLISTS ----------
var happySongs = 'playlist/1479458365';
var sadSongs = 'playlist/1911334042';
var fearSongs = 'playlist/8646459442';
var surpriseSongs = 'playlist/8651277862';

//--------- BUTTONS -----------------
var happyBtn = document.getElementById('happy-play');
var sadBtn = document.getElementById('sad-play');
var fearBtn = document.getElementById('fear-play')
var surpriseBtn = document.getElementById('surprise-play');
var modalBtn = document.getElementById("modal-btn");

//------------ GET CURRENT WEATHER FOR CURRENT LOCATION -----------
function getMyLocation() {
    if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position);
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
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

//-------- GET SONGS DEPENDING ON BUTTON CLICKED ------
fearBtn.addEventListener('click', () => {
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/' + fearSongs)
        .then(function (response) {
            response.json()
                .then(function (data) {
                    console.log("DEEZER DATA: ", data);
                })
        })
});
happyBtn.addEventListener('click', () => {
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/' + happySongs)
        .then(function (response) {
            response.json()
                .then(function (data) {
                    console.log("DEEZER DATA: ", data);
                })
        })
});
sadBtn.addEventListener('click', () => {
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/' + sadSongs)
        .then(function (response) {
            response.json()
                .then(function (data) {
                    console.log("DEEZER DATA: ", data);
                })
        })
});
surpriseBtn.addEventListener('click', () => {
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/' + surpriseSongs)
        .then(function (response) {
            response.json()
                .then(function (data) {
                    console.log("DEEZER DATA: ", data);
                })
        })
});


//------ SEARCH SONG -------
function searchFunction() {
    var searchInput = document.querySelector('search-input');
    console.log(data)
    fetch(
<<<<<<< HEAD
            'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=' + searchInput
        )
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response.data[0]);
        });
    window.open(searchInput, '_blank')
}
modalBtn.addEventListener('click', getMyLocation);
=======
 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=' + searchInput
    )
    .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response.data[0]);
      });
      window.open(searchInput, '_blank')
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
>>>>>>> develop
