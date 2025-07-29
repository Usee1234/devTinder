// Overhere we will write logic to connect to our database
//using npm mongoose

// mongoose is a preffred library which uses ODM to talk to mongo db server to which we are connection our app

const mongoose=require('mongoose');
// to coonect to db server from our main server just write 

// async function main(){
//     await mongoose.connect(
//     " mongodb+srv://VibhuM:mzoxK4qjG5PU9uuS@namastedata.5i2mywt.mongodb.net/?retryWrites=true&w=majority&appName=NamasteData"
// )
// }
// now its connected to whole cluster through this ?retryWrites=true&w=majority&appName=NamasteData
//we want to connect to this dev tinder DB
const connectDB=async()=>{
    await mongoose.connect(
    "mongodb+srv://VibhuM:mzoxK4qjG5PU9uuS@namastedata.5i2mywt.mongodb.net/devTinder" 
);
}
module.exports={
    connectDB
}