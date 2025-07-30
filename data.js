// Проверяем загрузку данных
console.log('🔧 Loading data.js...');

// Данные локаций по аукционам (ПОЛНЫЙ список)
const locationData = {
    1: [ // Copart
        {value: "38514", text: "TX HOUSTON", landCost: 180},
        {value: "38309", text: "CA LOS ANGELES", landCost: 330},
        {value: "38481", text: "NY LONG ISLAND", landCost: 330},
        {value: "38330", text: "GA ATLANTA WEST", landCost: 380},
        {value: "38339", text: "IL CHICAGO SOUTH", landCost: 630},
        {value: "38500", text: "PA PHILADELPHIA", landCost: 300},
        {value: "38303", text: "AZ PHOENIX", landCost: 470},
        {value: "38317", text: "CO DENVER", landCost: 630},
        {value: "38524", text: "WA NORTH SEATTLE", landCost: 380},
        {value: "38334", text: "GA SAVANNAH", landCost: 320},
        {value: "38312", text: "CA SACRAMENTO", landCost: 340},
        {value: "38313", text: "CA SAN DIEGO", landCost: 350},
        {value: "38321", text: "FL MIAMI SOUTH", landCost: 250},
        {value: "38512", text: "TX DALLAS", landCost: 200},
        {value: "38414", text: "MI DETROIT", landCost: 520},
        {value: "42394", text: "AL MOBILE SOUTH", landCost: 430},
        {value: "38301", text: "AL BIRMINGHAM", landCost: 450},
        {value: "38302", text: "AR LITTLE ROCK", landCost: 520},
        {value: "38304", text: "CA BAKERSFIELD", landCost: 360},
        {value: "38305", text: "CA FRESNO", landCost: 370},
        {value: "38306", text: "CA HAYWARD", landCost: 340},
        {value: "38307", text: "CA MARTINEZ", landCost: 340},
        {value: "38308", text: "CA ANTELOPE", landCost: 340},
        {value: "38310", text: "CA SAN BERNARDINO", landCost: 340},
        {value: "38311", text: "CA RANCHO CUCAMONGA", landCost: 340},
        {value: "38314", text: "CA VALLEJO", landCost: 340},
        {value: "38315", text: "CA VAN NUYS", landCost: 340},
        {value: "38316", text: "CO COLORADO SPRINGS", landCost: 630},
        {value: "38318", text: "CT HARTFORD", landCost: 350},
        {value: "38319", text: "DE NEW CASTLE", landCost: 320},
        {value: "38320", text: "FL JACKSONVILLE EAST", landCost: 280},
        {value: "38322", text: "FL ORLANDO", landCost: 270},
        {value: "38323", text: "FL TALLAHASSEE", landCost: 310},
        {value: "38324", text: "FL TAMPA SOUTH", landCost: 260},
        {value: "38325", text: "FL WEST PALM BEACH", landCost: 250},
        {value: "38326", text: "FL PUNTA GORDA", landCost: 270},
        {value: "38327", text: "FL OCALA", landCost: 280},
        {value: "38328", text: "GA ATLANTA EAST", landCost: 380},
        {value: "38329", text: "GA ATLANTA SOUTH", landCost: 380},
        {value: "38331", text: "GA MACON", landCost: 400},
        {value: "38332", text: "GA MOULTRIE", landCost: 420},
        {value: "38333", text: "GA TIFTON", landCost: 420},
        {value: "38335", text: "HI HONOLULU", landCost: 890},
        {value: "38336", text: "IA CRASH CORNER", landCost: 580},
        {value: "38337", text: "IA DAVENPORT", landCost: 600},
        {value: "38338", text: "ID BOISE", landCost: 650},
        {value: "38340", text: "IL CHICAGO NORTH", landCost: 630},
        {value: "38341", text: "IL PEORIA", landCost: 630},
        {value: "38342", text: "IL SOUTHERN ILLINOIS", landCost: 580},
        {value: "38343", text: "IN FORT WAYNE", landCost: 550},
        {value: "38344", text: "IN HAMMOND", landCost: 600},
        {value: "38345", text: "IN INDIANAPOLIS", landCost: 550},
        {value: "38346", text: "KS KANSAS CITY", landCost: 580},
        {value: "38347", text: "KS WICHITA", landCost: 580},
        {value: "38348", text: "KY LEXINGTON EAST", landCost: 520},
        {value: "38349", text: "KY LEXINGTON WEST", landCost: 520},
        {value: "38350", text: "KY LOUISVILLE", landCost: 520}
    ],
    3: [ // IAAI
        {value: "38065", text: "TX HOUSTON", landCost: 230},
        {value: "38684", text: "CA LOS ANGELES", landCost: 320},
        {value: "38758", text: "NY LONG ISLAND", landCost: 330},
        {value: "38705", text: "GA ATLANTA NORTH", landCost: 380},
        {value: "38715", text: "IL CHICAGO SOUTH", landCost: 640},
        {value: "38048", text: "PA PHILADELPHIA", landCost: 310},
        {value: "38676", text: "AZ PHOENIX", landCost: 480},
        {value: "38691", text: "CO DENVER", landCost: 640},
        {value: "38079", text: "WA SEATTLE", landCost: 390},
        {value: "38708", text: "GA SAVANNAH", landCost: 330},
        {value: "38687", text: "CA SACRAMENTO", landCost: 350},
        {value: "38688", text: "CA SAN DIEGO", landCost: 360},
        {value: "38700", text: "FL MIAMI", landCost: 260},
        {value: "38070", text: "TX DALLAS", landCost: 210},
        {value: "38734", text: "MI DETROIT", landCost: 530},
        {value: "38675", text: "AL BIRMINGHAM", landCost: 460},
        {value: "38677", text: "AR LITTLE ROCK", landCost: 530},
        {value: "38678", text: "CA BAKERSFIELD", landCost: 370},
        {value: "38679", text: "CA FRESNO", landCost: 380},
        {value: "38680", text: "CA HAYWARD", landCost: 350},
        {value: "38681", text: "CA LONG BEACH", landCost: 330},
        {value: "38682", text: "CA MARTINEZ", landCost: 350},
        {value: "38683", text: "CA FONTANA", landCost: 340},
        {value: "38685", text: "CA SAN BERNARDINO", landCost: 350},
        {value: "38686", text: "CA RANCHO CUCAMONGA", landCost: 350},
        {value: "38689", text: "CA VALLEJO", landCost: 350},
        {value: "38690", text: "CA VAN NUYS", landCost: 350},
        {value: "38692", text: "CO COLORADO SPRINGS", landCost: 640},
        {value: "38693", text: "CT HARTFORD", landCost: 360},
        {value: "38694", text: "DE NEW CASTLE", landCost: 330},
        {value: "38695", text: "FL JACKSONVILLE", landCost: 290},
        {value: "38696", text: "FL FORT PIERCE", landCost: 270},
        {value: "38697", text: "FL JACKSONVILLE EAST", landCost: 290},
        {value: "38698", text: "FL ORLANDO", landCost: 280},
        {value: "38699", text: "FL TALLAHASSEE", landCost: 320}
    ],
    2: [ // Manheim
        {value: "38652", text: "TX MANHEIM HOUSTON", landCost: 280},
        {value: "38597", text: "CA MANHEIM SOUTHERN CALIFORNIA", landCost: 310},
        {value: "38637", text: "NY MANHEIM NEW YORK", landCost: 340},
        {value: "38611", text: "GA MANHEIM ATLANTA", landCost: 390},
        {value: "38615", text: "IL MANHEIM CHICAGO", landCost: 650},
        {value: "38644", text: "PA MANHEIM PHILADELPHIA", landCost: 320},
        {value: "38590", text: "AZ MANHEIM PHOENIX", landCost: 490},
        {value: "38598", text: "CO MANHEIM DENVER", landCost: 650},
        {value: "38658", text: "WA MANHEIM SEATTLE", landCost: 400},
        {value: "38591", text: "CA MANHEIM SAN FRANCISCO BAY", landCost: 350},
        {value: "38592", text: "CT MANHEIM CONNECTICUT", landCost: 360},
        {value: "38593", text: "FL MANHEIM FORT LAUDERDALE", landCost: 260},
        {value: "38594", text: "FL MANHEIM ORLANDO", landCost: 280},
        {value: "38595", text: "FL MANHEIM TAMPA", landCost: 270},
        {value: "38596", text: "IN MANHEIM INDIANAPOLIS", landCost: 560},
        {value: "38599", text: "KY MANHEIM KENTUCKY", landCost: 530},
        {value: "38600", text: "LA MANHEIM NEW ORLEANS", landCost: 360},
        {value: "38601", text: "MA MANHEIM BOSTON", landCost: 390},
        {value: "38602", text: "MD MANHEIM BALTIMORE-WASHINGTON", landCost: 330},
        {value: "38603", text: "MI MANHEIM DETROIT", landCost: 530}
    ],
    32: [ // Canada
        {value: "38382", text: "ON TORONTO", landCost: 780},
        {value: "44170", text: "BC VANCOUVER", landCost: 2480},
        {value: "38381", text: "QC MONTREAL", landCost: 820},
        {value: "38377", text: "AB CALGARY", landCost: 1880},
        {value: "38378", text: "AB EDMONTON", landCost: 1920},
        {value: "38379", text: "ON OTTAWA", landCost: 800},
        {value: "38380", text: "MB WINNIPEG", landCost: 1650},
        {value: "38383", text: "SK SASKATOON", landCost: 1750},
        {value: "38384", text: "NS HALIFAX", landCost: 950},
        {value: "38385", text: "NB MONCTON", landCost: 920}
    ],
    30: [ // SUBLOT COPART
        {value: "38574", text: "CA SACRAMENTO CA SUBLOT", landCost: 0}
    ],
    31: [ // SUBLOT IAAI
        {value: "38577", text: "TX HASLET TX SUBLOT", landCost: 0}
    ]
};

