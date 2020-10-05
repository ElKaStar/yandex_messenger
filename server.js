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
app.get("/500", (request, response) => {
    response.sendFile(__dirname + "/public/500ServerError.html");
});
app.get("/404", (request, response) => {
    response.sendFile(__dirname + "/public/404pageNotFound.html");
});
app.get("/list-of-chats", (request, response) => {
    response.sendFile(__dirname + "/public/ListOfChats.html");
});


// listen for requests
const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});
