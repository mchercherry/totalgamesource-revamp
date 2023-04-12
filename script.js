//Get modal element
const modal = document.querySelector('#simpleModal');
const modalBtn = document.querySelector('#modal-btn');
//Get close button
const closeBtn = document.querySelector('.closeBtn');

//Listen for open click
modalBtn.addEventListener('click', openModal);

//listen for close click
closeBtn.addEventListener('click', closeModal);

//listen for outside cick
window.addEventListener('click', clickOutside);

//function to open modal
function openModal(){
  modal.style.display = 'block';
}

//function to close modal
function closeModal(){
  modal.style.display = 'none';
}

//function to close modal if outside click
function clickOutside(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}