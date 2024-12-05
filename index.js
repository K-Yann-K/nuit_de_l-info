const fishNet = document.querySelector('.fish-net');
const trashItems = document.querySelectorAll('.trash li');

function checkCollision() {
    const netRect = fishNet.getBoundingClientRect();

    trashItems.forEach((trash) => {
        const trashRect = trash.getBoundingClientRect();

        // Check if the net intersects with the trash
        const isCaught =
            netRect.left < trashRect.right &&
            netRect.right > trashRect.left &&
            netRect.top < trashRect.bottom &&
            netRect.bottom > trashRect.top;

        if (isCaught) {
            trash.classList.add('caught'); // Add caught style
        }
    });
}

// Run the collision check continuously
setInterval(checkCollision, 100);
