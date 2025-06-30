const apiKey = "2ed8aa897c6d72a405680f8471c1cecf";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&lang=pt_br&q=";
const geoApiUrl = "https://api.openweathermap.org/geo/1.0/direct";

// Seletores
const searchInput = document.getElementById("search-input");
const suggestionsBox = document.getElementById("suggestions");
const searchButton = document.getElementById("search-button");

const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const weatherIcon = document.querySelector(".weather-icon");
const description = document.querySelector(".description");
const country = document.querySelector(".country");

let selectedCity = "";
let suggestions = [];
let activeSuggestionIndex = -1;

// Foco automático no input ao carregar
window.onload = () => {
  searchInput.focus();
};

// Buscar sugestões de cidades
async function fetchCitySuggestions(query) {
  const url = `${geoApiUrl}?q=${query}&limit=5&appid=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Buscar dados do clima
async function checkWeather(cityName) {
  const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);

  if (response.status == 404) {
    alert("Cidade não encontrada");
    return;
  }

  const data = await response.json();

  city.innerHTML = data.name;
  temp.innerHTML = Math.round(data.main.temp) + "°C";
  description.innerHTML = data.weather[0].description;
  country.innerHTML = data.sys.country;

  const weatherMain = data.weather[0].main;

  switch (weatherMain) {
    case "Clear":
      weatherIcon.className = "bi bi-sun-fill weather-icon";
      break;
    case "Clouds":
      weatherIcon.className = "bi bi-cloud-fill weather-icon";
      break;
    case "Rain":
      weatherIcon.className = "bi bi-cloud-rain-fill weather-icon";
      break;
    case "Drizzle":
      weatherIcon.className = "bi bi-cloud-drizzle-fill weather-icon";
      break;
    case "Thunderstorm":
      weatherIcon.className = "bi bi-cloud-lightning-fill weather-icon";
      break;
    case "Snow":
      weatherIcon.className = "bi bi-cloud-snow-fill weather-icon";
      break;
    case "Mist":
    case "Fog":
    case "Smoke":
    case "Haze":
      weatherIcon.className = "bi bi-cloud-fog2-fill weather-icon";
      break;
    default:
      weatherIcon.className = "bi bi-cloud-fill weather-icon";
  }
}

// Renderizar sugestões
function renderSuggestions() {
  suggestionsBox.innerHTML = "";
  suggestions.forEach((suggestion, index) => {
    const div = document.createElement("div");
    div.textContent = `${suggestion.name}${
      suggestion.state ? ", " + suggestion.state : ""
    }, ${suggestion.country}`;
    div.classList.add("suggestion-item");
    if (index === activeSuggestionIndex) {
      div.classList.add("active");
    }

    div.addEventListener("click", () => {
      const cityName = `${suggestion.name}${
        suggestion.state ? ", " + suggestion.state : ""
      }, ${suggestion.country}`;
      searchInput.value = cityName;
      selectedCity = suggestion.name;
      suggestionsBox.innerHTML = "";
    });

    suggestionsBox.appendChild(div);
  });
}

// Evento de digitação
searchInput.addEventListener("input", async () => {
  const inputValue = searchInput.value.trim();

  suggestionsBox.innerHTML = "";
  activeSuggestionIndex = -1;
  suggestions = [];

  if (inputValue.length < 2) {
    return;
  }

  const data = await fetchCitySuggestions(inputValue);
  suggestions = data;
  renderSuggestions();
});

// Navegação com teclado
searchInput.addEventListener("keydown", (e) => {
  if (suggestions.length === 0) return;

  if (e.key === "ArrowDown") {
    e.preventDefault();
    activeSuggestionIndex = (activeSuggestionIndex + 1) % suggestions.length;
    renderSuggestions();
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    activeSuggestionIndex =
      (activeSuggestionIndex - 1 + suggestions.length) % suggestions.length;
    renderSuggestions();
  } else if (e.key === "Enter") {
    e.preventDefault();
    if (activeSuggestionIndex >= 0) {
      const suggestion = suggestions[activeSuggestionIndex];
      const cityName = `${suggestion.name}${
        suggestion.state ? ", " + suggestion.state : ""
      }, ${suggestion.country}`;
      searchInput.value = cityName;
      selectedCity = suggestion.name;
      suggestionsBox.innerHTML = "";
    }
    const cityToSearch = selectedCity || searchInput.value;
    checkWeather(cityToSearch);
  }
});

// Clique no botão de busca
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const cityToSearch = selectedCity || searchInput.value;
  checkWeather(cityToSearch);
});
