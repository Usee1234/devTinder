

// let us create our srever now..

const express = require('express');
//creating a express application instance
//this is the main entry point of our application

const {adminAuth, userAuth, vibhuAuth}=require("./middlewares/auth"); 

const app=express();
app.listen(7777,()=>{
    console.log("Server is running on port 7777");
});
//now we will send a response back to the client


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
//GET/users => middleware chain => boom correct req handeler this are middlewares beacuse they are called in the middle of the chain.
// It checks all the app.xxx("matching req") functions... middleware by middleware till it finds a match.
app.use("/",(req,res,next)=>{// If we use app.get with "/" it will only handle default GET request.
    //but if we use app.use it will handle all the HTTP methods like GET, POST, PUT, DELETE, etc. why beacuse 
    // app.use is a middleware function that will be executed for all the requests that come to the server. so ye invalid route samjehga /user ko aur aapko 
    // default route pe bhej dega. aur order of ececution mai ye sabse pehle aa gaya iss wajah se ye aage kuch execute karega.

    next(); // Passes control to the next middleware or route handler
    // res.send("By default route");
})
app.use("/user",userAuth);//user wale middleware ko embedde kar diya ab ye check karega auth pehle
app.get("/user",(req,res,next)=>{
    console.log("get request received");
    next(); // Passes control to the next middleware or route handler
})
app.get("/user",(req,res)=>{
   console.log("2nd get request received");
   res.send("Hello from the user route");
})
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










// why we need middleware at all lets us go through the practical example
// supose there is an admin who wnants all the data of the users
// so we can create a middleware that will check if the user is an admin or not and
// but we need authentication and authorization for that any one cant just access the admin route recklessely
// this middleware will run for all the requests that come to the /admin route
//this is the proper use of middleware we are handeleing auth with this example

// Ab apaun direct utils se auth lenge as utility!!!


// app.use("/admin",(req,res,next)=>{
//     // Auth logic
//     // Here we can check if the user is an admin or not
//     const Actualtoken="abc@2536yy";
//     const isAuthenticated=Actualtoken==="abc@2536yy"; // This is just a dummy check for the sake of example here we are assigning and decalring const at same 
//     // time so we cant get error but if we assign it later we should use let or var as const cant be modified.
//     if(!isAuthenticated){
//         return res.status(401).send("Unauthorized access");
//     }
//     else{
//         next(); // Passes control to the next middleware or route handler// ye get req ko appropriate route handler tak navigate kar dega.
//     }
// })

app.use("/admin",adminAuth);//admin wale middleware ko embedde kar diya ye auth check karega pehle

app.get("/admin/getalldata",(req,res,next)=>{// this middleware will only be called for /admin
    // const Actualtoken="abc@2536yy";
    // let isAuthenticated=false;
    // const fetchedToken="abc@2536yy55";
    // if(fetchedToken===Actualtoken ){ // Passes control to the next middleware or route handler
    // isAuthenticated=true;
    // }
    // if(isAuthenticated){
    //   res.send("all users data sent to the admin");
    // } 
    // else{
    //     res.status(401).send("Unauthorized access");
    // }
    console.log("All users data sent ");
     res.send("all users data sent to the admin");
        // Passes control to the next middleware or route handler
{}})
app.get("/admin/deleteData",(req,res,next)=>{
    console.log("Data deleted sucessfully");
   res.send("Data deleted from the database");
        // Passes control to the next middleware or route handler
{}})

app.get("/test",(req,res,next)=>{// ye bhi ek middleware hai but keval get request ke liye specific hai jo /test se start hongi
//  for all genral req we can use app.use method...
 console.log("Navigating according to route");
 next();
})
app.get("/test/name",(req,res,next)=>{
 console.log("Navigating according to route name");
 res.send("Vibhu");
})
app.get("/test/age",(req,res,next)=>{
 console.log("Navigating according to route age");
 res.send("22"); 
})
// app.use("/vibhu",vibhuAuth)
app.get("/vibhu", vibhuAuth,(req,res,next)=>{ //kyuki ek hi handeler hai tu mai directly auth yaha pass kar sakta hu ye basically ek hof ko call hi 
// hai usme maine do call back function pass kar diye hai.its usefull when suppose we only need auth for purpose only like for login we dont need auth 
// so we  can attach auth middleware according to our ease like 
// /vibhu/login does not need auth so it will never checked...
res.send("hello I am Vibhu Mathur")
})

// This is a simple example of how middleware can be used to authenticate and authorize users before allowing them to access certain routes.
// but ye middleware is not reusable we have to write the same code again and again for each route ye modular code nahi hai.
// app.use ke sath jo middleware likhte hai wo reusable hota hai har http method ke sath jo /admin ke sath aayega wo sabhi routes ke sath chalega.
//aur middleware kya kar sakta hai wo check kar sakta req and res object ko accordingly and can modify them as well.
// aur uss hisab se auth dega....


// Error handeling in express 
app.get("/profile",(req,res)=>{

try{
//logic of getting profile data

throw new Error("Errror")  //genrally we handel errors inside routes using try catch // this is a good way
}
catch(err){
res.status(500).send("Error Occurs handeled by catch"); //Handeled by catch
}
})
// error ka middleware hamesha req ka res aane ke baad hi tu chalega

// Middleware for Error
app.use("/",(err,req,res,next)=>{//order is very imp agar pehele ye middleware likh doge to route err detect hi nahi hoga
if(err){
    console.log(err)
    res.status(500).send("Error Occurs"); 
    // we can keep this lines towards the end of our application  so that we can catch accordingly
}
})




