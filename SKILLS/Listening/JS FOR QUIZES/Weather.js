const quizData = [
    {
        question: "What is the weather forecast for the south of England this week?",
        a: "Mostly sunny with high temperatures",
        b: "Mostly dry with a few isolated showers",
        c: "There will be some rain on the east coast",
        correct: "b",
    },
    {
        question: "What is the weather forecast for the north-west of England this week?",
        a: "Some heavy showers, and even thunderstorms in Manchester",
        b: "Drizzle and light rain throughout the day and tonight",
        c: "Mostly wet weather with not a lot of sunshine",
        correct: "c",
    },
    {
        question: "What is the weather forecast for the weekend?",
        a: "The rain will move from Scotland, down towards the north",
        b: "Temperatures will stay mostly warm at around 21 degrees",
        c: "Mostly cloudy skies and rain",
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
  