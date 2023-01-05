const toggleMenu = () => {

   const menuBtn = document.querySelector('.menu');
   const menu = document.querySelector('menu');

   const handleMenu = () => {
      menu.classList.toggle('active-menu');
   };

   menuBtn.addEventListener('click', handleMenu);

   menu.addEventListener('click', (e) => {
      if (e.target.closest('.menu') || !e.target.closest('menu')) {
         handleMenu();
      } else if (e.target.classList.contains('close-btn')) {
         handleMenu();
      } else if (e.target.matches('ul>li>a')) {
         handleMenu();
      }
   });
};

export default toggleMenu;