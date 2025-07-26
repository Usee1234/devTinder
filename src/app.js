//here we will intialize the app
// this is a server where we will handle all the requests and establish the connection with the database establish our ever lasting TCP/ip connection in 
//listen to the port and start the server.
//we wiil be able to accept the incoming requests and send the response back to the client
// this this is the main entry point of our application
//this time we will be using express to handle the requests and responses
//why?? //because it is a lightweight framework that helps us to handle the requests and responses easily
//it is a minimal and flexible Node.js web application framework that provides a robust set of features 
//to develop web and mobile applications. It facilitates the rapid development of Node.js-based web applications.
//Let's start by installing express and nodemon


//what is nodemodules?? //it is a folder that contains all the dependencies that we have installed using npm
//it is a folder that contains all the packages that we have installed using npm we have basically downaloded the code of express and put it in this folder
//it is a folder that contains all the packages that we have installed using npm we have basically
//express added as first dependency in our package.json file.
// and express is also dependent on many other packages and dependencies and its cascadedd if module has dependencies then those will also be installed in the node_modules folder
//its a fucking chain reaction

// let us create our srever now..
const express = require('express');
//creating a express application instance
//this is the main entry point of our application
const app=express();
// created a server on our local machine   
//now we will listen to the port 3000 and start the server
//now how do we handel the code inside the server
// uing app.use methos
// app.use((req,res)=>{
// res.send("Hello hello hellohello from home ");
// })
app.use("/hello",(req,res)=>{
res.send("Hello hello hellohello 12323");
})
//this is a middleware function that will be called for every request that comes to the server
    //req is the request object that contains all the information about the request that came to the server
    //res is the response object that we will use to send the response back to the client
    // In Express, app.use() is a method to add middleware functions to your application. 
    // Middleware functions are functions that have access to the request (req) and response (res) objects, 
    // and the next() 
    // function in the application’s request-response cycle.
    // the first parameter in app .use can be a request handleler
app.use("/test",(req,res)=>{
    res.send("Hello from the server hehhe");
})
app.use("/abc",(req,res)=>{
    res.send("Helllo Its abc");
})
app.listen(7777,()=>{
    console.log("Server is running on port 7777");
});
//now we will send a response back to the client







