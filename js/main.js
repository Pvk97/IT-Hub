/**
 * IT HUB MAIN SCRIPT
 * Refactored for better organization and maintenance.
 */

const Config = {
    api: {
        tickets: 'http://10.8.150.251/osticket/api/tickets.json',
        ticketsKey: 'C1A8487130D18339D836D706A62F3ACE',
        weather: 'https://api.open-meteo.com/v1/forecast?latitude=-34.9&longitude=-56.2&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=America/Montevideo',
        // Solo tecnología — más relevante para el equipo IT
        news: 'https://newsdata.io/api/1/latest?apikey=pub_bb7cec6cbbff44629f878bdd851096c1&country=uy&language=es&category=technology'
    },
    links: {
        jellyfin: 'http://10.8.10.119/web/#/home'
    }
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
                    <span class="status-dot" id="status-esxi" title="Verificando..."></span>
                    <i class="fas fa-server"></i> ESXi 10.80
                </a>
                <a href="https://10.8.10.240:8006/" target="_blank" class="card-link mono">
                    <span class="status-dot" id="status-proxmox" title="Verificando..."></span>
                    <i class="fab fa-linux"></i> ProxMox 10.240
                </a>
                <a href="${Config.links.jellyfin}" target="_blank" class="card-link">
                    <span class="status-dot" id="status-jellyfin" title="Verificando..."></span>
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
                    <span class="status-dot" id="status-zabbix" title="Verificando..."></span>
                    <i class="fas fa-chart-line"></i> Zabbix
                </a>
                <a href="http://10.8.1.111/doc/page/preview.asp" target="_blank" class="card-link">
                    <span class="status-dot" id="status-camara" title="Verificando..."></span>
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
    toolsSuite: `
        <div class="card tools-suite-card" style="grid-column: 1 / -1;" data-keywords="password pass generator subredes cidr dns lookup port puertos helpdesk herramientas">
            <div class="card-header-flex">
                <h2 class="card-title"><i class="fas fa-toolbox"></i> Suite de Herramientas Helpdesk</h2>
                <div class="suite-tabs">
                    <button class="suite-tab-btn active" onclick="switchSuiteTab('passgen')"><i class="fas fa-key"></i> Generador Pass</button>
                    <button class="suite-tab-btn" onclick="switchSuiteTab('subnet')"><i class="fas fa-network-wired"></i> Calc. Subredes</button>
                    <button class="suite-tab-btn" onclick="switchSuiteTab('dns')"><i class="fas fa-globe"></i> DNS Lookup</button>
                    <button class="suite-tab-btn" onclick="switchSuiteTab('ports')"><i class="fas fa-ethernet"></i> Buscador Puertos</button>
                </div>
            </div>

            <!-- Tab 1: Password Generator -->
            <div id="suite-tab-passgen" class="suite-tab-content active">
                <div class="passgen-container">
                    <div class="passgen-display-group">
                        <input type="text" id="passgen-output" class="passgen-input" readonly placeholder="Tu contraseña segura...">
                        <button class="passgen-btn copy" onclick="copyPassword()" title="Copiar contraseña"><i class="fas fa-copy"></i> Copiar</button>
                        <button class="passgen-btn refresh" onclick="generatePassword()" title="Regenerar"><i class="fas fa-rotate"></i></button>
                    </div>
                    <div class="passgen-strength-wrapper">
                        <div class="strength-bar-container">
                            <div id="passgen-strength-bar" class="strength-bar strong"></div>
                        </div>
                        <span id="passgen-strength-text" class="strength-text">Fuerte (16 caracteres)</span>
                    </div>
                    <div class="passgen-options-grid">
                        <div class="passgen-slider-group">
                            <label for="passgen-length">Longitud: <span id="passgen-length-val">16</span></label>
                            <input type="range" id="passgen-length" min="8" max="48" value="16" oninput="updatePassLength(this.value)">
                        </div>
                        <div class="passgen-checkboxes">
                            <label><input type="checkbox" id="pass-upper" checked onchange="generatePassword()"> Mayúsculas (A-Z)</label>
                            <label><input type="checkbox" id="pass-lower" checked onchange="generatePassword()"> Minúsculas (a-z)</label>
                            <label><input type="checkbox" id="pass-numbers" checked onchange="generatePassword()"> Números (0-9)</label>
                            <label><input type="checkbox" id="pass-symbols" checked onchange="generatePassword()"> Símbolos (!@#$%^&*)</label>
                            <label><input type="checkbox" id="pass-no-ambiguous" onchange="generatePassword()"> Evitar ambiguos (l, 1, I, o, 0, O)</label>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tab 2: Subnet Calculator -->
            <div id="suite-tab-subnet" class="suite-tab-content">
                <div class="subnet-calc-container">
                    <div class="subnet-input-row">
                        <div class="input-field">
                            <label><i class="fas fa-terminal"></i> Dirección IP / Prefijo CIDR:</label>
                            <div class="subnet-input-combo">
                                <input type="text" id="subnet-ip-input" class="subnet-text-input" placeholder="Ej: 10.8.100.15/22 o 192.168.1.50/24" value="10.8.100.15/22">
                                <button class="subnet-calc-btn" onclick="calculateSubnet()"><i class="fas fa-calculator"></i> Calcular</button>
                            </div>
                        </div>
                        <div class="subnet-quick-presets">
                            <span>VLANs Rápidas:</span>
                            <button class="preset-btn" onclick="applySubnetPreset('10.8.10.1/24')">10.8.10.0/24 (Servers)</button>
                            <button class="preset-btn" onclick="applySubnetPreset('10.8.1.1/24')">10.8.1.0/24 (Cámaras)</button>
                            <button class="preset-btn" onclick="applySubnetPreset('10.8.150.1/24')">10.8.150.0/24 (Tickets)</button>
                            <button class="preset-btn" onclick="applySubnetPreset('10.8.100.1/22')">10.8.100.0/22 (DHCP UY)</button>
                        </div>
                    </div>

                    <div id="subnet-results" class="subnet-results-grid">
                        <!-- Injected by JS -->
                    </div>
                </div>
            </div>

            <!-- Tab 3: DNS Lookup -->
            <div id="suite-tab-dns" class="suite-tab-content">
                <div class="dns-lookup-container">
                    <div class="dns-input-row">
                        <div class="dns-input-group">
                            <i class="fas fa-search"></i>
                            <input type="text" id="dns-domain-input" class="dns-input" placeholder="Ingresa dominio (ej: google.com, ingenious.agency)..." value="google.com">
                        </div>
                        <select id="dns-type-select" class="dns-type-select">
                            <option value="A">A (IPv4)</option>
                            <option value="AAAA">AAAA (IPv6)</option>
                            <option value="MX">MX (Mail Servers)</option>
                            <option value="TXT">TXT (SPF/DKIM/Verif)</option>
                            <option value="CNAME">CNAME (Alias)</option>
                            <option value="NS">NS (NameServers)</option>
                        </select>
                        <button class="dns-query-btn" onclick="performDnsLookup()"><i class="fas fa-cloud-arrow-down"></i> Consultar</button>
                    </div>
                    <div id="dns-status-message" class="dns-status"></div>
                    <div id="dns-results-table-wrapper" class="dns-results-wrapper">
                        <!-- Results table injected by JS -->
                    </div>
                </div>
            </div>

            <!-- Tab 4: Port Finder -->
            <div id="suite-tab-ports" class="suite-tab-content">
                <div class="ports-finder-container">
                    <div class="ports-search-row">
                        <div class="ports-search-group">
                            <i class="fas fa-filter"></i>
                            <input type="text" id="ports-search-input" class="ports-input" placeholder="Buscar por número de puerto (ej: 22, 3389, 8006) o servicio (SSH, RDP, DNS)..." oninput="filterPortsTable(this.value)">
                        </div>
                    </div>
                    <div class="ports-table-wrapper">
                        <table class="ports-table">
                            <thead>
                                <tr>
                                    <th>Puerto</th>
                                    <th>Protocolo</th>
                                    <th>Servicio / Uso</th>
                                    <th>Descripción Helpdesk</th>
                                </tr>
                            </thead>
                            <tbody id="ports-table-body">
                                <!-- Injected by JS -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `,
    learningHub: `
        <div class="card learning-hub-card" style="grid-column: 1 / -1;" data-keywords="aprender aprendizaje recursos linux redes cisco docker cloud ia devops certs">
            <h2 class="card-title"><i class="fas fa-graduation-cap"></i> Recursos & Aprendizaje IT</h2>
            
            <div class="learning-categories-grid">
                <!-- Linux & Sysadmin -->
                <div class="learning-category-card">
                    <div class="cat-header">
                        <i class="fab fa-linux cat-icon linux"></i>
                        <h4>Linux & SysAdmin</h4>
                    </div>
                    <ul class="learning-links-list">
                        <li><a href="https://overthewire.org/wargames/bandit/" target="_blank"><i class="fas fa-gamepad"></i> <strong>OverTheWire (Bandit)</strong> <span>Juego práctico para dominar terminal SSH</span></a></li>
                        <li><a href="https://linuxjourney.com/" target="_blank"><i class="fas fa-book-open"></i> <strong>Linux Journey</strong> <span>Guía estructurada de comandos, permisos y kernel</span></a></li>
                        <li><a href="https://explainshell.com/" target="_blank"><i class="fas fa-terminal"></i> <strong>ExplainShell</strong> <span>Explicación visual detallada de cualquier comando bash</span></a></li>
                        <li><a href="https://crontab.guru/" target="_blank"><i class="fas fa-clock"></i> <strong>Crontab.guru</strong> <span>Editor interactivo para expresiones cron</span></a></li>
                    </ul>
                </div>

                <!-- Redes & Telecom -->
                <div class="learning-category-card">
                    <div class="cat-header">
                        <i class="fas fa-network-wired cat-icon networks"></i>
                        <h4>Redes & Infraestructura</h4>
                    </div>
                    <ul class="learning-links-list">
                        <li><a href="https://www.professormesser.com/network-plus/n10-008/n10-008-training-course/" target="_blank"><i class="fas fa-video"></i> <strong>Prof. Messer (Network+)</strong> <span>Curso gratuito de fundamentos de redes</span></a></li>
                        <li><a href="https://subnetipv4.com/" target="_blank"><i class="fas fa-calculator"></i> <strong>Subnetting Practice</strong> <span>Entrenamiento interactivo de cálculo de subredes</span></a></li>
                        <li><a href="https://bgp.he.net/" target="_blank"><i class="fas fa-globe"></i> <strong>Hurricane Electric BGP</strong> <span>Explorador de ASNs, prefijos y peering mundial</span></a></li>
                        <li><a href="https://www.wireshark.org/docs/" target="_blank"><i class="fas fa-microscope"></i> <strong>Wireshark Docs</strong> <span>Análisis de paquetes y captura de tráfico</span></a></li>
                    </ul>
                </div>

                <!-- Cloud, Docker & DevOps -->
                <div class="learning-category-card">
                    <div class="cat-header">
                        <i class="fas fa-cloud cat-icon cloud"></i>
                        <h4>Cloud, Docker & DevOps</h4>
                    </div>
                    <ul class="learning-links-list">
                        <li><a href="https://labs.play-with-docker.com/" target="_blank"><i class="fab fa-docker"></i> <strong>Play with Docker</strong> <span>Laboratorio interactivo en el navegador</span></a></li>
                        <li><a href="https://roadmap.sh/devops" target="_blank"><i class="fas fa-map"></i> <strong>Roadmap DevOps</strong> <span>Ruta de aprendizaje paso a paso</span></a></li>
                        <li><a href="https://www.skillsboost.google/" target="_blank"><i class="fab fa-google"></i> <strong>Google Cloud Skills</strong> <span>Laboratorios oficiales de GCP e infraestructura</span></a></li>
                        <li><a href="https://killercoda.com/" target="_blank"><i class="fas fa-cube"></i> <strong>KillerCoda</strong> <span>Entornos interactivos de Linux, Kubernetes y Git</span></a></li>
                    </ul>
                </div>

                <!-- IA, Automatización & Dev -->
                <div class="learning-category-card">
                    <div class="cat-header">
                        <i class="fas fa-robot cat-icon ai"></i>
                        <h4>IA, Automatización & Dev</h4>
                    </div>
                    <ul class="learning-links-list">
                        <li><a href="https://www.promptingguide.ai/es" target="_blank"><i class="fas fa-brain"></i> <strong>Prompt Engineering Guide</strong> <span>Guía avanzada para exprimir LLMs e IA</span></a></li>
                        <li><a href="https://huggingface.co/learn" target="_blank"><i class="fas fa-cubes"></i> <strong>Hugging Face Learn</strong> <span>Cursos de Deep Learning y modelos de lenguaje</span></a></li>
                        <li><a href="https://roadmap.sh/python" target="_blank"><i class="fab fa-python"></i> <strong>Roadmap Python</strong> <span>De scripting para SysAdmins a proyectos full</span></a></li>
                        <li><a href="https://learnxinyminutes.com/" target="_blank"><i class="fas fa-bolt"></i> <strong>Learn X in Y minutes</strong> <span>Sintaxis de cualquier lenguaje en una sola página</span></a></li>
                    </ul>
                </div>
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
                            <button class="tab-btn" onclick="switchSnippetCategory('windows')">CMD/Win</button>
                            <button class="tab-btn" onclick="switchSnippetCategory('servidores')">Servidores/SSH</button>
                            <button class="tab-btn" onclick="switchSnippetCategory('soporte')">Diagnóstico</button>
                        </div>
                    </div>
                    
                    <div class="panel-content">
                        <div id="snippets-redes" class="snippet-category-list active"></div>
                        <div id="snippets-windows" class="snippet-category-list"></div>
                        <div id="snippets-servidores" class="snippet-category-list"></div>
                        <div id="snippets-soporte" class="snippet-category-list"></div>
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
    const btnProjects = document.getElementById('switch-projects-btn');
    const btnNotes = document.getElementById('switch-notes-btn');
    const secTasks = document.getElementById('tasks-section');
    const secProjects = document.getElementById('projects-section');
    const secNotes = document.getElementById('notes-section');
    
    if (!secTasks || !secNotes) return;
    
    // Remove all active states
    [btnTasks, btnProjects, btnNotes].forEach(b => b?.classList.remove('active'));
    [secTasks, secProjects, secNotes].forEach(s => s?.classList.remove('active'));

    if (mode === 'tasks') {
        btnTasks?.classList.add('active');
        secTasks?.classList.add('active');
    } else if (mode === 'projects') {
        btnProjects?.classList.add('active');
        secProjects?.classList.add('active');
    } else {
        btnNotes?.classList.add('active');
        secNotes?.classList.add('active');
    }
}

// ====== PROJECT MANAGER ======
function initProjectManager() {
    const nameInput = document.getElementById('project-name-input');
    const statusSelect = document.getElementById('project-status-select');
    const addBtn = document.getElementById('project-add-btn');
    const projectList = document.getElementById('project-list');

    if (!nameInput || !projectList) return;

    let projects = JSON.parse(localStorage.getItem('it-hub-projects')) || [
        { id: 1, name: 'Revisión periódica de backups Proxmox', status: 'progress' },
        { id: 2, name: 'Auditoría de activos Snipe-IT', status: 'pending' },
        { id: 3, name: 'Renovación de certificados SSL internos', status: 'done' }
    ];

    function saveProjects() {
        localStorage.setItem('it-hub-projects', JSON.stringify(projects));
    }

    function renderProjects() {
        projectList.innerHTML = '';
        if (projects.length === 0) {
            projectList.innerHTML = '<li class="project-empty-msg">No hay proyectos activos. Agrega uno arriba.</li>';
            return;
        }

        projects.forEach((proj, idx) => {
            const li = document.createElement('li');
            li.className = `project-item status-${proj.status}`;
            
            const statusLabels = {
                progress: '⚡ En curso',
                pending: '⏳ Pendiente',
                done: '✅ Listo'
            };

            li.innerHTML = `
                <div class="project-info">
                    <span class="project-name">${proj.name}</span>
                    <span class="project-badge badge-${proj.status}" title="Clic para cambiar estado">${statusLabels[proj.status]}</span>
                </div>
                <div class="project-actions">
                    <button class="project-cycle-btn" title="Cambiar estado"><i class="fas fa-arrows-rotate"></i></button>
                    <button class="project-del-btn" title="Eliminar"><i class="fas fa-trash"></i></button>
                </div>
            `;

            // Cycle status
            const cycleBtn = li.querySelector('.project-cycle-btn');
            const badge = li.querySelector('.project-badge');
            const cycleHandler = () => {
                const nextStatus = proj.status === 'progress' ? 'done' : proj.status === 'done' ? 'pending' : 'progress';
                projects[idx].status = nextStatus;
                saveProjects();
                renderProjects();
            };
            cycleBtn.addEventListener('click', cycleHandler);
            badge.addEventListener('click', cycleHandler);

            // Delete
            li.querySelector('.project-del-btn').addEventListener('click', () => {
                projects.splice(idx, 1);
                saveProjects();
                renderProjects();
            });

            projectList.appendChild(li);
        });
    }

    function addProject() {
        const name = nameInput.value.trim();
        const status = statusSelect ? statusSelect.value : 'progress';
        if (name) {
            projects.unshift({ id: Date.now(), name, status });
            saveProjects();
            renderProjects();
            nameInput.value = '';
        }
    }

    addBtn?.addEventListener('click', addProject);
    nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addProject();
    });

    renderProjects();
}

function initSidebarNotes() {
    const notesInput = document.getElementById('notes-input');
    if (!notesInput) return;
    
    notesInput.value = localStorage.getItem('it-hub-notes') || '';
    
    notesInput.addEventListener('input', (e) => {
        localStorage.setItem('it-hub-notes', e.target.value);
    });
}

// ====== SUITE TABS ======
function switchSuiteTab(tabKey) {
    const contents = document.querySelectorAll('.suite-tab-content');
    const buttons = document.querySelectorAll('.suite-tab-btn');

    contents.forEach(c => c.classList.remove('active'));
    buttons.forEach(b => b.classList.remove('active'));

    const targetContent = document.getElementById(`suite-tab-${tabKey}`);
    if (targetContent) targetContent.classList.add('active');

    const clickedBtn = Array.from(buttons).find(b => {
        const oc = b.getAttribute('onclick') || '';
        return oc.includes(tabKey);
    });
    if (clickedBtn) clickedBtn.classList.add('active');

    // Trigger initial renders if needed
    if (tabKey === 'subnet') calculateSubnet();
    if (tabKey === 'ports') filterPortsTable('');
}

// ====== 1. PASSWORD GENERATOR ======
function initPasswordGenerator() {
    generatePassword();
}

function updatePassLength(val) {
    const lenVal = document.getElementById('passgen-length-val');
    if (lenVal) lenVal.textContent = val;
    generatePassword();
}

function generatePassword() {
    const output = document.getElementById('passgen-output');
    if (!output) return;

    const length = parseInt(document.getElementById('passgen-length')?.value || '16', 10);
    const useUpper = document.getElementById('pass-upper')?.checked ?? true;
    const useLower = document.getElementById('pass-lower')?.checked ?? true;
    const useNumbers = document.getElementById('pass-numbers')?.checked ?? true;
    const useSymbols = document.getElementById('pass-symbols')?.checked ?? true;
    const noAmbiguous = document.getElementById('pass-no-ambiguous')?.checked ?? false;

    let chars = '';
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (noAmbiguous) {
        upper = upper.replace(/[IO]/g, '');
        lower = lower.replace(/[lo]/g, '');
        numbers = numbers.replace(/[01]/g, '');
    }

    if (useUpper) chars += upper;
    if (useLower) chars += lower;
    if (useNumbers) chars += numbers;
    if (useSymbols) chars += symbols;

    if (!chars) chars = lower; // Fallback

    let password = '';
    // Ensure at least one from each selected pool
    const pools = [];
    if (useUpper) pools.push(upper);
    if (useLower) pools.push(lower);
    if (useNumbers) pools.push(numbers);
    if (useSymbols) pools.push(symbols);

    pools.forEach(pool => {
        password += pool[Math.floor(Math.random() * pool.length)];
    });

    for (let i = password.length; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    // Shuffle
    password = password.split('').sort(() => 0.5 - Math.random()).join('');
    output.value = password;

    // Strength meter
    evaluatePasswordStrength(password);
}

function evaluatePasswordStrength(pass) {
    const bar = document.getElementById('passgen-strength-bar');
    const txt = document.getElementById('passgen-strength-text');
    if (!bar || !txt) return;

    let score = 0;
    if (pass.length >= 12) score += 1;
    if (pass.length >= 16) score += 1;
    if (pass.length >= 24) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[a-z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    bar.className = 'strength-bar';
    if (score <= 3) {
        bar.classList.add('weak');
        txt.textContent = `Débil (${pass.length} caracteres)`;
        txt.style.color = 'var(--red)';
    } else if (score <= 5) {
        bar.classList.add('medium');
        txt.textContent = `Media (${pass.length} caracteres)`;
        txt.style.color = 'var(--orange)';
    } else if (score <= 6) {
        bar.classList.add('strong');
        txt.textContent = `Fuerte (${pass.length} caracteres)`;
        txt.style.color = 'var(--blue)';
    } else {
        bar.classList.add('very-strong');
        txt.textContent = `Blindada / Muy Fuerte (${pass.length} caracteres)`;
        txt.style.color = 'var(--green)';
    }
}

function copyPassword() {
    const output = document.getElementById('passgen-output');
    if (output && output.value) {
        copySnippet(output.value);
    }
}

// ====== 2. SUBNET CALCULATOR ======
function applySubnetPreset(cidr) {
    const input = document.getElementById('subnet-ip-input');
    if (input) {
        input.value = cidr;
        calculateSubnet();
    }
}

function calculateSubnet() {
    const inputEl = document.getElementById('subnet-ip-input');
    const resultsEl = document.getElementById('subnet-results');
    if (!inputEl || !resultsEl) return;

    let raw = inputEl.value.trim();
    if (!raw) raw = '10.8.100.15/22';

    // Parse IP and CIDR
    let [ipStr, cidrStr] = raw.split('/');
    let prefix = parseInt(cidrStr || '24', 10);
    if (isNaN(prefix) || prefix < 0 || prefix > 32) prefix = 24;

    const ipParts = ipStr.split('.').map(Number);
    if (ipParts.length !== 4 || ipParts.some(p => isNaN(p) || p < 0 || p > 255)) {
        resultsEl.innerHTML = '<div class="subnet-error"><i class="fas fa-exclamation-circle"></i> Dirección IP inválida. Usa formato como <code>10.8.100.15/22</code> o <code>192.168.1.1/24</code></div>';
        return;
    }

    const ipInt = ((ipParts[0] << 24) >>> 0) + ((ipParts[1] << 16) >>> 0) + ((ipParts[2] << 8) >>> 0) + (ipParts[3] >>> 0);
    const maskInt = prefix === 0 ? 0 : (((0xFFFFFFFF << (32 - prefix))) >>> 0);
    const wildcardInt = (~maskInt) >>> 0;

    const netInt = (ipInt & maskInt) >>> 0;
    const broadInt = (netInt | wildcardInt) >>> 0;

    const intToIp = (num) => [
        (num >>> 24) & 255,
        (num >>> 16) & 255,
        (num >>> 8) & 255,
        num & 255
    ].join('.');

    const totalHosts = prefix >= 31 ? (prefix === 31 ? 2 : 1) : (Math.pow(2, 32 - prefix) - 2);
    const firstUsable = prefix >= 31 ? netInt : (netInt + 1) >>> 0;
    const lastUsable = prefix >= 31 ? broadInt : (broadInt - 1) >>> 0;

    // Classification
    let ipClass = 'A';
    if (ipParts[0] >= 128 && ipParts[0] <= 191) ipClass = 'B';
    else if (ipParts[0] >= 192 && ipParts[0] <= 223) ipClass = 'C';
    else if (ipParts[0] >= 224 && ipParts[0] <= 239) ipClass = 'D (Multicast)';
    else if (ipParts[0] >= 240) ipClass = 'E (Experimental)';

    const isPrivate = (
        (ipParts[0] === 10) ||
        (ipParts[0] === 172 && ipParts[1] >= 16 && ipParts[1] <= 31) ||
        (ipParts[0] === 192 && ipParts[1] === 168)
    );

    resultsEl.innerHTML = `
        <div class="subnet-stat-box highlight">
            <span class="box-label">Dirección de Red (Network ID)</span>
            <span class="box-val mono">${intToIp(netInt)} /${prefix}</span>
        </div>
        <div class="subnet-stat-box highlight">
            <span class="box-label">Broadcast</span>
            <span class="box-val mono">${intToIp(broadInt)}</span>
        </div>
        <div class="subnet-stat-box">
            <span class="box-label">Máscara de Subred</span>
            <span class="box-val mono">${intToIp(maskInt)}</span>
        </div>
        <div class="subnet-stat-box">
            <span class="box-label">Máscara Wildcard</span>
            <span class="box-val mono">${intToIp(wildcardInt)}</span>
        </div>
        <div class="subnet-stat-box">
            <span class="box-label">Primer Host Usable</span>
            <span class="box-val mono">${intToIp(firstUsable)}</span>
        </div>
        <div class="subnet-stat-box">
            <span class="box-label">Último Host Usable</span>
            <span class="box-val mono">${intToIp(lastUsable)}</span>
        </div>
        <div class="subnet-stat-box">
            <span class="box-label">Hosts Asignables</span>
            <span class="box-val mono text-blue">${totalHosts.toLocaleString('es-UY')}</span>
        </div>
        <div class="subnet-stat-box">
            <span class="box-label">Clase / Ámbito</span>
            <span class="box-val"><span class="badge-${isPrivate ? 'private' : 'public'}">${isPrivate ? 'Privada (RFC 1918)' : 'Pública'}</span> (Clase ${ipClass})</span>
        </div>
    `;
}

// ====== 3. DNS LOOKUP (Cloudflare DoH) ======
async function performDnsLookup() {
    const domainInput = document.getElementById('dns-domain-input');
    const typeSelect = document.getElementById('dns-type-select');
    const statusMsg = document.getElementById('dns-status-message');
    const tableWrapper = document.getElementById('dns-results-table-wrapper');

    if (!domainInput || !tableWrapper) return;

    let domain = domainInput.value.trim();
    if (!domain) {
        domain = 'google.com';
        domainInput.value = domain;
    }

    // Clean protocol if user pasted URL
    domain = domain.replace(/^https?:\/\//i, '').replace(/\/.*$/, '').trim();

    const type = typeSelect ? typeSelect.value : 'A';

    statusMsg.innerHTML = '<span class="loading-spinner"><i class="fas fa-circle-notch fa-spin"></i> Consultando registros DNS vía Cloudflare DoH...</span>';
    tableWrapper.innerHTML = '';

    try {
        const url = `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domain)}&type=${type}`;
        const res = await fetch(url, {
            headers: { 'Accept': 'application/dns-json' }
        });

        if (!res.ok) throw new Error(`HTTP Error ${res.status}`);

        const data = await res.json();
        statusMsg.innerHTML = '';

        if (data.Status !== 0) {
            const rcodeMap = {
                1: 'Format Error',
                2: 'Server Failure',
                3: 'Dominio No Existe (NXDOMAIN)',
                4: 'Not Implemented',
                5: 'Refused'
            };
            statusMsg.innerHTML = `<span class="dns-warn"><i class="fas fa-triangle-exclamation"></i> Respuesta DNS: ${rcodeMap[data.Status] || 'Error código ' + data.Status}</span>`;
            return;
        }

        const answers = data.Answer || [];
        if (answers.length === 0) {
            statusMsg.innerHTML = `<span class="dns-info"><i class="fas fa-info-circle"></i> No se encontraron registros de tipo <strong>${type}</strong> para <code>${domain}</code>.</span>`;
            return;
        }

        const typeMap = {
            1: 'A', 28: 'AAAA', 15: 'MX', 16: 'TXT', 5: 'CNAME', 2: 'NS', 6: 'SOA', 12: 'PTR'
        };

        let html = `
            <table class="dns-table">
                <thead>
                    <tr>
                        <th>Host / Nombre</th>
                        <th>Tipo</th>
                        <th>TTL</th>
                        <th>Valor / Destino</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
        `;

        answers.forEach(ans => {
            const recordType = typeMap[ans.type] || ans.type;
            const dataVal = ans.data || '';
            html += `
                <tr>
                    <td class="mono">${ans.name}</td>
                    <td><span class="dns-badge badge-${recordType}">${recordType}</span></td>
                    <td class="mono">${ans.TTL}s</td>
                    <td class="mono dns-data-val">${dataVal}</td>
                    <td>
                        <button class="dns-copy-btn" onclick="copySnippet('${dataVal.replace(/'/g, "\\'")}')" title="Copiar valor">
                            <i class="fas fa-copy"></i>
                        </button>
                    </td>
                </tr>
            `;
        });

        html += '</tbody></table>';
        tableWrapper.innerHTML = html;

    } catch (err) {
        console.error('DNS Lookup Error:', err);
        statusMsg.innerHTML = '<span class="dns-error"><i class="fas fa-circle-xmark"></i> Error de conexión al consultar DNS. Verifica tu red externa.</span>';
    }
}

// ====== 4. PORT FINDER & REFERENCE ======
const commonPortsData = [
    { port: 20, proto: 'TCP', service: 'FTP Data', desc: 'Transferencia de archivos FTP (canal de datos)' },
    { port: 21, proto: 'TCP', service: 'FTP Control', desc: 'Comandos y autenticación de clientes FTP' },
    { port: 22, proto: 'TCP', service: 'SSH / SFTP', desc: 'Acceso seguro remoto por consola y transferencia cifrada' },
    { port: 23, proto: 'TCP', service: 'Telnet', desc: 'Protocolo de consola sin cifrar (obsoleto/inseguro)' },
    { port: 25, proto: 'TCP', service: 'SMTP', desc: 'Envío y retransmisión de correo entre servidores' },
    { port: 53, proto: 'TCP/UDP', service: 'DNS', desc: 'Resolución de nombres de dominio a direcciones IP' },
    { port: 67, proto: 'UDP', service: 'DHCP Server', desc: 'Servidor DHCP entrega IPs a clientes' },
    { port: 68, proto: 'UDP', service: 'DHCP Client', desc: 'Cliente DHCP solicita configuración de red' },
    { port: 69, proto: 'UDP', service: 'TFTP', desc: 'Transferencia trivial para booteo PXE y firmware de routers' },
    { port: 80, proto: 'TCP', service: 'HTTP', desc: 'Navegación web sin cifrado' },
    { port: 110, proto: 'TCP', service: 'POP3', desc: 'Descarga de correos sin cifrar' },
    { port: 123, proto: 'UDP', service: 'NTP', desc: 'Sincronización de reloj y hora de red' },
    { port: 137, proto: 'UDP', service: 'NetBIOS Name', desc: 'Resolución de nombres NetBIOS de Windows' },
    { port: 139, proto: 'TCP', service: 'NetBIOS Session', desc: 'Compartir archivos e impresoras en Windows antiguo' },
    { port: 143, proto: 'TCP', service: 'IMAP', desc: 'Gestión remota de bandejas de correo' },
    { port: 161, proto: 'UDP', service: 'SNMP', desc: 'Monitoreo de switches, routers e impresoras' },
    { port: 162, proto: 'UDP', service: 'SNMP Trap', desc: 'Alertas y eventos enviados por dispositivos de red' },
    { port: 389, proto: 'TCP', service: 'LDAP', desc: 'Consultas a Active Directory y directorios corporativos' },
    { port: 443, proto: 'TCP', service: 'HTTPS', desc: 'Tráfico web seguro con TLS/SSL' },
    { port: 445, proto: 'TCP', service: 'SMB', desc: 'Compartir archivos en red Windows (Server Message Block)' },
    { port: 465, proto: 'TCP', service: 'SMTPS', desc: 'Envío de correo seguro sobre SSL' },
    { port: 514, proto: 'UDP', service: 'Syslog', desc: 'Centralización de logs de servidores y firewalls' },
    { port: 587, proto: 'TCP', service: 'SMTP Submission', desc: 'Envío de correo desde clientes con autenticación TLS' },
    { port: 636, proto: 'TCP', service: 'LDAPS', desc: 'Active Directory seguro sobre SSL' },
    { port: 993, proto: 'TCP', service: 'IMAPS', desc: 'Buzón de correo IMAP seguro con SSL' },
    { port: 995, proto: 'TCP', service: 'POP3S', desc: 'Descarga de correo POP3 segura con SSL' },
    { port: 1433, proto: 'TCP', service: 'MS SQL Server', desc: 'Base de datos Microsoft SQL' },
    { port: 1521, proto: 'TCP', service: 'Oracle DB', desc: 'Base de datos corporativa Oracle' },
    { port: 3306, proto: 'TCP', service: 'MySQL / MariaDB', desc: 'Base de datos relacional MySQL' },
    { port: 3389, proto: 'TCP/UDP', service: 'RDP', desc: 'Escritorio Remoto de Microsoft Windows' },
    { port: 5432, proto: 'TCP', service: 'PostgreSQL', desc: 'Base de datos relacional PostgreSQL' },
    { port: 5900, proto: 'TCP', service: 'VNC', desc: 'Control remoto de pantalla multiplataforma' },
    { port: 6379, proto: 'TCP', service: 'Redis', desc: 'Base de datos en memoria y caché' },
    { port: 8006, proto: 'TCP', service: 'Proxmox VE', desc: 'Panel web de administración de virtualización Proxmox' },
    { port: 8080, proto: 'TCP', service: 'HTTP Proxy / Alt', desc: 'Servidores web alternativos, Apache Tomcat o proxies' },
    { port: 8443, proto: 'TCP', service: 'HTTPS Alt', desc: 'Puertos alternativos de administración web segura' },
    { port: 9000, proto: 'TCP', service: 'Portainer / PHP-FPM', desc: 'Gestor web de contenedores Docker' },
    { port: 9090, proto: 'TCP', service: 'Prometheus / Cockpit', desc: 'Métricas de infraestructura y panel Linux Cockpit' },
    { port: 9100, proto: 'TCP', service: 'Node Exporter', desc: 'Exportador de métricas del host Linux para Prometheus' }
];

function filterPortsTable(searchTerm) {
    const tbody = document.getElementById('ports-table-body');
    if (!tbody) return;

    const term = (searchTerm || '').toLowerCase().trim();
    const filtered = commonPortsData.filter(p => {
        return p.port.toString().includes(term) ||
               p.proto.toLowerCase().includes(term) ||
               p.service.toLowerCase().includes(term) ||
               p.desc.toLowerCase().includes(term);
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-secondary); padding: 16px;">No se encontraron puertos para "<strong>${searchTerm}</strong>"</td></tr>`;
        return;
    }

    tbody.innerHTML = filtered.map(p => `
        <tr>
            <td class="mono"><span class="port-number-badge">${p.port}</span></td>
            <td><span class="proto-tag">${p.proto}</span></td>
            <td><strong>${p.service}</strong></td>
            <td>${p.desc}</td>
        </tr>
    `).join('');
}

