// Primitives Data Types in Js
console.log("Primitives and Objects in JavaScript")
let a = null // null,enpty
let b = 456 // number 
let c = true // boolean
let d = BigInt("456") + BigInt("4")
let e = "Shiva"
let f = Symbol("I am a good symbol")
let g = undefined
console.log(a, b, c, d, e, f, g)
console.log()
console.log("null is a --> " + typeof a)
console.log("456 is a --> " + typeof b)
console.log("true is a --> " + typeof c)
console.log("460n is a --> " + typeof d)
console.log("Shiva is a --> " + typeof e)
console.log("Symbol(I am a good symbol) is a --> " + typeof f)
console.log("undefined is a --> " + typeof g)
console.log()

// Objects (Non-Primitives Data Type) in Js
console.log("Objects (Non-Primitives Data Type) in Js (see code)")
const shiva = {
  a: null,
  b: 456,
  c: true,
  d: BigInt("456"),
  e: "Shiva",
  f: Symbol("I am a good symbol"),
  g: undefined
}
console.log(shiva[a], shiva[b], shiva[c], shiva[d], shiva[e], shiva[f], shiva[g])
