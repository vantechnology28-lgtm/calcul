// Элементы формы
const elements = {
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

// Обработчики событий
elements.auction.addEventListener('change', function() {
    const auctionId = this.value;
    updateDisplay('selectedAuction', this.options[this.selectedIndex].text);
    
    if (auctionId) {
        populateLocations(auctionId);
        elements.location.disabled = false;
        elements.location.innerHTML = '<option value="">Выберите локацию</option>';
        resetDependentFields(['location', 'portLoading', 'portArrival']);
    } else {
        clearSelect(elements.location, 'Сначала выберите аукцион');
        resetDependentFields(['location', 'portLoading', 'portArrival']);
    }
    checkForm();
});

elements.location.addEventListener('change', function() {
    updateDisplay('selectedLocation', this.options[this.selectedIndex]?.text || 'Не выбрана');
    
    if (this.value) {
        populatePorts();
        elements.portLoading.disabled = false;
    } else {
        clearSelect(elements.portLoading, 'Сначала выберите локацию');
        resetDependentFields(['portLoading', 'portArrival']);
    }
    checkForm();
});

elements.portLoading.addEventListener('change', function() {
    updateDisplay('selectedPortLoading', this.options[this.selectedIndex]?.text || 'Не выбран');
    checkForm();
});

elements.destination.addEventListener('change', function() {
    const destination = this.value;
    
    if (destination) {
        populateArrivalPorts(destination);
        elements.portArrival.disabled = false;
    } else {
        clearSelect(elements.portArrival, 'Выберите направление');
        updateDisplay('selectedPortArrival', 'Не выбран');
    }
    checkForm();
});

elements.portArrival.addEventListener('change', function() {
    updateDisplay('selectedPortArrival', this.options[this.selectedIndex]?.text || 'Не выбран');
    checkForm();
});

elements.calculateBtn.addEventListener('click', function() {
    if (!this.disabled) {
        calculatePrice();
    }
});

elements.markup.addEventListener('input', function() {
    if (elements.resultSection.classList.contains('show')) {
        updateFinalPrice();
    }
});

// Функции управления формой
function populateLocations(auctionId) {
    const locations = locationData[auctionId] || [];
    elements.location.innerHTML = '<option value="">Выберите локацию</option>';
    
    locations.forEach(location => {
        const option = document.createElement('option');
        option.value = location.value;
        option.textContent = location.text;
        option.dataset.landCost = location.landCost;
        elements.location.appendChild(option);
    });
}

function populatePorts() {
    elements.portLoading.innerHTML = '<option value="">Выберите порт отправления</option>';
    
    portData.loading.forEach(port => {
        const option = document.createElement('option');
        option.value = port.value;
        option.textContent = port.text;
        elements.portLoading.appendChild(option);
    });
}

function populateArrivalPorts(destination) {
    elements.portArrival.innerHTML = '<option value="">Выберите порт прибытия</option>';
    
    const ports = portData.arrival[destination] || [];
    ports.forEach(port => {
        const option = document.createElement('option');
        option.value = port.value;
        option.textContent = port.text;
        elements.portArrival.appendChild(option);
    });
}

function clearSelect(select, text) {
    select.innerHTML = `<option value="">${text}</option>`;
    select.disabled = true;
}

function resetDependentFields(fields) {
    const fieldMap = {
        'location': () => updateDisplay('selectedLocation', 'Не выбрана'),
        'portLoading': () => updateDisplay('selectedPortLoading', 'Не выбран'),
        'portArrival': () => updateDisplay('selectedPortArrival', 'Не выбран')
    };
    
    fields.forEach(field => {
        if (fieldMap[field]) fieldMap[field]();
    });
}

function updateDisplay(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = text === '' ? 'Не выбран' : text;
    }
}

