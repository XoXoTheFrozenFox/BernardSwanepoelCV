document.addEventListener('DOMContentLoaded', function () {
    const imgBx = document.querySelector('.imgBx');
    const modal = document.getElementById('customModal');

    imgBx.addEventListener('mouseover', () => {
        applyGrayscale();
    });

    imgBx.addEventListener('mouseout', () => {
        if (!modal.style.display || modal.style.display === 'none') {
            removeGrayscale();
        }
    });

    imgBx.addEventListener('touchstart', (event) => {
        event.preventDefault();
        applyGrayscale();
    });

    imgBx.addEventListener('touchend', () => {
        if (!modal.style.display || modal.style.display === 'none') {
            removeGrayscale();
        }
    });

    function applyGrayscale() {
        imgBx.style.filter = 'grayscale(100%)';
    }

    function removeGrayscale() {
        imgBx.style.filter = 'grayscale(0%)';
    }

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
