-create a repositry
-intialiize the repo npm init // package .json
-node_modules,package.json,package-loock.json

Install express
create a server
listen to port 7777
use app.use and show soome response to the serever 
route app.use into diffrent routes

write request handelrs func for test hello etc
 install nodemon and configure it in package.json
diffrenec between caret and tillda

you have to intialize git init 
git init initializes a new Git repository in your current project folder. It creates a hidden .git directory, which allows you to start tracking changes, commit files, and use all Git version control features in that project. It’s the first step to start using Git in any project.

.gitignore
create a remote repoo on github
push all code to remote origin 
 git remote add origin https://github.com/Usee1234/devTinder.git
>> git branch -M main
>> git push -u origin main

Play with routes and root extensions remember order of the routes matter a lot...
install postman app and make a test API CALL

write logiic to handel GET,POST PATCH,DELETE APIcalls and test them on Postman 
exporing routing and regex ?,*,(),+ etc .* .com$/


//Digital Notes 
About app.js
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
//     res.send("HAHAHA ALL THINGHS OVERIDED BY THIS CODE"); like the routes which starts with /user/..... will be overridden as it comes first.
// })

// The error is caused by the route path "/ab?c" in your code. In Express 5.x, the route path syntax is stricter, and the ? 
// character is not supported in the same way as in Express 4.x.
//this is not supproted in express 5.x
// app.get("/ab?c", (req, res) => {
//   res.send("abc");
// });

some Regex and route concepts

// app.get(/\/ab?c$/, (req, res) => {
//   res.send("abc");//here  b is optional so it will match both /ac and /abc.
// });

// app.get(/\/ab+c$/, (req, res) => {
//   res.send("abc222");//here  b is optional so it will match both /ac and /abc.
// });
// app.get(/ab.*cd$/, (req, res) => {
//   res.send("abc anything");//here  after ab anything but ends with cd is optional so it will match both /ac and /abc.
// });

// app.get(/.*.com$/, (req, res) => {
//   res.send("abcuudh");//here  after ab anything but ends with cd is optional so it will match both /ac and /abc.
// });
//This  req.params is an object that contains the route parameters of the request.


// app.get("/user/:userid/:passkey/:name",(req,res)=>{
// console.log(req.params);
// res.send({FirstName:"Vibhu",
//     LastName:"Mathur"});
// })

// this req.query is an object that contains the query parameters of the request.

// this req.query is an object that contains the query parameters of the request.

jo data send kiya hai server nai wo agar route link mai hai or appko dekhna hai tu you can see from here

app.get("/user",(req,res)=>{
console.log(req.query);
res.send({FirstName:"Vibhu",
    LastName:"Mathur"});
})

order of routes concepts 
app.use("/test",(req,res)=>{
    res.send("Hello from the server hehhe");
})
/ this will handle any request that comes to the server with /test in the url  example /test/abc or /test/xyz/hello but not /test123 or /testabc as test123 is a diffrent
//  string then simple test. but /test/anything will work...\

// app.use("/abc",(req,res)=>{
//     res.send("Helllo Its abc");
// })

// app.use("/",(req,res)=>{// This is the default route comes at end
// res.send("HOLA VIBHU");
// }) //just by changeing order of the routes we can change the order of the execution of the routes the code will start matching the routes from top to bottom.
// and this order is very very impoertant so we can say that deafult route is the last route that will be executed if no other route matches and it comes at 
//the end of the code. or written at last in the order of execution.

Middleware concepts

app.use("/test",(req,res)=>{
    res.send("Hello from the server hehhe");
})

app.use("/user",
    (req,res,next)=>{
    console.log("1st response");
    
    // next();// Now response 2 will be sent to the client. as next() is called it will pass the control magic of next. code runs line by line in js.

    res.send("response!!!");// Request handeler functions we are trying  to send two responses to the client which is wrong.res.send() and then response 2 also


    // next(); // Passes control to the next middleware passes control to next route handler.
}
,(req,res)=>{
    console.log("2nd response");
    res.send("Response 2 !!!");
}
)
//  app .use is used to handle all the requests that come to the /user route
// it will handle all the HTTP methods like GET, POST, PUT, DELETE, etc.
// its a middleware function that will be executed for all the requests that come to the /user route
//  console.log("I will hang");
    // Here we are n0t sending any response to the client this will go into infinite request and response loop its making an api call again and again
    // res.send("Hello from the route handelr1");
    //This is a Route handler for all requests to /user

//we can also send array of functions to app.use
// app.use("/user",
//     [(req,res,next)=>{
//     console.log("1st response");
//     // res.send("response!!!");
//     // Request handeler functions we are trying  to send two responses to the client which is wrong.res.send() and then response 2 also

//     next(); // Passes control to the next middleware passes control to next route handler.
// }
// ,(req,res,next)=>{
//     console.log("2nd response");
//     // res.send("Response 2 !!!");// No error beacuse there is no next() call here
//     next();
// }
// ,(req,res,next)=>{
//     console.log("3rd response");
//     next();
//     // res.send("Response 3!!!");
// }
// ,(req,res,next)=>{
//     console.log("4th response");
//     res.send("Response 4 !!!");
//     // if we call next() here it will give an error as express will try to find the next route handler
//     //  but there is no next route handler so it will give an error.
// }])
 
 the next() function can be used within app.get() methods in Express.js, just as it can be used with app.use() or other HTTP method-specific routing methods like app.post().
The next() function's purpose is to pass control to the next middleware function in the stack. When you define multiple callback functions for a single route (e.g., in app.get('/route', middleware1, middleware2, finalHandler)), next() is essential for ensuring that each middleware function is executed in order. 
next funxtion  and errors along with res.send
Multiple Route handeleers,use of next
app.use("/route",[r1,r2,r3],r4,r5....)
write a dummy auth middleware for admin and for all users expect user/login we have done it with vibhu
what is middleware

Error Handeling using app.use("/",(err,req,res,next)=>{
    if(err){
        ....
    }
})

1:25
Postmen benifits 


// see browser is the worst way to test ypur API'S to test your routes you can use postman or any other API testing tool
//postman is a tool that allows you to test your API's by sending requests and receiving responses
//you can also use curl command to test your API's from the terminal

//postmamn is used for API testing and it is a very powerful tool that allows you to test your API's by sending requests and receiving response


Today we will connect our application to database (MongoDB) using mongoose....

Fisrt we will connect our application to the database..
This is our string
mongodb+srv://VibhuM:mzoxK4qjG5PU9uuS@namastedata.5i2mywt.mongodb.net/?retryWrites=true&w=majority&appName=NamasteData