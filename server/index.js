import express from "express";
const app = express();
const PORT = 9000;

import connectToMongo from './config/db.js';

connectToMongo();

app.get("/", (req, res)=>{
    res.send("API is running");
});


app.listen(PORT, ()=>{
    console.log(`API is running on http://localhost:${PORT}`);
})