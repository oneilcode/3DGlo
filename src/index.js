'use strict';

import timer from './modules/timer';
import toggleMenu from './modules/toggleMenu';
import modal from './modules/modal';
import scroll from './modules/scroll';
import validation from './modules/validation';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

timer('10 january 2023');
toggleMenu();
modal();
scroll();
validation();
tabs();
slider();
calc(100);
sendForm({ //в случае если к форме хотим привязать отправку какого-либо элемента со страницы
   formId: 'form1',
   someElem: [{
      type: 'block', //тут может быть инпут
      id: 'total' //а тут тогда value
   }]
});
sendForm({
   formId: 'form2'
});
sendForm({
   formId: 'form3'
});