// Данные портов
const portData = {
    loading: [
        {value: "1", text: "PORT, NJ"},
        {value: "2", text: "PORT, TX"},
        {value: "3", text: "PORT, GA"},
        {value: "4", text: "PORT, FL"},
        {value: "5", text: "PORT, CA"},
        {value: "6", text: "PORT, CAN"},
        {value: "16", text: "PORT, WA"}
    ],
    arrival: {
        Georgia: [
            {value: "2", text: "Poti"},
            {value: "7", text: "Batumi"}
        ],
        Lithuania: [
            {value: "4", text: "Klaipeda"}
        ]
    }
};

// Цены океанской доставки
const oceanPrices = {
    Georgia: {
        "2": { // Poti
            "1": 1400, "2": 1650, "3": 1400, "4": 1800, "5": 1975, "6": 990, "16": 1900
        },
        "7": { // Batumi  
            "1": 1200, "2": 1350, "3": 1200, "4": 1600, "5": 1700, "6": 990, "16": 1800
        }
    },
    Lithuania: {
        "4": { // Klaipeda
            "1": 800, "2": 950, "3": 850, "4": 1100, "5": 1350, "6": 750, "16": 1400
        }
    }
};

// Отладочная информация
console.log('✅ Data loaded successfully!');
console.log('📊 Available auctions:', Object.keys(locationData));
console.log('📍 Locations count:', Object.keys(locationData).map(key => `${key}: ${locationData[key].length}`));
console.log('🚢 Port data loaded:', portData);
console.log('💰 Ocean prices loaded:', Object.keys(oceanPrices));

// Проверяем что все переменные доступны глобально
window.locationData = locationData;
window.portData = portData;
window.oceanPrices = oceanPrices;
