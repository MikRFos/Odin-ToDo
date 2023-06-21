const resetButton = document.getElementById('defaultReset');
const checkboxes = document.querySelectorAll('input');
console.log(resetButton);
console.log(checkboxes);
resetButton.addEventListener('click', () => {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
});
