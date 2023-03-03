// for looop write 10 natural num 
let sum = 0
let num = prompt("Enter a num: ")
num = Number.parseInt(num)
for(let i = 0; i<num ; i++){
  sum += (i+1)
  console.log((i+1)+"+")
}
console.log(sum)
/*A for loop is a type of loop that allows a programmer to iterate over a 
sequence of values, such as a list or an array, and execute a set of instructions 
for each value in the sequence.*/

// for in looop

const dict = {
  "harry":90,
  "berry":80,
  "cherry":70,
  "larry":60
}
for(let a in dict){
  console.log("Marks of "+a+" are "+dict[a])
}
/*A for in loop is a type of loop in programming languages that iterates over each item in a collection of 
elements, such as an array or an object. It typically consists of a loop variable, 
an iterable object, and a body of code to execute for each iteration.*/

// for of loooop

for(let b of "cherry"){
  console.log(b)
}
/*A for of loop is a type of loop that iterates over the elements of an iterable object, 
such as an array or a string, and executes a given statement for each element.*/

// while looooop

/*A while loop is a type of loop that continuously runs until a certain condition is met. 
It is often used when an action needs to be repeated until a specific condition is met.*/

let x = 1
while(x<=10){
  console.log(x)
  x++;
}

//do while loop

/*A do-while loop is a type of loop in programming that will execute the code inside of its body 
at least once, and then will continue to execute the code as long as the loop condition is true.*/

do{
  console.log("hi")
}while(x>10)
