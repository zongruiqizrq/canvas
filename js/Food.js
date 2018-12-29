(function (){
	window.Food = function (row,col,color){
        //行 0,1,2,3,4
        this.row = row;
        //列 0,1,2,3,4,5
        this.col = col;
        //颜色 0 1 2 3 
        this.color = color;
        this.idx = 1; //图片的编号 使用的哪张图片
        //渲染食物的位置
        this.x = this.col * 48 + 181;
        this.y = this.row * 50 + 12; 
	}
     // 渲染食物的方法
	Food.prototype.render = function (){
		//渲染在画布上的位置
		if(game.frame % 20 == 0){
			this.idx++;
		    this.idx = this.idx>2?1:this.idx;
		}		
		// 渲染食物的位置	
		game.ctx.drawImage(game.R["food_"+this.color+"_"+this.idx],this.x,this.y,48,50);
		if(this.y > 212){
	       this.x = game.toothpickleft - 24;
		}
		       
	}
	//食物更新的方法	  
	Food.prototype.update = function (){		
		// 食物的数据
		this.x1 =  this.x; //食物的左left
		this.y1 = this.y; //食物的上top
		this.x2 = this.x + 48; //食物的右left
		this.y2 = this.y + 50;
    }

})()