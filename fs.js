const questions = [
    {
        question: "Which language is used for web page structure?",
        answers: [
            { text: "CSS", correct: false },
            { text: "HTML", correct: true },
            { text: "JavaScript", correct: false },
            { text: "Python", correct: false }
        ]
    },
    {
        question: "Which technology is used for styling web pages?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "Node.js", correct: false },
            { text: "MongoDB", correct: false }
        ]
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: [
            { text: "var", correct: true },
            { text: "int", correct: false },
            { text: "define", correct: false },
            { text: "let()", correct: false }
        ]
    },
    {
        question: "Which framework is used for backend JavaScript development?",
        answers: [
            { text: "React", correct: false },
            { text: "Node.js", correct: true },
            { text: "Bootstrap", correct: false },
            { text: "Tailwind", correct: false }
        ]
    },
    {
        question: "Which database is commonly used in MERN stack?",
        answers: [
            { text: "MySQL", correct: false },
            { text: "MongoDB", correct: true },
            { text: "Oracle", correct: false },
            { text: "SQLite", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startBtn = document.getElementById("startExam");

let currentQuestionIndex = 0;
let score = 0;
let totalTime = 600;
let timerInterval;
let examStarted = false;

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(function () {
        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;
        document.getElementById("timer").innerText =
            minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
        totalTime--;
        if (totalTime < 0) {
            clearInterval(timerInterval);
            alert("Time Up!");
            showScore();
        }
    }, 1000);
}

function enterFullScreen() {
    let elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    }
    else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }
    else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

startBtn.addEventListener("click", function () {
    let allow = confirm(
        "Fullscreen mode is required for this exam.\nClick OK to start."
    );
    if (!allow) return;
    enterFullScreen();
    setTimeout(function () {
        examStarted = true;
        startQuiz();
    }, 300);
});

document.addEventListener("fullscreenchange", function () {
    if (examStarted && !document.fullscreenElement) {
        alert("You exited fullscreen. Exam ended.");
        showScore();
    }

});

function startQuiz() {
    document.querySelector(".quiz").style.display = "block";
    startBtn.style.display = "none";
    currentQuestionIndex = 0;
    score = 0;
    totalTime = 600;
    nextButton.innerHTML = "Next";
    startTimer();
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML =
        questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.innerHTML = "Submit";
    }
    else {
        nextButton.innerHTML = "Next";
    }
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    examStarted = false;
    clearInterval(timerInterval);
    resetState();
    questionElement.innerHTML =
        `You Scored ${score} out of ${questions.length}!`;
    nextButton.style.display = "none";
    setTimeout(function(){
        window.location.href = "books.php";
    },1000);
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        examStarted = false;
        clearInterval(timerInterval);
        currentQuestionIndex = 0;
        score = 0;
        totalTime = 600;
        document.getElementById("timer").innerText = "10:00";
        resetState();
        questionElement.innerHTML = "Question goes here";
        document.querySelector(".quiz").style.display = "none";
        startBtn.style.display = "block";
    }
});

document.addEventListener("visibilitychange", function () {
    if (examStarted && document.hidden) {
        alert("Tab switching is not allowed during the exam.");
    }
    if (examStarted && !document.hidden) {
        if (!document.fullscreenElement) {
            enterFullScreen();
        }
    }
});