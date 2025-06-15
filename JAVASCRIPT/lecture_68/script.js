console.log("megha");
let boxes=document.getElementsByClassName("box")
console.log(boxes);
boxes[3].style.backgroundColor="red"
let color=document.getElementById("red")
console.log( color.style.backgroundColor="blue");
document.querySelector(".box").style.backgroundColor="violet"//only effective on first matched class
console.log(document.querySelectorAll(".box"));
document.querySelectorAll(".box").forEach(e=>{
   e.style.backgroundColor="orange"
    //for styling all same class elements
}) 
console.log(document.getElementsByTagName("div"));


