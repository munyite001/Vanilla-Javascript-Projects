// select modal-btn,modal-overlay,close-btn
const modal_btn = document.querySelector('.modal-btn');
const modal_overlay = document.querySelector('.modal-overlay');
const close_btn = document.querySelector('.close-btn');

// listen for click events on modal-btn and close-btn
modal_btn.addEventListener('click', openModal);
close_btn.addEventListener('click',closeModal);

// when user clicks modal-btn add .open-modal to modal-overlay
function openModal () {
    modal_overlay.classList.add('open-modal');
}

// when user clicks close-btn remove .open-modal from modal-overlay
function closeModal() {
    modal_overlay.classList.remove('open-modal');
}
