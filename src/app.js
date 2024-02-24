const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/db");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes");
const helmet = require("helmet");
var session = require("express-session");
const { verifyJwtToken } = require("./utils/jwt");

/* app from express */
const app = express();
app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY, // Change this to a secure random key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 60000 }, // Set secure to true if your app is served over HTTPS
  })
);

/*core()*/
app.use(cors());
app.use((req, res, next) => {
  if (req.path === "/api/auth/login" || req.path === "/api/auth/register" || req.path === "/api/auth/forget-password") {
    return next();
  }
  if (req.path === "/api/user/session" || req.path === "/api/user/logout") {
    return next();
  }
  verifyJwtToken(req, res, next);
});

/* bodyParser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use Helmet!
app.use(helmet());

// Use morgan!
app.use(morgan("short"));

app.use("/api/", routes);

app.get("/api/home", (req, res) => {
  console.log("hello");
  res.send("hello");
});

app.get("/", (req, res) => {
  console.log("hello");
  res.send("hello");
});

app.get("/", (req, res) => res.send("Hello World!"));

const port = process.env.PORT ?? 3000;
app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
