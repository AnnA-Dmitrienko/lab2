// /*LAB_2 WEB322
// Student name: Anna Dmitrienko
// Student ID: 120-412-218
// */

const HTTP_PORT = process.env.PORT || 3000;

const express = require("express");
const app = express();

app.use("/", express.static("public")); //	Set the public subfolder as the default folder
app.use("/images", express.static(__dirname + "/images")); //	Set the images subfolder as the default folder for the /images route

const server = app.listen(HTTP_PORT, function () {
  console.log(`Listening on port ${HTTP_PORT}`);
});
