console.log("hello world");
console.log(document.body);
console.log(document.body.childNodes);

let cont=document.body.childNodes[1]
console.log(cont);
console.log(cont.firstChild);
console.log(cont.firstElementChild);//ignore the textspace...start with elemnet part..
cont.firstElementChild.style.color="red";
cont.firstElementChild.style.backgroundColor="pink";


//parent element
console.log(cont.firstElementChild.parentElement);
console.log(cont.firstElementChild.parentElement.children[1]);
console.log(cont.firstElementChild.parentElement.children[1].previousElementSibling);//denotes previous element 
console.log(document.body.children[1]);
console.log(document.body.children[1].rows);
