import fs from "fs/promises"

let a=await fs.readFile("megha.txt")

console.log(a.toString());


let b=await fs.appendFile("megha.txt","\n\n\n\n\n\n this is amazing promise")

console.log(a.toString(),b);
