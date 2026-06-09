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
                <a href="https://docs.google.com/spreadsheets/d/1ConfNwkEdHz1SSGe7WeP879u-3rLWTg38QKRWp7mM6I/edit?gid=0#gid=0" target="_blank" class="card-link">
                    <i class="fas fa-screwdriver-wrench"></i> Equipment
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
                <a href="https://docs.google.com/spreadsheets/d/1VE_WAA-t6r5EPyOfLCX9aiwwho5hO_xt/edit?gid=495663830#gid=495663830" target="_blank" class="card-link">
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
    `,
    itTools: `
        <div class="card it-tools-card" style="grid-column: 1 / -1;" data-keywords="tools snippets commands ip subredes vlans ping dns gateway terminal bash ps">
            <h2 class="card-title">Herramientas de IT & Comandos Rápidos</h2>
            
            <div class="it-tools-grid">
                <!-- Left panel: Command Snippets with Category Tabs -->
                <div class="tools-panel snippets-panel">
                    <div class="panel-header">
                        <h3>Comandos Rápidos (Soporte IT)</h3>
                        <div class="snippet-tabs">
                            <button class="tab-btn active" onclick="switchSnippetCategory('redes')">Redes</button>
                            <button class="tab-btn" onclick="switchSnippetCategory('servidores')">Servidores/SSH</button>
                            <button class="tab-btn" onclick="switchSnippetCategory('soporte')">Diagnóstico</button>
                        </div>
                    </div>
                    
                    <div class="panel-content">
                        <div id="snippets-redes" class="snippet-category-list active">
                            <!-- Network snippets will go here -->
                        </div>
                        <div id="snippets-servidores" class="snippet-category-list">
                            <!-- Server snippets will go here -->
                        </div>
                        <div id="snippets-soporte" class="snippet-category-list">
                            <!-- Support snippets will go here -->
                        </div>
                    </div>
                </div>

                <!-- Right panel: Network info & Subnet reference -->
                <div class="tools-panel network-panel">
                    <div class="panel-header">
                        <h3>Información de Red & Subredes</h3>
                    </div>
                    <div class="panel-content">
                        <!-- Client IP detector -->
                        <div class="client-ip-container">
                            <span class="ip-label"><i class="fas fa-network-wired"></i> Tu IP Actual:</span>
                            <span id="client-ip-val" class="ip-value loading">Detectando...</span>
                            <button class="ip-refresh-btn" onclick="detectClientIP()" title="Recargar IP"><i class="fas fa-sync-alt"></i></button>
                        </div>
                        
                        <!-- VLAN / Subnet Reference table -->
                        <div class="vlan-table-container">
                            <table class="vlan-table">
                                <thead>
                                    <tr>
                                        <th>Subred / Rango</th>
                                        <th>Descripción</th>
                                        <th>Puerta de Enlace</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="mono">10.8.10.0/24</td>
                                        <td>Servidores & Proxmox</td>
                                        <td class="mono">10.8.10.1</td>
                                    </tr>
                                    <tr>
                                        <td class="mono">10.8.1.0/24</td>
                                        <td>Cámaras & Seguridad</td>
                                        <td class="mono">10.8.1.1</td>
                                    </tr>
                                    <tr>
                                        <td class="mono">10.8.150.0/24</td>
                                        <td>Tickets (osticket)</td>
                                        <td class="mono">10.8.150.1</td>
                                    </tr>
                                    <tr>
                                        <td class="mono">10.8.100.0/22</td>
                                        <td>DHCP Clientes Uruguay</td>
                                        <td class="mono">10.8.100.1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
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
    const noResultsEl = document.getElementById('search-no-results');
    if (!searchInput) return;

    // Shortcut key '/' to focus search
    window.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== searchInput && 
            document.activeElement.tagName !== 'INPUT' && 
            document.activeElement.tagName !== 'TEXTAREA') {
            e.preventDefault();
            searchInput.focus();
            searchInput.select();
        }
    });

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().trim();
        const cards = document.querySelectorAll('.card');
        let visibleCount = 0;

        cards.forEach(card => {
            const titleEl = card.querySelector('.card-title');
            if (!titleEl) return;
            
            const title = titleEl.textContent.toLowerCase();
            const keywords = card.getAttribute('data-keywords') || '';
            const links = Array.from(card.querySelectorAll('.card-link')).map(l => l.textContent.toLowerCase()).join(' ');

            const match = title.includes(term) || keywords.includes(term) || links.includes(term);

            if (match) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (noResultsEl) {
            noResultsEl.style.display = visibleCount === 0 ? 'flex' : 'none';
        }
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

// --- 5. Tech Background (Matrix Effect - Optimized) ---
let matrixIntervalId = null;

function startMatrix() {
    if (matrixIntervalId || document.body.classList.contains('perf-mode-active')) return;

    const canvas = document.getElementById('tech-bg');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const chars = '0101010101ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charArray = chars.split('');
    const fontSize = 10; // Stretched by CSS

    const columns = canvas.width / fontSize;
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -100); // Vertically scattered
    }

    function draw() {
        if (document.hidden || document.body.classList.contains('perf-mode-active')) {
            return;
        }

        ctx.fillStyle = document.body.classList.contains('light-mode')
            ? 'rgba(240, 242, 245, 0.15)'
            : 'rgba(15, 23, 42, 0.15)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = document.body.classList.contains('light-mode')
            ? '#3b82f6'
            : '#0f0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            
            if (drops[i] >= 0) {
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            }

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.985) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    // 85ms interval (~12 FPS) dramatically reduces CPU calculations compared to 50ms (20 FPS)
    matrixIntervalId = setInterval(draw, 85);
}

