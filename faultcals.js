
let rand=Math.random();
console.log(rand)
let ap=prompt("enter a val")
let op=prompt("enter opr")
let bp=prompt("enter b val")

let obj={
    "-":"+",
    "+":"*"
}
if(rand>0.1){
    console.log(`result=${ap} ${op} ${bp}`)
    alert(`the res=${eval(`${ap} ${op} ${bp}`)} `)
}
else{
    c=obj[op]
    console.log(`result= ${eval(`${ap} ${op} ${bp}`)}`)
}