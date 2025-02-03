
function checkAnswer(button, userAnswer) {
    const questionElement = button.closest('.question');
    const correctAnswer = questionElement.getAttribute('data-answer');
    const resultElement = questionElement.querySelector('.result');
    const buttons = questionElement.querySelectorAll('button');

    // Remove previous highlights
    buttons.forEach(btn => btn.classList.remove('highlighted'));

    // Highlight the clicked button
    button.classList.add('highlighted');

    if (userAnswer === correctAnswer) {
        resultElement.textContent = 'Correct!';
        resultElement.className = 'result correct';
    } else {
        resultElement.textContent = 'Incorrect!';
        resultElement.className = 'result incorrect';
    }
}