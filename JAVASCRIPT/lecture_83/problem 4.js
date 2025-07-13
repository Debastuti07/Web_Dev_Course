//  The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
let pwd=prompt("enter the password");
function password(){
    if(pwd.length>8 && /[A-Z]/.test(pwd)
==true && /[a-z]/.test(pwd)==true){
        console.log(`${pwd} is a valid password`);
    }
    else{
        console.error("invalid password");
        
    }
}
password(pwd);