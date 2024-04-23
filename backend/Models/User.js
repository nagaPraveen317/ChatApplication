const mongoose=require('mongoose')
const userDetail=mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String,required:true},
    pic:{
        type:String,required:true,default:"https://i.pinimg.com/originals/fa/84/e2/fa84e25c1b4be715c313b93ee9a09fec.jpg"
    }
},
{ timestamps:true}
    )

const User=mongoose.model("User",userDetail)
module.exports=User