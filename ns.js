const home = document.querySelector('#home');
home.addEventListener('click', function () {
    window.location.href = 'index.html' ;
});

const technav = document.querySelector('#technav');
technav.addEventListener('click', function (){
    window.location.href = 'tech.html'
});

const sn = document.querySelector('#sn');
sn.addEventListener('click', function (){
    window.location.href = 'startups.html'
});

const aboutp = document.querySelector('#aboutp');
aboutp.addEventListener('click', function (){
    window.location.href = 'about.html'
});

const contact = document.querySelector('#contact');
contact.addEventListener('click', function (){
    window.location.href = 'contact.html'
})

// side news
const sidenews = document.querySelector('.side-news');

const newsItems = [
    { title: 'Lorem ipsum dolor sit amen', link: '#'},
    { title: 'Consectetur adipiscing elit', link: '#'},
    { title: 'sed do eiusmod tempor inciddunt', link: '#'},
    { title: 'Duis aute irure dolor in reprehendeit', link: '#'}
];

let newsHTML = '';
newsItems.forEach(item => {
    newsHTML += `<li><a href="${item.link}">${item.title}</a></li>`;
});

sidenews.innerHTML =`
    <h2> Latest News </h2>
    <ul> ${newsHTML}</ul>
    `;