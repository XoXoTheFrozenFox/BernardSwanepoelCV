document.addEventListener('DOMContentLoaded', function () {
    const imgBx = document.querySelector('.imgBx');
    const modal = document.getElementById('customModal');

    imgBx.addEventListener('mouseover', applyGrayscale);
    imgBx.addEventListener('mouseout', handleMouseOut);


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


    window.showCustomModal = showCustomModal;
    window.closeModal = closeModal;
});
