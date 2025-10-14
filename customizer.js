// Window Customizer JavaScript

let currentConfig = {
    house: 'modern',
    color: '#FFFFFF',
    colorName: 'White',
    type: 'standard'
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderHouse();
    setupEventListeners();
});

function setupEventListeners() {
    // House type buttons
    document.querySelectorAll('.house-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.house-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentConfig.house = this.dataset.house;
            updateSummary();
            renderHouse();
        });
    });

    // Color buttons
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentConfig.color = this.dataset.color;
            currentConfig.colorName = this.textContent;
            updateSummary();
            renderHouse();
        });
    });

    // Window type buttons
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentConfig.type = this.dataset.type;
            updateSummary();
            renderHouse();
        });
    });

    // Save button
    document.querySelector('.save-btn').addEventListener('click', function() {
        saveConfiguration();
    });
}

function updateSummary() {
    document.getElementById('selected-house').textContent = 
        currentConfig.house.charAt(0).toUpperCase() + currentConfig.house.slice(1);
    document.getElementById('selected-color').textContent = currentConfig.colorName;
    document.getElementById('selected-type').textContent = 
        currentConfig.type.charAt(0).toUpperCase() + currentConfig.type.slice(1);
}

function renderHouse() {
    const preview = document.getElementById('house-preview');
    
    let windowHTML = '';
    
    // Different window types
    switch(currentConfig.type) {
        case 'standard':
            windowHTML = `
                <div class="window window-left" style="background: ${currentConfig.color}; border-color: ${currentConfig.color === '#FFFFFF' ? '#333' : currentConfig.color};">
                    <div style="position: absolute; top: 50%; left: 0; right: 0; height: 3px; background: #333;"></div>
                    <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 3px; background: #333;"></div>
                </div>
                <div class="window window-right" style="background: ${currentConfig.color}; border-color: ${currentConfig.color === '#FFFFFF' ? '#333' : currentConfig.color};">
                    <div style="position: absolute; top: 50%; left: 0; right: 0; height: 3px; background: #333;"></div>
                    <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 3px; background: #333;"></div>
                </div>
            `;
            break;
        case 'bay':
            windowHTML = `
                <div class="window window-left" style="background: ${currentConfig.color}; border-color: ${currentConfig.color === '#FFFFFF' ? '#333' : currentConfig.color}; width: 100px; transform: perspective(100px) rotateY(-10deg);">
                    <div style="position: absolute; top: 33%; left: 0; right: 0; height: 2px; background: #333;"></div>
                    <div style="position: absolute; top: 66%; left: 0; right: 0; height: 2px; background: #333;"></div>
                </div>
                <div class="window window-right" style="background: ${currentConfig.color}; border-color: ${currentConfig.color === '#FFFFFF' ? '#333' : currentConfig.color}; width: 100px; transform: perspective(100px) rotateY(10deg);">
                    <div style="position: absolute; top: 33%; left: 0; right: 0; height: 2px; background: #333;"></div>
                    <div style="position: absolute; top: 66%; left: 0; right: 0; height: 2px; background: #333;"></div>
                </div>
            `;
            break;
        case 'sliding':
            windowHTML = `
                <div class="window window-left" style="background: ${currentConfig.color}; border-color: ${currentConfig.color === '#FFFFFF' ? '#333' : currentConfig.color}; width: 90px;">
                    <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 4px; background: #333; box-shadow: 2px 0 4px rgba(0,0,0,0.3);"></div>
                </div>
                <div class="window window-right" style="background: ${currentConfig.color}; border-color: ${currentConfig.color === '#FFFFFF' ? '#333' : currentConfig.color}; width: 90px;">
                    <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 4px; background: #333; box-shadow: 2px 0 4px rgba(0,0,0,0.3);"></div>
                </div>
            `;
            break;
        case 'casement':
            windowHTML = `
                <div class="window window-left" style="background: ${currentConfig.color}; border-color: ${currentConfig.color === '#FFFFFF' ? '#333' : currentConfig.color};">
                    <div style="position: absolute; left: 5px; top: 50%; width: 15px; height: 3px; background: #333; transform: translateY(-50%);"></div>
                    <div style="position: absolute; top: 50%; left: 0; right: 0; height: 3px; background: #333;"></div>
                    <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 3px; background: #333;"></div>
                </div>
                <div class="window window-right" style="background: ${currentConfig.color}; border-color: ${currentConfig.color === '#FFFFFF' ? '#333' : currentConfig.color};">
                    <div style="position: absolute; right: 5px; top: 50%; width: 15px; height: 3px; background: #333; transform: translateY(-50%);"></div>
                    <div style="position: absolute; top: 50%; left: 0; right: 0; height: 3px; background: #333;"></div>
                    <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 3px; background: #333;"></div>
                </div>
            `;
            break;
        case 'awning':
            windowHTML = `
                <div class="window window-left" style="background: ${currentConfig.color}; border-color: ${currentConfig.color === '#FFFFFF' ? '#333' : currentConfig.color}; height: 80px;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 20px; background: linear-gradient(to bottom, rgba(0,0,0,0.2), transparent);"></div>
                    <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 3px; background: #333;"></div>
                </div>
                <div class="window window-right" style="background: ${currentConfig.color}; border-color: ${currentConfig.color === '#FFFFFF' ? '#333' : currentConfig.color}; height: 80px;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 20px; background: linear-gradient(to bottom, rgba(0,0,0,0.2), transparent);"></div>
                    <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 3px; background: #333;"></div>
                </div>
            `;
            break;
        case 'picture':
            windowHTML = `
                <div class="window window-left" style="background: ${currentConfig.color}; border-color: ${currentConfig.color === '#FFFFFF' ? '#333' : currentConfig.color}; width: 100px; height: 120px; border-width: 5px;">
                </div>
                <div class="window window-right" style="background: ${currentConfig.color}; border-color: ${currentConfig.color === '#FFFFFF' ? '#333' : currentConfig.color}; width: 100px; height: 120px; border-width: 5px;">
                </div>
            `;
            break;
    }
    
    preview.innerHTML = `
        <div class="house ${currentConfig.house}">
            <div class="roof"></div>
            <div class="house-body">
                ${windowHTML}
                <div class="door">
                    <div class="door-knob"></div>
                </div>
            </div>
        </div>
    `;
}

function saveConfiguration() {
    const config = {
        house: currentConfig.house,
        color: currentConfig.colorName,
        type: currentConfig.type,
        timestamp: new Date().toISOString()
    };
    
    // Save to localStorage
    localStorage.setItem('windowConfig', JSON.stringify(config));
    
    // Show confirmation
    alert(`Configuration Saved!\n\nHouse Type: ${config.house}\nWindow Color: ${config.color}\nWindow Type: ${config.type}`);
    
    console.log('Saved configuration:', config);
}