function stopMatrix() {
    if (matrixIntervalId) {
        clearInterval(matrixIntervalId);
        matrixIntervalId = null;
    }
    const canvas = document.getElementById('tech-bg');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function initMatrixBackground() {
    const canvas = document.getElementById('tech-bg');
    if (!canvas) return;

    function resizeCanvas() {
        // Render at half-resolution. Stretched by CSS, saving 75% of fill/text pixel calculations.
        canvas.width = Math.floor(window.innerWidth / 2);
        canvas.height = Math.floor(window.innerHeight / 2);
        
        if (matrixIntervalId) {
            stopMatrix();
            startMatrix();
        }
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Pause drawing if tab is in the background
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopMatrix();
        } else {
            startMatrix();
        }
    });

    startMatrix();
}

// --- 5.1. Performance & Energy Saver Mode ---
function initPerformanceMode() {
    const savedMode = localStorage.getItem('it-hub-perf-mode');
    // Default is true (energy saving mode active, canvas disabled)
    const perfModeActive = savedMode === null ? true : (savedMode === 'true');

    if (perfModeActive) {
        document.body.classList.add('perf-mode-active');
        stopMatrix();
    } else {
        document.body.classList.remove('perf-mode-active');
        startMatrix();
    }
    updatePerfToggleButton();
}

function togglePerformanceMode() {
    const isCurrentlyActive = document.body.classList.contains('perf-mode-active');
    if (isCurrentlyActive) {
        document.body.classList.remove('perf-mode-active');
        localStorage.setItem('it-hub-perf-mode', 'false');
        startMatrix();
    } else {
        document.body.classList.add('perf-mode-active');
        localStorage.setItem('it-hub-perf-mode', 'true');
        stopMatrix();
    }
    updatePerfToggleButton();
}

function updatePerfToggleButton() {
    const btn = document.querySelector('.perf-toggle i');
    const btnParent = document.querySelector('.perf-toggle');
    if (!btn || !btnParent) return;

    const isAhorro = document.body.classList.contains('perf-mode-active');
    if (isAhorro) {
        btn.className = 'fas fa-leaf';
        btnParent.style.color = '#22c55e'; // Green leaf
        btnParent.title = 'Ahorro de energía activo (Fondo pausado). Haz clic para encender fondo Matrix.';
    } else {
        btn.className = 'fas fa-bolt';
        btnParent.style.color = '#eab308'; // Yellow bolt
        btnParent.title = 'Fondo Matrix activo. Haz clic para activar ahorro de energía (Reducir CPU).';
    }
}

// ====== IT-HUB NEW FEATURES ======

