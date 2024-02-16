document.addEventListener("DOMContentLoaded", function() {
    const cityElement = document.getElementById('city');
    const timeOfDayElement = document.getElementById('timeOfDay');

    // Fetch visitor's location using IPinfo API
    fetch('https://ipinfo.io/json?token=YOUR_TOKEN_HERE')
        .then(response => response.json())
        .then(data => {
            const city = data.city || 'Friend';
            const timeOfDay = getTimeOfDay();

            // Animate typing effect for city name
            animateTyping(cityElement, city);

            // Update time of day message
            timeOfDayElement.textContent = `Good ${timeOfDay}.`;
        })
        .catch(error => {
            console.error('Error fetching IP information:', error);
        });
});

function animateTyping(element, text) {
    const speed = 100; // Typing speed in milliseconds
    let index = 0;

    function typeNextLetter() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeNextLetter, speed);
        }
    }

    typeNextLetter();
}

function getTimeOfDay() {
    const hour = new Date().getHours();
    if (hour < 12) {
        return 'morning';
    } else if (hour < 18) {
        return 'afternoon';
    } else {
        return 'evening';
    }
}
