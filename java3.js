// // const questionBank = [
// //     {
// //         question: "Who developed Java programming language?",
// //         answers: [
// //             { text: "James Gosling", correct: true },
// //             { text: "Dennis Ritchie", correct: false },
// //             { text: "Bjarne Stroustrup", correct: false },
// //             { text: "Guido van Rossum", correct: false }
// //         ]
// //     },
// //     {
// //         question: "Which keyword is used to define a class in Java?",
// //         answers: [
// //             { text: "function", correct: false },
// //             { text: "class", correct: true },
// //             { text: "define", correct: false },
// //             { text: "struct", correct: false }
// //         ]
// //     },
// //     {
// //         question: "Which method is the entry point of a Java program?",
// //         answers: [
// //             { text: "start()", correct: false },
// //             { text: "run()", correct: false },
// //             { text: "main()", correct: true },
// //             { text: "init()", correct: false }
// //         ]
// //     },
// //     {
// //         question: "Java follows which programming paradigm?",
// //         answers: [
// //             { text: "Procedural Programming", correct: false },
// //             { text: "Object-Oriented Programming", correct: true },
// //             { text: "Functional Programming", correct: false },
// //             { text: "Logic Programming", correct: false }
// //         ]
// //     },
// //     {
// //         question: "Which keyword is used to inherit a class in Java?",
// //         answers: [
// //             { text: "implements", correct: false },
// //             { text: "extends", correct: true },
// //             { text: "inherits", correct: false },
// //             { text: "super", correct: false }
// //         ]
// //     }
// // ];

