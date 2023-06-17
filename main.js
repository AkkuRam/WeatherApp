async function addCity() {
  // Get the value of the input box
  var cityName = document.getElementById("cityInput").value;

  if (cityName.trim() == "") {
    var errormsg = document.getElementById("InvalidInput");
    errormsg.style.display = "block";
    return;
  }

  // Create a new box element with the city name
  var newBox = document.createElement("div");
  newBox.className = "cityBox";
  newBox.innerText = cityName;

  var weatherElement = document.createElement("p");
  weatherElement.className = "weatherInfo";
  weatherElement.innerText = "Sunny";
  weatherElement.style.display = "none"; 

  var weatherButton = document.createElement("button");
  weatherButton.className = "weatherButton";
  weatherButton.innerText = "Show Weather";
  weatherButton.addEventListener("click", toggleWeather);

  var tempElement = document.createElement("p");
  tempElement.className = "tempInfo";
  tempElement.innerText = "21°";
  tempElement.style.display = "none"; 

  var tempButton = document.createElement("button");
  tempButton.className = "tempButton";
  tempButton.innerText = "Show Temp";
  tempButton.addEventListener("click", toggleTemp);


  newBox.appendChild(weatherButton);
  newBox.appendChild(weatherElement);
  newBox.appendChild(tempButton);
  newBox.appendChild(tempElement);

  // Add the new box element to the cityList div
  var cityList = document.getElementById("cityList");
  cityList.appendChild(newBox);

  // Clear the input box
  document.getElementById("cityInput").value = "";

  var errormsg = document.getElementById("InvalidInput");
  errormsg.style.display = "none";
}

function toggleWeather() {
  var weatherElement = this.parentNode.querySelector(".weatherInfo");
  if (weatherElement.style.display === "none") {
    weatherElement.style.display = "block";
  } else {
    weatherElement.style.display = "none";
  }
}

function toggleTemp() {
  var weatherElement = this.parentNode.querySelector(".tempInfo");
  if (weatherElement.style.display === "none") {
    weatherElement.style.display = "block";
  } else {
    weatherElement.style.display = "none";
  }
}