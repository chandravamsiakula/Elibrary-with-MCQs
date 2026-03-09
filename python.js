// const questions = [
//     {
//         question: "Who developed Python programming language?",
//         answers: [
//             { text: "Guido van Rossum", correct: true },
//             { text: "James Gosling", correct: false },
//             { text: "Dennis Ritchie", correct: false },
//             { text: "Bjarne Stroustrup", correct: false }
//         ]
//     },
//     {
//         question: "Which keyword is used to define a function in Python?",
//         answers: [
//             { text: "func", correct: false },
//             { text: "define", correct: false },
//             { text: "def", correct: true },
//             { text: "function", correct: false }
//         ]
//     },
//     {
//         question: "What is the output of: print(2 ** 3)?",
//         answers: [
//             { text: "6", correct: false },
//             { text: "8", correct: true },
//             { text: "9", correct: false },
//             { text: "5", correct: false }
//         ]
//     },
//     {
//         question: "Which data type stores multiple values in Python?",
//         answers: [
//             { text: "list", correct: true },
//             { text: "int", correct: false },
//             { text: "float", correct: false },
//             { text: "char", correct: false }
//         ]
//     },
//     {
//         question: "Which keyword is used for conditional statements in Python?",
//         answers: [
//             { text: "loop", correct: false },
//             { text: "if", correct: true },
//             { text: "switch", correct: false },
//             { text: "case", correct: false }
//         ]
//     }
// ];

// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz(){
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     showQuestion();

// }



// function showQuestion(){
//     resetState();

//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;

//     questionElement.innerHTML =
//         questionNo + ". " + currentQuestion.question;

//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);

//         if(answer.correct){
//             button.dataset.correct = answer.correct;
//         }

//         button.addEventListener("click", selectAnswer);
//     });

//     // ⭐ Change button text on last question
//     if(currentQuestionIndex === questions.length - 1){
//         nextButton.innerHTML = "Submit";
//     } else {
//         nextButton.innerHTML = "Next";
//     }
// }


// function resetState(){
//     nextButton.style.display = "none";
//     while(answerButtons.firstChild){
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }
// function selectAnswer(e){
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
//     if(isCorrect){
//         selectedBtn.classList.add("correct");
//         score++;
//     }else{
//         selectedBtn.classList.add("incorrect");
   
//     }
//     Array.from(answerButtons.children).forEach(button => {
//         if(button.dataset.correct === "true"){
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     });
//     nextButton.style.display = "block";
// }


// function showScore(){
//     resetState();
//     questionElement.innerHTML = `You Score ${score} out of ${questions.length}!`;
//     nextButton.innerHTML = "Play Again";
//     nextButton.style.display = "block";
// }
// function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length){
//         showQuestion();
//     }else{
//         showScore();
//     }
// }
// nextButton.addEventListener("click", () =>{
//     if(currentQuestionIndex < questions.length){
//         handleNextButton();

//     }else{
//         startQuiz();
//     }
// });

// startQuiz();



//// --------------------Python main----------------
// const questions = [

//     {
//         question: "Who developed Java programming language?",
//         answers: [
//             { text: "James Gosling", correct: true },
//             { text: "Dennis Ritchie", correct: false },
//             { text: "Bjarne Stroustrup", correct: false },
//             { text: "Guido van Rossum", correct: false }
//         ]
//     },

//     {
//         question: "Which keyword is used to define a class in Java?",
//         answers: [
//             { text: "function", correct: false },
//             { text: "class", correct: true },
//             { text: "define", correct: false },
//             { text: "struct", correct: false }
//         ]
//     },

//     {
//         question: "Which method is the entry point of a Java program?",
//         answers: [
//             { text: "start()", correct: false },
//             { text: "run()", correct: false },
//             { text: "main()", correct: true },
//             { text: "init()", correct: false }
//         ]
//     },

//     {
//         question: "Java follows which programming paradigm?",
//         answers: [
//             { text: "Procedural Programming", correct: false },
//             { text: "Object-Oriented Programming", correct: true },
//             { text: "Functional Programming", correct: false },
//             { text: "Logic Programming", correct: false }
//         ]
//     },

//     {
//         question: "Which keyword is used to inherit a class in Java?",
//         answers: [
//             { text: "implements", correct: false },
//             { text: "extends", correct: true },
//             { text: "inherits", correct: false },
//             { text: "super", correct: false }
//         ]
//     }

// ];



const questions = [
    {
        question: "Who developed Python programming language?",
        answers: [
            { text: "Guido van Rossum", correct: true },
            { text: "James Gosling", correct: false },
            { text: "Dennis Ritchie", correct: false },
            { text: "Bjarne Stroustrup", correct: false }
        ]
    },
    {
        question: "Which keyword is used to define a function in Python?",
        answers: [
            { text: "func", correct: false },
            { text: "define", correct: false },
            { text: "def", correct: true },
            { text: "function", correct: false }
        ]
    },
    {
        question: "What is the output of: print(2 ** 3)?",
        answers: [
            { text: "6", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "Which data type stores multiple values in Python?",
        answers: [
            { text: "list", correct: true },
            { text: "int", correct: false },
            { text: "float", correct: false },
            { text: "char", correct: false }
        ]
    },
    {
        question: "Which keyword is used for conditional statements in Python?",
        answers: [
            { text: "loop", correct: false },
            { text: "if", correct: true },
            { text: "switch", correct: false },
            { text: "case", correct: false }
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

    }, 2000);

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

// nextButton.addEventListener("click", () => {

//     if (currentQuestionIndex < questions.length) {
//         handleNextButton();
//     }
//     else {
//         startQuiz();
//     }

// });

// nextButton.addEventListener("click", () => {

//     if (currentQuestionIndex < questions.length) {
//         handleNextButton();
//     }
//     else {

//         examStarted = false;
//         clearInterval(timerInterval);

//         document.querySelector(".quiz").style.display = "none";
//         startBtn.style.display = "block";

//         currentQuestionIndex = 0;
//         score = 0;
//         totalTime = 600;

//         document.getElementById("timer").innerText = "10:00";

//     }

// });



nextButton.addEventListener("click", () => {

    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {

        /* RESET EVERYTHING */

        examStarted = false;
        clearInterval(timerInterval);

        currentQuestionIndex = 0;
        score = 0;
        totalTime = 600;

        document.getElementById("timer").innerText = "10:00";

        /* RESET UI */

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