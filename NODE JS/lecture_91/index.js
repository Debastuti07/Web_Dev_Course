//you have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders
// for example,these files become:
// 1.name.jpg
// 2.name.png
// 3.this.pdf
// 4.megha.zip
// 5.Tuti.zip
// 6.catch.jpg

// this 
// jpg/name.jpg,jpg/catch.jpg 
// png/name.png
// pdf/name.pdf/megha.pdf
// zip/megha.zip zip/Tuti.zip


import fs from "fs/promises";
import fsn from "fs"
import path from "path"
// console.log(fs);
const basepath="C:\\Users\\DEBASTUTI DE\\Sigma Web Dev Course\\Web-Dev-Course\\NODE JS\\lecture_91"

let files=await fs.readdir(basepath)
// console.log(files);


for (const item of files) {
    console.log("running for ",item);
    
    let ext=item.split(".")[item.split(".").length-1] 
    if((ext!="js")&&(ext!="json")&&(item.split(".").length-1)) {

        if(fsn.existsSync(path.join(basepath,ext))){
                  //move the file to the directory if it is not the js and json file
                  fs.rename(path.join(basepath,item),path.join(basepath,ext,item))
        }
        else{
            fs.mkdir(ext)
        }
    }
    
    
}