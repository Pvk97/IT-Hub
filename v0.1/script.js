// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for stored theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.setAttribute('data-bs-theme', savedTheme);
    if (savedTheme === 'light') {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    // Add ripple effect
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.width = '100%';
    ripple.style.height = '100%';
    ripple.style.backgroundColor = newTheme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)';
    ripple.style.borderRadius = '50%';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.8s linear';
    ripple.style.opacity = '0';
    themeToggle.appendChild(ripple);
    setTimeout(() => {
        ripple.remove();
    }, 800);
});

// Weather API Integration
// Usa 'https://corsproxy.io/?' +  para evitar errores de CORS en desarrollo local.
// ¡IMPORTANTE!  En producción, *NUNCA* uses un proxy público como este para tus API keys.
const weatherApiUrl = 'https://corsproxy.io/?' + encodeURIComponent('https://api.openweathermap.org/data/2.5/forecast?q=Montevideo&units=metric&lang=es&appid=c461b46e77ad430faa35580e478aa03e');
const weatherWidget = document.getElementById('weather-widget');
const forecastContainer = document.getElementById('forecast');

fetch(weatherApiUrl)
    .then(handleErrors)
    .then(data => {
        const dailyForecast = {};

        data.list.forEach(item => {
            const date = item.dt_txt.split(' ')[0];
            if (!dailyForecast[date]) {
                dailyForecast[date] = {
                    minTemp: Infinity,
                    maxTemp: -Infinity,
                    icon: item.weather[0].icon,
                    description: item.weather[0].description
                };
            }
            const temp = item.main.temp;
            if (temp < dailyForecast[date].minTemp) dailyForecast[date].minTemp = Math.round(temp);
            if (temp > dailyForecast[date].maxTemp) dailyForecast[date].maxTemp = Math.round(temp);
        });

        let count = 0;
        forecastContainer.innerHTML = '';
        for (const [date, forecast] of Object.entries(dailyForecast)) {
            if (count >= 4) break;
            const forecastItem = document.createElement('div');
            forecastItem.className = 'weather-item';
            forecastItem.innerHTML = `
        <span>${getDayName(date)}</span>
        <img src="https://openweathermap.org/img/wn/${forecast.icon}@2x.png" class="weather-icon" alt="${forecast.description}">
        <span>${forecast.maxTemp}° / ${forecast.minTemp}°</span>
      `;
            forecastContainer.appendChild(forecastItem);
            count++;
        }
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        displayError(forecastContainer, 'Error al cargar la información del clima.');
    });

// News API Integration
// Usa 'https://corsproxy.io/?' +  para evitar errores de CORS en desarrollo local.
const newsApiUrl = 'https://corsproxy.io/?' + encodeURIComponent('https://newsapi.org/v2/top-headlines?country=uy&apiKey=c461b46e77ad430faa35580e478aa03e');
const newsTicker = document.getElementById('news-ticker');

fetch(newsApiUrl)
    .then(handleErrors)
    .then(data => {
        if (data.articles && data.articles.length > 0) {
            newsTicker.innerHTML = '';
            data.articles.slice(0, 10).forEach(article => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
                newsTicker.appendChild(li);
            });
        } else {
            displayError(newsTicker, 'No hay noticias disponibles.');
        }
    })
    .catch(error => {
        console.error('Error fetching news data:', error);
        displayError(newsTicker, 'Error al cargar las noticias.');
    });

// Utility functions
function formatTemperature(temp) {
    return `${Math.round(temp)}°`;
}

function getDayName(dateString) {
    const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    const date = new Date(dateString);
    return days[date.getDay()];
}

function createWeatherIcon(iconCode) {
    const img = document.createElement('img');
    img.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    img.alt = 'Weather icon';
    img.classList.add('weather-icon');
    return img;
}

function handleErrors(response) {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

function displayLoading(container) {
    container.innerHTML = '<p>Loading...</p>';
}

function displayError(container, message) {
    container.innerHTML = `<p class="text-danger">${message}</p>`;
}

// Extended theme toggle functionality
function applyTheme(theme) {
    html.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'light') {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    updateUIForTheme(theme);
}

function updateUIForTheme(theme) {
    const elements = document.querySelectorAll('.theme-dependent');
    elements.forEach(element => {
        element.classList.toggle('light-mode', theme === 'light');
        element.classList.toggle('dark-mode', theme === 'dark');
    });
}

// Accessibility enhancements
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('show-focus-outlines');
    }
});

document.addEventListener('click', function() {
    document.body.classList.remove('show-focus-outlines');
});

// Print handling
window.onbeforeprint = function() {
    document.body.classList.add('print-mode');
};

window.onafterprint = function() {
    document.body.classList.remove('print-mode');
};

// Performance optimizations
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}