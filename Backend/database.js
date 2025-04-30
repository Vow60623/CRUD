const mongoose=require('mongoose');
async function dbConn(){
    //const conn=await mongoose.connect('mongodb://localhost:27017/studentapp') // for database connectivity
    const conn = await mongoose.connect('mongodb+srv://Nidhi:root@cluster0.yra3rix.mongodb.net/crud-live?retryWrites=true&w=majority&appName=Cluster0')// use for deployment of prj live
    if(conn){
        console.log("database connect successfully");
    }
    else{
        console.log("database not connect");
    }
}
module.exports=dbConn;