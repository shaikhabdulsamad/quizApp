
var questions = [
{
	question: "Which of following is not a web browser?",
	options: ['Firefox', 'Chrome', 'Linux', 'Edge'],
	correctAnswer: "Linux"
},
{
    question: "What does CPU stand for?",
    options: ["Central Process Unit", "Computer Personal Unit", "Central Processing Unit", "Central Program Unit"],
    correctAnswer: "Central Processing Unit"
  },
  {
    question: "Which of the following is an input device?",
    options: ["Monitor", "Keyboard", "Printer", "Speaker"],
    correctAnswer: "Keyboard"
  },
  {
    question: "What does RAM stand for?",
    options: ["Random Access Memory", "Read-Only Memory", "Redundant Array of Memory", "Remote Access Module"],
    correctAnswer: "Random Access Memory"
  },
  {
    question: "What is the primary function of an operating system?",
    options: ["Run applications", "Manage hardware resources", "Play games", "Browse the internet"],
    correctAnswer: "Manage hardware resources"
  },
  {
    question: "Which computer component is responsible for storing data long-term?",
    options: ["RAM", "CPU", "Hard Drive", "Monitor"],
    correctAnswer: "Hard Drive"
  },
  {
    question: "What is the binary system?",
    options: ["Base-8 system", "Base-10 system", "Base-2 system", "Base-16 system"],
    correctAnswer: "Base-2 system"
  },
  {
    question: "What is the function of a GPU in a computer?",
    options: ["Central Processing", "Graphics Rendering", "Storage", "Memory Management"],
    correctAnswer: "Graphics Rendering"
  },
  {
    question: "Which of the following is an example of an operating system?",
    options: ["Microsoft Office", "Windows", "Photoshop", "Google Chrome"],
    correctAnswer: "Windows"
  },
  {
    question: "What is a firewall used for in computer security?",
    options: ["Preventing software updates", "Protecting against viruses", "Blocking internet access", "Filtering network traffic"],
    correctAnswer: "Filtering network traffic"
  },
  {
    question: "Which storage device has no moving parts and is known for its speed?",
    options: ["Hard Disk Drive (HDD)", "Solid State Drive (SSD)", "CD-ROM Drive", "Floppy Disk Drive"],
    correctAnswer: "Solid State Drive (SSD)"
  },
  {
    question: "What does URL stand for?",
    options: ["Uniform Resource Locator", "Universal Reference Link", "Uniform Retrieval Link", "Universal Resource Link"],
    correctAnswer: "Uniform Resource Locator"
  },
  {
    question: "Which of the following is not a web browser?",
    options: ["Chrome", "Firefox", "Excel", "Safari"],
    correctAnswer: "Excel"
  },
  {
    question: "Which programming language is often used for web development?",
    options: ["C", "Java", "HTML", "Swift"],
    correctAnswer: "HTML"
  },
  {
    question: "What does HTML stand for?",
    options: ["Hypertext Markup Language", "Hyperlink and Text Management Language", "High-Level Text Manipulation Language", "Hypertext Transfer Language"],
    correctAnswer: "Hypertext Markup Language"
  },
  {
    question: "Which of the following is an example of a spreadsheet software?",
    options: ["Word", "PowerPoint", "Excel", "Photoshop"],
    correctAnswer: "Excel"
  },
  {
    question: "What is the function of an ISP?",
    options: ["International Software Provider", "Internet Service Provider", "Internet Security Protocol", "Internal System Processor"],
    correctAnswer: "Internet Service Provider"
  },
  {
    question: "Which key combination is commonly used to copy selected text?",
    options: ["Ctrl+C", "Ctrl+X", "Ctrl+V", "Ctrl+Z"],
    correctAnswer: "Ctrl+C"
  },
  {
    question: "What does BIOS stand for in computing?",
    options: ["Basic Input Output System", "Binary Input Output System", "Broadband Internet Operating System", "Basic Internal Operating System"],
    correctAnswer: "Basic Input Output System"
  },
  {
    question: "Which of the following is a commonly used programming paradigm?",
    options: ["Object-Oriented", "Spaghetti", "Hierarchical", "Bipolar"],
    correctAnswer: "Object-Oriented"
  }
]



var startSection = document.getElementById('start-section');
var quizSection = document.getElementById('quiz-section');
var resultSection = document.getElementById('result-section');
var userName = document.getElementById('user-name');
var nameText = document.getElementById('name-text');
var questionText = document.getElementById('question-text');
var choicesContainer = document.getElementById('choices-container');
var resultText = document.getElementById('result-text');
var resultUser = document.getElementById('result-user');
var nextBtn = document.getElementById('next-btn');
var backBtn = document.getElementById('back-btn');
var skipBtn = document.getElementById('skip-btn');
var timerText = document.getElementById('timer-text');
var qcounter = document.getElementById('qcounter');
var currentIndex = 0;
var score = 0;
var questionCounter = 1;
var timer = 59;


function timeCounter(){

setInterval(function(){
	
			timerText.textContent =  (timer < 10)? "0"+timer : timer;
			if(timer >=  0){
			 	timer--
			 }
		else{
			showResult()
		}
	}, 1000)
}


function start(){
	timeCounter()

	if(userName.value == ''){
		nameText.textContent = 'Welcome!'
	}
	else{
		nameText.textContent = `Welcome ${userName.value.toUpperCase()}!`
	}
	
	startSection.style.display = 'none';
	quizSection.style.display = 'block';

}



function quizLoad(){
	
qcounter.textContent = `Question No. ${questionCounter++} / ${questions.length}`

var currentQues = questions[currentIndex];

questionText.textContent = currentQues.question;

choicesContainer.innerHTML = '';

currentQues.options.forEach(function(choice){

var choiceBtn = document.createElement('button');
choiceBtn.classList.add("answer-key");
choiceBtn.textContent = choice;
choiceBtn.addEventListener('click', function(){
	checkAnswer(choice);
})


choicesContainer.appendChild(choiceBtn);


})

}



function checkAnswer(a){

var currentQues = questions[currentIndex];

if(a === currentQues.correctAnswer){
	score++;
}
currentIndex++;

if(currentIndex < questions.length){
	quizLoad();

}
else{
	showResult();
}
}


function showResult(){

quizSection.style.display = 'none';
startSection.style.display = 'none';
resultSection.style.display = 'block';

	resultText.textContent = `Your score is ${score} out of ${questions.length}!`;
	nextBtn.style.display = 'none';
	skipBtn.style.display = 'none';
	backBtn.style.display = 'block';
	qcounter.parentElement.style.display = 'none';


	if(userName.value == ''){
		resultUser.textContent = 'Thanks!'
	}
	else{
		resultUser.textContent = `Thanks ${userName.value.toUpperCase()}!`
	}
}

quizLoad();


nextBtn.addEventListener('click', checkAnswer);

backBtn.addEventListener('click', function(){
location.reload();
// quizSection.style.display = 'none';
// resultSection.style.display = 'none';
// startSection.style.display = 'block';

})

skipBtn.addEventListener('click', function(){
	location.reload();
})

// playBtn.addEventListener('click', function(){
// 	startSection.style.display = 'none';
// resultSection.style.display = 'none';
// quizSection.style.display = 'block';

// })

quizSection.style.display = 'none';
resultSection.style.display = 'none';

