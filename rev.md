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

==>First we will connect our application to the database..
This is our string
mongodb+srv://VibhuM:mzoxK4qjG5PU9uuS@namastedata.5i2mywt.mongodb.net/?retryWrites=true&w=majority&appName=NamasteData

For example:
Middleware (like adminAuth) is exported so it can be plugged into routes in your main app.
Utility functions are exported so you can call them from different modules.
Mongoose is different because it manages a global connection, but most utilities need to be exported to share their logic across your app.
In Mongoose, managing a global connection means establishing a single, persistent connection to the MongoDB database that can be reused throughout the application, rather than creating a new connection for each operation or request. This approach optimizes resource usage, improves performance, and simplifies error handling. 

Create a free cluster on MongoDB web
intstall Mongosse
connect ur app to Db "connection-url"/devtinder
call the connectionDB first and connect to DB server then start ypur main server at 7777
Now we create a schema of a user in devTinder collection

In Mongoose, a model is a constructor function that provides an interface for interacting with a specific MongoDB collection. It's essentially a wrapper around a Mongoose schema, allowing you to perform CRUD (Create, Read, Update, Delete) operations and define custom methods for your data. Models are compiled from schemas, which define the structure and data types of documents within a collection. 
Here's a breakdown: 
Schema:
A schema defines the structure of your data, including field names, data types, default values, and validators.
Model:
A model is built upon a schema and provides the methods to interact with the database.
CRUD Operations:
Models enable you to create new documents, query existing ones, update data, and delete documents from the database.
Custom Methods:
You can define custom methods on your models to encapsulate more complex logic related to your data.
Example:
const userModel = mongoose.model('User', userSchema); This line of code creates a model named User based on the userSchema. You can then use userModel to interact with the "users" collection in your MongoDB database.
Essentially, models provide a structured and organized way to interact with your MongoDB database using Mongoose. They simplify database interactions by abstracting away the underlying MongoDB operations and providing a clear API for your application's data management. 

create a user schema and then create a model.
created a signup API and make POST api calls with post man and save the data.
How we add dynamic data we gonna see...

what is the diffrence between the JSON OBJECT and Js object
// if we want to fetch the req data we have to use a middleware nd convert the Json by reading it into js object and put it into the body.
// there is already a middleware for it that is express json

POST requests are asynchronous. When a client sends a POST request, the data arrives at the server as a stream, which is an asynchronous operation.
Middleware handles the stream asynchronously. The express.json() middleware (and other body parsing middleware) works by listening for events on the incoming request stream (like 'data' and 'end') to collect the chunks of data, combine them, and then parse the complete body. This is an asynchronous process, but the middleware handles these complexities internally, making the parsed body available in req.body by the time your route handler is executed.
No need for await in the route handler: Because the middleware performs the asynchronous parsing before the route handler is invoked, you don't typically need to use await when accessing req.body within your route handler itself. The data has already been parsed and populated by the time your route handler code starts to execute.
When await is necessary: You would use await within your route handler if your route handler itself performs other asynchronous operations (like database queries or external API calls), not directly for accessing the parsed req.body itself. 
In essence, the middleware takes care of the asynchronous details of receiving and parsing the request body, allowing you to access the structured data through req.body in a synchronous manner within your route handlers. we dont have to use third party middlewares



express json article by AI

Express.js and JSON: Handling data in web applications

Express.js is a popular Node.js web application framework widely used for building APIs and web applications. A key part of interacting with web applications and APIs is handling data, often in the JSON (JavaScript Object Notation) format. 
1. Receiving and parsing JSON data with express.json()
Middleware: To enable Express to process incoming JSON data, you need to use the express.json() middleware.
Functionality: This built-in middleware parses incoming requests with a Content-Type header of application/json and automatically converts the JSON payload in the request body into a JavaScript object.
Accessibility: The parsed JSON data becomes available in the req.body object, allowing you to easily access and manipulate it within your application's route handlers.
Importance: Without express.json(), the req.body would be undefined, and you would need to manually parse the JSON data using JSON.parse(), which is less efficient. 
2. Example: Using express.json() in an Express app
Here's how you can incorporate express.json() into your Express application:
javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable JSON parsing middleware
app.use(express.json());

