// Clock Update Function
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    // Format time to have two digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var currentTime = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').textContent = currentTime;
}

// Initialize and Update the Clock Every Second
function initializeClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

// Theme Toggle Function
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
}

// Progress Bar Function
function handleProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const contentContainer = document.getElementById('content-container');

    let progress = 0;
    const interval = setInterval(() => {
        progress++;
        progressBar.style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            document.getElementById('progress-container').style.display = 'none';
            contentContainer.classList.remove('hidden');
        }
    }, 20);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeClock();
    setupThemeToggle();
    handleProgressBar();
});