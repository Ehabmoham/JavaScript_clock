let day = document.querySelector('.day h2');
let hours = document.querySelector('.hours h2');
let minutes = document.querySelector('.minutes h2');
let seconeds = document.querySelector('.seconeds h2');
let days = ['Sun' , 'Mon' , 'Tue' , 'Wed' , 'Thu' , 'Fri' , 'Sat'];

function updateDate() {
    let date = new Date();
    let dayName = days[date.getDay()];
    let hoursNum = date.getHours() > 12 ?  date.getHours() - 12 : date.getHours();
    let minutesNum = date.getMinutes();
    let seconedsNum = date.getSeconds();

    day.textContent = dayName;
    hours.textContent =  hoursNum < 10 ? `0${hoursNum}` : hoursNum;
    minutes.textContent =  minutesNum < 10 ? `0${minutesNum}` : minutesNum;
    seconeds.textContent =  seconedsNum < 10 ? `0${seconedsNum}` : seconedsNum;
};

setInterval(updateDate , 1000)
