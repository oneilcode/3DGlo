const timer = (deadline) => {
   const timerHours = document.getElementById('timer-hours');
   const timerMinutes = document.getElementById('timer-minutes');
   const timerSeconds = document.getElementById('timer-seconds');

   let intervalId;

   const getTimeRemaining = () => {
      let dateStop = new Date(deadline).getTime();
      let dateNow = new Date().getTime(); //дата сейчас на основании даты на нашем компе
      let timeRemaining = (dateStop - dateNow) / 1000; //получаем кол-во секунд до дедлайна
      // let days = Math.floor(timeRemaining / 60 / 60 / 24);
      let hours = Math.floor(timeRemaining / 60 / 60);
      let minutes = Math.floor((timeRemaining / 60) % 60);
      let seconds = Math.floor(timeRemaining % 60);

      return {
         hours: hours,
         minutes: minutes,
         seconds: seconds,
         timeRemaining: timeRemaining
      };
      // тут return можно записать так: return (timeRemaining, hours, munites, seconds)
   };

   //добавляем нули перед числом
   const addZero = (number) => (number < 10) ? '0' + number : number;

   const updateClock = () => {
      let getTime = getTimeRemaining();

      timerHours.textContent = addZero(getTime.hours);
      timerMinutes.textContent = addZero(getTime.minutes);
      timerSeconds.textContent = addZero(getTime.seconds);

      // if (getTime.timeRemaining > 0) { // рабочий код через setTimeout
      //    setTimeout(updateClock, 1000);
      // }

      if (getTime.timeRemaining > 0) {
         console.log('тикает');
      } else {
         clearInterval(intervalId);
         timerHours.textContent = '00';
         timerMinutes.textContent = '00';
         timerSeconds.textContent = '00';
      }

   };
   intervalId = setInterval(updateClock, 1000);

};

export default timer;