// JAVA
const questionBank = [

{
question:"Who developed Java programming language?",
answers:[
{text:"James Gosling", correct:true},
{text:"Dennis Ritchie", correct:false},
{text:"Bjarne Stroustrup", correct:false},
{text:"Guido van Rossum", correct:false}
]
},

{
question:"Which company originally developed Java?",
answers:[
{text:"Sun Microsystems", correct:true},
{text:"Microsoft", correct:false},
{text:"Google", correct:false},
{text:"IBM", correct:false}
]
},

{
question:"Which keyword is used to define a class in Java?",
answers:[
{text:"class", correct:true},
{text:"function", correct:false},
{text:"define", correct:false},
{text:"struct", correct:false}
]
},

{
question:"Which method is the entry point of Java program?",
answers:[
{text:"main()", correct:true},
{text:"start()", correct:false},
{text:"run()", correct:false},
{text:"init()", correct:false}
]
},

{
question:"Which keyword creates an object?",
answers:[
{text:"new", correct:true},
{text:"create", correct:false},
{text:"object", correct:false},
{text:"init", correct:false}
]
},

{
question:"Java is a ____ language.",
answers:[
{text:"Platform independent", correct:true},
{text:"Platform dependent", correct:false},
{text:"Assembly", correct:false},
{text:"Machine", correct:false}
]
},

{
question:"Which keyword is used for inheritance?",
answers:[
{text:"extends", correct:true},
{text:"implements", correct:false},
{text:"inherits", correct:false},
{text:"super", correct:false}
]
},

{
question:"Which keyword prevents inheritance?",
answers:[
{text:"final", correct:true},
{text:"static", correct:false},
{text:"const", correct:false},
{text:"private", correct:false}
]
},

{
question:"Which keyword refers to current object?",
answers:[
{text:"this", correct:true},
{text:"self", correct:false},
{text:"current", correct:false},
{text:"object", correct:false}
]
},

{
question:"Which keyword refers to parent class?",
answers:[
{text:"super", correct:true},
{text:"parent", correct:false},
{text:"base", correct:false},
{text:"upper", correct:false}
]
},

{
question:"Which operator compares values?",
answers:[
{text:"==", correct:true},
{text:"=", correct:false},
{text:"!=", correct:false},
{text:">", correct:false}
]
},

{
question:"Which symbol ends Java statement?",
answers:[
{text:";", correct:true},
{text:".", correct:false},
{text:":", correct:false},
{text:",", correct:false}
]
},

{
question:"Which keyword stops loop?",
answers:[
{text:"break", correct:true},
{text:"stop", correct:false},
{text:"exit", correct:false},
{text:"return", correct:false}
]
},

{
question:"Which keyword skips iteration?",
answers:[
{text:"continue", correct:true},
{text:"skip", correct:false},
{text:"pass", correct:false},
{text:"next", correct:false}
]
},

{
question:"Which loop checks condition after execution?",
answers:[
{text:"do-while", correct:true},
{text:"for", correct:false},
{text:"while", correct:false},
{text:"loop", correct:false}
]
},

{
question:"Which package contains Scanner class?",
answers:[
{text:"java.util", correct:true},
{text:"java.io", correct:false},
{text:"java.lang", correct:false},
{text:"java.net", correct:false}
]
},

{
question:"Which class is parent of all Java classes?",
answers:[
{text:"Object", correct:true},
{text:"Main", correct:false},
{text:"Base", correct:false},
{text:"Parent", correct:false}
]
},

{
question:"Which keyword handles exceptions?",
answers:[
{text:"try", correct:true},
{text:"error", correct:false},
{text:"handle", correct:false},
{text:"check", correct:false}
]
},

{
question:"Which block handles exception?",
answers:[
{text:"catch", correct:true},
{text:"try", correct:false},
{text:"final", correct:false},
{text:"error", correct:false}
]
},

{
question:"Which block always executes?",
answers:[
{text:"finally", correct:true},
{text:"catch", correct:false},
{text:"try", correct:false},
{text:"throw", correct:false}
]
},

{
question:"Which keyword throws exception?",
answers:[
{text:"throw", correct:true},
{text:"error", correct:false},
{text:"raise", correct:false},
{text:"exception", correct:false}
]
},

{
question:"Which keyword declares constant variable?",
answers:[
{text:"final", correct:true},
{text:"const", correct:false},
{text:"fixed", correct:false},
{text:"static", correct:false}
]
},

{
question:"Which Java feature allows multiple forms?",
answers:[
{text:"Polymorphism", correct:true},
{text:"Inheritance", correct:false},
{text:"Encapsulation", correct:false},
{text:"Abstraction", correct:false}
]
},

{
question:"Which keyword is used for abstraction?",
answers:[
{text:"abstract", correct:true},
{text:"hidden", correct:false},
{text:"private", correct:false},
{text:"static", correct:false}
]
},

{
question:"Which keyword imports packages?",
answers:[
{text:"import", correct:true},
{text:"include", correct:false},
{text:"require", correct:false},
{text:"use", correct:false}
]
},

{
question:"Which access modifier is most restrictive?",
answers:[
{text:"private", correct:true},
{text:"public", correct:false},
{text:"protected", correct:false},
{text:"default", correct:false}
]
},

{
question:"Which access modifier is accessible everywhere?",
answers:[
{text:"public", correct:true},
{text:"private", correct:false},
{text:"protected", correct:false},
{text:"default", correct:false}
]
},

{
question:"Which keyword creates interface?",
answers:[
{text:"interface", correct:true},
{text:"abstract", correct:false},
{text:"implements", correct:false},
{text:"extends", correct:false}
]
},

{
question:"Which keyword implements interface?",
answers:[
{text:"implements", correct:true},
{text:"extends", correct:false},
{text:"use", correct:false},
{text:"inherit", correct:false}
]
},

{
question:"Which loop repeats fixed number of times?",
answers:[
{text:"for", correct:true},
{text:"while", correct:false},
{text:"do-while", correct:false},
{text:"loop", correct:false}
]
},

{
question:"Which operator is logical AND?",
answers:[
{text:"&&", correct:true},
{text:"&", correct:false},
{text:"and", correct:false},
{text:"&&&", correct:false}
]
},

{
question:"Which operator is logical OR?",
answers:[
{text:"||", correct:true},
{text:"|", correct:false},
{text:"or", correct:false},
{text:"||=", correct:false}
]
},

{
question:"Which keyword returns value from method?",
answers:[
{text:"return", correct:true},
{text:"give", correct:false},
{text:"send", correct:false},
{text:"output", correct:false}
]
},

{
question:"Which data type stores whole numbers?",
answers:[
{text:"int", correct:true},
{text:"float", correct:false},
{text:"double", correct:false},
{text:"char", correct:false}
]
},

{
question:"Which data type stores decimal numbers?",
answers:[
{text:"float", correct:true},
{text:"int", correct:false},
{text:"char", correct:false},
{text:"boolean", correct:false}
]
},

{
question:"Which data type stores true or false?",
answers:[
{text:"boolean", correct:true},
{text:"bool", correct:false},
{text:"binary", correct:false},
{text:"logic", correct:false}
]
},

{
question:"Which keyword creates thread?",
answers:[
{text:"Thread", correct:true},
{text:"Process", correct:false},
{text:"Task", correct:false},
{text:"Run", correct:false}
]
},

{
question:"Which method starts thread?",
answers:[
{text:"start()", correct:true},
{text:"run()", correct:false},
{text:"execute()", correct:false},
{text:"begin()", correct:false}
]
},

{
question:"Which collection stores unique values?",
answers:[
{text:"Set", correct:true},
{text:"List", correct:false},
{text:"Array", correct:false},
{text:"Vector", correct:false}
]
},

{
question:"Which collection allows duplicates?",
answers:[
{text:"List", correct:true},
{text:"Set", correct:false},
{text:"Map", correct:false},
{text:"HashSet", correct:false}
]
},

{
question:"Which class implements List interface?",
answers:[
{text:"ArrayList", correct:true},
{text:"HashMap", correct:false},
{text:"HashSet", correct:false},
{text:"TreeMap", correct:false}
]
},

{
question:"Which class implements Map interface?",
answers:[
{text:"HashMap", correct:true},
{text:"ArrayList", correct:false},
{text:"Vector", correct:false},
{text:"Stack", correct:false}
]
},

{
question:"Which keyword creates package?",
answers:[
{text:"package", correct:true},
{text:"import", correct:false},
{text:"group", correct:false},
{text:"namespace", correct:false}
]
},

{
question:"Which Java version introduced lambda expressions?",
answers:[
{text:"Java 8", correct:true},
{text:"Java 6", correct:false},
{text:"Java 5", correct:false},
{text:"Java 7", correct:false}
]
},

{
question:"Which operator increments value by 1?",
answers:[
{text:"++", correct:true},
{text:"+=", correct:false},
{text:"--", correct:false},
{text:"+", correct:false}
]
},

{
question:"Which operator decrements value by 1?",
answers:[
{text:"--", correct:true},
{text:"++", correct:false},
{text:"-=", correct:false},
{text:"-", correct:false}
]
},

{
question:"Which keyword defines static method?",
answers:[
{text:"static", correct:true},
{text:"fixed", correct:false},
{text:"global", correct:false},
{text:"shared", correct:false}
]
},

{
question:"Which block defines code group?",
answers:[
{text:"{}", correct:true},
{text:"()", correct:false},
{text:"[]", correct:false},
{text:"<>", correct:false}
]
},

{
question:"Which keyword stops program execution?",
answers:[
{text:"System.exit()", correct:true},
{text:"stop()", correct:false},
{text:"end()", correct:false},
{text:"finish()", correct:false}
]
}

];


