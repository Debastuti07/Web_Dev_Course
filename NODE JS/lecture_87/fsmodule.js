const { isUtf8 } = require('buffer');
const { error } = require('console');
const fs=require('fs');
// fs.readFile('megha.txt','utf-8',(error,data)=>{
//     console.log(error,data);
    
// })
const a=fs.readFileSync('megha.txt')
console.log(a.toString());

console.log("finish reading file");
//readFile dont block the other js code run ...but readFile Sync intentionally blocked the other js code ...for readFileSync ...we have to print in "to string()" version ...




fs.writeFile('megha2.txt',"This is a data",()=>{

    console.log("written to the file");
})
const b=fs.writeFileSync('megha2.txt',"This is a data2")
console.log(b);

console.log("finished");
//same for write function 