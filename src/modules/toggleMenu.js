const toggleMenu = () => {

   const menu = document.querySelector('menu');

   const handleMenu = () => {
      menu.classList.toggle('active-menu');
   };

   document.addEventListener('click', (e) => {
      if (e.target.closest('.menu') || !e.target.closest('menu') ||
         e.target.classList.contains('close-btn') || e.target.matches('ul>li>a')) {
         handleMenu();
      }
   });
};

export default toggleMenu;