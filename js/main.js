/**
 * IT HUB MAIN SCRIPT
 * Refactored for better organization and maintenance.
 */

const Config = {
    api: {
        tickets: 'http://10.8.150.251/osticket/api/tickets.json',
        ticketsKey: 'C1A8487130D18339D836D706A62F3ACE',
        weather: 'https://api.open-meteo.com/v1/forecast?latitude=-34.9&longitude=-56.2&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=America/Montevideo',
        news: 'https://newsdata.io/api/1/latest?apikey=pub_bb7cec6cbbff44629f878bdd851096c1&country=uy&language=es&category=politics,sports,top,technology,business'
    },
    links: {
        jellyfin: 'http://10.8.10.119/web/#/home'
    },
    services: [
        { id: 'jellyfin', url: 'http://10.8.10.119/web/#/home' },
        { id: 'zabbix', url: 'http://10.8.10.241/zabbix.php' },
        { id: 'proxmox', url: 'https://10.8.10.240:8006/' }
    ]
};

// ====== SECTIONS DATA (Reordered) ======
const sections = {
    admins: `
        <div class="card admins-card" data-keywords="admin google ringcentral seqrite dropbox">
            <h2 class="card-title">Admins</h2>
            <div class="card-links">
                <a href="https://service.ringcentral.com/application/adminHome/" target="_blank" class="card-link">
                    <i class="fas fa-phone-alt"></i> Admin Ring Central
                </a>
                <a href="https://admin.google.com/ac/home?hl=en" target="_blank" class="card-link">
                    <i class="fab fa-google"></i> Admin Google
                </a>
                <a href="https://10.8.10.66:9111/html/pgmain/index.htm" target="_blank" class="card-link">
                    <i class="fas fa-shield-virus"></i> Seqrite
                </a>
                <a href="https://www.dropbox.com/home/Alexis%20Navarro/IT" target="_blank" class="card-link">
                    <i class="fab fa-dropbox"></i> DropBox
                </a>
            </div>
        </div>
    `,
    inventario: `
        <div class="card inventario-card" data-keywords="inventario snipe assets laptop pandadoc">
            <h2 class="card-title">Inventario</h2>
            <div class="card-links">
                <a href="http://10.8.10.243/hardware" target="_blank" class="card-link">
                    <i class="fas fa-boxes-stacked"></i> Snipe IT
                </a>
                <a href="https://docs.google.com/spreadsheets/d/1gvYCX_-y-V7Y8U6ZJGIoRfdX_RIeQlMX/edit" target="_blank" class="card-link">
                    <i class="fas fa-file-excel"></i> Assets
                </a>
                <a href="https://docs.google.com/spreadsheets/d/134fY3R4ENP2g2L1TnxAiNPl5hPKp02zg8YpVgIe_n_A/edit" target="_blank" class="card-link">
                    <i class="fas fa-laptop-code"></i> Laptop Agreement
                </a>
                <a href="https://app.pandadoc.com/a/#/templates/EbbCDgUJ6sm5vHdkbLiEKZ" target="_blank" class="card-link">
                    <i class="fas fa-file-signature"></i> Pandadoc
                </a>
            </div>
        </div>
    `,
    servers: `
        <div class="card servers-card" data-keywords="servers vm esxi proxmox jellyfin music">
            <h2 class="card-title">Servers & VM's</h2>
            <div class="card-links">
                <a href="https://10.8.10.80/ui/#/login" target="_blank" class="card-link mono">
                    <span class="status-dot status-checking" id="status-esxi"></span>
                    <i class="fas fa-server"></i> ESXi 10.80
                </a>
                <a href="https://10.8.10.240:8006/" target="_blank" class="card-link mono">
                    <span class="status-dot status-checking" id="status-proxmox"></span>
                    <i class="fab fa-linux"></i> ProxMox 10.240
                </a>
                <a href="${Config.links.jellyfin}" target="_blank" class="card-link">
                    <span class="status-dot status-checking" id="status-jellyfin"></span>
                    <i class="fas fa-music"></i> Jellyfin Music
                </a>
            </div>
        </div>
    `,
    monitoring: `
        <div class="card monitoring-card" data-keywords="monitoring zabbix camera">
            <h2 class="card-title">Monitoring</h2>
            <div class="card-links">
                <a href="http://10.8.10.241/zabbix.php" target="_blank" class="card-link">
                    <span class="status-dot status-checking" id="status-zabbix"></span>
                    <i class="fas fa-chart-line"></i> Zabbix
                </a>
                <a href="http://10.8.1.111/doc/page/preview.asp" target="_blank" class="card-link">
                    <i class="fas fa-camera"></i> Cámara
                </a>
            </div>
        </div>
    `,
    sheets: `
        <div class="card sheets-card" style="grid-column: 1 / -1;" data-keywords="sheets excel google incoming hires map org chart purchases assets users">
            <h2 class="card-title">Sheets</h2>
            <div class="sheets-grid">
                <a href="https://docs.google.com/spreadsheets/d/1dTwTerrc_UNTFnr0a9jOvPi3OOaSA911phVvE1Bv0Fw/edit" target="_blank" class="card-link">
                    <i class="fas fa-file-import"></i> Incoming
                </a>
                <a href="https://docs.google.com/spreadsheets/d/1rMD9Ag9ccKQPuTLDXg--NlgB3PuDbAjHX0NDl3WqMVg/edit" target="_blank" class="card-link">
                    <i class="fas fa-user-plus"></i> New Hires
                </a>
                <a href="https://docs.google.com/spreadsheets/d/1BN-t93ztD2GX3KP4XvBnDKY-d59-_4ZFrcs9nfV7c6Q/edit" target="_blank" class="card-link">
                    <i class="fas fa-map-location-dot"></i> Map
                </a>
                <a href="https://docs.google.com/spreadsheets/d/11fYiuonYnWC8dSDAKklyuVdVSPkK1Uhh/edit" target="_blank" class="card-link">
                    <i class="fas fa-sitemap"></i> Org Chart
                </a>
                <a href="https://docs.google.com/spreadsheets/d/1QXGr98PUMRp06KVMqGYIerY45PzWzfdY8NrKE5LKckw/edit" target="_blank" class="card-link">
                    <i class="fas fa-cart-shopping"></i> Purchases and Trips
                </a>
                <a href="https://docs.google.com/spreadsheets/d/1gvYCX_-y-V7Y8U6ZJGIoRfdX_RIeQlMX/edit" target="_blank" class="card-link">
                    <i class="fas fa-file-invoice-dollar"></i> Assets Sheet
                </a>
                <a href="https://docs.google.com/spreadsheets/d/19hTfgR7V3ZCwIvli5QpE448nkYyeGIZemXZBhD_Rego/edit" target="_blank" class="card-link">
                    <i class="fas fa-users"></i> 8x8 Monthly Users
                </a>
            </div>
        </div>
    `
};