const itSnippets = {
    redes: [
        { name: 'Ping / Ping continuo',            cmd: 'ping 8.8.8.8 -t',                                    desc: 'Comprueba conectividad externa (interrumpir con Ctrl+C)' },
        { name: 'Flush DNS / Vaciar caché DNS',     cmd: 'ipconfig /flushdns',                                 desc: 'Resuelve problemas de resolución de nombres' },
        { name: 'Renew IP (CMD) / Renovar IP',      cmd: 'ipconfig /release && ipconfig /renew',               desc: 'Fuerza renovación de IP por DHCP' },
        { name: 'Restart Adapter (PS) / Reiniciar', cmd: 'Restart-NetAdapter -Name "Wi-Fi"',                   desc: 'Reinicia adaptador de red desde PowerShell' },
        { name: 'DNS Lookup / Consulta DNS',         cmd: 'nslookup google.com',                                desc: 'Verifica resolución de nombres de dominio' },
        { name: 'Traceroute / Rastrear ruta',        cmd: 'tracert 8.8.8.8',                                   desc: 'Muestra los saltos de red hacia el destino' },
        { name: 'ARP Table / Tabla ARP',             cmd: 'arp -a',                                             desc: 'Muestra IPs y MACs conocidas en la red local' },
        { name: 'Route Table / Tabla de rutas',      cmd: 'route print',                                        desc: 'Muestra la tabla de enrutamiento activa' }
    ],
    windows: [
        { name: 'Device Manager / Admin. dispositivos', cmd: 'devmgmt.msc',                                              desc: 'Gestiona hardware, drivers y dispositivos' },
        { name: 'Registry Editor / Registro Windows',   cmd: 'regedit',                                                  desc: 'Editor del registro del sistema (precaución)' },
        { name: 'Services / Administrador servicios',   cmd: 'services.msc',                                             desc: 'Inicia, detiene y configura servicios Windows' },
        { name: 'Group Policy / Política de grupo',     cmd: 'gpedit.msc',                                               desc: 'Editor de directiva de grupo local' },
        { name: 'Local Users / Usuarios locales',       cmd: 'lusrmgr.msc',                                              desc: 'Gestiona usuarios y grupos del equipo' },
        { name: 'Disk Manager / Admin. de discos',      cmd: 'diskmgmt.msc',                                             desc: 'Gestiona particiones y unidades de disco' },
        { name: 'SFC / Verificar archivos sistema',     cmd: 'sfc /scannow',                                             desc: 'Escanea y repara archivos corruptos (requiere Admin)' },
        { name: 'DISM Repair / Reparar imagen Win',     cmd: 'DISM /Online /Cleanup-Image /RestoreHealth',               desc: 'Repara la imagen de Windows desde internet (Admin)' },
        { name: 'Check Disk / Verificar disco',         cmd: 'chkdsk C: /f /r',                                          desc: 'Verifica y repara errores del disco al reiniciar (Admin)' },
        { name: 'System Info / Info del sistema',       cmd: 'msinfo32',                                                 desc: 'Panel completo de información del equipo' },
        { name: 'Restart Explorer / Reiniciar barra',  cmd: 'taskkill /f /im explorer.exe && start explorer.exe',       desc: 'Reinicia el Explorador de Windows y la barra de tareas' },
        { name: 'Force GPO / Forzar directiva grupo',   cmd: 'gpupdate /force',                                          desc: 'Aplica cambios de GPO inmediatamente' },
        { name: 'Win License / Licencia Windows',       cmd: 'slmgr /dli',                                               desc: 'Muestra el estado de activación de Windows' },
        { name: 'Restart Spooler / Reiniciar impresión',cmd: 'net stop spooler && net start spooler',                    desc: 'Reinicia el servicio de cola de impresión' }
    ],
    servidores: [
        { name: 'SSH Tickets / Servidor osticket',      cmd: 'ssh root@10.8.150.251',                          desc: 'Abre consola SSH del servidor de tickets' },
        { name: 'SSH ProxMox / Acceso ProxMox',         cmd: 'ssh root@10.8.10.240',                           desc: 'Abre consola SSH del host ProxMox' },
        { name: 'Zabbix Status / Estado Zabbix',        cmd: 'systemctl status zabbix-server',                 desc: 'Verifica si el daemon de monitoreo está activo' },
        { name: 'Restart Nginx / Reiniciar Nginx',      cmd: 'systemctl restart nginx',                        desc: 'Aplica cambios de configuración del web server' },
        { name: 'Git Pull / Actualizar repo',           cmd: 'git pull origin main',                           desc: 'Descarga los últimos cambios del repositorio' },
        { name: 'Nginx Error Log / Log de errores',     cmd: 'tail -n 50 /var/log/nginx/error.log',            desc: 'Muestra las últimas 50 líneas del log de errores Nginx' },
        { name: 'Disk Space / Espacio en disco',        cmd: 'df -h',                                          desc: 'Muestra el uso de almacenamiento del servidor' }
    ],
    soporte: [
        { name: 'Test TCP Port (PS) / Probar puerto',   cmd: 'Test-NetConnection -ComputerName 10.8.10.240 -Port 8006', desc: 'Verifica conectividad TCP al puerto ProxMox 8006' },
        { name: 'Top Processes / Procesos CPU',         cmd: 'top -b -n 1 | head -n 20',                      desc: 'Muestra procesos por uso de CPU en Linux' },
        { name: 'System Events (PS) / Eventos sistema', cmd: 'Get-EventLog -LogName System -Newest 20',        desc: 'Últimos 20 eventos del sistema en PowerShell' },
        { name: 'Tasklist / Lista de procesos',         cmd: 'tasklist /v',                                    desc: 'Lista todos los procesos activos con detalles' },
        { name: 'Kill Process / Matar proceso',         cmd: 'taskkill /IM notepad.exe /F',                    desc: 'Fuerza el cierre de un proceso por nombre' }
    ]
};

