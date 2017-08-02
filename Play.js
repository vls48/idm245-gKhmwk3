gameObj.Play = function (game) {};

gameObj.Play.prototype = {
  create: function () {
    console.log('State - Play');
        //Add background image
        var spBG = this.add.sprite(0, 0, 'bg2');

        // add graphics!
        var spSlimeCat = this.add.sprite(450, 100, 'slimecat');
        var spSlimeCat1 = this.add.sprite(130, -25, 'slimecat');
        var spFreeCat = this.add.sprite(80, 370, 'freecat');
        var spGun = this.add.sprite(105, 460, 'gun');
        var spBucket = this.add.sprite(60, 535, 'bucket');
        var spBottom = this.add.sprite(this.world.centerX, 640, 'bottomslime');
        spBottom.anchor.setTo(.5, 0);

        var spHeart = this.add.sprite(this.world.centerX - 100, 688, 'heart');
        var spHeart2 = this.add.sprite(0, 0, 'heart').alignTo(spHeart, Phaser.RIGHT_CENTER, 16);
        var spHeart3 = this.add.sprite(0, 0, 'heart').alignTo(spHeart2, Phaser.RIGHT_CENTER, 16);
        var spHeart4 = this.add.sprite(0, 0, 'heart').alignTo(spHeart3, Phaser.RIGHT_CENTER, 16);
        var spHeart5 = this.add.sprite(0, 0, 'heart').alignTo(spHeart4, Phaser.RIGHT_CENTER, 16);
        var spHeart6 = this.add.sprite(0, 0, 'heart').alignTo(spHeart5, Phaser.RIGHT_CENTER, 16);

        
        
        var spWater = this.add.sprite(340, 340, 'water');
        spWater.scale.setTo(.5);
        spWater.angle = -135;
        var spCounter = this.add.sprite( 620, 685, 'counter');

        // add text stylings!
         var generalStyle = {
          wordWrapWidth: 450,
          font: '18px 3x5',
          fill: 'white',
          align: 'center',
          wordWrap: true
        };

        var generalStyle2 = {
          wordWrapWidth: 500,
          font: '28px 3x5',
          fill: 'white',
          align: 'center',
          wordWrap: true
        };

        var generalStyle3 = {
          width: '150px',
          font: '20px 3x5',
          fill: 'teal',
          align: 'left'
        };

        // actual text 
        var txtTimer = this.add.text(50, 684, '1:30', generalStyle2);
        var txtRescue = this.add.text(600, 665, 'RESCUED', generalStyle);
        var txtScore = this.add.text(670, 700, 'x0', generalStyle);

        //The numbers given in parameters are the indexes of the frames, in this order: OVER, OUT, DOWN
        var btWin = this.add.button(500, 550, 'winbut', this.winnerFun, this, 1, 0, 2);
        var btLose = this.add.button(610, 550, 'losebut', this.loserFun, this, 1, 0, 2);

  },
  
  winnerFun: function () {
    console.log('winnerFun');
    this.state.start('Winner');
        
  },
  loserFun: function () {
    console.log('loserFun');
    this.state.start('Loser');       
  }
};
