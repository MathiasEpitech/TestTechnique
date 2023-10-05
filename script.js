document.addEventListener('DOMContentLoaded', function () {
    const openButton = document.getElementById('openButton');
    const popinOverlay = document.getElementById('popinOverlay');
    const boxClose = document.getElementById('boxClose');

    openButton.addEventListener('click', function () {
        popinOverlay.style.display = 'block';
    });

    boxClose.addEventListener('click', function () {
        popinOverlay.style.display = 'none';
    });
});
