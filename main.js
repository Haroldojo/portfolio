const leavesContainer = document.getElementById('leaves-container');

// Add multiple leaves
function createLeaf() {
    const leaf = document.createElement('img');
    leaf.src = "leaf.png"; // Path to your leaf image
    leaf.classList.add('leaf');
    
    // Randomize position and animation duration
    leaf.style.left = Math.random() * 100 + 'vw';
    leaf.style.animationDuration = Math.random() * 3 + 2 + 's'; // Between 2 to 5 seconds
    leaf.style.transform = `rotate(${Math.random() * 360}deg)`; // Random initial rotation

    // Append leaf to container
    leavesContainer.appendChild(leaf);

    // Remove leaf after animation ends
    leaf.addEventListener('animationend', () => {
        leaf.remove();
    });
}

// Generate leaves at random intervals
setInterval(createLeaf, 500); // Add a new leaf every 500ms
