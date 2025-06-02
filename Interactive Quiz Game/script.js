const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Rome', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Jupiter', correct: false },
            { text: 'Saturn', correct: false }
        ]
    },
    {
        question: 'What is the largest ocean on Earth?',
        answers: [
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Indian Ocean', correct: false },
            { text: 'Arctic Ocean', correct: false },
            { text: 'Pacific Ocean', correct: true }
        ]
    }
];
let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score-container').innerText = '';
    document.getElementById('next-button').classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    document.getElementById('question-container').innerText = question.question;
    const answerButtons = document.getElementById('answer-buttons');
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const feedback = document.createElement('div');
    feedback.innerText = answer.correct ? 'Correct!' : 'Wrong!';
    feedback.classList.add(answer.correct ? 'correct' : 'wrong');
    document.getElementById('score-container').innerText = '';
    document.getElementById('score-container').appendChild(feedback);
    
    if (answer.correct) {
        score++;
    }
    document.getElementById('next-button').classList.remove('hide');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        document.getElementById('next-button').classList.add('hide');
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById('question-container').innerText = `You scored ${score} out of ${questions.length}`;
    document.getElementById('answer-buttons').innerHTML = '';
    document.getElementById('next-button').classList.add('hide');
}

startGame();
