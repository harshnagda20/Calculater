// Get the input box and all the buttons
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

// Initialize the string variable to hold the calculator input
let string = "0";

// Add event listeners to all the buttons
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            // Evaluate the string and update the input box
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML === 'AC') {
            // Clear the string and update the input box
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === 'DEL') {
            // Remove the last character from the string and update the input box
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            // Add the button's text to the string and update the input box
            if (string === "0") {
                string = e.target.innerHTML;
            } else {
                string += e.target.innerHTML;
            }
            input.value = string;
        }
    });
});

