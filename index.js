function updateTime() {
  let durbanElement = document.querySelector("#Durban");
  let durbanDateElement = durbanElement.querySelector(".date");
  let durbanTimeElement = durbanElement.querySelector(".time");
  let durbanTime = moment().tx("Africa/Johannesburg");

  durbanDateElement.innerHTML = durbanTime.format("MMMM Do YYYY");
  durbanTimeElement.innerHTML = durbanTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);

alert("hi")