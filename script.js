const openButton = document.getElementById('open-modal'),
      modalContainer = document.getElementById('modal-container'),
      modal = document.getElementById('modal'),
      closeButton = document.getElementById('close-modal');

let removeClass = () => modalContainer.classList.remove("modal-is-visible"),
    doAnimation = () => {
      modal.classList.remove('animation');
      void modal.offsetWidth;
      modal.classList.add('animation');
    };

openButton.onclick = () => {
  modal.style.animationDirection = 'normal';
  doAnimation();
  modal.removeEventListener("animationend", removeClass);
  modalContainer.classList.add("modal-is-visible");
};

closeButton.onclick = () => {
  modal.style.animationDirection = 'reverse';
  doAnimation();
  modal.addEventListener("animationend", removeClass);
};

window.onclick = function(event) {
  if (event.target === modalContainer) {
    modal.style.animationDirection = 'reverse';
    doAnimation();
    modal.addEventListener("animationend", removeClass);
  }
};