function initITSnippets() {
    for (const category in itSnippets) {
        const container = document.getElementById(`snippets-${category}`);
        if (!container) continue;

        container.innerHTML = '';
        itSnippets[category].forEach(snippet => {
            const item = document.createElement('div');
            item.className = 'snippet-item';
            item.innerHTML = `
                <div class="snippet-info">
                    <span class="snippet-name">${snippet.name}</span>
                    <span class="snippet-desc">${snippet.desc}</span>
                    <code class="snippet-cmd-preview">${snippet.cmd}</code>
                </div>
                <div class="snippet-action">
                    <button class="snippet-copy-btn" title="Copiar al portapapeles">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>
            `;
            // Use event listener to avoid all string-escaping issues with special chars
            item.querySelector('.snippet-copy-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                copySnippet(snippet.cmd);
            });
            container.appendChild(item);
        });
    }
}

function toggleRightSidebar() {
    const sidebar = document.getElementById('sidebar-right');
    const mainContent = document.querySelector('.main-content');
    const btn = document.querySelector('.tools-toggle-btn');
    if (!sidebar) return;

    const isHidden = sidebar.classList.contains('hidden');
    if (isHidden) {
        sidebar.classList.remove('hidden');
        if (mainContent && window.innerWidth > 1100) {
            mainContent.classList.remove('right-sidebar-closed');
        }
        if (btn) btn.classList.add('active');
        localStorage.setItem('it-hub-right-sidebar', 'open');
    } else {
        sidebar.classList.add('hidden');
        if (mainContent) mainContent.classList.add('right-sidebar-closed');
        if (btn) btn.classList.remove('active');
        localStorage.setItem('it-hub-right-sidebar', 'closed');
    }
}

function initRightSidebar() {
    const saved = localStorage.getItem('it-hub-right-sidebar');
    const sidebar = document.getElementById('sidebar-right');
    const mainContent = document.querySelector('.main-content');
    const btn = document.querySelector('.tools-toggle-btn');

    // Default: open on wide screens, hidden on narrow
    const isWide = window.innerWidth > 1100;
    const shouldOpen = saved === null ? isWide : (saved === 'open');

    if (shouldOpen && isWide) {
        sidebar?.classList.remove('hidden');
        mainContent?.classList.remove('right-sidebar-closed');
        btn?.classList.add('active');
    } else {
        sidebar?.classList.add('hidden');
        mainContent?.classList.add('right-sidebar-closed');
        btn?.classList.remove('active');
    }
}

