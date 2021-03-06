var express = require("express");
var app = express();

var http = require("http").Server(app);

const port = process.env.PORT || 80;

app.set("port", port);

http.listen(app.get("port"), () => {
  console.log("listening on port", app.get("port"));
});

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile("index.html");
});

app.get("/signup", function(req, res) {
  console.log(__dirname);
  return res.sendFile(__dirname + "/public/signup.html");
});
