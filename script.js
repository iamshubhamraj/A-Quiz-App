var questions = [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "London", "Berlin"],
      correctAnswer: "Paris"
    },
    {
      question: "What is the name of the current US president?",
      answers: ["Joe Biden", "Donald Trump", "Barack Obama"],
      correctAnswer: "Joe Biden"
    },
    {
      question: "What is the square root of 16?",
      answers: ["4", "8", "12"],
      correctAnswer: "4"
    }
  ];
  
  var currentQuestionIndex = 0;
  var score = 0;
  
  function showQuestion() {
    var question = questions[currentQuestionIndex];
    document.getElementById("question").innerHTML = question.question;
    for (var i = 0; i < question.answers.length; i++) {
      var button = document.getElementById("option" + i);
      button.innerHTML = question.answers[i];
    }
  }
  
  function submitAnswer() {
    var selectedAnswer = document.getElementById("option" + currentQuestionIndex).innerHTML;
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      alert("Quiz finished! Your score is " + score);
    }
  }
  
  document.getElementById("submit").addEventListener("click", submitAnswer);
  
  showQuestion();