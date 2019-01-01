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
  modalContainer.classList.add("modal-is-visible");
  doAnimation();
};

closeButton.onclick = () => {
  modal.style.animationDirection = 'reverse';
  setTimeout(removeClass, 500);
  doAnimation();
};

window.onclick = function(event) {
  if (event.target == modalContainer) {
    modal.style.animationDirection = 'reverse';
    setTimeout(removeClass, 500);
    doAnimation();
  }
};
