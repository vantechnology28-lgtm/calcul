console.log('🔧 SIMPLE script starting...');

// Проверяем что скрипт вообще загружается
alert('Script.js loaded!');

window.addEventListener('load', function() {
    console.log('📱 Window loaded');
    alert('Window loaded!');
    
    // Простая проверка элементов
    var auction = document.getElementById('auction');
    var location = document.getElementById('location');
    
    console.log('auction element:', auction);
    console.log('location element:', location);
    
    if (!auction) {
        alert('Auction element not found!');
        return;
    }
    
    if (!location) {
        alert('Location element not found!');
        return;
    }
    
    // Простой обработчик аукциона
    auction.addEventListener('change', function() {
        console.log('Auction changed to:', this.value);
        alert('Auction selected: ' + this.value);
        
        // Простое добавление тестовых локаций
        location.innerHTML = '<option value="">Выберите локацию</option>';
        location.innerHTML += '<option value="test1">TEST LOCATION 1</option>';
        location.innerHTML += '<option value="test2">TEST LOCATION 2</option>';
        location.disabled = false;
        
        console.log('Test locations added');
    });
    
    console.log('Events set up');
    alert('Setup complete!');
});

console.log('🔧 Script end reached');
