import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');

//Pegando alterações no marcar como lido
const checkButtons = document.querySelectorAll('.actions a.check');

checkButtons.forEach(button => {
  button.addEventListener("click", handleClick);
})

const deleteButton = document.querySelectorAll('.actions a.delete');

deleteButton.forEach(button => {
  button.addEventListener("click", (event, check) => handleClick(event, check = false));
})

function handleClick (event,check = true) {
    modalTitle.innerHTML = check ? "Marcar como lida?" : "Excluir essa pergunta?";
    modalDescription.innerHTML = check ? "Tem certeza que deseja marcar como lida essa pergunta?" : "Tem certeza que deseja excluir essa pergunta?";
    modal.open();
}
