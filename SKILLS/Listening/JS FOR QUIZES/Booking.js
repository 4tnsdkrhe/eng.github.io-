const quizData = [
    {
        question: "What time did Jamie originally book a table for?",
        a: "8:30 PM",
        b: "7:30 PM",
        c: "9:30 PM",
        correct: "b",
    },
    {
        question: "How many people was Jamie originally booking the table for?",
        a: "4 people",
        b: "5 people",
        c: "6 people",
        correct: "c",
    },
    {
        question: "What was the problem with Jamie's original booking?",
        a: "She wanted to change the time",
        b: "She wanted to do both",
        c: "She wanted to change the number of people",
        correct: "c",
    },
    {
        question: "What did the staff offer to do to accommodate Jamie's request?",
        a: "They offered to move him to a bigger table",
        b: "They offered to move him to a smaller table",
        c: "They offered to cancel his booking",
        correct: "a",
    },
    {
        question: "What time did Jamie end up booking the table for?",
        a: "7:30 PM",
        b: "8:30 PM",
        c: "9:30 PM",
        correct: "b",
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
