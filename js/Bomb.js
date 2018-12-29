(function (){
	window.Bomb = function (){
         //罗列属性
         //第一张图的top
         this.y = 400; 
         this.y1 = 390;
         this.y2 = 380;
         this.y3 = 370;
         this.y4 = 360;
         this.y5 = 350;
         this.y6 = 340;
         this.y7 = 330;
         this.y8 = 320;
         this.y9 = 310;
	}
	//渲染爆炸图片的方法
	Bomb.prototype.render = function (){
		game.ctx.drawImage(game.R["starsmall_1"],game.toothpickleft-20,this.y,40,45);
		game.ctx.drawImage(game.R["starsmall_1"],game.toothpickleft-20,this.y1,40,45);
		game.ctx.drawImage(game.R["starsmall_2"],game.toothpickleft+40,this.y2,40,45);
		game.ctx.drawImage(game.R["starsmall_2"],game.toothpickleft+20,this.y3,40,45);
		game.ctx.drawImage(game.R["starsmall_3"],game.toothpickleft-60,this.y4,40,45);
		game.ctx.drawImage(game.R["starsmall_4"],game.toothpickleft+60,this.y5,40,45);
		game.ctx.drawImage(game.R["starsmall_1"],game.toothpickleft-20,this.y6,40,45);
		game.ctx.drawImage(game.R["starsmall_2"],game.toothpickleft+40,this.y7,40,45);
		game.ctx.drawImage(game.R["starsmall_2"],game.toothpickleft+20,this.y8,40,45);
		game.ctx.drawImage(game.R["starsmall_3"],game.toothpickleft-60,this.y9,40,45);
	}
})()