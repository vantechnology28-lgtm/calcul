
// Проверяем загрузку данных
console.log('🔧 Loading data.js...');

// ВАЖНО: Проверяем синтаксис
try {
    
// Данные локаций
const locationData = {
    "1": [
        // Alabama
        {value: "38297", text: "AL MOBILE", landCost: 440, ports: ["3"]},
        {value: "38298", text: "AL BIRMINGHAM", landCost: 455, ports: ["3"]},
        {value: "38299", text: "AL Montgomery", landCost: 455, ports: ["3"]},
        {value: "40759", text: "AL AL - DOTHAN", landCost: 420, ports: ["3"]},
        {value: "38300", text: "AL TANNER", landCost: 455, ports: ["3"]},
        {value: "42394", text: "AL MOBILE SOUTH", landCost: 430, ports: ["3"]},
        {value: "38571", text: "AL BIRMINGHAM AL SUBLOT", landCost: 455, ports: ["3"]},
        
        // Arkansas  
        {value: "38301", text: "AR LITTLE ROCK", landCost: 465, ports: ["2"]},
        {value: "38302", text: "AR FAYETTEVILLE", landCost: 495, ports: ["2"]},
        
        // Arizona
        {value: "38303", text: "AZ PHOENIX", landCost: 470, ports: ["5"]},
        {value: "43710", text: "AZ AZ - PHOENIX NORTH", landCost: 470, ports: ["5"]},
        {value: "38304", text: "AZ TUCSON", landCost: 530, ports: ["5"]},
        
        // California
        {value: "41272", text: "CA ADELANTO", landCost: 290, ports: ["5"]},
        {value: "44310", text: "CA NAPA", landCost: 550, ports: ["5"]},
        {value: "38924", text: "CA CA - REDDING", landCost: 615, ports: ["5"]},
        {value: "38181", text: "CA ANTELOPE", landCost: 505, ports: ["5"]},
        {value: "38305", text: "CA BAKERSFIELD", landCost: 355, ports: ["5"]},
        {value: "38306", text: "CA SAN BERNARDINO", landCost: 300, ports: ["5"]},
        {value: "38307", text: "CA FRESNO", landCost: 430, ports: ["5"]},
        {value: "38574", text: "CA SACRAMENTO CA SUBLOT", landCost: 565, ports: ["5"]},
        {value: "38308", text: "CA HAYWARD", landCost: 480, ports: ["5"]},
        {value: "38573", text: "CA LANCASTER CA SUBLOT", landCost: 430, ports: ["5"]},
        {value: "38309", text: "CA LOS ANGELES", landCost: 330, ports: ["5"]},
        {value: "38310", text: "CA MARTINEZ", landCost: 455, ports: ["5"]},
        {value: "43270", text: "CA MENTONE", landCost: 330, ports: ["5"]},
        {value: "38311", text: "CA RANCHO CUCAMONGA", landCost: 340, ports: ["5"]},
        {value: "38312", text: "CA SACRAMENTO", landCost: 480, ports: ["5"]},
        {value: "38313", text: "CA SAN DIEGO", landCost: 420, ports: ["5"]},
        {value: "38314", text: "CA San Jose", landCost: 455, ports: ["5"]},
        {value: "38576", text: "CA SANTA PAULA CA SUBLOT", landCost: 390, ports: ["5"]},
        {value: "38553", text: "CA Sun Valley SUBLOT", landCost: 280, ports: ["5"]},
        {value: "38315", text: "CA VALLEJO", landCost: 455, ports: ["5"]},
        {value: "38316", text: "CA VAN NUYS", landCost: 330, ports: ["5"]},
        {value: "38575", text: "CA Long Beach", landCost: 280, ports: ["5"]},
        
        // Colorado
        {value: "38317", text: "CO DENVER", landCost: 680, ports: ["2"]},
        {value: "38562", text: "CO COLORADO SPRINGS CO SUBLOT", landCost: 680, ports: ["2"]},
        {value: "38532", text: "CO COLORADO SPRINGS", landCost: 670, ports: ["2"]},
        {value: "38588", text: "CO Denver Central", landCost: 680, ports: ["2"]},
        {value: "38585", text: "CO FORT LUPTON", landCost: 790, ports: ["2"]},
        {value: "38584", text: "CO CO - DENVER SOUTH", landCost: 680, ports: ["2"]},
        {value: "38579", text: "CO COLORADO SPRINGS CO SUBLOT", landCost: 680, ports: ["2"]},
        
        // Connecticut
        {value: "38198", text: "CT CT - HARTFORD SPRINGFIELD", landCost: 405, ports: ["1"]},
        {value: "38572", text: "CT BERLIN CT SUBLOT", landCost: 405, ports: ["1"]},
        {value: "38318", text: "CT HARTFORD", landCost: 330, ports: ["1"]},
        
        // Delaware
        {value: "38319", text: "DE SEAFORD", landCost: 405, ports: ["1"]},
        
        // Florida
        {value: "38550", text: "FL ORLANDO NORTH", landCost: 380, ports: ["4"]},
        {value: "42910", text: "FL FL - PUNTA GORDA SOUTH", landCost: 630, ports: ["4"]},
        {value: "38320", text: "FL FT. PIERCE", landCost: 380, ports: ["4"]},
        {value: "38321", text: "FL MIAMI SOUTH", landCost: 480, ports: ["4"]},
        {value: "38322", text: "FL JACKSONVILLE EAST", landCost: 230, ports: ["4"]},
        {value: "43230", text: "FL JACKSONVILLE NORTH", landCost: 280, ports: ["4"]},
        {value: "38533", text: "FL JACKSONVILLE WEST", landCost: 230, ports: ["4"]},
        {value: "38534", text: "FL MIAMI CENTRAL", landCost: 480, ports: ["4"]},
        {value: "38326", text: "FL MIAMI NORTH", landCost: 480, ports: ["4"]},
        {value: "38323", text: "FL TALLAHASSEE", landCost: 680, ports: ["4"]},
        {value: "38324", text: "FL OCALA", landCost: 480, ports: ["4"]},
        {value: "38325", text: "FL ORLANDO SOUTH", landCost: 480, ports: ["4"]},
        {value: "38327", text: "FL PUNTA GORDA", landCost: 580, ports: ["4"]},
        {value: "38328", text: "FL TAMPA SOUTH", landCost: 480, ports: ["4"]},
        {value: "38329", text: "FL WEST PALM BEACH", landCost: 480, ports: ["4"]},
        
        // Georgia
        {value: "42880", text: "GA GA - AUGUSTA", landCost: 380, ports: ["3"]},
        {value: "38330", text: "GA ATLANTA WEST", landCost: 380, ports: ["3"]},
        {value: "38190", text: "GA GA - MACON", landCost: 460, ports: ["3"]},
        {value: "38189", text: "GA GA - MACON", landCost: 460, ports: ["3"]},
        {value: "38535", text: "GA CARTERSVILLE", landCost: 360, ports: ["3"]},
        {value: "38191", text: "GA EAST POINT", landCost: 330, ports: ["3"]},
        {value: "38192", text: "GA GA - CRASHEDTOYS ATLANTA", landCost: 330, ports: ["3"]},
        {value: "38331", text: "GA ATLANTA SOUTH", landCost: 520, ports: ["3"]},
        {value: "41317", text: "GA FAIRBURN", landCost: 470, ports: ["3"]},
        {value: "38332", text: "GA ATLANTA NORTH", landCost: 330, ports: ["3"]},
        {value: "38333", text: "GA ATLANTA EAST", landCost: 380, ports: ["3"]},
        {value: "38334", text: "GA SAVANNAH", landCost: 320, ports: ["3"]},
        {value: "38335", text: "GA TIFTON", landCost: 400, ports: ["3"]},
        {value: "38567", text: "GA METTER GA SUBLOT", landCost: 330, ports: ["3"]},
        
        // Hawaii
        {value: "38375", text: "HI HONOLULU", landCost: 2560, ports: ["5"]},
        {value: "38336", text: "HI HONOLULU", landCost: 2560, ports: ["5"]},
        
        // Iowa
        {value: "38337", text: "IA DES MOINES", landCost: 680, ports: ["1"]},
        {value: "38538", text: "IA DAVENPORT", landCost: 680, ports: ["1"]},
        {value: "38537", text: "IA CRASHEDTOYS ELDRIDGE", landCost: 680, ports: ["1"]},
        
        // Idaho
        {value: "38338", text: "ID BOISE", landCost: 830, ports: ["16"]},
        
        // Illinois
        {value: "38551", text: "IL Southern Illinois", landCost: 630, ports: ["1"]},
        {value: "38563", text: "IL ALORTON", landCost: 630, ports: ["1"]},
        {value: "42900", text: "IL Southern Illinois", landCost: 0, ports: ["1"]},
        {value: "42870", text: "IL SOUTHERN ILLINOIS", landCost: 630, ports: ["1"]},
        {value: "38339", text: "IL CHICAGO SOUTH", landCost: 630, ports: ["1"]},
        {value: "38340", text: "IL CHICAGO NORTH", landCost: 580, ports: ["1"]},
        {value: "38341", text: "IL PEORIA", landCost: 610, ports: ["1"]},
        {value: "38569", text: "IL LOUIS IL SUBLOT", landCost: 680, ports: ["1"]},
        {value: "38342", text: "IL WHEELING", landCost: 530, ports: ["1"]},
        
        // Indiana
        {value: "40903", text: "IN CICERO", landCost: 680, ports: ["1"]},
        {value: "41308", text: "IN DYER", landCost: 630, ports: ["1"]},
        {value: "40625", text: "IN FORT WAYNE", landCost: 580, ports: ["1"]},
        {value: "38536", text: "IN HAMMOND", landCost: 555, ports: ["1"]},
        {value: "38343", text: "IN HARTFORD CITY", landCost: 605, ports: ["1"]},
        {value: "38344", text: "IN INDIANAPOLIS", landCost: 605, ports: ["1"]},
        
        // Kansas
        {value: "38345", text: "KS KANSAS CITY", landCost: 580, ports: ["2"]},
        {value: "38346", text: "KS WICHITA", landCost: 550, ports: ["2"]},
        
        // Kentucky
        {value: "42570", text: "KY EARLINGTON", landCost: 770, ports: ["3"]},
        {value: "38539", text: "KY LEXINGTON WEST", landCost: 630, ports: ["3", "1"]},
        {value: "38396", text: "KY LEXINGTON EAST", landCost: 730, ports: ["3", "1"]},
        {value: "38397", text: "KY LOUISVILLE", landCost: 770, ports: ["3", "1"]},
        {value: "38398", text: "KY WALTON", landCost: 730, ports: ["3", "1"]},
        
        // Louisiana
        {value: "38561", text: "LA TICKFAW LA SUBLOT", landCost: 530, ports: ["2"]},
        {value: "38399", text: "LA BATON ROUGE", landCost: 430, ports: ["2"]},
        {value: "38400", text: "LA NEW ORLEANS", landCost: 370, ports: ["2"]},
        {value: "38401", text: "LA SHREVEPORT", landCost: 350, ports: ["2"]},
        
        // Massachusetts
        {value: "42600", text: "MA MA - FREETOWN", landCost: 480, ports: ["1"]},
        {value: "38402", text: "MA SOUTH BOSTON", landCost: 380, ports: ["1"]},
        {value: "38403", text: "MA NORTH BOSTON", landCost: 380, ports: ["1"]},
        {value: "38404", text: "MA WEST WARREN", landCost: 380, ports: ["1"]},
        
        // Maryland
        {value: "40732", text: "MD BALTIMORE EAST", landCost: 405, ports: ["1"]},
        {value: "38407", text: "MD BALTIMORE", landCost: 355, ports: ["1"]},
        {value: "38556", text: "MD BALTIMORE MD SUBLOT", landCost: 405, ports: ["1"]},
        {value: "38408", text: "MD WASHINGTON DC", landCost: 355, ports: ["1"]},
        {value: "38555", text: "MD WHITE MARSH SUBLOT", landCost: 405, ports: ["1"]},
        
        // Maine
        {value: "38570", text: "ME GRAY ME SUBLOT", landCost: 530, ports: ["1"]},
        {value: "38409", text: "ME LYMAN", landCost: 530, ports: ["1"]},
        {value: "38578", text: "ME ORONO ME SUBLOT", landCost: 630, ports: ["1"]},
        {value: "43411", text: "ME WINDHAM", landCost: 630, ports: ["1"]},
        
        // Michigan
        {value: "38410", text: "MI FLINT", landCost: 630, ports: ["1"]},
        {value: "38411", text: "MI KINCHELOE", landCost: 1005, ports: ["1"]},
        {value: "38412", text: "MI LANSING", landCost: 630, ports: ["1"]},
        {value: "38413", text: "MI IONIA", landCost: 680, ports: ["1"]},
        {value: "38414", text: "MI DETROIT", landCost: 630, ports: ["1"]},
        
        // Minnesota
        {value: "38415", text: "MN ST. CLOUD", landCost: 655, ports: ["1"]},
        {value: "38416", text: "MN MINNEAPOLIS", landCost: 670, ports: ["1"]},
        {value: "38175", text: "MN CRASHEDTOYS MINNEAPOLIS", landCost: 670, ports: ["1"]},
        {value: "38566", text: "MN HAM LAKE MN SUBLOT", landCost: 730, ports: ["1"]},
        {value: "38540", text: "MN CRASHEDTOYS EAST BETHEL", landCost: 655, ports: ["1"]},
        {value: "38417", text: "MN MINNEAPOLIS NORTH", landCost: 680, ports: ["1"]},
        
        // Missouri
        {value: "38418", text: "MO ST. LOUIS", landCost: 680, ports: ["2"]},
        {value: "38419", text: "MO COLUMBIA", landCost: 580, ports: ["2"]},
        {value: "38583", text: "MO SPRINGFIELD MO SUBLOT", landCost: 630, ports: ["2"]},
        {value: "38420", text: "MO SPRINGFIELD", landCost: 680, ports: ["2"]},
        {value: "38421", text: "MO SIKESTON", landCost: 630, ports: ["2"]},
        
        // Mississippi
        {value: "38422", text: "MS JACKSON", landCost: 410, ports: ["2", "3"]},
        {value: "43430", text: "MS Grenada", landCost: 500, ports: ["2", "3"]},
        
        // Montana
        {value: "38423", text: "MT BILLINGS", landCost: 930, ports: ["16"]},
        {value: "38424", text: "MT Helena", landCost: 1130, ports: ["16"]},
        
        // North Carolina
        {value: "38425", text: "NC CHINA GROVE", landCost: 425, ports: ["3"]},
        {value: "38951", text: "NC CONCORD", landCost: 330, ports: ["3"]},
        {value: "38557", text: "NC LUMBERTON NC SUBLOT", landCost: 480, ports: ["3"]},
        {value: "38426", text: "NC RALEIGH", landCost: 460, ports: ["3"]},
        {value: "41245", text: "NC GASTONIA", landCost: 530, ports: ["3"]},
        {value: "41191", text: "NC NC - RALEIGH NORTH", landCost: 480, ports: ["3"]},
        {value: "38558", text: "NC LUMBERTON NC SUBLOT", landCost: 480, ports: ["3"]},
        {value: "38427", text: "NC MEBANE", landCost: 390, ports: ["3"]},
        {value: "38187", text: "NC MOCKSVILLE", landCost: 360, ports: ["3"]},
        
        // North Dakota
        {value: "41326", text: "ND BISMARCK", landCost: 1230, ports: ["1"]},
        
        // Nebraska
        {value: "38428", text: "NE LINCOLN", landCost: 755, ports: ["2"]},
        
        // New Hampshire
        {value: "38541", text: "NH CANDIA", landCost: 480, ports: ["1"]},
        
        // New Jersey
        {value: "38474", text: "NJ GLASSBORO EAST", landCost: 305, ports: ["1"]},
        {value: "38475", text: "NJ SOMERVILLE", landCost: 240, ports: ["1"]},
        {value: "38476", text: "NJ TRENTON", landCost: 240, ports: ["1"]},
        
        // New Mexico
        {value: "38477", text: "NM ALBUQUERQUE", landCost: 780, ports: ["2"]},
        
        // Nevada
        {value: "38478", text: "NV LAS VEGAS", landCost: 450, ports: ["5"]},
        {value: "43480", text: "NV Las Vegas West", landCost: 490, ports: ["5"]},
        {value: "38479", text: "NV RENO", landCost: 630, ports: ["5"]},
        
        // New York
        {value: "38480", text: "NY ALBANY", landCost: 355, ports: ["1"]},
        {value: "38203", text: "NY BUFFALO", landCost: 540, ports: ["1"]},
        {value: "38568", text: "NY BROCTON NY SUBLOT", landCost: 580, ports: ["1"]},
        {value: "38481", text: "NY LONG ISLAND", landCost: 330, ports: ["1"]},
        {value: "38482", text: "NY SYRACUSE", landCost: 380, ports: ["1"]},
        {value: "38483", text: "NY ROCHESTER", landCost: 455, ports: ["1"]},
        {value: "38484", text: "NY NEWBURGH", landCost: 455, ports: ["1"]},
        {value: "38485", text: "NY ROCHESTER", landCost: 455, ports: ["1"]},
        
        // Ohio
        {value: "43560", text: "OH AKRON", landCost: 480, ports: ["1"]},
        {value: "38486", text: "OH CLEVELAND WEST", landCost: 530, ports: ["1"]},
        {value: "38488", text: "OH Columbus", landCost: 530, ports: ["1"]},
        {value: "38543", text: "OH DAYTON", landCost: 530, ports: ["1"]},
        {value: "38542", text: "OH CLEVELAND EAST", landCost: 530, ports: ["1"]},
        
        // Oklahoma
        {value: "38489", text: "OK OKLAHOMA CITY", landCost: 430, ports: ["2"]},
        {value: "38490", text: "OK TULSA", landCost: 430, ports: ["2"]},
        
        // Oregon
        {value: "38491", text: "OR EUGENE", landCost: 755, ports: ["16"]},
        {value: "38492", text: "OR PORTLAND NORTH", landCost: 805, ports: ["16"]},
        {value: "38493", text: "OR PORTLAND SOUTH", landCost: 805, ports: ["16"]},
        
        // Pennsylvania
        {value: "38494", text: "PA PITTSBURGH EAST", landCost: 480, ports: ["1"]},
        {value: "38544", text: "PA PHILADELPHIA EAST-SUBLOT", landCost: 300, ports: ["1"]},
        {value: "38495", text: "PA CHAMBERSBURG", landCost: 455, ports: ["1"]},
        {value: "38496", text: "PA SCRANTON", landCost: 330, ports: ["1"]},
        {value: "38497", text: "PA ALTOONA", landCost: 480, ports: ["1"]},
        {value: "38498", text: "PA PITTSBURGH NORTH", landCost: 480, ports: ["1"]},
        {value: "38499", text: "PA HARRISBURG", landCost: 405, ports: ["1"]},
        {value: "38500", text: "PA PHILADELPHIA", landCost: 300, ports: ["1"]},
        {value: "38501", text: "PA PITTSBURGH SOUTH", landCost: 480, ports: ["1"]},
        {value: "38502", text: "PA YORK HAVEN", landCost: 405, ports: ["1"]},
        
        // Rhode Island
        {value: "38587", text: "RI RI - EXETER", landCost: 405, ports: ["1"]},
        
        // South Carolina
        {value: "38503", text: "SC COLUMBIA", landCost: 520, ports: ["3"]},
        {value: "38504", text: "SC GREER", landCost: 280, ports: ["3"]},
        {value: "38188", text: "SC SC - NORTH CHARLESTON", landCost: 290, ports: ["3"]},
        {value: "38565", text: "SC Gaston, SC SUBLOT", landCost: 520, ports: ["3"]},
        {value: "38554", text: "SC SPARTANBURG SUBLOT", landCost: 530, ports: ["3"]},
        
        // South Dakota
        {value: "43360", text: "SD Rapid City", landCost: 1280, ports: ["2"]},
        
        // Tennessee
        {value: "38505", text: "TN NASHVILLE", landCost: 630, ports: ["3"]},
        {value: "38506", text: "TN KNOXVILLE", landCost: 630, ports: ["3"]},
        {value: "38507", text: "TN Memphis", landCost: 670, ports: ["3"]},
        
        // Texas
        {value: "38508", text: "TX ABILENE", landCost: 380, ports: ["2"]},
        {value: "38509", text: "TX AMARILLO", landCost: 530, ports: ["2"]},
        {value: "38549", text: "TX ANDREWS", landCost: 505, ports: ["2"]},
        {value: "38586", text: "TX ANDREWS", landCost: 505, ports: ["2"]},
        {value: "38510", text: "TX EL PASO", landCost: 505, ports: ["2"]},
        {value: "38577", text: "TX HASLET TX SUBLOT", landCost: 580, ports: ["2"]},
        {value: "38511", text: "TX CORPUS CHRISTI", landCost: 290, ports: ["2"]},
        {value: "38545", text: "TX CRASHEDTOYS DALLAS", landCost: 250, ports: ["2"]},
        {value: "38512", text: "TX DALLAS", landCost: 280, ports: ["2"]},
        {value: "38513", text: "TX FT. WORTH", landCost: 320, ports: ["2"]},
        {value: "38514", text: "TX HOUSTON", landCost: 180, ports: ["2"]},
        {value: "38515", text: "TX LONGVIEW", landCost: 290, ports: ["2"]},
        {value: "38516", text: "TX LUFKIN", landCost: 280, ports: ["2"]},
        {value: "38517", text: "TX MCALLEN", landCost: 310, ports: ["2"]},
        {value: "38518", text: "TX AUSTIN", landCost: 280, ports: ["2"]},
        {value: "38559", text: "TX ORMY TX SUBLOT", landCost: 535, ports: ["2"]},
        {value: "38547", text: "TX SAN ANTONIO", landCost: 330, ports: ["2"]},
        {value: "38552", text: "TX WACO", landCost: 280, ports: ["2"]},
        {value: "38560", text: "TX ANTHONY TX SUBLOT", landCost: 505, ports: ["2"]},
        {value: "38582", text: "TX WILMER TX SUBLOT", landCost: 280, ports: ["2"]},
        {value: "38546", text: "TX DALLAS SOUTH", landCost: 280, ports: ["2"]},
        
        // Utah
        {value: "38564", text: "UT OGDEN SUBLOT", landCost: 580, ports: ["16"]},
        {value: "40768", text: "UT UT - SALT LAKE CITY", landCost: 630, ports: ["16"]},
        {value: "38519", text: "UT SALT LAKE CITY", landCost: 630, ports: ["16"]},
        
        // Virginia
        {value: "38204", text: "VA VA - RICHMOND EAST", landCost: 480, ports: ["1"]},
        {value: "38520", text: "VA DANVILLE", landCost: 530, ports: ["1"]},
        {value: "38202", text: "VA VA - FREDERICKSBURG", landCost: 480, ports: ["1"]},
        {value: "38201", text: "VA VA - FREDERICKSBURG", landCost: 480, ports: ["1"]},
        {value: "38521", text: "VA HAMPTON", landCost: 480, ports: ["1"]},
        {value: "38522", text: "VA RICHMOND", landCost: 430, ports: ["1"]},
        
        // Vermont
        {value: "38580", text: "VT ORLEANS VT SUBLOT", landCost: 630, ports: ["1"]},
        {value: "43600", text: "VT RUTLAND", landCost: 580, ports: ["1"]},
        
        // Washington
        {value: "38523", text: "WA SPOKANE", landCost: 480, ports: ["16"]},
        {value: "38524", text: "WA NORTH SEATTLE", landCost: 380, ports: ["16"]},
        {value: "38525", text: "WA GRAHAM", landCost: 255, ports: ["16"]},
        {value: "38526", text: "WA PASCO", landCost: 380, ports: ["16"]},
        
        // Wisconsin
        {value: "38185", text: "WI APPLETON", landCost: 780, ports: ["1"]},
        {value: "38184", text: "WI APPLETON", landCost: 780, ports: ["1"]},
        {value: "38527", text: "WI MILWAUKEE", landCost: 780, ports: ["1"]},
        {value: "42930", text: "WI Milwaukee South", landCost: 780, ports: ["1"]},
        {value: "38528", text: "WI MADISON", landCost: 780, ports: ["1"]},
        {value: "42730", text: "WI WI - MADISON SOUTH", landCost: 780, ports: ["1"]},
        {value: "41038", text: "WI MILWAUKEE NORTH", landCost: 780, ports: ["1"]},
        {value: "38529", text: "WI Milwaukee", landCost: 780, ports: ["1"]},
        {value: "38581", text: "WI WAUKESHA WI SUBLOT", landCost: 780, ports: ["1"]},
        
        // West Virginia
        {value: "38530", text: "WV CHARLESTON", landCost: 580, ports: ["1"]},
        // Wyoming
        {value: "38548", text: "WY Casper", landCost: 1330, ports: ["2"]}
    ],
    "2": [ // Manheim
        {value: "38589", text: "AL Manheim Birmingham", landCost: 530, ports: ["3"]},
        {value: "38662", text: "AZ Manheim Arizona", landCost: 430, ports: ["5"]},
        {value: "38590", text: "AZ Manheim Phoenix", landCost: 430, ports: ["5"]},
        {value: "38591", text: "AZ Manheim Tucson", landCost: 530, ports: ["5"]},
        {value: "38592", text: "CA Manheim California", landCost: 280, ports: ["5"]},
        {value: "38593", text: "CA Manheim Central California", landCost: 430, ports: ["5"]},
        {value: "38594", text: "CA Manheim Riverside", landCost: 310, ports: ["5"]},
        {value: "38595", text: "CA Manheim San Diego", landCost: 380, ports: ["5"]},
        {value: "38596", text: "CA Manheim San Francisco Bay", landCost: 480, ports: ["5"]},
        {value: "38597", text: "CA Manheim Southern California", landCost: 310, ports: ["5"]},
        {value: "38598", text: "CO Manheim Denver", landCost: 680, ports: ["2"]},
        {value: "38600", text: "FL Manheim Central Florida", landCost: 530, ports: ["4"]},
        {value: "38601", text: "FL Manheim Daytona Beach", landCost: 430, ports: ["4"]},
        {value: "38602", text: "FL Manheim Fort Lauderdale", landCost: 370, ports: ["4"]},
        {value: "38603", text: "FL Manheim Fort Myers", landCost: 530, ports: ["4"]},
        {value: "38604", text: "FL Manheim Jacksonville", landCost: 640, ports: ["4"]},
        {value: "38605", text: "FL Manheim Lakeland", landCost: 480, ports: ["4"]},
        {value: "38606", text: "FL Manheim Orlando", landCost: 530, ports: ["4"]},
        {value: "38607", text: "FL Manheim Palm Beach", landCost: 420, ports: ["4"]},
        {value: "38608", text: "FL Manheim Pensacola", landCost: 550, ports: ["4"]},
        {value: "38609", text: "FL Manheim St Pete", landCost: 480, ports: ["4"]},
        {value: "38610", text: "FL Manheim Tampa", landCost: 530, ports: ["4"]},
        {value: "38611", text: "GA Manheim Atlanta", landCost: 330, ports: ["3"]},
        {value: "38612", text: "GA Manheim Georgia", landCost: 330, ports: ["3"]},
        {value: "38614", text: "IL Manheim Arena Illinois", landCost: 630, ports: ["1"]},
        {value: "38615", text: "IL Manheim Chicago", landCost: 630, ports: ["1"]},
        {value: "38616", text: "IN Manheim Indianapolis", landCost: 580, ports: ["1"]},
        {value: "38617", text: "IN Manheim Louisville", landCost: 580, ports: ["3", "1"]},
        {value: "38618", text: "LA Manheim Lafayette", landCost: 430, ports: ["2"]},
        {value: "38619", text: "LA Manheim New Orleans", landCost: 430, ports: ["2"]},
        {value: "38667", text: "MA Manheim New England", landCost: 380, ports: ["1"]},
        {value: "40597", text: "MD 4805 Philadelphia Rd, Belcamp, MD", landCost: 405, ports: ["1"]},
        {value: "38666", text: "MD Manheim Baltimore-Washington", landCost: 330, ports: ["1"]},
        {value: "38620", text: "MI Manheim Detroit", landCost: 630, ports: ["1"]},
        {value: "38621", text: "MI Manheim Flint (tra)", landCost: 630, ports: ["1"]},
        {value: "38622", text: "MN Manheim Minneapolis", landCost: 670, ports: ["1"]},
        {value: "38623", text: "MN Manheim Northstar Minnesota", landCost: 670, ports: ["1"]},
        {value: "38624", text: "MO Manheim Kansas City", landCost: 580, ports: ["2"]},
        {value: "38625", text: "MO Manheim Springfield", landCost: 680, ports: ["2"]},
        {value: "38626", text: "MO Manheim St Louis", landCost: 630, ports: ["2"]},
        {value: "38627", text: "MS Manheim Mississippi", landCost: 410, ports: ["2", "3"]},
        {value: "38628", text: "NC Manheim Charlotte", landCost: 390, ports: ["3"]},
        {value: "38629", text: "NC Manheim North Carolina", landCost: 390, ports: ["3"]},
        {value: "38630", text: "NC Manheim Statesville", landCost: 390, ports: ["3"]},
        {value: "38631", text: "NE Manheim Omaha", landCost: 630, ports: ["2"]},
        {value: "38632", text: "NJ Manheim New Jersey", landCost: 330, ports: ["1"]},
        {value: "38633", text: "NJ Manheim Ny Metro Skyline", landCost: 340, ports: ["1"]},
        {value: "38634", text: "NM Manheim New Mexico", landCost: 780, ports: ["2"]},
        {value: "38635", text: "NV Manheim Nevada", landCost: 450, ports: ["5"]},
        {value: "38636", text: "NY Manheim Albany", landCost: 370, ports: ["1"]},
        {value: "38637", text: "NY Manheim New York", landCost: 340, ports: ["1"]},
        {value: "38638", text: "OH Manheim Cincinnati", landCost: 490, ports: ["1"]},
        {value: "38668", text: "OH Manheim Cleveland", landCost: 490, ports: ["1"]},
        {value: "38639", text: "OH Manheim Ohio", landCost: 480, ports: ["1"]},
        {value: "38640", text: "OK Manheim Tulsa", landCost: 430, ports: ["2"]},
        {value: "38641", text: "OR Manheim Portland", landCost: 410, ports: ["16"]},
        {value: "38642", text: "PA Manheim Keystone Pennsylvania", landCost: 330, ports: ["1"]},
        {value: "38643", text: "PA Manheim Pennsylvania", landCost: 320, ports: ["1"]},
        {value: "38644", text: "PA Manheim Philadelphia", landCost: 320, ports: ["1"]},
        {value: "38645", text: "PA Manheim Pittsburgh", landCost: 330, ports: ["1"]},
        {value: "38646", text: "SC Manheim Darlington", landCost: 410, ports: ["3"]},
        {value: "38647", text: "SC Manheim Greer", landCost: 400, ports: ["3"]},
        {value: "38648", text: "TN Manheim Nashville", landCost: 490, ports: ["3"]},
        {value: "38649", text: "TX Manheim Dallas", landCost: 280, ports: ["2"]},
        {value: "38650", text: "TX Manheim Dallas-Fort Worth", landCost: 320, ports: ["2"]},
        {value: "38651", text: "TX Manheim El Paso", landCost: 505, ports: ["2"]},
        {value: "38652", text: "TX Manheim Houston", landCost: 180, ports: ["2"]},
        {value: "38653", text: "TX Manheim San Antonio", landCost: 330, ports: ["2"]},
        {value: "38670", text: "TX Manheim South Houston", landCost: 290, ports: ["2"]},
        {value: "38654", text: "TX Manheim Texas Hobby", landCost: 280, ports: ["2"]},
        {value: "38655", text: "UT Manheim Utah", landCost: 590, ports: ["16"]},
        {value: "38656", text: "VA Manheim Fredericksburg", landCost: 360, ports: ["1"]},
        {value: "38657", text: "VA Manheim Harrisonburg", landCost: 370, ports: ["1"]},
        {value: "38658", text: "WA Manheim Seattle", landCost: 400, ports: ["16"]},
        {value: "38659", text: "WI Manheim Milwaukee", landCost: 610, ports: ["1"]},
        {value: "38660", text: "WV Manheim Casper (TRA)", landCost: 660, ports: ["2"]}
    ],
    "30": [ // SUBLOT COPART (не работают)
        {value: "38571", text: "AL BIRMINGHAM AL SUBLOT", landCost: 455, ports: []},
        {value: "38574", text: "CA SACRAMENTO CA SUBLOT", landCost: 565, ports: []},
        {value: "38573", text: "CA LANCASTER CA SUBLOT", landCost: 430, ports: []},
        {value: "38576", text: "CA SANTA PAULA CA SUBLOT", landCost: 390, ports: []},
        {value: "38553", text: "CA Sun Valley SUBLOT", landCost: 280, ports: []},
        {value: "38562", text: "CO COLORADO SPRINGS CO SUBLOT", landCost: 680, ports: []},
        {value: "38579", text: "CO COLORADO SPRINGS CO SUBLOT", landCost: 680, ports: []},
        {value: "38572", text: "CT BERLIN CT SUBLOT", landCost: 405, ports: []},
        {value: "38567", text: "GA METTER GA SUBLOT", landCost: 330, ports: []},
        {value: "38569", text: "IL LOUIS IL SUBLOT", landCost: 680, ports: []},
        {value: "38561", text: "LA TICKFAW LA SUBLOT", landCost: 530, ports: []},
        {value: "38556", text: "MD BALTIMORE MD SUBLOT", landCost: 405, ports: []},
        {value: "38555", text: "MD WHITE MARSH SUBLOT", landCost: 405, ports: []},
        {value: "38570", text: "ME GRAY ME SUBLOT", landCost: 530, ports: []},
        {value: "38578", text: "ME ORONO ME SUBLOT", landCost: 630, ports: []},
        {value: "38566", text: "MN HAM LAKE MN SUBLOT", landCost: 730, ports: []},
        {value: "38583", text: "MO SPRINGFIELD MO SUBLOT", landCost: 630, ports: []},
        {value: "38557", text: "NC LUMBERTON NC SUBLOT", landCost: 480, ports: []},
        {value: "38558", text: "NC LUMBERTON NC SUBLOT", landCost: 480, ports: []},
        {value: "38568", text: "NY BROCTON NY SUBLOT", landCost: 580, ports: []},
        {value: "38544", text: "PA PHILADELPHIA EAST-SUBLOT", landCost: 300, ports: []},
        {value: "38565", text: "SC Gaston, SC SUBLOT", landCost: 520, ports: []},
        {value: "38554", text: "SC SPARTANBURG SUBLOT", landCost: 530, ports: []},
        {value: "38577", text: "TX HASLET TX SUBLOT", landCost: 580, ports: []},
        {value: "38559", text: "TX ORMY TX SUBLOT", landCost: 535, ports: []},
        {value: "38560", text: "TX ANTHONY TX SUBLOT", landCost: 505, ports: []},
        {value: "38582", text: "TX WILMER TX SUBLOT", landCost: 280, ports: []},
        {value: "38564", text: "UT OGDEN SUBLOT", landCost: 580, ports: []},
        {value: "38580", text: "VT ORLEANS VT SUBLOT", landCost: 630, ports: []},
        {value: "38581", text: "WI WAUKESHA WI SUBLOT", landCost: 780, ports: []}
    ],
    "31": [ // SUBLOT IAAI (не работают)  
        {value: "38577", text: "TX HASLET TX SUBLOT", landCost: 580, ports: []},
        {value: "38562", text: "CO COLORADO SPRINGS CO SUBLOT", landCost: 680, ports: []},
        {value: "38579", text: "CO COLORADO SPRINGS CO SUBLOT", landCost: 680, ports: []},
        {value: "38572", text: "CT BERLIN CT SUBLOT", landCost: 405, ports: []}
    ],
    32: [ // Canada
        {value: "38377", text: "AB CALGARY", landCost: 1580, ports: ["6"]},
        {value: "38378", text: "AB EDMONTON", landCost: 1580, ports: ["6"]},
        {value: "44200", text: "BC ICBC - Abbotsford", landCost: 2480, ports: ["6"]},
        {value: "44220", text: "BC ICBC Nanaimo", landCost: 3080, ports: ["6"]},
        {value: "44240", text: "BC ICBC Penticton Towing", landCost: 3380, ports: ["6"]},
        {value: "44210", text: "BC ICBC Vernon", landCost: 3030, ports: ["6"]},
        {value: "44230", text: "BC ICBC Victoria", landCost: 3080, ports: ["6"]},
        {value: "44190", text: "BC ICBC-QUEENSBOROUGH", landCost: 2480, ports: ["6"]},
        {value: "44170", text: "BC Vancouver", landCost: 2480, ports: ["6"]},
        {value: "44090", text: "MB MPI-Blumenort", landCost: 1680, ports: ["6"]},
        {value: "44060", text: "MB MPI-Brandon", landCost: 1680, ports: ["6"]},
        {value: "44070", text: "MB MPI-Portage la Prairie", landCost: 1680, ports: ["6"]},
        {value: "44080", text: "MB MPI-Trehernre", landCost: 1680, ports: ["6"]},
        {value: "44050", text: "MB MPI-Winnipeg", landCost: 1580, ports: ["6"]},
        {value: "38384", text: "NB MONCTON", landCost: 880, ports: ["6"]},
        {value: "44160", text: "NF St-Johns", landCost: 1730, ports: ["6"]},
        {value: "38379", text: "NS HALIFAX", landCost: 855, ports: ["6"]},
        {value: "44250", text: "ON COOKSTOWN", landCost: 830, ports: ["6"]},
        {value: "43990", text: "ON Hamilton/Stoney Creek", landCost: 680, ports: ["6"]},
        {value: "43970", text: "ON Innisfil", landCost: 830, ports: ["6"]},
        {value: "44030", text: "ON Kenora", landCost: 1580, ports: ["6"]},
        {value: "38383", text: "ON LONDON", landCost: 680, ports: ["6"]},
        {value: "43960", text: "ON N. Toronto Tottenham", landCost: 780, ports: ["6"]},
        {value: "43700", text: "ON Toronto (Ontario)", landCost: 880, ports: ["6"]},
        {value: "43950", text: "ON Ottawa/Witchester", landCost: 555, ports: ["6"]},
        {value: "43980", text: "ON Stoufvile", landCost: 680, ports: ["6"]},
        {value: "44011", text: "ON Sudbury", landCost: 780, ports: ["6"]},
        {value: "44040", text: "ON Thunder Bay", landCost: 1580, ports: ["6"]},
        {value: "38382", text: "ON TORONTO", landCost: 780, ports: ["6"]},
        {value: "43930", text: "QC Chicoutimi", landCost: 780, ports: ["6"]},
        {value: "43890", text: "QC Kenny U-Pull la Prairie", landCost: 480, ports: ["6"]},
        {value: "43870", text: "QC Mascouche", landCost: 300, ports: ["6"]},
        {value: "38381", text: "QC MONTREAL", landCost: 240, ports: ["6"]},
        {value: "43940", text: "QC Quebec City", landCost: 530, ports: ["6"]},
        {value: "43920", text: "QC St-Hubert-Riviere-du-Loup", landCost: 730, ports: ["6"]},
        {value: "43880", text: "QC St-Jean-sur-Richileu", landCost: 480, ports: ["6"]},
        {value: "43910", text: "QC St-Philibert", landCost: 730, ports: ["6"]},
        {value: "43900", text: "QC Val d'Or", landCost: 1380, ports: ["6"]},
        {value: "44120", text: "SK Moose Jaw", landCost: 1680, ports: ["6"]},
        {value: "44140", text: "SK North Battleford", landCost: 1680, ports: ["6"]},
        {value: "44130", text: "SK Prince Albert", landCost: 1680, ports: ["6"]},
        {value: "44110", text: "SK Regina", landCost: 1680, ports: ["6"]},
        {value: "44100", text: "SK Saskatoon", landCost: 1680, ports: ["6"]},
        {value: "44150", text: "SK Yorkton", landCost: 1730, ports: ["6"]}
    ]
};

// Данные портов
const portData = {
    "loading": [
        {
            "value": "1",
            "text": "PORT, NJ"
        },
        {
            "value": "2",
            "text": "PORT, TX"
        },
        {
            "value": "3",
            "text": "PORT, GA"
        },
        {
            "value": "4",
            "text": "PORT, FL"
        },
        {
            "value": "5",
            "text": "PORT, CA"
        },
        {
            "value": "6",
            "text": "PORT, CAN"
        },
        {
            "value": "16",
            "text": "PORT, WA"
        }
    ],
"arrival": {
        "Georgia": [
            {"value": "2", "text": "Poti"}
        ],
        "Lithuania": [
            {"value": "4", "text": "Klaipeda"}
        ]
    }
};

// Цены океанской доставки
const oceanPrices = {
    "Georgia": {
        "2": {"1": 950, "2": 1200, "3": 950, "4": 1050, "5": 1550, "6": 1290, "16": 1900}
    },
    "Lithuania": {
        "4": {"1": 600, "2": 750, "3": 600, "4": 700, "5": 1100, "6": 990, "16": 1400}
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
