
const express = require("express")
require("./db")
// const studentRouter = require("./routes/studentRouter")

const PORT = 3000
const app = express()
app.use(express.json)
// app.use(studentRouter)
app.listen(PORT, ()=>{console.log("My app is running on "+PORT)}) 