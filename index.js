const readlineSync = require('readline-sync')
const chalk = require('chalk');


let userScore = 0;

let highScores = [{
  name: 'User1',
  score: 4
},
{
  name: 'User2',
  score: 4
},
{
  name: 'User3',
  score: 3
}
]

var questions = [{
  question: "What's my hometown? ",
  answer: "bareilly"
}, {
  question: "what's my favorite food? ",
  answer: "pizza"
},
{
  question: "What religion do i believe in?",
  answer: "none"
},
{
  question: "what genre of music do i listen to?",
  answer: "pop"
}, {
  question: "What;s the first name of my idol in field of CS?",
  answer: "Linus"
}];



function welcomeUser() {
  var userName = readlineSync.question(chalk.blue.bold("What's your name?"))
  console.log(chalk.blue.bold.underline("Welcome " + userName + " to DO YOU KNOW AKHAND???"))
  return userName;
}

function ask(ques, ans) {
  var userAns = readlineSync.question(ques)

  if (userAns.toLowerCase() === ans.toLowerCase()) {
    console.log(chalk.greenBright("Woahh Right answer !!"));
    userScore++
  } else {
    console.log(chalk.redBright("Uhhh Wrong Answer"))
  }
  console.log(chalk.magentaBright.bold("Your Score is %s"), userScore);
  console.log("----------------------------------")
  console.log("                                   ")
}

function playGame() {
  for (let i = 0; i < questions.length; i++) {
    let ques = questions[i];
    ask(ques.question, ques.answer)
  }
}


function showScores() {
  console.log("congrats you scored a total of ",userScore);
  console.log("If you think you should be there send me a screenshot I'll take care of it");

  let highestScore = userScore


  highScores.map(scorer => {console.log(scorer.name, " : ", scorer.score)
  
  highestScore = userScore > scorer.score ?userScore :scorer.score
  })

  if(highestScore ===userScore){
    console.log(chalk.greenBright.bgWhiteBright.underline("you just created a new highScore"));
  }

}

let userName = welcomeUser();
playGame();
showScores();

console.log("Thank you for trying this ", userName)