// ====== 5. TIP DEL DÍA IT ======
const itTipsData = [
    {
        cat: 'Linux',
        icon: 'fab fa-linux',
        title: 'Ver qué proceso usa un puerto específico',
        desc: 'Identifica rápidamente qué servicio o PID está escuchando en un puerto con lsof o ss.',
        cmd: 'sudo ss -tulpn | grep :8080   # o: sudo lsof -i :8080'
    },
    {
        cat: 'Redes',
        icon: 'fas fa-network-wired',
        title: 'Prueba de puerto TCP rápida desde Windows',
        desc: 'No necesitas Telnet. PowerShell tiene un cmdlet nativo para verificar si un puerto remoto responde.',
        cmd: 'Test-NetConnection -ComputerName 10.8.10.240 -Port 8006'
    },
    {
        cat: 'Docker',
        icon: 'fab fa-docker',
        title: 'Limpiar contenedores y volúmenes huérfanos',
        desc: 'Libera gigabytes de espacio en disco en servidores de desarrollo o producción con prune.',
        cmd: 'docker system prune -a --volumes -f'
    },
    {
        cat: 'Seguridad',
        icon: 'fas fa-shield-halved',
        title: 'Auditar conexiones salientes activas',
        desc: 'Revisa en tiempo real qué IPs y puertos externos están conectados a tu máquina.',
        cmd: 'netstat -ano | findstr ESTABLISHED   # Linux: ss -ta'
    },
    {
        cat: 'PowerShell',
        icon: 'fas fa-terminal',
        title: 'Reiniciar la barra de tareas y el explorador',
        desc: 'Útil cuando la barra de Windows se congela en una máquina de usuario sin reiniciar el PC.',
        cmd: 'taskkill /f /im explorer.exe && start explorer.exe'
    },
    {
        cat: 'IA & Prompting',
        icon: 'fas fa-brain',
        title: 'Patrón Few-Shot para scripts de IT',
        desc: 'Al pedirle a un LLM que cree un script de Bash o PowerShell, dale 1 ejemplo de entrada y 1 de salida exacta para evitar alucinaciones.',
        cmd: '# Tip: "Dado este log [X], genera una regex en Python que extraiga [Y] siguiendo este formato exacto: Z"'
    },
    {
        cat: 'Linux',
        icon: 'fab fa-linux',
        title: 'Encontrar los archivos más pesados en disco',
        desc: 'Ubica en 3 segundos qué carpetas están saturando el almacenamiento del servidor.',
        cmd: 'du -ah /var/log | sort -rh | head -n 10'
    },
    {
        cat: 'Redes',
        icon: 'fas fa-globe',
        title: 'Vaciar caché ARP y DNS local',
        desc: 'Soluciona problemas de conflicto de IP o redirecciones antiguas tras cambios en el DHCP.',
        cmd: 'ipconfig /flushdns && arp -d *'
    }
];

