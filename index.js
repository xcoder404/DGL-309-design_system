function copyToClipboard() {
  const textToCopy = document.querySelector('.container-wrap code').innerText;

  navigator.clipboard
    .writeText(textToCopy)
    .then(function () {
      const copyIcon = document.querySelector('.bi-clipboard');
      copyIcon.innerHTML =
        ' <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"/>';

      setTimeout(function () {
        copyIcon.innerHTML =
          '<path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" /><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />';
      }, 2000);
    })
    .catch(function (err) {
      console.error('Unable to copy text to clipboard', err);
    });
}

function toggleDropdown(button) {
  // Toggle the "up" class on the span element to rotate the "<" symbol
  button.querySelector('.dropdown-rotate').classList.toggle('.dropdown-reverse');
  
  // Toggle the display of the dropdown options
  const dropdownOptions = button.nextElementSibling;
  dropdownOptions.style.display = dropdownOptions.style.display === 'none' ? 'block' : 'none';
}