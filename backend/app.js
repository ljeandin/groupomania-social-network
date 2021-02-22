const express = require("express"); //well, you know what that's for
const bodyParser = require("body-parser"); // body parser to read form input and storing it as JS object
const path = require("path"); // path is used to make path manipulation easier
const history = require("connect-history-api-fallback");
const enforce = require("express-sslify");

//Declaring routes
const userRoutes = require("./routes/user.routes");
const feedRoutes = require("./routes/feed.routes");

//Using express
const app = express();

//using https
app.use(enforce.HTTPS({ trustProtoHeader: true }));

//serving production compiled files
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.use(history());

//headers for avoiding CORS problems
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});

//using bodyParser
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome" });
});

//path to images
app.use("/images", express.static(path.join(__dirname, "images")));

//path to user-related routes
app.use("/api/user", userRoutes);
//path to feed-related routes
app.use("/api/feed", feedRoutes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/../frontend/build/index.html"));
});

module.exports = app;
