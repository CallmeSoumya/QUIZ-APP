const questions = [
  {
    question:"Which is the largest animal in the world?",
    answers:[
      { text:"Shark", correct:false},
      { text:"Blue Whale", correct:true},
      { text:"Elephant", correct:false},
      { text:"Giraffe", correct:false},
    ]
  },{
    question:"Which is the Smallest country in the world?",
    answers:[
      { text:"Vatican City", correct:true},
      { text:"Bhutan", correct:false},
      { text:"Nepal", correct:false},
      { text:"Sri lanka", correct:false},
    ]

  },{
    question:"Which is the largest desert in the world?",
    answers:[
      { text:"Kalahari", correct:false},
      { text:"Gobi", correct:false},
      { text:"Sahara", correct:false},
      { text:"Antarctica", correct:true},
    ]

  },{
    question:"Which is the smallest continent in the world?",
    answers:[
      { text:"Asia", correct:false},
      { text:"Australia", correct:true},
      { text:"Arctic", correct:false},
      { text:"Africa", correct:false},
    ]

  },{
    question:"What is the most populated country in the world?",
    answers:[
      { text:"India", correct:false},
      { text:"China", correct:true},
      { text:"Russia", correct:false},
      { text:"USA", correct:false},
    ]

  },{
    question:"In which Country is the world's highest waterfall?",
    answers:[
      { text:"South Africa", correct:false},
      { text:"USA", correct:false},
      { text:"Venezuela", correct:true},
      { text:"Brazil", correct:false},
    ]

  },{
    question:"Which country has the greatest number of volcanoes?",
    answers:[
      { text:"Japan", correct:false},
      { text:"Italy", correct:false},
      { text:"Indonesia", correct:true},
      { text:"Philippines", correct:false},
    ]

  },{
    question:"Where was the hottest tempareture ever recorded",
    answers:[
      { text:"Mexico", correct:false},
      { text:"Peru", correct:false},
      { text:"India", correct:false},
      { text:"Libya", correct:true},
    ]

  },{
    question:"Which celebrity was carried by their minders along the great Wall of China?",
    answers:[
      { text:"Lady Gaga", correct:false},
      { text:"Justin Bieber", correct:true},
      { text:"Harry Styles", correct:false},
      { text:"Daniel Radcliffe", correct:false},
    ]

  },{
    question:"Which is the tallest mountain peak in the world?",
    answers:[
      { text:"K2", correct:false},
      { text:"Mt Everest", correct:true},
      { text:"Nandadevi", correct:false},
      { text:"Makalu", correct:false},
    ]

  }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex+1;
  questionElement.innerHTML = questionNo + ". "+currentQuestion.question;
  currentQuestion.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer);
  })
}
function resetState(){
  nextButton.style.display ="none";
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
  selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach(button => {
    if(button.dataset.correct==="true"){
      button.classList.add("correct");
    }
    button.disabled = true;

  });
  nextButton.style.display = "block";
}
function showScore(){
  resetState();
  questionElement.innerHTML=`You scored ${score} out of ${questions.length} !`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex<questions.length){
    handleNextButton();
  }
  else{
    startQuiz();
  }
})
startQuiz();