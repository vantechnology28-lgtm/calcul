console.log('🔧 SAFE script starting...');

var elements = {};

window.addEventListener('load', function() {
    console.log('📱 Window loaded');
    
    // Получаем элементы
    elements.auction = document.getElementById('auction');
    elements.location = document.getElementById('location');
    elements.portLoading = document.getElementById('portLoading');
    elements.portArrival = document.getElementById('portArrival');
    elements.destination = document.getElementById('destination');
    elements.calculateBtn = document.getElementById('calculateBtn');
    elements.markup = document.getElementById('markup');
    elements.resultSection = document.getElementById('resultSection');
    elements.priceBreakdown = document.getElementById('priceBreakdown');
    elements.finalAmount = document.getElementById('finalAmount');
    
    // Проверяем что все элементы найдены
    for (var key in elements) {
        if (!elements[key]) {
            console.error('❌ Element not found:', key);
            alert('Element not found: ' + key);
            return;
        }
    }
    
    console.log('✅ All elements found');
    
    // Проверяем данные
    if (typeof locationData === 'undefined') {
        console.error('❌ locationData not found');
        alert('locationData not found - check data.js');
        return;
    }
    
    console.log('✅ locationData found with keys:', Object.keys(locationData));
    
    // Простой обработчик аукциона
    elements.auction.addEventListener('change', function() {
        console.log('🏢 Auction changed to:', this.value);
        
        try {
            var auctionId = this.value;
            updateSelectedText('selectedAuction', this.options[this.selectedIndex].text);
            
            if (auctionId && locationData[auctionId]) {
                var locations = locationData[auctionId];
                console.log('📍 Found', locations.length, 'locations for auction', auctionId);
                
                elements.location.innerHTML = '<option value="">Выберите локацию</option>';
                
                // Добавляем локации
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
    
    elements.location.addEventListener('change', function() {
    console.log('📍 Location changed to:', this.value);
    
    try {
        updateSelectedText('selectedLocation', this.options[this.selectedIndex].text);
        
        if (this.value) {
            // Получаем данные выбранной локации
            var auctionId = elements.auction.value;
            var locationId = this.value;
            var selectedLocation = null;
            
            // Ищем локацию в данных
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
                // УМНАЯ ФИЛЬТРАЦИЯ - показываем только разрешенные порты
                console.log('🎯 Available ports for this location:', selectedLocation.ports);
                
                if (typeof portData !== 'undefined' && portData.loading) {
                    for (var i = 0; i < portData.loading.length; i++) {
                        var port = portData.loading[i];
                        
                        // Проверяем есть ли этот порт в списке разрешенных
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
                // Если нет данных о портах, показываем все
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
elements.destination.addEventListener('change', function() {
    console.log('🌍 Destination changed to:', this.value);
    
    try {
        if (this.value) {
            // Загружаем порты прибытия
            elements.portArrival.innerHTML = '<option value="">Выберите порт прибытия</option>';
            
            if (typeof portData !== 'undefined' && portData.arrival && portData.arrival[this.value]) {
                var ports = portData.arrival[this.value];
                console.log('⚓ Found', ports.length, 'arrival ports for', this.value);
                
                for (var i = 0; i < ports.length; i++) {
                    var port = ports[i];
                    var option = document.createElement('option');
                    option.value = port.value;
                    option.textContent = port.text;
                    elements.portArrival.appendChild(option);
                }
                elements.portArrival.disabled = false;
                console.log('✅ Arrival ports loaded');
            } else {
                console.error('❌ No arrival ports found for:', this.value);
            }
        } else {
            elements.portArrival.innerHTML = '<option value="">Выберите направление</option>';
            elements.portArrival.disabled = true;
        }
        
        updateSelectedText('selectedPortArrival', 'Не выбран');
        checkFormComplete();
        
    } catch (error) {
        console.error('❌ Error in destination handler:', error);
        alert('Destination error: ' + error.message);
    }
});

// Добавьте обработчики для портов
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

// Функция проверки формы
function checkFormComplete() {
    try {
        var isComplete = elements.auction.value && 
                        elements.location.value && 
                        elements.portLoading.value && 
                        elements.destination.value &&
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
// Простая функция обновления текста
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
