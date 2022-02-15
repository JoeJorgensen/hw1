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