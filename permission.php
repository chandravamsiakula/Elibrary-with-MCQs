<!DOCTYPE html>
<html>
<head>
<title>Quiz Permission</title>

<style>
body{
    font-family: Arial;
    text-align:center;
    margin-top:100px;
}

button{
    padding:10px 20px;
    font-size:16px;
    margin:15px;
}

#startBtn{
    display:none;
}
</style>

</head>

<body>

<h2>Camera & Microphone Permission Required</h2>

<p>This quiz requires camera and microphone access.</p>

<button onclick="requestPermission()">Enable Camera & Mic</button>

<br>

<button id="startBtn" onclick="startQuiz()">Start Quiz</button>

<script>

const params = new URLSearchParams(window.location.search);
const quizPage = params.get("quiz");

async function requestPermission(){
    try{

        await navigator.mediaDevices.getUserMedia({
            video:true,
            audio:true
        });

        alert("Permission Granted");

        document.getElementById("startBtn").style.display="inline-block";

    }catch(err){
        alert("Permission Denied. Please allow access.");
    }
}

function startQuiz(){
    document.documentElement.requestFullscreen();

    if(quizPage){
        window.location.href = quizPage;
    }

}

</script>

</body>
</html>