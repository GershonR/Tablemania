var games = [{
	name:"Monopoly",
	img: "app/img/monopoly.png",
	players:"2-8",
	desc:"Challenge your friends to the communist propaganda game of real estate trading!",
	time:"3+ hours",
	link:"#monopoly",
	rating:3.5
	
},{
	name:"Risk",
	img:"app/img/risk.png",
	players:"2-6",
	desc:"Challenge your friends in the classic game of world domination!",
	time:"3+ hours",
	link:"#risk",
	rating:4.2
},{
	name:"Scrabble",
	img:"app/img/Scrabble.png",
	players:"2-4",
	desc:"Scrabble is the ultimate crossword game in which every letter counts. Grab your friends and take turns forming words on the board.",
	time:"1-3 hours",
	link:"#scrabble",
	rating:4.0
},{
	name:"Settlers of Catan",
	img:"app/img/catan.png",
	players:"2-6",
	desc:"Build roads and cities in this game of building and trading",
	time:"2-4 hours",
	link:"#catan",
	rating:4.5
},{
	name:"Cards Against Humanity",
	img:"app/img/CAH.png",
	players:"3-12",
	desc:"Find out who has the darkest sense of humour",
	time:"Arbitrary",
	link:"#cah",
	rating:4.4
},{
	name:"Dungeons and Dragons 3.5e",
	img:"app/img/DnD.png",
	players:"3-8",
	desc:"The timeless classic RPG ",
	time:"Arbitrary",
	link:"#D&D",
	rating:3.8
},{
	name:"Organ Attack",
	img:"app/img/OrganAttack.png",
	players:"2-6",
	desc:"The Awkward Yeti's acclaimed game of diseases and misfortune",
	time:"1-2 hours",
	link:"#organattack",
	rating:4.1
},{
	name:"Clue",
	img:"app/img/clue.png",
	players:"3-6",
	desc:"One murderer, six suspects. Find out who's the Sherlock in your group",
	time:"1 hour",
	link:"#clue",
	rating:3.9
	
},{
	name:"Munchkin",
	img:"app/img/munchkin.png",
	players:"3-6",
	desc:"Race your friends to level 10 in the hit RPG card game",
	time:"1 hour",
	link:"#munchkin",
	rating:4.4
},{
	name:"BattleShip",
	img:"app/img/Battleship.png",
	players:"2",
	desc:"Command a navy in the navel game of strategy",
	time:"30 minutes",
	link:"#battleship",
	rating:3.2
}];
define(['plugins/router', 'knockout','durandal/app', 'jquery'], function (app) {
    var ctor = function () {
				this.displayName = 'Welcome to the Durandal Starter Kit!';
				var url = window.location.href;
				url = url.split("#search/:")[1];//Grab what's after the $
				this.searchingFor = url;
				console.log("url "+url);
				if(url){
					this.hits = searchFcn(url);
				}
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
        
    };
	console.log('deactivate start');
    //Note: This module exports a function. That means that you, the developer, can create multiple instances.
    //This pattern is also recognized by Durandal so that it can create instances on demand.
    //If you wish to create a singleton, you should export an object instead of a function.
    //See the "flickr" module for an example of object export.


    return ctor;
});