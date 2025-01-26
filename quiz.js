// Step 1: Define the checkAnswer function
function checkAnswer() {
    // Step 2: Store the correct answer
    const correctAnswer = "4";

    // Step 3: Retrieve the user's selected answer
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');

    // Step 4: Retrieve the feedback element
    const feedback = document.getElementById("feedback");

    // Step 5: Validate if an answer is selected
    if (!userAnswerElement) {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "red";
        return; // Exit if no answer is selected
    }

    // Step 6: Get the user's answer
    const userAnswer = userAnswerElement.value;

    // Step 7: Compare user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        // Correct answer feedback
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        // Incorrect answer feedback
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Step 8: Add an event listener to the "Submit Answer" button
document.addEventListener("DOMContentLoaded", function () {
    // Step 9: Retrieve the "Submit Answer" button
    const submitButton = document.getElementById("submit-answer");

    // Step 10: Ensure the button is found before adding the listener
    if (submitButton) {
        submitButton.addEventListener("click", checkAnswer);
    } else {
        console.error("Submit button not found.");
    }
});
