//IMPORT THIS FIRST WHERE RELEVENT, SO WE HAVE DATA.
//Includes the search function too

var games = [{
	name:"Monopoly",
	img: "img/monopoly.png",
	players:"2-8",
	desc:"Challenge your friends to the communist propaganda game of real estate trading!",
	time:"3+ hours",
	rating:3.5

},{
	name:"Risk",
	img:"img/risk.png",
	players:"2-6",
	desc:"Challenge your friends in the classic game of world domination!",
	time:"3+ hours",
	rating:4.2
},{
	name:"Scrabble",
	img:"img/Scrabble.png",
	players:"2-4",
	desc:"Scrabble is the ultimate crossword game in which every letter counts. Grab your friends and take turns forming words on the board.",
	time:"1-3 hours",
	rating:4.0
},{
	name:"Settlers of Catan",
	img:"img/catan.png",
	players:"2-6",
	desc:"Build roads and cities in this game of building and trading",
	time:"2-4 hours",
	rating:4.5
},{
	name:"Cards Against Humanity",
	img:"img/CAH.png",
	players:"3-12",
	desc:"Find out who has the darkest sense of humour",
	time:"Arbitrary",
	rating:4.4
},{
	name:"Dungeons and Dragons 3.5e",
	img:"img/DnD.png",
	players:"3-8",
	desc:"The timeless classic RPG ",
	time:"Arbitrary",
	rating:3.8
},{
	name:"Organ Attack",
	img:"img/OrganAttack.png",
	players:"2-6",
	desc:"The Awkward Yeti's acclaimed game of diseases and misfortune",
	time:"1-2 hours",
	rating:4.1
},{
	name:"Clue",
	img:"img/Clue.png",
	players:"3-6",
	desc:"One murderer, six suspects. Find out who's the Sherlock in your group",
	time:"1 hour",
	rating:3.9

},{
	name:"Munchkin",
	img:"img/munchkin.png",
	players:"3-6",
	desc:"Race your friends to level 10 in the hit RPG card game",
	time:"1 hour",
	rating:4.4
},{
	name:"BattleShip",
	img:"img/Battleship.png",
	players:"2",
	desc:"Command a navy in the navel game of strategy",
	time:"30 minutes",
	rating:3.2
}];

//Recursive linear search splitting up on spaces; ordering with priority on matching name, then description
function search(param){
  
	var result, rI; // rI == ResultIndex
	var spl = param.split(" ");
	rI = 0;
  
	if(spl.length > 1){
		for(i = 0;i<spl.length;i++){
			result = result.concat(search(spl[i]));
		}
	}else{
		//Search 1, search by name
		for(i=0;i<games;i++){
			if(games[i].name.toLowerCase().includes(param.toLowerCase())){
			result[rI] = games[i];
			rI++;
			}
		}

		//Search 2, search by desc. This is in a seperate loop so that name hits appear first
		for(i=0;i<games;i++){
			if(games[i].desc.toLowerCase().includes(param.toLowerCase())){
				result[rI] = games[i];
				rI++;
			}
		}
	}

  return result;
}