// make a global object

const global = {
  currentPage: window.location.pathname,
  api: {
    API_URL: 'https://newsapi.org/v2/',
    API_KEY: '7b60e8f541cf46f687cf8bfd61d3e07a',
  },
  search: {
    term: '',
    page: 1,
    totalResults: 1,
  }
};





//fetch api data function
//sample request
//GET https://newsapi.org/v2/everything?q=Pakistan&apiKey=YOUR_API_KEY










//for indexpage make request
async function getUSNews() {

  const { articles } = await fetchAPIData('top-headlines?country=us');
  const filteredArticles = articles.filter(articles => articles.content !== '[Removed]' && articles.content !== null);
  console.log(filteredArticles);
  filteredArticles.forEach(article => {
    console.log(typeof article.content);
    const div = document.createElement('div');
    div.classList.add('col-3');
    div.innerHTML = `
            
         <div class="card mb-3 border-0 mt-2">
         <h5 class="card-title p-2 fw-bold mt-2">${article.title}</h5>
         <div class="card-body">
             <a href="${article.url}" target="_blank">
              ${article.urlToImage
        ? `<img src="${article.urlToImage}" class="card-img-top object-fit-cover">` : `<img src="../img/no-image.png" class="card-img-top object-fit-cover">`
      }
           ${typeof article.content === "object" ?
        `<p class="card-text mt-2">Please Click to Read more...</p>` : `<p class="card-text mt-2">${article.content.slice(0, 75)} ...Read more</p>`
      } 
           <div class="card-text d-flex news-options">
             <p class="card-text me-2 pe-2 custom-border"><small class="text-muted">By : ${article.source.name}</small></p>
             <p class="card-text "><small class="text-muted">${article.publishedAt.slice(0, 10).split('-').reverse().join('-')}</small></p>
           </div>
         
         </div>
     </a>
       </div>
         
         `;
    document.querySelector('.row').appendChild(div);

  });

}

//display bbc news 
async function getBBCNews() {

  const { articles } = await fetchAPIData('top-headlines?sources=bbc-news');
  const filteredArticles = articles.filter(articles => articles.content !== '[Removed]');
  console.log(filteredArticles);
  filteredArticles.forEach(article => {
    console.log(typeof article.content);
    const div = document.createElement('div');
    div.classList.add('col-3');
    div.innerHTML = `
            
         <div class="card mb-3 border-0 mt-2">
         <h5 class="card-title p-2 fw-bold mt-2">${article.title}</h5>
         <div class="card-body">
             <a href="${article.url}" target="_blank">
              ${article.urlToImage
        ? `<img src="${article.urlToImage}" class="card-img-top object-fit-cover">` : `<img src="../img/no-image.png" class="card-img-top object-fit-cover">`
      }
           ${typeof article.content === "object" ?
        `<p class="card-text mt-2">Please Click to Read more...</p>` : `<p class="card-text mt-2">${article.content.slice(0, 75)} ...Read more</p>`
      } 
           <div class="card-text d-flex news-options">
             <p class="card-text me-2 pe-2 custom-border"><small class="text-muted">By : ${article.source.name}</small></p>
             <p class="card-text "><small class="text-muted">${article.publishedAt.slice(0, 10).split('-').reverse().join('-')}</small></p>
           </div>
         
         </div>
     </a>
       </div>
         
         `;
    document.querySelector('.row').appendChild(div);

  });

}

//get buisness news
//top-headlines?country=us&category=business
async function getBuisnessNews() {

  const { articles } = await fetchAPIData('top-headlines?country=us&category=business');
  const filteredArticles = articles.filter(articles => articles.content !== '[Removed]' || articles.content === null);
  console.log(filteredArticles);
  filteredArticles.forEach(article => {
    console.log(typeof article.content);
    const div = document.createElement('div');
    div.classList.add('col-3');
    div.innerHTML = `
            
         <div class="card mb-3 border-0 mt-2">
         <h5 class="card-title p-2 fw-bold mt-2">${article.title}</h5>
         <div class="card-body">
             <a href="${article.url}" target="_blank">
              ${article.urlToImage
        ? `<img src="${article.urlToImage}" class="card-img-top object-fit-cover">` : `<img src="../img/no-image.png" class="card-img-top object-fit-cover">`
      }
           ${typeof article.content === "object" ?
        `<p class="card-text mt-2">Please Click to Read more...</p>` : `<p class="card-text mt-2">${article.content.slice(0, 75)} ...Read more</p>`
      } 
           <div class="card-text d-flex news-options">
             <p class="card-text me-2 pe-2 custom-border"><small class="text-muted">By : ${article.source.name}</small></p>
             <p class="card-text "><small class="text-muted">${article.publishedAt.slice(0, 10).split('-').reverse().join('-')}</small></p>
           </div>
         
         </div>
     </a>
       </div>
         
         `;
    document.querySelector('.row').appendChild(div);

  });

}

