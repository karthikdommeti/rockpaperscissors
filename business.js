// let ob1={
//     0:"crazy",
//     1:"amazing",
//     2:"fire"
// }
// let ob2={
//     0:"engine",
//     1:"foods",
//     2:"garments"
// }
// let ob3={
//     0:"bros",
//     1:"limited",
//     2:"hub"
// }

// console.log(ob1[Math.floor(Math.random()*3)]+ob2[Math.floor(Math.random()*3)]+ob3[Math.floor(Math.random()*3)]);

const val=4;
var b=1;
const f=(x)=>{
    for(let m=1; m<x;m++){ 
        b=b*(m);
   }
}
f(val);
console.log(b);
