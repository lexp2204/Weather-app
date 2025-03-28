import { useState } from 'react'
import axios from "axios"
import "./App.css"
import search from "./assets/search.png"
import weatherImage from "./assets/foggy.png"
import humidityImage from "./assets/humidity.png"
import windSpeed from "./assets/wind.png"
import sunnyImage from "./assets/sunny.png"
import rainImage from "./assets/heavy-rain.png"
import snowyImage from "./assets/snowy.png"


// Function to get dynamic weather image
const getWeatherImage = (weatherCondition) => {
  switch (weatherCondition) {
    case "Clear":
      return sunnyImage;
    case "Clouds":
      return weatherImage;
    case "Rain":
      return rainImage;
    case "Snow":
      return snowyImage;
    default:
      return weatherImage;
  }
}



function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather]=useState(null)

  //async function fetchWeather
  const fetchWeather= async ()=>{
    try{
      const response= await axios.get(`http://localhost:3000/api/weather/${city}`) //Api end point
      setWeather(response.data)
    }catch(error){
      console.error("Error fetching weather data", error)
    }
  }

  return (
    <div className='weather-container'>
      <div className='input-container'>
        <input className="search" type="text" placeholder='Enter city' value={city} onChange={(e)=> setCity(e.target.value)} />
        <button className="button" onClick={fetchWeather}><img src={search}/></button>
      </div>

      {weather && (
        <div>
          <p className='location-name'>{weather.name}</p>
          <div className='image-container'>
              <img  className="weather-img" src={getWeatherImage(weather.weather[0].main)} />
          </div>
          

          <p className='temp'>{Math.round((weather.main.temp*9/5)+32)}°F</p>
          <p className='description'>{weather.weather[0].description}</p>

          <div className="more-info">
            <img className='humidity-img' src={humidityImage} />
            <div className='humidity-text'>
              <p className='humidity-num'>{weather.main.humidity}%</p>
              <p className='humidity-title'>Humidity</p>
            </div>
            <img className="wind-img" src={windSpeed}/>
            <div className='wind-text'>
              <p className='wind-num'>{weather.wind.speed}km/h</p>
              <p className='wind-title'>Wind Speed</p>
            </div>
          </div>

        </div>
      )}
    </div>
  )
}

export default App
