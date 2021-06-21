if (!process.env.MODE) {
    require('dotenv').config()
}
const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000
const URI = process.env.URI

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express()
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})