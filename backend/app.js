const express=require("express");
const app=express();
const mongoose=require("mongoose");
const PORT=process.env.PORT || 3001;
const URI=process.env.URI || 'mongodb://127.0.0.1:27017/aexousers';
const homeroutes=require("./routes/homeroutes");
const signuproutes=require("./routes/signuproutes");
const cors=require("cors");


//connection with mongodb database

const connection=mongoose.connect(URI);
connection.then(()=>{
    console.log("Database is connected.");
}).catch((error)=>{
    console.error(error);
});

//middlewares

app.use(express.urlencoded());
app.use(express.json({ limit: '10mb' }));
app.use(cors());


//routes

app.use("/",homeroutes);
app.use("/signup",signuproutes);



app.listen(PORT,()=>{
    console.log(`server is started at the port:${PORT}`);
});