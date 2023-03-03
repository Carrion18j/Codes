let array = ['a']
console.log('a')
for(let i=0;i<19;i++){
  if(((array.length+1)%2)==0){
    array.unshift('b')
   console.log(array.join(''))
  }
  else{
    array.unshift('a')
    console.log(array.join(''))
  }
 
}
