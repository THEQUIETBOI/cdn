// JavaScript code to create a button menu with a "Run Bookmarklet" button

function createButtonMenu() {
    // Create a container div
    var container = document.createElement('div');
    container.style.textAlign = 'center';

    // Create and append heading
    var heading = document.createElement('h1');
    heading.textContent = 'Button Menu with Bookmarklet';
    container.appendChild(heading);

    // Create and append buttons
    ['Button 1', 'Button 2', 'Button 3', 'Run Bookmarklet'].forEach(function (text) {
        var button = document.createElement('button');
        button.className = 'button';
        button.textContent = text;
        button.addEventListener('click', function () {
            handleButtonClick(text);
        });
        container.appendChild(button);
    });

    // Append the container to the body
    document.body.appendChild(container);

    // Function to handle button click
    function handleButtonClick(buttonText) {
        alert('Clicked: ' + buttonText);
        if (buttonText === 'Run Bookmarklet') {
            runBookmarklet();
        }
    }

    // Function to run the bookmarklet
    function runBookmarklet() {
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/eruda';
        document.body.appendChild(script);
        script.onload = function () {
            eruda.init();
        };
    }
}

// Call the function to create the button menu
createButtonMenu();
