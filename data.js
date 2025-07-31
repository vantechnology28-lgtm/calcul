// Проверяем загрузку данных
console.log('🔧 Loading data.js...');

// ВАЖНО: Проверяем синтаксис
try {
    
// Данные локаций (СЮДА ВСТАВЬТЕ ВСЕ ВАШИ ЛОКАЦИИ)
const locationData = {
    1: [ // Copart - основные + дополнительные + SUBLOT
        // Alabama
        {value: "38297", text: "AL MOBILE", landCost: 430, ports: ["3"]},
        {value: "38298", text: "AL BIRMINGHAM", landCost: 450, ports: ["3"]},
        {value: "38299", text: "AL Montgomery", landCost: 460, ports: ["3"]},
        {value: "40759", text: "AL AL - DOTHAN", landCost: 470, ports: ["3"]},
        {value: "38300", text: "AL TANNER", landCost: 460, ports: ["3"]},
        {value: "42394", text: "AL MOBILE SOUTH", landCost: 430, ports: ["3"]},
        {value: "38571", text: "AL BIRMINGHAM AL SUBLOT", landCost: 0, ports: []},
        
        // Arkansas  
        {value: "38301", text: "AR LITTLE ROCK", landCost: 520, ports: ["2"]},
        {value: "38302", text: "AR FAYETTEVILLE", landCost: 550, ports: ["2"]},
        
        // Arizona
        {value: "38303", text: "AZ PHOENIX", landCost: 470, ports: ["5"]},
        {value: "43710", text: "AZ AZ - PHOENIX NORTH", landCost: 480, ports: ["5"]},
        {value: "38304", text: "AZ TUCSON", landCost: 490, ports: ["5"]},
        
        // California
        {value: "41272", text: "CA ADELANTO", landCost: 360, ports: ["5"]},
        {value: "44310", text: "CA NAPA", landCost: 350, ports: ["5"]},
        {value: "38924", text: "CA CA - REDDING", landCost: 370, ports: ["5"]},
        {value: "38181", text: "CA ANTELOPE", landCost: 340, ports: ["5"]},
        {value: "38305", text: "CA BAKERSFIELD", landCost: 360, ports: ["5"]},
        {value: "38306", text: "CA SAN BERNARDINO", landCost: 340, ports: ["5"]},
        {value: "38307", text: "CA FRESNO", landCost: 370, ports: ["5"]},
        {value: "38574", text: "CA SACRAMENTO CA SUBLOT", landCost: 0, ports: []},
        {value: "38308", text: "CA HAYWARD", landCost: 340, ports: ["5"]},
        {value: "38573", text: "CA LANCASTER CA SUBLOT", landCost: 0, ports: []},
        {value: "38309", text: "CA LOS ANGELES", landCost: 330, ports: ["5"]},
        {value: "38310", text: "CA MARTINEZ", landCost: 340, ports: ["5"]},
        {value: "43270", text: "CA MENTONE", landCost: 350, ports: ["5"]},
        {value: "38311", text: "CA RANCHO CUCAMONGA", landCost: 340, ports: ["5"]},
        {value: "38312", text: "CA SACRAMENTO", landCost: 340, ports: ["5"]},
        {value: "38313", text: "CA SAN DIEGO", landCost: 350, ports: ["5"]},
        {value: "38314", text: "CA San Jose", landCost: 350, ports: ["5"]},
        {value: "38576", text: "CA SANTA PAULA CA SUBLOT", landCost: 0, ports: []},
        {value: "38553", text: "CA Sun Valley SUBLOT", landCost: 0, ports: []},
        {value: "38315", text: "CA VALLEJO", landCost: 340, ports: ["5"]},
        {value: "38316", text: "CA VAN NUYS", landCost: 340, ports: ["5"]},
        {value: "38575", text: "CA Long Beach", landCost: 330, ports: ["5"]},
        
        // Colorado
        {value: "38317", text: "CO DENVER", landCost: 630, ports: ["2"]},
        {value: "38562", text: "CO COLORADO SPRINGS CO SUBLOT", landCost: 0, ports: []},
        {value: "38532", text: "CO COLORADO SPRINGS", landCost: 640, ports: ["2"]},
        {value: "38588", text: "CO Denver Central", landCost: 630, ports: ["2"]},
        {value: "38585", text: "CO FORT LUPTON", landCost: 640, ports: ["2"]},
        {value: "38584", text: "CO CO - DENVER SOUTH", landCost: 630, ports: ["2"]},
        {value: "38579", text: "CO COLORADO SPRINGS CO SUBLOT", landCost: 0, ports: []},
        
        // Connecticut
        {value: "38198", text: "CT CT - HARTFORD SPRINGFIELD", landCost: 350, ports: ["1"]},
        {value: "38572", text: "CT BERLIN CT SUBLOT", landCost: 0, ports: []},
        {value: "38318", text: "CT HARTFORD", landCost: 350, ports: ["1"]},
        
        // Delaware
        {value: "38319", text: "DE SEAFORD", landCost: 320, ports: ["1"]},
        
        // Florida
        {value: "38550", text: "FL ORLANDO NORTH", landCost: 270, ports: ["4"]},
        {value: "42910", text: "FL FL - PUNTA GORDA SOUTH", landCost: 280, ports: ["4"]},
        {value: "38320", text: "FL FT. PIERCE", landCost: 260, ports: ["4"]},
        {value: "38321", text: "FL MIAMI SOUTH", landCost: 250, ports: ["4"]},
        {value: "38322", text: "FL JACKSONVILLE EAST", landCost: 280, ports: ["4"]},
        {value: "43230", text: "FL JACKSONVILLE NORTH", landCost: 280, ports: ["4"]},
        {value: "38533", text: "FL JACKSONVILLE WEST", landCost: 280, ports: ["4"]},
        {value: "38534", text: "FL MIAMI CENTRAL", landCost: 250, ports: ["4"]},
        {value: "38326", text: "FL MIAMI NORTH", landCost: 250, ports: ["4"]},
        {value: "38323", text: "FL TALLAHASSEE", landCost: 310, ports: ["4"]},
        {value: "38324", text: "FL OCALA", landCost: 280, ports: ["4"]},
        {value: "38325", text: "FL ORLANDO SOUTH", landCost: 270, ports: ["4"]},
        {value: "38327", text: "FL PUNTA GORDA", landCost: 270, ports: ["4"]},
        {value: "38328", text: "FL TAMPA SOUTH", landCost: 260, ports: ["4"]},
        {value: "38329", text: "FL WEST PALM BEACH", landCost: 250, ports: ["4"]},
        
        // Georgia
        {value: "42880", text: "GA GA - AUGUSTA", landCost: 400, ports: ["3"]},
        {value: "38330", text: "GA ATLANTA WEST", landCost: 380, ports: ["3"]},
        {value: "38190", text: "GA GA - MACON", landCost: 400, ports: ["3"]},
        {value: "38189", text: "GA GA - MACON", landCost: 400, ports: ["3"]},
        {value: "38535", text: "GA CARTERSVILLE", landCost: 390, ports: ["3"]},
        {value: "38191", text: "GA EAST POINT", landCost: 380, ports: ["3"]},
        {value: "38192", text: "GA GA - CRASHEDTOYS ATLANTA", landCost: 380, ports: ["3"]},
        {value: "38331", text: "GA ATLANTA SOUTH", landCost: 380, ports: ["3"]},
        {value: "41317", text: "GA FAIRBURN", landCost: 380, ports: ["3"]},
        {value: "38332", text: "GA ATLANTA NORTH", landCost: 380, ports: ["3"]},
        {value: "38333", text: "GA ATLANTA EAST", landCost: 380, ports: ["3"]},
        {value: "38334", text: "GA SAVANNAH", landCost: 320, ports: ["3"]},
        {value: "38335", text: "GA TIFTON", landCost: 420, ports: ["3"]},
        {value: "38567", text: "GA METTER GA SUBLOT", landCost: 0, ports: []},
        
        // Hawaii
        {value: "38375", text: "HI HONOLULU", landCost: 890, ports: ["5"]},
        {value: "38336", text: "HI HONOLULU", landCost: 890, ports: ["5"]},
        
        // Iowa
        {value: "38337", text: "IA DES MOINES", landCost: 580, ports: ["1"]},
        {value: "38538", text: "IA DAVENPORT", landCost: 600, ports: ["1"]},
        {value: "38537", text: "IA CRASHEDTOYS ELDRIDGE", landCost: 600, ports: ["1"]},
        
        // Idaho
        {value: "38338", text: "ID BOISE", landCost: 650, ports: ["16"]},
        
        // Illinois
        {value: "38551", text: "IL Southern Illinois", landCost: 580, ports: ["1"]},
        {value: "38563", text: "IL ALORTON", landCost: 580, ports: ["1"]},
        {value: "42900", text: "IL Southern Illinois", landCost: 580, ports: ["1"]},
        {value: "42870", text: "IL SOUTHERN ILLINOIS", landCost: 580, ports: ["1"]},
        {value: "38339", text: "IL CHICAGO SOUTH", landCost: 630, ports: ["1"]},
        {value: "38340", text: "IL CHICAGO NORTH", landCost: 630, ports: ["1"]},
        {value: "38341", text: "IL PEORIA", landCost: 630, ports: ["1"]},
        {value: "38569", text: "IL LOUIS IL SUBLOT", landCost: 0, ports: []},
        {value: "38342", text: "IL WHEELING", landCost: 630, ports: ["1"]},
        
        // Indiana
        {value: "40903", text: "IN CICERO", landCost: 550, ports: ["1"]},
        {value: "41308", text: "IN DYER", landCost: 580, ports: ["1"]},
        {value: "40625", text: "IN FORT WAYNE", landCost: 550, ports: ["1"]},
        {value: "38536", text: "IN HAMMOND", landCost: 600, ports: ["1"]},
        {value: "38343", text: "IN HARTFORD CITY", landCost: 550, ports: ["1"]},
        {value: "38344", text: "IN INDIANAPOLIS", landCost: 550, ports: ["1"]},
        
        // Kansas
        {value: "38345", text: "KS KANSAS CITY", landCost: 580, ports: ["2"]},
        {value: "38346", text: "KS WICHITA", landCost: 580, ports: ["2"]},
        
        // Kentucky
        {value: "42570", text: "KY EARLINGTON", landCost: 520, ports: ["3"]},
        {value: "38539", text: "KY LEXINGTON WEST", landCost: 520, ports: ["3", "1"]},
        {value: "38396", text: "KY LEXINGTON EAST", landCost: 520, ports: ["3", "1"]},
        {value: "38397", text: "KY LOUISVILLE", landCost: 520, ports: ["3", "1"]},
        {value: "38398", text: "KY WALTON", landCost: 520, ports: ["3", "1"]},
        
        // Louisiana
        {value: "38561", text: "LA TICKFAW LA SUBLOT", landCost: 0, ports: []},
        {value: "38399", text: "LA BATON ROUGE", landCost: 350, ports: ["2"]},
        {value: "38400", text: "LA NEW ORLEANS", landCost: 350, ports: ["2"]},
        {value: "38401", text: "LA SHREVEPORT", landCost: 400, ports: ["2"]},
        
        // Massachusetts
        {value: "42600", text: "MA MA - FREETOWN", landCost: 380, ports: ["1"]},
        {value: "38402", text: "MA SOUTH BOSTON", landCost: 380, ports: ["1"]},
        {value: "38403", text: "MA NORTH BOSTON", landCost: 380, ports: ["1"]},
        {value: "38404", text: "MA WEST WARREN", landCost: 390, ports: ["1"]},
        
        // Maryland
        {value: "40732", text: "MD BALTIMORE EAST", landCost: 320, ports: ["1"]},
        {value: "38407", text: "MD BALTIMORE", landCost: 320, ports: ["1"]},
        {value: "38556", text: "MD BALTIMORE MD SUBLOT", landCost: 0, ports: []},
        {value: "38408", text: "MD WASHINGTON DC", landCost: 320, ports: ["1"]},
        {value: "38555", text: "MD WHITE MARSH SUBLOT", landCost: 0, ports: []},
        
        // Maine
        {value: "38570", text: "ME GRAY ME SUBLOT", landCost: 0, ports: []},
        {value: "38409", text: "ME LYMAN", landCost: 420, ports: ["1"]},
        {value: "38578", text: "ME ORONO ME SUBLOT", landCost: 0, ports: []},
        {value: "43411", text: "ME WINDHAM", landCost: 420, ports: ["1"]},
        
        // Michigan
        {value: "38410", text: "MI FLINT", landCost: 520, ports: ["1"]},
        {value: "38411", text: "MI KINCHELOE", landCost: 580, ports: ["1"]},
        {value: "38412", text: "MI LANSING", landCost: 540, ports: ["1"]},
        {value: "38413", text: "MI IONIA", landCost: 540, ports: ["1"]},
        {value: "38414", text: "MI DETROIT", landCost: 520, ports: ["1"]},
        
        // Minnesota
        {value: "38415", text: "MN ST. CLOUD", landCost: 650, ports: ["1"]},
        {value: "38416", text: "MN MINNEAPOLIS", landCost: 650, ports: ["1"]},
        {value: "38175", text: "MN CRASHEDTOYS MINNEAPOLIS", landCost: 650, ports: ["1"]},
        {value: "38566", text: "MN HAM LAKE MN SUBLOT", landCost: 0, ports: []},
        {value: "38540", text: "MN CRASHEDTOYS EAST BETHEL", landCost: 650, ports: ["1"]},
        {value: "38417", text: "MN MINNEAPOLIS NORTH", landCost: 650, ports: ["1"]},
        
        // Missouri
        {value: "38418", text: "MO ST. LOUIS", landCost: 580, ports: ["2"]},
        {value: "38419", text: "MO COLUMBIA", landCost: 580, ports: ["2"]},
        {value: "38583", text: "MO SPRINGFIELD MO SUBLOT", landCost: 0, ports: []},
        {value: "38420", text: "MO SPRINGFIELD", landCost: 580, ports: ["2"]},
        {value: "38421", text: "MO SIKESTON", landCost: 550, ports: ["2"]},
        
        // Mississippi
        {value: "38422", text: "MS JACKSON", landCost: 480, ports: ["2", "3"]},
        {value: "43430", text: "MS Grenada", landCost: 490, ports: ["2", "3"]},
        
        // Montana
        {value: "38423", text: "MT BILLINGS", landCost: 750, ports: ["16"]},
        {value: "38424", text: "MT Helena", landCost: 760, ports: ["16"]},
        
        // North Carolina
        {value: "38425", text: "NC CHINA GROVE", landCost: 380, ports: ["3"]},
        {value: "38951", text: "NC CONCORD", landCost: 380, ports: ["3"]},
        {value: "38557", text: "NC LUMBERTON NC SUBLOT", landCost: 0, ports: []},
        {value: "38426", text: "NC RALEIGH", landCost: 380, ports: ["3"]},
        {value: "41245", text: "NC GASTONIA", landCost: 380, ports: ["3"]},
        {value: "41191", text: "NC NC - RALEIGH NORTH", landCost: 380, ports: ["3"]},
        {value: "38558", text: "NC LUMBERTON NC SUBLOT", landCost: 0, ports: []},
        {value: "38427", text: "NC MEBANE", landCost: 380, ports: ["3"]},
        {value: "38187", text: "NC MOCKSVILLE", landCost: 380, ports: ["3"]},
        
        // North Dakota
        {value: "41326", text: "ND BISMARCK", landCost: 720, ports: ["1"]},
        
        // Nebraska
        {value: "38428", text: "NE LINCOLN", landCost: 620, ports: ["2"]},
        
        // New Hampshire
        {value: "38541", text: "NH CANDIA", landCost: 380, ports: ["1"]},
        
        // New Jersey
        {value: "38474", text: "NJ GLASSBORO EAST", landCost: 320, ports: ["1"]},
        {value: "38475", text: "NJ SOMERVILLE", landCost: 320, ports: ["1"]},
        {value: "38476", text: "NJ TRENTON", landCost: 320, ports: ["1"]},
        
        // New Mexico
        {value: "38477", text: "NM ALBUQUERQUE", landCost: 550, ports: ["2"]},
        
        // Nevada
        {value: "38478", text: "NV LAS VEGAS", landCost: 450, ports: ["5"]},
        {value: "43480", text: "NV Las Vegas West", landCost: 450, ports: ["5"]},
        {value: "38479", text: "NV RENO", landCost: 480, ports: ["5"]},
        
        // New York
        {value: "38480", text: "NY ALBANY", landCost: 360, ports: ["1"]},
        {value: "38203", text: "NY BUFFALO", landCost: 380, ports: ["1"]},
        {value: "38568", text: "NY BROCTON NY SUBLOT", landCost: 0, ports: []},
        {value: "38481", text: "NY LONG ISLAND", landCost: 330, ports: ["1"]},
        {value: "38482", text: "NY SYRACUSE", landCost: 380, ports: ["1"]},
        {value: "38483", text: "NY ROCHESTER", landCost: 380, ports: ["1"]},
        {value: "38484", text: "NY NEWBURGH", landCost: 340, ports: ["1"]},
        {value: "38485", text: "NY ROCHESTER", landCost: 380, ports: ["1"]},
        
        // Ohio
        {value: "43560", text: "OH AKRON", landCost: 480, ports: ["1"]},
        {value: "38486", text: "OH CLEVELAND WEST", landCost: 480, ports: ["1"]},
        {value: "38488", text: "OH Columbus", landCost: 480, ports: ["1"]},
        {value: "38543", text: "OH DAYTON", landCost: 480, ports: ["1"]},
        {value: "38542", text: "OH CLEVELAND EAST", landCost: 480, ports: ["1"]},
        
        // Oklahoma
        {value: "38489", text: "OK OKLAHOMA CITY", landCost: 550, ports: ["2"]},
        {value: "38490", text: "OK TULSA", landCost: 550, ports: ["2"]},
        
        // Oregon
        {value: "38491", text: "OR EUGENE", landCost: 420, ports: ["16"]},
        {value: "38492", text: "OR PORTLAND NORTH", landCost: 400, ports: ["16"]},
        {value: "38493", text: "OR PORTLAND SOUTH", landCost: 400, ports: ["16"]},
        
        // Pennsylvania
        {value: "38494", text: "PA PITTSBURGH EAST", landCost: 320, ports: ["1"]},
        {value: "38544", text: "PA PHILADELPHIA EAST-SUBLOT", landCost: 0, ports: []},
        {value: "38495", text: "PA CHAMBERSBURG", landCost: 320, ports: ["1"]},
        {value: "38496", text: "PA SCRANTON", landCost: 330, ports: ["1"]},
        {value: "38497", text: "PA ALTOONA", landCost: 320, ports: ["1"]},
        {value: "38498", text: "PA PITTSBURGH NORTH", landCost: 320, ports: ["1"]},
        {value: "38499", text: "PA HARRISBURG", landCost: 320, ports: ["1"]},
        {value: "38500", text: "PA PHILADELPHIA", landCost: 300, ports: ["1"]},
        {value: "38501", text: "PA PITTSBURGH SOUTH", landCost: 320, ports: ["1"]},
        {value: "38502", text: "PA YORK HAVEN", landCost: 320, ports: ["1"]},
        
        // Rhode Island
        {value: "38587", text: "RI RI - EXETER", landCost: 380, ports: ["1"]},
        
        // South Carolina
        {value: "38503", text: "SC COLUMBIA", landCost: 400, ports: ["3"]},
        {value: "38504", text: "SC GREER", landCost: 400, ports: ["3"]},
        {value: "38188", text: "SC SC - NORTH CHARLESTON", landCost: 400, ports: ["3"]},
        {value: "38565", text: "SC Gaston, SC SUBLOT", landCost: 0, ports: []},
        {value: "38554", text: "SC SPARTANBURG SUBLOT", landCost: 0, ports: []},
        
        // South Dakota
        {value: "43360", text: "SD Rapid City", landCost: 680, ports: ["2"]},
        
        // Tennessee
        {value: "38505", text: "TN NASHVILLE", landCost: 480, ports: ["3"]},
        {value: "38506", text: "TN KNOXVILLE", landCost: 480, ports: ["3"]},
        {value: "38507", text: "TN Memphis", landCost: 480, ports: ["3"]},
        
        // Texas
        {value: "38508", text: "TX ABILENE", landCost: 250, ports: ["2"]},
        {value: "38509", text: "TX AMARILLO", landCost: 280, ports: ["2"]},
        {value: "38549", text: "TX ANDREWS", landCost: 270, ports: ["2"]},
        {value: "38586", text: "TX ANDREWS", landCost: 270, ports: ["2"]},
        {value: "38510", text: "TX EL PASO", landCost: 320, ports: ["2"]},
        {value: "38577", text: "TX HASLET TX SUBLOT", landCost: 0, ports: []},
        {value: "38511", text: "TX CORPUS CHRISTI", landCost: 220, ports: ["2"]},
        {value: "38545", text: "TX CRASHEDTOYS DALLAS", landCost: 200, ports: ["2"]},
        {value: "38512", text: "TX DALLAS", landCost: 200, ports: ["2"]},
        {value: "38513", text: "TX FT. WORTH", landCost: 200, ports: ["2"]},
        {value: "38514", text: "TX HOUSTON", landCost: 180, ports: ["2"]},
        {value: "38515", text: "TX LONGVIEW", landCost: 220, ports: ["2"]},
        {value: "38516", text: "TX LUFKIN", landCost: 210, ports: ["2"]},
        {value: "38517", text: "TX MCALLEN", landCost: 250, ports: ["2"]},
        {value: "38518", text: "TX AUSTIN", landCost: 210, ports: ["2"]},
        {value: "38559", text: "TX ORMY TX SUBLOT", landCost: 0, ports: []},
        {value: "38547", text: "TX SAN ANTONIO", landCost: 220, ports: ["2"]},
        {value: "38552", text: "TX WACO", landCost: 210, ports: ["2"]},
        {value: "38560", text: "TX ANTHONY TX SUBLOT", landCost: 0, ports: []},
        {value: "38582", text: "TX WILMER TX SUBLOT", landCost: 0, ports: []},
        {value: "38546", text: "TX DALLAS SOUTH", landCost: 200, ports: ["2"]},
        
        // Utah
        {value: "38564", text: "UT OGDEN SUBLOT", landCost: 0, ports: []},
        {value: "40768", text: "UT UT - SALT LAKE CITY", landCost: 580, ports: ["16"]},
        {value: "38519", text: "UT SALT LAKE CITY", landCost: 580, ports: ["16"]},
        
        // Virginia
        {value: "38204", text: "VA VA - RICHMOND EAST", landCost: 350, ports: ["1"]},
        {value: "38520", text: "VA DANVILLE", landCost: 360, ports: ["1"]},
        {value: "38202", text: "VA VA - FREDERICKSBURG", landCost: 350, ports: ["1"]},
        {value: "38201", text: "VA VA - FREDERICKSBURG", landCost: 350, ports: ["1"]},
        {value: "38521", text: "VA HAMPTON", landCost: 340, ports: ["1"]},
        {value: "38522", text: "VA RICHMOND", landCost: 350, ports: ["1"]},
        
        // Vermont
        {value: "38580", text: "VT ORLEANS VT SUBLOT", landCost: 0, ports: []},
        {value: "43600", text: "VT RUTLAND", landCost: 390, ports: ["1"]},
        
        // Washington
        {value: "38523", text: "WA SPOKANE", landCost: 420, ports: ["16"]},
        {value: "38524", text: "WA NORTH SEATTLE", landCost: 380, ports: ["16"]},
        {value: "38525", text: "WA GRAHAM", landCost: 380, ports: ["16"]},
        {value: "38526", text: "WA PASCO", landCost: 400, ports: ["16"]},
        
        // Wisconsin
        {value: "38185", text: "WI APPLETON", landCost: 610, ports: ["1"]},
        {value: "38184", text: "WI APPLETON", landCost: 610, ports: ["1"]},
        {value: "38527", text: "WI MILWAUKEE", landCost: 610, ports: ["1"]},
        {value: "42930", text: "WI Milwaukee South", landCost: 610, ports: ["1"]},
        {value: "38528", text: "WI MADISON", landCost: 610, ports: ["1"]},
        {value: "42730", text: "WI WI - MADISON SOUTH", landCost: 610, ports: ["1"]},
        {value: "41038", text: "WI MILWAUKEE NORTH", landCost: 610, ports: ["1"]},
        {value: "38529", text: "WI Milwaukee", landCost: 610, ports: ["1"]},
        {value: "38581", text: "WI WAUKESHA WI SUBLOT", landCost: 0, ports: []},
        
        // West Virginia
        {value: "38530", text: "WV CHARLESTON", landCost: 380, ports: ["1"]},
        // Wyoming
        {value: "38548", text: "WY Casper", landCost: 650, ports: ["2"]}
    ],
    
    2: [ // Manheim
        {value: "38589", text: "AL Manheim Birmingham", landCost: 460, ports: ["3"]},
        {value: "38662", text: "AZ Manheim Arizona", landCost: 490, ports: ["5"]},
        {value: "38590", text: "AZ Manheim Phoenix", landCost: 490, ports: ["5"]},
        {value: "38591", text: "AZ Manheim Tucson", landCost: 500, ports: ["5"]},
        {value: "38592", text: "CA Manheim California", landCost: 340, ports: ["5"]},
        {value: "38593", text: "CA Manheim Central California", landCost: 360, ports: ["5"]},
        {value: "38594", text: "CA Manheim Riverside", landCost: 350, ports: ["5"]},
        {value: "38595", text: "CA Manheim San Diego", landCost: 360, ports: ["5"]},
        {value: "38596", text: "CA Manheim San Francisco Bay", landCost: 350, ports: ["5"]},
        {value: "38597", text: "CA Manheim Southern California", landCost: 310, ports: ["5"]},
        {value: "38598", text: "CO Manheim Denver", landCost: 650, ports: ["2"]},
        {value: "38600", text: "FL Manheim Central Florida", landCost: 280, ports: ["4"]},
        {value: "38601", text: "FL Manheim Daytona Beach", landCost: 280, ports: ["4"]},
        {value: "38602", text: "FL Manheim Fort Lauderdale", landCost: 260, ports: ["4"]},
        {value: "38603", text: "FL Manheim Fort Myers", landCost: 280, ports: ["4"]},
        {value: "38604", text: "FL Manheim Jacksonville", landCost: 290, ports: ["4"]},
        {value: "38605", text: "FL Manheim Lakeland", landCost: 270, ports: ["4"]},
        {value: "38606", text: "FL Manheim Orlando", landCost: 280, ports: ["4"]},
        {value: "38607", text: "FL Manheim Palm Beach", landCost: 260, ports: ["4"]},
        {value: "38608", text: "FL Manheim Pensacola", landCost: 320, ports: ["4"]},
        {value: "38609", text: "FL Manheim St Pete", landCost: 270, ports: ["4"]},
        {value: "38610", text: "FL Manheim Tampa", landCost: 270, ports: ["4"]},
        {value: "38611", text: "GA Manheim Atlanta", landCost: 390, ports: ["3"]},
        {value: "38612", text: "GA Manheim Georgia", landCost: 400, ports: ["3"]},
        {value: "38614", text: "IL Manheim Arena Illinois", landCost: 650, ports: ["1"]},
        {value: "38615", text: "IL Manheim Chicago", landCost: 650, ports: ["1"]},
        {value: "38616", text: "IN Manheim Indianapolis", landCost: 560, ports: ["1"]},
        {value: "38617", text: "IN Manheim Louisville", landCost: 530, ports: ["3", "1"]},
        {value: "38618", text: "LA Manheim Lafayette", landCost: 370, ports: ["2"]},
        {value: "38619", text: "LA Manheim New Orleans", landCost: 360, ports: ["2"]},
        {value: "38667", text: "MA Manheim New England", landCost: 390, ports: ["1"]},
        {value: "40597", text: "MD 4805 Philadelphia Rd, Belcamp, MD", landCost: 330, ports: ["1"]},
        {value: "38666", text: "MD Manheim Baltimore-Washington", landCost: 330, ports: ["1"]},
        {value: "38620", text: "MI Manheim Detroit", landCost: 530, ports: ["1"]},
        {value: "38621", text: "MI Manheim Flint (tra)", landCost: 540, ports: ["1"]},
        {value: "38622", text: "MN Manheim Minneapolis", landCost: 660, ports: ["1"]},
        {value: "38623", text: "MN Manheim Northstar Minnesota", landCost: 670, ports: ["1"]},
        {value: "38624", text: "MO Manheim Kansas City", landCost: 590, ports: ["2"]},
        {value: "38625", text: "MO Manheim Springfield", landCost: 590, ports: ["2"]},
        {value: "38626", text: "MO Manheim St Louis", landCost: 590, ports: ["2"]},
        {value: "38627", text: "MS Manheim Mississippi", landCost: 490, ports: ["2", "3"]},
        {value: "38628", text: "NC Manheim Charlotte", landCost: 390, ports: ["3"]},
        {value: "38629", text: "NC Manheim North Carolina", landCost: 390, ports: ["3"]},
        {value: "38630", text: "NC Manheim Statesville", landCost: 390, ports: ["3"]},
        {value: "38631", text: "NE Manheim Omaha", landCost: 630, ports: ["2"]},
        {value: "38632", text: "NJ Manheim New Jersey", landCost: 330, ports: ["1"]},
        {value: "38633", text: "NJ Manheim Ny Metro Skyline", landCost: 340, ports: ["1"]},
        {value: "38634", text: "NM Manheim New Mexico", landCost: 560, ports: ["2"]},
        {value: "38635", text: "NV Manheim Nevada", landCost: 460, ports: ["5"]},
        {value: "38636", text: "NY Manheim Albany", landCost: 370, ports: ["1"]},
        {value: "38637", text: "NY Manheim New York", landCost: 340, ports: ["1"]},
        {value: "38638", text: "OH Manheim Cincinnati", landCost: 490, ports: ["1"]},
        {value: "38668", text: "OH Manheim Cleveland", landCost: 490, ports: ["1"]},
        {value: "38639", text: "OH Manheim Ohio", landCost: 480, ports: ["1"]},
        {value: "38640", text: "OK Manheim Tulsa", landCost: 560, ports: ["2"]},
        {value: "38641", text: "OR Manheim Portland", landCost: 410, ports: ["16"]},
        {value: "38642", text: "PA Manheim Keystone Pennsylvania", landCost: 330, ports: ["1"]},
        {value: "38643", text: "PA Manheim Pennsylvania", landCost: 320, ports: ["1"]},
        {value: "38644", text: "PA Manheim Philadelphia", landCost: 320, ports: ["1"]},
        {value: "38645", text: "PA Manheim Pittsburgh", landCost: 330, ports: ["1"]},
        {value: "38646", text: "SC Manheim Darlington", landCost: 410, ports: ["3"]},
        {value: "38647", text: "SC Manheim Greer", landCost: 400, ports: ["3"]},
        {value: "38648", text: "TN Manheim Nashville", landCost: 490, ports: ["3"]},
        {value: "38649", text: "TX Manheim Dallas", landCost: 210, ports: ["2"]},
        {value: "38650", text: "TX Manheim Dallas-Fort Worth", landCost: 210, ports: ["2"]},
        {value: "38651", text: "TX Manheim El Paso", landCost: 330, ports: ["2"]},
        {value: "38652", text: "TX Manheim Houston", landCost: 280, ports: ["2"]},
        {value: "38653", text: "TX Manheim San Antonio", landCost: 230, ports: ["2"]},
        {value: "38670", text: "TX Manheim South Houston", landCost: 290, ports: ["2"]},
        {value: "38654", text: "TX Manheim Texas Hobby", landCost: 280, ports: ["2"]},
        {value: "38655", text: "UT Manheim Utah", landCost: 590, ports: ["16"]},
        {value: "38656", text: "VA Manheim Fredericksburg", landCost: 360, ports: ["1"]},
        {value: "38657", text: "VA Manheim Harrisonburg", landCost: 370, ports: ["1"]},
        {value: "38658", text: "WA Manheim Seattle", landCost: 400, ports: ["16"]},
        {value: "38659", text: "WI Manheim Milwaukee", landCost: 620, ports: ["1"]},
        {value: "38660", text: "WV Manheim Casper (TRA)", landCost: 660, ports: ["2"]}
    ],
    
    3: [ // IAAI
        {value: "38186", text: "AL ADESA Birmingham (AL)", landCost: 460, ports: ["3"]},
        {value: "38672", text: "AL Huntsville", landCost: 470, ports: ["3"]},
        {value: "38673", text: "AL BIRMINGHAM", landCost: 460, ports: ["3"]},
        {value: "38674", text: "AL Dothan", landCost: 470, ports: ["3"]},
        {value: "38089", text: "AL Anchorage", landCost: 460, ports: ["3"]},
        {value: "38090", text: "AR FAYETTEVILLE", landCost: 550, ports: ["2"]},
        {value: "38675", text: "AR LITTLE ROCK", landCost: 530, ports: ["2"]},
        {value: "38676", text: "AZ PHOENIX", landCost: 480, ports: ["5"]},
        {value: "38677", text: "AZ TUCSON", landCost: 490, ports: ["5"]},
        {value: "38678", text: "CA Anaheim", landCost: 340, ports: ["5"]},
        {value: "38679", text: "CA East Bay", landCost: 350, ports: ["5"]},
        {value: "38121", text: "CA BURBANK", landCost: 340, ports: ["5"]},
        {value: "38200", text: "CA ACE - Carson (CA)", landCost: 330, ports: ["5"]},
        {value: "38680", text: "CA Colton", landCost: 340, ports: ["5"]},
        {value: "38681", text: "CA Fontana", landCost: 340, ports: ["5"]},
        {value: "38682", text: "CA Fremont", landCost: 350, ports: ["5"]},
        {value: "38683", text: "CA FRESNO", landCost: 380, ports: ["5"]},
        {value: "38684", text: "CA Los Angeles", landCost: 320, ports: ["5"]},
        {value: "38685", text: "CA High Desert", landCost: 360, ports: ["5"]},
        {value: "38686", text: "CA North Hollywood", landCost: 340, ports: ["5"]},
        {value: "42480", text: "CA North Hollywood", landCost: 340, ports: ["5"]},
        {value: "38199", text: "CA ACE - Perris", landCost: 350, ports: ["5"]},
        {value: "38687", text: "CA Sacramento", landCost: 350, ports: ["5"]},
        {value: "38688", text: "CA SAN DIEGO", landCost: 360, ports: ["5"]},
        {value: "43841", text: "CA Santa Clarita", landCost: 340, ports: ["5"]},
        {value: "43781", text: "CA Stockton", landCost: 360, ports: ["5"]},
        {value: "41200", text: "CA Los Angeles South", landCost: 330, ports: ["5"]},
        {value: "42690", text: "CO Colorado Springs", landCost: 640, ports: ["2"]},
        {value: "38689", text: "CO DENVER EAST", landCost: 640, ports: ["2"]},
        {value: "38690", text: "CO Western Colorado", landCost: 650, ports: ["2"]},
        {value: "38691", text: "CO DENVER", landCost: 640, ports: ["2"]},
        {value: "38692", text: "CT HARTFORD", landCost: 360, ports: ["1"]},
        {value: "38693", text: "CT Hartford-South", landCost: 360, ports: ["1"]},
        {value: "38694", text: "DE New Castle", landCost: 330, ports: ["1"]},
        {value: "38695", text: "FL Clearwater", landCost: 270, ports: ["4"]},
        {value: "41236", text: "FL Fort Myers", landCost: 280, ports: ["4"]},
        {value: "38696", text: "FL FT. PIERCE", landCost: 270, ports: ["4"]},
        {value: "38179", text: "FL Tampa North", landCost: 270, ports: ["4"]},
        {value: "38178", text: "FL Tampa North", landCost: 270, ports: ["4"]},
        {value: "38177", text: "FL Tampa North", landCost: 270, ports: ["4"]},
        {value: "38697", text: "FL JACKSONVILLE", landCost: 290, ports: ["4"]},
        {value: "42720", text: "FL West Palm Beach", landCost: 260, ports: ["4"]},
        {value: "38698", text: "FL Pensacola", landCost: 320, ports: ["4"]},
        {value: "38699", text: "FL Fort Myers", landCost: 280, ports: ["4"]},
        {value: "38700", text: "FL Miami", landCost: 260, ports: ["4"]},
        {value: "38701", text: "FL ORLANDO", landCost: 280, ports: ["4"]},
        {value: "38702", text: "FL Tampa", landCost: 270, ports: ["4"]},
        {value: "38703", text: "FL MIAMI NORTH", landCost: 260, ports: ["4"]},
        {value: "38704", text: "FL Orlando-North", landCost: 280, ports: ["4"]},
        {value: "40714", text: "FL Miami-North (FL)", landCost: 260, ports: ["4"]},
        {value: "38705", text: "GA ATLANTA NORTH", landCost: 380, ports: ["3"]},
        {value: "38706", text: "GA ATLANTA SOUTH", landCost: 380, ports: ["3"]},
        {value: "38707", text: "GA ATLANTA EAST", landCost: 380, ports: ["3"]},
        {value: "38091", text: "GA MACON", landCost: 410, ports: ["3"]},
        {value: "38120", text: "GA MACON", landCost: 410, ports: ["3"]},
        {value: "38708", text: "GA SAVANNAH", landCost: 330, ports: ["3"]},
        {value: "38709", text: "GA TIFTON", landCost: 430, ports: ["3"]},
        {value: "38710", text: "GA Atlanta East", landCost: 380, ports: ["3"]},
        {value: "38374", text: "HI Honolulu/91-445A Komohana Street", landCost: 900, ports: ["5"]},
        {value: "38711", text: "HI HONOLULU", landCost: 900, ports: ["5"]},
        {value: "38093", text: "IA Davenport", landCost: 610, ports: ["1"]},
        {value: "38176", text: "IA Des Moines", landCost: 590, ports: ["1"]},
        {value: "38712", text: "IA DES MOINES", landCost: 590, ports: ["1"]},
        {value: "38713", text: "ID BOISE", landCost: 660, ports: ["16"]},
        {value: "38180", text: "ID Boise", landCost: 660, ports: ["16"]},
        {value: "38714", text: "IL CHICAGO WEST", landCost: 640, ports: ["1"]},
        {value: "40921", text: "IL St. Louis", landCost: 590, ports: ["1"]},
        {value: "38716", text: "IL CHICAGO NORTH", landCost: 640, ports: ["1"]},
        {value: "38717", text: "IL St. Louis", landCost: 590, ports: ["1"]},
        {value: "38718", text: "IL LINCOLN", landCost: 630, ports: ["1"]},
        {value: "38715", text: "IL CHICAGO SOUTH", landCost: 640, ports: ["1"]},
        {value: "38092", text: "IL Specialty Division", landCost: 640, ports: ["1"]},
        {value: "42890", text: "IN Indianapolis South (IN)", landCost: 560, ports: ["1"]},
        {value: "43440", text: "IN Fort Wayne", landCost: 560, ports: ["1"]},
        {value: "38719", text: "IN INDIANAPOLIS", landCost: 560, ports: ["1"]},
        {value: "38720", text: "IN South Bend", landCost: 570, ports: ["1"]},
        {value: "38721", text: "KS KANSAS CITY", landCost: 590, ports: ["2"]},
        {value: "38722", text: "KS WICHITA", landCost: 590, ports: ["2"]},
        {value: "38393", text: "KS Wichita", landCost: 590, ports: ["2"]},
        {value: "38094", text: "KY Ashland, KY", landCost: 530, ports: ["3", "1"]},
        {value: "38095", text: "KY Bowling Green, KY", landCost: 530, ports: ["3", "1"]},
        {value: "38723", text: "KY LOUISVILLE NORTH", landCost: 530, ports: ["3", "1"]},
        {value: "38096", text: "KY Paducah, KY", landCost: 530, ports: ["3", "1"]},
        {value: "38724", text: "KY Louisville", landCost: 530, ports: ["3", "1"]},
        {value: "40804", text: "LA Baton Rouge (LA)", landCost: 360, ports: ["2"]},
        {value: "38727", text: "LA NEW ORLEANS", landCost: 360, ports: ["2"]},
        {value: "38728", text: "LA Shreveport", landCost: 410, ports: ["2"]},
        {value: "38725", text: "LA Lafayette", landCost: 370, ports: ["2"]},
        {value: "38726", text: "LA BATON ROUGE", landCost: 360, ports: ["2"]},
        {value: "38097", text: "LA NEW ORLEANS EAST", landCost: 360, ports: ["2"]},
        {value: "38116", text: "LA NORTH SCOTT", landCost: 370, ports: ["2"]},
        {value: "38729", text: "MA Taunton", landCost: 390, ports: ["1"]},
        {value: "38730", text: "MA Boston - Shirley", landCost: 390, ports: ["1"]},
        {value: "38205", text: "MA Templeton (MA)", landCost: 390, ports: ["1"]},
        {value: "38731", text: "MD BALTIMORE", landCost: 330, ports: ["1"]},
        {value: "38732", text: "MD Metro DC", landCost: 330, ports: ["1"]},
        {value: "38099", text: "MD Dundalk", landCost: 330, ports: ["1"]},
        {value: "43210", text: "MD Elkton", landCost: 330, ports: ["1"]},
        {value: "38733", text: "MD Laurel", landCost: 330, ports: ["1"]},
        {value: "38100", text: "MD Rosedale", landCost: 330, ports: ["1"]},
        {value: "38118", text: "MD WHITE PLAINS", landCost: 330, ports: ["1"]},
        {value: "38098", text: "ME Portland - Gorham", landCost: 430, ports: ["1"]},
        {value: "38101", text: "MI Great Lakes", landCost: 540, ports: ["1"]},
        {value: "38734", text: "MI DETROIT", landCost: 530, ports: ["1"]},
        {value: "38735", text: "MI Grand Rapids", landCost: 550, ports: ["1"]},
        {value: "38115", text: "MI DETROIT", landCost: 530, ports: ["1"]},
        {value: "38183", text: "MI Flint", landCost: 530, ports: ["1"]},
        {value: "43200", text: "MN Minneapolis South", landCost: 660, ports: ["1"]},
        {value: "38736", text: "MN Minneapolis", landCost: 660, ports: ["1"]},
        {value: "41155", text: "MO Kansas City East", landCost: 590, ports: ["2"]},
        {value: "38088", text: "MO Springfield", landCost: 590, ports: ["2"]},
        {value: "38119", text: "MS BYRAM", landCost: 490, ports: ["2", "3"]},
        {value: "38737", text: "MS Grenada", landCost: 490, ports: ["2", "3"]},
        {value: "38738", text: "MS Jackson", landCost: 490, ports: ["2", "3"]},
        {value: "38739", text: "MS Gulf Coast", landCost: 480, ports: ["2", "3"]},
        {value: "38740", text: "MT BILLINGS", landCost: 760, ports: ["16"]},
        {value: "38741", text: "MT Missoula", landCost: 770, ports: ["16"]},
        {value: "38742", text: "NC Wilmington", landCost: 400, ports: ["3"]},
        {value: "38743", text: "NC Charlotte", landCost: 390, ports: ["3"]},
        {value: "38744", text: "NC Raleigh", landCost: 390, ports: ["3"]},
        {value: "38745", text: "NC Concord", landCost: 390, ports: ["3"]},
        {value: "38746", text: "NC Asheville", landCost: 430, ports: ["3"]},
        {value: "38102", text: "NC Greensboro", landCost: 390, ports: ["3"]},
        {value: "43331", text: "NC High Point", landCost: 390, ports: ["3"]},
        {value: "38747", text: "ND FARGO", landCost: 730, ports: ["1"]},
        {value: "38748", text: "NE Omaha", landCost: 630, ports: ["2"]},
        {value: "38749", text: "NH Manchester", landCost: 390, ports: ["1"]},
        {value: "38671", text: "NJ Avenel New Jersey", landCost: 330, ports: ["1"]},
        {value: "38750", text: "NJ Northern New Jersey", landCost: 330, ports: ["1"]},
        {value: "38914", text: "NJ Englishtown", landCost: 330, ports: ["1"]},
        {value: "38751", text: "NJ Central New Jersey", landCost: 330, ports: ["1"]},
        {value: "42821", text: "NJ Port Murray", landCost: 330, ports: ["1"]},
        {value: "41299", text: "NJ Sayreville", landCost: 330, ports: ["1"]},
        {value: "38752", text: "NJ Southern New Jersey", landCost: 330, ports: ["1"]},
        {value: "38753", text: "NM ALBUQUERQUE", landCost: 560, ports: ["2"]},
        {value: "38754", text: "NV LAS VEGAS", landCost: 460, ports: ["5"]},
        {value: "38755", text: "NV RENO", landCost: 480, ports: ["5"]},
        {value: "42850", text: "NV Reno", landCost: 480, ports: ["5"]},
        {value: "38085", text: "NY Rochester", landCost: 380, ports: ["1"]},
        {value: "38756", text: "NY Buffalo", landCost: 380, ports: ["1"]},
        {value: "38757", text: "NY Syracuse", landCost: 380, ports: ["1"]},
        {value: "38758", text: "NY Long Island", landCost: 330, ports: ["1"]},
        {value: "38759", text: "NY ROCHESTER", landCost: 380, ports: ["1"]},
        {value: "38031", text: "NY Newburgh", landCost: 340, ports: ["1"]},
        {value: "38032", text: "NY Albany", landCost: 360, ports: ["1"]},
        {value: "38103", text: "OH Cincinnati-South", landCost: 490, ports: ["1"]},
        {value: "38117", text: "OH COLUMBUS", landCost: 480, ports: ["1"]},
        {value: "38038", text: "OH Dayton", landCost: 480, ports: ["1"]},
        {value: "38039", text: "OH Columbus", landCost: 480, ports: ["1"]},
        {value: "38037", text: "OH CLEVELAND", landCost: 480, ports: ["1"]},
        {value: "38040", text: "OH Akron-Canton", landCost: 480, ports: ["1"]},
        {value: "38041", text: "OH Cincinnati", landCost: 490, ports: ["1"]},
        {value: "38042", text: "OK OKLAHOMA CITY", landCost: 560, ports: ["2"]},
        {value: "38043", text: "OK TULSA", landCost: 560, ports: ["2"]},
        {value: "38044", text: "OR EUGENE", landCost: 430, ports: ["16"]},
        {value: "38045", text: "OR Portland", landCost: 410, ports: ["16"]},
        {value: "38104", text: "OR Portland West", landCost: 410, ports: ["16"]},
        {value: "43650", text: "OR Portland South", landCost: 410, ports: ["16"]},
        {value: "38046", text: "PA Pittsburgh", landCost: 330, ports: ["1"]},
        {value: "38047", text: "PA Bridgeport", landCost: 320, ports: ["1"]},
        {value: "38048", text: "PA Philadelphia", landCost: 310, ports: ["1"]},
        {value: "38049", text: "PA ALTOONA", landCost: 330, ports: ["1"]},
        {value: "38105", text: "PA Erie", landCost: 340, ports: ["1"]},
        {value: "38050", text: "PA PITTSBURGH NORTH", landCost: 330, ports: ["1"]},
        {value: "38196", text: "PA Philadelphia East (PA)", landCost: 320, ports: ["1"]},
        {value: "38195", text: "PA Philadelphia East (PA)", landCost: 320, ports: ["1"]},
        {value: "38051", text: "PA Scranton", landCost: 340, ports: ["1"]},
        {value: "38106", text: "PA York Springs", landCost: 330, ports: ["1"]},
        {value: "38086", text: "RI East Providence", landCost: 380, ports: ["1"]},
        {value: "38052", text: "SC COLUMBIA", landCost: 410, ports: ["3"]},
        {value: "38194", text: "SC Lexington", landCost: 410, ports: ["3"]},
        {value: "38193", text: "SC Lexington", landCost: 410, ports: ["3"]},
        {value: "38053", text: "SC Charleston", landCost: 400, ports: ["3"]},
        {value: "38107", text: "SC Greenville", landCost: 400, ports: ["3"]},
        {value: "40993", text: "SD Sioux Falls", landCost: 680, ports: ["2"]},
        {value: "38054", text: "SD Sioux Falls", landCost: 680, ports: ["2"]},
        {value: "38055", text: "TN Chattanooga", landCost: 490, ports: ["3"]},
        {value: "38056", text: "TN KNOXVILLE", landCost: 490, ports: ["3"]},
        {value: "38057", text: "TN Memphis", landCost: 490, ports: ["3"]},
        {value: "38058", text: "TN NASHVILLE", landCost: 490, ports: ["3"]},
        {value: "40858", text: "TX Abilene", landCost: 260, ports: ["2"]},
        {value: "38060", text: "TX AMARILLO", landCost: 290, ports: ["2"]},
        {value: "38061", text: "TX CORPUS CHRISTI", landCost: 230, ports: ["2"]},
        {value: "38062", text: "TX Austin", landCost: 220, ports: ["2"]},
        {value: "38068", text: "TX MCALLEN", landCost: 260, ports: ["2"]},
        {value: "38063", text: "TX EL PASO", landCost: 330, ports: ["2"]},
        {value: "43730", text: "TX Austin North", landCost: 220, ports: ["2"]},
        {value: "38064", text: "TX Dallas/Ft. Worth", landCost: 210, ports: ["2"]},
        {value: "38059", text: "TX ABILENE", landCost: 260, ports: ["2"]},
        {value: "38065", text: "TX HOUSTON", landCost: 230, ports: ["2"]},
        {value: "38108", text: "TX Houston-North", landCost: 240, ports: ["2"]},
        {value: "38114", text: "TX Fort Worth North", landCost: 210, ports: ["2"]},
        {value: "38066", text: "TX LONGVIEW", landCost: 230, ports: ["2"]},
        {value: "38067", text: "TX Lubbock", landCost: 270, ports: ["2"]},
        {value: "38109", text: "TX Permian Basin", landCost: 280, ports: ["2"]},
        {value: "38197", text: "TX Houston South (TX)", landCost: 240, ports: ["2"]},
        {value: "38122", text: "TX San Antonio", landCost: 230, ports: ["2"]},
        {value: "38069", text: "TX San Antonio-South", landCost: 240, ports: ["2"]},
        {value: "38112", text: "TX San Antonio", landCost: 230, ports: ["2"]},
        {value: "38070", text: "TX Dallas", landCost: 210, ports: ["2"]},
        {value: "43760", text: "UT Provo", landCost: 590, ports: ["16"]},
        {value: "38071", text: "UT Salt Lake City", landCost: 590, ports: ["16"]},
        {value: "38072", text: "VA RICHMOND", landCost: 360, ports: ["1"]},
        {value: "38073", text: "VA Culpeper", landCost: 360, ports: ["1"]},
        {value: "41002", text: "VA Fredericksburg-South", landCost: 360, ports: ["1"]},
        {value: "38074", text: "VA Northern Virginia", landCost: 350, ports: ["1"]},
        {value: "38390", text: "VA Roanoke", landCost: 370, ports: ["1"]},
        {value: "38075", text: "VA Pulaski", landCost: 370, ports: ["1"]},
        {value: "38087", text: "VA Suffolk", landCost: 350, ports: ["1"]},
        {value: "38076", text: "VA Tidewater", landCost: 350, ports: ["1"]},
        {value: "38077", text: "VT Burlington", landCost: 400, ports: ["1"]},
        {value: "38851", text: "WA Seattle (WA)", landCost: 390, ports: ["16"]},
        {value: "38078", text: "WA Spokane", landCost: 430, ports: ["16"]},
        {value: "38110", text: "WA Seattle South", landCost: 390, ports: ["16"]},
        {value: "38079", text: "WA Seattle", landCost: 390, ports: ["16"]},
        {value: "38080", text: "WI Appleton", landCost: 620, ports: ["1"]},
        {value: "38081", text: "WI Portage", landCost: 620, ports: ["1"]},
        {value: "38082", text: "WI Milwaukee", landCost: 620, ports: ["1"]},
        {value: "38083", text: "WV Buckhannon", landCost: 390, ports: ["1"]},
        {value: "38113", text: "WV Casper", landCost: 660, ports: ["2"]},
        {value: "38084", text: "WV Shady Spring", landCost: 390, ports: ["1"]},
        {value: "38111", text: "WY Casper", landCost: 660, ports: ["2"]}
    ],
    
    32: [ // Canada
        {value: "38377", text: "AB CALGARY", landCost: 1880, ports: ["6"]},
        {value: "38378", text: "AB EDMONTON", landCost: 1920, ports: ["6"]},
        {value: "44200", text: "BC ICBC - Abbotsford", landCost: 2500, ports: ["6"]},
        {value: "44220", text: "BC ICBC Nanaimo", landCost: 2600, ports: ["6"]},
        {value: "44240", text: "BC ICBC Penticton Towing", landCost: 2650, ports: ["6"]},
        {value: "44210", text: "BC ICBC Vernon", landCost: 2550, ports: ["6"]},
        {value: "44230", text: "BC ICBC Victoria", landCost: 2600, ports: ["6"]},
        {value: "44190", text: "BC ICBC-QUEENSBOROUGH", landCost: 2480, ports: ["6"]},
        {value: "44170", text: "BC Vancouver", landCost: 2480, ports: ["6"]},
        {value: "44090", text: "MB MPI-Blumenort", landCost: 1680, ports: ["6"]},
        {value: "44060", text: "MB MPI-Brandon", landCost: 1720, ports: ["6"]},
        {value: "44070", text: "MB MPI-Portage la Prairie", landCost: 1670, ports: ["6"]},
        {value: "44080", text: "MB MPI-Trehernre", landCost: 1690, ports: ["6"]},
        {value: "44050", text: "MB MPI-Winnipeg", landCost: 1650, ports: ["6"]},
        {value: "38384", text: "NB MONCTON", landCost: 920, ports: ["6"]},
        {value: "44160", text: "NF St-Johns", landCost: 1100, ports: ["6"]},
        {value: "38379", text: "NS HALIFAX", landCost: 950, ports: ["6"]},
        {value: "44250", text: "ON COOKSTOWN", landCost: 800, ports: ["6"]},
        {value: "43990", text: "ON Hamilton/Stoney Creek", landCost: 790, ports: ["6"]},
        {value: "43970", text: "ON Innisfil", landCost: 800, ports: ["6"]},
        {value: "44030", text: "ON Kenora", landCost: 1200, ports: ["6"]},
        {value: "38383", text: "ON LONDON", landCost: 820, ports: ["6"]},
        {value: "43960", text: "ON N. Toronto Tottenham", landCost: 780, ports: ["6"]},
        {value: "43700", text: "ON Toronto (Ontario)", landCost: 780, ports: ["6"]},
        {value: "43950", text: "ON Ottawa/Witchester", landCost: 800, ports: ["6"]},
        {value: "43980", text: "ON Stoufvile", landCost: 780, ports: ["6"]},
        {value: "44011", text: "ON Sudbury", landCost: 900, ports: ["6"]},
        {value: "44040", text: "ON Thunder Bay", landCost: 1100, ports: ["6"]},
        {value: "38382", text: "ON TORONTO", landCost: 780, ports: ["6"]},
        {value: "43930", text: "QC Chicoutimi", landCost: 900, ports: ["6"]},
        {value: "43890", text: "QC Kenny U-Pull la Prairie", landCost: 850, ports: ["6"]},
        {value: "43870", text: "QC Mascouche", landCost: 830, ports: ["6"]},
        {value: "38381", text: "QC MONTREAL", landCost: 820, ports: ["6"]},
        {value: "43940", text: "QC Quebec City", landCost: 860, ports: ["6"]},
        {value: "43920", text: "QC St-Hubert-Riviere-du-Loup", landCost: 880, ports: ["6"]},
        {value: "43880", text: "QC St-Jean-sur-Richileu", landCost: 840, ports: ["6"]},
        {value: "43910", text: "QC St-Philibert", landCost: 870, ports: ["6"]},
        {value: "43900", text: "QC Val d'Or", landCost: 950, ports: ["6"]},
        {value: "44120", text: "SK Moose Jaw", landCost: 1800, ports: ["6"]},
        {value: "44140", text: "SK North Battleford", landCost: 1850, ports: ["6"]},
        {value: "44130", text: "SK Prince Albert", landCost: 1820, ports: ["6"]},
        {value: "44110", text: "SK Regina", landCost: 1780, ports: ["6"]},
        {value: "44100", text: "SK Saskatoon", landCost: 1750, ports: ["6"]},
        {value: "44150", text: "SK Yorkton", landCost: 1800, ports: ["6"]}
    ],
    
    30: [ // SUBLOT COPART (не работают)
        {value: "38571", text: "AL BIRMINGHAM AL SUBLOT", landCost: 0, ports: []},
        {value: "38574", text: "CA SACRAMENTO CA SUBLOT", landCost: 0, ports: []},
        {value: "38573", text: "CA LANCASTER CA SUBLOT", landCost: 0, ports: []},
        {value: "38576", text: "CA SANTA PAULA CA SUBLOT", landCost: 0, ports: []},
        {value: "38553", text: "CA Sun Valley SUBLOT", landCost: 0, ports: []},
        {value: "38562", text: "CO COLORADO SPRINGS CO SUBLOT", landCost: 0, ports: []},
        {value: "38579", text: "CO COLORADO SPRINGS CO SUBLOT", landCost: 0, ports: []},
        {value: "38572", text: "CT BERLIN CT SUBLOT", landCost: 0, ports: []},
        {value: "38567", text: "GA METTER GA SUBLOT", landCost: 0, ports: []},
        {value: "38569", text: "IL LOUIS IL SUBLOT", landCost: 0, ports: []},
        {value: "38561", text: "LA TICKFAW LA SUBLOT", landCost: 0, ports: []},
        {value: "38556", text: "MD BALTIMORE MD SUBLOT", landCost: 0, ports: []},
        {value: "38555", text: "MD WHITE MARSH SUBLOT", landCost: 0, ports: []},
        {value: "38570", text: "ME GRAY ME SUBLOT", landCost: 0, ports: []},
        {value: "38578", text: "ME ORONO ME SUBLOT", landCost: 0, ports: []},
        {value: "38566", text: "MN HAM LAKE MN SUBLOT", landCost: 0, ports: []},
        {value: "38583", text: "MO SPRINGFIELD MO SUBLOT", landCost: 0, ports: []},
        {value: "38557", text: "NC LUMBERTON NC SUBLOT", landCost: 0, ports: []},
        {value: "38558", text: "NC LUMBERTON NC SUBLOT", landCost: 0, ports: []},
        {value: "38568", text: "NY BROCTON NY SUBLOT", landCost: 0, ports: []},
        {value: "38544", text: "PA PHILADELPHIA EAST-SUBLOT", landCost: 0, ports: []},
        {value: "38565", text: "SC Gaston, SC SUBLOT", landCost: 0, ports: []},
        {value: "38554", text: "SC SPARTANBURG SUBLOT", landCost: 0, ports: []},
        {value: "38577", text: "TX HASLET TX SUBLOT", landCost: 0, ports: []},
        {value: "38559", text: "TX ORMY TX SUBLOT", landCost: 0, ports: []},
        {value: "38560", text: "TX ANTHONY TX SUBLOT", landCost: 0, ports: []},
        {value: "38582", text: "TX WILMER TX SUBLOT", landCost: 0, ports: []},
        {value: "38564", text: "UT OGDEN SUBLOT", landCost: 0, ports: []},
        {value: "38580", text: "VT ORLEANS VT SUBLOT", landCost: 0, ports: []},
        {value: "38581", text: "WI WAUKESHA WI SUBLOT", landCost: 0, ports: []}
    ],
    31: [ // SUBLOT IAAI (не работают)  
        {value: "38577", text: "TX HASLET TX SUBLOT", landCost: 0, ports: []},
        {value: "38562", text: "CO COLORADO SPRINGS CO SUBLOT", landCost: 0, ports: []},
        {value: "38579", text: "CO COLORADO SPRINGS CO SUBLOT", landCost: 0, ports: []},
        {value: "38572", text: "CT BERLIN CT SUBLOT", landCost: 0, ports: []}
    ]
    // ВАЖНО: БЕЗ запятой после последнего аукциона!
};
// ВАЖНО: Только ОДНО закрытие объекта!

// Данные портов
const portData = {
// Данные портов остаются те же
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
console.log('📍 Locations count:');
Object.keys(locationData).forEach(key => {
    console.log(`  - Auction ${key}: ${locationData[key].length} locations`);
});

// Делаем переменные глобально доступными
window.locationData = locationData;
window.portData = portData;
window.oceanPrices = oceanPrices;

console.log('🎉 All data ready!');

} catch (error) {
    console.error('❌ SYNTAX ERROR in data.js:', error);
    alert('Ошибка синтаксиса в data.js: ' + error.message);
}

// Конец файла
