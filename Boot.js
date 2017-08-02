var gameObj = {
	//global variables
	gScore: 0,
	gTime: '01:30'
};

gameObj.Boot = function (game) {};

gameObj.Boot.prototype = {
	preload: function (){
		console.log('State - Boot');
	},
	create: function (){
		this.state.start('Preloader');
	}
};