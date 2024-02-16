// document.addEventListener("DOMContentLoaded", function() {
//     const cityElement = document.getElementById('city');
//     const timeOfDayElement = document.getElementById('timeOfDay');

//     // Fetch visitor's location using IPinfo API
//     fetch('https://ipinfo.io/json?token=YOUR_TOKEN_HERE')
//         .then(response => response.json())
//         .then(data => {
//             const city = data.city || 'Friend';
//             const timeOfDay = getTimeOfDay();

//             // Animate typing effect for city name
//             animateTyping(cityElement, city);

//             // Update time of day message
//             timeOfDayElement.textContent = `Good ${timeOfDay}.`;
//         })
//         .catch(error => {
//             console.error('Error fetching IP information:', error);
//         });
// });

// function animateTyping(element, text) {
//     const speed = 100; // Typing speed in milliseconds
//     let index = 0;

//     function typeNextLetter() {
//         if (index < text.length) {
//             if (text.charAt(index) === ' ') {
//                 // If it's a space, insert a non-breaking space to preserve layout
//                 element.innerHTML += '&nbsp;';
//             } else {
//                 element.innerHTML += `<span class="city-letter">${text.charAt(index)}</span>`;
//             }
//             index++;
//             setTimeout(typeNextLetter, speed);
//         }
//     }

//     typeNextLetter();
// }

// function getTimeOfDay() {
//     const hour = new Date().getHours();
//     if (hour < 12) {
//         return 'morning';
//     } else if (hour < 18) {
//         return 'afternoon';
//     } else {
//         return 'evening';
//     }
// }




// puzzle game 
document.addEventListener("DOMContentLoaded", function() {
    const welcomeText = document.querySelector(".welcome-text");
    const developerText = document.querySelector(".developer-text");

    animateText(welcomeText, "Welcome", 50);
    setTimeout(() => animateText(developerText, "to the Web Developer's World", 50), 1500);
});

function animateText(element, text, speed) {
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


