// ARRAY OF OBJECTS (quiz data)
const quizQuestions = [
    {
        question: "What is the capital of Nigeria?",
        options: ["Lagos", "Kano", "Abuja", "Kaduna"],
        answer: "Abuja"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Mercury"],
        answer: "Mars"
    },
    {
        question: "How many days are there in a leap year?",
        options: ["365", "366", "364", "360"],
        answer: "366"
    },
    {
        question: "Which language is used for web page structure?",
        options: ["CSS", "Python", "HTML", "SQL"],
        answer: "HTML"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    }
];

// Variables
let currentQuestionIndex = 0;
let score = 0;

// Get HTML elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");

// FUNCTION: Display question
function showQuestion() {

    // End game condition
    if (currentQuestionIndex >= quizQuestions.length) {
        endQuiz();
        return;
    }

    const currentQuestion = quizQuestions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";

    // LOOP through options
    for (let i = 0; i < currentQuestion.options.length; i++) {

        const button = document.createElement("button");
        button.textContent = currentQuestion.options[i];

        button.addEventListener("click", function () {
            checkAnswer(currentQuestion.options[i]);
        });

        optionsElement.appendChild(button);
    }
}

// FUNCTION: Check answer
function checkAnswer(selectedAnswer) {

    const correctAnswer = quizQuestions[currentQuestionIndex].answer;

    // CONDITION
    if (selectedAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.className = "correct";
        score++;
    } else {
        feedbackElement.textContent =
            "Wrong! Correct answer is: " + correctAnswer;
        feedbackElement.className = "wrong";
    }

    updateScore();

    currentQuestionIndex++;

    setTimeout(function () {
        feedbackElement.textContent = "";
        showQuestion();
    }, 1000);
}

// FUNCTION: Update score
function updateScore() {
    scoreElement.textContent = "Score: " + score;
}

// FUNCTION: End quiz
function endQuiz() {

    questionElement.textContent = "Quiz Finished!";

    optionsElement.innerHTML = "";

    feedbackElement.className = "";

    feedbackElement.textContent =
        "Final Score: " + score + " out of " + quizQuestions.length;
}

// Start the game
showQuestion();