const validation = () => {

   const inputs = document.querySelectorAll('.calc-block input[type=text]');

   const forms = document.querySelectorAll('form');
   const inputText = document.querySelectorAll('form input[type=text]');
   const inputEmail = document.querySelectorAll('form input[type=email]');
   const inputTel = document.querySelectorAll('form input[type=tel]');
   const message = document.querySelector('.mess');


   // калькулятор
   inputs.forEach(input => {
      input.addEventListener('input', (event) => {

         input.value = input.value.replace(/[^\d]/g, ''); //ввод в инпуты только чисел

      });
   });

   //формы
   forms.forEach(form => {
      form.addEventListener('submit', (event) => {
         event.preventDefault();
      });
   });
   inputText.forEach(text => {
      text.addEventListener('input', () => {
         text.value = text.value.replace(/[^а-я\s-]/gi, ''); //ввод в инпуты только букв, пробелов и -
      });
   });

   message.addEventListener('input', () => {
      message.value = message.value.replace(/[^а-я\s-]/gi, ''); //ввод в инпуты только букв, пробелов и -
   });

   inputTel.forEach(tel => {
      tel.addEventListener('input', () => {
         tel.value = tel.value.replace(/[^0-9\-()+]/g, ''); //ввод в инпуты только чисел, () и - +
      });
   });

   inputEmail.forEach(email => {
      email.addEventListener('input', () => {
         email.value = email.value.replace(/[^\w@\-_.!~*']/gi, ''); //ввод email
      });

   });

};
export default validation;