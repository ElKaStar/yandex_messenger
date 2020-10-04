const express = require("express");
const app = express();


app.use(express.static("public"));

console.log(__dirname)
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/public/index.html");
});
app.get("/registration", (request, response) => {
    response.sendFile(__dirname + "/public/RegistrationPage.html");
});
app.get("/messages", (request, response) => {
    response.sendFile(__dirname + "/public/MessagesPage.html");
});



// listen for requests
const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});
