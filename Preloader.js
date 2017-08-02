gameObj.Preloader = function (game) {};

gameObj.Preloader.prototype = {
	preload: function () {
		console.log("State-Preloader");
		this.stage.backgroundColor = '#333';

		 //load graphics
            this.load.image('backgroundslime','assets/bg.jpg');
            this.load.image('backgroundwater','assets/bgwater.jpg');
            this.load.image('arrowsx1', 'assets/arrowsx1.png');
            this.load.image('point', 'assets/point.png');
            this.load.image('title', 'assets/GOOPkittens.png');
            this.load.image('cat', 'assets/cat.png');
            this.load.image('logo', 'assets/logo.png');
            this.load.image('heart', 'assets/pixel-heart.png');

 

            //load sprite sheets
            this.load.spritesheet('play', 'assets/play.png', 223, 90);


            //load fonts
            this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
	},
	create: function () {
		this.state.start('Main');
	}
};