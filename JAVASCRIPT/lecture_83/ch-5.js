//question 1
let arr=[1,2,3,4];
let num=prompt("enter the number");
num=parseInt(num);
arr.push(num); 
console.log(arr);


//question 2
let new_arr=[1,2,3,4];
let new_num;
while(true)
    {   
        let new_num=prompt("enter the new number");
        new_num=parseInt(new_num);
        if(new_num==0)
        {
            break;
        }
    else{
        new_arr.push(new_num);
        console.log(new_arr);
        
    }
    console.log(new_arr);
    
}

    
//question 3
let numbers = [10, 15, 20, 23, 30, 42, 50];

let divisibleBy10 = numbers.filter(num => num % 10 === 0);

console.log("Divisible by 10:", divisibleBy10);


//question 4
let n=[1,2,3,4]
let square_n=n.map(n=>n*n);
console.log(square_n);


//question 5
let fact = parseInt(prompt("enter the number of factorial")); 

let facto = [];
for (let i = 1; i <= fact; i++) {
  facto.push(i);
}

let factorial = facto.reduce(function (acc, val) {
  return acc * val;
}, 1);

console.log(factorial);
