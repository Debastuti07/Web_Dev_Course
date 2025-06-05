function nice(name) {
    console.log("hey"+name+"you are nice");
    console.log("hey"+name+"you are good");
    console.log("hey"+name+"your t-shirt is nice");
    console.log("hey"+name+"you are best");
    
}

// console.log("hey tuti ...you are nice");
// console.log("hey tuti ...you are good");
// console.log("hey tuti ...your t-shirt is nice");
// console.log("hey tuti ...you are best");
nice(" STUTI ")
nice(" TUTI ")
function sum(a,b,c=17) {
    // console.log(a+b);
    console.log(a,b,c);
    
    return a+b+c;
}
result1=sum(7)//returns Nan cz there is no value for b
result2=sum(27,18)
result3=sum(97,84)

console.log("sum od this number is",result1);
console.log("sum od this number is",result2);
console.log("sum od this number is",result3);


//arrow function

const func1=(x)=>{
    console.log("I am an arrow function",x);
    
}

func1(24);
func1(84);
func1(50);
