console.log('🔧 Script.js with smart port logic starting...');

var elements = null;
var currentSelectedLocation = null;

window.addEventListener('load', function() {
    console.log('📱 Window loaded, starting init...');
    setTimeout(function() {
        initCalculator();
    }, 100);
});

function initCalculator() {
    console.log('🚀 Initializing smart calculator...');
    
    if (typeof locationData === 'undefined') {
        console.error('❌ locationData not found!');
        alert('Ошибка: данные не загружены');
        return;
    }
    
    console.log('✅ Data check passed');
    
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
    
    for (var key in elements) {
        if (!elements[key]) {
            console.error('❌ Element not found:', key);
            return;
        }
    }
    
    console.log('✅ All elements found');
    setupEvents();
    checkForm();
    console.log('🎉 Smart calculator ready!');
}

function setupEvents() {
    console.log('🔗 Setting up smart events...');
    
    // Аукцион
    elements.auction.addEventListener('change', function() {
        console.log('🏢 Auction selected:', this.value);
        var auctionId = this.value;
        updateDisplay('selectedAuction', this.options[this.selectedIndex].text);
        
        if (auctionId) {
            loadLocations(auctionId);
            elements.location.disabled = false;
            elements.location.innerHTML = '<option value="">Выберите локацию</option>';
            resetDependentFields(['location', 'portLoading', 'portArrival']);
        } else {
            clearSelect(elements.location, 'Сначала выберите аукцион');
            resetDependentFields(['location', 'portLoading', 'portArrival']);
        }
        checkForm();
    });

    // Локация - ГЛАВНОЕ ИЗМЕНЕНИЕ!
    elements.location.addEventListener('change', function() {
        console.log('📍 Location selected:', this.value);
        var locationId = this.value;
        var selectedText = this.options[this.selectedIndex] ? this.options[this.selectedIndex].text : 'Не выбрана';
        updateDisplay('selectedLocation', selectedText);
        
        if (locationId) {
            // Сохраняем выбранную локацию
            currentSelectedLocation = getLocationById(locationId);
            console.log('🗺️ Selected location data:', currentSelectedLocation);
            
            // Загружаем порты для этой локации (УМНАЯ ЛОГИКА)
            loadPortsForLocation(currentSelectedLocation);
            elements.portLoading.disabled = false;
        } else {
            currentSelectedLocation = null;
            clearSelect(elements.portLoading, 'Сначала выберите локацию');
            resetDependentFields(['portLoading', 'portArrival']);
        }
        checkForm();
    });

    // Направление
    elements.destination.addEventListener('change', function() {
        console.log('🌍 Destination selected:', this.value);
        
        if (this.value) {
            loadArrivalPorts(this.value);
            elements.portArrival.disabled = false;
        } else {
            clearSelect(elements.portArrival, 'Выберите направление');
            updateDisplay('selectedPortArrival', 'Не выбран');
        }
        checkForm();
    });

    // Порт отправления
    elements.portLoading.addEventListener('change', function() {
        console.log('🚢 Loading port selected:', this.value);
        var selectedText = this.options[this.selectedIndex] ? this.options[this.selectedIndex].text : 'Не выбран';
        updateDisplay('selectedPortLoading', selectedText);
        checkForm();
    });

    // Порт прибытия
    elements.portArrival.addEventListener('change', function() {
        console.log('⚓ Arrival port selected:', this.value);
        var selectedText = this.options[this.selectedIndex] ? this.options[this.selectedIndex].text : 'Не выбран';
        updateDisplay('selectedPortArrival', selectedText);
        checkForm();
    });

    // Кнопка расчета
    elements.calculateBtn.addEventListener('click', function() {
        if (!this.disabled) {
            console.log('🧮 Calculate clicked');
            calculatePrice();
        }
    });

    // Наценка
    elements.markup.addEventListener('input', function() {
        if (elements.resultSection.classList.contains('show')) {
            updateFinalPrice();
        }
    });
}

