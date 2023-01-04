const toggleMenu = () => {

   const menuBtn = document.querySelector('.menu');
   const menu = document.querySelector('menu');

   const handleMenu = () => {
      menu.classList.toggle('active-menu');
   };

   menuBtn.addEventListener('click', handleMenu);

   menu.addEventListener('click', (e) => {
      if (e.target.closest('.menu') || !e.target.closest('menu') ||
         e.target.classList.contains('close-btn') || e.target.matches('ul>li>a')) {
         handleMenu();
      }
   });
};

export default toggleMenu;