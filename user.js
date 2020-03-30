const express = require('express')
const app = express()
const port = process.env.USER_PORT||3000

const fs = require('fs');

let users = fs.readFileSync('users.json');  
let user = JSON.parse(users);  

app.get('/user/:id', function (req, res) {
        res.json(user);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))