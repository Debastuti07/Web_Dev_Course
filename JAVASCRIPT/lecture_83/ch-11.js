// question 1
class complexNumber{
    constructor(real,img){
        this.real=real;
        this.img=img;
    }
    display(){
        console.log(`${this.real} + ${this.img}i`);
    }
}
let num=new complexNumber(1,7);
num.display();


// question 2
class complexNumbers{
    constructor(real,img){
        this.real=real;
        this.img=img;
    }
    display(){
        console.log(`${this.real} + ${this.img}i`);
    }
    add(other){
        const realPart=this.real+other.real;
        const imaginaryPart=this.img+other.img;
        return new complexNumbers(realPart,imaginaryPart);
    }
}
let comp_num1=new complexNumbers(1,7);
let comp_num2=new complexNumbers(4,9);
let result=comp_num1.add(comp_num2);
result.display();


//question 3
class human{
     constructor(name){
        this.name=name;
     }
    introduce(){
        console.log(`${this.name}`);
        
    }
}
class student extends human{
    constructor(name,sub){
        super(name);
        this.sub=sub;
    }
    introduce(){
        console.log(`${this.name} has a subject ${this.sub}`);
        
    }
}
const name1=new human("tuti");
name1.introduce();
const name2=new student("Stuti","Cse");
name2.introduce();


//question 4
// yes it has an instance of human 


// question 5
class comp_num{
    constructor(real,img){
        this._real=real;
        this._img=img;
    }
    get real(){
        return this._real;
    }
    set real(value){
        this._real=value;
    }
    get img(){
        return this._img;
    }
    set ing(value){
        this._img=value;
    }
    display(){
        console.log(`${this.real}+${this.img}i`);
    }
}
num.real=7;
num.img=2;
num.display();