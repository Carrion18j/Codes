//conditional expresion
/*There are three type of conditional expression
If
Else
Else If

alert (ask)
prompt (take)

*/

let a = prompt("Enter you age: ")
a = Number.parseInt(a)
if (a < 0) {
  console.log("Invalid age")
}
else if (a > 0) {
  console.log("Your age is " + a)
}
else {
}
console.log("you can", a<18? "not drive" : "drive")
