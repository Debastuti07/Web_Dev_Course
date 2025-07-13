// question 1
 function loadScript() {
    let script = document.createElement("script");
    script.src = "ch-9.js";
    script.onload = () => alert("Loaded!");
    document.body.appendChild(script);
}


// question 2
async function load() {
    let script=document.createElement("script");
    script.src="ch-9.js";
    script.onload=()=>alert("loaded....");
    document.body.appendChild(script);
}


//question 3
function rejection(){
    return new Promise((_,reject) =>
        setTimeout(()=>reject("rejected"),3000));
}

async function run(){
    try{
        await rejection();
    }
    catch(err){
        console.log("caught");
        
    }
}
run();


// question 4
function promise1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("first done")
        }, 1000);
    })
}
function promise2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("second done")
        }, 2000);
    })
}
function promise3(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("third done")
        }, 3000);
    })
}
async function allPromise() {
    let result=await Promise.all([promise1(),promise2(),promise3()]);
    console.log(result);
}
allPromise();