// // function getRandomQuestions(bank, count){

// //     const shuffled = [...bank].sort(() => 0.5 - Math.random());

// //     return shuffled.slice(0, count);

// // }

// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");
// const startBtn = document.getElementById("startExam");

// let currentQuestionIndex = 0;
// let score = 0;
// let totalTime = 600;
// let timerInterval;
// let examStarted = false;

// let questions = [];

// function startTimer() {
//     clearInterval(timerInterval);
//     timerInterval = setInterval(function () {
//         let minutes = Math.floor(totalTime / 60);
//         let seconds = totalTime % 60;
//         document.getElementById("timer").innerText =
//             minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
//         totalTime--;
//         if (totalTime <= 0) {
//             clearInterval(timerInterval);
//             alert("Time Up!");
//             showScore();
//         }
//     }, 1000);
// }

// function enterFullScreen() {
//     let elem = document.documentElement;
//     if (elem.requestFullscreen) {
//         elem.requestFullscreen();
//     }
//     else if (elem.webkitRequestFullscreen) {
//         elem.webkitRequestFullscreen();
//     }
//     else if (elem.msRequestFullscreen) {
//         elem.msRequestFullscreen();
//     }
// }

// startBtn.addEventListener("click", function () {
//     let allow = confirm(
//         "Fullscreen mode is required for this exam.\nClick OK to start."
//     );
//     if (!allow) return;
//     enterFullScreen();
//     setTimeout(function () {
//         examStarted = true;
//         startQuiz();
//     }, 300);
// });

// document.addEventListener("fullscreenchange", function () {
//     if (examStarted && !document.fullscreenElement) {
//         alert("You exited fullscreen. Exam ended.");
//         showScore();
//     }
// });

// // let questions1 = [];

// // function getRandomQuestions(bank, count){

// //     const shuffled = [...bank].sort(() => 0.5 - Math.random());

// //     return shuffled.slice(0, count);

// // }

// function getRandomQuestions(bank, count){

//     let shuffled = [...bank];

//     for(let i = shuffled.length - 1; i > 0; i--){

//         const j = Math.floor(Math.random() * (i + 1));

//         [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];

//     }

//     return shuffled.slice(0, count);

// }

// // function startQuiz() {
// //     document.querySelector(".quiz").style.display = "block";
// //     startBtn.style.display = "none";
// //     currentQuestionIndex = 0;
// //     score = 0;
// //     totalTime = 600;
// //     nextButton.innerHTML = "Next";
// //     startTimer();
// //     showQuestion();
// // }


