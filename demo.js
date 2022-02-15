// console.log("Hello")
// console.log("yo")
for(let i =0; i <= 10; i++) {
    console.log(i)
if ( i % 2 === 0){
    console.log(`${i} is even`);
} else {
    console.log(`${i} is odd`)
}
}
for(let i =10; i >= 0; i--){
    console.log(i)
}
let arr = ['a','b','c','d','e','f']

for(let i = 0; i < arr.length; i++)
console.log(arr[i])

arr.forEach((c)=>{
    console.log(c)}
)
let i = 0
while(i<= 10){ 
    if(i === 5){
        i++
        continue;
    }
    if( i===8){
        break;
    }
    console.log('i',i)
  i++
}