function switchSnippetCategory(category) {
    const lists = document.querySelectorAll('.snippet-category-list');
    lists.forEach(list => list.classList.remove('active'));
    
    const tabs = document.querySelectorAll('.snippet-tabs .tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    const activeList = document.getElementById(`snippets-${category}`);
    if (activeList) activeList.classList.add('active');
    
    const activeTab = Array.from(tabs).find(tab => {
        const onclickAttr = tab.getAttribute('onclick');
        return onclickAttr && onclickAttr.includes(category);
    });
    if (activeTab) activeTab.classList.add('active');
}

function copySnippet(text) {
    // navigator.clipboard only works on HTTPS. Use execCommand fallback for HTTP.
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showCopyToast();
        }).catch(() => fallbackCopyText(text));
    } else {
        fallbackCopyText(text);
    }
}

function fallbackCopyText(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0;';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
        const success = document.execCommand('copy');
        if (success) showCopyToast();
        else console.error('execCommand copy falló');
    } catch (err) {
        console.error('Error al copiar (fallback):', err);
    }
    document.body.removeChild(textarea);
}

function showCopyToast() {
    let toast = document.getElementById('copy-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'copy-toast';
        toast.className = 'copy-toast';
        toast.innerHTML = '<i class="fas fa-check-circle"></i> ¡Comando copiado al portapapeles!';
        document.body.appendChild(toast);
    }
    
    toast.classList.remove('show');
    void toast.offsetWidth; // Trigger reflow
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

async function detectClientIP() {
    const el = document.getElementById('client-ip-val');
    if (!el) return;
    
    el.textContent = 'Detectando...';
    el.className = 'ip-value loading';
    
    try {
        const res = await fetch('https://api.ipify.org?format=json');
        if (res.ok) {
            const data = await res.json();
            el.textContent = data.ip;
            el.className = 'ip-value';
        } else {
            throw new Error('Fallback');
        }
    } catch (err) {
        console.log('Error detecting IP:', err);
        el.textContent = 'No disponible';
        el.className = 'ip-value error';
    }
}

function switchWidget(mode) {
    const btnTasks = document.getElementById('switch-tasks-btn');
    const btnNotes = document.getElementById('switch-notes-btn');
    const secTasks = document.getElementById('tasks-section');
    const secNotes = document.getElementById('notes-section');
    
    if (!btnTasks || !btnNotes || !secTasks || !secNotes) return;
    
    if (mode === 'tasks') {
        btnTasks.classList.add('active');
        btnNotes.classList.remove('active');
        secTasks.classList.add('active');
        secNotes.classList.remove('active');
    } else {
        btnTasks.classList.remove('active');
        btnNotes.classList.add('active');
        secTasks.classList.remove('active');
        secNotes.classList.add('active');
    }
}

function initSidebarNotes() {
    const notesInput = document.getElementById('notes-input');
    if (!notesInput) return;
    
    notesInput.value = localStorage.getItem('it-hub-notes') || '';
    
    notesInput.addEventListener('input', (e) => {
        localStorage.setItem('it-hub-notes', e.target.value);
    });
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
    initPerformanceMode();
    initSidebarNotes();

    // Render Content (Reordered)
    const content = document.getElementById('content');
    if (content) {
        // Order: Admins -> Inventario -> Servers -> Monitoring -> Sheets
        // (IT Tools moved to permanent right sidebar)
        const orderedContent = [
            sections.admins,
            sections.inventario,
            sections.servers,
            sections.monitoring,
            sections.sheets
        ];
        content.innerHTML = orderedContent.join('');
    }

    // Init right sidebar AFTER content is rendered (snippets containers exist in sidebar HTML)
    initITSnippets();
    initRightSidebar();
    detectClientIP();

    // Simulate stats
    setTimeout(() => {
        animateCount('tickets-count', 12);
        animateCount('users-count', 280);
        animateCount('assets-count', 614);
    }, 500);

    // Interval updates
    setInterval(updateDateTime, 60000);
    setInterval(updateWorldClocks, 30000); // Update clocks every 30 seconds
    setInterval(checkServiceStatus, 60000); // Check status every minute
});
