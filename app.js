require("dotenv").config();
const express=require("express");
const app=express();
const PORT=3000;
const userRouter=require("./routes/userRoute")


//view engine
app.set('view engine',"ejs");

//middleware
app.use(express.urlencoded({extended:false}))
app.use(userRouter)





app.listen(PORT,()=>{
    console.log("Listening on port "+PORT);
})