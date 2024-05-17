const quizData = [
    {
        question: "Why did the author hurry back to the desk as soon as the flight was cancelled?",
        a: "He wanted to make sure that he would be able to get a hotel room",
        b: "He wanted to be one of the first to be rebooked on the next flight",
        c: "He wanted to be able to get back home as soon as possible",
        correct: "b",
    },
    {
        question: "Which of the following was the author's main learning from the experience described in the text?",
        a: "It is important to be aware of your own workload and to be able to say no to new commitments",
        b: "It is important to have a clear understanding of the goals that you are working towards",
        c: "It is important to use a systematic approach to goal setting, such as the SMART approach",
        correct: "c",
    },
    {
        question: "What was the most important thing that the author learned from working on a virtual team on an international project?",
        a: "It is important to be aware of cultural differences and to be sensitive to the needs of others",
        b: "It is important to use technology to facilitate communication and collaboration.",
        c: "It is important to have a clear project charter that outlines the communication norms and rules that will be followed",
        correct: "c",
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
