const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")

dotenv.config()

const app = express()
const port = process.env.PORT || 4000

app.get("/", (req, res) => {
  res.send("Welcome to the API!")
})

app.listen(port, () => {
    connectDB()
  console.log(`Server is running on http://localhost:${port}`)
})
