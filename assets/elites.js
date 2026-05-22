

AOS.init({
  duration: 1000,
  once: true
});

// FAQ TOGGLE
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {

    const isOpen = answer.style.maxHeight;

    document.querySelectorAll('.faq-answer').forEach(el => {
      el.style.maxHeight = null;
    });

    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }

  });

});

//// WITHDRAW FORM

const form = document.getElementById('withdrawForm');

if (form) {

  form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');

    submitBtn.disabled = true;
    submitBtn.innerText = 'Submitting...';

    const data = {

      fullName: form.querySelector('[name="fullName"]').value.trim(),

      email: form.querySelector('[name="email"]').value.trim(),

      phone: form.querySelector('[name="phone"]').value.trim(),

      amount: form.querySelector('[name="amount"]').value.trim(),

      method: form.querySelector('[name="method"]').value,

      bankName: form.querySelector('[name="bankName"]').value.trim(),

      accountHolder: form.querySelector('[name="accountHolder"]').value.trim(),

      accountNumber: form.querySelector('[name="accountNumber"]').value.trim(),

      swift: form.querySelector('[name="swift"]').value.trim(),

      wallet: form.querySelector('[name="wallet"]').value.trim()

    };

    try {

      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbynklAl__LnHtoKvyQIE0ySb7gXSfnXrMhW-08jUKPM3zAQL5BX4iLIrBKYRR1cUiSr/exec',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify(data)
        }
      );

      const result = await response.text();

      console.log(result);

      alert('Withdrawal request submitted successfully.');

      form.reset();

    } catch (err) {

      console.error(err);

      alert('Something went wrong.');

    } finally {

      submitBtn.disabled = false;

      submitBtn.innerText = 'Submit Withdrawal Request';

    }

  });

}