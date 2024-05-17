const quizData = [
    {
        question: "What is the first task that Mario needs to do for Susanne?",
        a: "Book a meeting room for the next team meeting",
        b: "Send an email to the customer in Germany",
        c: "Write a short report about the new project",
        correct: "b",
    },
    {
        question: "What is the most urgent task that Mario needs to do?",
        a: "Send an email to the customer in Germany",
        b: "Book a meeting room for the next team meeting",
        c: "Write a short report about the new project",
        correct: "a",
    },
    {
        question: "What is the deadline for Mario to send the email to the customer?",
        a: "In two or three weeks",
        b: "Next week",
        c: "Today",
        correct: "c",
    },
    {
        question: "What is the next task that Mario needs to do after booking a meeting room?",
        a: "Write a short report about the new project",
        b: "Send an email to the team",
        c: "Do nothing",
        correct: "b",
    },
    {
        question: "When does Mario need to write the short report about the new project?",
        a: "This week",
        b: "In the next two or three weeks",
        c: "There is no deadline",
        correct: "a",
    },
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
