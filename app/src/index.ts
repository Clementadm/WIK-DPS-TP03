// console.log('Hello world')
import express from "express";
const dotenv = require("dotenv");
const app = express();

// variable d'environnement
dotenv.config();
const myPort = process.env.PING_LISTEN_PORT;
var os = require("os");
var tab = new Array();
//parse every url
app.get("*", (req, res) => {
  // check if ping return headers else no data (error 404)
  if (req.url == "/ping") {
    console.log("Your actual hostname is : " + os.hostname());
    return res.json(req.headers);
  }
  res.status(404).end();
});

// run the app on the env variable
app.listen(myPort, () => {
  console.log("The application is listening on the env port!");
  console.log("The hostname  is : " + os.hostname());
  console.log("_____________________________________________");
});
