// let obj={
//     a:1,
//     b:"tuti"
// }
// console.log(obj);
// let animal={
//     eats:true
// };
// let rabbit={
//     jumps:true
// };
// rabbit.__proto__=animal;//sets rabbit.[[PArototype]]=animal

class animal{
    constructor(name){
        this.name=name
        console.log("object is created...");
    }
    eats(){
        console.log("kha raha hoon");
        
    }
    jump(){
        console.log("kood raha hoon");
        
    }
}
class Lion extends animal //attached all the properties of animal object
{
   constructor(name){
    super(name)
    this.name=name
    console.log("object is created and he is a lion...");
    
   }
   eats(){
    super.eats();
    console.log("kha raha hoon roar");
    
   }
}
let a=new animal("Bunny");
console.log(a);
let l=new Lion("Shera");
console.log(l);

