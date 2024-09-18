// Example code to generate hearts
function generateHearts() {
    const container = document.createElement('div');
    container.className = 'hearts';
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        container.appendChild(heart);
    }
    document.body.appendChild(container);
}

// Call the function to generate hearts
generateHearts();
