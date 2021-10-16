var rs = require("readline-sync")
const chalk = require("chalk")


let log=console.log

let blueBright=chalk.bold.blueBright
let green=chalk.bold.green
let red=chalk.bold.red
let cyan=chalk.bold.cyan
let yellow=chalk.bold.yellow
let title=chalk.black.bold.bgYellow
let inverse=chalk.inverse

var score=0;
var highscore=15;

let questions=[
{
  no:'1',
  question: 'Who was the actual mother of Lord Krishna as per Hindu Mythology?',
  A: ' Yashoda',
  B: ' Devki',
  C: ' Rukmani',
  ans:'A',
},
{
  no:'2',
  question:'How was the demon ruler Kansa related to Lord Krishna?',
  A: ' He was the father of Krishna',
  B: ' He was the brother of Krishna',
  C: ' He was the maternal uncle of Krishna',
  ans: 'C',
},
{
  no:'3',
  question:'Who among the following was not the wife of Lord Krishna',
  A:' Radha',
  B:' Rukmini',
  C:' Satyabhama',
  ans:'A',
},
{
  no:'4',
  question:'Which wife of Krishna was considered to be the incarnation of Goddess Lakshmi?',
  A:' Rukmini',
  B:' Radha',
  C:' Jambavati',
  ans:'A',
},
{
  no:'5',
  question:'Who was the childhood friend of Krishna, who was a poor brahmin?',
  A:' Yudhisthir',
  B:' Balaram',
  C:' Sudama',
  ans:'C',
},
];
log(cyan("welcome to the.."),title("Lord Krishna Trivia!\n"))
let user=rs.question("Enter your Name:")
log(green(`Hello ${user}`))
log(blueBright("\n A quiz from our hindu lord Krishna.."))
log("\n there will be 5 questions.")
log(green("+5"),"point for right answer.",red("-2"),"points for wrong answer\n")
for(q of questions){
  log(yellow(q.no+':'+q.question));
  log(cyan('A'+q.A));
  log(cyan('B'+q.B));
  log(cyan('C'+q.C));

  var answer=rs.question("Answer:");
  if(answer.toLowerCase()===q.ans.toLowerCase()){
    log(green("+5\n"),"your answer is ",green("correct"))
    score+=5;
    log("Your current Score is:",green(score),"\n")
    }else{
      log(red("-2\n"),"Your Answer is",red("Wrong"),"\n")
      score-=2;
      log("Your current Score is:",red(score),"\n")
    }
}
if(score>highscore){
  log(green("Congratulation you won the quiz.:)\n"))
}
else{
  log(red("Sorry , You lose quiz \n better luck next time :(\n"))
}
log(yellow("Scoreboard:"))
log('Hello ' + red(user) + ' Your final score is : ' + score)