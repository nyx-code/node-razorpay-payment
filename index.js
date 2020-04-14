const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req, res) => {
    res.status(200).json({
        message: "Hello There!!"
    })
})

app.listen(port, () => {
    console.log(`Server is up at ${port}`)
})