// function startQuiz() {

//     questions = getRandomQuestions(questionBank, 10);

//     document.querySelector(".quiz").style.display = "block";
//     startBtn.style.display = "none";

//     currentQuestionIndex = 0;
//     score = 0;
//     totalTime = 600;

//     nextButton.innerHTML = "Next";

//     startTimer();
//     showQuestion();
// }

// function showQuestion() {
//     currentQuestion.answers.sort(() => Math.random() - 0.5);
//     resetState();
//     // let currentQuestion = questions[currentQuestionIndex];
//     let currentQuestion = questions[currentQuestionIndex];
//     if(!currentQuestion) return;
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML =
//         questionNo + ". " + currentQuestion.question;
//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);
//         if (answer.correct) {
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click", selectAnswer);
//     });
//     if (currentQuestionIndex === questions.length - 1) {
//         nextButton.innerHTML = "Submit";
//     }
//     else {
//         nextButton.innerHTML = "Next";
//     }
// }

// function resetState() {
//     nextButton.style.display = "none";
//     while (answerButtons.firstChild) {
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }

// function selectAnswer(e) {
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
//     if (isCorrect) {
//         selectedBtn.classList.add("correct");
//         score++;
//     }
//     else {
//         selectedBtn.classList.add("incorrect");
//     }
//     Array.from(answerButtons.children).forEach(button => {
//         if (button.dataset.correct === "true") {
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     });
//     nextButton.style.display = "block";
// }

// function showScore(){
//     examStarted = false;
//     clearInterval(timerInterval);
//     resetState();
//     questionElement.innerHTML =
//         `You Scored ${score} out of ${questions.length}!`;
//     nextButton.style.display = "none";
//     setTimeout(function(){
//         window.location.href = "books.php";
//     },1000);
// }

// function handleNextButton() {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         showQuestion();
//     }
//     else {
//         showScore();
//     }
// }



// nextButton.addEventListener("click", () => {
//     if (currentQuestionIndex < questions.length) {
//         handleNextButton();
//     }
//     else {
//         /* RESET EVERYTHING */
//         examStarted = false;
//         clearInterval(timerInterval);

//         currentQuestionIndex = 0;
//         score = 0;
//         totalTime = 600;

//         document.getElementById("timer").innerText = "10:00";

//         /* RESET UI */

//         resetState();

//         questionElement.innerHTML = "Question goes here";

//         document.querySelector(".quiz").style.display = "none";

//         startBtn.style.display = "block";

//     }

// });

// document.addEventListener("visibilitychange", function () {

//     // if (examStarted && document.hidden) {
//     //     alert("Tab switching is not allowed during the exam.");
//     // }
//     if (examStarted && document.hidden) {
//         alert("Tab switching is not allowed. Exam ended.");
//         showScore();
//     }
//     if (examStarted && !document.hidden) {
//         if (!document.fullscreenElement) {
//             enterFullScreen();
//         }
//     }

// });





/* ===================== QUESTION BANK ===================== */

// const questionBank = [
// {
//     question: "Who developed Java programming language?",
//     answers: [
//         { text: "James Gosling", correct: true },
//         { text: "Dennis Ritchie", correct: false },
//         { text: "Bjarne Stroustrup", correct: false },
//         { text: "Guido van Rossum", correct: false }
//     ]
// },
// {
//     question: "Which company originally developed Java?",
//     answers: [
//         { text: "Sun Microsystems", correct: true },
//         { text: "Microsoft", correct: false },
//         { text: "Google", correct: false },
//         { text: "IBM", correct: false }
//     ]
// },
// {
//     question: "Which keyword is used to define a class in Java?",
//     answers: [
//         { text: "class", correct: true },
//         { text: "function", correct: false },
//         { text: "define", correct: false },
//         { text: "struct", correct: false }
//     ]
// },
// {
//     question: "Which method is the entry point of Java program?",
//     answers: [
//         { text: "main()", correct: true },
//         { text: "start()", correct: false },
//         { text: "run()", correct: false },
//         { text: "init()", correct: false }
//     ]
// },
// {
//     question: "Which keyword creates an object?",
//     answers: [
//         { text: "new", correct: true },
//         { text: "create", correct: false },
//         { text: "object", correct: false },
//         { text: "init", correct: false }
//     ]
// }
// ];

/* ===================== VARIABLES ===================== */

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startBtn = document.getElementById("startExam");

let questions = [];
let currentQuestionIndex = 0;
let score = 0;

let totalTime = 600;
let timerInterval;
let examStarted = false;

