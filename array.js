// Arrays = lists ...[]
let nums = [1,2,3,4,5,6]
let booleans = [true, false, false]

let random = [1,2,3, 'asdlkjf', true, false ]
// Might be bad ^^
// You want arrays to be uniform

let nestedArray = [[1,2,3],[4,5,6]]

// Accessing items in an array by index, arrays start at 0
console.log(nums[2])
console.log(nestedArray[1])
console.log(nestedArray[1][2])

console.log(nums.length)

console.log(nums[0])

console.log(nums[nums.length -1])

nums.push(10)
// add item to first of the array
nums.unshift('x')

console.log(nums)

nums.pop()

// remove from start
nums.shift()
console.log(nums)

let names = ['Jon','george','Sally'] => {
    const sayHello = (person)=>{
    console.log(`Hello ${person}`)
}

// sayHello(names[0]))
// sayHello(names[1]))
// sayHello(names[2]))

names.forEach((name, i)=>{
    console.log(name)
    console.log(i)
})

// forEach
// map
// filter
// reduce