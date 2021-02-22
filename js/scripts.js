let num = 0;
let score;
const questions = ['question1', 'question2', 'question3', 'question4'];
const answers = ['answer1', 'answer2', 'answer3', 'answer4'];
let currentResult = 0;
let answer;
  function correctAnswer() {
    questions.forEach((item) => {
      answer = prompt(item);
      answers.forEach((item) => {
        if (answer == item) {
          currentResult++;
        }
      })
    })
  }
correctAnswer();
let result = document.getElementById('result');
result.innerHTML = ('Number of correct answers: ' + currentResult);
