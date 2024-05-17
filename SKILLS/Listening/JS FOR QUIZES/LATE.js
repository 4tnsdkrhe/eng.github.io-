const quizData = [
    {
        question: "What is the topic of the lecture?",
        a: "The American Revolution",
        b: "Software engineering",
        c: "Search engine optimization (SEO)",
        correct: "b",
    },
    {
        question: "When will the mid-term tests be returned?",
        a: "Tomorrow",
        b: "The day after tomorrow",
        c: "Next Tuesday",
        correct: "c",
    },
    {
        question: "What page are we supposed to be on in the textbook?",
        a: "Page 34",
        b: "Page 12",
        c: "Page 56",
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
  