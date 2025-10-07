// ====== UTILS ======
async function fetchData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Error al obtener datos");
    return await res.json();
  } catch (error) {
    console.error("API error:", error);
    return null;
  }
}

// ====== CLIMA ======
async function loadWeather() {
  const weatherBox = document.getElementById("weather-info");
  weatherBox.textContent = "Cargando clima...";

  const url = "https://api.open-meteo.com/v1/forecast?latitude=-34.9&longitude=-56.2&current_weather=true";
  const data = await fetchData(url);

  if (data && data.current_weather) {
    const { temperature, windspeed } = data.current_weather;
    weatherBox.textContent = `${temperature}°C, viento ${windspeed} km/h`;
    localStorage.setItem("lastWeather", JSON.stringify(data.current_weather));
  } else {
    const fallback = localStorage.getItem("lastWeather");
    weatherBox.textContent = fallback
      ? `Último clima: ${JSON.parse(fallback).temperature}°C`
      : "Clima no disponible";
  }
}

// ====== NOTICIAS ======
async function loadNews() {
        const newsBox = document.getElementById("news-ticker-content");
        newsBox.textContent = "Cargando noticias...";

        const url = "https://newsdata.io/api/1/latest?apikey=pub_bb7cec6cbbff44629f878bdd851096c1&country=uy&language=es&category=politics,sports,top,technology,business";
        const data = await fetchData(url);

        if (data && data.results) {
          const newsItems = data.results.slice(0, 5);
          newsBox.innerHTML = `
            <ul class="news-list">
              ${newsItems
                .map(article => `<li><a href="${article.link}" target="_blank" rel="noopener noreferrer">${article.title}</a></li>`)
                .join("")}
            </ul>`;
          localStorage.setItem("lastNews", JSON.stringify(newsItems));
        } else {
          const fallback = localStorage.getItem("lastNews");
          if (fallback) {
            const fallbackNews = JSON.parse(fallback);
            newsBox.innerHTML = `<ul class="news-list">
                ${fallbackNews.map(a => `<li><a href="${a.link}" target="_blank" rel="noopener noreferrer">${a.title}</a></li>`).join("")}
              </ul>`;
          } else {
            newsBox.innerHTML = "Noticias no disponibles";
          }
        }
      }

function init() {
  // Inicializa la librería de animaciones
  AOS.init({
    duration: 800, // Duración de la animación en milisegundos
    once: true      // La animación ocurre solo una vez
  });

  loadWeather();
  loadNews();
  setInterval(loadWeather, 30 * 60 * 1000); // cada 30 min
  setInterval(loadNews, 60 * 60 * 1000);   // cada 1 hora
}

document.addEventListener("DOMContentLoaded", init);
