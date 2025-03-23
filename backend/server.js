//Simple Express server

const express= require("express")
const cors= require("cors")
require("dotenv").config()
const weatherRoutes= require("./routes/weatherRoutes") //Import weather route

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())
app.use("/api/weather", weatherRoutes)

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))

