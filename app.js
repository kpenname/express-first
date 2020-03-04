//this is a server app

const express = require("express"); // importing this file so we can use it

const app = express(); //and running the file, express, and storing it in app

const port = 9000; // choosing the port to use

// writing a method off app 
// .get responds to a GET request
app.get('/', (req, res) => {//req is request, res is result
    res.send('Hello, World'); // this shows on the client-side page at localhost:9000
    
}); 
// this will run every time a client visits the root of our web server

app.listen(port, () => {
    console.log(`listening to port ${port}`) // the console here will be the
    // powershell where we launch the code
}); // a method that needs a port to listen to

