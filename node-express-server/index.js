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

//Dummy Data
const users = [
    { name: "Alice", email: "alice@example.com", birthdate: "01/02/1990" },
    { name: "Bob", email: "bob@example.com", birthdate: "03/04/1995" },
    { name: "Charlie", email: "charlie@example.com", birthdate: "05/06/2000" },
    { name: "David", email: "david@example.com", birthdate: "07/08/1985" },
    { name: "Eve", email: "eve@example.com", birthdate: "09/10/1998" },
    { name: "Frank", email: "frank@example.com", birthdate: "11/12/1975" },
    { name: "Grace", email: "grace@example.com", birthdate: "13/14/2002" },
    { name: "Harry", email: "harry@example.com", birthdate: "15/16/1993" },
    { name: "Ivy", email: "ivy@example.com", birthdate: "17/18/1980" },
    { name: "Jack", email: "jack@example.com", birthdate: "19/20/1997" }
];

//Fetch users
app.get("/get-users", async (req, res) => {
    res.send(users);
});

//Server Listener
app.listen(port, () => {
    console.log("The server is listening on http://localhost:" + port);
});