document.addEventListener("DOMContentLoaded", function() {
    var slider = document.querySelector('.comment-slider');
    var cardRows = document.querySelectorAll('.comment-row');
    var currentIndex = 0;

    setInterval(function() {
        cardRows[currentIndex].style.marginLeft = '-100%';
        currentIndex = (currentIndex + 1) % cardRows.length;
        cardRows[currentIndex].style.marginLeft = '0';
    }, 30000); // Change this value to control the interval
});
