var sproutModal = document.getElementById('modal-sprout');
var hiEdModal = document.getElementById('modal-hi-ed');
var screenTimeAnalyzerModal = document.getElementById('modal-screen-time-analyzer');

var sproutCard = document.getElementById("sprout-card");
var hiEdCard = document.getElementById("hi-ed-card");
var screenTimeAnalyzerCard = document.getElementById("screen-time-analyzer-card");
var closeButtons = document.querySelectorAll(".close-button");

var activeModal = null;

// function toggleModal(modal) {
//     console.log(modal.classList, 'classList');
//     modal.classList.toggle("show-modal");
// }

function showModal (modal) {
    activeModal = modal;
    modal.classList.add("show-modal");
}



function windowOnClick (event) {
    // if (event.target === modal) {
    //     toggleModal();
    // }
    switch (event.target) {
        case sproutCard:
            showModal(sproutModal);
            break;
        case hiEdCard:
            showModal(hiEdModal);
            break;
        case screenTimeAnalyzerCard:
            showModal(screenTimeAnalyzerModal);
            break;
    }
}

sproutCard.addEventListener("click", function () {
    activeModal = sproutModal;
    activeModal.classList.add("show-modal");
});

hiEdCard.addEventListener("click", function () {
    activeModal = hiEdModal;
    activeModal.classList.add("show-modal");
});

screenTimeAnalyzerCard.addEventListener("click", function () {
    activeModal = screenTimeAnalyzerModal;
    activeModal.classList.add("show-modal");
});

// ! refactor this, it's kinda messy
closeButtons.forEach(function (button) { 
    button.addEventListener("click", function () {
        activeModal.classList.remove("show-modal");
        activeModal = null;
    });
});
//window.addEventListener("click", hideModal);