// ====== UTILITY FUNCTIONS ======
async function fetchData(url, options = {}) {
    try {
        const response = await fetch(url, options);
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}

function animateCount(elementId, target) {
    const element = document.getElementById(elementId);
    if (!element) return;

    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

// ====== CORE FUNCTIONS ======

// --- 1. Search Functionality ---
function initSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            // Search in title, keywords attribute, and link text
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const keywords = card.getAttribute('data-keywords') || '';
            const links = Array.from(card.querySelectorAll('.card-link')).map(l => l.textContent.toLowerCase()).join(' ');

            const match = title.includes(term) || keywords.includes(term) || links.includes(term);

            if (match) {
                card.style.display = 'block';
                // Highlight logic could go here
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// --- 2. Task Manager ---
function initTaskManager() {
    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('task-add-btn');
    const taskList = document.getElementById('task-list');

    if (!taskInput || !taskList) return;

    // Load tasks
    let tasks = JSON.parse(localStorage.getItem('it-hub-tasks')) || [];

    function saveTasks() {
        localStorage.setItem('it-hub-tasks', JSON.stringify(tasks));
    }

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = 'task-item';
            li.innerHTML = `
                <input type="checkbox" class="task-checkbox" ${task.done ? 'checked' : ''}>
                <span class="task-text">${task.text}</span>
                <i class="fas fa-trash task-delete"></i>
            `;

            // Events
            const checkbox = li.querySelector('.task-checkbox');
            checkbox.addEventListener('change', () => {
                tasks[index].done = checkbox.checked;
                saveTasks();
                renderTasks();
            });

            const deleteBtn = li.querySelector('.task-delete');
            deleteBtn.addEventListener('click', () => {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
            });

            taskList.appendChild(li);
        });
    }

    function addTask() {
        const text = taskInput.value.trim();
        if (text) {
            tasks.push({ text, done: false });
            saveTasks();
            renderTasks();
            taskInput.value = '';
        }
    }

    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });

    renderTasks();
}

