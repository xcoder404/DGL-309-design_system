function copyToClipboard(sectionId, icon) {
  const textToCopy = document.getElementById(sectionId).innerText;

  navigator.clipboard
    .writeText(textToCopy)
    .then(function () {
      
      icon.innerHTML =
        '  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"/></svg>';

      setTimeout(function () {
        icon.innerHTML =
          ' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" /><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" /></svg>';
      }, 2000);
    })
    .catch(function (err) {
      console.error('Unable to copy text to clipboard', err);
    });
}

function toggleDropdown(button) {
  
  button.querySelector('.dropdown-rotate').classList.toggle('.dropdown-reverse');

  
  const dropdownOptions = button.nextElementSibling;
  dropdownOptions.style.display = dropdownOptions.style.display === 'none' ? 'block' : 'none';
}

const modal = document.getElementById('modal');
const modalForm = document.getElementById('modal-form');

const openModal = document.getElementById('modal-button');
const buttonForm = document.getElementById('modal-form-button');

const closeModal = document.getElementById('modal-close');
const closeForm = document.getElementById('modal-form-close');

const closeIcon = document.querySelector('.modal-open .bi');
const closeIconForm = document.getElementById('closeIconForm');

openModal.addEventListener('click', () => {
  modal.showModal();
})

buttonForm.addEventListener('click', () => {
  modalForm.showModal();
})
closeModal.addEventListener('click', () =>{
  modal.close();
})
closeForm.addEventListener('click', () =>{
  modalForm.close();
})
closeIcon.addEventListener('click', () =>{
  modal.close();
})

closeIconForm.addEventListener('click', () =>{
  modalForm.close();
})



