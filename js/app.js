

















//set the date dynamic 
document.addEventListener("DOMContentLoaded", function() {
    var dateElement = document.getElementById('date'); 
    var currentDate = new Date(); 
    var options = { year: 'numeric', month: 'long', day: 'numeric' }; 
    var formattedDate = currentDate.toLocaleDateString('en-US', options); 
    dateElement.textContent = formattedDate;
});

//swiper function
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical', // Vertical sliding
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
       
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});