//get tech news
//top-headlines?country=us&category=technology
async function getTechNews() {

  const { articles } = await fetchAPIData('top-headlines?country=us&category=technology');
  const filteredArticles = articles.filter(articles => articles.content !== '[Removed]' || articles.content === null);
  console.log(filteredArticles);
  filteredArticles.forEach(article => {
    console.log(typeof article.content);
    const div = document.createElement('div');
    div.classList.add('col-3');
    div.innerHTML = `
            
         <div class="card mb-3 border-0 mt-2">
         <h5 class="card-title p-2 fw-bold mt-2">${article.title}</h5>
         <div class="card-body">
             <a href="${article.url}" target="_blank">
              ${article.urlToImage
        ? `<img src="${article.urlToImage}" class="card-img-top object-fit-cover">` : `<img src="../img/no-image.png" class="card-img-top object-fit-cover" width="50px" height='150px'>`
      }
           ${typeof article.content === "object" ?
        `<p class="card-text mt-2">Please Click to Read more...</p>` : `<p class="card-text mt-2">${article.content.slice(0, 75)} ...Read more</p>`
      } 
           <div class="card-text d-flex news-options">
             <p class="card-text me-2 pe-2 custom-border"><small class="text-muted">By : ${article.source.name}</small></p>
             <p class="card-text "><small class="text-muted">${article.publishedAt.slice(0, 10).split('-').reverse().join('-')}</small></p>
           </div>
         
         </div>
     </a>
       </div>
         
         `;
    document.querySelector('.row').appendChild(div);

  });

}

//get sports news 

async function getSportsNews() {

  const { articles } = await fetchAPIData('top-headlines?country=us&category=sports');
  const filteredArticles = articles.filter(articles => articles.content !== '[Removed]' || articles.content === null);
  console.log(filteredArticles);
  filteredArticles.forEach(article => {
    console.log(typeof article.content);
    const div = document.createElement('div');
    div.classList.add('col-3');
    div.innerHTML = `
            
         <div class="card mb-3 border-0 mt-2">
         <h5 class="card-title p-2 fw-bold mt-2">${article.title}</h5>
         <div class="card-body">
             <a href="${article.url}" target="_blank">
              ${article.urlToImage
        ? `<img src="${article.urlToImage}" class="card-img-top object-fit-cover">` : `<img src="../img/no-image.png" class="card-img-top object-fit-cover" width="50px" height='170px'>`
      }
           ${typeof article.content === "object" ?
        `<p class="card-text mt-2">Please Click to Read more...</p>` : `<p class="card-text mt-2">${article.content.slice(0, 75)} ...Read more</p>`
      } 
           <div class="card-text d-flex news-options">
             <p class="card-text me-2 pe-2 custom-border"><small class="text-muted">By : ${article.source.name}</small></p>
             <p class="card-text "><small class="text-muted">${article.publishedAt.slice(0, 10).split('-').reverse().join('-')}</small></p>
           </div>
         
         </div>
     </a>
       </div>
         
         `;
    document.querySelector('.row').appendChild(div);

  });

}


//search news function

