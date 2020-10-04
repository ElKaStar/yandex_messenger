const express = require("express");
const app = express();


app.use(express.static("static"));


app.get("/", (request, response) => {
    response.sendFile(__dirname + "/static/index.html");
});



// listen for requests
const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});
