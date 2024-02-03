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


// SOLUTION START HERE
function showDetails(solutionId) {
    var detailsDiv = document.getElementById(solutionId + 'Details');
    if (detailsDiv.style.display === 'none') {
        detailsDiv.style.display = 'block';
    } else {
        detailsDiv.style.display = 'none';
    }
}

// PLANS START HERE
function selectPlan(button) {
    const plans = document.querySelectorAll('.plan');
    const checkboxes = document.querySelectorAll('.checkbox');
    const selectedPlanDetails = document.getElementById('selectedPlanDetails');

    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });

    plans.forEach(plan => {
      plan.querySelector('button').innerText = "Sélectionner";
    });

    button.innerText = "choisie";
    button.previousElementSibling.checked = true;

    // Update checkout details
    const planName = button.parentElement.querySelector('h2').innerText;
    const planPrice = button.parentElement.querySelector('p').innerText;
    const totalPrice = button.parentElement.querySelector('h3').innerText;
    const overPrice = button.parentElement.querySelector('small').innerText;

    selectedPlanDetails.innerHTML = `
      <h1 style="font-size:26px;font-weight: 400;">${planName} :</h1><hr>
      <h3 style="font-weight: 400;">Prix : ${planPrice}</h3>
      <h3 style="font-weight: 400;">Nom Domaine : 1499  FCFA</h3><hr>
      <h3 style="text-decoration: line-through;color: rgb(199, 17, 17);font-weight: 500;"> ${overPrice}<h3>
      <h3 style="font-size:20px;font-weight: 600;">${totalPrice}</h3> 
    `;
  }

  function checkout() {
    const checkoutBtn = document.querySelector('.checkout button');
    checkoutBtn.innerText = 'Chargement...';
    setTimeout(function() {
      window.location.href = 'https://www.google.com';
    }, 2000); // Redirect after 2 seconds
  }
