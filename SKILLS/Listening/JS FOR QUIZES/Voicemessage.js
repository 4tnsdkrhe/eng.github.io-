const quizData = [
    {
        question: "Who is Marina Silva?",
        a: "A customer of Old Time Toys",
        b: "A colleague of John's",
        c: "The CEO of Old Time Toys",
        correct: "a",
    },
    {
        question: "How did Marina get John's phone number?",
        a: "She was given it by Alex.",
        b: "She found it on the company website",
        c: "She looked it up in the phone book",
        correct: "a",
    },
    {
        question: "What does Marina need information on?",
        a: "Old Time Toys' shipping policies",
        b: "Old Time Toys' prices",
        c: "Old Time Toys' new products",
        correct: "c",
    },
    {
        question: "What does Marina want John to do?",
        a: "Both of the above",
        b: "Email her a brochure and price information",
        c: "Call her back when he gets back to the office",
        correct: "a",
    },
    {
        question: "What is Marina's phone number?",
        a: "0208 675 6821",
        b: "0208 655 7621",
        c: "0208 665 6721",
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
