// MDN


const button = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

button.addEventListener('click', () => {
    if(!button.classList.contains('slide')) {
        button.classList.add('slide');
        video.pause();
    }
    else {
        button.classList.remove('slide');
        video.play();
    }
});

//preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader');
});