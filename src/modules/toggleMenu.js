const toggleMenu = () => {

   const menu = document.querySelector('menu');

   const handleMenu = () => {
      menu.classList.toggle('active-menu');
   };

   document.body.addEventListener('click', (e) => {
      if (menu.classList.contains('active-menu') && !e.target.closest('menu')) {
         handleMenu();
      } else if (e.target.closest('.menu') || e.target.closest('.close-btn')) {
         handleMenu();
      } else if (e.target.closest('menu>ul>li>a')) {
         handleMenu();
      }
   });
};

export default toggleMenu;