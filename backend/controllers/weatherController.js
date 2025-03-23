//Fetch weather data using Axios

const axios= require("axios")

exports.getWeather= async (req, res)=>{
    try{
        const city= req.params.city
        const apiKey= process.env.WEATHER_API_KEY
        const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

        res.json(response.data)
    }catch(error){
        res.status(500).json({message: "Error fetching weather data"})
    }
}