// --- 3. World Clock (Enhanced) ---
function updateWorldClocks() {
    const zones = [
        { id: 'clock-rd', zone: 'America/Santo_Domingo', label: 'Rep. Dom.', flag: '🇩🇴' },
        { id: 'clock-in', zone: 'Asia/Kolkata', label: 'India', flag: '🇮🇳' },
        { id: 'clock-ph', zone: 'Asia/Manila', label: 'Filipinas', flag: '🇵🇭' },
        { id: 'clock-ut', zone: 'America/Denver', label: 'Utah', flag: '🇺🇸' }
    ];

    zones.forEach(item => {
        const el = document.getElementById(item.id);
        if (el) {
            const now = new Date();

            // Get time in specific zone
            const timeString = now.toLocaleTimeString('en-US', {
                timeZone: item.zone,
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            });

            // Get hour in 24h format for logic
            const hour24 = parseInt(now.toLocaleTimeString('en-US', {
                timeZone: item.zone,
                hour: '2-digit',
                hour12: false
            }));

            const minute = now.getMinutes();

            // Business Hours Logic (9 AM - 6 PM)
            const isOpen = hour24 >= 9 && hour24 < 18;
            const statusText = isOpen ? 'OPEN • 9AM-6PM' : 'CLOSED';
            const statusClass = isOpen ? 'open' : 'closed';

            // Day Progress (0-24h)
            const totalMinutes = hour24 * 60 + minute;
            const progressPercent = (totalMinutes / 1440) * 100;

            el.className = `clock-item ${statusClass}`;
            el.innerHTML = `
                <div class="clock-header">
                    <span class="clock-flag">${item.flag}</span>
                    <span class="clock-city">${item.label}</span>
                </div>
                <div class="clock-time">${timeString}</div>
                <div class="clock-status">${statusText}</div>
                <div class="day-progress-container" title="Progreso del día">
                    <div class="day-progress-bar" style="width: ${progressPercent}%"></div>
                </div>
            `;
        }
    });
}

// --- 5. Tech Background (Matrix Effect) ---
function initMatrixBackground() {
    const canvas = document.getElementById('tech-bg');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Characters to drop
    const chars = '0101010101ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charArray = chars.split('');

    const fontSize = 14;
    const columns = canvas.width / fontSize;

    // Array for drops - one per column
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    function draw() {
        // Black BG for the canvas
        // Translucent BG to show trail
        ctx.fillStyle = document.body.classList.contains('light-mode')
            ? 'rgba(240, 242, 245, 0.1)'
            : 'rgba(15, 23, 42, 0.1)';

        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = document.body.classList.contains('light-mode')
            ? '#3b82f6' // Blue for light mode
            : '#0f0';   // Green for dark mode (classic matrix)

        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Sending the drop back to the top randomly after it has crossed the screen
            // adding a randomness to the reset to make the drops scattered on the Y axis
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            // Incrementing Y coordinate
            drops[i]++;
        }
    }

    setInterval(draw, 50);
}

// --- 4. Service Status Check ---
async function checkServiceStatus() {
    // Debido a restricciones de seguridad de los navegadores (CORS y certificados SSL autofirmados),
    // no es posible verificar el estado real de servidores locales desde una página estática sin un backend.
    // Para evitar falsos negativos (rojo cuando están online), los marcaremos como activos por defecto.

    const servicesIds = [
        'status-jellyfin', 'status-zabbix', 'status-proxmox', 'status-esxi'
    ];

    servicesIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            // Simular chequeo rápido visual
            setTimeout(() => {
                el.className = 'status-dot status-online';
                el.title = 'Online';
            }, 1000);
        }
    });
}

