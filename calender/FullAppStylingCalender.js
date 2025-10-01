function createShamsiCalendarTo(suffix) {
  !(function (e) {
    if ("object" == typeof exports && "undefined" != typeof module)
      module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
      ("undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this
      ).jalaali = e();
    }
  })(function () {
    return (function e(n, r, t) {
      function a(i, u) {
        if (!r[i]) {
          if (!n[i]) {
            var f = "function" == typeof require && require;
            if (!u && f) return f(i, !0);
            if (o) return o(i, !0);
            var l = new Error("Cannot find module '" + i + "'");
            throw ((l.code = "MODULE_NOT_FOUND"), l);
          }
          var c = (r[i] = { exports: {} });
          n[i][0].call(
            c.exports,
            function (e) {
              return a(n[i][1][e] || e);
            },
            c,
            c.exports,
            e,
            n,
            r,
            t
          );
        }
        return r[i].exports;
      }
      for (
        var o = "function" == typeof require && require, i = 0;
        i < t.length;
        i++
      )
        a(t[i]);
      return a;
    })(
      {
        1: [
          function (e, n, r) {
            n.exports = {
              toJalaali: function (e, n, r) {
                "[object Date]" === Object.prototype.toString.call(e) &&
                  ((r = e.getDate()),
                  (n = e.getMonth() + 1),
                  (e = e.getFullYear()));
                return l(c(e, n, r));
              },
              toGregorian: a,
              isValidJalaaliDate: function (e, n, r) {
                return (
                  e >= -61 &&
                  e <= 3177 &&
                  n >= 1 &&
                  n <= 12 &&
                  r >= 1 &&
                  r <= i(e, n)
                );
              },
              isLeapJalaaliYear: o,
              jalaaliMonthLength: i,
              jalCal: u,
              j2d: f,
              d2j: l,
              g2d: c,
              d2g: d,
              jalaaliToDateObject: g,
              jalaaliWeek: function (e, n, r) {
                var t = g(e, n, r).getDay(),
                  a = 6 == t ? 0 : -(t + 1),
                  o = 6 + a;
                return { saturday: l(f(e, n, r + a)), friday: l(f(e, n, r + o)) };
              },
            };
            var t = [
              -61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060,
              2097, 2192, 2262, 2324, 2394, 2456, 3178,
            ];
            function a(e, n, r) {
              return d(f(e, n, r));
            }
            function o(e) {
              return (
                0 ===
                (function (e) {
                  var n,
                    r,
                    a,
                    o,
                    i,
                    u = t.length,
                    f = t[0];
                  if (e < f || e >= t[u - 1])
                    throw new Error("Invalid Jalaali year " + e);
                  for (i = 1; i < u && ((r = (n = t[i]) - f), !(e < n)); i += 1)
                    f = n;
                  r - (o = e - f) < 6 && (o = o - r + 33 * y(r + 4, 33));
                  -1 === (a = p(p(o + 1, 33) - 1, 4)) && (a = 4);
                  return a;
                })(e)
              );
            }
            function i(e, n) {
              return n <= 6 ? 31 : n <= 11 || o(e) ? 30 : 29;
            }
            function u(e, n) {
              var r,
                a,
                o,
                i,
                u,
                f,
                l = t.length,
                c = e + 621,
                d = -14,
                g = t[0];
              if (e < g || e >= t[l - 1])
                throw new Error("Invalid Jalaali year " + e);
              for (f = 1; f < l && ((a = (r = t[f]) - g), !(e < r)); f += 1)
                (d = d + 8 * y(a, 33) + y(p(a, 33), 4)), (g = r);
              return (
                (d = d + 8 * y((u = e - g), 33) + y(p(u, 33) + 3, 4)),
                4 === p(a, 33) && a - u == 4 && (d += 1),
                (i = 20 + d - (y(c, 4) - y(3 * (y(c, 100) + 1), 4) - 150)),
                n
                  ? { gy: c, march: i }
                  : (a - u < 6 && (u = u - a + 33 * y(a + 4, 33)),
                    -1 === (o = p(p(u + 1, 33) - 1, 4)) && (o = 4),
                    { leap: o, gy: c, march: i })
              );
            }
            function f(e, n, r) {
              var t = u(e, !0);
              return (
                c(t.gy, 3, t.march) + 31 * (n - 1) - y(n, 7) * (n - 7) + r - 1
              );
            }
            function l(e) {
              var n,
                r = d(e).gy,
                t = r - 621,
                a = u(t, !1);
              if ((n = e - c(r, 3, a.march)) >= 0) {
                if (n <= 185)
                  return { jy: t, jm: 1 + y(n, 31), jd: p(n, 31) + 1 };
                n -= 186;
              } else (t -= 1), (n += 179), 1 === a.leap && (n += 1);
              return { jy: t, jm: 7 + y(n, 30), jd: p(n, 30) + 1 };
            }
            function c(e, n, r) {
              var t =
                y(1461 * (e + y(n - 8, 6) + 100100), 4) +
                y(153 * p(n + 9, 12) + 2, 5) +
                r -
                34840408;
              return (t = t - y(3 * y(e + 100100 + y(n - 8, 6), 100), 4) + 752);
            }
            function d(e) {
              var n, r, t, a;
              return (
                (n =
                  (n = 4 * e + 139361631) +
                  4 * y(3 * y(4 * e + 183187720, 146097), 4) -
                  3908),
                (r = 5 * y(p(n, 1461), 4) + 308),
                (t = y(p(r, 153), 5) + 1),
                (a = p(y(r, 153), 12) + 1),
                { gy: y(n, 1461) - 100100 + y(8 - a, 6), gm: a, gd: t }
              );
            }
            function g(e, n, r, t, o, i, u) {
              var f = a(e, n, r);
              return new Date(
                f.gy,
                f.gm - 1,
                f.gd,
                t || 0,
                o || 0,
                i || 0,
                u || 0
              );
            }
            function y(e, n) {
              return ~~(e / n);
            }
            function p(e, n) {
              return e - ~~(e / n) * n;
            }
          },
          {},
        ],
        2: [
          function (e, n, r) {
            n.exports = e("./index.js");
          },
          { "./index.js": 1 },
        ],
      },
      {},
      [2]
    )(2);
  });

  const tagName = `shamsi-calendar-to${suffix}`;
  const setMethodName = `setFromDate${suffix}`;

  class DynamicShamsiCalendarTo extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });

      const wrapper = document.createElement('div');
      wrapper.innerHTML = `
        <style>
          @font-face {
            font-family: 'IranSans';
            src: url('https://cdn.fontcdn.ir/Font/Persian/Sans/IRANSansWeb.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }

          :host {
            font-family: 'IranSans', sans-serif;
            direction: rtl;
            display: inline-block;
            width: 200px;
            min-width: 200px;
            padding: 3px;
            box-sizing: border-box;
          }

          .calendar {
            background: white;
            border-radius: 6.67px;
            padding: 10px;
            padding-bottom: 40px;
            box-shadow: 0 1.33px 5.33px rgba(0,0,0,0.1);
            width: 100%;
            position: relative;
            box-sizing: border-box;
            font-size: clamp(8px, 3.2vw, 9.33px);
          }

          .header {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 6.67px;
            position: relative;
          }

          .header button {
            background: #4CAF50;
            border: none;
            color: white;
            padding: 3.33px 6.67px;
            border-radius: 3.33px;
            cursor: pointer;
            transition: background 0.2s;
            position: absolute;
            top: 0;
            font-family: 'IranSans', sans-serif;
            font-size: inherit;
          }

          #prevMonth { right: 0; }
          #nextMonth { left: 0; }
          .header button:hover { background: #388E3C; }

          #monthYear {
            display: flex;
            gap: 5.33px;
            cursor: pointer;
            font-weight: bold;
          }

          #monthName, #yearNumber {
            padding: 1.33px 4px;
            border-radius: 2.67px;
            color: #000000;
            font-weight: bold;
          }

          #monthName:hover, #yearNumber:hover {
            background: #C8E6C9;
          }

          .days {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 3.33px;
          }

          .day {
            text-align: center;
            padding: 5.33px;
            border-radius: 3.33px;
            background: #eee;
            cursor: pointer;
            transition: background 0.2s;
            font-size: inherit;
            color: #333;
            display: block;
          }

          .day:hover { background: #C8E6C9; }
          .weekdays {
            font-weight: bold;
            background: none;
            cursor: default;
            color: #333;
            display: block;
          }
          .weekdays:hover { background: none; }
          .selected { background: skyblue !important; }
          .holiday { color: red !important; background: #eee; }
          .holiday:hover { background: #C8E6C9 !important; }
          .holiday.disabled { 
            background: #f5f5f5 !important; 
            color: #ff6666 !important; 
            cursor: not-allowed; 
            pointer-events: none; 
          }
          .holiday.disabled:hover { background: #f5f5f5 !important; }
          .selected.holiday { color: red !important; background: skyblue !important; }

          .disabled {
            background: #f5f5f5;
            color: #bbb;
            cursor: not-allowed;
            pointer-events: none;
          }

          #selectedDate, #formattedDate {
            margin-top: 10px;
            font-weight: bold;
            text-align: center;
            color: #2E7D32;
            font-size: inherit;
            display: none;
          }

          .dropdown {
            position: absolute;
            background: #f1f8e9;
            border: 0.67px solid #ccc;
            border-radius: 5.33px;
            padding: 6.67px;
            box-shadow: 0 2.67px 8px rgba(0,0,0,0.15);
            z-index: 10;
            max-width: calc(100% - 20px);
            box-sizing: border-box;
          }

          .month-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 3.33px 10px;
            font-size: clamp(7.33px, 2.8vw, 8.67px);
          }

          .month-list label {
            display: block;
            padding: 5px;
            border: 1px solid #ddd;
            border-radius: 3.33px;
            text-align: center;
            cursor: pointer;
            color: #000000;
            font-weight: bold;
          }

          .month-list label:hover {
            background: #C8E6C9;
          }

          .month-list input {
            display: none;
          }

          .month-list label.disabled {
            color: #bbb;
            cursor: not-allowed;
            pointer-events: none;
            background: #f5f5f5;
          }

          .year-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 3.33px 10px;
            max-height: 100px;
            overflow-y: auto;
            font-size: clamp(7.33px, 2.8vw, 8.67px);
          }

          .year-item {
            padding: 5px;
            border: 1px solid #ddd;
            border-radius: 3.33px;
            text-align: center;
            cursor: pointer;
            color: #000000;
            font-weight: bold;
          }

          .year-item:hover {
            background: #C8E6C9;
          }

          .year-item.disabled {
            color: #bbb;
            cursor: not-allowed;
            pointer-events: none;
            background: #f5f5f5;
          }

          #todayButton {
            position: absolute;
            bottom: 11px;
            right: 10px;
            background: #4CAF50;
            color: white;
            border: none;
            padding: 3.33px 6.67px;
            border-radius: 3.33px;
            cursor: pointer;
            font-family: 'IranSans', sans-serif;
            font-size: inherit;
          }

          #todayButton:hover { background: #388E3C; }

          .footer-buttons {
            position: absolute;
            bottom: 11px;
            left: 10px;
            display: flex;
            gap: 5px;
            justify-content: flex-start;
          }

          #confirmButton {
            background: #4CAF50;
            color: white;
            border: none;
            padding: 3.33px 6.67px;
            border-radius: 3.33px;
            cursor: pointer;
            font-family: 'IranSans', sans-serif;
            font-size: inherit;
          }

          #holidaysButton {
            background: #4CAF50;
            color: white;
            border: none;
            padding: 3.33px 6.67px;
            border-radius: 3.33px;
            cursor: pointer;
            font-family: 'IranSans', sans-serif;
            font-size: inherit;
            display : none ;
          }

          #confirmButton:hover, #holidaysButton:hover {
            background: #388E3C;
          }

          #closeButton {
            background: #F44336;
            color: white;
            border: none;
            padding: 3.33px 6.67px;
            border-radius: 3.33px;
            cursor: pointer;
            font-family: 'IranSans', sans-serif;
            font-size: inherit;
          }

          #closeButton:hover {
            background: #D32F2F;
          }
        </style>

        <div class="calendar">
          <div class="header">
            <button id="prevMonth">ماه قبل</button>
            <div id="monthYear">
              <span id="monthName"></span>
              <span id="yearNumber"></span>
            </div>
            <button id="nextMonth">ماه بعد</button>
          </div>
          <div class="days" id="weekdays"></div>
          <div class="days" id="calendarDays"></div>
          <button id="todayButton">امروز</button>
          <div class="footer-buttons">
            <button id="closeButton">بستن</button>
            <button id="confirmButton">تأیید</button>
            <button id="holidaysButton">تعطیلات</button>
          </div>
          <p id="selectedDate"></p>
          <p id="formattedDate"></p>
        </div>
      `;

      shadow.appendChild(wrapper);

      const weekdays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
      const weekdaysContainer = shadow.querySelector("#weekdays");
      weekdaysContainer.innerHTML = "";
      weekdays.forEach(d => {
        const div = document.createElement("div");
        div.textContent = d;
        div.classList.add("day", "weekdays");
        div.style.display = "block";
        weekdaysContainer.appendChild(div);
      });

      let today = new Date();
      let todayJalali;
      try {
        todayJalali = jalaali.toJalaali(today);
      } catch (e) {
        console.error("Jalaali-js failed to load or execute:", e);
        todayJalali = { jy: 1404, jm: 5, jd: 24 };
      }
      let todayJy = todayJalali.jy;
      let currentJy = todayJy;
      let todayJm = todayJalali.jm;
      let currentJm = todayJm;
      let todayJd = todayJalali.jd;

      let selectedElement = null;
      let fromDate = null;
      const calendarType = this.getAttribute('type');
      let vaction = [];

      this[setMethodName] = function(date) {
        if (calendarType === 'to') {
          fromDate = date;
          renderCalendar(currentJy, currentJm);
        }
      };

      const renderCalendar = (year, month, selectToday = false) => {
        try {
          shadow.querySelector("#monthName").textContent = getMonthName(month);
          shadow.querySelector("#yearNumber").textContent = year;

          const calendarDays = shadow.querySelector("#calendarDays");
          calendarDays.innerHTML = "";

          let firstDay, daysInMonth, firstDate, startDay;
          try {
            firstDay = jalaali.toGregorian(year, month, 1);
            firstDate = new Date(firstDay.gy, firstDay.gm - 1, firstDay.gd);
            startDay = (firstDate.getDay() + 1) % 7;
            daysInMonth = jalaali.jalaaliMonthLength(year, month);
          } catch (e) {
            console.error("Error in jalaali calculations:", e);
            firstDay = { gy: 2025, gm: month, gd: 1 };
            firstDate = new Date(2025, month - 1, 1);
            startDay = (firstDate.getDay() + 1) % 7;
            daysInMonth = 31;
          }

          console.log(`Rendering calendar: Year=${year}, Month=${month}, StartDay=${startDay}, DaysInMonth=${daysInMonth}`);

          for (let i = 0; i < startDay; i++) {
            const emptyDiv = document.createElement("div");
            emptyDiv.classList.add("empty-day");
            calendarDays.appendChild(emptyDiv);
          }

          for (let d = 1; d <= daysInMonth; d++) {
            const div = document.createElement("div");
            div.textContent = d;
            div.setAttribute("data-date", `${year}/${month}/${d}`);
            div.classList.add("day");
            div.style.display = "block";

            const currentDate = `${year}/${month}/${d}`;
            const isHoliday = vaction.includes(currentDate);
            if (isHoliday) {
              div.classList.add("holiday");
              console.log(`Holiday detected: ${currentDate}`);
            }

            const isCurrentMonth = year === todayJy && month === todayJm;
            const isFutureMonth = year > todayJy || (year === todayJy && month > todayJm);
            const isFutureDay = isCurrentMonth && d > todayJd;

            let isBeforeFromDate = false;
            if (calendarType === 'to' && fromDate) {
              const [fromYear, fromMonth, fromDay] = fromDate.split('/').map(Number);
              isBeforeFromDate = year < fromYear || 
                                (year === fromYear && month < fromMonth) || 
                                (year === fromYear && month === fromMonth && d < fromDay);
            }

            if (isFutureDay || isFutureMonth || isBeforeFromDate) {
              div.classList.add("disabled");
              if (isHoliday) {
                div.classList.add("holiday");
              }
            } else {
              div.addEventListener("click", () => {
                if (selectedElement) selectedElement.classList.remove("selected");
                div.classList.add("selected");
                selectedElement = div;

                const formattedDate = `${year}${String(month).padStart(2, '0')}${String(d).padStart(2, '0')}`;
                const displayDate = div.getAttribute("data-date");
                shadow.querySelector("#selectedDate").textContent = formattedDate;
                shadow.querySelector("#formattedDate").textContent = displayDate;

                if (calendarType === 'to') {
                  const event = new CustomEvent('to-date-selected', {
                    detail: displayDate,
                    bubbles: true,
                    composed: true
                  });
                  this.dispatchEvent(event);
                }
              });
            }

            if (selectToday && isCurrentMonth && d === todayJd && !isBeforeFromDate) {
              if (selectedElement) selectedElement.classList.remove("selected");
              div.classList.add("selected");
              selectedElement = div;
              const formattedDate = `${year}${String(month).padStart(2, '0')}${String(d).padStart(2, '0')}`;
              shadow.querySelector("#selectedDate").textContent = formattedDate;
              shadow.querySelector("#formattedDate").textContent = div.getAttribute("data-date");

              if (calendarType === 'to') {
                const event = new CustomEvent('to-date-selected', {
                  detail: div.getAttribute("data-date"),
                  bubbles: true,
                  composed: true
                });
                this.dispatchEvent(event);
              }
            }

            calendarDays.appendChild(div);
          }

          weekdaysContainer.innerHTML = "";
          weekdays.forEach(d => {
            const div = document.createElement("div");
            div.textContent = d;
            div.classList.add("day", "weekdays");
            div.style.display = "block";
            weekdaysContainer.appendChild(div);
          });

          const nextButton = shadow.querySelector("#nextMonth");
          if (currentJy > todayJy || (currentJy === todayJy && currentJm >= todayJm)) {
            nextButton.style.display = 'none';
          } else {
            nextButton.style.display = 'block';
          }

          console.log(`Calendar days rendered: ${calendarDays.children.length} elements`);
        } catch (e) {
          console.error("Error rendering calendar:", e);
          shadow.querySelector("#calendarDays").innerHTML = "<div>خطا در بارگذاری تقویم</div>";
        }
      };

      const getMonthName = (m) => {
        const names = ["فروردین", "اردیبهشت", "خرداد", "تیر",
                       "مرداد", "شهریور", "مهر", "آبان",
                       "آذر", "دی", "بهمن", "اسفند"];
        return names[m - 1];
      };

      shadow.querySelector("#holidaysButton").addEventListener("click", () => {
          vaction = []
        try {
          if(this.vactionIn){

            vaction = this.vactionIn;
            renderCalendar(currentJy, currentJm);
          }
        } catch (e) {
          console.error("Error loading holidays:", e);
          vaction = []
          renderCalendar(currentJy, currentJm);
        }
      });

      shadow.querySelector("#prevMonth").addEventListener("click", () => {
        currentJm--;
        if (currentJm < 1) { currentJm = 12; currentJy--; }
        renderCalendar(currentJy, currentJm);
      });

      shadow.querySelector("#nextMonth").addEventListener("click", () => {
        currentJm++;
        if (currentJm > 12) { currentJm = 1; currentJy++; }
        renderCalendar(currentJy, currentJm);
      });

      shadow.querySelector("#monthName").addEventListener("click", () => {
        const yearDropdown = shadow.querySelector('.dropdown[data-type="year"]');
        if (yearDropdown) yearDropdown.remove();

        const monthDropdown = shadow.querySelector('.dropdown[data-type="month"]');
        if (monthDropdown) {
          monthDropdown.remove();
        } else {
          closeDropdowns();
          createMonthDropdown();
        }
      });

      shadow.querySelector("#yearNumber").addEventListener("click", () => {
        const monthDropdown = shadow.querySelector('.dropdown[data-type="month"]');
        if (monthDropdown) monthDropdown.remove();

        const yearDropdown = shadow.querySelector('.dropdown[data-type="year"]');
        if (yearDropdown) {
          yearDropdown.remove();
        } else {
          closeDropdowns();
          createYearDropdown();
        }
      });

      const closeDropdowns = () => {
        shadow.querySelectorAll(".dropdown").forEach(d => d.remove());
      };

      const createMonthDropdown = () => {
        const dropdown = document.createElement("div");
        dropdown.classList.add("dropdown");
        dropdown.dataset.type = "month";

        const title = document.createElement("p");
        title.textContent = "ماه مورد نظر را انتخاب کنید.";
        title.style.color = "#000000";
        title.style.fontWeight = "bold";
        dropdown.appendChild(title);

        const monthList = document.createElement("div");
        monthList.classList.add("month-list");

        for (let i = 1; i <= 12; i++) {
          const label = document.createElement("label");
          const radio = document.createElement("input");
          radio.type = "radio";
          radio.name = "month";
          radio.value = i;
          if (i === currentJm) radio.checked = true;

          const isCurrentYear = currentJy === todayJy;
          const isFutureYear = currentJy > todayJy;
          const isFutureMonth = isCurrentYear && i > todayJm;

          let isBeforeFromMonth = false;
          if (calendarType === 'to' && fromDate) {
            const [fromYear, fromMonth] = fromDate.split('/').map(Number);
            isBeforeFromMonth = currentJy < fromYear || (currentJy === fromYear && i < fromMonth);
          }

          if (isFutureMonth || isFutureYear || isBeforeFromMonth) {
            label.classList.add("disabled");
            radio.disabled = true;
          } else {
            radio.addEventListener("change", () => {
              currentJm = i;
              renderCalendar(currentJy, currentJm);
              dropdown.remove();
            });
          }

          label.appendChild(radio);
          label.append(` ${getMonthName(i)}`);
          monthList.appendChild(label);
        }

        dropdown.appendChild(monthList);
        shadow.querySelector(".calendar").appendChild(dropdown);
        positionDropdown(dropdown);
      };

      const createYearDropdown = () => {
        const dropdown = document.createElement("div");
        dropdown.classList.add("dropdown");
        dropdown.dataset.type = "year";

        const title = document.createElement("p");
        title.textContent = "سال مورد نظر را انتخاب کنید.";
        title.style.color = "#000000";
        title.style.fontWeight = "bold";
        dropdown.appendChild(title);

        const yearList = document.createElement("div");
        yearList.classList.add("year-list");

        for (let y = todayJy; y >= 1300; y--) {
          const item = document.createElement("div");
          item.classList.add("year-item");
          item.textContent = y;

          let isBeforeFromYear = false;
          if (calendarType === 'to' && fromDate) {
            const [fromYear] = fromDate.split('/').map(Number);
            isBeforeFromYear = y < fromYear;
          }

          if (isBeforeFromYear) {
            item.classList.add("disabled");
          } else {
            item.addEventListener("click", () => {
              currentJy = y;
              renderCalendar(currentJy, currentJm);
              dropdown.remove();
            });
          }

          yearList.appendChild(item);
        }

        dropdown.appendChild(yearList);
        shadow.querySelector(".calendar").appendChild(dropdown);
        positionDropdown(dropdown);
      };

      const positionDropdown = (dropdown) => {
        const header = shadow.querySelector(".header");
        const calendar = shadow.querySelector(".calendar");
        const calendarRect = calendar.getBoundingClientRect();

        const top = header.offsetHeight + 15;
        dropdown.style.position = "absolute";
        dropdown.style.top = top + "px";
        dropdown.style.bottom = "40px";
        dropdown.style.right = "10px";
        dropdown.style.left = "10px";
      };

      shadow.querySelector("#todayButton").addEventListener("click", () => {
        currentJy = todayJy;
        currentJm = todayJm;
        renderCalendar(currentJy, currentJm, true);
      });

      shadow.querySelector("#confirmButton").addEventListener("click", () => {
        const displayDate = shadow.querySelector("#formattedDate").textContent;
        if (displayDate) {
          const event = new CustomEvent('confirm-date-selected', {
            detail: displayDate,
            bubbles: true,
            composed: true
          });
          this.dispatchEvent(event);
          
          const selectedDate = shadow.querySelector('#selectedDate');
          const formattedDate = shadow.querySelector('#formattedDate');
          this.textBox1.control.value = selectedDate.textContent;
          this.textBox2.control.value = formattedDate.textContent;

          const fromCalendar = document.querySelector(`shamsi-calendar-from${suffix}`);

          function updateFromCalendar() {
            const selectedDate = shadow.querySelector('#formattedDate').textContent;
            if (selectedDate && fromCalendar && selectedDate !== '') {
              fromCalendar[`setToDate${suffix}`](selectedDate);
            }
          }
          const intervalId = setInterval(updateFromCalendar, 1000);

          setTimeout(() => {
            clearInterval(intervalId);
            console.log('Interval متوقف شد.');
          }, 2000);

          this.htmllabel.hidden = true ;
        }
      });

      shadow.querySelector("#closeButton").addEventListener("click", () => {
        const event = new CustomEvent('calendar-closed', {
          bubbles: true,
          composed: true
        });
        this.dispatchEvent(event);

        this.htmllabel.hidden = true ;
      });

      try {
        renderCalendar(currentJy, currentJm, true);
      } catch (e) {
        console.error("Initial render failed:", e);
        shadow.querySelector("#calendarDays").innerHTML = "<div>خطا در بارگذاری تقویم</div>";
      }
    }
  }

  if (!customElements.get(tagName)) {
    customElements.define(tagName, DynamicShamsiCalendarTo);
  }
}

