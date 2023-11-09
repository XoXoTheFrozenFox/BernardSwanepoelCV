document.addEventListener('DOMContentLoaded', function () {
    const imgBx = document.querySelector('.imgBx');

    imgBx.addEventListener('mouseover', () => {
        applyGrayscale();
    });

    imgBx.addEventListener('mouseout', () => {
        removeGrayscale();
    });

    imgBx.addEventListener('touchstart', (event) => {
        event.preventDefault();
        applyGrayscale();
    });

    imgBx.addEventListener('touchend', () => {
        removeGrayscale();
    });

    function applyGrayscale() {
        imgBx.style.filter = 'grayscale(100%)';
    }

    function removeGrayscale() {
        imgBx.style.filter = 'grayscale(0%)';
    }
});