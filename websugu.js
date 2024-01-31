// NAV  START HERE
$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })
})
// Function to update the timer
 function updateTimer() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Add leading zeros if necessary
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // Update the timer display
    document.getElementById("timer").innerText = hours + ":" + minutes + ":" + seconds;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to update the timer
updateTimer();

// DOMAINE START HERE
function checkAvailability() {
    var domainInput = document.getElementById('domainInput').value.trim();
    var domainDisplay = document.getElementById('domain');
    var available = Math.random() < 0.5; // Randomly simulate availability (for demonstration)

    if (domainInput === "") {
        domainDisplay.innerHTML = "Entrez un nom de votre entreprise";
    } else {
        if (available) {
            domainDisplay.innerHTML = "Le nom <span class='available'>" + domainInput + "</span> est disponible en ligne.";
        } else {
            domainDisplay.innerHTML = "Le nom <span class='not-available'>" + domainInput + "</span> est deja utilulisez en ligne";
        }
    }
}
