(function (){
   window.Background = function (){
       // 大小串串烧字logo的属性
   	  this.x = -192;
   }
   //渲染的方法
   Background.prototype.render = function (){
   	   game.ctx.fillStyle = "#de3635";
   	   game.ctx.fillRect(0,0,170,480); //左边的红色矩形
   	   game.ctx.fillRect(490,0,170,480); //右边的红色矩形   	   
   	   game.ctx.drawImage(game.R["border"],170,0,320,480); //游戏边框
   	   game.ctx.drawImage(game.R["logo2"],0,this.x,175.15,192); //大小串串烧字logo
   	   game.ctx.drawImage(game.R["logo1"],0,314,162,146); //小人   	  
   	   game.ctx.drawImage(game.R["boxnemu"],500,10,150,160); //显示关卡的图片
   	   game.ctx.fillStyle = "#de3635";  //关卡字
   	   game.ctx.font = "normal bold 36px arial"
   	   game.ctx.fillText("LEVEL",515,50,);
   	   game.ctx.drawImage(game.R["boxnemu"],500,200,150,160); //显示关卡的图片
   	   game.ctx.fillStyle = "#de3635";  //分数
   	   game.ctx.font = "normal bold 36px arial"; //设置文本加粗的方法
   	   game.ctx.fillText("score",518,240);
   }
    // 背景图更新的方法
   Background.prototype.update = function (){
        // logo从上降下来
   	   this.x +=10 ;
   	   if(this.x>=15) this.x = 5;
   }
   //计算分数的方法
   Background.prototype.score = function (score){
           game.ctx.fillStyle = "#de3635";  //分数
           game.ctx.font = "normal bold 48px arial"; //设置文本加粗的方法
           game.ctx.fillText(score,555,300); 
           game.ctx.font = "normal bold 48px arial"; //设置文本加粗的方法
           game.ctx.fillText(game.level,555,120); 
           if((score + 1) % 10 == 0 && game.toothpicktop == 300 ){
            game.score1 = 0;
            game.level ++;
            game.map = new Map;
           }
   }
})()