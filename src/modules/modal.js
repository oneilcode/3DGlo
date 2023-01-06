import {
   animate
} from './helpers';

const modal = () => {

   const buttons = document.querySelectorAll('.popup-btn');
   const modal = document.querySelector('.popup');
   const popupContent = document.querySelector('.popup-content');

   buttons.forEach(button => {
      button.addEventListener('click', () => {
         modal.style.display = 'block';

         //вызываем аниацию с функции-помощником
         setTimeout(() => {
            animate({
               duration: 1000,
               timing(timeFraction) {
                  return timeFraction;
               },
               draw(progress) {
                  popupContent.style.left = (progress * 50) + '%';
                  popupContent.style.top = (progress * 20) + '%';
               }
            });
         }, 0);

      });
   });

   modal.addEventListener('click', (e) => {
      if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
         modal.style.display = 'none';
      }
   });

};

export default modal;