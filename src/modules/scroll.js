const scrollMenu = () => {

   const menuItems = document.querySelectorAll('ul > li > a');
   const btnScroll = document.querySelector('main > a');

   menuItems.forEach(item => {
      item.addEventListener('click', (event) => {

         event.preventDefault();

         const ID = event.target.getAttribute('href').substr(1);

         document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      });
   });

   btnScroll.addEventListener('click', (event) => {

      event.preventDefault();

      btnScroll.scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
};


export default scrollMenu;