function createShamsiCalendarFrom(suffix) {
  !(function (e) {
    if ("object" == typeof exports && "undefined" != typeof module)
      module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
      ("undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this
      ).jalaali = e();
    }
  })(function () {
    return (function e(n, r, t) {
      function a(i, u) {
        if (!r[i]) {
          if (!n[i]) {
            var f = "function" == typeof require && require;
            if (!u && f) return f(i, !0);
            if (o) return o(i, !0);
            var l = new Error("Cannot find module '" + i + "'");
            throw ((l.code = "MODULE_NOT_FOUND"), l);
          }
          var c = (r[i] = { exports: {} });
          n[i][0].call(
            c.exports,
            function (e) {
              return a(n[i][1][e] || e);
            },
            c,
            c.exports,
            e,
            n,
            r,
            t
          );
        }
        return r[i].exports;
      }
      for (
        var o = "function" == typeof require && require, i = 0;
        i < t.length;
        i++
      )
        a(t[i]);
      return a;
    })(
      {
        1: [
          function (e, n, r) {
            n.exports = {
              toJalaali: function (e, n, r) {
                "[object Date]" === Object.prototype.toString.call(e) &&
                  ((r = e.getDate()),
                  (n = e.getMonth() + 1),
                  (e = e.getFullYear()));
                return l(c(e, n, r));
              },
              toGregorian: a,
              isValidJalaaliDate: function (e, n, r) {
                return (
                  e >= -61 &&
                  e <= 3177 &&
                  n >= 1 &&
                  n <= 12 &&
                  r >= 1 &&
                  r <= i(e, n)
                );
              },
              isLeapJalaaliYear: o,
              jalaaliMonthLength: i,
              jalCal: u,
              j2d: f,
              d2j: l,
              g2d: c,
              d2g: d,
              jalaaliToDateObject: g,
              jalaaliWeek: function (e, n, r) {
                var t = g(e, n, r).getDay(),
                  a = 6 == t ? 0 : -(t + 1),
                  o = 6 + a;
                return { saturday: l(f(e, n, r + a)), friday: l(f(e, n, r + o)) };
              },
            };
            var t = [
              -61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060,
              2097, 2192, 2262, 2324, 2394, 2456, 3178,
            ];
            function a(e, n, r) {
              return d(f(e, n, r));
            }
            function o(e) {
              return (
                0 ===
                (function (e) {
                  var n,
                    r,
                    a,
                    o,
                    i,
                    u = t.length,
                    f = t[0];
                  if (e < f || e >= t[u - 1])
                    throw new Error("Invalid Jalaali year " + e);
                  for (i = 1; i < u && ((r = (n = t[i]) - f), !(e < n)); i += 1)
                    f = n;
                  r - (o = e - f) < 6 && (o = o - r + 33 * y(r + 4, 33));
                  -1 === (a = p(p(o + 1, 33) - 1, 4)) && (a = 4);
                  return a;
                })(e)
              );
            }
            function i(e, n) {
              return n <= 6 ? 31 : n <= 11 || o(e) ? 30 : 29;
            }
            function u(e, n) {
              var r,
                a,
                o,
                i,
                u,
                f,
                l = t.length,
                c = e + 621,
                d = -14,
                g = t[0];
              if (e < g || e >= t[l - 1])
                throw new Error("Invalid Jalaali year " + e);
              for (f = 1; f < l && ((a = (r = t[f]) - g), !(e < r)); f += 1)
                (d = d + 8 * y(a, 33) + y(p(a, 33), 4)), (g = r);
              return (
                (d = d + 8 * y((u = e - g), 33) + y(p(u, 33) + 3, 4)),
                4 === p(a, 33) && a - u == 4 && (d += 1),
                (i = 20 + d - (y(c, 4) - y(3 * (y(c, 100) + 1), 4) - 150)),
                n
                  ? { gy: c, march: i }
                  : (a - u < 6 && (u = u - a + 33 * y(a + 4, 33)),
                    -1 === (o = p(p(u + 1, 33) - 1, 4)) && (o = 4),
                    { leap: o, gy: c, march: i })
              );
            }
            function f(e, n, r) {
              var t = u(e, !0);
              return (
                c(t.gy, 3, t.march) + 31 * (n - 1) - y(n, 7) * (n - 7) + r - 1
              );
            }
            function l(e) {
              var n,
                r = d(e).gy,
                t = r - 621,
                a = u(t, !1);
              if ((n = e - c(r, 3, a.march)) >= 0) {
                if (n <= 185)
                  return { jy: t, jm: 1 + y(n, 31), jd: p(n, 31) + 1 };
                n -= 186;
              } else (t -= 1), (n += 179), 1 === a.leap && (n += 1);
              return { jy: t, jm: 7 + y(n, 30), jd: p(n, 30) + 1 };
            }
            function c(e, n, r) {
              var t =
                y(1461 * (e + y(n - 8, 6) + 100100), 4) +
                y(153 * p(n + 9, 12) + 2, 5) +
                r -
                34840408;
              return (t = t - y(3 * y(e + 100100 + y(n - 8, 6), 100), 4) + 752);
            }
            function d(e) {
              var n, r, t, a;
              return (
                (n =
                  (n = 4 * e + 139361631) +
                  4 * y(3 * y(4 * e + 183187720, 146097), 4) -
                  3908),
                (r = 5 * y(p(n, 1461), 4) + 308),
                (t = y(p(r, 153), 5) + 1),
                (a = p(y(r, 153), 12) + 1),
                { gy: y(n, 1461) - 100100 + y(8 - a, 6), gm: a, gd: t }
              );
            }
            function g(e, n, r, t, o, i, u) {
              var f = a(e, n, r);
              return new Date(
                f.gy,
                f.gm - 1,
                f.gd,
                t || 0,
                o || 0,
                i || 0,
                u || 0
              );
            }
            function y(e, n) {
              return ~~(e / n);
            }
            function p(e, n) {
              return e - ~~(e / n) * n;
            }
          },
          {},
        ],
        2: [
          function (e, n, r) {
            n.exports = e("./index.js");
          },
          { "./index.js": 1 },
        ],
      },
      {},
      [2]
    )(2);
  });

  const tagName = `shamsi-calendar-from${suffix}`;
  const setMethodName = `setToDate${suffix}`;

  class DynamicShamsiCalendarFrom extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });

      const wrapper = document.createElement('div');
      wrapper.innerHTML = `
        <style>
          @font-face {
            font-family: 'IranSans';
            src: url('https://cdn.fontcdn.ir/Font/Persian/Sans/IRANSansWeb.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }

          :host {
            font-family: 'IranSans', sans-serif;
            direction: rtl;
            display: inline-block;
            width: 200px;
            min-width: 200px;
            padding: 3px;
            box-sizing: border-box;
          }

          .calendar {
            background: white;
            border-radius: 6.67px;
            padding: 10px;
            padding-bottom: 40px;
            box-shadow: 0 1.33px 5.33px rgba(0,0,0,0.1);
            width: 100%;
            position: relative;
            box-sizing: border-box;
            font-size: clamp(8px, 3.2vw, 9.33px);
          }

          .header {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 6.67px;
            position: relative;
          }

          .header button {
            background: #4CAF50;
            border: none;
            color: white;
            padding: 3.33px 6.67px;
            border-radius: 3.33px;
            cursor: pointer;
            transition: background 0.2s;
            position: absolute;
            top: 0;
            font-family: 'IranSans', sans-serif;
            font-size: inherit;
          }

          #prevMonth { right: 0; }
          #nextMonth { left: 0; }
          .header button:hover { background: #388E3C; }

          #monthYear {
            display: flex;
            gap: 5.33px;
            cursor: pointer;
            font-weight: bold;
          }

          #monthName, #yearNumber {
            padding: 1.33px 4px;
            border-radius: 2.67px;
            color: #000000;
            font-weight: bold;
          }

          #monthName:hover, #yearNumber:hover {
            background: #C8E6C9;
          }

          .days {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 3.33px;
          }

          .day {
            text-align: center;
            padding: 5.33px;
            border-radius: 3.33px;
            background: #eee;
            cursor: pointer;
            transition: background 0.2s;
            font-size: inherit;
            color: #333;
            display: block;
          }

          .day:hover { background: #C8E6C9; }
          .weekdays {
            font-weight: bold;
            background: none;
            cursor: default;
            color: #333;
            display: block;
          }
          .weekdays:hover { background: none; }
          .selected { background: skyblue !important; }
          .holiday { color: red !important; background: #eee; }
          .holiday:hover { background: #C8E6C9 !important; }
          .holiday.disabled { 
            background: #f5f5f5 !important; 
            color: #ff6666 !important; 
            cursor: not-allowed; 
            pointer-events: none; 
          }
          .holiday.disabled:hover { background: #f5f5f5 !important; }
          .selected.holiday { color: red !important; background: skyblue !important; }

          .disabled {
            background: #f5f5f5;
            color: #bbb;
            cursor: not-allowed;
            pointer-events: none;
          }

          #selectedDate, #formattedDate {
            margin-top: 10px;
            font-weight: bold;
            text-align: center;
            color: #2E7D32;
            font-size: inherit;
            display: none;
          }

          .dropdown {
            position: absolute;
            background: #f1f8e9;
            border: 0.67px solid #ccc;
            border-radius: 5.33px;
            padding: 6.67px;
            box-shadow: 0 2.67px 8px rgba(0,0,0,0.15);
            z-index: 10;
            max-width: calc(100% - 20px);
            box-sizing: border-box;
          }

          .month-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 3.33px 10px;
            font-size: clamp(7.33px, 2.8vw, 8.67px);
          }

          .month-list label {
            display: block;
            padding: 5px;
            border: 1px solid #ddd;
            border-radius: 3.33px;
            text-align: center;
            cursor: pointer;
            color: #000000;
            font-weight: bold;
          }

          .month-list label:hover {
            background: #C8E6C9;
          }

          .month-list input {
            display: none;
          }

          .month-list label.disabled {
            color: #bbb;
            cursor: not-allowed;
            pointer-events: none;
            background: #f5f5f5;
          }

          .year-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 3.33px 10px;
            max-height: 100px;
            overflow-y: auto;
            font-size: clamp(7.33px, 2.8vw, 8.67px);
          }

          .year-item {
            padding: 5px;
            border: 1px solid #ddd;
            border-radius: 3.33px;
            text-align: center;
            cursor: pointer;
            color: #000000;
            font-weight: bold;
          }

          .year-item:hover {
            background: #C8E6C9;
          }

          .year-item.disabled {
            color: #bbb;
            cursor: not-allowed;
            pointer-events: none;
            background: #f5f5f5;
          }

          #todayButton {
            position: absolute;
            bottom: 11px;
            right: 10px;
            background: #4CAF50;
            color: white;
            border: none;
            padding: 3.33px 6.67px;
            border-radius: 3.33px;
            cursor: pointer;
            font-family: 'IranSans', sans-serif;
            font-size: inherit;
          }

          #todayButton:hover { background: #388E3C; }

          .footer-buttons {
            position: absolute;
            bottom: 11px;
            left: 10px;
            display: flex;
            gap: 5px;
            justify-content: flex-start;
          }

          #confirmButton {
            background: #4CAF50;
            color: white;
            border: none;
            padding: 3.33px 6.67px;
            border-radius: 3.33px;
            cursor: pointer;
            font-family: 'IranSans', sans-serif;
            font-size: inherit;
          }

          #holidaysButton {
            background: #4CAF50;
            color: white;
            border: none;
            padding: 3.33px 6.67px;
            border-radius: 3.33px;
            cursor: pointer;
            font-family: 'IranSans', sans-serif;
            font-size: inherit;
            display: none;
          }

          #confirmButton:hover, #holidaysButton:hover {
            background: #388E3C;
          }

          #closeButton {
            background: #F44336;
            color: white;
            border: none;
            padding: 3.33px 6.67px;
            border-radius: 3.33px;
            cursor: pointer;
            font-family: 'IranSans', sans-serif;
            font-size: inherit;
          }

          #closeButton:hover {
            background: #D32F2F;
          }
        </style>

        <div class="calendar">
          <div class="header">
            <button id="prevMonth">ماه قبل</button>
            <div id="monthYear">
              <span id="monthName"></span>
              <span id="yearNumber"></span>
            </div>
            <button id="nextMonth">ماه بعد</button>
          </div>
          <div class="days" id="weekdays"></div>
          <div class="days" id="calendarDays"></div>
          <button id="todayButton">امروز</button>
          <div class="footer-buttons">
            <button id="closeButton">بستن</button>
            <button id="confirmButton">تأیید</button>
            <button id="holidaysButton">تعطیلات</button>
          </div>
          <p id="selectedDate"></p>
          <p id="formattedDate"></p>
        </div>
      `;

      shadow.appendChild(wrapper);

      const weekdays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
      const weekdaysContainer = shadow.querySelector("#weekdays");
      weekdaysContainer.innerHTML = "";
      weekdays.forEach(d => {
        const div = document.createElement("div");
        div.textContent = d;
        div.classList.add("day", "weekdays");
        div.style.display = "block";
        weekdaysContainer.appendChild(div);
      });

      let today = new Date();
      let todayJalali;
      try {
        todayJalali = jalaali.toJalaali(today);
      } catch (e) {
        console.error("Jalaali-js failed to load or execute:", e);
        todayJalali = { jy: 1404, jm: 5, jd: 24 };
      }
      let todayJy = todayJalali.jy;
      let currentJy = todayJy;
      let todayJm = todayJalali.jm;
      let currentJm = todayJm;
      let todayJd = todayJalali.jd;

      let selectedElement = null;
      let toDate = null;
      const calendarType = this.getAttribute('type');
      let vaction = [];

      this[setMethodName] = function(date) {
        if (calendarType === 'from') {
          toDate = date;
          renderCalendar(currentJy, currentJm);
        }
      };

      const renderCalendar = (year, month, selectToday = false) => {
        try {
          shadow.querySelector("#monthName").textContent = getMonthName(month);
          shadow.querySelector("#yearNumber").textContent = year;

          const calendarDays = shadow.querySelector("#calendarDays");
          calendarDays.innerHTML = "";

          let firstDay, daysInMonth, firstDate, startDay;
          try {
            firstDay = jalaali.toGregorian(year, month, 1);
            firstDate = new Date(firstDay.gy, firstDay.gm - 1, firstDay.gd);
            startDay = (firstDate.getDay() + 1) % 7;
            daysInMonth = jalaali.jalaaliMonthLength(year, month);
          } catch (e) {
            console.error("Error in jalaali calculations:", e);
            firstDay = { gy: 2025, gm: month, gd: 1 };
            firstDate = new Date(2025, month - 1, 1);
            startDay = (firstDate.getDay() + 1) % 7;
            daysInMonth = 31;
          }

          console.log(`Rendering calendar: Year=${year}, Month=${month}, StartDay=${startDay}, DaysInMonth=${daysInMonth}`);

          for (let i = 0; i < startDay; i++) {
            const emptyDiv = document.createElement("div");
            emptyDiv.classList.add("empty-day");
            calendarDays.appendChild(emptyDiv);
          }

          for (let d = 1; d <= daysInMonth; d++) {
            const div = document.createElement("div");
            div.textContent = d;
            div.setAttribute("data-date", `${year}/${month}/${d}`);
            div.classList.add("day");
            div.style.display = "block";

            const currentDate = `${year}/${month}/${d}`;
            const isHoliday = vaction.includes(currentDate);
            if (isHoliday) {
              div.classList.add("holiday");
              console.log(`Holiday detected: ${currentDate}`);
            }

            const isCurrentMonth = year === todayJy && month === todayJm;
            const isFutureMonth = year > todayJy || (year === todayJy && month > todayJm);
            const isFutureDay = isCurrentMonth && d > todayJd;

            let isAfterToDate = false;
            if (calendarType === 'from' && toDate) {
              const [toYear, toMonth, toDay] = toDate.split('/').map(Number);
              isAfterToDate = year > toYear || 
                              (year === toYear && month > toMonth) || 
                              (year === toYear && month === toMonth && d > toDay);
            }

            if (isFutureDay || isFutureMonth || isAfterToDate) {
              div.classList.add("disabled");
              if (isHoliday) {
                div.classList.add("holiday");
              }
            } else {
              div.addEventListener("click", () => {
                if (selectedElement) selectedElement.classList.remove("selected");
                div.classList.add("selected");
                selectedElement = div;

                const formattedDate = `${year}${String(month).padStart(2, '0')}${String(d).padStart(2, '0')}`;
                const displayDate = div.getAttribute("data-date");
                shadow.querySelector("#selectedDate").textContent = formattedDate;
                shadow.querySelector("#formattedDate").textContent = displayDate;

                if (calendarType === 'from') {
                  const event = new CustomEvent('from-date-selected', {
                    detail: displayDate,
                    bubbles: true,
                    composed: true
                  });
                  this.dispatchEvent(event);
                }
              });
            }

            if (selectToday && isCurrentMonth && d === todayJd && !isAfterToDate) {
              if (selectedElement) selectedElement.classList.remove("selected");
              div.classList.add("selected");
              selectedElement = div;
              const formattedDate = `${year}${String(month).padStart(2, '0')}${String(d).padStart(2, '0')}`;
              shadow.querySelector("#selectedDate").textContent = formattedDate;
              shadow.querySelector("#formattedDate").textContent = div.getAttribute("data-date");

              if (calendarType === 'from') {
                const event = new CustomEvent('from-date-selected', {
                  detail: div.getAttribute("data-date"),
                  bubbles: true,
                  composed: true
                });
                this.dispatchEvent(event);
              }
            }

            calendarDays.appendChild(div);
          }

          weekdaysContainer.innerHTML = "";
          weekdays.forEach(d => {
            const div = document.createElement("div");
            div.textContent = d;
            div.classList.add("day", "weekdays");
            div.style.display = "block";
            weekdaysContainer.appendChild(div);
          });

          const nextButton = shadow.querySelector("#nextMonth");
          if (currentJy > todayJy || (currentJy === todayJy && currentJm >= todayJm)) {
            nextButton.style.display = 'none';
          } else {
            nextButton.style.display = 'block';
          }

          console.log(`Calendar days rendered: ${calendarDays.children.length} elements`);
        } catch (e) {
          console.error("Error rendering calendar:", e);
          shadow.querySelector("#calendarDays").innerHTML = "<div>خطا در بارگذاری تقویم</div>";
        }
      };

      const getMonthName = (m) => {
        const names = ["فروردین", "اردیبهشت", "خرداد", "تیر",
                       "مرداد", "شهریور", "مهر", "آبان",
                       "آذر", "دی", "بهمن", "اسفند"];
        return names[m - 1];
      };

      shadow.querySelector("#holidaysButton").addEventListener("click", () => {
        vaction = [];
        try {
          if (this.vactionIn) {
            vaction = this.vactionIn;
            renderCalendar(currentJy, currentJm);
          }
        } catch (e) {
          console.error("Error loading holidays:", e);
          vaction = [];
          renderCalendar(currentJy, currentJm);
        }
      });

      shadow.querySelector("#prevMonth").addEventListener("click", () => {
        currentJm--;
        if (currentJm < 1) { currentJm = 12; currentJy--; }
        renderCalendar(currentJy, currentJm);
      });

      shadow.querySelector("#nextMonth").addEventListener("click", () => {
        currentJm++;
        if (currentJm > 12) { currentJm = 1; currentJy++; }
        renderCalendar(currentJy, currentJm);
      });

      shadow.querySelector("#monthName").addEventListener("click", () => {
        const yearDropdown = shadow.querySelector('.dropdown[data-type="year"]');
        if (yearDropdown) yearDropdown.remove();

        const monthDropdown = shadow.querySelector('.dropdown[data-type="month"]');
        if (monthDropdown) {
          monthDropdown.remove();
        } else {
          closeDropdowns();
          createMonthDropdown();
        }
      });

      shadow.querySelector("#yearNumber").addEventListener("click", () => {
        const monthDropdown = shadow.querySelector('.dropdown[data-type="month"]');
        if (monthDropdown) monthDropdown.remove();

        const yearDropdown = shadow.querySelector('.dropdown[data-type="year"]');
        if (yearDropdown) {
          yearDropdown.remove();
        } else {
          closeDropdowns();
          createYearDropdown();
        }
      });

      const closeDropdowns = () => {
        shadow.querySelectorAll(".dropdown").forEach(d => d.remove());
      };

      const createMonthDropdown = () => {
        const dropdown = document.createElement("div");
        dropdown.classList.add("dropdown");
        dropdown.dataset.type = "month";

        const title = document.createElement("p");
        title.textContent = "ماه مورد نظر را انتخاب کنید.";
        title.style.color = "#000000";
        title.style.fontWeight = "bold";
        dropdown.appendChild(title);

        const monthList = document.createElement("div");
        monthList.classList.add("month-list");

        for (let i = 1; i <= 12; i++) {
          const label = document.createElement("label");
          const radio = document.createElement("input");
          radio.type = "radio";
          radio.name = "month";
          radio.value = i;
          if (i === currentJm) radio.checked = true;

          const isCurrentYear = currentJy === todayJy;
          const isFutureYear = currentJy > todayJy;
          const isFutureMonth = isCurrentYear && i > todayJm;

          let isAfterToMonth = false;
          if (calendarType === 'from' && toDate) {
            const [toYear, toMonth] = toDate.split('/').map(Number);
            isAfterToMonth = currentJy > toYear || (currentJy === toYear && i > toMonth);
          }

          if (isFutureMonth || isFutureYear || isAfterToMonth) {
            label.classList.add("disabled");
            radio.disabled = true;
          } else {
            radio.addEventListener("change", () => {
              currentJm = i;
              renderCalendar(currentJy, currentJm);
              dropdown.remove();
            });
          }

          label.appendChild(radio);
          label.append(` ${getMonthName(i)}`);
          monthList.appendChild(label);
        }

        dropdown.appendChild(monthList);
        shadow.querySelector(".calendar").appendChild(dropdown);
        positionDropdown(dropdown);
      };

      const createYearDropdown = () => {
        const dropdown = document.createElement("div");
        dropdown.classList.add("dropdown");
        dropdown.dataset.type = "year";

        const title = document.createElement("p");
        title.textContent = "سال مورد نظر را انتخاب کنید.";
        title.style.color = "#000000";
        title.style.fontWeight = "bold";
        dropdown.appendChild(title);

        const yearList = document.createElement("div");
        yearList.classList.add("year-list");

        for (let y = todayJy; y >= 1300; y--) {
          const item = document.createElement("div");
          item.classList.add("year-item");
          item.textContent = y;

          let isAfterToYear = false;
          if (calendarType === 'from' && toDate) {
            const [toYear] = toDate.split('/').map(Number);
            isAfterToYear = y > toYear;
          }

          if (isAfterToYear) {
            item.classList.add("disabled");
          } else {
            item.addEventListener("click", () => {
              currentJy = y;
              renderCalendar(currentJy, currentJm);
              dropdown.remove();
            });
          }

          yearList.appendChild(item);
        }

        dropdown.appendChild(yearList);
        shadow.querySelector(".calendar").appendChild(dropdown);
        positionDropdown(dropdown);
      };

      const positionDropdown = (dropdown) => {
        const header = shadow.querySelector(".header");
        const calendar = shadow.querySelector(".calendar");
        const calendarRect = calendar.getBoundingClientRect();

        const top = header.offsetHeight + 15;
        dropdown.style.position = "absolute";
        dropdown.style.top = top + "px";
        dropdown.style.bottom = "40px";
        dropdown.style.right = "10px";
        dropdown.style.left = "10px";
      };

      shadow.querySelector("#todayButton").addEventListener("click", () => {
        currentJy = todayJy;
        currentJm = todayJm;
        renderCalendar(currentJy, currentJm, true);
      });

      shadow.querySelector("#confirmButton").addEventListener("click", () => {
        const displayDate = shadow.querySelector("#formattedDate").textContent;
        if (displayDate) {
          const event = new CustomEvent('confirm-date-selected', {
            detail: displayDate,
            bubbles: true,
            composed: true
          });
          this.dispatchEvent(event);

          const selectedDate = shadow.querySelector('#selectedDate');
          const formattedDate = shadow.querySelector('#formattedDate');
          this.textBox1.control.value = selectedDate.textContent;
          this.textBox2.control.value = formattedDate.textContent;

          const toCalendar = document.querySelector(`shamsi-calendar-to${suffix}`);

          function updateToCalendar() {
            const selectedDate = shadow.querySelector('#formattedDate').textContent;
            if (selectedDate && toCalendar && selectedDate !== '') {
              toCalendar[`setFromDate${suffix}`](selectedDate);
            }
          }
          const intervalId = setInterval(updateToCalendar, 1000);

          setTimeout(() => {
            clearInterval(intervalId);
            console.log('Interval متوقف شد.');
          }, 2000);
          this.htmllabel.hidden = true;
        }
      });

      shadow.querySelector("#closeButton").addEventListener("click", () => {
        const event = new CustomEvent('calendar-closed', {
          bubbles: true,
          composed: true
        });
        this.dispatchEvent(event);
        this.htmllabel.hidden = true;
      });

      try {
        renderCalendar(currentJy, currentJm, true);
      } catch (e) {
        console.error("Initial render failed:", e);
        shadow.querySelector("#calendarDays").innerHTML = "<div>خطا در بارگذاری تقویم</div>";
      }
    }
  }

  if (!customElements.get(tagName)) {
    customElements.define(tagName, DynamicShamsiCalendarFrom);
  }
}