function sayHello(){
    console.log("Hello")
}
sayHello()
sayHello()
sayHello()

const sayHola = ()=>{
    console.log('hola')
}
sayHola()
sayHola()
sayHola()


// define a function with a parameter 
// only visible to function
function introducePerson(person){
    console.log(`hello ${person} I'm, Joe`)
}

// pass function an argument
introducePerson('Joe')
introducePerson('John')
introducePerson('Jill')

function add(num1 , num2) {
    // console.log('num1', num1)
    // console.log(num1 + num2)
return num1 + num2
}
console.log(typeof add(1,1))
console.log(typeof 2 === 2)
console.log(typeof 2 === 3)
console.log(add ('1','1'))
let sum = add(1,1)
console.log(sum)
let sum1 = add(add(2,2),add(3,3))
console.log(sum1)

const evenOrOdd = (num)=>{
    if(num % 2===0){
        return'even'
    } else {
        return 'odd'
    }
}
let x = evenOrOdd(3)
console.log(x)