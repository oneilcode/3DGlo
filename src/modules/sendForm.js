const sendForm = ({
   formId,
   someElem = []
}) => {

   const form = document.getElementById(formId);
   const statusBlock = document.createElement('div');
   const loadText = 'Загрузка...';
   const errorText = 'Ошибка...';
   const successText = 'Спасибо, с ваши свяжутся скоро!';

   const name = form.querySelectorAll('input[name=user_name]');
   const phone = form.querySelectorAll('input[name=user_phone]');

   //проверка на заполненность полей в форме
   const validate = (list) => {
      let success = true;

      name.forEach(input => {
         if (input.value.length < 3) {
            success = false;
            alert('Имя должно содержать не менее 3 символов!');
            statusBlock.textContent = errorText;
         }
      });

      phone.forEach(input => {
         if (input.value.match(/[^0-9\-()+]/g, '')) {
            success = false;
            alert('Номер телефона не должен содержать данные символы');
            statusBlock.textContent = errorText;
         } else if (input.value.length < 11) {
            alert('Номер телефона должен содержать не менее 11 цифр!');
            statusBlock.textContent = errorText;
         }
      });

      // list.forEach(input => {
      //    if (!input.classList.contains('success')) {
      //       success = false;
      //    }
      // });

      return success;
   };

   const sendData = (data) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
            "Content-Type": "application/json"
         }
      }).then(res => res.json());
   };


   const submitForm = () => {
      const formElements = form.querySelectorAll('input');
      const formData = new FormData(form);
      const formBody = {}; //создаем пустой обьект для передачи данных из формы в него

      //загружаем тект при отправке формы
      statusBlock.textContent = loadText;
      form.append(statusBlock);

      formData.forEach((val, key) => { //тут ключами являются name в ипутах а значения value инпутов
         formBody[key] = val;
      });

      someElem.forEach(elem => { //проверка дополнительного элемента формы
         const element = document.getElementById(elem.id);

         if (elem.type === 'block') {
            formBody[elem.id] = element.textContent;
         } else if (elem.type === 'input') {
            formBody[elem.id] = element.value;
         }
      });

      //проверка на заполненность полей в форме
      if (validate(formElements)) {
         sendData(formBody)
            .then(data => {
               statusBlock.textContent = successText;

               formElements.forEach(input => {
                  input.value = ''; //очищаем форму после отправки
               });
            })
            .catch(error => {
               statusBlock.textContent = errorText;
            });

      } else {
         alert('данные не валидны');
      }
   };

   try {
      if (!form) {
         throw new Error('Верните форму на место!');
      }

      form.addEventListener('submit', (e) => {
         e.preventDefault();

         submitForm();

      });
   } catch (error) {
      console.log(error.message);
   }
};

export default sendForm;