












const getWeather = async (cityName) => {

    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=b4c426c91009e3429c4af53c61fd6e9c&q=${cityName}&units=metric`)
    let res = await req.json()
    console.log(res);
    ui(res)

}

const getWeatherByLocation = async (lat, long) => {

    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric`)
    let res = await req.json()
    console.log(res);
    ui(res)
}

const ui = (data) => {
    let temp = `<header>
            <h1>Weather Forecast</h1>
            <input type="text" placeholder="Enter city name" id="city-input">
            <button id="search-button">Search</button>
        </header>
        
        <section class="weather-display" id="weather-display">
            <h2 id="city-name">City Name</h2>
            <p id="temperature">Temperature: 0°C</p>
            <p id="condition">Condition: Clear</p>
        </section>
        
        <footer>
            <p>&copy; 2024 Weather App</p>
        </footer>`
    document.getElementById("container").innerHTML = temp
}

const handleSubmit = (e) => {
    e.preventDefault();
    let cityName = document.getElementById("city").value

    getWeather(cityName)
}

document.getElementById("form").addEventListener("submit", handleSubmit)


const getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        console.log(position);
        getWeatherByLocation(lat, lon)

    })
}

getLocation()




