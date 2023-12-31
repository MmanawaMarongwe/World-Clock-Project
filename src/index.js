function updateTime() {
    // Los Angeles
    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
      let losAngelesDateElement = losAngelesElement.querySelector(".date");
      let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  
        let losAngelesTime = moment().tz("America/Los_Angeles");
        losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
        losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
      
    }
  
    // Lagos
    let lagosElement = document.querySelector("#lagos");
    if (lagosElement) {
      let lagosDateElement = lagosElement.querySelector(".date");
      let lagosTimeElement = lagosElement.querySelector(".time");

        let lagosTime = moment().tz("Africa/Lagos");
        lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
        lagosTimeElement.innerHTML = lagosTime.format("h:mm:ss [<small>]A[</small>]");
    }
  
    // Tokyo
    let tokyoElement = document.querySelector("#tokyo");
    if (tokyoElement) {
      let tokyoDateElement = tokyoElement.querySelector(".date");
      let tokyoTimeElement = tokyoElement.querySelector(".time");
  
    
        let tokyoTime = moment().tz("Asia/Tokyo");
        tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
        tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

    }
  }
  
  function updateCity(event) {
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
        <div class="time">${citiesTime.format('h:mm:ss [<small>]A[</small>]')}</div>
      </div>`
      ;
  }

  updateTime();
  setInterval(updateTime, 1000);
  
  function updateCity(event) {
        let citiesTimeZone = event.target.value;
        if(citiesTimeZone==="current"){
          citiesTimeZone = moment.tz.guess();
        }
        cityName = citiesTimeZone.replace("_"," ").split("/")[1]
        let citiesTime = moment().tz(citiesTimeZone);
        let cityElement = document.querySelector("#city" );
        cityElement.innerHTML = ` 
        <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${citiesTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${citiesTime.format('h:mm:ss [<small>]A[</small>]')}
        </div>
        </div>
        <a href="index.html"> All cities </a>`;
        
  }

  
  let citiesSelect = document.querySelector("#cities");
  citiesSelect.addEventListener("change", updateCity);
  