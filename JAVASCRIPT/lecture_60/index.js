console.log("This is strings tutorial");
let a="tuti"
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
// console.log(a[4]);//undefined

console.log(a.length);
real_name="Megha"
let friend="Stuti"
console.log("her name is "+real_name+" and her friend's name is "+friend);
console.log(`her name is ${real_name} and her friend's name is ${friend}`);
console.log("s\"tuti");//to print the " in between word or sentence
console.log("megha\ntuti");//for new line 
console.log("megha\ttuti");//for arrange in row and column format

b="Debastuti"
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.slice(5,9));
console.log(b.slice(4));
console.log(b.replace("Debas","_07"));//if two letters are same ...then it will replace the first one 
console.log(b.concat(a,"Mango"));//merge two or more strings
let c="    tutituti    "
console.log(c);
console.log(c.trim());//remove whitespaces
/************* STRINGS ARE IMMUTABLE **************/
console.log(b.indexOf("tuti"));
console.log(b.indexOf("gha"));//no existance== -1 index
console.log(b.startsWith("De"));
console.log(b.endsWith("tuti"));
