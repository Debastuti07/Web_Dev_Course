// async function getData(){
//     //simulate getting data from a server
//      return new Promise((resolve,reject)=>{
// setTimeout(() => {
//     resolve(455)
// }, 5300);
//      })
// }




// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settle successfully



async function getData() {
    //simulate getting data from a server
    // let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x= await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
    let data=await x.json()
    console.log(data);
    
}
async function main() {
    
    console.log("loading modules");
    console.log("do something else");
    console.log("load data");


    let data=await getData()//run it sequencially


    console.log(data);
    console.log("process data");
    console.log("task 2");
}
main()

    