let currentTipIndex = 0;

function initItTips() {
    // Pick tip based on day of month to rotate daily, or start random
    const day = new Date().getDate();
    currentTipIndex = day % itTipsData.length;
    renderItTip(currentTipIndex);
}

function rotateItTip() {
    currentTipIndex = (currentTipIndex + 1) % itTipsData.length;
    renderItTip(currentTipIndex);
}

function renderItTip(idx) {
    const container = document.getElementById('it-tip-container');
    if (!container) return;

    const tip = itTipsData[idx];
    container.innerHTML = `
        <div class="tip-card-inner">
            <div class="tip-header-row">
                <span class="tip-cat-badge"><i class="${tip.icon}"></i> ${tip.cat}</span>
                <span class="tip-index-counter">${idx + 1}/${itTipsData.length}</span>
            </div>
            <h4 class="tip-title">${tip.title}</h4>
            <p class="tip-desc">${tip.desc}</p>
            <div class="tip-cmd-box" onclick="copyTipCommand('${tip.cmd.replace(/'/g, "\\'")}')" title="Clic para copiar comando">
                <code>${tip.cmd}</code>
                <button class="tip-copy-btn"><i class="fas fa-copy"></i></button>
            </div>
        </div>
    `;
}

function copyTipCommand(cmd) {
    copySnippet(cmd);
}

