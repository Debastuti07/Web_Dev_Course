let arr=[1,2,3,4,5,7];
console.log(arr);
console.log(arr.length);
/******************* ARRAY IS MUTABLE********************/
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);
arr[0]=5666;
console.log(arr);//mutable
console.log(typeof arr);//object
console.log(arr.toString());
console.log(arr.join(" and "));
console.log(arr.pop());//remove last thing
arr.push("tuti");//add new value at the end
console.log(arr);
arr.shift() //remove first one
console.log(arr);
arr.unshift("megha")//add new value in the beginning
console.log(arr);
// pop shift same work position diff
// push unshift same work position diff
delete arr[2]//delete index pos element
console.log(arr);
console.log(arr.length);//the length will be same after deleting also
let arr1=[2,7,9,1,8]
let arr2=[8,9,18,76,45]
console.log(arr.concat(arr1,arr2));//add all the arrays
let newArr=arr1.sort();
console.log(newArr);
console.log(arr);
console.log(arr1.slice(1,3));//extract value at index position
console.log(arr1.splice(1,3,154,559));//extract value rom 1 and upto 3 values and add the new values
console.log(arr1);

