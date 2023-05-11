const express = require('express');

const app  = express();

app.listen(3000);


app.get('/' , (req,res) => {
    res.sendFile('./dammam sport center/index.html',{ root : __dirname});
});
app.get('/academices' , (req,res) => {
    res.sendFile('./dammam sport center//academices.html',{ root : __dirname});
});
app.get('/stadiums' , (req,res) => {
    res.sendFile('./dammam sport center/stadiums.html',{ root : __dirname});
});
app.get('/matches' , (req,res) => {
    res.sendFile('./dammam sport center/matches.html',{ root : __dirname});
});
app.get('/tournaments' , (req,res) => {
    res.sendFile('./dammam sport center/tournaments.html',{ root : __dirname});
});
app.get('/login' , (req,res) => {
    res.sendFile('./dammam sport center/login-user.html',{ root : __dirname});
});
app.get('/login-admin' , (req,res) => {
    res.sendFile('./dammam sport center/login-admin.html',{ root : __dirname});
});
app.use(express.static('dammam sport center'));