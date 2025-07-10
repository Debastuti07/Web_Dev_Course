let a=prompt("enter first number")
let b=prompt("Enter second number")
if(isNaN(a)||isNaN(b)){
    throw SyntaxError("sorry this is not allowed")
    
}
let sum=parseInt(a)+parseInt(b);
function main(){
    let x=1;
    try {
        console.log("the sum is ",sum*x);
        return true;
    } catch (error) {
        console.log("error agaya bhai");
        return false;
    }   
    finally{
        console.log("files are being closed and db connection is being closed");
    }
}
let c=main()
//we can make diff the "finally" in function ...if the result return true/false ...after using finally it ended up with that final statement...