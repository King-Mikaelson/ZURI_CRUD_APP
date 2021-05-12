const express = require("express")
const app = express()
require("dotenv").config();
const {PORT} = process.env;

app.use(express.json())

// MONGOOSE SETUP
const dbSetup = require("./database/setup")
const routes = require("./routes/router")
dbSetup();

app.use(routes)



// PORT
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`my app is running on ${PORT}`));