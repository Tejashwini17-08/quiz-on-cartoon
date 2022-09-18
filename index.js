var readlineSync = require("readline-sync");
var score =0;
var username = readlineSync.question("May i know your name?");
console.log("welcome " + username + " to how well do you know cartoon?");
function play(question,answer){
  var useranswer = readlineSync.question(question);
  if(useranswer === answer){
    console.log("right");
    score = score+1;
  }
  else{
    console.log("wrong");
    score=score-1;
  }
  console.log("your current score: " + score);
}
var question1 ={
  ques: "What is the cartoon male character that doesn't speaks?",
  ans:"Mr.bean",
}
var question2 = {
  ques:"Who eats a lots of laddu?",
  ans:"Chota bheem",
}
var question3 ={
  ques: "What is the name of cartoon where we see 3 chockroaches?",
  ans:"Oggie and chockroaches",
}
var question4 ={
  ques:"What is the name of nobitha's girlfriend?",
  ans:"Shizuka",
}
var questions = [question1,question2,question3,question4];
for(var i=0;i<questions.length;i++){
  play(questions[i].ques,questions[i].ans);
}
if(score >0){
console.log("yay! you have scored: " + score);
}
else{
  console.log("its okay! your score is: " + score);
}
