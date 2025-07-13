//  Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.
function asyncDouble(num){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(num*2)
        }, 500);
    })
}

async function asyncMapArray(numbers) {
    const promises=numbers.map(async(num)=>{
        return await asyncDouble(num);
    });
    return Promise.all(promises);
}
const nums=[1,2,3,4];
asyncMapArray(nums).then((result)=>{
    console.log(result);
    
})