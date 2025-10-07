// scripts.js

// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const footer = document.querySelector('.footer');

// --- Theme Toggle Functionality ---
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.setAttribute('data-bs-theme', savedTheme);
        setThemeIcon(savedTheme);
    }
}

function setThemeIcon(theme) {
    themeToggle.innerHTML = theme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
}

function toggleTheme() {
    const currentTheme = html.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setThemeIcon(newTheme);
    addRippleEffect();
}

function addRippleEffect() {
    const ripple = document.createElement('span');
    ripple.style.cssText = `
        position: absolute;
        width: 100%;
        height: 100%;
        background: ${html.getAttribute('data-bs-theme') === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'};
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.8s linear;
        opacity: 0;
    `;
    themeToggle.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 800);
}

themeToggle.addEventListener('click', toggleTheme);
initializeTheme(); // Initialize on page load


// --- Footer Animation ---
const footerAnimation = () => {
    const footerAnimationElement = document.querySelector('.footer-animation');
    footer.classList.add('animate');

    setTimeout(() => {
        footer.classList.remove('animate');
    }, 2000); // Duration of the animation
};

// Trigger footer animation every 10 seconds
setInterval(footerAnimation, 10000);
footerAnimation(); // Initial footer animation


// --- Weather API Integration (Open-Meteo) ---
async function fetchWeatherData() {
    const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=-34.90&longitude=-56.19&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=America%2FSao_Paulo';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data && data.hourly && data.daily) {
            displayWeatherData(data);
        } else {
            displayWeatherError();
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        displayWeatherError();
    }
}

function displayWeatherData(data) {
    const weatherContainer = document.getElementById('weather-container');
    const now = new Date();
    const currentHourIndex = now.getHours();

    const temperature = data.hourly.temperature_2m[currentHourIndex].toFixed(1); // Temperatura actual
    const weatherCode = data.hourly.weathercode[currentHourIndex]; // Código del clima actual
    const maxTemp = data.daily.temperature_2m_max[0].toFixed(1);  // Temperatura maxima
    const minTemp = data.daily.temperature_2m_min[0].toFixed(1);  // Temperatura minima

    const weatherIcon = getWeatherIcon(weatherCode); // Obtiene el ícono

    const weatherHTML = `
        <div class="weather-data">
            <div class="weather-item">
                ${weatherIcon}
            </div>
            <div class="weather-item">
                <p class="temperature">${temperature}°C</p>
                <p>Current</p>
            </div>
             <div class="weather-item">
                <p>${maxTemp}°C</p>
                <p>Max</p>
            </div>
            <div class="weather-item">
                <p>${minTemp}°C</p>
                <p>Min</p>
            </div>
        </div>
    `;
    weatherContainer.innerHTML = weatherHTML;
}

function getWeatherIcon(weatherCode) {
    // Mapeo de códigos de clima a íconos de Font Awesome (ajustar según necesidad).
    const iconMap = {
        0: '<i class="fas fa-sun"></i>',       // Cielo despejado
        1: '<i class="fas fa-cloud-sun"></i>', // Principalmente despejado
        2: '<i class="fas fa-cloud-sun"></i>', // Parcialmente nublado
        3: '<i class="fas fa-cloud"></i>',     // Nublado
        45: '<i class="fas fa-smog"></i>',     // Niebla
        48: '<i class="fas fa-smog"></i>',     // Niebla engelante
        51: '<i class="fas fa-cloud-rain"></i>', // Llovizna ligera
        53: '<i class="fas fa-cloud-rain"></i>', // Llovizna moderada
        55: '<i class="fas fa-cloud-showers-heavy"></i>', // Llovizna densa
        56: '<i class="fas fa-cloud-rain"></i>',  // Llovizna engelante ligera
        57: '<i class="fas fa-cloud-showers-heavy"></i>',  // Llovizna engelante densa
        61: '<i class="fas fa-cloud-rain"></i>', // Lluvia ligera
        63: '<i class="fas fa-cloud-showers-heavy"></i>', // Lluvia moderada
        65: '<i class="fas fa-cloud-showers-heavy"></i>', // Lluvia fuerte
        66: '<i class="fas fa-cloud-rain"></i>',  // Lluvia engelante ligera
        67: '<i class="fas fa-cloud-showers-heavy"></i>',  // Lluvia engelante fuerte
        71: '<i class="fas fa-snowflake"></i>',  // Nieve ligera
        73: '<i class="fas fa-snowflake"></i>',  // Nieve moderada
        75: '<i class="fas fa-snowflake"></i>',  // Nieve fuerte
        77: '<i class="fas fa-snowflake"></i>',  // Granos de nieve
        80: '<i class="fas fa-cloud-showers-heavy"></i>', // Chubascos de lluvia ligeros
        81: '<i class="fas fa-cloud-showers-heavy"></i>', // Chubascos de lluvia moderados
        82: '<i class="fas fa-cloud-showers-heavy"></i>', // Chubascos de lluvia violentos
        85: '<i class="fas fa-snowflake"></i>', // Chubascos de nieve ligeros
        86: '<i class="fas fa-snowflake"></i>',  // Chubascos de nieve fuertes
        95: '<i class="fas fa-bolt"></i>',    // Tormenta
        96: '<i class="fas fa-bolt"></i>',   // Tormenta con granizo ligero
        99: '<i class="fas fa-bolt"></i>',     // Tormenta con granizo fuerte
    };

     // Devuelve el ícono correspondiente o un ícono por defecto si no hay coincidencia.
     return iconMap[weatherCode] || '<i class="fas fa-question"></i>';
}


function displayWeatherError() {
    const weatherContainer = document.getElementById('weather-container');
    weatherContainer.innerHTML = '<p>No se pudo cargar la información del clima.</p>';
}

// Fetch weather data on page load
fetchWeatherData();



// --- News API Integration (NewsAPI.org) ---
async function fetchNewsData() {
    const apiKey = 'c461b46e77ad430faa35580e478aa03e'; // Reemplaza con tu clave API
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'ok' && data.articles) {
            displayNewsData(data.articles);
        } else {
            displayNewsError();
        }
    } catch (error) {
        console.error('Error fetching news data:', error);
        displayNewsError();
    }
}

function displayNewsData(articles) {
    const newsContainer = document.getElementById('news-container');
    let newsHTML = '';

    articles.slice(0, 10).forEach(article => { // Limita a 10 noticias
        newsHTML += `<span class="news-item"><a href="${article.url}" target="_blank">${article.title}</a></span>`;
    });

    newsContainer.innerHTML = newsHTML;
}

function displayNewsError() {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '<p>No se pudo cargar las noticias.</p>';
}

// Fetch news data on page load
fetchNewsData();