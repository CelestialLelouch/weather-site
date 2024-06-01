const weatherIcons = {
    "clear sky": "weather_images/clear sky.png",
    "few clouds": "weather_images/few clouds.png",
    "scattered clouds": "weather_images/few clouds.png",
    "broken clouds": "weather_images/cloudy.png",
    "shower rain": "weather_images/rainy.png",
    "rain": "weather_images/rainy.png",
    "thunderstorm": "weather_images/storm.png",
    "snow": "weather_images/snow.png",
    "mist": "weather_images/mist.png",
    "light rain": "weather_images/light rain.png",
    "moderate rain": "weather_images/rain.png",
    "heavy intensity rain": "weather_images/heavy rain.png",
    "very heavy rain": "weather_images/heavy rain.png",
    "extreme rain": "weather_images/heavy rain.png",
    "freezing rain": "weather_images/snow.png",
    "light intensity shower rain": "weather_images/rainy.png",
    "heavy intensity shower rain": "weather_images/rainy.png",
    "ragged shower rain": "weather_images/rainy.png",
    "light snow": "weather_images/snow.png",
    "heavy snow": "weather_images/snow.png",
    "sleet": "weather_images/snow.png",
    "shower sleet": "weather_images/snow.png",
    "light rain and snow": "weather_images/snow.png",
    "rain and snow": "weather_images/snow.png",
    "light shower snow": "weather_images/snow.png",
    "shower snow": "weather_images/snow.png",
    "heavy shower snow": "weather_images/snow.png",
    "smoke": "http://openweathermap.org/img/wn/50d.png",
    "haze": "weather_images/mist.png",
    "sand/ dust whirls": "http://openweathermap.org/img/wn/50d.png",
    "fog": "http://openweathermap.org/img/wn/50d.png",
    "sand": "http://openweathermap.org/img/wn/50d.png",
    "dust": "http://openweathermap.org/img/wn/50d.png",
    "volcanic ash": "http://openweathermap.org/img/wn/50d.png",
    "squalls": "http://openweathermap.org/img/wn/50d.png",
    "tornado": "http://openweathermap.org/img/wn/50d.png",
    "tropical storm": "http://openweathermap.org/img/wn/50d.png",
    "hurricane": "http://openweathermap.org/img/wn/50d.png",
    "cold": "http://openweathermap.org/img/wn/50d.png",
    "hot": "http://openweathermap.org/img/wn/50d.png",
    "windy": "weather_images/windy.png",
    "hail": "http://openweathermap.org/img/wn/50d.png",
    "overcast clouds":"few clouds.png"
};  // This where are define the weather descriptions and assign them to their relevant icons


function getWeather(){
    var mydata;
    var value = document.getElementById('locale').value; // This retrieves the value enter on the search bar
     
    
    // down here I am fetching the necessary data from the openweathermap API
    //API KEY: 6e194663583bdba673e1df8d93e95a91
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+value+"&appid=6e194663583bdba673e1df8d93e95a91")
    .then(response => {
        if(response.ok){
            return response.json()
        }else{

            // This will be displayed if the user enters an invalid city name or the fetch method failed to fetch the relevant data
            document.getElementById('cityName').innerHTML = 'City Not Found'
            document.getElementById('wIcon').src = 'weather_images/city failed.png'
            document.getElementById('wStatus').innerHTML = 'No Status'
            document.getElementById('wDescription').innerHTML = 'No Description'
            document.getElementById('Temperature').innerHTML = '--00.00 °C--'
        }
    })
    .then(data =>{
        console.log(data)
        let description = data.weather[0].description // Getting the weather description
        let temperature = data.main.temp - 273.15  // converting temperature data from the API from Kelvin to Celsius 

        document.getElementById('cityName').innerHTML = data.name;
        document.getElementById('wStatus').innerHTML = data.weather[0].main;
        document.getElementById('wDescription').innerHTML = description;
        document.getElementById('Temperature').innerHTML = temperature.toFixed(2) + '°C'; 
        document.getElementById('wIcon').src = weatherIcons[description];    //Using the weather description to load a suitable icon to represent the weather
    })
    .catch(error =>{
        console.log(error)
    })

}


