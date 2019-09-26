/* MODALS */

var sproutModal = document.getElementById('modal-sprout');
var hiEdModal = document.getElementById('modal-hi-ed');
var screenTimeAnalyzerModal = document.getElementById('modal-screen-time-analyzer');

var sproutCard = document.getElementById("sprout-card");
var hiEdCard = document.getElementById("hi-ed-card");
var screenTimeAnalyzerCard = document.getElementById("screen-time-analyzer-card");
var modals = document.querySelectorAll(".modal");

var activeModal = null;

sproutCard.addEventListener("click", function () {
    activeModal = sproutModal;
    activeModal.classList.add("show-modal");
    document.body.style.overflow = 'hidden';
});

hiEdCard.addEventListener("click", function () {
    activeModal = hiEdModal;
    activeModal.classList.add("show-modal");
    document.body.style.overflow = 'hidden';
});

screenTimeAnalyzerCard.addEventListener("click", function () {
    activeModal = screenTimeAnalyzerModal;
    activeModal.classList.add("show-modal");
    document.body.style.overflow = 'hidden';
});

modals.forEach(function (button) { 
    button.addEventListener("click", function () {
        activeModal.classList.remove("show-modal");
        activeModal = null;
        document.body.style.overflow = '';
    });
});

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