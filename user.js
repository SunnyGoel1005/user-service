const express = require('express')
const app = express()
const port = 3000

app.get('/user/:id', function (req, res) {
	const user = {
        "name" : "Sunny Goel",
        "age" : "26",
        "email" : "sunny@gmail.com"
        }
        res.json(user);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))