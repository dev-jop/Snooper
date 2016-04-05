materialAdmin

    // =========================================================================
    // Header Messages and Notifications list Data
    // =========================================================================

    .service('messageService', ['$resource', function($resource){
        this.getMessage = function(img, user, text) {
            var gmList = $resource("data/messages-notifications.json");
            
            return gmList.get({
                img: img,
                user: user,
                text: text
            });
        }
    }])
    

    // =========================================================================
    // Best Selling Widget Data (Home Page)
    // =========================================================================

    .service('bestsellingService', ['$resource', function($resource){
        this.getBestselling = function(img, name, range) {
            var gbList = $resource("data/best-selling.json");
            
            return gbList.get({
                img: img,
                name: name,
                range: range,
            });
        }
    }])

    
    // =========================================================================
    // Todo List Widget Data
    // =========================================================================

    .service('todoService', ['$resource', function($resource){
        this.getTodo = function(todo) {
            var todoList = $resource("data/todo.json");
            
            return todoList.get({
                todo: todo
            });
        }
    }])


    // =========================================================================
    // Recent Items Widget Data
    // =========================================================================
    
    .service('recentitemService', ['$resource', function($resource){
        this.getRecentitem = function(id, name, price) {
            var recentitemList = $resource("data/recent-items.json");
            
            return recentitemList.get ({
                id: id,
                name: name,
                price: price
            })
        }
    }])


    // =========================================================================
    // Recent Posts Widget Data
    // =========================================================================
    
    .service('recentpostService', ['$resource', function($resource){
        this.getRecentpost = function(img, user, text) {
            var recentpostList = $resource("data/messages-notifications.json");
            
            return recentpostList.get ({
                img: img,
                user: user,
                text: text
            })
        }
    }])
    
    // =========================================================================
    // Data Table
    // =========================================================================
    
    .service('tableService', [function(){
        this.data = [
            {
                "id": 10238,
                "name": "Marc Barnes",
                "email": "marc.barnes54@example.com",
                "username": "MarcBarnes",
                "contact": "(382)-122-5003"
            },
            {   
                "id": 10243,
                "name": "Glen Curtis",
                "email": "glen.curtis11@example.com",
                "username": "GlenCurtis",
                "contact": "(477)-981-4948"
            },
            {
                "id": 10248,
                "name": "Beverly Gonzalez",
                "email": "beverly.gonzalez54@example.com",
                "username": "BeverlyGonzalez",
                "contact": "(832)-255-5161"
            },
            {
                "id": 10253,
                "name": "Yvonne Chavez",
                "email": "yvonne.chavez@example.com",
                "username": "YvonneChavez",
                "contact": "(477)-446-3715"
            },
            {
                "id": 10234,
                "name": "Melinda Mitchelle",
                "email": "melinda@example.com",
                "username": "MelindaMitchelle",
                "contact": "(813)-716-4996"
                
            },
            {
                "id": 10239,
                "name": "Shannon Bradley",
                "email": "shannon.bradley42@example.com",
                "username": "ShannonBradley",
                "contact": "(774)-291-9928"
            },
            {
                "id": 10244,
                "name": "Virgil Kim",
                "email": "virgil.kim81@example.com",
                "username": "VirgilKim",
                "contact": "(219)-181-7898"
            },
            {
                "id": 10249,
                "name": "Letitia Robertson",
                "email": "letitia.rober@example.com",
                "username": "Letitia Robertson",
                "contact": "(647)-209-4589"
            },
            {
                "id": 10237,
                "name": "Claude King",
                "email": "claude.king22@example.com",
                "username": "ClaudeKing",
                "contact": "(657)-988-8701"
            },
            {
                "id": 10242,
                "name": "Roland Craig",
                "email": "roland.craig47@example.com",
                "username": "RolandCraig",
                "contact": "(932)-935-9471"
            },
            {
                "id": 10247,
                "name": "Colleen Parker",
                "email": "colleen.parker38@example.com",
                "username": "ColleenParker",
                "contact": "(857)-459-2792"
            },
            {
                "id": 10252,
                "name": "Leah Jensen",
                "email": "leah.jensen27@example.com",
                "username": "LeahJensen",
                "contact": "(861)-275-4686"
            },
            {
                "id": 10236,
                "name": "Harold Martinez",
                "email": "martinez67@example.com",
                "username": "HaroldMartinez",
                "contact": "(836)-634-9133"
            },
            {
                "id": 10241,
                "name": "Keith Lowe",
                "email": "keith.lowe96@example.com",
                "username": "KeithLowe",
                "contact": "(778)-787-3100"
            },
            {
                "id": 10246,
                "name": "Charles Walker",
                "email": "charles.walker90@example.com",
                "username": "CharlesWalker",
                "contact": "(486)-440-4716"
            },
            {
                "id": 10251,
                "name": "Lillie Curtis",
                "email": "lillie.curtis12@example.com",
                "username": "LillieCurtis",
                "contact": "(342)-510-2258"
            },
            {
                "id": 10235,
                "name": "Genesis Reynolds",
                "email": "genesis@example.com",
                "username": "GenesisReynolds",
                "contact": "(339)-375-1858"
            },
            {
                "id": 10240,
                "name": "Oscar Palmer",
                "email": "oscar.palmer24@example.com",
                "username": "OscarPalmer",
                "contact": "(544)-270-9912"
            },
            {
                "id": 10245,
                "name": "Lena Bishop",
                "email": "Lena Bishop",
                "username": "LenaBishop",
                "contact": "(177)-521-1556"
            },
            {
                "id": 10250,
                "name": "Kent Nguyen",
                "email": "kent.nguyen34@example.com",
                "username": "KentNguyen",
                "contact": "(506)-533-6801"
            }
        ];
    }])

    // =========================================================================
    // Malihu Scroll - Custom Scroll bars
    // =========================================================================
    .service('scrollService', function() {
        var ss = {};
        ss.malihuScroll = function scrollBar(selector, theme, mousewheelaxis) {
            $(selector).mCustomScrollbar({
                theme: theme,
                scrollInertia: 100,
                axis:'yx',
                mouseWheel: {
                    enable: true,
                    axis: mousewheelaxis,
                    preventDefault: true
                }
            });
        }
        
        return ss;
    })


    //==============================================
    // BOOTSTRAP GROWL
    //==============================================

    .service('growlService', function(){
        var gs = {};
        gs.growl = function(message, type) {
            $.growl({
                message: message
            },{
                type: type,
                allow_dismiss: false,
                label: 'Cancel',
                className: 'btn-xs btn-inverse',
                placement: {
                    from: 'top',
                    align: 'right'
                },
                delay: 2500,
                animate: {
                        enter: 'animated bounceIn',
                        exit: 'animated bounceOut'
                },
                offset: {
                    x: 20,
                    y: 85
                }
            });
        }
        
        return gs;
    })

    .controller('dashboardItems', [function() {
        var self = this;

        self.tileselection = function(value) {
            if (value == "Type 1") {
                return "views/dashboard/dashtiles/checkpoint1.html";
            } else if (value == "Type 2") {
                return "views/dashboard/dashtiles/checkpoint2.html";
            } else if (value == "Type 3") {
                return "views/dashboard/dashtiles/checkpoint3.html";
            } else if (value == "Type 4") {
                return "views/dashboard/dashtiles/checkpoint4.html";
            } else if (value == "Type 5") {
                return "views/dashboard/dashtiles/checkpoint5.html";
            } else {
                return "views/dashboard/dashtiles/else.html";
            }
        }

        self.dashitems = [
            [{
                id: 1001,
                missionid: 101,
                type: "Type 1",
                description: "This is a description",
                time: 4
            },{
                id: 1002,
                missionid: 103,
                type: "Type 1",
                description: "This is a description",
                time: 2
            },{
                id: 1003,
                missionid: 101,
                type: "Type 3",
                description: "This is a description"
            },{
                id: 1005,
                missionid: 102,
                type: "Type 2",
                description: "This is a description",
                title: ["Title 1", "Title 2"]
            },{
                id: 1006,
                missionid: 105,
                type: "Type 3",
                description: "This is a description"
            }],[{
                id: 1007,
                missionid: 105,
                type: "Type 1",
                description: "This is a description",
                time: 1
            },{
                id: 1008,
                missionid: 105,
                type: "Type 2",
                description: "This is a description",
                title: ["Title 3"]
            },{
                id: 1009,
                missionid: 101,
                type: "Type 4",
                description: "This is a description",
                location: "Sri Lanka"
            },{
                id: 1010,
                missionid: 102,
                type: "Type 1",
                description: "This is a description",
                time: 4
            },{
                id: 1011,
                missionid: 101,
                type: "Type 2",
                description: "This is a description",
                title: ["Title 1", "Title 2", "Title 4"]
            }],[{
                id: 1012,
                missionid: 101,
                type: "Type 5",
                description: "This is a description"
            },{
                id: 1013,
                missionid: 104,
                type: "Type 1",
                description: "This is a description",
                time: 3
            },{
                id: 1014,
                missionid: 105,
                type: "Type 3",
                description: "This is a description"
            },{
                id: 1015,
                missionid: 104,
                type: "Type 2",
                description: "This is a description",
                title: ["Title 2"]
            }]
        ]
    }])

    .controller('reviewitems', [function($location) {
        var self = this;
        
        self.save = function(){
            $location.path('/tables/submissions');
        }

        self.revitems = [
            {
                id: 10001,
                checkpoint: "Checkpoint 1",
                name: "Name One",
                description: "A review is an evaluation of a publication, service, or company such as a movie (a movie review), video game (video game review), musical composition (music review of a composition or recording), book (book review); a piece of hardware like a car, home appliance, or computer; or an event or performance, such as a live music concert, play, musical theater show, dance show, or art exhibition. In addition to a critical evaluation, the review's author may assign the work a rating to indicate its relative merit. More loosely, an author may review current events, trends, or items in the news.",
                userreview: ""
            }, {
                id: 10002,
                checkpoint: "Checkpoint 2",
                name: "Name Two",
                description: "Consumer review of sellers usually comment on service experienced, and dependability or trustworthiness of the seller. Usually, it comments on factors such as timeliness of delivery, packaging and correctness of delivered items, shipping charges, return services against promises made, and so on.",
                userreview: ""
            }, {
                id: 10003,
                checkpoint: "Checkpoint 1",
                name: "Name One Again",
                description: "A peer review is the process by which scholars or scientists assess the work of their colleagues that has been submitted for publication in the scientific or scholarly literature. In the scientific literature, review articles are a category of scientific or scholarly paper, which provides a synthesis of research on a topic at that moment in time. A compilation of these submissions forms the core content of review journals. Beyond review articles in review journals, a review may be found in an encyclopedia or a critical book review. In computer programming and the software development process, a software review may be used.",
                userreview: ""
            }, {
                id: 10004,
                checkpoint: "Checkpoint 4",
                name: "Name Four",
                description: "Consumer submissions online have become a major factor in business reputation and brand image due to the popularity of TripAdvisor, Yelp and online review websites. A negative review can damage the reputation of a business and this has created a new industry of reputation management where companies attempt to remove or hide bad submissions so that more favourable content is found when potential customers do research.",
                userreview: ""
            }, {
                id: 10005,
                checkpoint: "Checkpoint 3",
                name: "Name Three",
                description: "A consumer review of a product usually comments on how well the product measures up to expectations based on the specifications provided by the manufacturer or seller. It talks about performance, reliability, quality defects, if any, and value for money. Consumer review, also called 'word of mouth' and 'user generated content' differs from 'marketer generated content' in its evaluation from consumer or user point of view. Often it includes comparative evaluations against competing products. Observations are factual as well as subjective in nature.",
                userreview: ""
            }, {
                id: 10006,
                checkpoint: "Checkpoint 2",
                name: "Name Two",
                description: "A peer review is the process by which scholars or scientists assess the work of their colleagues that has been submitted for publication in the scientific or scholarly literature. In the scientific literature, review articles are a category of scientific or scholarly paper, which provides a synthesis of research on a topic at that moment in time. A compilation of these submissions forms the core content of review journals. Beyond review articles in review journals, a review may be found in an encyclopedia or a critical book review. In computer programming and the software development process, a software review may be used.",
                userreview: ""
            }, {
                id: 10007,
                checkpoint: "Checkpoint 2",
                name: "Name Two Again",
                description: "Consumer review of sellers usually comment on service experienced, and dependability or trustworthiness of the seller. Usually, it comments on factors such as timeliness of delivery, packaging and correctness of delivered items, shipping charges, return services against promises made, and so on.",
                userreview: ""
            }, {
                id: 10008,
                checkpoint: "Checkpoint 6",
                name: "Name Six",
                description: "A consumer review of a product usually comments on how well the product measures up to expectations based on the specifications provided by the manufacturer or seller. It talks about performance, reliability, quality defects, if any, and value for money. Consumer review, also called 'word of mouth' and 'user generated content' differs from 'marketer generated content' in its evaluation from consumer or user point of view. Often it includes comparative evaluations against competing products. Observations are factual as well as subjective in nature.",
                userreview: ""
            }, {
                id: 10009,
                checkpoint: "Checkpoint 4",
                name: "Name Four",
                description: "A user review refers to a review written by a user or consumer for a product or a service based on her experience as a user of the reviewed product. Popular sources for consumer submissions are e-commerce sites like Amazon or Zappos, and social media sites like TripAdvisor and Yelp. E-commerce sites often have consumer submissions for products and sellers separately. Usually, consumer submissions are in the form of several lines of texts accompanied by a numerical rating. This text is meant to aid in shopping decision of a prospective buyer.",
                userreview: ""
            }, {
                id: 10010,
                checkpoint: "Checkpoint 5",
                name: "Name Five",
                description: "A peer review is the process by which scholars or scientists assess the work of their colleagues that has been submitted for publication in the scientific or scholarly literature. In the scientific literature, review articles are a category of scientific or scholarly paper, which provides a synthesis of research on a topic at that moment in time. A compilation of these submissions forms the core content of review journals. Beyond review articles in review journals, a review may be found in an encyclopedia or a critical book review. In computer programming and the software development process, a software review may be used.",
                userreview: ""
            }
        ];
    }])
