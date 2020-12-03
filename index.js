var readlineSync = require("readline-sync");


var questionList = [
{
  question: "Which is my favorite place? ",
  answer: "Kedarnath"
  
},
{
  question: "Which is my favorite game? ",
  answer: "Volleyball"
  
},
{
  question: "Which is my favorite Dish? ",
  answer: "puran poli"
  
},
{
  question: "Which is my favorite game ? ",
  answer: "Pubg"
},
{
  question: "Which is my favorite cricket player? ",
  answer: "msdhoni"
}
]
userScore = 0;
function check(question, answer){
  var userAns = readlineSync.question(question);
  if(userAns === answer.toLowerCase()){
    console.log("Right Answer");
    userScore++;
  }
  else{
    console.log("Wrong Answer");
  }
}
var userName = readlineSync.question("Enter your name : ");
console.log("Welcome! "+userName+".");
console.log("Lets know - How much do you know about Me?");
console.log("Lets start the game...");

for(var i=0; i<questionList.length; i++){
  check(questionList[i].question, questionList[i].answer);
}

console.log("-------------------------------------");
console.log("Your total score is : "+userScore);
console.log("-------------------------------------");