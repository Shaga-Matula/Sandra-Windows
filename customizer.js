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
    
    // Window positions for mansion overlay (adjust these based on your image)
    const windowPositions = {
        'modern': [
            { top: '25%', left: '15%', width: '12%', height: '15%' },
            { top: '25%', left: '35%', width: '12%', height: '15%' },
            { top: '25%', left: '55%', width: '12%', height: '15%' },
            { top: '25%', left: '75%', width: '12%', height: '15%' },
            { top: '55%', left: '25%', width: '12%', height: '15%' },
            { top: '55%', left: '45%', width: '12%', height: '15%' },
            { top: '55%', left: '65%', width: '12%', height: '15%' }
        ],
        'traditional': [
            { top: '30%', left: '20%', width: '15%', height: '18%' },
            { top: '30%', left: '42%', width: '15%', height: '18%' },
            { top: '30%', left: '64%', width: '15%', height: '18%' },
            { top: '60%', left: '31%', width: '15%', height: '18%' },
            { top: '60%', left: '53%', width: '15%', height: '18%' }
        ],
        'cottage': [
            { top: '35%', left: '25%', width: '18%', height: '20%' },
            { top: '35%', left: '57%', width: '18%', height: '20%' },
            { top: '65%', left: '41%', width: '18%', height: '20%' }
        ]
    };
    
    let windowHTML = '';
    const positions = windowPositions[currentConfig.house];
    
    // Create overlay windows based on house type
    positions.forEach((pos, index) => {
        const opacity = currentConfig.color === '#FFFFFF' ? '0.6' : '0.7';
        windowHTML += `
            <div class="window-overlay" style="
                position: absolute;
                top: ${pos.top};
                left: ${pos.left};
                width: ${pos.width};
                height: ${pos.height};
                background: ${currentConfig.color};
                opacity: ${opacity};
                border: 2px solid ${currentConfig.color === '#FFFFFF' ? '#333' : currentConfig.color};
                box-shadow: inset 0 0 20px rgba(0,0,0,0.3);
                transition: all 0.3s;
            ">
            </div>
        `;
    });
    
    // Different window types - just for reference, overlays are simpler
    switch(currentConfig.type) {
        case 'standard':
            // Standard grid pattern
            break;
        case 'bay':
        case 'sliding':
        case 'casement':
        case 'awning':
        case 'picture':
            // All types use the same overlay system
            break;
    }
    
    preview.innerHTML = windowHTML;
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
