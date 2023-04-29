const express = require("express");

require("dotenv").config();
const dbConnect = require("./config/dbconnection");
const initRoutes = require("./routes");
const app = express();
const port = process.env.PORT || 8888;

// doc duoc data kieu json
app.use(express.json());
// giup doc duoc data gui theo kieu urlencode
app.use(express.urlencoded({ extended: true }));
dbConnect();
initRoutes(app);
app.use("/", (req, res) => {
  res.send("SERVER ON");
});

app.listen(port, () => {
  console.log("Server running on the port: " + port);
});
