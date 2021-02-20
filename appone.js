const weatherApi = {
    key: "ef9314b7a313587fcfcf80da5ad175c7",
    baseUrl: "https://api.openweathermap.org/data/2.5/forecast"
}

const searchInputBox = document.getElementById('input-box');

// Event Listener Function on Keypress

searchInputBox.addEventListener('keypress', (event) => {

    if(event.keyCode == 13) {
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector('.weather-body').style.display = "block";
    
    }
});



// Get weather report 

function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&units=metric&appid=${weatherApi.key}`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}


// first weather data
// Show Weather Report 

function showWeatherReport(weather){
    console.log(weather);

    
   

    let temperatureone = document.getElementById('tempone');
    temperatureone.innerHTML = `${Math.round(weather.list[1].main.temp)}&deg;C`;

    let minMaxTempone = document.getElementById('min-maxone');
    minMaxTempone.innerHTML = `min: ${Math.round(weather.list[1].main.temp_min)}&deg;C | max: ${Math.round(weather.list[1].main.temp_min)}&deg;C`;

    let weatherTypeone = document.getElementById('weatherone');
    weatherTypeone.innerText =  `${weather.list[1].weather[0].main}`;
 
    let dateone = document.getElementById('dateone');
    dateone.innerHTML = `${weather.list[1].dt_txt}`;

    

// Show icon image from api 
    
    let iconone = document.getElementById('imgone').src = "http://openweathermap.org/img/wn/".concat(weather.list[1].weather[0].icon).concat("@2x.png");
       
    console.log(iconone);
  

}