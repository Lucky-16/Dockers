const API="http://localhost:5000";

function createManager(){

fetch(API+"/manager",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name:document.getElementById("name").value,
email:document.getElementById("email").value

})

}).then(loadManagers)

}

function loadManagers(){

fetch(API+"/managers")

.then(res=>res.json())

.then(data=>{

let list=document.getElementById("list");
list.innerHTML="";

data.forEach(m=>{

let li=document.createElement("li");

li.innerHTML=

m.name+" "+m.email+

` <button onclick="deleteManager(${m.id})">Delete</button>`;

list.appendChild(li);

})

})

}

function deleteManager(id){

fetch(API+"/manager/"+id,{

method:"DELETE"

}).then(loadManagers)

}

loadManagers();