// --- 4. Service Status Check (Real) ---
async function checkServiceStatus() {
    const services = [
        { id: 'status-jellyfin', url: 'http://10.8.10.119/',         ssl: false },
        { id: 'status-zabbix',   url: 'http://10.8.10.241/',         ssl: false },
        { id: 'status-camara',   url: 'http://10.8.1.111/',          ssl: false },
        { id: 'status-esxi',     url: 'https://10.8.10.80/',         ssl: true  },
        { id: 'status-proxmox',  url: 'https://10.8.10.240:8006/',   ssl: true  },
    ];

    for (const svc of services) {
        const el = document.getElementById(svc.id);
        if (!el) continue;

        if (svc.ssl) {
            el.className = 'status-dot status-ssl';
            el.title = '⚠️ HTTPS con cert autofirmado — abre el link para verificar';
            continue;
        }

        try {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 4000);
            await fetch(svc.url, { mode: 'no-cors', signal: controller.signal });
            clearTimeout(timeout);
            el.className = 'status-dot status-online';
            el.title = '✅ Online';
        } catch (err) {
            const isTimeout = err.name === 'AbortError';
            el.className = 'status-dot status-offline';
            el.title = isTimeout ? '⏱️ Timeout — sin respuesta' : '❌ No responde o inaccesible';
        }
    }
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

