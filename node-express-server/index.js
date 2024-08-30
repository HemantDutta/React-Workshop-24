//Imports
import express from 'express';
import cors from 'cors';

//Create Express App
const app = express();
const port = 5000;

//Configuration
app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//Credentials
const credentials = {
    username: "Hemant",
    password: "Hemant@123"
}

//Log-in
app.post("/log-in", async (req, res) => {
    let {username, password} = req.body;

    if(username === credentials.username) {
        if(password === credentials.password) {
            res.send("success");
        }
        else {
            res.send("Incorrect Password!");
        }
    }
    else {
        res.send("User not found!");
    }
});

//Server Listener
app.listen(port, () => {
    console.log("The server is listening on http://localhost:" + port);
});