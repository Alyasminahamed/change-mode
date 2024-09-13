// Elements
const lightModeButton = document.getElementById('light-mode-button');
const darkModeButton = document.getElementById('dark-mode-button');

// Function to set light mode
function setLightMode() {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
}

// Function to set dark mode
function setDarkMode() {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
}

// Event listeners
lightModeButton.addEventListener('click', setLightMode);
darkModeButton.addEventListener('click', setDarkMode);