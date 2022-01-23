const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()


const port = process.env.PORT || 8000

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors())

// CONNECT TO DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Successfully connected to database");
    })
    .catch((error) => {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
    });

// ROUTES
const authRoutes = require("./routes/AuthRoute")
app.use('/api/user', authRoutes)


app.listen(port, () => {
    console.log(`server started on port ${port}`)
})