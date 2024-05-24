// make a global object

const global={
  currentPage: window.location.pathname,
  api:{
    API_URL: 'https://newsapi.org/v2/',
    API_KEY: '3029b7a3f4014c23a88c9c0dc26efe2f',
  },
}





//fetch api data function
//sample request
//GET https://newsapi.org/v2/everything?q=Pakistan&apiKey=YOUR_API_KEY



async function fetchAPIData(endpoint){
  const API_URL=global.api.API_URL;
  const API_KEY=global.api.API_KEY;

  const response= await fetch(`${API_URL}${endpoint}&apiKey=${API_KEY}`);



}


//highlight active link

function highlightActiveLink() {


  const navBar= document.querySelector('.nav-bar');
  const links= navBar.querySelectorAll('.nav-link');
  links.forEach(link=>{
    if (link.getAttribute('href')===global.currentPage) {
          link.classList.add('active');
    }
  })
  
   



};



function init(){
    switch (global.currentPage) {
        case '/':
        case '/index.html':
        console.log('home');
         break;
        case '/article.html':
        console.log('article');
         break;
        case '/buisness.html':
        console.log('buisness');
         break;
        case '/paknews.html':
        console.log('paknews');
         break;
        case '/sportsnews.html':
        console.log('sports');
         break;
        case '/worldnews.html':
        console.log('world');
         break;
        case '/search.html':
        console.log('search');
         break;
    
    
    }
    highlightActiveLink();
}

































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
      slidesPerView: 'auto',
      spaceBetween: 0,
      freeMode: true,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: true,
      },
  
      
  
      

    });
  }

  // initSwiper();

















  // all event listener

  document.addEventListener('DOMContentLoaded',init)