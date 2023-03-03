// Loops With Arrays
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// forEach Loop 
array.forEach((element) => {   
  // console.log(element * element)      // calls a function for each array 
})

/* const a =[1,2,3,4,5,6,7,8]
  a.forEach((value,index,element)=>{
    return value * value ;
  })
*/

// Array.form
let name = "Berry"
let name2 = Array.from(name)
// console.log(name2)

// for...of
for (let item of array) {
  // console.log(item)
}

// for...in
for (let i in array) {
  // console.log(i)
}

// map method
let arr = [1,2,3,4,5,6,7,8,9]
let a = arr.map((value,index,arra)=>{
  // diff b/w .map & .forEach is .map is ues to make a new array
  // console.log(value,index,arra)
  return value + 1;   
})

// filter method 
arr;
let A = arr.filter((value)=>{
  return value<3;
})
// console.log(A)

// reduce method
arr;
let arr2 = arr.reduce((value,index)=>{
  return value + index;
})
console.log(arr2)
