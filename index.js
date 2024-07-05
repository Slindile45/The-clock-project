function updateTime() {
  let durbanElement = document.querySelector("#Durban");
  if (durbanElement) {
    let durbanDateElement = durbanElement.querySelector(".date");
    let durbanTimeElement = durbanElement.querySelector(".time");
    let durbanTime = moment().tx("Africa/Johannesburg");

    durbanDateElement.innerHTML = durbanTime.format("MMMM Do YYYY");
    durbanTimeElement.innerHTML = durbanTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }

    let newYorkElement = document.querySelector("#New-York");
    if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tx("America/New_York");

    newYorkDateElementDateElement.innerHTML =
      newYorkTime.format("MMMM Do YYYY");
    newYorkTimeElementTimeElement.innerHTML = newYorkTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
   let cityTimeZone = event.target.value;
   if (cityTimeZone === "current") {
    cityTimeZone = moment.tz(guess);
   };
   let cityName = cityTimeZone.replace("_", " ").split("/")[1];
   let cityTime = moment().tz(cityTimeZone);
   let citiesElement = document.querySelector("#cities");
   citiesElement.innerHTML = `<div class="city" id="Durban">
            <div>
            <h2>${cityTimeZone}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">
                ${cityTime.format("HH:mm:ss")} <small>${cityTime.format("A")}</small>
            </div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);