function checkForm() {
    const isComplete = elements.auction.value && 
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

// Функция расчета стоимости
function calculatePrice() {
    try {
        const auctionId = elements.auction.value;
        const locationId = elements.location.value;
        const portLoadingId = elements.portLoading.value;
        const portArrivalId = elements.portArrival.value;
        const destination = elements.destination.value;
        
        // Получаем стоимость доставки суша
        const selectedOption = elements.location.options[elements.location.selectedIndex];
        const landCost = parseInt(selectedOption.dataset.landCost) || 0;
        
        // Получаем стоимость океанской доставки
        let oceanCost = 0;
        if (oceanPrices[destination] && oceanPrices[destination][portArrivalId]) {
            oceanCost = oceanPrices[destination][portArrivalId][portLoadingId] || 0;
        }
        
        // Фиксированные расходы
        const dealerFee = 100;
        const portServices = destination === 'Lithuania' ? 300 : 0;
        
        // Проверка на ошибки
        if (oceanCost > 50000) {
            displayError('Ошибка в расчете для данного маршрута. Попробуйте другой порт прибытия.');
            return;
        }
        
        if (landCost === 0 && oceanCost === 0) {
            displayError('Данный маршрут не поддерживается или временно недоступен.');
            return;
        }
        
        // Общая стоимость без наценки
        const totalDelivery = landCost + oceanCost + dealerFee + portServices;
        
        // Наценка пользователя
        const userMarkup = parseInt(elements.markup.value) || 0;
        
        // Итоговая стоимость
        const finalPrice = totalDelivery + userMarkup;
        
        // Отображаем результат
        displayResult({
            landCost,
            oceanCost,
            dealerFee,
            portServices,
            totalDelivery,
            userMarkup,
            finalPrice
        });
        
    } catch (error) {
        displayError('Произошла ошибка при расчете. Проверьте выбранные параметры.');
        console.error('Calculation error:', error);
    }
}

// Функция отображения результата
function displayResult(prices) {
    let breakdownHTML = '';
    
    // Добавляем каждую статью расходов
    if (prices.landCost > 0) {
        breakdownHTML += `<div class="price-item">
            <span>🚛 Доставка суша:</span>
            <span>$${prices.landCost}</span>
        </div>`;
    }
    
    if (prices.oceanCost > 0) {
        breakdownHTML += `<div class="price-item">
            <span>🚢 Доставка океан:</span>
            <span>$${prices.oceanCost}</span>
        </div>`;
    }
    
    if (prices.dealerFee > 0) {
        breakdownHTML += `<div class="price-item">
            <span>🏢 Услуги дилера:</span>
            <span>$${prices.dealerFee}</span>
        </div>`;
    }
    
    if (prices.portServices > 0) {
        breakdownHTML += `<div class="price-item">
            <span>⚓ Портовые услуги:</span>
            <span>$${prices.portServices}</span>
        </div>`;
    }
    
    breakdownHTML += `<div class="price-item">
        <span>📋 Итого доставка:</span>
        <span><strong>$${prices.totalDelivery}</strong></span>
    </div>`;
    
    if (prices.userMarkup > 0) {
        breakdownHTML += `<div class="price-item markup">
            <span>💰 Ваша наценка:</span>
            <span>$${prices.userMarkup}</span>
        </div>`;
    }
    
    breakdownHTML += `<div class="price-item total">
        <span>🎯 ИТОГО к оплате:</span>
        <span>$${prices.finalPrice}</span>
    </div>`;
    
    elements.priceBreakdown.innerHTML = breakdownHTML;
    elements.finalAmount.textContent = `$${prices.finalPrice}`;
    
    // Показываем секцию результатов
    elements.resultSection.classList.add('show');
    
    // Добавляем предупреждение для высоких цен
    if (prices.finalPrice > 5000) {
        showWarning('Высокая стоимость доставки может быть связана с удаленностью локации или особенностями маршрута.');
    }
}

// Функция обновления итоговой цены при изменении наценки
function updateFinalPrice() {
    if (!elements.resultSection.classList.contains('show')) return;
    
    try {
        // Получаем базовую стоимость из последнего расчета
        const totalItems = elements.priceBreakdown.querySelectorAll('.price-item');
        let totalDelivery = 0;
        
        // Находим строку "Итого доставка"
        totalItems.forEach(item => {
            const text = item.textContent;
            if (text.includes('Итого доставка:')) {
                const priceMatch = text.match(/\$(\d+)/);
                if (priceMatch) {
                    totalDelivery = parseInt(priceMatch[1]);
                }
            }
        });
        
        const userMarkup = parseInt(elements.markup.value) || 0;
        const finalPrice = totalDelivery + userMarkup;
        
        // Обновляем отображение наценки и итога
        const markupItem = elements.priceBreakdown.querySelector('.price-item.markup span:last-child');
        const totalItem = elements.priceBreakdown.querySelector('.price-item.total span:last-child');
        
        if (markupItem) markupItem.textContent = `$${userMarkup}`;
        if (totalItem) totalItem.textContent = `$${finalPrice}`;
        
        elements.finalAmount.textContent = `$${finalPrice}`;
        
    } catch (error) {
        console.error('Error updating final price:', error);
    }
}

// Функция отображения ошибки
function displayError(message) {
    elements.priceBreakdown.innerHTML = `<div class="error">
        <strong>⚠️ Ошибка:</strong> ${message}
    </div>`;
    
    elements.finalAmount.textContent = '$0';
    elements.resultSection.classList.add('show');
}

// Функция отображения предупреждения
function showWarning(message) {
    const warningDiv = document.createElement('div');
    warningDiv.className = 'warning';
    warningDiv.innerHTML = `<strong>⚠️ Внимание:</strong> ${message}`;
    elements.resultSection.appendChild(warningDiv);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Устанавливаем начальные значения
    checkForm();
    
    // Добавляем обработчик для Enter
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !elements.calculateBtn.disabled) {
            e.preventDefault();
            calculatePrice();
        }
    });
    
    console.log('Calculator initialized successfully');
    console.log('Available locations:', Object.keys(locationData).map(key => `${key}: ${locationData[key].length} locations`));
});
