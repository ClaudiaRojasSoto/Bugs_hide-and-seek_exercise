//Form validator: it is necessary to make sure that the mail is written with lowercase letters
const formValidator = document.querySelector('.form-contact-me');

formValidator.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInput = document.querySelector('input[name="email"]');
  const textArea = document.getElementById('id-textarea');

  const emailValue = emailInput.value;
  const uppercaseEmail = emailValue.toUpperCase(); // Utilizando toUpperCase() en lugar de toLowerCase()

  if (emailValue !== uppercaseEmail) {
    const errorElement = document.createElement('p');
    errorElement.innerText = 'Send Error. Your email must be written in lowercase letters.';
    errorElement.classList.add('error-message');
    textArea.parentNode.insertBefore(errorElement, textArea.nextSibling);
  } else {
    localStorage.clear();
    formValidator.submit();
  }
});




