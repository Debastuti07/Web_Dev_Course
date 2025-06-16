console.log(document.querySelector(".box"));
console.log(document.querySelector(".box").innerHTML);
// console.log(document.querySelector(".container").innerHTML="hey i am tuti");
console.log(document.querySelector(".container").innerText);//defines text
console.log(document.querySelector(".container").tagName);
console.log(document.querySelector(".container").nodeName);
console.log(document.querySelector(".container").textContent);

console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").getAttribute("style"));
console.log(document.querySelector(".box").setAttribute("style","display:inline"));
console.log(document.querySelector(".box").attributes);
console.log(document.designMode="on");//can edit anything in website
console.log(document.querySelector(".box").dataset);

let div=document.createElement("div");
div.innerHTML="I have been inserted <b>by tuti</b>"
div.setAttribute("class","created");
document.querySelector(".container").append(div)

let cont=document.querySelector(".container")
cont.insertAdjacentHTML("afterend","<b>I am under the water.Please help me here too much raining</b>");
cont.insertAdjacentHTML("afterbegin","<b>hello megha ...how r u ????</b>");
cont.insertAdjacentHTML("beforebegin","<b>hello tuti ...what are you doing ????</b>");
cont.insertAdjacentHTML("beforeend","<b>hello stuti ...where do you live ????</b>");