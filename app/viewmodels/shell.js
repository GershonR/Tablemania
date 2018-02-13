var games = [{
	name:"Monopoly",
	img: "app/img/monopoly.png",
	players:"2-8",
	desc:"Challenge your friends to the communist propaganda game of real estate trading!",
	time:"3+ hours",
	rating:3.5
	
},{
	name:"Risk",
	img:"app/img/risk.png",
	players:"2-6",
	desc:"Challenge your friends in the classic game of world domination!",
	time:"3+ hours",
	rating:4.2
},{
	name:"Scrabble",
	img:"app/img/Scrabble.png",
	players:"2-4",
	desc:"Scrabble is the ultimate crossword game in which every letter counts. Grab your friends and take turns forming words on the board.",
	time:"1-3 hours",
	rating:4.0
},{
	name:"Settlers of Catan",
	img:"app/img/catan.png",
	players:"2-6",
	desc:"Build roads and cities in this game of building and trading",
	time:"2-4 hours",
	rating:4.5
},{
	name:"Cards Against Humanity",
	img:"app/img/CAH.png",
	players:"3-12",
	desc:"Find out who has the darkest sense of humour",
	time:"Arbitrary",
	rating:4.4
},{
	name:"Dungeons and Dragons 3.5e",
	img:"app/img/DnD.png",
	players:"3-8",
	desc:"The timeless classic RPG ",
	time:"Arbitrary",
	rating:3.8
},{
	name:"Organ Attack",
	img:"app/img/OrganAttack.png",
	players:"2-6",
	desc:"The Awkward Yeti's acclaimed game of diseases and misfortune",
	time:"1-2 hours",
	rating:4.1
},{
	name:"Clue",
	img:"app/img/Clue.png",
	players:"3-6",
	desc:"One murderer, six suspects. Find out who's the Sherlock in your group",
	time:"1 hour",
	rating:3.9
	
},{
	name:"Munchkin",
	img:"app/img/munchkin.png",
	players:"3-6",
	desc:"Race your friends to level 10 in the hit RPG card game",
	time:"1 hour",
	rating:4.4
},{
	name:"BattleShip",
	img:"app/img/Battleship.png",
	players:"2",
	desc:"Command a navy in the navel game of strategy",
	time:"30 minutes",
	rating:3.2
}];

//Recursive linear search splitting up on spaces; ordering with priority on matching name, then description
function searchFcn(param){
  
	var result = []; 
	var rI = 0; // rI == ResultIndex
	var spl = param.split("-");
	//console.log("Calling search on " + param);
  
 	if(spl.length > 1){
		for(i = 0;i<spl.length;i++){
			result = result.concat(searchFcn(spl[i]));
			//console.log("Recursing on "+spl[i]);
		}
	} else {
		//console.log("Scanning by name on "+param);
		//Search 1, search by name
		for(i=0;i<games.length;i++){
			for(x=0;x<spl.length;x++) {
				if(games[i].name.toLowerCase().includes(spl[x].toLowerCase())){
					result.push(games[i]);
				}
			}
		}
	} 

  return result;
}

define(['plugins/router', 'durandal/app', 'knockout'], function (router, app, ko) {
    return {
        router: router,
		searchText: ko.observable(),
		search: function() {
		if(this.searchText() == "" || this.searchText() == " "){
			return;
		}
		if(searchFcn(this.searchText().split(' ').join('-')).length == 0){
			app.showMessage('No results found.');
		}else{
			router.navigate('search/:'+this.searchText().split(' ').join('-'));
		}
		
		},
        activate: function () {
            router.map([
                { route: '', title:'Welcome', moduleId: 'viewmodels/welcome', nav: false },
				{ route: 'search/:id', title:'Search', moduleId: 'search/index', nav: false, hash: '#search/:id'},
				{ route: 'monopoly*details', moduleId: 'games/Monopoly/index', title: 'Monopoly', nav: false },
				{ route: 'D&D*details', moduleId: 'games/D&D/index', title: 'D&D', nav: false },
				{ route: 'clue*details', moduleId: 'games/clue/index', title: 'Clue', nav: false },
		    	{ route: 'catan*details', moduleId: 'games/catan/index', title: 'Catan', nav: false },
		    	{ route: 'scrabble*details', moduleId: 'games/scrabble/index', title: 'Scrabble', nav: false },
		    	{ route: 'CAH*details', moduleId: 'games/cah/index', title: 'Cards Against Humanity', nav: false, hash: '#CAH' },
				{ route: 'battleship*details', moduleId: 'games/battleship/index', title: 'Battleship', nav: false },
				{ route: 'organattack*details', moduleId: 'games/organattack/index', title: 'Organ Attack', nav: false },
				{ route: 'munchkin*details', moduleId: 'games/munchkin/index', title: 'Munchkin', nav: false },
				{ route: 'risk*details', moduleId: 'games/risk/index', title: 'Risk', nav: false },
				{ route: 'Categories*details', moduleId: 'categories/index', title: 'Categories', nav: false }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});
