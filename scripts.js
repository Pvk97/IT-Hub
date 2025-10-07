```javascript
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. INICIALIZACIÓN DE ICONOS LUCIDE ---
    // Esta función es esencial para que los iconos se muestren.
    lucide.createIcons();

    // --- 2. LÓGICA PARA DARK/LIGHT MODE ---
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Al cargar la página, aplicar el tema guardado.
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeToggle.checked = true;
        }
    }

    // Añadir el listener para cambiar el tema.
    themeToggle.addEventListener('change', function() {
        const theme = this.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });

    // --- 3. LÓGICA PARA SIDEBAR RESPONSIVE ---
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('show');
        });
    }

    // --- 4. LÓGICA PARA NAVEGACIÓN DEL SIDEBAR ---
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Resaltar el link activo
            navLinks.forEach(l => l.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            // En móvil, cerrar el sidebar después de hacer clic
            if (window.innerWidth <= 992) {
                sidebar.classList.remove('show');
            }
        });
    });

    // --- 5. WIDGET DE CLIMA (CON LLAMADA A API) ---
    async function fetchWeather() {
        // IMPORTANTE: Reemplaza 'TU_API_KEY_AQUI' con tu propia API key de OpenWeatherMap
        const apiKey = 'TU_API_KEY_AQUI'; 
        const city = 'Montevideo';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;
        
        const weatherValueElement = document.querySelector('#weather-widget .metric-value');

        // Prevenir la llamada si no hay API Key
        if (apiKey === 'TU_API_KEY_AQUI') {
            console.warn("API Key de OpenWeatherMap no configurada. El widget del clima no funcionará.");
            weatherValueElement.textContent = 'N/A';
            return;
        }

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error en la respuesta de la red: ${response.statusText}`);
            }
            const data = await response.json();
            
            // Actualizar el valor en el HTML
            weatherValueElement.textContent = `${Math.round(data.main.temp)}°C`;
            
        } catch (error) {
            console.error("Error al obtener los datos del clima:", error);
            weatherValueElement.textContent = 'Error';
        }
    }

    // Llamar a la función para obtener el clima.
    // Descomenta la siguiente línea cuando hayas puesto tu API Key.
    // fetchWeather();
});
```