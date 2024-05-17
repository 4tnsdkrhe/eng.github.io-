
var currentquestion = 0;
var questions = [{
  "question": "Innovation is important because it helps organizations and societies to progress",
  "response": "",
  "answer": true
}, {
  "question": "Incremental innovation involves making small changes to existing products and services",
  "response": "",
  "answer": true
}, {
  "question": "Architectural innovation involves taking successful ideas from one market and applying them to a new market",
  "response": "",
  "answer": true
}];

(function() {

  fnReset(); 

  document.getElementById("rinextquestion").addEventListener('click', function(event) {
    fnCheck();
  });

  document.getElementById("richecktrue").addEventListener('click', function(event) {
    fnCheck(true);
  });
  document.getElementById("richeckfalse").addEventListener('click', function(event) {
    fnCheck(false);
  });
  document.getElementById("rinextquestion").addEventListener('click', function(event) {
    fnNext();
  });
  document.getElementById("rireset").addEventListener('click', function(event) {
    fnReset();
  });

})();

function fnReset() {

  document.getElementById('riquestionresponse').classList.add('rihide');
  document.getElementById('rinextquestion').classList.add('rihide');
  document.getElementById('rireset').classList.add('rihide');
  document.getElementById('riquestionbox').classList.remove('rihide');
  currentquestion = 0;
  document.getElementById('riquestiontext').innerHTML = questions[currentquestion].question;
}

function fnNext() {
  document.getElementById('riquestionresponse').classList.add('rihide');
  if (currentquestion < questions.length - 1) {
    currentquestion = currentquestion + 1;
    document.getElementById('rinextquestion').classList.add('rihide');
    document.getElementById('rireset').classList.add('rihide');

  } else {

    document.getElementById('rinextquestion').classList.add('rihide');
    document.getElementById('riquestionbox').classList.add('rihide');
    document.getElementById('rireset').classList.remove('rihide');
  }
  document.getElementById('riquestionresponse').classList.add('rihide');
  document.getElementById('riquestiontext').innerHTML = questions[currentquestion].question;
}


function fnCheck(answer) {
document.getElementById('riquestionresponse').classList.remove('ricorrect','riincorrect');
  var questionAnswer = questions[currentquestion].answer;
  if (questionAnswer === answer) {
    // show correct
 document.getElementById('riquestionresponse').classList.add('ricorrect');
 document.getElementById('riquestionresponse').innerHTML = "You chose: ''" + answer + "'. The answer is '" + questionAnswer + "'. " + questions[currentquestion].response;
  } else {
    // show incorrect
    document.getElementById('riquestionresponse').classList.add('riincorrect');
    document.getElementById('riquestionresponse').innerHTML = "You chose: ''" + answer + "'. The answer is '" + questionAnswer + "'. " + questions[currentquestion].response;
  }
document.getElementById('riquestionresponse').classList.remove('rihide');
document.getElementById('rinextquestion').classList.remove('rihide');
}
