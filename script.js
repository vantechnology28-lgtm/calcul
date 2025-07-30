console.log('🔧 Script.js starting...');

// Простая проверка загрузки
var elements = null;

// Ждем полной загрузки страницы
window.addEventListener('load', function() {
    console.log('📱 Window loaded, starting init...');
    initCalculator();
});

function initCalculator() {
    console.log('🚀 Initializing calculator...');
    
    // Проверяем данные
    if (typeof locationData === 'undefined') {
        console.error('❌ locationData not found!');
        alert('Ошибка: данные не загружены');
        return;
    }
    
    console.log('✅ Data check passed');
    
    // Получаем элементы
    elements = {
        auction: document.getElementById('auction'),
        location: document.getElementById('location'),
        portLoading: document.getElementById('portLoading'),
        portArrival: document.getElementById('portArrival'),
        destination: document.getElementById('destination'),
        calculateBtn: document.getElementById('calculateBtn'),
        markup: document.getElementById('markup'),
        resultSection: document.getElementById('resultSection'),
        priceBreakdown: document.getElementById('priceBreakdown'),
        finalAmount: document.getElementById('finalAmount')
    };
    
    // Проверяем элементы
    for (var key in elements) {
        if (!elements[key]) {
            console.error('❌ Element not found:', key);
            return;
        }
    }
    
    console.log('✅ All elements found');
    
    // Устанавливаем обработчики
    setupEvents();
    checkForm();
    
    console.log('🎉 Calculator ready!');
}

function setupEvents() {
    console.log('🔗 Setting up events...');
    
    // Аукцион
    elements.auction.onchange = function() {
        console.log('🏢 Auction selected:', this.value);
        var auctionId = this.value;
        updateSelectedText('selectedAuction', this.options[this.selectedIndex].text);
        
        if (auctionId) {
            loadLocations(auctionId);
            elements.location.disabled = false;
        } else {
            clearLocationSelect();
        }
        checkForm();
    };
    
    // Локация
    elements.location.onchange = function() {
        console.log('📍 Location selected:', this.value);
        updateSelectedText('selectedLocation', this.options[this.selectedIndex].text);
        
        if (this.value) {
            loadPorts();
            elements.portLoading.disabled = false;
        } else {
            clearPortSelect();
        }
        checkForm();
    };
    
    // Направление
    elements.destination.onchange = function() {
        console.log('🌍 Destination selected:', this.value);
        
        if (this.value) {
            loadArrivalPorts(this.value);
            elements.portArrival.disabled = false;
        } else {
            clearArrivalPortSelect();
        }
        checkForm();
    };
    
    // Порт отправления
    elements.portLoading.onchange = function() {
        console.log('🚢 Loading port selected:', this.value);
        updateSelectedText('selectedPortLoading', this.options[this.selectedIndex].text);
        checkForm();
    };
    
    // Порт прибытия
    elements.portArrival.onchange = function() {
        console.log('⚓ Arrival port selected:', this.value);
        updateSelectedText('selectedPortArrival', this.options[this.selectedIndex].text);
        checkForm();
    };
    
    // Кнопка расчета
    elements.calculateBtn.onclick = function() {
        if (!this.disabled) {
            console.log('🧮 Calculate clicked');
            calculatePrice();
        }
    };
    
    // Наценка
    elements.markup.oninput = function() {
        if (elements.resultSection.classList.contains('show')) {
            updateFinalPrice();
        }
    };
}

function loadLocations(auctionId) {
    console.log('📍 Loading locations for auction:', auctionId);
    
    var locations = locationData[auctionId] || [];
    console.log('📍 Found', locations.length, 'locations');
    
    elements.location.innerHTML = '<option value="">Выберите локацию</option>';
    
    for (var i = 0; i < locations.length; i++) {
        var location = locations[i];
        var option = document.createElement('option');
        option.value = location.value;
        option.textContent = location.text;
        option.setAttribute('data-land-cost', location.landCost);
        elements.location.appendChild(option);
    }
    
    console.log('✅ Locations loaded successfully');
}

function loadPorts() {
    console.log('🚢 Loading ports...');
    
    elements.portLoading.innerHTML = '<option value="">Выберите порт отправления</option>';
    
    var ports = portData.loading;
    for (var i = 0; i < ports.length; i++) {
        var port = ports[i];
        var option = document.createElement('option');
        option.value = port.value;
        option.textContent = port.text;
        elements.portLoading.appendChild(option);
    }
    
    console.log('✅ Ports loaded');
}

function loadArrivalPorts(destination) {
    console.log('⚓ Loading arrival ports for:', destination);
    
    elements.portArrival.innerHTML = '<option value="">Выберите порт прибытия</option>';
    
    var ports = portData.arrival[destination] || [];
    for (var i = 0; i < ports.length; i++) {
        var port = ports[i];
        var option = document.createElement('option');
        option.value = port.value;
        option.textContent = port.text;
        elements.portArrival.appendChild(option);
    }
    
    console.log('✅ Arrival ports loaded');
}

function clearLocationSelect() {
    elements.location.innerHTML = '<option value="">Сначала выберите аукцион</option>';
    elements.location.disabled = true;
    updateSelectedText('selectedLocation', 'Не выбрана');
    clearPortSelect();
}

