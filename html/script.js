document.addEventListener('DOMContentLoaded', function() {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  const monthPicker = document.getElementById('month-picker');
  const yearSpan = document.getElementById('year');
  monthPicker.textContent = monthNames[currentMonth];
  yearSpan.textContent = currentYear;

  function renderDays(month, year) {
    const daysDiv = document.querySelector('.calendar-days');
    daysDiv.innerHTML = '';
    let firstDay = new Date(year, month, 1).getDay();
    let lastDate = new Date(year, month + 1, 0).getDate();
    for (let i = 0; i < firstDay; i++) {
      daysDiv.innerHTML += '<div></div>';
    }
    for (let d = 1; d <= lastDate; d++) {
      daysDiv.innerHTML += `<div>${d}</div>`;
    }
  }
  renderDays(currentMonth, currentYear);

  document.getElementById('pre-year').onclick = function() {
    currentYear--;
    yearSpan.textContent = currentYear;
    renderDays(currentMonth, currentYear);
  };
  document.getElementById('next-year').onclick = function() {
    currentYear++;
    yearSpan.textContent = currentYear;
    renderDays(currentMonth, currentYear);
  };
  monthPicker.onclick = function() {
    currentMonth = (currentMonth + 1) % 12;
    monthPicker.textContent = monthNames[currentMonth];
    renderDays(currentMonth, currentYear);
  };

  function updateTime() {
    const timeDiv = document.querySelector('.time-formate');
    const dateDiv = document.querySelector('.date-formate');
    let now = new Date();
    timeDiv.textContent = now.toLocaleTimeString('tr-TR');
    dateDiv.textContent = `${now.getDate()} - ${monthNames[now.getMonth()]} - ${now.getFullYear()}`;
  }
  setInterval(updateTime, 1000);
  updateTime();
});
