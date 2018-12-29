(function (){
   window.Toothpick = function (){
          this.dy = 20; //改变牙签的属性
   }
   //渲染牙签的方法
   Toothpick.prototype.render = function (){
   	   game.ctx.drawImage(game.R["stick"],game.toothpickleft,game.toothpicktop,6,465); //牙签
   }
   //更新牙签的方法
   Toothpick.prototype.update = function (){
            game.toothpicktop -= this.dy;
            if(game.toothpicktop <= 0 ) game.toothpicktop = 0;
   }
 })()