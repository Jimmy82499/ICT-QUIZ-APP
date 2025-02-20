const QUESTIONS_PER_ROUND = 10;
const TIME_LIMIT = 30;
const MAX_ROUNDS = 3;

const questions = {
    4: [
        { question: "What does ICT stand for?", options: ["Information and Communication Technology", "International Computer Technology", "Integrated Computer Tools", "Internet and Communication Technology"], correct: 0 },
        { question: "Which of the following is a programming language?", options: ["Python", "HTML", "CSS", "XML"], correct: 0 },
        { question: "What is the main purpose of a firewall?", options: ["To block unauthorized access", "To increase internet speed", "To store data", "To create websites"], correct: 0 },
        { question: "Which protocol is used to send emails?", options: ["SMTP", "HTTP", "FTP", "TCP"], correct: 0 },
        { question: "What is the time complexity of binary search?", options: ["O(log n)", "O(n)", "O(n^2)", "O(1)"], correct: 0 },
        { question: "Which of the following is a NoSQL database?", options: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"], correct: 0 },
        { question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Processing Unit", "Central Process Unit", "Computer Process Unit"], correct: 0 },
        { question: "What is the main function of RAM?", options: ["Temporary storage for data", "Permanent storage for data", "Processing data", "Displaying data"], correct: 0 },
        { question: "Which of the following is an operating system?", options: ["Windows", "Microsoft Word", "Google Chrome", "Adobe Photoshop"], correct: 0 },
        { question: "What does HTTP stand for?", options: ["HyperText Transfer Protocol", "High-Level Text Protocol", "HyperText Transmission Protocol", "High-Level Transfer Protocol"], correct: 0 },
        { question: "What is the primary function of a web browser?", options: ["To display web pages", "To create websites", "To store data", "To send emails"], correct: 0 },
        { question: "Which of the following is a markup language?", options: ["HTML", "Python", "Java", "C++"], correct: 0 },
        { question: "What is the purpose of a compiler?", options: ["To convert high-level code to machine code", "To execute code line by line", "To debug code", "To design user interfaces"], correct: 0 },
        { question: "Which of the following is a type of computer memory?", options: ["RAM", "CPU", "GPU", "HDD"], correct: 0 },
        { question: "What is the function of an operating system?", options: ["To manage hardware and software resources", "To create documents", "To browse the internet", "To design graphics"], correct: 0 },
        { question: "What is the purpose of a router?", options: ["To connect multiple networks", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a type of software?", options: ["Operating System", "Hard Drive", "Motherboard", "Power Supply"], correct: 0 },
        { question: "What is the purpose of a cache?", options: ["To store frequently accessed data", "To increase internet speed", "To store data permanently", "To create websites"], correct: 0 },
        { question: "Which of the following is a type of network topology?", options: ["Star", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a proxy server?", options: ["To act as an intermediary for requests", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a type of computer virus?", options: ["Trojan", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a backup?", options: ["To restore data in case of loss", "To increase internet speed", "To store data", "To create websites"], correct: 0 },
        { question: "Which of the following is a type of computer network?", options: ["LAN", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a modem?", options: ["To convert digital signals to analog", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a type of computer storage?", options: ["SSD", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a GPU?", options: ["To render graphics", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a type of computer port?", options: ["USB", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a BIOS?", options: ["To initialize hardware during boot", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a type of computer input device?", options: ["Keyboard", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a UPS?", options: ["To provide backup power", "To store data", "To create websites", "To send emails"], correct: 0 }
    ],
    5: [
        { question: "What is a primary key in a database?", options: ["A unique identifier for a record", "A type of database", "A programming language", "A network protocol"], correct: 0 },
        { question: "Which of the following is a version control system?", options: ["Git", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"], correct: 0 },
        { question: "Which of the following is a JavaScript framework?", options: ["React", "HTML", "CSS", "SQL"], correct: 0 },
        { question: "What is the purpose of an IP address?", options: ["To identify devices on a network", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a cloud computing platform?", options: ["AWS", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "System Query Language"], correct: 0 },
        { question: "Which of the following is a front-end development language?", options: ["JavaScript", "SQL", "Python", "Java"], correct: 0 },
        { question: "What is the purpose of a DNS server?", options: ["To translate domain names to IP addresses", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a type of malware?", options: ["Virus", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a VPN?", options: ["To create a secure connection", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a type of cyber attack?", options: ["Phishing", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a load balancer?", options: ["To distribute network traffic", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a database management system?", options: ["MySQL", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a firewall?", options: ["To block unauthorized access", "To increase internet speed", "To store data", "To create websites"], correct: 0 },
        { question: "Which of the following is a type of network?", options: ["LAN", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a DNS server?", options: ["To translate domain names to IP addresses", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a type of malware?", options: ["Virus", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a VPN?", options: ["To create a secure connection", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a type of cyber attack?", options: ["Phishing", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a load balancer?", options: ["To distribute network traffic", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a database management system?", options: ["MySQL", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a firewall?", options: ["To block unauthorized access", "To increase internet speed", "To store data", "To create websites"], correct: 0 },
        { question: "Which of the following is a type of network?", options: ["LAN", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a DNS server?", options: ["To translate domain names to IP addresses", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a type of malware?", options: ["Virus", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a VPN?", options: ["To create a secure connection", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a type of cyber attack?", options: ["Phishing", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a load balancer?", options: ["To distribute network traffic", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a database management system?", options: ["MySQL", "HTML", "CSS", "Python"], correct: 0 }
    ],
    6: [
        { question: "What is the purpose of a load balancer?", options: ["To distribute network traffic", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a type of cyber attack?", options: ["Phishing", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What does API stand for?", options: ["Application Programming Interface", "Advanced Programming Interface", "Application Process Interface", "Advanced Process Interface"], correct: 0 },
        { question: "Which of the following is a database management system?", options: ["MySQL", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a VPN?", options: ["To create a secure connection", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a programming paradigm?", options: ["Object-Oriented Programming", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What does HTTP stand for?", options: ["HyperText Transfer Protocol", "High-Level Text Protocol", "HyperText Transmission Protocol", "High-Level Transfer Protocol"], correct: 0 },
        { question: "Which of the following is a type of database?", options: ["Relational Database", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a firewall?", options: ["To block unauthorized access", "To increase internet speed", "To store data", "To create websites"], correct: 0 },
        { question: "Which of the following is a type of network?", options: ["LAN", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a DNS server?", options: ["To translate domain names to IP addresses", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a type of malware?", options: ["Virus", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a VPN?", options: ["To create a secure connection", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a type of cyber attack?", options: ["Phishing", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a load balancer?", options: ["To distribute network traffic", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a database management system?", options: ["MySQL", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a firewall?", options: ["To block unauthorized access", "To increase internet speed", "To store data", "To create websites"], correct: 0 },
        { question: "Which of the following is a type of network?", options: ["LAN", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a DNS server?", options: ["To translate domain names to IP addresses", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a type of malware?", options: ["Virus", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a VPN?", options: ["To create a secure connection", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a type of cyber attack?", options: ["Phishing", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a load balancer?", options: ["To distribute network traffic", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a database management system?", options: ["MySQL", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a firewall?", options: ["To block unauthorized access", "To increase internet speed", "To store data", "To create websites"], correct: 0 },
        { question: "Which of the following is a type of network?", options: ["LAN", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a DNS server?", options: ["To translate domain names to IP addresses", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a type of malware?", options: ["Virus", "HTML", "CSS", "Python"], correct: 0 },
        { question: "What is the purpose of a VPN?", options: ["To create a secure connection", "To store data", "To create websites", "To send emails"], correct: 0 },
        { question: "Which of the following is a type of cyber attack?", options: ["Phishing", "HTML", "CSS", "Python"], correct: 0 }
    ]
};

let currentLevel = 4;
let currentRound = 1;
let currentQuestionIndex = 0;
let usedQuestions = new Set();
let score = 0;
let questionSet = [];
let userAnswers = [];
let timeLeft = TIME_LIMIT;
let timerInterval;

function startQuiz() {
    currentLevel = parseInt(document.getElementById('level').value);
    if (questions[currentLevel].length < QUESTIONS_PER_ROUND * MAX_ROUNDS) {
        alert("Not enough questions for this level. Please choose another level.");
        return;
    }
    currentRound = 1;
    score = 0;
    userAnswers = [];
    usedQuestions.clear();
    document.getElementById('quizForm').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.getElementById('roundEnd').style.display = 'none';
    nextRound();
}

function nextRound() {
    if (currentRound > MAX_ROUNDS) {
        showResult();
        return;
    }
    let availableQuestions = questions[currentLevel].filter(q => !usedQuestions.has(q.question));
    if (availableQuestions.length < QUESTIONS_PER_ROUND) {
        alert("Not enough unique questions left for this level. Resetting used questions.");
        usedQuestions.clear();
        availableQuestions = questions[currentLevel];
    }
    questionSet = availableQuestions.sort(() => Math.random() - 0.5).slice(0, QUESTIONS_PER_ROUND);
    questionSet.forEach(q => usedQuestions.add(q.question));
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < questionSet.length) {
        resetTimer();
        const question = questionSet[currentQuestionIndex];
        document.getElementById('question').innerText = question.question;

        // Shuffle the options and get the new correct index
        const shuffledOptions = shuffleOptions(question.options, question.correct);
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = ''; // Clear previous options

        // Update the correct index in the question object
        questionSet[currentQuestionIndex].correct = shuffledOptions.correctIndex;

        // Display the shuffled options
        shuffledOptions.options.forEach((option, index) => {
            const optionCard = document.createElement('div');
            optionCard.className = 'option-card';
            optionCard.innerText = option;
            optionCard.addEventListener('click', () => selectAnswer(index));
            optionsContainer.appendChild(optionCard);
        });

        updateProgressBar();
    } else {
        endRound();
    }
}

function shuffleOptions(options, correctIndex) {
    // Create an array of objects to track the original index of each option
    const optionsWithIndex = options.map((option, index) => ({ option, originalIndex: index }));

    // Shuffle the options
    for (let i = optionsWithIndex.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsWithIndex[i], optionsWithIndex[j]] = [optionsWithIndex[j], optionsWithIndex[i]];
    }

    // Find the new index of the correct answer after shuffling
    const newCorrectIndex = optionsWithIndex.findIndex(item => item.originalIndex === correctIndex);

    // Extract the shuffled options
    const shuffledOptions = optionsWithIndex.map(item => item.option);

    return { options: shuffledOptions, correctIndex: newCorrectIndex };
}

function selectAnswer(selectedIndex) {
    const correctIndex = questionSet[currentQuestionIndex].correct;
    console.log("Selected Index:", selectedIndex);
    console.log("Correct Index:", correctIndex);

    const feedbackElement = document.getElementById('feedback');
    const optionsContainer = document.getElementById('optionsContainer');

    // Highlight correct and incorrect answers
    optionsContainer.childNodes.forEach((card, index) => {
        if (index === correctIndex) {
            card.classList.add('correct');
        } else if (index === selectedIndex) {
            card.classList.add('incorrect');
        }
    });

    if (selectedIndex === correctIndex) {
        feedbackElement.innerText = "Correct!";
        feedbackElement.style.color = "green";
        score++;
    } else {
        feedbackElement.innerText = "Incorrect!";
        feedbackElement.style.color = "red";
    }

    feedbackElement.classList.add('show');
    userAnswers.push({ question: questionSet[currentQuestionIndex].question, selected: selectedIndex, correct: correctIndex });
    currentQuestionIndex++;
    setTimeout(() => {
        feedbackElement.classList.remove('show');
        feedbackElement.innerText = "";
        showQuestion();
    }, 1000);
}

function skipQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function endRound() {
    clearInterval(timerInterval);
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('roundEnd').style.display = 'block';
    document.getElementById('currentRoundDisplay').innerText = currentRound;
    document.getElementById('currentScore').innerText = score;
    document.getElementById('totalQuestions').innerText = currentRound * QUESTIONS_PER_ROUND;

    // Trigger celebration if the user scores 8 or higher in this round
    if (score >= 8) {
        triggerCelebration();
    }
}

function continueQuiz() {
    if (currentRound < MAX_ROUNDS) {
        currentRound++;
        nextRound();
        document.getElementById('quizContainer').style.display = 'block';
        document.getElementById('roundEnd').style.display = 'none';
    } else {
        showResult();
    }
}

function cancelQuiz() {
    showResult();
}

function showResult() {
    let rating = Math.floor(score / 3);
    document.getElementById('finalScore').innerText = score;
    document.getElementById('rating').innerText = rating;
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('roundEnd').style.display = 'none';
    document.getElementById('result').style.display = 'block';

    const correctionList = document.getElementById('correctionList');
    correctionList.innerHTML = '';
    userAnswers.forEach((answer, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Question ${index + 1}:</strong> ${answer.question}<br>
            <span class="correct-answer">Correct Answer: ${questions[currentLevel][index].options[answer.correct]}</span><br>
            <span class="${answer.selected === answer.correct ? 'correct-answer' : 'incorrect-answer'}">Your Answer: ${questions[currentLevel][index].options[answer.selected]}</span>
        `;
        correctionList.appendChild(li);
    });

    const suggestionText = document.getElementById('suggestionText');
    if (rating >= 8) {
        suggestionText.innerText = "Great job! You have a strong understanding of ICT concepts. Keep exploring advanced topics!";
        triggerCelebration();
    } else if (rating >= 5) {
        suggestionText.innerText = "Good effort! Focus on areas like networking, programming, and cybersecurity to improve.";
        triggerSmallCelebration();
    } else {
        suggestionText.innerText = "You have room for improvement. Review basic ICT concepts and practice more quizzes.";
    }
}

function triggerCelebration() {
    const celebrationDiv = document.getElementById('celebration');
    celebrationDiv.innerHTML = ''; // Clear previous particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random()}s`;
        celebrationDiv.appendChild(particle);
    }
    setTimeout(() => celebrationDiv.innerHTML = '', 1000);
}

function triggerSmallCelebration() {
    const celebrationDiv = document.getElementById('celebration');
    celebrationDiv.innerHTML = ''; // Clear previous particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random()}s`;
        celebrationDiv.appendChild(particle);
    }
    setTimeout(() => celebrationDiv.innerHTML = '', 1000);
}

function goHome() {
    document.getElementById('quizForm').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    score = 0;
    currentQuestionIndex = 0;
    usedQuestions.clear();
}

function chooseAnotherLevel() {
    goHome();
}

function restartQuiz() {
    startQuiz();
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / QUESTIONS_PER_ROUND) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

function startTimer() {
    timeLeft = TIME_LIMIT;
    document.getElementById("timer").innerText = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            skipQuestion();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = TIME_LIMIT;
    document.getElementById("timer").innerText = timeLeft;
    startTimer();
}

// Event Listeners
document.getElementById('startQuizButton').addEventListener('click', startQuiz);
document.getElementById('skipQuestionButton').addEventListener('click', skipQuestion);
document.getElementById('continueQuizButton').addEventListener('click', continueQuiz);
document.getElementById('cancelQuizButton').addEventListener('click', cancelQuiz);
document.getElementById('goHomeButton').addEventListener('click', goHome);
document.getElementById('chooseAnotherLevelButton').addEventListener('click', chooseAnotherLevel);
document.getElementById('restartQuizButton').addEventListener('click', restartQuiz);