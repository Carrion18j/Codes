// Hollow Square Pattern
console.log("Hollow Square Pattern\n")
for(let i = 1; i<=5; i++){
  if(i==1){
  console.log('*****')
  }
  else if(i==5){
  console.log('*****')
  }
  else{
    console.log('*   *')
  }
}

// Right Triangle Pattern in Javascript
console.log("Right Triangle Pattern in Javascript\n")
let str = '*'
for(let i=11 ; i>=0 ; i--){
  console.log((str.padStart(str.length + i," "))+(str.padStart(str.length + i, "*")))
}

 // Left Triangle Pattern in Javascript
console.log("Left Triangle Pattern in Javascript\n")
for(let i = 0; i<=10 ; i++){
  console.log('*'.repeat(i))
}

// Downward Triangle Star Pattern
console.log("Downward Triangle Star Pattern\n")
for(let i = 10; i>=0 ; i--){
  console.log('*'.repeat(i))
}

// Hollow Triangle Star Pattern
console.log("Hollow Triangle Star Pattern\n")
for(let i = 1; i<=10 ; i++){
  if(i == 1 || i == 10){
    console.log('*'.repeat(i))
  }
  else if( i==2 ){}
  else{
    console.log('*'+'*'.padStart(i - 2, " "))
  }
}

// Javascript Pyramid Pattern
console.log("Javascript Pyramid Pattern\n")
let n = 9;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
