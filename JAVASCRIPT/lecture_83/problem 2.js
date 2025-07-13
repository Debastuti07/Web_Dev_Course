// The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
function doubleNum(arr){
    const result=[];
    for(let i=0;i<arr.length;i++){
        if(i>0 && arr[i]===arr[i-1]){
            continue;
        }
        else{
            result.push(arr[i]*2);
        }
    }
    return result;
}
let num=[2,5,6,7,9,6];
console.log(doubleNum(num));