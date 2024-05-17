const quizData = [
    {
        question: "Why doesn't Charles want to celebrate his 40th birthday?",
        a: "He doesn't think there's anything special about getting old",
        b: "He doesn't like the hassle of organizing a party",
        c: "He thinks celebrating birthdays is self-indulgent",
        correct: "b",
    },
    {
        question: "What does Marco say is the pressure of organizing a 9-year-old's birthday party?",
        a: "You have to make sure that the party is a hit or your kid will be disappointed",
        b: "You have to be careful not to copy another kid's party or your kid will get accused of copying",
        c: "You have to take them all rock-climbing or hire a make-up artist to come and teach them how to look like a zombie or a film star",
        correct: "c",
    },
    {
        question: "What does Charles say he would like to do for his 40th birthday?",
        a: "He would like to have a big party with all of his friends and family",
        b: "He would like to have a low-key party with a few friends",
        c: "He would like to have a kids-style party like he used to have",
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
