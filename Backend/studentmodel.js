const mongoose=require('mongoose');
const student=new mongoose.Schema({
    id:{type:Number,require:true},
    name:{type:String,require:true},
    age:{type:Number,require:true}
})