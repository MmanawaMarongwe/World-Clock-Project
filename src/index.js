function updateTime(){
// Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
losAngelesDateElement = losAngelesElement.querySelector(".date");
losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = `${losAngelesTime.format('h:mm:ss [<small>]A[</small>]')}`;

// Lagos
let lagosElement = document.querySelector("#lagos");
lagosDateElement = lagosElement.querySelector(".date");
lagosTimeElement = lagosElement.querySelector(".time");
let lagosTime = moment().tz("Africa/Lagos");

lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
lagosTimeElement.innerHTML = `${lagosTime.format('h:mm:ss [<small>]A[</small>]')}`;

// Tokyo
let tokyoElement = document.querySelector("#tokyo");
tokyoDateElement = tokyoElement.querySelector(".date");
tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML = `${tokyoTime.format('h:mm:ss [<small>]A[</small>]')}`;
}

updateTime();
setInterval(updateTime, 1000)