(function (){
	window.Scene = function (){
		//绑定事件
		this.bindEvent();
		game.background = new Background;
	}
	//进入场景的方法
	Scene.prototype.enter = function (arg){
         game.index = arg;
         switch(game.index){
         	case 0:
              this.y = -180; //中间框的高度
              // 开始按钮的高度 150  帮助 209  关于 269 
              this.y1 = 130;
              this.y2 = 150;
              this.y3 = 150;
         	break;
         	case 1:
             this.x1 = 179; //左边的门的left
             this.x2 = 329;   //右边的门
             this.y1 = 130;  //中间框的top
             this.y2 = 150;  //开始按钮
              // 开始按钮的高度 150  帮助 209  关于 269
              this.y2 = 209;
              this.y3 = 269;
         	break;
         	case 2:
          // 播放背景音乐
           game.sound[0].play();
          // 将map类作为game的一个属性           
         	game.map = new Map;
          // 讲牙签类作为game的一个属性
          game.toothpick = new Toothpick;
          //将爆炸类作为game的一个属性
          game.bomb = new Bomb;
         	break;
         }
	}
	//场景更新和渲染的方法
	Scene.prototype.renderandupdate = function (){
		switch(game.index){
			case 0:
       // 中间的框
			  this.y += 75;
			  if(this.y >= 130) this.y = 130;
        // 开始按钮
			  this.y1 += 5;
			  if(this.y1 >= 150) this.y1 =150;
        //帮助按钮
			  this.y2 += 7;
			  if(this.y2>=209) this.y2 = 209;
        // 关于按钮
			  this.y3 += 15;
			  if(this.y3 >= 269) this.y3 = 269;
			  game.background.update();
        game.background.render();
        game.ctx.drawImage(game.R["door_left"],179,12,150,456); //左边的门
   	    game.ctx.drawImage(game.R["door_right"],329,12,150,456); //右边的门
   	    game.ctx.drawImage(game.R["boxnemu"],245,this.y,168,200); //中间的框
   	    game.ctx.drawImage(game.R["button_start"],279,this.y1,100,39); //开始按钮
   	    game.ctx.drawImage(game.R["button_help"],279,this.y2,100,39);   //帮助按钮
   	    game.ctx.drawImage(game.R["button_ranking"],279,this.y3,100,39); //关于按钮
			break;
			case 1:
          game.ctx.drawImage(game.R["door_left"],179,12,150,456); //左边的门
        game.ctx.drawImage(game.R["door_right"],329,12,150,456); //右边的门 
			  this.y1 -= 20; //中间框的数据
        if(this.y1 <= -200) this.y1 = -200;     
   	    game.ctx.drawImage(game.R["boxnemu"],245,this.y1,168,200); //中间的框
   	    //帮助按钮的top
   	    this.y2 -= 7;
   	     if(this.y2 <= 150){
   	          this.y2 = 150;
   	     	    game.ctx.save();  //改变透明度
   	          game.ctx.globalAlpha = 0;
   	          game.ctx.drawImage(game.R["button_start"],279,150,100,39); //开始按钮
   	          game.ctx.drawImage(game.R["button_help"],279,this.y2,100,39); //帮助按钮
   	          game.ctx.restore();  
   	      }
   	     //关于按钮
   	     this.y3 -= 10;
   	     if(this.y3<=150){
   	     this.y3 = 150;
   	     game.ctx.save();
   	     game.ctx.globalAlpha = 0;
   	     game.ctx.drawImage(game.R["button_ranking"],279,this.y3,100,39);
   	     game.ctx.restore();
   	    } 
   	    game.background.update();
         game.background.render();
			break;
			case 2:
         this.x1 -= 10; //左边门的数据
        if(this.x1 <= 10 ) this.x1 = 10;
        this.x2 += 10; //右边门的数据
        if(this.x2 >= 480) this.x2 = 480; 
			  game.ctx.drawImage(game.R["bg_1"],181,12,298,456); //蓝色背景图
        game.toothpick.render();  //牙签的渲染方法
        game.map.render();    //地图的渲染 
        game.ctx.drawImage(game.R["door_left"],this.x1,12,150,456); //左边的门
        game.ctx.drawImage(game.R["door_right"],this.x2,12,150,456); //右边的门           
			  game.background.update(); //背景的更新 
        game.background.render(); //背景的渲染
        game.background.score(game.score1); //渲染分数的方法        
			break;
		}
	}
	//绑定事件
	Scene.prototype.bindEvent = function (){
		var self = this; //上下文备份
    //单击事件
		game.dom.onclick = function (event){
			switch(game.index){
				case 0:
				var event = event||window.event; 
        //开始按钮
				if(event.clientX>=279&&event.clientX<=379&&event.clientY>=150&&event.clientY<=189){
					//进入下一个场景
           self.enter(1);
				}  
				break;
				case 1:
				 //进入下一个场景
         self.enter(2);
				break;
				case 2:
				break;
			}

		}
    // 鼠标移动事件 
    game.dom.onmousemove = function (event){
          switch (game.index){
            case 0:
            break;
            case 1:
            break;
            case 2:
            // 获取鼠标的位置使牙签跟着鼠标移动
            var event = event||window.event;
             game.toothpickleft = event.clientX;
           if(game.toothpickleft<=196){ 
            game.toothpickleft = 196;                    
           }
           if(game.toothpickleft>=454){
             game.toothpickleft = 454;
           }
            break;
          }
    }
    // 鼠标按下事件
    game.dom.onmousedown = function (){
        switch (game.index){
            case 0:      
            break;
            case 1:
            break;
            case 2: 
            // 使用定时器 记录牙签更新的时间           
            game.timer2=setInterval(function(){
             game.toothpick.update();  
            },100);
            break;
          }
    }
    // 鼠标抬起事件
    game.dom.onmouseup = function (){
          switch (game.index){
            case 0:
            break;
            case 1:
            break;
            case 2:
            // 鼠标抬起牙签恢复到初始位置 清除更新牙签的定时器           
            clearInterval(game.timer2);
             game.toothpicktop = 300;
            break;
          }
    }
	}
})();