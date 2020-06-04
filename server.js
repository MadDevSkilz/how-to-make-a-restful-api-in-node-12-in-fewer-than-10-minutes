const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", function(request,response){
    const version = {
        major: 1,
        minor: 0,
        build: 0
    }

    return response.json(version);
});

app.get("/api/v1/users", function(request, response){
    const users = [
        {name: "Bruce", email: "bruce@foo.com", favoriteLanguage: "Javascript (right now)"},
        {name: "Karina", email: "karina@foo.com", favoriteLanguage: "PERL"},
        {name: "Kitty", email: "kitty@foo.com", favoriteLanguage: "Python"},
        {name: "Phoebe", email: "phoebe@foo.com", favoriteLanguage: "Assembly Language"}
    ]

    return response.json(users);
});

app.listen(3000, function(){
    console.log("Server is running");
});