async function search() {

  const queryString = window.location.search;
  // console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  // console.log(urlParams);
  // console.log(urlParams.get('search-term'));
  //so now put it in variables
  global.search.term = urlParams.get('search-term');
  if (global.search.term !== '' && global.search.term !== null) {

    //make request anf get the result from api
    const { articles, totalResults } = await searchAPIData();
    // console.log(articles);
    // console.log(articles.length);

    if (articles.length===undefined) {
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `
              <div id="alert" class="alert mt-5 text-center h-50">
                  <h2> Server Error 426 (Too Many Requests) </h2>
              </div>
                 
            `;

      document.querySelector('.row').appendChild(div);
      return;

    }
    if (articles.length === 0) {
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `
              <div id="alert" class="alert mt-5 text-center h-50">
                  <h2> Nothing Found to Your Search </h2>
              </div>
                 
            `;

      document.querySelector('.row').appendChild(div);
      return;

    }

    //pass results so show on DOM
    displaySearchResults(articles);


  } else {
    // alert('Please Enter Some Words To Search');
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
              <div id="alert" class="alert mt-5 text-center h-50">
                  <h2> Please Enter Something To Search </h2>
              </div>
                 
            `;

    document.querySelector('.row').appendChild(div);


  }

}

//function to display the results
function displaySearchResults(articles) {

  articles.forEach(article => {
    console.log(typeof article.content);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
            
         <div class="card mb-3 border-0 mt-2">
         <h5 class="card-title p-2 fw-bold mt-2">${article.title}</h5>
         <div class="card-body">
             <a href="${article.url}" target="_blank">
              ${article.urlToImage
        ? `<img src="${article.urlToImage}" class="card-img-top object-fit-cover">` : `<img src="../img/no-image.png" class="card-img-top object-fit-cover" width="50px" height='170px'>`
      }
           ${typeof article.content === "object" ?
        `<p class="card-text mt-2">Please Click to Read more...</p>` : `<p class="card-text mt-2">${article.content.slice(0, 75)} ...Read more</p>`
      } 
           <div class="card-text d-flex news-options">
             <p class="card-text me-2 pe-2 custom-border"><small class="text-muted">By : ${article.source.name}</small></p>
             <p class="card-text "><small class="text-muted">${article.publishedAt.slice(0, 10).split('-').reverse().join('-')}</small></p>
           </div>
         
         </div>
     </a>
       </div>
         
         `;

    document.querySelector('.row').appendChild(div);
  });

}






//a function which takes endpoint and get the results in json formate

async function fetchAPIData(endpoint) {
  const API_URL = global.api.API_URL;
  const API_KEY = global.api.API_KEY;

  showSpinner();
  const response = await fetch(`${API_URL}${endpoint}&apiKey=${API_KEY}`);

  const data = response.json();
  hideSpinner();
  return data;



}

//search keywords 
async function searchAPIData() {
  const API_URL = global.api.API_URL;
  const API_KEY = global.api.API_KEY;

  showSpinner();
  const response = await fetch(`${API_URL}everything?q=${global.search.term}&page=25&apiKey=${API_KEY}`);

  const data = response.json();
  hideSpinner();
  return data;



}


//show and hide spinner
//we will call them where ever we call fetch();
function showSpinner() {
  document.querySelector('.spinner').classList.add("show");
}
function hideSpinner() {
  document.querySelector('.spinner').classList.remove("show");
}

//highlight active link

function highlightActiveLink() {


  const navBar = document.querySelector('.nav-bar');
  const links = navBar.querySelectorAll('.nav-link');
  links.forEach(link => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });





};



function init() {
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      console.log('home');
      getUSNews();
      break;
    case '/article-details.html':
      console.log('article');
      break;
    case '/buisness.html':
      console.log('buisness');
      getBuisnessNews();
      break;
    case '/bbcnews.html':
      getBBCNews();
      console.log('bbcnews');
      break;
    case '/sportsnews.html':
      getSportsNews();
      console.log('sports');
      break;
    case '/technews.html':
      getTechNews();
      console.log('world');
      break;
    case '/search.html':
      search();
      console.log('search');
      break;


  }
  highlightActiveLink();
}

































//set the date dynamic 
document.addEventListener("DOMContentLoaded", function () {
  var dateElement = document.getElementById('date');
  var currentDate = new Date();
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  var formattedDate = currentDate.toLocaleDateString('en-US', options);
  dateElement.textContent = formattedDate;
});


//init app


document.addEventListener('DOMContentLoaded', init);