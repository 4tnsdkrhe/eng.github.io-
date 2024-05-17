const quizData = [
  {
      question: "Which planet is further away from the Sun, Mars or Jupiter?",
      a: "Jupiter",
      b: "Mars",
      c: "Earth",
      correct: "a",
  },
  {
      question: "What is the difference in the length of a day on Earth and Mars?",
      a: "Mars's day is about half an hour longer than Earth's day.",
      b: "Earth's day is about half an hour longer than Mars's day.",
      c: "They both have days that are exactly the same length",
      correct: "a",
  },
  {
      question: "What is the gravity on Mars like compared to Earth?",
      a: "Mars has about 38% of Earth's gravity",
      b: "Mars has about 70% of Earth's gravity",
      c: "Mars has about 100% of Earth's gravity",
      correct: "a",
  }
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
  answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
  let answer;

  answerElements.forEach(answerEl => {
      if(answerEl.checked){
          answer = answerEl.id;
      }
  });

  return answer;
}

submit.addEventListener('click', () => {
  const answer = getSelected();

  if(answer){
      if(answer === quizData[currentQuiz].correct){
          score++;
      }

      currentQuiz++;

      if(currentQuiz < quizData.length){
          loadQuiz();
      }
      else{
          quiz.innerHTML = `<h2 class="quiz-header">You answered correctly at ${score}/${quizData.length} questions</h2>
          <button class="quiz-btn" onclick="location.reload()">Reload</button>
          `;
      }
  }
});
