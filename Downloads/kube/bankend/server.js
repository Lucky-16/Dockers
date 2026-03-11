const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();
app.use(express.json());
app.use(cors());

/* Create Manager */

app.post("/manager",(req,res)=>{

const {name,email}=req.body;

db.run(
"INSERT INTO managers(name,email) VALUES(?,?)",
[name,email],
function(){
res.json({message:"Manager created"});
});

});

/* Get Managers */

app.get("/managers",(req,res)=>{

db.all("SELECT * FROM managers",[],(err,rows)=>{
res.json(rows);
});

});

/* Update Manager */

app.put("/manager/:id",(req,res)=>{

const {name,email}=req.body;
const id=req.params.id;

db.run(
"UPDATE managers SET name=?,email=? WHERE id=?",
[name,email,id],
function(){
res.json({message:"Manager updated"});
});

});

/* Delete Manager */

app.delete("/manager/:id",(req,res)=>{

const id=req.params.id;

db.run(
"DELETE FROM managers WHERE id=?",
[id],
function(){
res.json({message:"Manager deleted"});
});

});

app.listen(5000,()=>{
console.log("Server running on port 5000");
});