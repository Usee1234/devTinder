const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
 firstName:{
    type:String,
 },
 lastName:{
    type:String,
 },
 emailID:{
    type:String,
 },
 password:{
    type:String,
 },
 age:{
    type:Number,
 },
 gender:{
    type:String,
 },
 phone:{
    type:Number,
 },
});
const User=mongoose.model("User",userSchema);// its a new type of instance of that model of mongoose like a class and its 
// object ==>shema followed by model now we can create a api to add a user to the database aap instance define kar rahe hu userschema  ki or
//  uska naam USER HOGA
module.exports={
    User,
}