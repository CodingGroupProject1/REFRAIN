//-------- CONFIG ----------
const apiURL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/user/4164456382/playlists';

//---------- DISPLAY WEATHER ---------
var cityName = document.querySelector("#location");
var weatherIcon = document.querySelector("#icon");
var temp = document.querySelector("#temp");
var conditions = document.querySelector("#cloud");

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
var btns = document.querySelectorAll('.mood button');

//------------ GET CURRENT WEATHER FOR CURRENT LOCATION -----------
function getMyLocation() {
    if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(function(position){
        console.log(position);
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial&exclude=minutely,hourly,alerts&appid=f7e68c78a6c0589ffc5c75fdd1fe6b01')
        .then(function (response) {
            response.json()
            .then(function (data) {
                console.log("Weather data: ", data);

                weatherIcon.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';
                cityName.textContent = data.name;
                temp.textContent = Math.floor((data.main.temp - 32) * 5/ 9) +" °C";
                conditions.textContent = data.weather[0].description;
            })
        })
        console.log("Coordinates: ", lat, lon);
    });
    else {
        console.log("Geolocation not available on device");
    }
}
getMyLocation("Data: ");

const getIframeSrc = (id) => `https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=EF5466&layout=&size=medium&type=playlist&id=${id}&app_id=1`;

const loadIframe = (type, response) => {
    const { data } = response;
    console.log("DEEZER DATA: ", data, type);

    // Find data.title equal to type
    const track = data.find(track => track.title === type);
    
    // Get id
    const { id } = track;
    
    console.log({ track, id })

    // Generates new source
    const src = getIframeSrc(id);

    // Get iframe and sets source
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', src);
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowTransparency', 'true');
    iframe.setAttribute('width', '800');
    iframe.setAttribute('height', '450');


    console.log({iframe, track});
 
    // Show iframe after removing previous elements
    const container = document.querySelector('#iframe-container');
    container.childNodes[0]?.remove();
    container.appendChild(iframe);
}

//-------- GET SONGS DEPENDING ON BUTTON CLICKED ------
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const buttonId = btn.id.replace('-play', '');
            modal.style.display = "none";
            const types = {
                fear: 'Fearful',
                sad: 'Sad',
                happy: 'Happy',
                surprise: 'Surprise'
            };
            const type = types[buttonId];

            fetch(apiURL)
                .then(response => response.json())
                .then(response => loadIframe(type, response))
                // .then(loadIframe.bind(type))
        })
    })

//------ SEARCH SONG -------
function searchFunction() {
    var searchInput = document.querySelector('search-input');
    console.log(data)
    fetch(
 'https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/playlist?q=' + searchInput + '&strict=on'
    )
    .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response.data.data[0]);
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

//------ SEARCH SONG -------
function searchArtist() {
    var textInput = document.querySelector('#input').value;
    const url = 'https://www.deezer.com/search/'
    var inputUrl = url + textInput
    var win = window.open(inputUrl, '_blank')
    win.focus
}
