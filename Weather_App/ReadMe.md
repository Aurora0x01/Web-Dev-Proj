# Application météorologique ☀️⛅

## Introduction (contexte, objectif)

Ce projet consiste en une application météorologique développée en utilisant HTML, CSS et JavaScript. L'objectif principal est de récupérer et d'afficher les données météorologiques en temps réel pour un lieu donné, en utilisant une API externe. Ce projet démontre les compétences acquises dans le domaine de l'utilisation d'API, de la manipulation du DOM et du traitement des structures de données. 💻

## Spécification (Fonctionnalités)

L'application météorologique inclut les fonctionnalités suivantes :

- Récupération des données à partir de l'API OpenWeatherMap en utilisant l'API Fetch 🌐
- Affichage des informations météorologiques actuelles telles que la température, la description, l'humidité, la vitesse du vent et la localisation 🌦️
- Navigation et manipulation du DOM pour mettre à jour les données météorologiques sur la page web 🖥️
- Manipulation de tableaux et d'objets pour traiter les données récupérées de l'API 📊

## Présentation de l'API utilisée

L'API OpenWeatherMap (https://openweathermap.org/api) est une API gratuite et open-source qui fournit des données météorologiques actuelles et des prévisions pour n'importe quel lieu dans le monde. Dans ce projet, le point d'accès "Current Weather Data" de l'API a été utilisé pour récupérer les informations météorologiques en temps réel en fonction de la localisation de l'utilisateur ou d'une ville spécifiée. ⛅

## Explication des fonctions implémentées

### fetchWeatherData(city)

Cette fonction utilise l'API Fetch pour envoyer une requête GET à l'API OpenWeatherMap avec le nom de la ville fourni en paramètre. Elle récupère les données météorologiques actuelles au format JSON et renvoie la réponse. 🌐

### updateWeatherApp(data)

Cette fonction prend les données météorologiques récupérées en entrée et manipule le DOM pour mettre à jour les éléments respectifs sur la page web avec les informations pertinentes, telles que la température, la description, l'humidité, la vitesse du vent et la localisation. 🖥️

### handleArrays(data)

Cette fonction traite les données récupérées, qui sont généralement sous forme de tableaux ou d'objets, pour extraire les informations nécessaires à l'affichage sur la page web. 📊

## Utilisation d'un outil d'IA

Pendant le développement de ce projet, j'ai consulté un tutoriel YouTube pour obtenir des conseils et des références. Le tutoriel a fourni des exemples et des explications utiles sur l'utilisation d'API, la manipulation du DOM et le traitement des structures de données en JavaScript. 🤖
