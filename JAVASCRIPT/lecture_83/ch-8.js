//question 1
document.getElementById("btn1").addEventListener("click",function () {
    alert("you clicked button 1");
});
document.getElementById("btn2").addEventListener("click",function () {
    alert("you clicked button 2");
});
document.getElementById("btn3").addEventListener("click",function () {
    alert("you clicked button 3");
});


//question 2
function addBookmark(){
    let name=document.getElementById("siteName").value;
    let url=document.getElementById("siteURL").value;
    let li=document.createElement('li');
    li.innerHTML=`<a href="${url}" target="_blank">${name}</a>`;
    document.getElementById("list").appendChild(li);
}


//question 3
document.getElementById("addbtn").addEventListener("click",function addBookmark(){
    let new_name=document.getElementById("site_Name").value;
    let new_url=document.getElementById("site_URL").value;
    let li=document.createElement('li');
    li.innerHTML=`<a href="${new_url}" target="_blank">${new_name}</a>`;
    document.getElementById("new_list").appendChild(li);
})


//question 4
function fetchContent(){
    fetch("https://jsonplaceholder.typicode.com/posts/1").then(res=>res.text()).then(data=>{
        console.log("fetched",data);
    });
  }
  fetchContent();
  setInterval(fetchContent, 5000);


// question 5
let bulb=document.getElementById("bulb");
let btn=document.getElementById("toggleBtn");
 btn.addEventListener("click", function () {
      bulb.classList.toggle("glow");
    });