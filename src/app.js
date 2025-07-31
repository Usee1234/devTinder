

// let us create our srever now..

const express = require('express');
//creating a express application instance
//this is the main entry point of our application

const {adminAuth, userAuth, vibhuAuth}=require("./middlewares/auth"); 
const {connectDB}=require("./config/database");
const app=express();
const {User}=require("./models/user")
connectDB().then((val)=>{
console.log("Database connceted ")//First DB server is conneceted 
app.listen(7777,()=>{
    console.log("Server Connected at 7777 ")
})
// now ideally server should be conncted but srvere cant be exported here so we export that connectDB
}).catch((err)=>{
    console.log("Error oocured")
    console.log(err);
})

//here server is connected but our database may or may nit be conncetd So First we have to connect to the database server.
//  then only main server or do app.listen after DB connection.
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

// Creating an API FOR OUR USER DB we will create a post API which will signup the user 
app.use(express.json()); // this is a middleware ==> it will work for all the routes handellling the req and proscessing the json data and parsing it before the route was invoked 
// asyncly will be handeled by this... write once and use it any where it is the concept of middleware
app.post("/signup",async(req,res)=>{
//this data should be sent dynamicallay while I am makin a post call. we can do that using postmen w/o creating UI
//data is sent in the form of redeable stream but our data is present in the body of the req object/var
//creating a new instance of the model using the data which we recieved while the post API call
const user=new User(req.body);
try{
    await user.save();
    console.log(req.body);
    res.send("Data posted dynamically");
}
catch{
    res.status(500).send("Error ocuured while posting data");
}
// now I can read this body properly

// if we want to fetch the req data we have to use a middleware nd convert the Json by reading it into js object and put it into the body.
// there is already a middleware for it that is express json
})




// const myDb={
//     firstName:"Aayush",
//     lastNmae:"Mathur",
//     emailID:"mathur@gmail.com",
//     password:"qwerty@123",
//     gender:"Male",
//     age:67,
//     phone:9251149767
// }

// const user=new User({
//     firstName:"Ms",
//     lastName:"Dhoni",
//     emailID:"MS@gmail.com",
//     password:"MS@3EJ",// this data should be sent dynamicallay while I am makin a post call. we can do that using postmen w/o creating UI
//     gender:"Male",//we want to send JSON DATA
//     age:24,
//     phone:4456119096
// });//new instance of our user is created mostly it returns a promise b/c its an async func
// try{
// await user.save();
// res.send("User created sucessfully")
// }
// catch(err){
// res.status(500).send("Data not posted check API");
// }

// Let us now make a get request for devtinder this feed api get all the users from the DATA BASE to show yiu matching optoions
// dummy get req for 1 user
// app.get("/user1",async(req,res)=>{
//     const userEmail=req.body.emailID;
//     try{
//         const users=await User.find({emailID:userEmail});//emailID:userEmail
//         if(users.length===0){
//             res.status(400).send("Data not found");
//         }
//         else{
//         console.log(users);
//         res.send(users);
//         }
//     }
//     catch(err){
//           console.log(err)
//            res.status(404).send(" Ahh Something went wrong")
//     }
   
     
// })
app.get("/feed",async(req,res)=>{
    // const userEmail=req.body.emailID;
    try{
        const users=await User.find({});//emailID:userEmail
        if(users.length===0){
            res.status(400).send("Data not found");// ye error jab aayega jab data nahi hoga..
        }
        else{
        console.log(users);
        res.send(users);
        }
    }
    catch(err){
          console.log(err)
           res.status(404).send(" Ahh Something went wrong")//API FAIL HOGI JAB AAYEGA
    }
   
     
})
// app.get("/feed",(req,res)=>{

// })

app.get("/user1",async(req,res)=>{
    try{
        const email=req.body.emailID;
        const user=await User.findOne({emailID:email})
        console.log(req.body)
        res.send(user);
        console.log(user);
    }
    catch(err){
        console.log(err)
        res.status(404).send("EError")
    }
})
app.delete("/user2",async(req,res)=>{
    try{
        const userID=req.body.userID;
        const del=await User.findByIdAndDelete(userID)//({_id:userID}) /user2 route pe jaise hi mai hit karoonga to del API call hogi
        console.log(del);
        if(del==null){
            res.status(404).send("Data dont exist")
        }
        res.send("Data deleted sucsessfully");
        
    }
    catch(err){
        console.log(err)
        res.status(404).send("EError")
    }
})
app.patch("/user3",async(req,res)=>{
       const userId=req.body.userId; //ye isme whai assume karegea as id jo postman se body se aap behjoge so if ypu are sending _id.
       // then key in frontend should be _id only
       const data=req.body;
       try{
        const user=await User.findByIdAndUpdate({_id:userId},data,{
            returnDocument:"after"
        })
         console.log(user)
         res.send("User Updated !!!")
       }
       catch(err){
        
        console.log(err)
         res.status(404).send("EError!!!")
       }
})


// //example frontend agains del API
// //  async function deleteUser(userID) {
//     const response = await fetch("/user2", {
//       method: "DELETE",                         //ye puri ki puri del API ki fetch request hai
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ userID })
//     });

//     const text = await response.text();  //this is response from backend...
//     console.log(text); // "Data deleted successfully" or error
//   }






// Middleware for Error // error ka middleware hamesha req ka res aane ke baad hi tu chalega
app.use("/",(err,req,res,next)=>{//order is very imp agar pehele ye middleware likh doge to route err detect hi nahi hoga
if(err){
    console.log(err)
    res.status(500).send("Error Occurs"); 
    // we can keep this lines towards the end of our application  so that we can catch accordingly
}
})






