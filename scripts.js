/* MOBILE NAV LIST */
document.getElementById('mobile-nav-icon').addEventListener('click', function () {
    document.getElementById('mobile-nav').classList.add('open');
});

document.getElementById('mobile-nav-close-icon').addEventListener('click', function () {
    document.getElementById('mobile-nav').classList.remove('open');
});

var mobileNavLinks = document.querySelectorAll('.mobile-nav__list--item');

mobileNavLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        document.getElementById('mobile-nav').classList.remove('open');
    });
});

/*  Project Screen Shot Image Grid */
const thumbnails = document.querySelectorAll('.project__thumbnail');

const selectImage = function () {
    this.parentNode.previousElementSibling.src = this.firstElementChild.src;
}

thumbnails.forEach(thumbnail => thumbnail.addEventListener('click', selectImage));


/* Full size screen shot modal */
const modal = document.querySelector('.modal');
const largeProjectImages = document.querySelectorAll('.project__large-image');
const fullScreenImage = document.querySelector('.full-screen-image');

largeProjectImages.forEach(img => {
    img.addEventListener('click', function () {
        fullScreenImage.src = this.src;
        modal.classList.remove('close');
    });
});

modal.addEventListener('click', function () {
    this.classList.add('close');
});
