
const notes =[
    {
title: "my next trip",
body: "visit Obunga",
music:"rock",
place:"12 avenue",
},
{
    title: "habits to work on",
    body: "stop driving fast",
},
"ida",
"Paris",
];

const data=document.querySelector(".note");
data.textContent=notes[0].music;

//ADD A NEW ELEMENT
const newData =document.createElement("h1");
newData.textContent ="I was sleepy";
document.querySelector("body").appendChild(newData);

document.querySelector("button").addEventListener
("click",function(event){
    event.target.textContent="new york is expensive";

});
    
