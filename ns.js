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