let submitBtn = document.querySelector('.btn');
let okButton = document.querySelector('.ok-btn');
let popup = document.getElementById('popup');

function openPopup(){
  popup.classList.add('open-popup');
}

function closePopup(){
  popup.classList.remove('open-popup');
}

submitBtn.addEventListener('click', () => {
    openPopup();
});

okButton.addEventListener('click', () => {
    closePopup();
});