/* ===================== RANDOM QUESTION FUNCTION ===================== */

// function getRandomQuestions(bank, count) {

//     let shuffled = [...bank];

//     for (let i = shuffled.length - 1; i > 0; i--) {

//         const j = Math.floor(Math.random() * (i + 1));

//         [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//     }

//     return shuffled.slice(0, count);
// }

// function getRandomQuestions(bank, count){

//     let selected = [];
//     let usedIndexes = new Set();

//     while(selected.length < count){

//         let randomIndex = Math.floor(Math.random() * bank.length);

//         if(!usedIndexes.has(randomIndex)){

//             usedIndexes.add(randomIndex);
//             selected.push(bank[randomIndex]);

//         }

//     }

//     return selected;
// }

function getRandomQuestions(bank, count){

    let result = [];
    let used = new Set();

    while(result.length < count){

        let index = Math.floor(Math.random() * bank.length);

        if(!used.has(index)){
            used.add(index);
            result.push(bank[index]);
        }

    }

    return result;
}
/* ===================== TIMER ===================== */

function startTimer() {

    clearInterval(timerInterval);

    timerInterval = setInterval(function () {

        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;

        document.getElementById("timer").innerText =
            minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);

        totalTime--;

        if (totalTime <= 0) {

            clearInterval(timerInterval);

            alert("Time Up!");

            showScore();
        }

    }, 1000);
}

/* ===================== FULLSCREEN ===================== */

function enterFullScreen() {

    let elem = document.documentElement;

    if (elem.requestFullscreen) elem.requestFullscreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
}

/* ===================== START EXAM ===================== */

startBtn.addEventListener("click", function () {

    let allow = confirm("Fullscreen mode is required for this exam.");

    if (!allow) return;

    enterFullScreen();

    setTimeout(function () {

        examStarted = true;

        startQuiz();

    }, 300);
});

/* ===================== FULLSCREEN EXIT DETECTION ===================== */

document.addEventListener("fullscreenchange", function () {

    if (examStarted && !document.fullscreenElement) {

        alert("You exited fullscreen. Exam ended.");

        showScore();
    }
});

/* ===================== START QUIZ ===================== */

function startQuiz() {

    questions = getRandomQuestions(questionBank, 10);

    document.querySelector(".quiz").style.display = "block";

    startBtn.style.display = "none";

    currentQuestionIndex = 0;
    score = 0;

    totalTime = 600;

    nextButton.innerHTML = "Next";

    startTimer();

    showQuestion();
}

/* ===================== SHOW QUESTION ===================== */

function showQuestion() {

    resetState();

    let currentQuestion = questions[currentQuestionIndex];

    if (!currentQuestion) return;

    currentQuestion.answers.sort(() => Math.random() - 0.5);

    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML =
        questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {

        const button = document.createElement("button");

        button.innerHTML = answer.text;

        button.classList.add("btn");

        answerButtons.appendChild(button);

        if (answer.correct) button.dataset.correct = answer.correct;

        button.addEventListener("click", selectAnswer);
    });

    if (currentQuestionIndex === questions.length - 1)
        nextButton.innerHTML = "Submit";
    else
        nextButton.innerHTML = "Next";
}

/* ===================== RESET ===================== */

function resetState() {

    nextButton.style.display = "none";

    while (answerButtons.firstChild) {

        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/* ===================== SELECT ANSWER ===================== */

function selectAnswer(e) {

    const selectedBtn = e.target;

    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {

        selectedBtn.classList.add("correct");

        score++;

    } else {

        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {

        if (button.dataset.correct === "true")
            button.classList.add("correct");

        button.disabled = true;
    });

    nextButton.style.display = "block";
}

/* ===================== SHOW SCORE ===================== */

function showScore() {

    examStarted = false;

    clearInterval(timerInterval);

    resetState();

    questionElement.innerHTML =
        `You Scored ${score} out of ${questions.length}!`;

    nextButton.style.display = "none";

    setTimeout(function () {

        window.location.href = "books.php";

    }, 1000);
}

/* ===================== NEXT BUTTON ===================== */

function handleNextButton() {

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length)

        showQuestion();

    else

        showScore();
}

nextButton.addEventListener("click", () => {

    handleNextButton();
});

/* ===================== TAB SWITCH DETECTION ===================== */

document.addEventListener("visibilitychange", function () {

    if (examStarted && document.hidden) {

        alert("Tab switching is not allowed. Exam ended.");

        showScore();
    }

    if (examStarted && !document.hidden) {

        if (!document.fullscreenElement)

            enterFullScreen();
    }
});