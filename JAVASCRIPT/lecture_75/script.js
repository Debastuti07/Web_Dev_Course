console.log("one");
console.log("two");

setTimeout((hello)=>{
    console.log("hello");
    
},2000);
console.log("three");
console.log("four");


function sum(a,b){
    console.log((a+b));
    
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1,2,sum);//here sum is a function ...but we dont have to use this like sum()...cz here it acts like callback ...call back is when we use a function in another function as an argument
//alternatives
calculator(1,2,(a,b)=>{
    console.log(a+b);
    
});

function getData(dataId,getNexData){
    setTimeout(() => {
        console.log("data",dataId);
        if(getNexData){
            getNexData();
        }
    }, 2000);
    
}

//callBack Hell
getData(1,()=>{
    console.log("getting data 2...");
    getData(2,()=>{
        console.log("getting data 3...");
        getData(3,()=>{
            console.log("getting data 4...");
            getData(4);
        });
    });
});