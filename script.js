const messages = [
    "Beneran?",
    "Benerannnnn?",
    "Masasi gamauu?",
    "Teken dongg",
    "Ayoo, asik lohh",
    "Aku sedih, kalo gamauu",
    "Bakal sedih banget",
    "Aku jajanin yang enakk",
    "Yauda deh aku berenti nanya",
    "WKWKWK becanda, iyain dongg ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function handlePilihResto() {
    window.location.href = "resto.html";
}

$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});

window.addEventListener('load', function() {
    // Wait 2 seconds before fading out the preloader
    setTimeout(function() {
      const preloader = document.getElementById('preloader');
      // Add Tailwind classes for transition and opacity change
      preloader.classList.add('opacity-0', 'transition', 'duration-1000');
      // After transition (1 second), remove the preloader from view
      setTimeout(function() {
        preloader.style.display = 'none';
      }, 1000);
    }, 2000);
  });