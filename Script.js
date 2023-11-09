document.addEventListener('DOMContentLoaded', function () {
    const imgBx = document.querySelector('.imgBx');
    const modal = document.getElementById('customModal');

    // Mouse events for desktop
    imgBx.addEventListener('mouseover', applyGrayscale);
    imgBx.addEventListener('mouseout', handleMouseOut);

    // Touch events for mobile
    imgBx.addEventListener('touchstart', (event) => {
        event.preventDefault();
        applyGrayscale();
    });

    imgBx.addEventListener('touchend', handleTouchEnd);

    function applyGrayscale() {
        imgBx.style.filter = 'grayscale(100%)';
    }

    function removeGrayscale() {
        imgBx.style.filter = 'grayscale(0%)';
    }

    function handleMouseOut() {
        if (!modal.style.display || modal.style.display === 'none') {
            removeGrayscale();
        }
    }

    function handleTouchEnd() {
        if (!modal.style.display || modal.style.display === 'none') {
            removeGrayscale();
        }
    }

    // Click event for both desktop and mobile
    imgBx.addEventListener('click', () => {
        showCustomModal();
    });

    // Modal-related functions
    function showCustomModal() {
        modal.style.display = 'block';
        applyGrayscale(); // Apply grayscale when modal is displayed
    }

    function closeModal() {
        modal.style.display = 'none';
        removeGrayscale(); // Remove grayscale when modal is closed
    }

    // Optionally, you can expose these functions to be used globally if needed
    window.showCustomModal = showCustomModal;
    window.closeModal = closeModal;
});
