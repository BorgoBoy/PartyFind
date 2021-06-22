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
})
.then(console.log('Database connected'))
.catch((err) => {console.log(err)})

const app = express()
app.use(express.json())

const indexRoute = require('./routes/index')
const postRoute = require('./routes/post')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')

//app.use('/'. indexRoute)
app.use('/post', postRoute)
//app.use('/auth', authRoute)
app.use('/user', userRoute)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})