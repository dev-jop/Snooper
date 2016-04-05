materialAdmin

    .controller('likesAndInterests', [function() {
        var self = this;

        self.example11model = [];

        self.example11data = [
            {id: 1, label: "David", gender: 'M'},
            {id: 2, label: "Jhon", gender: 'M'},
            {id: 3, label: "Lisa", gender: 'F'},
            {id: 4, label: "Nicole", gender: 'F'},
            {id: 5, label: "Danny", gender: 'M'}
        ];

        self.example11settings = {
            groupByTextProvider: function(groupValue) {
                if (groupValue === 'M') {
                    return 'Male';
                } else {
                    return 'Female';
                }
            }
        };

        self.example12model = [];
        // ! IMPORTANT !
        self.example12data = [
            {id: 1, label: "David"},
            {id: 2, label: "Jhon"},
            {id: 3, label: "Danny"}
        ];
        self.example12settings = {selectionLimit: 1};

        self.example1model = [];
        self.example1data = [
            {id: 1, label: "David"},
            {id: 2, label: "Jhon"},
            {id: 3, label: "Danny"}
        ];

        self.modernBrowsers = [
            { name: "Browsers",  msGroup: true },
            { icon: "<img src=[..]/opera.png.. />",               name: "Opera",              maker: "(Opera Software)",        ticked: false  },
            { icon: "<img src=[..]/internet_explorer.png.. />",   name: "Internet Explorer",  maker: "(Microsoft)",             ticked: false },
            { icon: "<img src=[..]/firefox-icon.png.. />",        name: "Firefox",            maker: "(Mozilla Foundation)",    ticked: false  },
            { icon: "<img src=[..]/safari_browser.png.. />",      name: "Safari",             maker: "(Apple)",                 ticked: false },
            { icon: "<img src=[..]/chrome.png.. />",              name: "Chrome",             maker: "(Google)",                ticked: false  },
            { msGroup: false }
        ];

        self.passData = [
            { label: "My Group", nsGroup: true },
            { label: "First Choice", value: 1},
            { label: "Second Choice", value: 2},
            { label: "Third Choice", value: 3},
            { label: "Fourth Choice", value: 4},
            { label: "Fifth Choice", value: 5},
            { msGroup: false }
        ];

        self.likesinterests = [
            {id: 1, label:"Addict", value:1, group:"A1"},
            {id: 2, label:"High interest", value:2, group:"A1"},
            {id: 3, label:"Normal interest", value:3, group:"A1"},
            {id: 4, label:"Low interest", value:4, group:"A1"},

            {id: 5, label:"1", value:1, group:"A2"},
            {id: 6, label:"2", value:2, group:"A2"},
            {id: 7, label:"3", value:3, group:"A2"},
            {id: 8, label:"4", value:4, group:"A2"},
            {id: 9, label:"5", value:5, group:"A2"},
            {id: 10, label:"6", value:6, group:"A2"},
            {id: 11, label:"7", value:7, group:"A2"},

            {id: 12, label:"Running", value:1, group:"A3"},
            {id: 13, label:"Walking", value:2, group:"A3"},
            {id: 14, label:"Gym", value:3, group:"A3"},
            {id: 15, label:"Weightlifting", value:4, group:"A3"},
            {id: 16, label:"Cycling", value:5, group:"A3"},
            {id: 17, label:"Rugby", value:6, group:"A3"},
            {id: 18, label:"Cricket", value:7, group:"A3"},
            {id: 19, label:"Swimming", value:8, group:"A3"},
            {id: 20, label:"Paddle sports", value:9, group:"A3"},
            {id: 21, label:"Soccer", value:10, group:"A3"},
            {id: 22, label:"Hockey", value:11, group:"A3"},
            {id: 23, label:"Basketball", value:12, group:"A3"},
            {id: 24, label:"Soft ball", value:13, group:"A3"},
            {id: 25, label:"Climbing", value:14, group:"A3"},
            {id: 26, label:"Combat sport", value:15, group:"A3"},
            {id: 27, label:"Dance", value:16, group:"A3"},
            {id: 28, label:"Equine sports", value:17, group:"A3"},
            {id: 29, label:"Golf", value:18, group:"A3"},
            {id: 30, label:"Gymnastics", value:19, group:"A3"},
            {id: 31, label:"Sailing", value:20, group:"A3"},
            {id: 32, label:"Snow sports", value:21, group:"A3"},
            {id: 33, label:"Lacross", value:22, group:"A3"},
            {id: 34, label:"Motorized sports", value:23, group:"A3"},
            {id: 35, label:"Other", value:24, group:"A3"},

            {id: 36, label:"Running", value:1, group:"A4"},
            {id: 37, label:"Walking", value:2, group:"A4"},
            {id: 38, label:"Gym", value:3, group:"A4"},
            {id: 39, label:"Weightlifting", value:4, group:"A4"},
            {id: 40, label:"Cycling", value:5, group:"A4"},
            {id: 41, label:"Rugby", value:6, group:"A4"},
            {id: 42, label:"Cricket", value:7, group:"A4"},
            {id: 43, label:"Swimming", value:8, group:"A4"},
            {id: 44, label:"Paddle sports", value:9, group:"A4"},
            {id: 45, label:"Soccer", value:10, group:"A4"},
            {id: 46, label:"Hockey", value:11, group:"A4"},
            {id: 47, label:"Basketball", value:12, group:"A4"},
            {id: 48, label:"Soft ball", value:13, group:"A4"},
            {id: 49, label:"Climbing", value:14, group:"A4"},
            {id: 50, label:"Combat sport", value:15, group:"A4"},
            {id: 51, label:"Dance", value:16, group:"A4"},
            {id: 52, label:"Equine sports", value:17, group:"A4"},
            {id: 53, label:"Golf", value:18, group:"A4"},
            {id: 54, label:"Gymnastics", value:19, group:"A4"},
            {id: 55, label:"Sailing", value:20, group:"A4"},
            {id: 56, label:"Snow sports", value:21, group:"A4"},
            {id: 57, label:"Lacross", value:22, group:"A4"},
            {id: 58, label:"Motorized sports", value:23, group:"A4"},
            {id: 59, label:"Other", value:24, group:"A4"},

            {id: 60, label:"1 per week", value:1, group:"A5"},
            {id: 61, label:"at least one per month", value:2, group:"A5"},
            {id: 62, label:"1 per month", value:3, group:"A5"},
            {id: 63, label:"1 every two months", value:4, group:"A5"},
            {id: 64, label:"1 every six months", value:5, group:"A5"},
            {id: 65, label:"1 per year", value:6, group:"A5"},
            {id: 66, label:"None", value:7, group:"A5"},

            {id: 67, label:"at least once per week", value:1, group:"A6"},
            {id: 68, label:"at least once per month", value:2, group:"A6"},
            {id: 69, label:"once per month", value:3, group:"A6"},
            {id: 70, label:"once every two months", value:4, group:"A6"},
            {id: 71, label:"once every six months", value:5, group:"A6"},
            {id: 72, label:"once per year", value:6, group:"A6"},
            {id: 73, label:"Never", value:7, group:"A6"},

            {id: 74, label:"at least once per week", value:1, group:"A7"},
            {id: 75, label:"at least once per month", value:2, group:"A7"},
            {id: 76, label:"once per month", value:3, group:"A7"},
            {id: 77, label:"once every two months", value:4, group:"A7"},
            {id: 78, label:"once every six months", value:5, group:"A7"},
            {id: 79, label:"once per year", value:6, group:"A7"},
            {id: 80, label:"Never", value:7, group:"A7"},

            {id: 81, label:"Addict", value:1, group:"B1"},
            {id: 82, label:"High interest", value:2, group:"B1"},
            {id: 83, label:"Normal interest", value:3, group:"B1"},
            {id: 84, label:"Low interest", value:4, group:"B1"},

            {id: 85, label:"Make-up", value:1, group:"B2"},
            {id: 86, label:"Hair care", value:2, group:"B2"},
            {id: 87, label:"Face care", value:3, group:"B2"},
            {id: 88, label:"Body lotions", value:4, group:"B2"},
            {id: 89, label:"Slimming", value:5, group:"B2"},
            {id: 90, label:"Sun care", value:6, group:"B2"},
            {id: 91, label:"Tanning", value:7, group:"B2"},
            {id: 92, label:"Perfumes", value:8, group:"B2"},

            {id: 93, label:"Woolworthes", value:1, group:"B3"},
            {id: 94, label:"Coles", value:2, group:"B3"},
            {id: 95, label:"IGA", value:3, group:"B3"},
            {id: 96, label:"Chemist Warehouse", value:4, group:"B3"},
            {id: 97, label:"Amcal", value:5, group:"B3"},
            {id: 98, label:"Chemmart", value:6, group:"B3"},
            {id: 99, label:"Priceline", value:7, group:"B3"},
            {id: 100, label:"Terry White Chemists", value:8, group:"B3"},
            {id: 101, label:"Specsavers", value:9, group:"B3"},
            {id: 102, label:"Guardian", value:10, group:"B3"},
            {id: 103, label:"Discount Drug Stores", value:11, group:"B3"},
            {id: 104, label:"Good Price Pharmacy Warehouse", value:12, group:"B3"},
            {id: 105, label:"The Body shop", value:13, group:"B3"},
            {id: 106, label:"Price attack", value:14, group:"B3"},
            {id: 107, label:"Price attack", value:15, group:"B3"},
            {id: 108, label:"Mecca cosmetica", value:16, group:"B3"},
            {id: 109, label:"Other", value:17, group:"B3"},

            {id: 110, label:"Addict", value:1, group:"C1"},
            {id: 111, label:"High interest", value:2, group:"C1"},
            {id: 112, label:"Normal interest", value:3, group:"C1"},
            {id: 113, label:"Low interest", value:4, group:"C1"},

            {id: 114, label:"Vitamins", value:1, group:"C2"},
            {id: 115, label:"Slimming", value:2, group:"C2"},
            {id: 116, label:"Food supplements", value:3, group:"C2"},

            {id: 117, label:"Woolworthes", value:1, group:"C3"},
            {id: 118, label:"Coles", value:2, group:"C3"},
            {id: 119, label:"IGA", value:3, group:"C3"},
            {id: 120, label:"Chemist Warehouse", value:4, group:"C3"},
            {id: 121, label:"Amcal", value:5, group:"C3"},
            {id: 122, label:"Chemmart", value:6, group:"C3"},
            {id: 123, label:"Priceline", value:7, group:"C3"},
            {id: 124, label:"Terry White Chemists", value:8, group:"C3"},
            {id: 125, label:"Specsavers", value:9, group:"C3"},
            {id: 126, label:"Guardian", value:10, group:"C3"},
            {id: 127, label:"Discount Drug Stores", value:11, group:"C3"},
            {id: 128, label:"Good Price Pharmacy Warehouse", value:12, group:"C3"},

            {id: 129, label:"Addict", value:1, group:"D1"},
            {id: 130, label:"High interest", value:2, group:"D1"},
            {id: 131, label:"Normal interest", value:3, group:"D1"},
            {id: 132, label:"Low interest", value:4, group:"D1"},

            {id: 133, label:"Addict", value:1, group:"D2"},
            {id: 134, label:"High interest", value:2, group:"D2"},
            {id: 135, label:"Normal interest", value:3, group:"D2"},
            {id: 136, label:"Low interest", value:4, group:"D2"},

            {id: 137, label:"Luxury & spa", value:1, group:"D3"},
            {id: 138, label:"Backpacker and adventure", value:2, group:"D3"},
            {id: 139, label:"Family resort", value:3, group:"D3"},
            {id: 140, label:"Standard", value:4, group:"D3"},
            {id: 141, label:"City trips", value:5, group:"D3"},

            {id: 142, label:"Addict", value:1, group:"E1"},
            {id: 143, label:"High interest", value:2, group:"E1"},
            {id: 144, label:"Normal interest", value:3, group:"E1"},
            {id: 145, label:"Low interest", value:4, group:"E1"},

            {id: 146, label:"Almost every day", value:1, group:"E2"},
            {id: 147, label:"Once or twice a week", value:2, group:"E2"},
            {id: 148, label:"Never", value:3, group:"E2"},

            {id: 149, label:"Almost every day", value:1, group:"E3"},
            {id: 150, label:"Once or twice a week", value:2, group:"E3"},
            {id: 151, label:"Once a month", value:3, group:"E3"},
            {id: 152, label:"Once in a while", value:4, group:"E3"},
            {id: 153, label:"Never", value:5, group:"E3"},

            {id: 154, label:"Almost every day", value:1, group:"E4"},
            {id: 155, label:"Once or twice a week", value:2, group:"E4"},
            {id: 156, label:"Once a month", value:3, group:"E4"},
            {id: 157, label:"Once in a while", value:4, group:"E4"},
            {id: 158, label:"Never", value:5, group:"E4"},

            {id: 159, label:"Super healthy", value:1, group:"E5"},
            {id: 160, label:"Healty", value:2, group:"E5"},
            {id: 161, label:"Normal", value:3, group:"E5"},
            {id: 162, label:"Not healthy enough", value:4, group:"E5"},

            {id: 163, label:"Super food", value:1, group:"E6"},
            {id: 164, label:"Pre-made dishes", value:2, group:"E6"},
            {id: 165, label:"Vegan", value:3, group:"E6"},
            {id: 166, label:"Paleo", value:4, group:"E6"},
            {id: 167, label:"Organic", value:5, group:"E6"},
            {id: 168, label:"Private Labels (retailers’ brands)", value:6, group:"E6"},

            {id: 169, label:"McDonalds", value:1, group:"E7"},
            {id: 170, label:"Domino’s pizza", value:2, group:"E7"},
            {id: 171, label:"Hungry Jacks", value:3, group:"E7"},
            {id: 172, label:"Burger King", value:4, group:"E7"},
            {id: 173, label:"Red Rooster", value:5, group:"E7"},
            {id: 174, label:"Pizza Hut", value:6, group:"E7"},
            {id: 175, label:"Subway", value:7, group:"E7"},
            {id: 176, label:"KFC", value:8, group:"E7"},
            {id: 177, label:"Krispy Kreme Doughnut", value:9, group:"E7"},
            {id: 178, label:"Pie Face", value:10, group:"E7"},
            {id: 179, label:"Other", value:11, group:"E7"},
            {id: 180, label:"None", value:12, group:"E7"},

            {id: 181, label:"Never", value:1, group:"F1"},
            {id: 182, label:"Rarely", value:2, group:"F1"},
            {id: 183, label:"Occasionally", value:3, group:"F1"},
            {id: 184, label:"Regularly", value:4, group:"F1"},
            {id: 185, label:"Daily", value:5, group:"F1"},

            {id: 186, label:"Never", value:1, group:"F2"},
            {id: 187, label:"Rarely", value:2, group:"F2"},
            {id: 188, label:"Occasionally", value:3, group:"F2"},
            {id: 189, label:"Regularly", value:4, group:"F2"},
            {id: 190, label:"Daily", value:5, group:"F2"},

            {id: 191, label:"Never", value:1, group:"F3"},
            {id: 192, label:"Rarely", value:2, group:"F3"},
            {id: 193, label:"Occasionally", value:3, group:"F3"},
            {id: 194, label:"Regularly", value:4, group:"F3"},
            {id: 195, label:"Daily", value:5, group:"F3"},

            {id: 196, label:"Never", value:1, group:"F4"},
            {id: 197, label:"Rarely", value:2, group:"F4"},
            {id: 198, label:"Occasionally", value:3, group:"F4"},
            {id: 199, label:"Regularly", value:4, group:"F4"},
            {id: 200, label:"Daily", value:5, group:"F4"},

            {id: 201, label:"Never", value:1, group:"F5"},
            {id: 202, label:"Rarely", value:2, group:"F5"},
            {id: 203, label:"Occasionally", value:3, group:"F5"},
            {id: 204, label:"Regularly", value:4, group:"F5"},
            {id: 205, label:"Daily", value:5, group:"F5"},

            {id: 206, label:"High interest", value:1, group:"G1"},
            {id: 207, label:"Normal interest", value:2, group:"G1"},
            {id: 208, label:"Low interest", value:3, group:"G1"},
            {id: 209, label:"No interest", value:4, group:"G1"},

            {id: 210, label:"Never", value:1, group:"G2"},
            {id: 211, label:"Rarely", value:2, group:"G2"},
            {id: 212, label:"Occasionally", value:3, group:"G2"},
            {id: 213, label:"Regularly", value:4, group:"G2"},
            {id: 214, label:"Daily", value:5, group:"G2"},

            {id: 215, label:"High interest", value:1, group:"G3"},
            {id: 216, label:"Normal interest", value:2, group:"G3"},
            {id: 217, label:"Low interest", value:3, group:"G3"},
            {id: 218, label:"No interest", value:4, group:"G3"},

            {id: 219, label:"Commonwealth bank", value:1, group:"G4"},
            {id: 220, label:"ANZ", value:2, group:"G4"},
            {id: 221, label:"Westpac", value:3, group:"G4"},
            {id: 222, label:"Citibank", value:4, group:"G4"},
            {id: 223, label:"HSBC", value:5, group:"G4"},
            {id: 224, label:"ING", value:6, group:"G4"},
            {id: 225, label:"Other", value:7, group:"G4"},

            {id: 226, label:"Cat", value:1, group:"H1"},
            {id: 227, label:"Dog", value:2, group:"H1"},
            {id: 228, label:"Fish", value:3, group:"H1"},
            {id: 229, label:"Turtle", value:4, group:"H1"},
            {id: 230, label:"Horse", value:5, group:"H1"},
            {id: 231, label:"Rabbit", value:6, group:"H1"},
            {id: 232, label:"Hamster", value:7, group:"H1"},
            {id: 233, label:"Guinea pig", value:8, group:"H1"},
            {id: 234, label:"Birds", value:9, group:"H1"},
            {id: 235, label:"Chicken", value:10, group:"H1"},
            {id: 236, label:"Mouse or rats", value:11, group:"H1"},
            {id: 237, label:"Snakes, lizards and other reptiles", value:12, group:"H1"},
            {id: 238, label:"Spider or insects", value:13, group:"H1"},
            {id: 239, label:"Other", value:14, group:"H1"},

            {id: 240, label:"Addict", value:1, group:"I1"},
            {id: 241, label:"High interest", value:2, group:"I1"},
            {id: 242, label:"Normal interest", value:3, group:"I1"},
            {id: 243, label:"Low interest", value:4, group:"I1"},
            {id: 244, label:"No interest", value:5, group:"I1"},

            {id: 245, label:"Yes – what is it?", value:1, group:"J1"},
            {id: 246, label:"No", value:2, group:"J1"},

            {id: 247, label:"Never", value:1, group:"J2"},
            {id: 248, label:"Rarely", value:2, group:"J2"},
            {id: 249, label:"Occasionally", value:3, group:"J2"},
            {id: 250, label:"Regularly", value:4, group:"J2"},
            {id: 251, label:"Daily", value:5, group:"J2"},

            {id: 252, label:"Groceries", value:1, group:"J3"},
            {id: 253, label:"Fashion", value:2, group:"J3"},
            {id: 254, label:"Home decoration", value:3, group:"J3"},
            {id: 255, label:"Home appliances", value:4, group:"J3"},
            {id: 256, label:"Books", value:5, group:"J3"},
            {id: 257, label:"Movies", value:6, group:"J3"},
            {id: 258, label:"Music", value:7, group:"J3"},
            {id: 259, label:"Other", value:8, group:"J3"},
            {id: 260, label:"None", value:9, group:"J3"},

            {id: 261, label:"Telstra", value:1, group:"K1"},
            {id: 262, label:"Optus", value:2, group:"K1"},
            {id: 263, label:"Vodafone", value:3, group:"K1"},
            {id: 264, label:"AAPT", value:4, group:"K1"},
            {id: 265, label:"Primus", value:5, group:"K1"},
            {id: 266, label:"Soul", value:6, group:"K1"},
            {id: 267, label:"Digiplus", value:7, group:"K1"},
            {id: 268, label:"Virgin", value:8, group:"K1"},
            {id: 269, label:"TPG", value:9, group:"K1"},
            {id: 270, label:"Dodo", value:10, group:"K1"},
            {id: 271, label:"iPrimus", value:11, group:"K1"},
            {id: 272, label:"Westnet", value:12, group:"K1"},
            {id: 273, label:"BOB", value:13, group:"K1"},
            {id: 274, label:"Other", value:14, group:"K1"},

            {id: 275, label:"Telstra", value:1, group:"K2"},
            {id: 276, label:"Optus", value:2, group:"K2"},
            {id: 278, label:"Vodafone", value:3, group:"K2"},
            {id: 279, label:"AAPT", value:4, group:"K2"},
            {id: 280, label:"Primus", value:5, group:"K2"},
            {id: 281, label:"Soul", value:6, group:"K2"},
            {id: 282, label:"Digiplus", value:7, group:"K2"},
            {id: 283, label:"Virgin", value:8, group:"K2"},
            {id: 284, label:"TPG", value:9, group:"K2"},
            {id: 285, label:"Dodo", value:10, group:"K2"},
            {id: 286, label:"iPrimus", value:11, group:"K2"},
            {id: 287, label:"Westnet", value:12, group:"K2"},
            {id: 289, label:"BOB", value:13, group:"K2"},
            {id: 290, label:"Other", value:14, group:"K2"},

            {id: 291, label:"Friends", value:1, group:"K3"},
            {id: 292, label:"Facebook add", value:2, group:"K3"},
            {id: 293, label:"Youtube", value:3, group:"K3"},
            {id: 294, label:"Website", value:4, group:"K3"},
            {id: 295, label:"App Store", value:5, group:"K3"},
            {id: 296, label:"Billboard, flyer or sticker", value:6, group:"K3"}
        ];

        self.likesSettings = {
            groupByTextProvider: function(groupValue) {
                if (groupValue === "A1") {
                    return "Entertainment" + "How would you describe yourself when it comes to Sport?";
                } else if (groupValue === "A2") {
                    return "How many days a week do you do sport?"
                } else if (groupValue === "A3") {
                    return "What sport are you interested in?";
                } else if (groupValue === "A4") {
                    return "What sports do you do?";
                } else if (groupValue === "A5") {
                    return "How many books do you read per year?";
                } else if (groupValue === "A6") {
                    return "How many times a year do you go to the museum?";
                } else if (groupValue === "A7") {
                    return "How many times a year do you go to the movies?";
                } else if (groupValue === "B1") {
                    return "Beauty habits" + "How would you describe yourself when it comes to beauty products?";
                } else if (groupValue === "B2") {
                    return "What kind of beauty products do you use? (mutiple choice)";
                } else if (groupValue === "B3") {
                    return "Where do you most often shop for your beauty products?";
                } else if (groupValue === "C1") {
                    return "Health" + "How would you describe yourself when it comes to Health?";
                } else if (groupValue === "C2") {
                    return "What kind of products do you buy?";
                } else if (groupValue === "C3") {
                    return "Where do you buy your health products?";
                } else if (groupValue === "D1") {
                    return "Fashion" + "How would you describe yourself when it comes to Fashion?";
                } else if (groupValue === "D2") {
                    return "Travel" + "How would you describe yourself when it comes to Traveling?";
                } else if (groupValue === "D3") {
                    return "What kind of travel type best describes you?";
                } else if (groupValue === "E1") {
                    return "Food" + "How would you describe yourself when it comes to Food?";
                } else if (groupValue === "E2") {
                    return "How many times a week do you cook?";
                } else if (groupValue === "E3") {
                    return "How often do you go to the restaurant?";
                } else if (groupValue === "E4") {
                    return "How often do you go to the fast food?";
                } else if (groupValue === "E5") {
                    return "How healthy would you describe your food habits?";
                } else if (groupValue === "E6") {
                    return "What products do you buy at the grocery store?";
                } else if (groupValue === "E7") {
                    return "What Fast Food restaurant do you frequent?";
                } else if (groupValue === "F1") {
                    return "Drinks" + "Do you drink wine?";
                } else if (groupValue === "F2") {
                    return "Do you drink beer?";
                } else if (groupValue === "F3") {
                    return "Do you drink spirits or cocktails?";
                } else if (groupValue === "F4") {
                    return "Do you drink Soft Drinks?";
                } else if (groupValue === "F5") {
                    return "How many cups of coffee do you drink per day?";
                } else if (groupValue === "G1") {
                    return "Business and Politics" + "How interested are you about business?";
                } else if (groupValue === "G2") {
                    return "Do you read the news paper?";
                } else if (groupValue === "G3") {
                    return "How interested are you about politics?";
                } else if (groupValue === "G4") {
                    return "Who is your main provider of financial services?";
                } else if (groupValue === "H1") {
                    return "Animals" + "Do you have pets or domesticated animals?";
                } else if (groupValue === "I1") {
                    return "Gaming" + "How would you describe yourself when it comes to online Gaming?";
                } else if (groupValue === "J1") {
                    return "Internet and technology" + "Do you have an online blog?";
                } else if (groupValue === "J2") {
                    return "Do you buy online?";
                } else if (groupValue === "J3") {
                    return "What categories of goods and services do you buy online? (multiple)";
                } else if (groupValue === "K1") {
                    return "Technology" + "What is your mobile phone provider?";
                } else if (groupValue === "K2") {
                    return "What is your Internet provider?";
                } else if (groupValue === "K3") {
                    return "How did you hear about Sherlock-app?";
                }
            },
            enableSearch: true,
            showCheckAll: false
        };
    }])