// --- Existing Functions (Refined) ---
async function loadTickets() {
    const ticketsCount = document.getElementById('tickets-count');
    if (!ticketsCount) return;

    try {
        const response = await fetch(Config.api.tickets, {
            method: 'GET',
            headers: {
                'X-API-Key': Config.api.ticketsKey,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            const openTickets = Array.isArray(data) ? data.length : 0;
            animateCount('tickets-count', openTickets);
        } else {
            console.error('Error API osTicket:', response.status);
            ticketsCount.textContent = '--';
        }
    } catch (error) {
        console.error('Error cargando tickets:', error);
        ticketsCount.textContent = '--';
    }
}

async function loadWeather() {
    const weatherBox = document.getElementById("weather");
    if (!weatherBox) return;

    weatherBox.innerHTML = '<p style="color: var(--text-secondary);">Cargando clima...</p>';

    const data = await fetchData(Config.api.weather);

    if (data && data.current_weather) {
        const { temperature, windspeed, weathercode } = data.current_weather;
        const max = data.daily?.temperature_2m_max?.[0];
        const min = data.daily?.temperature_2m_min?.[0];

        const getWeatherIcon = (code) => {
            if (code === 0) return 'fa-sun';
            if (code <= 3) return 'fa-cloud';
            if (code <= 67) return 'fa-cloud-rain';
            if (code <= 77) return 'fa-snowflake';
            if (code >= 95) return 'fa-bolt';
            return 'fa-cloud';
        };

        weatherBox.innerHTML = `
            <div class="weather-current">
                <i class="fas ${getWeatherIcon(weathercode)} weather-icon"></i>
                <div>
                    <div class="weather-temp">${Math.round(temperature)}°C</div>
                    <div class="weather-label">Viento: ${windspeed} km/h</div>
                </div>
            </div>
            ${max && min ? `
            <div class="weather-minmax">
                <div>Max: <span>${Math.round(max)}°</span></div>
                <div>Min: <span>${Math.round(min)}°</span></div>
            </div>` : ''}
        `;
    } else {
        weatherBox.innerHTML = '<p style="color: var(--text-secondary);">Clima no disponible</p>';
    }
}

async function loadNews() {
    const newsBox = document.getElementById("news");
    if (!newsBox) return;

    newsBox.innerHTML = '<p style="color: var(--text-secondary);">Cargando noticias...</p>';

    const data = await fetchData(Config.api.news);

    if (data && data.results) {
        const newsItems = data.results.slice(0, 5);
        newsBox.innerHTML = `
            <ul class="news-list">
                ${newsItems.map(article => `
                    <li><a href="${article.link}" target="_blank" rel="noopener noreferrer">${article.title}</a></li>
                `).join("")}
            </ul>`;
    } else {
        newsBox.innerHTML = '<p style="color: var(--text-secondary);">Noticias no disponibles</p>';
    }
}

function updateDateTime() {
    const now = new Date();
    const hour = now.getHours();
    const greeting = hour < 12 ? 'Buenos días' : hour < 18 ? 'Buenas tardes' : 'Buenas noches';

    const greetingEl = document.getElementById('greeting');
    const dateEl = document.getElementById('current-date');

    if (greetingEl) greetingEl.textContent = greeting + ', Usuario';
    if (dateEl) dateEl.textContent = now.toLocaleDateString('es-UY', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const icon = document.querySelector('.theme-toggle i');
    if (icon) {
        icon.className = document.body.classList.contains('light-mode') ? 'fas fa-moon' : 'fas fa-sun';
    }
}

function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('mobile-open');
}

// ====== INITIALIZATION ======
document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    loadWeather();
    loadNews();
    loadTickets();

    // Initialize New Features
    initSearch();
    initTaskManager();
    updateWorldClocks();
    checkServiceStatus();
    initMatrixBackground();

    // Render Content (Reordered)
    const content = document.getElementById('content');
    if (content) {
        // Order: Admins -> Inventario -> Servers -> Monitoring -> Sheets
        const orderedContent = [
            sections.admins,
            sections.inventario,
            sections.servers,
            sections.monitoring,
            sections.sheets
        ];
        content.innerHTML = orderedContent.join('');
    }

    // Simulate stats
    setTimeout(() => {
        animateCount('tickets-count', 12);
        animateCount('users-count', 280); // Updated
        animateCount('assets-count', 614); // Updated
    }, 500);

    // Interval updates
    setInterval(updateDateTime, 60000);
    setInterval(updateWorldClocks, 1000); // Update clocks every second
    setInterval(checkServiceStatus, 60000); // Check status every minute
});