// Example POST route to receive JSON data
app.post('/data', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  // Process the received data
  console.log(`Received data: Name: ${name}, Email: ${email}`);

  // Send a JSON response
  res.json({ message: "Data received successfully!", data: req.body });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
Use code with caution.

In this example, the app.use(express.json()); line enables the JSON parsing middleware, making the incoming JSON data accessible via req.body in the /data POST route.
When a client sends a POST request to /data with a JSON payload like {"name": "John Doe", "email": "john.doe@example.com"}, the server will log the name and email to the console and send a JSON response back to the client. 
3. Sending JSON responses with res.json()
Purpose: To send a JSON response back to the client, Express provides the res.json() function.
Functionality: This method automatically sets the Content-Type header to application/json and converts the provided JavaScript object or value into a JSON string before sending it as the response body. 
javascript
// ... (previous code)

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  res.json(users); // Sends the users array as a JSON response
});

// ... (remaining code)
Use code with caution.

In this GET route, the res.json(users) line will send the users array as a JSON response to the client. 
By effectively using express.json() for parsing incoming JSON and res.json() for sending JSON responses, you can build robust and efficient web applications and APIs with Node.js and Express.js. 
AI responses may include mistakes. Learn more


so when I used w/o it and consolelgeed req.body it giive me undefined I taught it ws due to the fact the post req is async in nature so we have to do await is it also a reason
No, the fact that req.body is undefined without express.json() is not because the POST request is inherently asynchronous, requiring await to access it. 
Here's the breakdown:
1. Why req.body is undefined without express.json()
Express doesn't parse the request body by default. By default or without the necessary middleware, Express.js does not automatically read or parse the body of incoming HTTP requests (like POST or PUT).
Middleware is required for parsing. To make the request body accessible in req.body, you need specific middleware to process it based on its Content-Type.


express.json()'s role: The express.json() middleware is specifically designed to parse incoming requests with a Content-Type of application/json. It takes the raw JSON data from the request body and converts it into a JavaScript object, which it then attaches to the req.body property.
Other parsing middleware: Similarly, express.urlencoded() parses URL-encoded data (often from HTML forms), and other middleware (or even manual handling) can be used for different content types like raw data or file uploads. 
2. Asynchronous nature of POST requests vs. parsing
POST requests are asynchronous. When a client sends a POST request, the data arrives at the server as a stream, which is an asynchronous operation.
Middleware handles the stream asynchronously. The express.json() middleware (and other body parsing middleware) works by listening for events on the incoming request stream (like 'data' and 'end') to collect the chunks of data, combine them, and then parse the complete body. This is an asynchronous process, but the middleware handles these complexities internally, making the parsed body available in req.body by the time your route handler is executed.

No need for await in the route handler: Because the middleware performs the asynchronous parsing before the route handler is invoked, you don't typically need to use await when accessing req.body within your route handler itself. The data has already been parsed and populated by the time your route handler code starts to execute.
When await is necessary: You would use await within your route handler if your route handler itself performs other asynchronous operations (like database queries or external API calls), not directly for accessing the parsed req.body itself. 
In essence, the middleware takes care of the asynchronous details of receiving and parsing the request body, allowing you to access the structured data through req.body in a synchronous manner within your route handlers. 
AI responses may include mistakes. Learn more


so as we write app.use(express.json()) all the request after that is parsed if there is a data in the req object but the api calls written before it will not be affected by this middleware of we declared it inside middle of the code
That's an excellent observation and highlights a crucial aspect of Express.js middleware: the order of declaration matters. 
Here's why and what it means:
1. Middleware execution order


