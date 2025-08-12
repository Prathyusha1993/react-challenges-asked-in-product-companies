document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.getElementById('counter-display');
    const decrementBtn = document.getElementById('decrement-btn');
    const incrementBtn = document.getElementById('increment-btn');

    let count = 0; // Initialize the counter value

    // Function to update the display
    function updateCounterDisplay() {
        counterDisplay.textContent = count;
    }

    // Event listener for decrement button
    decrementBtn.addEventListener('click', () => {
        count--;
        updateCounterDisplay();
    });

    // Event listener for increment button
    incrementBtn.addEventListener('click', () => {
        count++;
        updateCounterDisplay();
    });

    // Initial display update
    updateCounterDisplay();
});