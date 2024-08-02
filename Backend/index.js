// const { getSuggestedQuery } = require("@testing-library/react");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const { default: App } = require("../src/App");
let Server = new express();

Server.use(cors());
Server.use(express.json());

const PORT = 9107;

mongoose.connect("mongodb://127.0.0.1:27017/mystore")
.then(()=>{
    console.log("Db is connected");
    Server.listen(PORT, () => {
        console.log(`Server is running ${PORT}`);
    });
})
.catch((err)=>{
    console.log("Db is not connected");
})

const EmpSchema = mongoose.Schema({
   name:String,
   email:String,
   mobile:Number
},{
    timestamps:true
});

const user = mongoose.model("user", EmpSchema);




Server.get('/', async (req,res)=>{
     data = await new user.find({})
    res.json({success:true, data:data})
}) 

Server.post("/create", async (request, response) => {
    
    console.log(req.body)
    let query = new user(req.body);

   await query.save();

    response.send({success:true, message:"data created successfully."});
});

Server.get("/getproducts", async (request, response) => {
    let result = await Products.find({});
    response.send(result);
});