In Express, middleware functions are executed sequentially in the order they are added to the application using app.use().
When a request arrives, it goes through the middleware functions one by one.
Each middleware function can modify the request or response objects or pass control to the next middleware in the stack using the next() function.
If a middleware function sends a response (e.g., using res.send() or res.json()), the request-response cycle ends, and no further middleware or route handlers in the stack will be executed. 

2. Placing app.use(express.json())

To ensure Express.js correctly parses incoming JSON requests and populates req.body, you must place app.use(express.json()) before any route handlers that need to access the parsed JSON data.
If you declare app.use(express.json()) after your route handlers, those routes will not have access to req.body, as the middleware wouldn't have been executed yet to process the request body. 
Example
javascript
const express = require('express');
const app = express();

// Route that will NOT have req.body parsed
app.post('/data-unparsed', (req, res) => {
  console.log('Unparsed req.body:', req.body); // Will be undefined
  res.send('Data received, but not parsed');
});

// JSON parsing middleware (declared *after* the previous route)
app.use(express.json());

// Route that WILL have req.body parsed
app.post('/data-parsed', (req, res) => {
  console.log('Parsed req.body:', req.body); // Will contain the parsed JSON data
  res.json({ message: "Data received and parsed!", data: req.body });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
Use code with caution.

When a request hits /data-unparsed, express.json() hasn't been executed, so req.body is undefined.
When a request hits /data-parsed, express.json() has already been executed (since it's declared earlier in the sequence), so req.body contains the parsed JSON data.
Therefore, for middleware like express.json() that processes the request body, it's a best practice to place it near the beginning of your middleware stack, before any route handlers that rely on the parsed req.body to function correctly. 
AI responses may include mistakes. Learn more


so app.use express.json middleware has the right to check every request who has data. before routing invokes even before post api call before we post it to server
Yes, that's correct. When you use app.use(express.json()), you're effectively telling your Express application to include this middleware in the processing pipeline for every incoming request to the application. 


Here's why:
Middleware functions are executed sequentially: In Express, middleware functions are executed in the order they are defined in your code using app.use().
Before route handlers: Middleware functions, by their nature, run before the route handlers (like app.post(), app.get(), etc.) are invoked for a specific route. This is their primary purpose: to intercept, process, or augment the request before it reaches the final destination (the route handler).


express.json()'s specific role: The express.json() middleware specifically looks for requests with the Content-Type header set to application/json. If it finds such a request, it will attempt to parse the JSON data from the request body and make it available in req.body.
Invokes next() internally: After performing its function (parsing the JSON data if the Content-Type matches), the middleware calls the next() function to pass control to the next middleware or route handler in the stack. This ensures that the request continues its journey through the Express application. 


Therefore, when a client makes a POST API call to your server with a JSON payload, the app.use(express.json()) middleware will intercept that request, parse the JSON data, and populate req.body before the app.post() route handler for that specific endpoint is executed. This is why you can then access req.body.propertyName inside your POST route handler. 

add the express.json() middleware and make the signup API ddynamic usiing poostman etc or UI 


Letus now read the data


API get user by email
API create feed API GET/Feed -Get all the users from the database
Create get user by ID

✅ Summary
_id is always there by default in MongoDB documents.

You can use findByIdAndDelete(someId) even without declaring _id in schema.

req.body.userId is just a variable holding the _id of the document you want to delete.

You can rename the variable to anything (idToDelete, abc, etc.) — what matters is the value, not the name


post req for frontend 

<!-- <html>
<form id="userForm">
  <input type="text" id="name" placeholder="Name" required />
  <input type="email" id="email" placeholder="Email" required />
  <button type="submit">Create User</button>
</form>

<div id="message"></div> -->

<!-- <script>
  document.getElementById("userForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // prevent page reload

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const newUser = { name, email };

    try {
      const response = await fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      });

      const text = await response.text();
      document.getElementById("message").innerText = text;
    } catch (error) {
      console.error("Error creating user:", error);
      document.getElementById("message").innerText = "Something went wrong!";
    }
  }); -->
</script>
//hamesha jo bhi vheez UI se aayegi wo req mai hogi
