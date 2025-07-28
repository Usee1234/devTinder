// Auth for /admin // only writing middleware logic  fir ye waha pe app.use mai embedde hu jayega
const adminAuth=(req,res,next)=>{
    // Auth logic
    // Here we can check if the user is an admin or not
    const Actualtoken="abc@2536yy";
    const isAuthenticated=Actualtoken==="abc@2536yy"; // This is just a dummy check for the sake of example here we are assigning and decalring const at same 
    // time so we cant get error but if we assign it later we should use let or var as const cant be modified.
    if(!isAuthenticated){
        return res.status(401).send("Unauthorized access");
    }
    else{
        next(); // Passes control to the next middleware or route handler// ye get req ko appropriate route handler tak navigate kar dega.
    }
}
const userAuth=(req,res,next)=>{
    const Actualtoken="abc@2536yy";
    const isAuthenticated=Actualtoken==="abc@2536yy5"; // This is just a dummy check for the sake of example here we are assigning and decalring const at same 
    // time so we cant get error but if we assign it later we should use let or var as const cant be modified.
    if(!isAuthenticated){
        return res.status(401).send("Unauthorized access");
    }
    else{
        next(); // Passes control to the next middleware or route handler// ye get req ko appropriate route handler tak navigate kar dega.
    }
}
const vibhuAuth=(req,res,next)=>{
    const Actualtoken="vibhu";
    const isAuthenticated=Actualtoken==="vibhu88"; // This is just a dummy check for the sake of example here we are assigning and decalring const at same 
    // time so we cant get error but if we assign it later we should use let or var as const cant be modified.
    if(!isAuthenticated){
        return res.status(401).send("Unauthorized access");
    }
    else{
        next(); // Passes control to the next middleware or route handler// ye get req ko appropriate route handler tak navigate kar dega.
    }
}
module.exports={
adminAuth,userAuth,vibhuAuth
}