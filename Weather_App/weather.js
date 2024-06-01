// Clé API pour accéder à l'API OpenWeatherMap
const apiKey = "1879c1f02fcfd3d02ac348cf1f4f5c99";

// URL de base pour les requêtes à l'API OpenWeatherMap
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Sélection des éléments HTML pour la barre de recherche et le bouton de recherche
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

// Sélection de l'élément HTML pour l'icône météo
const weatherIcon = document.querySelector(".weather-icon");

// Fonction asynchrone pour récupérer les données météorologiques d'une ville donnée
async function checkWeather(city) {
  try {
    // Récupération des données météorologiques à partir de l'API OpenWeatherMap
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    // Vérification du code de réponse de l'API
    if (response.status === 404) {
      // Affichage d'un message d'erreur si la ville n'est pas trouvée
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      // Mise à jour des éléments HTML avec les données météorologiques récupérées
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

      // Mise à jour de l'icône météo en fonction des conditions météorologiques
      switch (data.weather[0].main) {
        case "Clouds":
          weatherIcon.src = "Images/cloud.png";
          break;
        case "Clear":
          weatherIcon.src = "Images/sunny.png";
          break;
        case "Rain":
          weatherIcon.src = "Images/rain.png";
          break;
        case "Mist":
          weatherIcon.src = "Images/mist.png";
          break;
        case "Snow":
          weatherIcon.src = "Images/snow.png";
          break;
        case "Drizzle":
          weatherIcon.src = "Images/drizzle.png";
          break;
        default:
          weatherIcon.src = "";
      }

      // Affichage des données météorologiques et masquage du message d'erreur
      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
    }
  } catch (error) {
    // Gestion des erreurs lors de la récupération des données météorologiques
    console.error("Error fetching weather data:", error);
  }
}

// Événement click sur le bouton de recherche pour récupérer les données météorologiques
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// Événement keyup sur la barre de recherche pour récupérer les données météorologiques lors de la pression de la touche "Entrée"
searchBox.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
