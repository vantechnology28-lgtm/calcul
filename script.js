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
    
    // Простой обработчик локации
    elements.location.addEventListener('change', function() {
        console.log('📍 Location changed to:', this.value);
        
        try {
            updateSelectedText('selectedLocation', this.options[this.selectedIndex].text);
            
            if (this.value) {
                // Пока загружаем все порты (без фильтрации)
                elements.portLoading.innerHTML = '<option value="">Выберите порт отправления</option>';
                
                if (typeof portData !== 'undefined' && portData.loading) {
                    for (var i = 0; i < portData.loading.length; i++) {
                        var port = portData.loading[i];
                        var option = document.createElement('option');
                        option.value = port.value;
                        option.textContent = port.text;
                        elements.portLoading.appendChild(option);
                    }
                    elements.portLoading.disabled = false;
                    console.log('✅ Ports loaded');
                } else {
                    console.error('❌ portData not found');
                }
            }
            
        } catch (error) {
            console.error('❌ Error in location handler:', error);
            alert('Location error: ' + error.message);
        }
    });
    
    console.log('🎉 Setup complete');
});

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
