let open_btn = document.getElementById('open-modal'),
    modal_window = document.getElementById('modal'),
    close_btn = document.getElementById('close-modal');


open_btn.onclick = () => {
  console.log("Modal is open");
  modal_window.classList.add("modal-is-visible")
};

close_btn.onclick = () => {
  console.log("Modal is closed");
  modal_window.classList.remove("modal-is-visible")
};

console.log("hello world");
