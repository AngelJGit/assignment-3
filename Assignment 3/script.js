const questions = [
    {
        question: "What is my favorite colour?",
        options: ["Red", "Green", "Blue", "yellow"],
        answer: 2
    },
    
    {
        question: "What is my Dogs name?",
        options: ["Benji", "Coco", "Mars", "Mylo"],
        answer: 0
    },
    {
        question: "How old am I?",
        options: ["18", "24", "20", "17"],
        answer: 3
    }
];

let score = 0;

function authenticate() {
    const username = document.getElementById('username').value;
    if (username) {
        document.getElementById('auth').style.display = 'none';
        document.getElementById('quiz').style.display = 'block';
        loadQuestions();
    } else {
        document.getElementById('authMessage').innerText = "Please enter a username.";
    }
}

function loadQuestions() {
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.innerHTML = '';
   
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

        q.options.forEach((option, i) => {
            questionDiv.innerHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${i}"> ${option}
                </label><br>`;
        });
        questionContainer.appendChild(questionDiv);
    });
}

function submitAnswers() {
    score = 0;
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = '';
   
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            const answer = parseInt(selectedOption.value);
            if (answer === q.answer) {
                score++;
                feedback.innerHTML += `<div class="correct"> Question ${index + 1}: Correct! </div>`;
            } else {
                feedback.innerHTML += `<div class="incorrect"> Question ${index + 1}: Incorrect. The correct answer is ${q.options[q.answer]}. </div>`;
            }
        } else {
            feedback.innerHTML += `<div class="incorrect"> Question ${index + 1}: No answer selected.</div>`;
        }
    });
   
    document.getElementById('score').innerText = score;
    document.getElementById('scoreContainer').style.display = 'block';
}