// ====== NOMBRE PERSONALIZADO ======
function getUserName() {
    return localStorage.getItem('it-hub-username') || '';
}

function saveUserName(name) {
    localStorage.setItem('it-hub-username', name.trim());
}

function initUserName() {
    if (!getUserName()) {
        showNameModal();
    }
}

function showNameModal() {
    if (document.getElementById('name-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'name-modal';
    modal.className = 'name-modal-overlay';
    modal.innerHTML = `
        <div class="name-modal">
            <div class="name-modal-icon"><i class="fas fa-user-circle"></i></div>
            <h2>¡Bienvenido al IT Hub!</h2>
            <p>¿Cómo te llamás? Lo usaremos para personalizar tu saludo.</p>
            <input type="text" id="name-modal-input" class="name-modal-input"
                placeholder="Tu nombre..." maxlength="30" autofocus>
            <button id="name-modal-btn" class="name-modal-btn">
                <i class="fas fa-check"></i> Entrar
            </button>
        </div>
    `;
    document.body.appendChild(modal);

    const input = document.getElementById('name-modal-input');
    const btn = document.getElementById('name-modal-btn');

    function confirm() {
        const name = input.value.trim();
        if (!name) {
            input.style.borderColor = 'var(--red)';
            input.focus();
            return;
        }
        saveUserName(name);
        modal.classList.add('fade-out');
        setTimeout(() => modal.remove(), 300);
        updateDateTime();
    }

    btn.addEventListener('click', confirm);
    input.addEventListener('keypress', (e) => { if (e.key === 'Enter') confirm(); });
    setTimeout(() => input.focus(), 100);
}

function updateDateTime() {
    const now = new Date();
    const hour = now.getHours();
    const greeting = hour < 12 ? 'Buenos días' : hour < 18 ? 'Buenas tardes' : 'Buenas noches';
    const name = getUserName() || 'equipo';

    const greetingEl = document.getElementById('greeting');
    const dateEl = document.getElementById('current-date');

    if (greetingEl) greetingEl.textContent = `${greeting}, ${name}`;
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

    // Render Content
    const content = document.getElementById('content');
    if (content) {
        const orderedContent = [
            sections.admins,
            sections.inventario,
            sections.servers,
            sections.monitoring,
            sections.sheets,
            sections.toolsSuite,
            sections.learningHub
        ];
        content.innerHTML = orderedContent.join('');
    }

    // Initialize features
    initSearch();
    initTaskManager();
    initProjectManager();
    updateWorldClocks();
    initMatrixBackground();
    initPerformanceMode();
    initSidebarNotes();
    initITSnippets();
    initRightSidebar();
    detectClientIP();
    initUserName();
    initItTips();
    initPasswordGenerator();
    calculateSubnet();
    filterPortsTable('');
    checkServiceStatus();

    // Interval updates
    setInterval(updateDateTime, 60000);
    setInterval(updateWorldClocks, 30000);
    setInterval(checkServiceStatus, 120000);
});

