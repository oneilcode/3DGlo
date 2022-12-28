const modal = () => {

   const buttons = document.querySelectorAll('.popup-btn');
   const modal = document.querySelector('.popup');
   const closeBtn = modal.querySelector('.popup-close');
   const popuContent = document.querySelector('.popup-content');

   buttons.forEach(button => {
      button.addEventListener('click', () => {
         modal.style.display = 'block';
      });
   });

   closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
   });

   //анимация модального окна :DDD
   let count = 0;
   let idInterval;

   const animate = () => {
      count++;
      idInterval = requestAnimationFrame(animate);

      if (count < 800) {
         popuContent.style.left = count + 'px';
      }
   };

   animate();

   window.addEventListener('resize', () => {
      if (screen.width < 768) {
         console.log('проверка'); //этот код отрабатывает
         cancelAnimationFrame(idInterval); //а этот код не отрабатывает
      }
   });

};

export default modal;