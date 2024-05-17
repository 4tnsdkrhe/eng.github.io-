
var currentquestion = 0;
var questions = [{
  "question": "The staff car park will be closed for a few weeks next month",
  "response": "",
  "answer": true
}, {
  "question": "The canteen has introduced a cashless payment system",
  "response": "",
  "answer": true
}, {
  "question": "The new head of department will start at the end of this week",
  "response": "The new head of department will start at the end of the next month.",
  "answer": false
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
