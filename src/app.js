

// let us create our srever now..

const express = require('express');
//creating a express application instance
//this is the main entry point of our application

const app=express();
// this is a get route that client sends to the server.
// app.get("/user",(req,res)=>{
//     //this is a route handler for the /user route
//     //this will handle all the get requests that come to the /user route
//     console.log("get request received");
//     res.send("Hello from the user route");
// })
// //this will handle only all the post requests that come to the /user route

// app.post("/user",(req,res)=>{
// console.log("save data to the database");
// res.send("Data sucessfully saved to the database");
// })

// app.delete("/user",(req,res)=>{
// res.send("Data deleted from the database");
// })


// // this will match all the HTTP method API calls to /test whjether it is GET, POST, PUT, DELETE, etc. this app.use one.


// we can add multiple route handlers for the same route app.use("/route", rh1, [rh2, rh3], ...)
app.use("/user",
    [(req,res,next)=>{
    console.log("1st response");
    // res.send("response!!!");
    // Request handeler functions we are trying  to send two responses to the client which is wrong.res.send() and then response 2 also

    next(); // Passes control to the next middleware passes control to next route handler.
}
,(req,res,next)=>{
    console.log("2nd response");
    // res.send("Response 2 !!!");// No error beacuse there is no next() call here
    next();
}] //can mix and match the functions in the array
,(req,res,next)=>{
    console.log("3rd response");
    next();
    // res.send("Response 3!!!");
}
,(req,res,next)=>{
    console.log("4th response");
    res.send("Response 4 !!!");
    // if we call next() here it will give an error as express will try to find the next route handler
    //  but there is no next route handler so it will give an error.
})

//  app .use is used to handle all the requests that come to the /user route
// it will handle all the HTTP methods like GET, POST, PUT, DELETE, etc.
// its a middleware function that will be executed for all the requests that come to the /user route
//  console.log("I will hang");
    // Here we are n0t sending any response to the client this will go into infinite request and response loop its making an api call again and again
    // res.send("Hello from the route handelr1");
    //This is a Route handler for all requests to /user



app.listen(7777,()=>{
    console.log("Server is running on port 7777");
});
//now we will send a response back to the client








