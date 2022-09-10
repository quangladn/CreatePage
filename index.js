const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const page = require("./api/page.js")

const port = process.env.PORT || 3000

app.use(express.urlencoded())
app.use(bodyParser.json())
app.use("/page", page)

app.get("/", (rep,res) => {
    res.sendFile(__dirname + "/client/home.html")
})
app.get("/code", (rep,res) => {
    res.sendFile(__dirname + "/client/code.html")
})

app.get("/style", (rep,res) => {
    res.sendFile(__dirname + "/client/style.css")
})
app.get("/js", (rep,res) => {
    res.sendFile(__dirname + "/client/index.js")
})

app.listen(port, () => console.log(port))