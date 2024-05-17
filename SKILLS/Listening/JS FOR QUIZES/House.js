
var currentquestion = 0;
var questions = [{
  "question": "The couple moved into the flat in July",
  "response": "",
  "answer": false
}, {
  "question": "The author's average review rating was 4.5 stars before the bad review",
  "response": "",
  "answer": true
}, {
  "question": "The author's parents are able to afford to buy a house",
  "response": "",
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
