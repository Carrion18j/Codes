let randNum = Math.floor(Math.random() * 100);
let userGuss;
let score = 0;
do{
    userGuss = prompt("Enter Your Guss")
    if((parseInt(userGuss)) < randNum){
        console.log("Your guss is smaller than the number: ")
        score++;
    }
    else if (userGuss === randNum){}
    else{
        console.log("Your guss is bigger then the numbe: ")
        score++;
    }
}while(randNum != userGuss)
let finalscore = 100-score;
console.log("Your ans is correct the num is "+randNum+". On the basis of your num of attempts your score is "+finalscore+"/100 becaous you take "+score+" of attempts ")
