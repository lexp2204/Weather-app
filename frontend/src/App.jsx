import { useState } from 'react'
import axios from "axios"

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
    <div>
      <h1>Weather App</h1>
      <input type="text" placeholder='Enter city' value={city} onChange={(e)=> setCity(e.target.value)} />
      <button onClick={fetchWeather}>Get Weather</button>

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather Description: {weather.weather[0].description}</p>
          <p>Wind speed: {weather.wind.speed}</p>
          <p>Humidity: {weather.main.humidity}</p>
        </div>
      )}
    </div>
  )
}

export default App
