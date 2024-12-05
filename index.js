document.addEventListener('DOMContentLoaded', () => {
    const fishNet = document.querySelector('.fish-net');
    const trashItems = document.querySelectorAll('.trash li');
    setTimeout(() => {
        fishNet.style.backgroundImage = "url('icons/fish-net-full.png')"; // Replace with the full net image
    }, 16500); // Change image after 5 seconds

    function checkCollision() {
        const netRect = fishNet.getBoundingClientRect();
    
        trashItems.forEach((trash) => {
            const trashRect = trash.getBoundingClientRect();
    
            // Check for collision
            const isCaught =
                netRect.left < trashRect.right &&
                netRect.right > trashRect.left &&
                netRect.top < trashRect.bottom &&
                netRect.bottom > trashRect.top;
    
            if (isCaught && !trash.classList.contains('caught')) {
                trash.classList.add('caught'); // Add the class to stop the animation
                console.log(`${trash.className} caught!`);
            }
        });
    }

    setInterval(checkCollision, 100);
});
