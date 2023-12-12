import '../style/style.css';
import searchFormSubmit from './eventHandling';
import { createInitialPage } from './dom';

createInitialPage();

const events = (() => {
  const submitBtn = document.querySelector('.search-btn');
  submitBtn.addEventListener('click', searchFormSubmit);
})();