// Функция поиска локации по ID
function getLocationById(locationId) {
    var auctionId = elements.auction.value;
    var locations = locationData[auctionId] || [];
    
    for (var i = 0; i < locations.length; i++) {
        if (locations[i].value === locationId) {
            return locations[i];
        }
    }
    return null;
}

// УМНАЯ функция загрузки портов для конкретной локации
function loadPortsForLocation(location) {
    console.log('🚢 Loading smart ports for location:', location ? location.text : 'null');
    
    if (!location || !location.ports || location.ports.length === 0) {
        console.log('⚠️ No ports defined for this location');
        elements.portLoading.innerHTML = '<option value="">Нет доступных портов</option>';
        elements.portLoading.disabled = true;
        return;
    }
    
    elements.portLoading.innerHTML = '<option value="">Выберите порт отправления</option>';
    
    // Загружаем только доступные для этой локации порты
    var availablePorts = location.ports;
    console.log('🎯 Available ports for this location:', availablePorts);
    
    portData.loading.forEach(function(port) {
        // Проверяем, доступен ли этот порт для выбранной локации
        if (availablePorts.indexOf(port.value) !== -1) {
            var option = document.createElement('option');
            option.value = port.value;
            option.textContent = port.text;
            elements.portLoading.appendChild(option);
            console.log('✅ Added port:', port.text);
        }
    });
    
    console.log('✅ Smart ports loaded successfully');
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

function clearSelect(select, text) {
    select.innerHTML = '<option value="">' + text + '</option>';
    select.disabled = true;
}

function resetDependentFields(fields) {
    var fieldMap = {
        'location': function() { updateDisplay('selectedLocation', 'Не выбрана'); },
        'portLoading': function() { updateDisplay('selectedPortLoading', 'Не выбран'); },
        'portArrival': function() { updateDisplay('selectedPortArrival', 'Не выбран'); }
    };
    
    fields.forEach(function(field) {
        if (fieldMap[field]) fieldMap[field]();
    });
}

function updateDisplay(elementId, text) {
    var element = document.getElementById(elementId);
    if (element) {
        element.textContent = text === '' ? 'Не выбран' : text;
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
        
        console.log('💰 Smart calculation result:', {
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
    console.log('📋 Showing smart results');
    
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
    
    console.log('✅ Smart results displayed');
}

function showError(message) {
    console.log('❌ Showing error:', message);
    elements.priceBreakdown.innerHTML = '<div class="error"><strong>⚠️ Ошибка:</strong> ' + message + '</div>';
    elements.finalAmount.textContent = '$0';
    elements.resultSection.classList.add('show');
}

function updateFinalPrice() {
    if (!elements.resultSection.classList.contains('show')) return;
    
    try {
        // Получаем базовую стоимость из последнего расчета
        var totalItems = elements.priceBreakdown.querySelectorAll('.price-item');
        var totalDelivery = 0;
        
        // Находим строку "Итого доставка"
        totalItems.forEach(function(item) {
            var text = item.textContent;
            if (text.includes('Итого доставка:')) {
                var priceMatch = text.match(/\$(\d+)/);
                if (priceMatch) {
                    totalDelivery = parseInt(priceMatch[1]);
                }
            }
        });
        
        var userMarkup = parseInt(elements.markup.value) || 0;
        var finalPrice = totalDelivery + userMarkup;
        
        // Обновляем отображение наценки и итога
        var markupItem = elements.priceBreakdown.querySelector('.price-item.markup span:last-child');
        var totalItem = elements.priceBreakdown.querySelector('.price-item.total span:last-child');
        
        if (markupItem) markupItem.textContent = '$' + userMarkup;
        if (totalItem) totalItem.textContent = '$' + finalPrice;
        
        elements.finalAmount.textContent = '$' + finalPrice;
        
    } catch (error) {
        console.error('Error updating final price:', error);
    }
}

console.log('✅ Smart script.js loaded successfully');
