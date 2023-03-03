// Strings 
let name1 = "berry"
console.log(name1)

//We can use " " , '' , `` for making a string
let a = "aaaa"
let b = 'bbbb'
let c = `cccc`
console.log(a,b,c)

// if we want to add a string in a string
let bro1 = "cherry"
let bro2 = "sorry"
let sentence = `${bro1} hates ${bro2}`
console.log(sentence)

// Escape sequence charectors
// \n
console.log("app\nle")
// \t
console.log("app\tle")
// \r
console.log("app\rle")
// \' , \" , \`
console.log("cherry\" love\' berry\` ")

// Methods in String in JS

// .length
console.log(("harry").length) // --> 5

// toUpperCase()  " its a function thats we add () in the end to call it"
console.log(("berry").toUpperCase()) // --> BERRY

// toLowerCase()
console.log(("BERRY").toLowerCase()) // --> berry

// slice 
let name4 = "harry"
name4.slice (2,4)    // prints rr (from 2 to 4, 4 not included)

//Indexing starts from 0, so H is 0, a is 1 and so on.

// .replace
let string1 = "Beery Love Cherry" 
console.log(string1.replace("Love","Hate"))

//.concat
let nam1 = "Berry"
let nam2 = "Cherry"
console.log(nam1.concat(nam2,"Good")) // --> BerryCherryGood

// .trim
let trim = "       Berry         "
console.log(trim.trim()) // --> "Berry"  (remove space)
