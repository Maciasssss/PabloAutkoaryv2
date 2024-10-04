// Assuming you have a form and input elements
const inputs = document.querySelectorAll('.field');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      input.classList.add('success'); 
    } else {
      input.classList.remove('success'); 
    }
  });
});
