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
//backend applications is what just a set of routing API's that we will be using to handle the requests and responses so you have to be really good at routing and handling the requests and responses
// this code will override the every code as any thing which matches after the / will be handled by this code that is why it overrides all the routes
// app.use("/hello/123/vibhu",(req,res)=>{ //similary it will handel any thing that comes after /hello like /hello/abc or /hello/xyz/hhdh/jdj


// res.send("Hello Bhai Vibhu Kya HAAL Hain");// Jaise hi usko first matching route dikhega usko execute kar dega.
// })
// app.use("/hello/123",(req,res)=>{ //similary it will handel any thing that comes after /hello like /hello/abc or /hello/xyz/hhdh/jdj
// res.send("Hello Hellon hellohello from 123");
// })
// app.use("/hello",(req,res)=>{ //similary it will handel any thing that comes after /hello like /hello/abc or /hello/xyz/hhdh/jdj
// res.send("Hello hello hellohello");
// })


//this is a middleware function that will be called for every request that comes to the server
    //req is the request object that contains all the information about the request that came to the server
    //res is the response object that we will use to send the response back to the client
    // In Express, app.use() is a method to add middleware functions to your application. 
    // Middleware functions are functions that have access to the request (req) and response (res) objects, 
    // and the next() 
    // function in the application’s request-response cycle.
    // the first parameter in app .use can be a request handleler


//This will only handel get calls to the /user route
// app.use("/user",(req,res,next)=>{
//     res.send("HAHAHA ALL THINGHS OVERIDED BY THIS CODE");
// })
app.get("/user",(req,res)=>{
res.send({FirstName:"Vibhu",
    LastName:"Mathur"});
})
//this will handle only all the post requests that come to the /user route
app.post("/user",(req,res)=>{
console.log("save data to the database");
res.send("Data sucessfully saved to the database");
})
app.delete("/user",(req,res)=>{
res.send("Data deleted from the database");
})
// this will match all the HTTP method API calls to /test whjether it is GET, POST, PUT, DELETE, etc. this app.use one.
app.use("/test",(req,res)=>{
    res.send("Hello from the server hehhe");
})// this will handle any request that comes to the server with /test in the url  example /test/abc or /test/xyz/hello but not /test123 or /testabc as test123 is a diffrent
//  string then simple test. but /test/anything will work...\

// app.use("/abc",(req,res)=>{
//     res.send("Helllo Its abc");
// })

// app.use("/",(req,res)=>{
// res.send("HOLA VIBHU");
// }) //just by changeing order of the routes we can change the order of the execution of the routes the code will start matching the routes from top to bottom.
// and this order is very very impoertant so we can say that deafult route is the last route that will be executed if no other route matches and it comes at 
//the end of the code. or written at last in the order of execution.
app.listen(7777,()=>{
    console.log("Server is running on port 7777");
});
//now we will send a response back to the client

// see browser is the worst way to test ypur API'S to test your routes you can use postman or any other API testing tool
//postman is a tool that allows you to test your API's by sending requests and receiving responses
//you can also use curl command to test your API's from the terminal

//postmamn is used for API testing and it is a very powerful tool that allows you to test your API's by sending requests and receiving responses






