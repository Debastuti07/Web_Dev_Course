console.log("i am a tutorial on loops");

let a=1;
// console.log(a);
// console.log(a+1);
// console.log(a+2);

for (let i = 0; i < 100; i++) {
    console.log(a+i);   
    
}

let obj={
    name:"tuti",//left part=key and right part=element
    role:"programmer",
    company:"tuti AI"
}

for (const key in obj) {
        // const element = obj[key];
        console.log(key);
        
    }

    let i=0;
    while (i<6) {
        console.log(i);
        i++;
        
    }
let j=0;
    do {
        console.log(j);
        j++;
        
    } while (j<6);