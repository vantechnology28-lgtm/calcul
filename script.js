console.log('🔧 SAFE script starting...');

var elements = {};
const FIXED_MARKUP = 500; // Фиксированная наценка в USD, изменить здесь при необходимости

window.addEventListener('load', function() {
    console.log('📱 Window loaded');
    
    elements.auction = document.getElementById('auction');
    elements.location = document.getElementById('location');
    elements.portLoading = document.getElementById('portLoading');
    elements.portArrival = document.getElementById('portArrival');
    elements.calculateBtn = document.getElementById('calculateBtn');
    elements.resultSection = document.getElementById('resultSection');
    elements.priceBreakdown = document.getElementById('priceBreakdown');
    elements.finalAmount = document.getElementById('finalAmount');
    
    for (var key in elements) {
        if (!elements[key]) {
            console.error('❌ Element not found:', key);
            alert('Element not found: ' + key);
            return;
        }
    }
    
    console.log('✅ All elements found');
    
    if (typeof locationData === 'undefined') {
        console.error('❌ locationData not found');
        alert('locationData not found - check data.js');
        return;
    }
    
    console.log('✅ locationData found with keys:', Object.keys(locationData));
    
    // Загружаем все порты прибытия
    loadArrivalPorts();
    
    // Обработчик аукциона
    elements.auction.addEventListener('change', function() {
        console.log('🏢 Auction changed to:', this.value);
        
        try {
            var auctionId = this.value;
            updateSelectedText('selectedAuction', this.options[this.selectedIndex].text);
            
            if (auctionId && locationData[auctionId]) {
                var locations = locationData[auctionId];
                console.log('📍 Found', locations.length, 'locations for auction', auctionId);
                
                elements.location.innerHTML = '<option value="">Выберите локацию</option>';
                
                for (var i = 0; i < locations.length; i++) {
                    var loc = locations[i];
                    var option = document.createElement('option');
                    option.value = loc.value;
                    option.textContent = loc.text;
                    option.setAttribute('data-land-cost', loc.landCost);
                    elements.location.appendChild(option);
                }
                
                elements.location.disabled = false;
                console.log('✅ Locations loaded');
                
            } else {
                elements.location.innerHTML = '<option value="">Сначала выберите аукцион</option>';
                elements.location.disabled = true;
            }
            
        } catch (error) {
            console.error('❌ Error in auction handler:', error);
            alert('Error: ' + error.message);
        }
    });
    
    // Обработчик локации
    elements.location.addEventListener('change', function() {
        console.log('📍 Location changed to:', this.value);
        
        try {
            updateSelectedText('selectedLocation', this.options[this.selectedIndex].text);
            
            if (this.value) {
                var auctionId = elements.auction.value;
                var locationId = this.value;
                var selectedLocation = null;
                
                if (locationData[auctionId]) {
                    for (var i = 0; i < locationData[auctionId].length; i++) {
                        if (locationData[auctionId][i].value === locationId) {
                            selectedLocation = locationData[auctionId][i];
                            break;
                        }
                    }
                }
                
                console.log('🎯 Selected location data:', selectedLocation);
                
                elements.portLoading.innerHTML = '<option value="">Выберите порт отправления</option>';
                
                if (selectedLocation && selectedLocation.ports && selectedLocation.ports.length > 0) {
                    console.log('🎯 Available ports for this location:', selectedLocation.ports);
                    
                    if (typeof portData !== 'undefined' && portData.loading) {
                        for (var i = 0; i < portData.loading.length; i++) {
                            var port = portData.loading[i];
                            if (selectedLocation.ports.indexOf(port.value) !== -1) {
                                var option = document.createElement('option');
                                option.value = port.value;
                                option.textContent = port.text;
                                elements.portLoading.appendChild(option);
                                console.log('✅ Added smart port:', port.text);
                            }
                        }
                        elements.portLoading.disabled = false;
                        console.log('✅ Smart ports loaded');
                    }
                } else {
                    console.log('⚠️ No port restrictions, showing all ports');
                    if (typeof portData !== 'undefined' && portData.loading) {
                        for (var i = 0; i < portData.loading.length; i++) {
                            var port = portData.loading[i];
                            var option = document.createElement('option');
                            option.value = port.value;
                            option.textContent = port.text;
                            elements.portLoading.appendChild(option);
                        }
                        elements.portLoading.disabled = false;
                    }
                }
            }
            
            checkFormComplete();
            
        } catch (error) {
            console.error('❌ Error in location handler:', error);
            alert('Location error: ' + error.message);
        }
    });
    
    // Обработчики для портов
    elements.portLoading.addEventListener('change', function() {
        console.log('🚢 Loading port changed to:', this.value);
        updateSelectedText('selectedPortLoading', this.options[this.selectedIndex].text);
        checkFormComplete();
    });

    elements.portArrival.addEventListener('change', function() {
        console.log('⚓ Arrival port changed to:', this.value);
        updateSelectedText('selectedPortArrival', this.options[this.selectedIndex].text);
        checkFormComplete();
    });
    
    // Обработчик кнопки расчета
    elements.calculateBtn.addEventListener('click', function() {
        if (!this.disabled) {
            console.log('🧮 Calculate clicked');
            calculatePrice();
        }
    });
    
    console.log('🎉 All event handlers set up');
});

