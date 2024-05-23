

















//set the date dynamic 
document.addEventListener("DOMContentLoaded", function() {
    var dateElement = document.getElementById('date'); 
    var currentDate = new Date(); 
    var options = { year: 'numeric', month: 'long', day: 'numeric' }; 
    var formattedDate = currentDate.toLocaleDateString('en-US', options); 
    dateElement.textContent = formattedDate;
});



function initSwiper() {
    const swiper = new Swiper('.swiper', {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 30,
      freeMode: true,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: true,
      },
  
      
  
      

    });
  }

  initSwiper();