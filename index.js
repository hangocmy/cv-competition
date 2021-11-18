const express = require("express");
const path = require("path");

const app = express();

const port = 8080;

const cvRouter = require("./routers/cvRouter");
const publicDirectoryPath = path.join(__dirname, "./public");

app.set("views", path.join(__dirname, "views"));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(publicDirectoryPath));

app.use("/cv", cvRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
