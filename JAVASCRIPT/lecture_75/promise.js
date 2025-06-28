let promise=new Promise((resolve,reject)=>{
    console.log("I am a promise");
    reject("some error occured")
});

function asyncFunc(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       console.log("some data 1");
       resolve("success");
    },2000);
    });
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       console.log("some data 2");
       resolve("success");
    },2000);
    });
}
console.log("fetching data 1...");

let p1=asyncFunc();
p1.then((res)=>{
    console.log(res);
    console.log("fetching data 2...");
    let p2=asyncFunc2();
    p2.then((res)=>{});

    
});

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
        }, 2000);
    });
}

//promise chain

getData(1).then((res)=>{
    console.log(res);
    getData(2).then(()=>{
        console.log(res);
        
    });
})
//alternative

getData(1).then((res)=>{
    return getData(2);
})
.then((res)=>{
    return getData(3);
})
.then((res)=>{
    console.log(res);
    
})

const getPromise=(()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am the promise");
        // resolve("123");
        reject("network error");
        
    });
});

promise=getPromise();
promise.then(()=>{
    console.log("promise fulfilled");
    
});
promise.catch((err)=>{
    console.log("rejected",err);
    
});
function getData(dataId,getNexData){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
            // reject("try again later");
            if(getNexData){
                getNexData();
            }
        },5000);
    });
    
}

