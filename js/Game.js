(function (){
	window.Game = function (){
		//罗列属性
		this.dom = document.querySelector("canvas"); //获取canvas标签
		this.ctx = this.dom.getContext("2d"); //获取上下文
        //音乐数组
        this.sound = document.querySelectorAll("audio") ;
		this.w = 660; //设置画布的宽高
		this.h = 480;
        this.toothpickleft = 0; //牙签的left值
        this.toothpicktop = 300;//牙签的top值
		this.dom.width = this.w; //设置画布的宽高
		this.dom.height = this.h;
		//开启主循环的定时器
		this.timer1 = null;
        //鼠标长按的定时器
        this.timer2 = null;
        //爆炸的定时器
        this.timer3 = null;
        //统计分数的属性
        this.score1 = 0;
        //统计关卡的值
        this.level = 1;
		//图片资源管理器的方法
		this.picture();
	}
	//加载图片资源的方法
	Game.prototype.picture = function (){
		//保存图片资源的属性
        this.R = {
        	"logo2":"img/logo2.png",
        	"logo1":"img/logo1.png",
        	"border":"img/border.png",
        	"door_left":"img/door_left.png",
        	"door_right":"img/door_right.png",
        	"boxnemu":"img/boxnemu.png",
            "button_start":"img/button_start.png",
            "button_help" : "img/button_help.png",
            "button_ranking":"img/button_ranking.png",
            "boxhelp":"img/boxhelp.png",
            "about":"img/about.png",
            "bg_1":"img/bg_1.png",
            "food_0_1":"img/food_0_1.png",
            "food_0_2":"img/food_0_2.png",
            "food_1_1":"img/food_1_1.png",
            "food_1_2":"img/food_1_2.png",
            "food_2_1":"img/food_2_1.png",
            "food_2_2":"img/food_2_2.png",
            "food_3_1":"img/food_3_1.png",
            "food_3_2":"img/food_3_2.png",
            "stick":"img/stick.png",
            "gameover":"img/gameover.png",
            "starsmall_1":"img/starsmall_1.png",
            "starsmall_2":"img/starsmall_2.png",
            "starsmall_3":"img/starsmall_3.png",
            "starsmall_4":"img/starsmall_4.png"
        }
        var allcount = Object.keys(this.R).length;//得到所有图片的个数
        var count = 0;
        var self = this; //上下文备份
        for( k in this.R){
            var path = this.R[k];
            this.R[k] = new Image();
            this.R[k].src = path;
            this.R[k].onload = function (){
            	count ++;
            	if(count == allcount){
            		//开启游戏的方法
            		self.start();
            	}
            }
        }
	}
	//清屏
	Game.prototype.clearscreen = function (){
		this.ctx.clearRect(0,0,this.dom.width,this.dom.height);
	}
	//开启游戏的方法
	Game.prototype.start = function (){
		var self = this; //备份上下文
        self.frame = 0;
        self.scene = new Scene;
         //进入第一个场景
        self.scene.enter(0);
         self.timer1 = setInterval(function (){
             self.frame ++;
             self.clearscreen();
             //场景渲染和更新的方法
             self.scene.renderandupdate();
         },50)
	}
})()