//Adding an API route
const express= require("express")
const {getWeather}= require("../controllers/weatherController") //importing getWeather function

//Creating express router
const router= express.Router()

//route
router.get("/:city", getWeather)

module.exports= router