// Функция загрузки портов прибытия
function loadArrivalPorts() {
    try {
        elements.portArrival.innerHTML = '<option value="">Выберите порт прибытия</option>';
        
        if (typeof portData !== 'undefined' && portData.arrival) {
            var ports = [];
            // Собираем все порты из всех направлений
            for (var destination in portData.arrival) {
                portData.arrival[destination].forEach(function(port) {
                    if (!ports.some(p => p.value === port.value)) {
                        ports.push(port);
                    }
                });
            }
            
            console.log('⚓ Found', ports.length, 'unique arrival ports');
            
            ports.forEach(function(port) {
                var option = document.createElement('option');
                option.value = port.value;
                option.textContent = port.text;
                option.setAttribute('data-destination', Object.keys(portData.arrival).find(dest => 
                    portData.arrival[dest].some(p => p.value === port.value)));
                elements.portArrival.appendChild(option);
            });
            
            console.log('✅ Arrival ports loaded');
        } else {
            console.error('❌ No arrival ports found');
            elements.portArrival.disabled = true;
        }
    } catch (error) {
        console.error('❌ Error loading arrival ports:', error);
        alert('Error loading ports: ' + error.message);
    }
}

// Функция проверки формы
function checkFormComplete() {
    try {
        var isComplete = elements.auction.value && 
                        elements.location.value && 
                        elements.portLoading.value && 
                        elements.portArrival.value;
        
        elements.calculateBtn.disabled = !isComplete;
        
        if (isComplete) {
            elements.calculateBtn.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
            elements.calculateBtn.innerHTML = '🧮 Рассчитать стоимость';
            console.log('✅ Form is complete');
        } else {
            elements.calculateBtn.style.background = 'linear-gradient(135deg, #95a5a6 0%, #7f8c8d 100%)';
            elements.calculateBtn.innerHTML = '🔒 Заполните все поля';
        }
    } catch (error) {
        console.error('Error checking form:', error);
    }
}

// Функция расчета
function calculatePrice() {
    console.log('🧮 Calculating price...');
    
    try {
        var auctionId = elements.auction.value;
        var portLoadingId = elements.portLoading.value;
        var portArrivalId = elements.portArrival.value;
        var destination = elements.portArrival.options[elements.portArrival.selectedIndex].getAttribute('data-destination');
        
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
        var dealerFee = 200; // Фиксированная стоимость экспортных документов и хранения
        var portServices = destination === 'Lithuania' ? 300 : 0;
        var totalDelivery = landCost + oceanCost + dealerFee + portServices;
        var finalPrice = totalDelivery + FIXED_MARKUP;
        
        console.log('💰 Final calculation:', {
            landCost: landCost,
            oceanCost: oceanCost,
            dealerFee: dealerFee,
            portServices: portServices,
            totalDelivery: totalDelivery,
            fixedMarkup: FIXED_MARKUP,
            finalPrice: finalPrice
        });
        
        showResult({
            dealerFee: dealerFee,
            portServices: portServices,
            totalDelivery: totalDelivery,
            fixedMarkup: FIXED_MARKUP,
            finalPrice: finalPrice
        });
        
    } catch (error) {
        console.error('❌ Calculation error:', error);
        showError('Ошибка расчета: ' + error.message);
    }
}

function showResult(prices) {
    var html = '';
    
    if (prices.dealerFee > 0) {
        html += '<div class="price-item"><span>📄 Экспортные документы и хранение:</span><span>$' + prices.dealerFee + '</span></div>';
    }
    
    if (prices.portServices > 0) {
        html += '<div class="price-item"><span>⚓ Портовые услуги:</span><span>$' + prices.portServices + '</span></div>';
    }
    
    html += '<div class="price-item"><span>📋 Итого доставка:</span><span><strong>$' + prices.totalDelivery + '</strong></span></div>';
    
    if (prices.fixedMarkup > 0) {
        html += '<div class="price-item markup"><span>💰 Фиксированная наценка:</span><span>$' + prices.fixedMarkup + '</span></div>';
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

function updateSelectedText(elementId, text) {
    try {
        var element = document.getElementById(elementId);
        if (element) {
            element.textContent = text || 'Не выбран';
        }
    } catch (error) {
        console.error('Error updating text:', error);
    }
}

console.log('✅ SAFE script loaded');
