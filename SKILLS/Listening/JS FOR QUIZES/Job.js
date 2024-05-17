const quizData = [
    {
        question: "What is the main challenge that Maria sees in coming to a much larger company?",
        a: "She might not be able to take a personal approach",
        b: "She might be perceived as inexperienced",
        c: "She needs from the HR team",
        correct: "b",
    },
    {
        question: "How will performance in this role be measured?",
        a: "By the satisfaction of employees with the training",
        b: "By the number of employees who complete training courses",
        c: "By the success of the learning and development strategy",
        correct: "c",
    },
    {
        question: "Who would I mostly work with on a daily basis?",
        a: "You would mostly work with the training providers",
        b: "You would mostly work with the employees",
        c: "You would mostly work with the HR manager and the HR team",
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
