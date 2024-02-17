const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/db");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes");
const helmet = require("helmet");



/* app from express */
const app = express()

/*core()*/
app.use(cors());

/* bodyParser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use Helmet!
app.use(helmet());

// Use morgan!
app.use(morgan("short"));



app.use('/api/', routes);

app.get("/api/home", (req, res) => {
    console.log("hello");
    res.send("hello");
});

app.get("/", (req, res) => {
    console.log("hello");
    res.send("hello");
});

app.get('/', (req, res) => res.send('Hello World!'))

const port = process.env.PORT ?? 3000;
app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))