const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let Comp1randNum = Math.floor(Math.random() * 100);
let Comp2randNum = Math.floor(Math.random() * 100);
let compScore = 0;

do{
    if(Comp1randNum < Comp2randNum){
        console.log("Comp one guss "+Comp1randNum+" is smaller than < Comp two guss "+Comp2randNum)
        Comp2randNum = random(Comp1randNum,Comp2randNum)
        compScore++;
    }
    else if (Comp1randNum > Comp2randNum){
        console.log("Comp one guss "+Comp1randNum+" is greater than > Comp two guss "+Comp2randNum)
        Comp2randNum = random(Comp2randNum,Comp1randNum+1)
        compScore++;
    }
    
} while(Comp1randNum != Comp2randNum)
console.log("Comp one guss "+Comp1randNum+" is equal to Comp two guss "+Comp2randNum)
compScore++;
let finalscore = 100-compScore;
console.log("Comp Guess The Correct Num In "+((finalscore>=90)? ('only '+compScore+' attempts'):(compScore+' attempts')))
console.log("Computer two final score is "+finalscore+"/100\n") 

