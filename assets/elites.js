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

    if(!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }

  });

});