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
    const puzzlePieces = document.querySelectorAll('.puzzle-piece');

    puzzlePieces.forEach(piece => {
        piece.addEventListener('mousedown', startDragging);
        piece.addEventListener('mouseup', stopDragging);
    });
});

function startDragging(event) {
    this.style.zIndex = '100'; // Bring the dragged piece to the front
    this.style.transition = 'none'; // Disable transitions during dragging
    this.style.cursor = 'grabbing'; // Change cursor to grabbing when dragging

    let shiftX = event.clientX - this.getBoundingClientRect().left;
    let shiftY = event.clientY - this.getBoundingClientRect().top;

    function movePiece(event) {
        this.style.left = event.clientX - shiftX + 'px';
        this.style.top = event.clientY - shiftY + 'px';
    }

    document.addEventListener('mousemove', movePiece.bind(this));

    this.addEventListener('mouseup', function stopDragging() {
        this.style.transition = 'all 0.3s ease'; // Re-enable transitions after dragging
        this.style.cursor = 'grab'; // Change cursor back to grab after dragging
        document.removeEventListener('mousemove', movePiece.bind(this));
        this.removeEventListener('mouseup', stopDragging);
    });
}

function stopDragging(event) {
    event.stopPropagation(); // Prevent mouseup from triggering startDragging again
}
