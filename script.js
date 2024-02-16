document.addEventListener("DOMContentLoaded", function() {
    // Fetch visitor's location using IPinfo API
    fetch('https://ipinfo.io/json?token=ae91acbcf2d589')
        .then(response => response.json())
        .then(data => {
            const city = data.city || 'Friend';
            const timeOfDay = getTimeOfDay();

            // Update welcome message with personalized greeting
            document.getElementById('greeting').textContent = `Welcome, ${city}!`;
            document.getElementById('location').textContent = `Good ${timeOfDay}.`;
        })
        .catch(error => {
            console.error('Error fetching IP information:', error);
        });
});

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
