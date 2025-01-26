// Function to check the user's answer
function checkAnswer() {
    // Step 1: Store the correct answer
    const correctAnswer = "4";

    // Step 2: Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Step 3: Get the feedback element
    const feedback = document.getElementById("feedback");

    // Step 4: Check if an answer is selected
    if (!userAnswer) {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "red";
        return; // Exit the function if no answer is selected
    }

    // Step 5: Compare the user's answer with the correct answer
    if (userAnswer.value === correctAnswer) {
        // Step 6: Provide feedback for the correct answer
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        // Step 7: Provide feedback for the incorrect answer
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Step 8: Add an event listener to the "Submit Answer" button
document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit-answer");
    
    // Step 9: Ensure the button is retrieved successfully
    if (submitButton) {
        submitButton.addEventListener("click", checkAnswer);
    } else {
        console.error("Submit button not found.");
    }
});
