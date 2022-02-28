function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get("x-forwarded-proto") !== "https") {
        return res.redirect("https://" + req.get("host") + req.url);
    }
    next();
}
var express = require("express");
var app = express();

app.use(requireHTTPS);

app.use(express.static("./dist/amig-app"));

app.get("/*", function(req, res) {
    res.sendFile("index.html", { root: "dist/amig-app/" });
});

app.listen(process.env.PORT || 8080);