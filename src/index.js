function updateTime(){
// Los Angeles

let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement.length){
losAngelesDateElement = losAngelesElement.querySelector(".date");
losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = `${losAngelesTime.format('h:mm:ss [<small>]A[</small>]')}`;
}
// Lagos

let lagosElement = document.querySelector("#lagos");
if (lagosElement.length){
lagosDateElement = lagosElement.querySelector(".date");
lagosTimeElement = lagosElement.querySelector(".time");
let lagosTime = moment().tz("Africa/Lagos");

lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
lagosTimeElement.innerHTML = `${lagosTime.format('h:mm:ss [<small>]A[</small>]')}`;
}
// Tokyo

let tokyoElement = document.querySelector("#tokyo");
if (tokyoElement.length){
tokyoDateElement = tokyoElement.querySelector(".date");
tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML = `${tokyoTime.format('h:mm:ss [<small>]A[</small>]')}`;
}

}

updateTime();
setInterval(updateTime, 1000)

function updateCity(event){
let citiesTimeZone = event.target.value;
let citiesTime = moment().tz(citiesTimeZone);
cityName = citiesTimeZone.split("/")[1]
let cityElement = document.querySelector("#city")
cityElement.innerHTML = ` 
<div class="city">
<div>
  <h2>${cityName}</h2>
  <div class="date">${citiesTime.format("MMMM Do YYYY")}</div>
</div>
<div class="time">${citiesTime.format('h:mm:ss [<small>]A[</small>]')}
</div>`

}

let citiesSelect = document.querySelector("#cities");
citiesSelect.addEventListener("change", updateCity);