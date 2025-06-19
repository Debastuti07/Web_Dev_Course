let button=document.getElementById("btn");
button.addEventListener("dblclick",()=>{
    //for double clicking button 
    document.querySelector(".box").innerHTML="<b>Yayyyy...You were clicked</b> Enjoy Your Click"
})
button.addEventListener("contextmenu",()=>{
    //by right clicking on the element
    alert("dont hack us by right click please...")
    
})
document.addEventListener("keydown",(e)=>{
    //by clicking any key of keyboad it will show on console part
    console.log(e);
})