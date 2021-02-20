// http://api.openweathermap.org/data/2.5/forecast?q=delhi&units=metric&appid=
const weatherApi = {
    key: "ef9314b7a313587fcfcf80da5ad175c7",
    baseUrl: "https://api.openweathermap.org/data/2.5/forecast",
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

// Show Weather Report 

function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.city.name}, ${weather.city.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.list[0].main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `min: ${Math.round(weather.list[0].main.temp_min)}&deg;C | max: ${Math.round(weather.list[0].main.temp_min)}&deg;C`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText =  `${weather.list[0].weather[0].main}`;
 
    let date = document.getElementById('date');
    date.innerHTML = `${weather.list[0].dt_txt}`;

    
    
    
    let icon = document.getElementById('img').src = "http://openweathermap.org/img/wn/".concat(weather.list[1].weather[0].icon).concat("@2x.png");
       
    console.log(icon);



    if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('images/clouds.jpg')";

    }else if(weatherType.textContent == 'Snow') {

        document.body.style.backgroundImage = "url('images/snowy.jpg')";

    }else if(weatherType.textContent == 'Clear') {

        document.body.style.backgroundImage = "url('images/clear sky.jpeg')";

    }else if(weatherType.textContent == 'Rain') {

        document.body.style.backgroundImage = "url('images/rainy.jpg')";

    }else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('images/haze.jpg')";

    }else if(weatherType.textContent == 'Thunderstrom') {

        document.body.style.backgroundImage = "url('images/thunderstrom.jpg')";

    }else if(weatherType.textContent == 'Mist') {

        document.body.style.backgroundImage = "url('images/haze.jpg')";

    }else if(weatherType.textContent == 'Smoke') {

        document.body.style.backgroundImage = "url('images/smoke.jpg')";

    }else if(weatherType.textContent == 'Dust') {

        document.body.style.backgroundImage = "url('images/dust.jpg')";

    }else if(weatherType.textContent == 'Fog') {

        document.body.style.backgroundImage = "url('images/haze.jpg')";
    
    }else if(weatherType.textContent == 'Sand') {

        document.body.style.backgroundImage = "url('images/dust.jpg')";
                
    }else if(weatherType.textContent == 'Ash') {

        document.body.style.backgroundImage = "url('images/volcanic.jpg')";
                
    }else if(weatherType.textContent == 'Squall') {

        document.body.style.backgroundImage = "url('images/clouds.jpg')";
                
    }else if(weatherType.textContent == 'Tornado') {

        document.body.style.backgroundImage = "url('images/tornado.jpg')";
                
    }else if(weatherType.textContent == 'Drizzle') {

        document.body.style.backgroundImage = "url('images/drizzle.jpg')";
                
    }
   
}




