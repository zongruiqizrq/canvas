(function (){
	window.Map = function (){
		 //初始游戏界面的数组
         this.code = [
            [_.random(0,3),_.random(0,3),_.random(0,3),_.random(0,3),_.random(0,3),_.random(0,3)],
            [_.random(0,3),_.random(0,3),_.random(0,3),_.random(0,3),_.random(0,3),_.random(0,3)],
            [_.random(0,3),_.random(0,3),_.random(0,3),_.random(0,3),_.random(0,3),_.random(0,3)],
            [_.random(0,3),_.random(0,3),_.random(0,3),_.random(0,3),_.random(0,3),_.random(0,3)],
            [_.random(0,3),_.random(0,3),_.random(0,3),_.random(0,3),_.random(0,3),_.random(0,3)]
         ];         
         // 存放真实food的矩阵
         this.foods = [
             [],[],[],[],[]
         ];
         // 根据code，向foods里面填值
         for(var r=0;r<5;r++){   //行
         	for(var c=0;c<6;c++){  //列
         		this.foods[r][c] = new Food(r,c,this.code[r][c]);
         	}
         }
         //将牙签上的实例放到这个空数组中
         this.arr = [];
	}
    var sum = 180;//控制牙签上食物个数的变量
    var a = 0;     
   // 渲染地图的方法
	Map.prototype.render = function (){
		   //渲染地图 
           var self = this; //上下文备份
          for(var r=0;r<5;r++){   //行
            for(var c=0;c<6;c++){  //列
               //调用food的渲染方法 
               this.foods[r][c].render();
               this.foods[r][c].update();  
                    //碰撞检测  
            if(game.toothpicktop>=game.map.foods[r][c].y1&&game.toothpicktop<=game.map.foods[r][c].y2&&game.toothpickleft>=game.map.foods[r][c].x1&&game.toothpickleft<=game.map.foods[r][c].x2){ 
                //播放得到食物音乐
               game.sound[1].play();                 
                if(sum>=0){
                    sum-=30;
                    game.map.foods[r][c].y = 282 + sum;                 
                    self.arr.push(game.map.foods[r][c]); 
                    //判断连续的三个是否相等                   
                    for(var i = 0;i<self.arr.length;i++){                        
                        if(i>=2){
                            if(self.arr[i].color == self.arr[i-1].color &&self.arr[i].color == self.arr[i-2].color){
                                self.arr[i].y = -1000; //让相等的项的动物 top 改变
                                self.arr[i-1].y = -1000;
                                self.arr[i-2].y = -1000;   
                                sum += 90;
                                //爆炸渲染的定时器
                                game.timer3 = setInterval(baozha,50);
                                game.score1 ++;
                                //从牙签上删除这三项
                                self.arr.splice(i-2,3);
                                game.sound[2].play(); 
                                break;
                            }
                        }
                    }
               }
            // 判断如果牙签数组的长度大于等于7 GAMEOVER 
                if(self.arr.length>=7){  
                    //game over 图片         
                    game.ctx.drawImage(game.R["gameover"],181,150);
                    //播放 game over 音乐 
                    game.sound[3].play();
                    //暂停背景音乐  
                    game.sound[0].pause();
                    clearInterval(game.timer1);                      
                }                                    
            }
        }        
    }
   }
   //爆炸定时器的函数
   function baozha(){
     a++;
    if(a % 20 ==0) {
        clearInterval(game.timer3);
    }
    game.bomb.render();   //爆炸的渲染
   }   
})()