let cards =[
    {
        question: "What is the capital of France?",
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        answer: "Jupiter"
    },
    {
        question: "What is the chemical symbol for gold?",
        answer: "Au"
    }
];

let currentCardIndex = 0;
let editMode = false;

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const cardNumber = document.getElementById("cardNumber");

const showAnswer = document.getElementById("showAnswer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const addBtn = document.getElementById("addBtn");
const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn");

const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");

function displayCard() {

    if (cards.length === 0) {
        question.textContent = "No flashcard available.";
        answer.textContent = "";
        cardNumber.textContent = "0 / 0";
        return;
    }

    question.textContent = cards[currentCardIndex].question;
    answer.textContent = cards[currentCardIndex].answer;

    answer.style.display = "none";
    showAnswer.textContent = "Show Answer";

    cardNumber.textContent = `${currentCardIndex + 1} / ${cards.length}`;
}


showAnswer.addEventListener("click", function() {
    if (answer.style.display === "none") {
        answer.style.display = "block";
        showAnswer.textContent = "Hide Answer";
    } else {
        answer.style.display = "none";
        showAnswer.textContent = "Show Answer";
    }
});

prevBtn.addEventListener("click", function() {

    if (cards.length === 0) return;
    currentCardIndex--;
    if (currentCardIndex < 0) {
        currentCardIndex = cards.length - 1;
    }
    displayCard();
});

nextBtn.addEventListener("click", function() {
    if (cards.length === 0) return;
    currentCardIndex++;
    if (currentCardIndex >= cards.length) {
        currentCardIndex = 0;
    }
    displayCard();
});

prevBtn.addEventListener("click", function() {
    if (cards.length === 0) return;
    currentCardIndex--;
    if (currentCardIndex < 0) {
        currentCardIndex = cards.length - 1;
    }
    displayCard();
});

addBtn.addEventListener("click", function() {
    editMode = false;
    fromTitle.textContent = "Add Flashcard";
    questionInput.value = "";
    answerInput.value = "";
    fromBox.style.display = "block";
});

editBtn.addEventListener("click", function() {
    if (cards.length === 0) return;
    editMode = true;

    questionInput.value = cards[currentCardIndex].question;
    answerInput.value = cards[currentCardIndex].answer;
    fromTitle.textContent = "Edit Flashcard";
    fromBox.style.display = "block";
});

saveBtn.addEventListener("click", function() {
    let newQuestion = questionInput.value.trim();
    let newAnswer = answerInput.value.trim();

    if (newQuestion === "" || newAnswer === "") {
        alert("Please fill in both question and answer.");
        return;
    }

    if (editMode) {
        cards[currentCardIndex].question = newQuestion;
        cards[currentCardIndex].answer = newAnswer;
    } else {
        cards.push({ question: newQuestion, answer: newAnswer });
    }

    fromBox.style.display = "none";
    displayCard();
});

cancelBtn.addEventListener("click", function() {
    fromBox.style.display = "none";
});

deleteBtn.addEventListener("click", function() {
    if (cards.length === 0) return;

    let confirmDelete = confirm("Are you sure you want to delete this flashcard?");

    if (confirmDelete) {
        cards.splice(currentCardIndex, 1);
        if (currentCardIndex >= cards.length) {
            currentCardIndex = cards.length - 1;
        }
        fromBox.style.display = "none";
        displayCard();
    }
});

displayCard();