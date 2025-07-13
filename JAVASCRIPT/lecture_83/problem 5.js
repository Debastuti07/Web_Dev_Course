// The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.
function sum(arr){
    let sum=0;
    for(let num of arr){
        if(num<0){
            break;
        }
        else{
            sum+=num;
        }
    }
    return sum;
}
const nums=[1,5,8,6,-7]
console.log(sum(nums));
