const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// ROUTES
const authRoutes = require("./routes/AuthRoute")
app.use(authRoutes)

app.get("/signup", (req, res) => {
    res.send("signup")
})

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})