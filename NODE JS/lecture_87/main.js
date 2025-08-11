
const fs=require("fs")

// console.log(fs);
console.log("starting");

// fs.writeFileSync("megha.txt","megha is a good girl")

fs.writeFile("megha2.txt","megha is a good girl",()=>{
    console.log("done");
    fs.readFile("megha2.txt",(error,data)=>{
        console.log(error,data.toString());
        //callback hell
        
    })
    
})
console.log("ending");


fs.appendFile("megha.txt","tuti",(e,d)=>{
    console.log(d);
    
})
console.log("ending");
