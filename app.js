const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'Scroll down to check some of the available national helplines. ';
  } else if (choice === 'rainy') {
    para.textContent = 'Feel free to reach out to us at anytime!';}
    else if (choice === '') {
        para.textContent = 'Do you feel depressed, anxious, worried or suicidal?'
        'Do you have a question related to your own or someone else  mental health?';
    }
 
}
