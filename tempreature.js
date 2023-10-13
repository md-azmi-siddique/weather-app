const apiKey = "1ca9f7d3281f37def411f8dde39f692a"; // Replace with your actual API key
const button = document.getElementById("search");

button.addEventListener("click", searchTemp);

async function searchTemp() {
  try {
    console.log("hit");
    const cityName = document.getElementById("city-name").value; // Use parentheses, not square brackets
    if (!cityName) {
      alert("input a city name");
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    displayTemp(data);
  } catch (error) {
    alert("This city name doesn't exist")
  }

  document.getElementById("city-name").value = "";
}

const setElement =(id, value) =>{
  document.getElementById(id).innerText = value;
}

const displayTemp = (data) => {
  console.log(data);
  setElement('city', data.name)
  setElement('temp', data.main.temp)
  setElement('condition', data.weather[0].main)
};
