document.getElementById('name').addEventListener('click', function() {
    for (let i = 0; i < 114; i++) { // Create 50 hearts
        createHeart();
    }

    setTimeout(() => {
        window.location.href = 'love.html'; // Redirect to another page
    }, 10000);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💜';

    // Set random position
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Random duration

    document.body.appendChild(heart);

    // Remove heart after animation
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}
