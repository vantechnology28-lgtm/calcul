
// Проверяем загрузку данных
console.log('🔧 Loading data.js...');

// ВАЖНО: Проверяем синтаксис
try {
    
// Данные локаций
const locationData = {
    "1": [
        // ... (все локации из аукциона "1" остаются без изменений, как в предыдущем ответе)
        {
            "value": "38297",
            "text": "AL MOBILE",
            "landCost": 430,
            "ports": ["3"]
        },
        {
            "value": "38298",
            "text": "AL BIRMINGHAM",
            "landCost": 450,
            "ports": ["3"]
        },
        {
            "value": "38299",
            "text": "AL Montgomery",
            "landCost": 460,
            "ports": ["3"]
        },
        {
            "value": "40759",
            "text": "AL AL - DOTHAN",
            "landCost": 470,
            "ports": ["3"]
        },
        {
            "value": "38300",
            "text": "AL TANNER",
            "landCost": 460,
            "ports": ["3"]
        },
        {
            "value": "42394",
            "text": "AL MOBILE SOUTH",
            "landCost": 430,
            "ports": ["3"]
        },
        {
            "value": "38571",
            "text": "AL BIRMINGHAM AL SUBLOT",
            "landCost": 451,
            "ports": ["3"]
        },
        {
            "value": "38301",
            "text": "AR LITTLE ROCK",
            "landCost": 520,
            "ports": ["2"]
        },
        {
            "value": "38302",
            "text": "AR FAYETTEVILLE",
            "landCost": 550,
            "ports": ["2"]
        },
        {
            "value": "38303",
            "text": "AZ PHOENIX",
            "landCost": 470,
            "ports": ["5"]
        },
        {
            "value": "43710",
            "text": "AZ AZ - PHOENIX NORTH",
            "landCost": 480,
            "ports": ["5"]
        },
        {
            "value": "38304",
            "text": "AZ TUCSON",
            "landCost": 490,
            "ports": ["5"]
        },
        {
            "value": "41272",
            "text": "CA ADELANTO",
            "landCost": 360,
            "ports": ["5"]
        },
        {
            "value": "44310",
            "text": "CA NAPA",
            "landCost": 350,
            "ports": ["5"]
        },
        {
            "value": "38924",
            "text": "CA CA - REDDING",
            "landCost": 370,
            "ports": ["5"]
        },
        {
            "value": "38181",
            "text": "CA ANTELOPE",
            "landCost": 340,
            "ports": ["5"]
        },
        {
            "value": "38305",
            "text": "CA BAKERSFIELD",
            "landCost": 360,
            "ports": ["5"]
        },
        {
            "value": "38306",
            "text": "CA SAN BERNARDINO",
            "landCost": 340,
            "ports": ["5"]
        },
        {
            "value": "38307",
            "text": "CA FRESNO",
            "landCost": 370,
            "ports": ["5"]
        },
        {
            "value": "38574",
            "text": "CA SACRAMENTO CA SUBLOT",
            "landCost": 346,
            "ports": ["5"]
        },
        {
            "value": "38308",
            "text": "CA HAYWARD",
            "landCost": 340,
            "ports": ["5"]
        },
        {
            "value": "38573",
            "text": "CA LANCASTER CA SUBLOT",
            "landCost": 346,
            "ports": ["5"]
        },
        {
            "value": "38309",
            "text": "CA LOS ANGELES",
            "landCost": 330,
            "ports": ["5"]
        },
        {
            "value": "38310",
            "text": "CA MARTINEZ",
            "landCost": 340,
            "ports": ["5"]
        },
        {
            "value": "43270",
            "text": "CA MENTONE",
            "landCost": 350,
            "ports": ["5"]
        },
        {
            "value": "38311",
            "text": "CA RANCHO CUCAMONGA",
            "landCost": 340,
            "ports": ["5"]
        },
        {
            "value": "38312",
            "text": "CA SACRAMENTO",
            "landCost": 340,
            "ports": ["5"]
        },
        {
            "value": "38313",
            "text": "CA SAN DIEGO",
            "landCost": 350,
            "ports": ["5"]
        },
        {
            "value": "38314",
            "text": "CA San Jose",
            "landCost": 350,
            "ports": ["5"]
        },
        {
            "value": "38576",
            "text": "CA SANTA PAULA CA SUBLOT",
            "landCost": 346,
            "ports": ["5"]
        },
        {
            "value": "38553",
            "text": "CA Sun Valley SUBLOT",
            "landCost": 346,
            "ports": ["5"]
        },
        {
            "value": "38315",
            "text": "CA VALLEJO",
            "landCost": 340,
            "ports": ["5"]
        },
        {
            "value": "38316",
            "text": "CA VAN NUYS",
            "landCost": 340,
            "ports": ["5"]
        },
        {
            "value": "38575",
            "text": "CA Long Beach",
            "landCost": 330,
            "ports": ["5"]
        },
        {
            "value": "38317",
            "text": "CO DENVER",
            "landCost": 630,
            "ports": ["2"]
        },
        {
            "value": "38562",
            "text": "CO COLORADO SPRINGS CO SUBLOT",
            "landCost": 636,
            "ports": ["2"]
        },
        {
            "value": "38532",
            "text": "CO COLORADO SPRINGS",
            "landCost": 640,
            "ports": ["2"]
        },
        {
            "value": "38588",
            "text": "CO Denver Central",
            "landCost": 630,
            "ports": ["2"]
        },
        {
            "value": "38585",
            "text": "CO FORT LUPTON",
            "landCost": 640,
            "ports": ["2"]
        },
        {
            "value": "38584",
            "text": "CO CO - DENVER SOUTH",
            "landCost": 630,
            "ports": ["2"]
        },
        {
            "value": "38579",
            "text": "CO COLORADO SPRINGS CO SUBLOT",
            "landCost": 636,
            "ports": ["2"]
        },
        {
            "value": "38198",
            "text": "CT CT - HARTFORD SPRINGFIELD",
            "landCost": 350,
            "ports": ["1"]
        },
        {
            "value": "38572",
            "text": "CT BERLIN CT SUBLOT",
            "landCost": 350,
            "ports": ["1"]
        },
        {
            "value": "38318",
            "text": "CT HARTFORD",
            "landCost": 350,
            "ports": ["1"]
        },
        {
            "value": "38319",
            "text": "DE SEAFORD",
            "landCost": 320,
            "ports": ["1"]
        },
        {
            "value": "38550",
            "text": "FL ORLANDO NORTH",
            "landCost": 270,
            "ports": ["4"]
        },
        {
            "value": "42910",
            "text": "FL FL - PUNTA GORDA SOUTH",
            "landCost": 280,
            "ports": ["4"]
        },
        {
            "value": "38320",
            "text": "FL FT. PIERCE",
            "landCost": 260,
            "ports": ["4"]
        },
        {
            "value": "38321",
            "text": "FL MIAMI SOUTH",
            "landCost": 250,
            "ports": ["4"]
        },
        {
            "value": "38322",
            "text": "FL JACKSONVILLE EAST",
            "landCost": 280,
            "ports": ["4"]
        },
        {
            "value": "43230",
            "text": "FL JACKSONVILLE NORTH",
            "landCost": 280,
            "ports": ["4"]
        },
        {
            "value": "38533",
            "text": "FL JACKSONVILLE WEST",
            "landCost": 280,
            "ports": ["4"]
        },
        {
            "value": "38534",
            "text": "FL MIAMI CENTRAL",
            "landCost": 250,
            "ports": ["4"]
        },
        {
            "value": "38326",
            "text": "FL MIAMI NORTH",
            "landCost": 250,
            "ports": ["4"]
        },
        {
            "value": "38323",
            "text": "FL TALLAHASSEE",
            "landCost": 310,
            "ports": ["4"]
        },
        {
            "value": "38324",
            "text": "FL OCALA",
            "landCost": 280,
            "ports": ["4"]
        },
        {
            "value": "38325",
            "text": "FL ORLANDO SOUTH",
            "landCost": 270,
            "ports": ["4"]
        },
        {
            "value": "38327",
            "text": "FL PUNTA GORDA",
            "landCost": 270,
            "ports": ["4"]
        },
        {
            "value": "38328",
            "text": "FL TAMPA SOUTH",
            "landCost": 260,
            "ports": ["4"]
        },
        {
            "value": "38329",
            "text": "FL WEST PALM BEACH",
            "landCost": 250,
            "ports": ["4"]
        },
        {
            "value": "42880",
            "text": "GA GA - AUGUSTA",
            "landCost": 400,
            "ports": ["3"]
        },
        {
            "value": "38330",
            "text": "GA ATLANTA WEST",
            "landCost": 380,
            "ports": ["3"]
        },
        {
            "value": "38190",
            "text": "GA GA - MACON",
            "landCost": 400,
            "ports": ["3"]
        },
        {
            "value": "38189",
            "text": "GA GA - MACON",
            "landCost": 400,
            "ports": ["3"]
        },
        {
            "value": "38535",
            "text": "GA CARTERSVILLE",
            "landCost": 390,
            "ports": ["3"]
        },
        {
            "value": "38191",
            "text": "GA EAST POINT",
            "landCost": 380,
            "ports": ["3"]
        },
        {
            "value": "38192",
            "text": "GA GA - CRASHEDTOYS ATLANTA",
            "landCost": 380,
            "ports": ["3"]
        },
        {
            "value": "38331",
            "text": "GA ATLANTA SOUTH",
            "landCost": 380,
            "ports": ["3"]
        },
        {
            "value": "41317",
            "text": "GA FAIRBURN",
            "landCost": 380,
            "ports": ["3"]
        },
        {
            "value": "38332",
            "text": "GA ATLANTA NORTH",
            "landCost": 380,
            "ports": ["3"]
        },
        {
            "value": "38333",
            "text": "GA ATLANTA EAST",
            "landCost": 380,
            "ports": ["3"]
        },
        {
            "value": "38334",
            "text": "GA SAVANNAH",
            "landCost": 320,
            "ports": ["3"]
        },
        {
            "value": "38335",
            "text": "GA TIFTON",
            "landCost": 420,
            "ports": ["3"]
        },
        {
            "value": "38567",
            "text": "GA METTER GA SUBLOT",
            "landCost": 385,
            "ports": ["3"]
        },
        {
            "value": "38375",
            "text": "HI HONOLULU",
            "landCost": 890,
            "ports": ["5"]
        },
        {
            "value": "38336",
            "text": "HI HONOLULU",
            "landCost": 890,
            "ports": ["5"]
        },
        {
            "value": "38337",
            "text": "IA DES MOINES",
            "landCost": 580,
            "ports": ["1"]
        },
        {
            "value": "38538",
            "text": "IA DAVENPORT",
            "landCost": 600,
            "ports": ["1"]
        },
        {
            "value": "38537",
            "text": "IA CRASHEDTOYS ELDRIDGE",
            "landCost": 600,
            "ports": ["1"]
        },
        {
            "value": "38338",
            "text": "ID BOISE",
            "landCost": 650,
            "ports": ["16"]
        },
        {
            "value": "38551",
            "text": "IL Southern Illinois",
            "landCost": 580,
            "ports": ["1"]
        },
        {
            "value": "38563",
            "text": "IL ALORTON",
            "landCost": 580,
            "ports": ["1"]
        },
        {
            "value": "42900",
            "text": "IL Southern Illinois",
            "landCost": 580,
            "ports": ["1"]
        },
        {
            "value": "42870",
            "text": "IL SOUTHERN ILLINOIS",
            "landCost": 580,
            "ports": ["1"]
        },
        {
            "value": "38339",
            "text": "IL CHICAGO SOUTH",
            "landCost": 630,
            "ports": ["1"]
        },
        {
            "value": "38340",
            "text": "IL CHICAGO NORTH",
            "landCost": 630,
            "ports": ["1"]
        },
        {
            "value": "38341",
            "text": "IL PEORIA",
            "landCost": 630,
            "ports": ["1"]
        },
        {
            "value": "38569",
            "text": "IL LOUIS IL SUBLOT",
            "landCost": 614,
            "ports": ["1"]
        },
        {
            "value": "38342",
            "text": "IL WHEELING",
            "landCost": 630,
            "ports": ["1"]
        },
        {
            "value": "40903",
            "text": "IN CICERO",
            "landCost": 550,
            "ports": ["1"]
        },
        {
            "value": "41326",
            "text": "IN DYER",
            "landCost": 580,
            "ports": ["1"]
        },
        {
            "value": "40625",
            "text": "IN FORT WAYNE",
            "landCost": 550,
            "ports": ["1"]
        },
        {
            "value": "38536",
            "text": "IN HAMMOND",
            "landCost": 600,
            "ports": ["1"]
        },
        {
            "value": "38343",
            "text": "IN HARTFORD CITY",
            "landCost": 550,
            "ports": ["1"]
        },
        {
            "value": "38344",
            "text": "IN INDIANAPOLIS",
            "landCost": 550,
            "ports": ["1"]
        },
        {
            "value": "38345",
            "text": "KS KANSAS CITY",
            "landCost": 580,
            "ports": ["2"]
        },
        {
            "value": "38346",
            "text": "KS WICHITA",
            "landCost": 580,
            "ports": ["2"]
        },
        {
            "value": "42570",
            "text": "KY EARLINGTON",
            "landCost": 520,
            "ports": ["3"]
        },
        {
            "value": "38539",
            "text": "KY LEXINGTON WEST",
            "landCost": 520,
            "ports": ["3", "1"]
        },
        {
            "value": "38396",
            "text": "KY LEXINGTON EAST",
            "landCost": 520,
            "ports": ["3", "1"]
        },
        {
            "value": "38397",
            "text": "KY LOUISVILLE",
            "landCost": 520,
            "ports": ["3", "1"]
        },
        {
            "value": "38398",
            "text": "KY WALTON",
            "landCost": 520,
            "ports": ["3", "1"]
        },
        {
            "value": "38561",
            "text": "LA TICKFAW LA SUBLOT",
            "landCost": 366,
            "ports": ["2"]
        },
        {
            "value": "38399",
            "text": "LA BATON ROUGE",
            "landCost": 350,
            "ports": ["2"]
        },
        {
            "value": "38400",
            "text": "LA NEW ORLEANS",
            "landCost": 350,
            "ports": ["2"]
        },
        {
            "value": "38401",
            "text": "LA SHREVEPORT",
            "landCost": 400,
            "ports": ["2"]
        },
        {
            "value": "42600",
            "text": "MA MA - FREETOWN",
            "landCost": 380,
            "ports": ["1"]
        },
        {
            "value": "38402",
            "text": "MA SOUTH BOSTON",
            "landCost": 380,
            "ports": ["1"]
        },
        {
            "value": "38403",
            "text": "MA NORTH BOSTON",
            "landCost": 380,
            "ports": ["1"]
        },
        {
            "value": "38404",
            "text": "MA WEST WARREN",
            "landCost": 390,
            "ports": ["1"]
        },
        {
            "value": "40732",
            "text": "MD BALTIMORE EAST",
            "landCost": 320,
            "ports": ["1"]
        },
        {
            "value": "38407",
            "text": "MD BALTIMORE",
            "landCost": 320,
            "ports": ["1"]
        },
        {
            "value": "38556",
            "text": "MD BALTIMORE MD SUBLOT",
            "landCost": 324,
            "ports": ["1"]
        },
        {
            "value": "38408",
            "text": "MD WASHINGTON DC",
            "landCost": 320,
            "ports": ["1"]
        },
        {
            "value": "38555",
            "text": "MD WHITE MARSH SUBLOT",
            "landCost": 324,
            "ports": ["1"]
        },
        {
            "value": "38570",
            "text": "ME GRAY ME SUBLOT",
            "landCost": 420,
            "ports": ["1"]
        },
        {
            "value": "38409",
            "text": "ME LYMAN",
            "landCost": 420,
            "ports": ["1"]
        },
        {
            "value": "38578",
            "text": "ME ORONO ME SUBLOT",
            "landCost": 420,
            "ports": ["1"]
        },
        {
            "value": "43411",
            "text": "ME WINDHAM",
            "landCost": 420,
            "ports": ["1"]
        },
        {
            "value": "38410",
            "text": "MI FLINT",
            "landCost": 520,
            "ports": ["1"]
        },
        {
            "value": "38411",
            "text": "MI KINCHELOE",
            "landCost": 580,
            "ports": ["1"]
        },
        {
            "value": "38412",
            "text": "MI LANSING",
            "landCost": 540,
            "ports": ["1"]
        },
        {
            "value": "38413",
            "text": "MI IONIA",
            "landCost": 540,
            "ports": ["1"]
        },
        {
            "value": "38414",
            "text": "MI DETROIT",
            "landCost": 520,
            "ports": ["1"]
        },
        {
            "value": "38415",
            "text": "MN ST. CLOUD",
            "landCost": 650,
            "ports": ["1"]
        },
        {
            "value": "38416",
            "text": "MN MINNEAPOLIS",
            "landCost": 650,
            "ports": ["1"]
        },
        {
            "value": "38175",
            "text": "MN CRASHEDTOYS MINNEAPOLIS",
            "landCost": 650,
            "ports": ["1"]
        },
        {
            "value": "38566",
            "text": "MN HAM LAKE MN SUBLOT",
            "landCost": 654,
            "ports": ["1"]
        },
        {
            "value": "38540",
            "text": "MN CRASHEDTOYS EAST BETHEL",
            "landCost": 650,
            "ports": ["1"]
        },
        {
            "value": "38417",
            "text": "MN MINNEAPOLIS NORTH",
            "landCost": 650,
            "ports": ["1"]
        },
        {
            "value": "38418",
            "text": "MO ST. LOUIS",
            "landCost": 580,
            "ports": ["2"]
        },
        {
            "value": "38419",
            "text": "MO COLUMBIA",
            "landCost": 580,
            "ports": ["2"]
        },
        {
            "value": "38583",
            "text": "MO SPRINGFIELD MO SUBLOT",
            "landCost": 580,
            "ports": ["2"]
        },
        {
            "value": "38420",
            "text": "MO SPRINGFIELD",
            "landCost": 580,
            "ports": ["2"]
        },
        {
            "value": "38421",
            "text": "MO SIKESTON",
            "landCost": 550,
            "ports": ["2"]
        },
        {
            "value": "38422",
            "text": "MS JACKSON",
            "landCost": 480,
            "ports": ["2", "3"]
        },
        {
            "value": "43430",
            "text": "MS Grenada",
            "landCost": 490,
            "ports": ["2", "3"]
        },
        {
            "value": "38423",
            "text": "MT BILLINGS",
            "landCost": 750,
            "ports": ["16"]
        },
        {
            "value": "38424",
            "text": "MT Helena",
            "landCost": 760,
            "ports": ["16"]
        },
        {
            "value": "38425",
            "text": "NC CHINA GROVE",
            "landCost": 380,
            "ports": ["3"]
        },
        {
            "value": "38951",
            "text": "NC CONCORD",
            "landCost": 380,
            "ports": ["3"]
        },
        {
            "value": "38557",
            "text": "NC LUMBERTON NC SUBLOT",
            "landCost": 383,
            "ports": ["3"]
        },
        {
            "value": "38426",
            "text": "NC RALEIGH",
            "landCost": 380,
            "ports": ["3"]
        },
        {
            "value": "41245",
            "text": "NC GASTONIA",
            "landCost": 380,
            "ports": ["3"]
        },
        {
            "value": "41191",
            "text": "NC NC - RALEIGH NORTH",
            "landCost": 380,
            "ports": ["3"]
        },
        {
            "value": "38558",
            "text": "NC LUMBERTON NC SUBLOT",
            "landCost": 383,
            "ports": ["3"]
        },
        {
            "value": "38427",
            "text": "NC MEBANE",
            "landCost": 380,
            "ports": ["3"]
        },
        {
            "value": "38187",
            "text": "NC MOCKSVILLE",
            "landCost": 380,
            "ports": ["3"]
        },
        {
            "value": "41326",
            "text": "ND BISMARCK",
            "landCost": 720,
            "ports": ["1"]
        },
        {
            "value": "38428",
            "text": "NE LINCOLN",
            "landCost": 620,
            "ports": ["2"]
        },
        {
            "value": "38541",
            "text": "NH CANDIA",
            "landCost": 380,
            "ports": ["1"]
        },
        {
            "value": "38474",
            "text": "NJ GLASSBORO EAST",
            "landCost": 320,
            "ports": ["1"]
        },
        {
            "value": "38475",
            "text": "NJ SOMERVILLE",
            "landCost": 320,
            "ports": ["1"]
        },
        {
            "value": "38476",
            "text": "NJ TRENTON",
            "landCost": 320,
            "ports": ["1"]
        },
        {
            "value": "38477",
            "text": "NM ALBUQUERQUE",
            "landCost": 550,
            "ports": ["2"]
        },
        {
            "value": "38478",
            "text": "NV LAS VEGAS",
            "landCost": 450,
            "ports": ["5"]
        },
        {
            "value": "43470",
            "text": "NV Las Vegas West",
            "landCost": 450,
            "ports": ["5"]
        },
        {
            "value": "38479",
            "text": "NV RENO",
            "landCost": 480,
            "ports": ["5"]
        },
        {
            "value": "38480",
            "text": "NY ALBANY",
            "landCost": 360,
            "ports": ["1"]
        },
        {
            "value": "38203",
            "text": "NY BUFFALO",
            "landCost": 380,
            "ports": ["1"]
        },
        {
            "value": "38568",
            "text": "NY BROCTON NY SUBLOT",
            "landCost": 362,
            "ports": ["1"]
        },
        {
            "value": "38481",
            "text": "NY LONG ISLAND",
            "landCost": 330,
            "ports": ["1"]
        },
        {
            "value": "38482",
            "text": "NY SYRACUSE",
            "landCost": 380,
            "ports": ["1"]
        },
        {
            "value": "38483",
            "text": "NY ROCHESTER",
            "landCost": 380,
            "ports": ["1"]
        },
        {
            "value": "38484",
            "text": "NY NEWBURGH",
            "landCost": 340,
            "ports": ["1"]
        },
        {
            "value": "38485",
            "text": "NY ROCHESTER",
            "landCost": 380,
            "ports": ["1"]
        },
        {
            "value": "43560",
            "text": "OH AKRON",
            "landCost": 480,
            "ports": ["1"]
        },
        {
            "value": "38486",
            "text": "OH CLEVELAND WEST",
            "landCost": 480,
            "ports": ["1"]
        },
        {
            "value": "38488",
            "text": "OH Columbus",
            "landCost": 480,
            "ports": ["1"]
        },
        {
            "value": "38543",
            "text": "OH DAYTON",
            "landCost": 480,
            "ports": ["1"]
        },
        {
            "value": "38542",
            "text": "OH CLEVELAND EAST",
            "landCost": 480,
            "ports": ["1"]
        },
        {
            "value": "38489",
            "text": "OK OKLAHOMA CITY",
            "landCost": 550,
            "ports": ["2"]
        },
        {
            "value": "38490",
            "text": "OK TULSA",
            "landCost": 550,
            "ports": ["2"]
        },
        {
            "value": "38491",
            "text": "OR EUGENE",
            "landCost": 420,
            "ports": ["16"]
        },
        {
            "value": "38492",
            "text": "OR PORTLAND NORTH",
            "landCost": 400,
            "ports": ["16"]
        },
        {
            "value": "38493",
            "text": "OR PORTLAND SOUTH",
            "landCost": 400,
            "ports": ["16"]
        },
        {
            "value": "38494",
            "text": "PA PITTSBURGH EAST",
            "landCost": 320,
            "ports": ["1"]
        },
        {
            "value": "38544",
            "text": "PA PHILADELPHIA EAST-SUBLOT",
            "landCost": 320,
            "ports": ["1"]
        },
        {
            "value": "38495",
            "text": "PA CHAMBERSBURG",
            "landCost": 320,
            "ports": ["1"]
        },
        {
            "value": "38496",
            "text": "PA SCRANTON",
            "landCost": 330,
            "ports": ["1"]
        },
        {
            "value": "38497",
            "text": "PA ALTOONA",
            "landCost": 320,
            "ports": ["1"]
        },
        {
            "value": "38498",
            "text": "PA PITTSBURGH NORTH",
            "landCost": 320,
            "ports": ["1"]
        },
        {
            "value": "38499",
            "text": "PA HARRISBURG",
            "landCost": 320,
            "ports": ["1"]
        },
        {
            "value": "38500",
            "text": "PA PHILADELPHIA",
            "landCost": 300,
            "ports": ["1"]
        },
        {
            "value": "38501",
            "text": "PA PITTSBURGH SOUTH",
            "landCost": 320,
            "ports": ["1"]
        },
        {
            "value": "38502",
            "text": "PA YORK HAVEN",
            "landCost": 320,
            "ports": ["1"]
        },
        {
            "value": "38587",
            "text": "RI RI - EXETER",
            "landCost": 380,
            "ports": ["1"]
        },
        {
            "value": "38503",
            "text": "SC COLUMBIA",
            "landCost": 400,
            "ports": ["3"]
        },
        {
            "value": "38504",
            "text": "SC GREER",
            "landCost": 400,
            "ports": ["3"]
        },
        {
            "value": "38188",
            "text": "SC SC - NORTH CHARLESTON",
            "landCost": 400,
            "ports": ["3"]
        },
        {
            "value": "38565",
            "text": "SC Gaston, SC SUBLOT",
            "landCost": 402,
            "ports": ["3"]
        },
        {
            "value": "38554",
            "text": "SC SPARTANBURG SUBLOT",
            "landCost": 402,
            "ports": ["3"]
        },
        {
            "value": "43360",
            "text": "SD Rapid City",
            "landCost": 680,
            "ports": ["2"]
        },
        {
            "value": "38505",
            "text": "TN NASHVILLE",
            "landCost": 480,
            "ports": ["3"]
        },
        {
            "value": "38506",
            "text": "TN KNOXVILLE",
            "landCost": 480,
            "ports": ["3"]
        },
        {
            "value": "38507",
            "text": "TN Memphis",
            "landCost": 480,
            "ports": ["3"]
        },
        {
            "value": "38508",
            "text": "TX ABILENE",
            "landCost": 250,
            "ports": ["2"]
        },
        {
            "value": "38509",
            "text": "TX AMARILLO",
            "landCost": 280,
            "ports": ["2"]
        },
        {
            "value": "38549",
            "text": "TX ANDREWS",
            "landCost": 270,
            "ports": ["2"]
        },
        {
            "value": "38586",
            "text": "TX ANDREWS",
            "landCost": 270,
            "ports": ["2"]
        },
        {
            "value": "38510",
            "text": "TX EL PASO",
            "landCost": 320,
            "ports": ["2"]
        },
        {
            "value": "38577",
            "text": "TX HASLET TX SUBLOT",
            "landCost": 239,
            "ports": ["2"]
        },
        {
            "value": "38511",
            "text": "TX CORPUS CHRISTI",
            "landCost": 220,
            "ports": ["2"]
        },
        {
            "value": "38545",
            "text": "TX CRASHEDTOYS DALLAS",
            "landCost": 200,
            "ports": ["2"]
        },
        {
            "value": "38512",
            "text": "TX DALLAS",
            "landCost": 200,
            "ports": ["2"]
        },
        {
            "value": "38513",
            "text": "TX FT. WORTH",
            "landCost": 200,
            "ports": ["2"]
        },
        {
            "value": "38514",
            "text": "TX HOUSTON",
            "landCost": 180,
            "ports": ["2"]
        },
        {
            "value": "38515",
            "text": "TX LONGVIEW",
            "landCost": 220,
            "ports": ["2"]
        },
        {
            "value": "38516",
            "text": "TX LUFKIN",
            "landCost": 210,
            "ports": ["2"]
        },
        {
            "value": "38517",
            "text": "TX MCALLEN",
            "landCost": 250,
            "ports": ["2"]
        },
        {
            "value": "38518",
            "text": "TX AUSTIN",
            "landCost": 210,
            "ports": ["2"]
        },
        {
            "value": "38559",
            "text": "TX ORMY TX SUBLOT",
            "landCost": 239,
            "ports": ["2"]
        },
        {
            "value": "38547",
            "text": "TX SAN ANTONIO",
            "landCost": 220,
            "ports": ["2"]
        },
        {
            "value": "38552",
            "text": "TX WACO",
            "landCost": 210,
            "ports": ["2"]
        },
        {
            "value": "38560",
            "text": "TX ANTHONY TX SUBLOT",
            "landCost": 239,
            "ports": ["2"]
        },
        {
            "value": "38582",
            "text": "TX WILMER TX SUBLOT",
            "landCost": 239,
            "ports": ["2"]
        },
        {
            "value": "38546",
            "text": "TX DALLAS SOUTH",
            "landCost": 200,
            "ports": ["2"]
        },
        {
            "value": "38564",
            "text": "UT OGDEN SUBLOT",
            "landCost": 583,
            "ports": ["16"]
        },
        {
            "value": "40768",
            "text": "UT UT - SALT LAKE CITY",
            "landCost": 580,
            "ports": ["16"]
        },
        {
            "value": "38519",
            "text": "UT SALT LAKE CITY",
            "landCost": 580,
            "ports": ["16"]
        },
        {
            "value": "38204",
            "text": "VA VA - RICHMOND EAST",
            "landCost": 350,
            "ports": ["1"]
        },
        {
            "value": "38520",
            "text": "VA DANVILLE",
            "landCost": 360,
            "ports": ["1"]
        },
        {
            "value": "38202",
            "text": "VA VA - FREDERICKSBURG",
            "landCost": 350,
            "ports": ["1"]
        },
        {
            "value": "38201",
            "text": "VA VA - FREDERICKSBURG",
            "landCost": 350,
            "ports": ["1"]
        },
        {
            "value": "38521",
            "text": "VA HAMPTON",
            "landCost": 340,
            "ports": ["1"]
        },
        {
            "value": "38522",
            "text": "VA RICHMOND",
            "landCost": 350,
            "ports": ["1"]
        },
        {
            "value": "38580",
            "text": "VT ORLEANS VT SUBLOT",
            "landCost": 390,
            "ports": ["1"]
        },
        {
            "value": "43600",
            "text": "VT RUTLAND",
            "landCost": 390,
            "ports": ["1"]
        },
        {
            "value": "38523",
            "text": "WA SPOKANE",
            "landCost": 420,
            "ports": ["16"]
        },
        {
            "value": "38524",
            "text": "WA NORTH SEATTLE",
            "landCost": 380,
            "ports": ["16"]
        },
        {
            "value": "38525",
            "text": "WA GRAHAM",
            "landCost": 380,
            "ports": ["16"]
        },
        {
            "value": "38526",
            "text": "WA PASCO",
            "landCost": 400,
            "ports": ["16"]
        },
        {
            "value": "38185",
            "text": "WI APPLETON",
            "landCost": 610,
            "ports": ["1"]
        },
        {
            "value": "38184",
            "text": "WI APPLETON",
            "landCost": 610,
            "ports": ["1"]
        },
        {
            "value": "38527",
            "text": "WI MILWAUKEE",
            "landCost": 610,
            "ports": ["1"]
        },
        {
            "value": "42930",
            "text": "WI Milwaukee South",
            "landCost": 610,
            "ports": ["1"]
        },
        {
            "value": "38528",
            "text": "WI MADISON",
            "landCost": 610,
            "ports": ["1"]
        },
        {
            "value": "42730",
            "text": "WI WI - MADISON SOUTH",
            "landCost": 610,
            "ports": ["1"]
        },
        {
            "value": "41038",
            "text": "WI MILWAUKEE NORTH",
            "landCost": 610,
            "ports": ["1"]
        },
        {
            "value": "38529",
            "text": "WI Milwaukee",
            "landCost": 610,
            "ports": ["1"]
        },
        {
            "value": "38581",
            "text": "WI WAUKESHA WI SUBLOT",
            "landCost": 611,
            "ports": ["1"]
        },
        {
            "value": "38530",
            "text": "WV CHARLESTON",
            "landCost": 380,
            "ports": ["1"]
        },
        {
            "value": "38548",
            "text": "WY Casper",
            "landCost": 650,
            "ports": ["2"]
        }
    ],
    "2": [
        // ... (все локации из аукциона "2" остаются без изменений, как в предыдущем ответе)
        {
            "value": "38589",
            "text": "AL Manheim Birmingham",
            "landCost": 460,
            "ports": ["3"]
        },
        {
            "value": "38662",
            "text": "AZ Manheim Arizona",
            "landCost": 490,
            "ports": ["5"]
        },
        {
            "value": "38590",
            "text": "AZ Manheim Phoenix",
            "landCost": 490,
            "ports": ["5"]
        },
        {
            "value": "38591",
            "text": "AZ Manheim Tucson",
            "landCost": 500,
            "ports": ["5"]
        },
        {
            "value": "38592",
            "text": "CA Manheim California",
            "landCost": 340,
            "ports": ["5"]
        },
        {
            "value": "38593",
            "text": "CA Manheim Central California",
            "landCost": 360,
            "ports": ["5"]
        },
        {
            "value": "38594",
            "text": "CA Manheim Riverside",
            "landCost": 350,
            "ports": ["5"]
        },
        {
            "value": "38595",
            "text": "CA Manheim San Diego",
            "landCost": 360,
            "ports": ["5"]
        },
        {
            "value": "38596",
            "text": "CA Manheim San Francisco Bay",
            "landCost": 350,
            "ports": ["5"]
        },
        {
            "value": "38597",
            "text": "CA Manheim Southern California",
            "landCost": 310,
            "ports": ["5"]
        },
        {
            "value": "38598",
            "text": "CO Manheim Denver",
            "landCost": 650,
            "ports": ["2"]
        },
        {
            "value": "38600",
            "text": "FL Manheim Central Florida",
            "landCost": 280,
            "ports": ["4"]
        },
        {
            "value": "38601",
            "text": "FL Manheim Daytona Beach",
            "landCost": 280,
            "ports": ["4"]
        },
        {
            "value": "38602",
            "text": "FL Manheim Fort Lauderdale",
            "landCost": 260,
            "ports": ["4"]
        },
        {
            "value": "38603",
            "text": "FL Manheim Fort Myers",
            "landCost": 280,
            "ports": ["4"]
        },
        {
            "value": "38604",
            "text": "FL Manheim Jacksonville",
            "landCost": 290,
            "ports": ["4"]
        },
        {
            "value": "38605",
            "text": "FL Manheim Lakeland",
            "landCost": 270,
            "ports": ["4"]
        },
        {
            "value": "38606",
            "text": "FL Manheim Orlando",
            "landCost": 280,
            "ports": ["4"]
        },
        {
            "value": "38607",
            "text": "FL Manheim Palm Beach",
            "landCost": 260,
            "ports": ["4"]
        },
        {
            "value": "38608",
            "text": "FL Manheim Pensacola",
            "landCost": 320,
            "ports": ["4"]
        },
        {
            "value": "38609",
            "text": "FL Manheim St Pete",
            "landCost": 270,
            "ports": ["4"]
        },
        {
            "value": "38610",
            "text": "FL Manheim Tampa",
            "landCost": 270,
            "ports": ["4"]
        },
        {
            "value": "38611",
            "text": "GA Manheim Atlanta",
            "landCost": 390,
            "ports": ["3"]
        },
        {
            "value": "38612",
            "text": "GA Manheim Georgia",
            "landCost": 400,
            "ports": ["3"]
        },
        {
            "value": "38614",
            "text": "IL Manheim Arena Illinois",
            "landCost": 650,
            "ports": ["1"]
        },
        {
            "value": "38615",
            "text": "IL Manheim Chicago",
            "landCost": 650,
            "ports": ["1"]
        },
        {
            "value": "38616",
            "text": "IN Manheim Indianapolis",
            "landCost": 560,
            "ports": ["1"]
        },
        {
            "value": "38617",
            "text": "IN Manheim Louisville",
            "landCost": 530,
            "ports": ["3", "1"]
        },
        {
            "value": "38618",
            "text": "LA Manheim Lafayette",
            "landCost": 370,
            "ports": ["2"]
        },
        {
            "value": "38619",
            "text": "LA Manheim New Orleans",
            "landCost": 360,
            "ports": ["2"]
        },
        {
            "value": "38667",
            "text": "MA Manheim New England",
            "landCost": 390,
            "ports": ["1"]
        },
        {
            "value": "40597",
            "text": "MD 4805 Philadelphia Rd, Belcamp, MD",
            "landCost": 330,
            "ports": ["1"]
        },
        {
            "value": "38666",
            "text": "MD Manheim Baltimore-Washington",
            "landCost": 330,
            "ports": ["1"]
        },
        {
            "value": "38620",
            "text": "MI Manheim Detroit",
            "landCost": 530,
            "ports": ["1"]
        },
        {
            "value": "38621",
            "text": "MI Manheim Flint (tra)",
            "landCost": 540,
            "ports": ["1"]
        },
        {
            "value": "38622",
            "text": "MN Manheim Minneapolis",
            "landCost": 660,
            "ports": ["1"]
        },
        {
            "value": "38623",
            "text": "MN Manheim Northstar Minnesota",
            "landCost": 670,
            "ports": ["1"]
        },
        {
            "value": "38624",
            "text": "MO Manheim Kansas City",
            "landCost": 590,
            "ports": ["2"]
        },
        {
            "value": "38625",
            "text": "MO Manheim Springfield",
            "landCost": 590,
            "ports": ["2"]
        },
        {
            "value": "38626",
            "text": "MO Manheim St Louis",
            "landCost": 590,
            "ports": ["2"]
        },
        {
            "value": "38627",
            "text": "MS Manheim Mississippi",
            "landCost": 490,
            "ports": ["2", "3"]
        },
        {
            "value": "38628",
            "text": "NC Manheim Charlotte",
            "landCost": 390,
            "ports": ["3"]
        },
        {
            "value": "38629",
            "text": "NC Manheim North Carolina",
            "landCost": 390,
            "ports": ["3"]
        },
        {
            "value": "38630",
            "text": "NC Manheim Statesville",
            "landCost": 390,
            "ports": ["3"]
        },
        {
            "value": "38631",
            "text": "NE Manheim Omaha",
            "landCost": 630,
            "ports": ["2"]
        },
        {
            "value": "38632",
            "text": "NJ Manheim New Jersey",
            "landCost": 330,
            "ports": ["1"]
        },
        {
            "value": "38633",
            "text": "NJ Manheim Ny Metro Skyline",
            "landCost": 340,
            "ports": ["1"]
        },
        {
            "value": "38634",
            "text": "NM Manheim New Mexico",
            "landCost": 560,
            "ports": ["2"]
        },
        {
            "value": "38635",
            "text": "NV Manheim Nevada",
            "landCost": 460,
            "ports": ["5"]
        },
        {
            "value": "38636",
            "text": "NY Manheim Albany",
            "landCost": 370,
            "ports": ["1"]
        },
        {
            "value": "38637",
            "text": "NY Manheim New York",
            "landCost": 340,
            "ports": ["1"]
        },
        {
            "value": "38638",
            "text": "OH Manheim Cincinnati",
            "landCost": 490,
            "ports": ["1"]
        },
        {
            "value": "38668",
            "text": "OH Manheim Cleveland",
            "landCost": 490,
            "ports": ["1"]
        },
        {
            "value": "38639",
            "text": "OH Manheim Ohio",
            "landCost": 480,
            "ports": ["1"]
        },
        {
            "value": "38640",
            "text": "OK Manheim Tulsa",
            "landCost": 560,
            "ports": ["2"]
        },
        {
            "value": "38641",
            "text": "OR Manheim Portland",
            "landCost": 410,
            "ports": ["16"]
        },
        {
            "value": "38642",
            "text": "PA Manheim Keystone Pennsylvania",
            "landCost": 330,
            "ports": ["1"]
        },
        {
            "value": "38643",
            "text": "PA Manheim Pennsylvania",
            "landCost": 320,
            "ports": ["1"]
        },
        {
            "value": "38644",
            "text": "PA Manheim Philadelphia",
            "landCost": 320,
            "ports": ["1"]
        },
        {
            "value": "38645",
            "text": "PA Manheim Pittsburgh",
            "landCost": 330,
            "ports": ["1"]
        },
        {
            "value": "38646",
            "text": "SC Manheim Darlington",
            "landCost": 410,
            "ports": ["3"]
        },
        {
            "value": "38647",
            "text": "SC Manheim Greer",
            "landCost": 400,
            "ports": ["3"]
        },
        {
            "value": "38648",
            "text": "TN Manheim Nashville",
            "landCost": 490,
            "ports": ["3"]
        },
        {
            "value": "38649",
            "text": "TX Manheim Dallas",
            "landCost": 210,
            "ports": ["2"]
        },
        {
            "value": "38650",
            "text": "TX Manheim Dallas-Fort Worth",
            "landCost": 210,
            "ports": ["2"]
        },
        {
            "value": "38651",
            "text": "TX Manheim El Paso",
            "landCost": 330,
            "ports": ["2"]
        },
        {
            "value": "38652",
            "text": "TX Manheim Houston",
            "landCost": 280,
            "ports": ["2"]
        },
        {
            "value": "38653",
            "text": "TX Manheim San Antonio",
            "landCost": 230,
            "ports": ["2"]
        },
        {
            "value": "38670",
            "text": "TX Manheim South Houston",
            "landCost": 290,
            "ports": ["2"]
        },
        {
            "value": "38654",
            "text": "TX Manheim Texas Hobby",
            "landCost": 280,
            "ports": ["2"]
        },
        {
            "value": "38655",
            "text": "UT Manheim Utah",
            "landCost": 590,
            "ports": ["16"]
        },
        {
            "value": "38656",
            "text": "VA Manheim Fredericksburg",
            "landCost": 360,
            "ports": ["1"]
        },
        {
            "value": "38657",
            "text": "VA Manheim Harrisonburg",
            "landCost": 370,
            "ports": ["1"]
        },
        {
            "value": "38658",
            "text": "WA Manheim Seattle",
            "landCost": 400,
            "ports": ["16"]
        },
        {
            "value": "38659",
            "text": "WI Manheim Milwaukee",
            "landCost": 620,
            "ports": ["1"]
        },
        {
            "value": "38660",
            "text": "WV Manheim Casper (TRA)",
            "landCost": 660,
            "ports": ["2"]
        }
    ],
    "3": [
        {
            "value": "38700",
            "text": "IL IAAI Chicago",
            "landCost": 630,
            "ports": ["1"]
        },
        {
            "value": "38701",
            "text": "TX IAAI Houston",
            "landCost": 180,
            "ports": ["2"]
        },
        {
            "value": "38702",
            "text": "CA IAAI Los Angeles",
            "landCost": 330,
            "ports": ["5"]
        },
        {
            "value": "38703",
            "text": "GA IAAI Atlanta",
            "landCost": 380,
            "ports": ["3"]
        },
        {
            "value": "38704",
            "text": "FL IAAI Miami",
            "landCost": 250,
            "ports": ["4"]
        },
        {
            "value": "38577",
            "text": "TX HASLET TX SUBLOT",
            "landCost": 239,
            "ports": ["2"]
        },
        {
            "value": "38562",
            "text": "CO COLORADO SPRINGS CO SUBLOT",
            "landCost": 636,
            "ports": ["2"]
        },
        {
            "value": "38579",
            "text": "CO COLORADO SPRINGS CO SUBLOT",
            "landCost": 636,
            "ports": ["2"]
        },
        {
            "value": "38572",
            "text": "CT BERLIN CT SUBLOT",
            "landCost": 350,
            "ports": ["1"]
        },
        {
            "value": "38580",
            "text": "VT ORLEANS VT SUBLOT",
            "landCost": 390,
            "ports": ["1"]
        }
    ],
    "30": [
        {
            "value": "38571",
            "text": "AL BIRMINGHAM AL SUBLOT",
            "landCost": 451,
            "ports": ["3"]
        },
        {
            "value": "38574",
            "text": "CA SACRAMENTO CA SUBLOT",
            "landCost": 346,
            "ports": ["5"]
        },
        {
            "value": "38573",
            "text": "CA LANCASTER CA SUBLOT",
            "landCost": 346,
            "ports": ["5"]
        },
        {
            "value": "38576",
            "text": "CA SANTA PAULA CA SUBLOT",
            "landCost": 346,
            "ports": ["5"]
        },
        {
            "value": "38553",
            "text": "CA Sun Valley SUBLOT",
            "landCost": 346,
            "ports": ["5"]
        },
        {
            "value": "38562",
            "text": "CO COLORADO SPRINGS CO SUBLOT",
            "landCost": 636,
            "ports": ["2"]
        },
        {
            "value": "38579",
            "text": "CO COLORADO SPRINGS CO SUBLOT",
            "landCost": 636,
            "ports": ["2"]
        },
        {
            "value": "38572",
            "text": "CT BERLIN CT SUBLOT",
            "landCost": 350,
            "ports": ["1"]
        },
        {
            "value": "38567",
            "text": "GA METTER GA SUBLOT",
            "landCost": 385,
            "ports": ["3"]
        },
        {
            "value": "38569",
            "text": "IL LOUIS IL SUBLOT",
            "landCost": 614,
            "ports": ["1"]
        },
        {
            "value": "38561",
            "text": "LA TICKFAW LA SUBLOT",
            "landCost": 366,
            "ports": ["2"]
        },
        {
            "value": "38556",
            "text": "MD BALTIMORE MD SUBLOT",
            "landCost": 324,
            "ports": ["1"]
        },
        {
            "value": "38555",
            "text": "MD WHITE MARSH SUBLOT",
            "landCost": 324,
            "ports": ["1"]
        },
        {
            "value": "38570",
            "text": "ME GRAY ME SUBLOT",
            "landCost": 420,
            "ports": ["1"]
        },
        {
            "value": "38578",
            "text": "ME ORONO ME SUBLOT",
            "landCost": 420,
            "ports": ["1"]
        },
        {
            "value": "38566",
            "text": "MN HAM LAKE MN SUBLOT",
            "landCost": 654,
            "ports": ["1"]
        },
        {
            "value": "38583",
            "text": "MO SPRINGFIELD MO SUBLOT",
            "landCost": 580,
            "ports": ["2"]
        },
        {
            "value": "38557",
            "text": "NC LUMBERTON NC SUBLOT",
            "landCost": 383,
            "ports": ["3"]
        },
        {
            "value": "38558",
            "text": "NC LUMBERTON NC SUBLOT",
            "landCost": 383,
            "ports": ["3"]
        },
        {
            "value": "38568",
            "text": "NY BROCTON NY SUBLOT",
            "landCost": 362,
            "ports": ["1"]
        },
        {
            "value": "38544",
            "text": "PA PHILADELPHIA EAST-SUBLOT",
            "landCost": 320,
            "ports": ["1"]
        },
        {
            "value": "38565",
            "text": "SC Gaston, SC SUBLOT",
            "landCost": 402,
            "ports": ["3"]
        },
        {
            "value": "38554",
            "text": "SC SPARTANBURG SUBLOT",
            "landCost": 402,
            "ports": ["3"]
        },
        {
            "value": "38577",
            "text": "TX HASLET TX SUBLOT",
            "landCost": 239,
            "ports": ["2"]
        },
        {
            "value": "38559",
            "text": "TX ORMY TX SUBLOT",
            "landCost": 239,
            "ports": ["2"]
        },
        {
            "value": "38560",
            "text": "TX ANTHONY TX SUBLOT",
            "landCost": 239,
            "ports": ["2"]
        },
        {
            "value": "38582",
            "text": "TX WILMER TX SUBLOT",
            "landCost": 239,
            "ports": ["2"]
        },
        {
            "value": "38564",
            "text": "UT OGDEN SUBLOT",
            "landCost": 583,
            "ports": ["16"]
        },
        {
            "value": "38580",
            "text": "VT ORLEANS VT SUBLOT",
            "landCost": 390,
            "ports": ["1"]
        },
        {
            "value": "38581",
            "text": "WI WAUKESHA WI SUBLOT",
            "landCost": 611,
            "ports": ["1"]
        }
    ],
    "31": [
        {
            "value": "38577",
            "text": "TX HASLET TX SUBLOT",
            "landCost": 239,
            "ports": ["2"]
        },
        {
            "value": "38562",
            "text": "CO COLORADO SPRINGS CO SUBLOT",
            "landCost": 636,
            "ports": ["2"]
        },
        {
            "value": "38579",
            "text": "CO COLORADO SPRINGS CO SUBLOT",
            "landCost": 636,
            "ports": ["2"]
        },
        {
            "value": "38572",
            "text": "CT BERLIN CT SUBLOT",
            "landCost": 350,
            "ports": ["1"]
        },
        {
            "value": "38580",
            "text": "VT ORLEANS VT SUBLOT",
            "landCost": 390,
            "ports": ["1"]
        }
    ],
    "32": [
        {
            "value": "38377",
            "text": "AB CALGARY",
            "landCost": 1880,
            "ports": ["6"]
        },
        {
            "value": "38378",
            "text": "AB EDMONTON",
            "landCost": 1920,
            "ports": ["6"]
        },
        {
            "value": "44200",
            "text": "BC ICBC - Abbotsford",
            "landCost": 2500,
            "ports": ["6"]
        },
        {
            "value": "44220",
            "text": "BC ICBC Nanaimo",
            "landCost": 2600,
            "ports": ["6"]
        },
        {
            "value": "44240",
            "text": "BC ICBC Penticton Towing",
            "landCost": 2650,
            "ports": ["6"]
        },
        {
            "value": "44210",
            "text": "BC ICBC Vernon",
            "landCost": 2550,
            "ports": ["6"]
        },
        {
            "value": "44230",
            "text": "BC ICBC Victoria",
            "landCost": 2600,
            "ports": ["6"]
        },
        {
            "value": "44190",
            "text": "BC ICBC-QUEENSBOROUGH",
            "landCost": 2480,
            "ports": ["6"]
        },
        {
            "value": "44170",
            "text": "BC Vancouver",
            "landCost": 2480,
            "ports": ["6"]
        },
        {
            "value": "44090",
            "text": "MB MPI-Blumenort",
            "landCost": 1680,
            "ports": ["6"]
        },
        {
            "value": "44060",
            "text": "MB ICBC Brandon",
            "landCost": 1720,
            "ports": ["6"]
        },
        {
            "value": "44070",
            "text": "MB ICBC Portage la Prairie",
            "landCost": 1670,
            "ports": ["6"]
        },
        {
            "value": "44080",
            "text": "MB ICBC Trehernre",
            "landCost": 1690,
            "ports": ["6"]
        },
        {
            "value": "44050",
            "text": "MB ICBC Winnipeg",
            "landCost": 1650,
            "ports": ["6"]
        },
        {
            "value": "38384",
            "text": "NB MONCTON",
            "landCost": 920,
            "ports": ["6"]
        },
        {
            "value": "44160",
            "text": "NF St-Johns",
            "landCost": 1100,
            "ports": ["6"]
        },
        {
            "value": "38379",
            "text": "NS HALIFAX",
            "landCost": 950,
            "ports": ["6"]
        },
        {
            "value": "44250",
            "text": "ON COOKSTOWN",
            "landCost": 800,
            "ports": ["6"]
        },
        {
            "value": "43990",
            "text": "ON Hamilton/Stoney Creek",
            "landCost": 790,
            "ports": ["6"]
        },
        {
            "value": "43970",
            "text": "ON London",
            "landCost": 820,
            "ports": ["6"]
        },
        {
            "value": "43980",
            "text": "ON Toronto",
            "landCost": 780,
            "ports": ["6"]
        },
        {
            "value": "43960",
            "text": "ON Ottawa",
            "landCost": 850,
            "ports": ["6"]
        },
        {
            "value": "44000",
            "text": "QC Montreal",
            "landCost": 870,
            "ports": ["6"]
        },
        {
            "value": "44010",
            "text": "SK Regina",
            "landCost": 1750,
            "ports": ["6"]
        },
        {
            "value": "44020",
            "text": "SK Saskatoon",
            "landCost": 1780,
            "ports": ["6"]
        }
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
