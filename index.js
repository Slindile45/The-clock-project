function updateTime() {
  let durbanElement = document.querySelector("#Durban");
  let durbanDateElement = durbanElement.querySelector(".date");
  let durbanTimeElement = durbanElement.querySelector(".time");
  let durbanTime = moment().tx("Africa/Johannesburg");

  durbanDateElement.innerHTML = durbanTime.format("MMMM Do YYYY");
  durbanTimeElement.innerHTML = durbanTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );

  let newYorkElement = document.querySelector("#New-York");
  let newYorkDateElement = durbanElement.querySelector(".date");
  let newYorkTimeElement = durbanElement.querySelector(".time");
  let newYorkTime = moment().tx("America/New_York");

  newYorkDateElementDateElement.innerHTML = newYorkTimeTime.format("MMMM Do YYYY");
  newYorkTimeElementTimeElement.innerHTML = newYorkTimeTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
