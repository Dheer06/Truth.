document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const message = document.getElementById('message');
    const container = document.querySelector('.container'); // Reference to the container with the question

    // Function to move the 'No' button to a random position
    function moveNoButton() {
        const x = Math.random() * (window.innerWidth - noButton.clientWidth);
        const y = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }

    // When the 'No' button is clicked
    noButton.addEventListener('click', moveNoButton);

    // When the 'Yes' button is clicked
    yesButton.addEventListener('click', () => {
        container.style.display = 'none'; // Hide the question and buttons
        message.classList.remove('hidden'); // Show the message
    });
}); 