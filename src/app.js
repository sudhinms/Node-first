const express=require("express");
const AuthRoute=require("./routes/auth");
const app=express();


app.use(express.json());
app.use("/app",AuthRoute);


// app.get("/",(req,res)=>{

//     res.send("response");
// })

// app.post("/register",(req,res)=>{

//    console.log(req.body);
//    res.send(req.body)
// })





app.listen(8000,()=>{
    console.log("port 8000 is listening");
})