async function sleep() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve (45);
        }, 1000);
    });
}

function sum(a,b,c) {
    return(a+b+c)
}
//IIFE
(async function main() {
    console.log(a1);
    
//     let a=await sleep();
//     console.log(a);
//     let b=await sleep();
//     console.log(b);
    

    // let [x,y,...rest]=[1,5,8,10,17,25]
    // console.log(x,y,rest);   ///...rest used for the rest element collection

    let obj={
        a:1,
        b:2,
        c:3
    }
    let {a,b}=obj
    console.log(a,b);
    let arr=[1,4,6]
    // console.log(sum(arr[0],arr[1],arr[2]));
    console.log(sum(...arr));
     const arry=[1,7,11]
     const obje={...arry}
     console.log(obje);
     
     var a1=6;//var a1 will ve go on the top and returns undefined as a1=6 will not go ...this is hoisting..a1 should be under the function
})()
