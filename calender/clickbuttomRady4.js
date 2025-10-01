const toCalendar1 = document.querySelector('shamsi-calendar-to1');
const toCalendar2 = document.querySelector('shamsi-calendar-to2');

const fromCalendar1 = document.querySelector('shamsi-calendar-from1');
const fromCalendar2 = document.querySelector('shamsi-calendar-from2');
const fromCalendar3 = document.querySelector('shamsi-calendar-from3');



const intervalId = setInterval(() => {

    const holidaysButton1 = toCalendar1.shadowRoot.querySelector('#holidaysButton');
    const holidaysButton2 = toCalendar2.shadowRoot.querySelector('#holidaysButton');

    const holidaysButton3 = fromCalendar1.shadowRoot.querySelector('#holidaysButton');
    const holidaysButton4 = fromCalendar2.shadowRoot.querySelector('#holidaysButton');
    const holidaysButton5 = fromCalendar3.shadowRoot.querySelector('#holidaysButton');



     holidaysButton1.click();
     holidaysButton2.click();
     holidaysButton3.click();
     holidaysButton4.click();
     holidaysButton5.click();

const todayButtonTo1 = toCalendar1.shadowRoot.querySelector('#todayButton');
const todayButtonTo2 = toCalendar2.shadowRoot.querySelector('#todayButton');

const todayButtonfrom1 = fromCalendar1.shadowRoot.querySelector('#todayButton');
const todayButtonfrom2 = fromCalendar2.shadowRoot.querySelector('#todayButton');
const todayButtonfrom3 = fromCalendar3.shadowRoot.querySelector('#todayButton');

todayButtonTo1.click();
todayButtonTo2.click();
todayButtonfrom1.click();
todayButtonfrom2.click();
todayButtonfrom3.click();

}, 2); // هر 2000 میلی‌ثانیه = 2 ثانیه

setTimeout(() => {
  clearInterval(intervalId);
}, 1000);
