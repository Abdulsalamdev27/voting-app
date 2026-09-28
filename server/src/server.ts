import express from "express";

const app = express();

const PORT = 5000;


app.get("/", (req, res)=>{
    res.json({
        message:"API RUNNING"
    })
}

)

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})