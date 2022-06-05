let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let timeInSecondsEl = document.getElementById("timeInSeconds");
let errorMsgEl = document.getElementById("errorMsg");

function convertTime() {
    if (hoursInputEl.value === "") {
        errorMsgEl.textContent = "Please enter a valid number of hours.";
    } else if (minutesInputEl.value === "") {
        errorMsgEl.textContent = "Please enter a valid number of minutes.";
    } else {
        timeInSecondsEl.textContent = hoursInputEl.value * 3600 + minutesInputEl.value * 60;
        errorMsgEl.textContent = "";
    }
}

convertBtnEl.addEventListener("click", convertTime);