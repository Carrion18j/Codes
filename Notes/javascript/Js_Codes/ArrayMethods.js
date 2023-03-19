// an array is a special type of iable that is used to store multiple pieces of related data
let array = [10, 'Berry', false,]
array[3] = 'ok'
console.log(typeof array)
console.log(array, ' \n')
let i = 0
for (i; i < (array.length); i++) {
  console.log(array[i])
}
// NOTE -->  In an array, the values are stored in a linear fashion, while in an object, the values are stored as key-value pairs.

// Methods in Array

// .toString
console.log(b = array.toString())

// .join
console.log(array.join('_'/* <-- your face look like this*/), typeof c) // --> 10_Berry_true_ok string

// .pop
console.log(array.pop()) // returns the last element

// .push
console.log(array.push(true), array) // --> 4 [ 10, 'Berry', false, true ]

// .deleat // deleat an index in the array bet does not change its length
console.log(array[0].deleat, array)

// .concat  // can take more the 1 arr
let arr = [5, 4, 3, 2, 1]
console.log((array.concat(arr, arr)).toString())

// .sort //sort in 1st index eg. 12,2,34,4,555,67,9
//let arr = [5,4,3,2,1]         alredy declaired
console.log(arr.sort())

// .sort // accending , decending
 compare = (a, b) => {
  return a - b
}
arr.sort(compare)
console.log(arr)
 compare = (a, b) => {
  return b - a
}
arr.sort(compare)
console.log(arr)

// .reverse  // simple as ___  <--(You know)
console.log(arr.reverse())

// .slice
let arra = [1, 2, 3, 4, 5, 6, 7, 8, 9]
b = arra.slice(7, 9) // --> 8,9
console.log(b)
c = arra.slice(3) // --> 4,5,6,7,8,9
console.log(c)

// .splice 
//3 here says at index 3
//2 here says remove 2 
//1010*3 here says add these three
let a = arra.splice(3, 2, 1010, 1010, 1010)
// a returns the deleated array
console.log(arra.toString(), `\t`, a.toString())
