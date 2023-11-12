document.addEventListener('DOMContentLoaded', function () {
    console.log("Created by Bernard Swanepoel :D")
    const imgBx = document.querySelector('.imgBx');
    const modal = document.getElementById('customModal');

    imgBx.addEventListener('mouseover', applyPinkScale);
    imgBx.addEventListener('mouseout', handleMouseOut);


    imgBx.addEventListener('touchstart', (event) => {
        event.preventDefault();
        applyPinkScale();
        showCustomModal();
    });
    
    imgBx.addEventListener('touchend', (event) => {
        event.preventDefault();
        handleTouchEnd();
    });

    function applyPinkScale() {
        imgBx.style.filter = 'grayscale(100%) sepia(100%) hue-rotate(255deg) brightness(1.2) contrast(1)';
    }

    function removePinkScale() {
        imgBx.style.filter = ''; // Resetting the filter to remove all effects
    }

    function handleMouseOut() {
        if (!modal.style.display || modal.style.display === 'none') {
            removePinkScale();
        }
    }

    function handleTouchEnd() {
        if (!modal.style.display || modal.style.display === 'none') {
            removePinkScale();
        }
    }

    imgBx.addEventListener('click', () => {
        showCustomModal();
    });

    // Modal-related functions
    function showCustomModal() {
        modal.style.display = 'block';
        applyPinkScale(); // Apply pinkscale when modal is displayed
    }

    function closeModal() {
        modal.style.display = 'none';
        removePinkScale(); // Remove pinkscale when modal is closed
    }


    window.showCustomModal = showCustomModal;
    window.closeModal = closeModal;
});