function clearPortSelect() {
    elements.portLoading.innerHTML = '<option value="">Выберите локацию</option>';
    elements.portLoading.disabled = true;
    updateSelectedText('selectedPortLoading', 'Не выбран');
}

function clearArrivalPortSelect() {
    elements.portArrival.innerHTML = '<option value="">Выберите направление</option>';
    elements.portArrival.disabled = true;
    updateSelectedText('selectedPortArrival', 'Не выбран');
}

function updateSelectedText(elementId, text) {
    var element = document.getElementById(elementId);
    if (element) {
        element.textContent = text || 'Не выбран';
    }
}

function checkForm() {
    var isComplete = elements.auction.value && 
                    elements.location.value && 
                    elements.portLoading.value && 
                    elements.destination.value &&
                    elements.portArrival.value;
    
    elements.calculateBtn.disabled = !isComplete;
    
    if (isComplete) {
        elements.calculateBtn.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
        elements.calculateBtn.innerHTML = '🧮 Рассчитать стоимость';
    } else {
        elements.calculateBtn.style.background = 'linear-gradient(135deg, #95a5a6 0%, #7f8c8d 100%)';
        elements.calculateBtn.innerHTML = '🔒 Заполните все поля';
    }
}

function calculatePrice() {
    console.log('🧮 Calculating price...');
    
    try {
        var auctionId = elements.auction.value;
        var destination = elements.destination.value;
        var portLoadingId = elements.portLoading.value;
        var portArrivalId = elements.portArrival.value;
        
        // Получаем стоимость суши
        var selectedLocationOption = elements.location.options[elements.location.selectedIndex];
        var landCost = parseInt(selectedLocationOption.getAttribute('data-land-cost')) || 0;
        
        console.log('🚛 Land cost:', landCost);
        
        // Получаем стоимость океана
        var oceanCost = 0;
        if (oceanPrices[destination] && oceanPrices[destination][portArrivalId]) {
            oceanCost = oceanPrices[destination][portArrivalId][portLoadingId] || 0;
        }
        
        console.log('🚢 Ocean cost:', oceanCost);
        
        // SUBLOT проверка
        if (auctionId === '30' || auctionId === '31') {
            showError('SUBLOT аукционы временно недоступны');
            return;
        }
        
        // Проверки
        if (landCost === 0 && oceanCost === 0) {
            showError('Маршрут не поддерживается');
            return;
        }
        
        // Расчет
        var dealerFee = 100;
        var portServices = destination === 'Lithuania' ? 300 : 0;
        var totalDelivery = landCost + oceanCost + dealerFee + portServices;
        var userMarkup = parseInt(elements.markup.value) || 0;
        var finalPrice = totalDelivery + userMarkup;
        
        console.log('💰 Final calculation:', {
            landCost: landCost,
            oceanCost: oceanCost,
            dealerFee: dealerFee,
            portServices: portServices,
            totalDelivery: totalDelivery,
            userMarkup: userMarkup,
            finalPrice: finalPrice
        });
        
        showResult({
            landCost: landCost,
            oceanCost: oceanCost,
            dealerFee: dealerFee,
            portServices: portServices,
            totalDelivery: totalDelivery,
            userMarkup: userMarkup,
            finalPrice: finalPrice
        });
        
    } catch (error) {
        console.error('❌ Calculation error:', error);
        showError('Ошибка расчета: ' + error.message);
    }
}

function showResult(prices) {
    console.log('📋 Showing results');
    
    var html = '';
    
    if (prices.landCost > 0) {
        html += '<div class="price-item"><span>🚛 Доставка суша:</span><span>$' + prices.landCost + '</span></div>';
    }
    
    if (prices.oceanCost > 0) {
        html += '<div class="price-item"><span>🚢 Доставка океан:</span><span>$' + prices.oceanCost + '</span></div>';
    }
    
    if (prices.dealerFee > 0) {
        html += '<div class="price-item"><span>🏢 Услуги дилера:</span><span>$' + prices.dealerFee + '</span></div>';
    }
    
    if (prices.portServices > 0) {
        html += '<div class="price-item"><span>⚓ Портовые услуги:</span><span>$' + prices.portServices + '</span></div>';
    }
    
    html += '<div class="price-item"><span>📋 Итого доставка:</span><span><strong>$' + prices.totalDelivery + '</strong></span></div>';
    
    if (prices.userMarkup > 0) {
        html += '<div class="price-item markup"><span>💰 Ваша наценка:</span><span>$' + prices.userMarkup + '</span></div>';
    }
    
    html += '<div class="price-item total"><span>🎯 ИТОГО к оплате:</span><span>$' + prices.finalPrice + '</span></div>';
    
    elements.priceBreakdown.innerHTML = html;
    elements.finalAmount.textContent = '$' + prices.finalPrice;
    elements.resultSection.classList.add('show');
    
    console.log('✅ Results displayed');
}

function showError(message) {
    console.log('❌ Showing error:', message);
    elements.priceBreakdown.innerHTML = '<div class="error"><strong>⚠️ Ошибка:</strong> ' + message + '</div>';
    elements.finalAmount.textContent = '$0';
    elements.resultSection.classList.add('show');
}

function updateFinalPrice() {
    // Простая реализация обновления наценки
    var markupValue = parseInt(elements.markup.value) || 0;
    // Здесь можно добавить логику обновления, если нужно
}

console.log('✅ Script.js loaded successfully');
