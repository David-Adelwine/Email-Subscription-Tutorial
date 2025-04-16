const scriptURL = 'https://script.google.com/macros/s/AKfycbwr7orjEcoQu1xwM6kBVl1SEdIkj8gXtdCBezNEak8d1lDiYDvJcCSKMHp7DStCM8us/exec'

// Replace with your deployed Apps Script URL
const form = document.forms['submit-to-google-sheet'];
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    });

    if (response.ok) {
      message.textContent = "Thanks for subscribing!";
      message.style.color = "green";
      form.reset();
    } else {
      message.textContent = " please submit a valid email.";
      message.style.color = "red";
    }
  } catch (error) {
    message.textContent = " Network error. Try again.";
    message.style.color = "red";
    console.error('Error!', error.message);
  }
});