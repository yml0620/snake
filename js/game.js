(function () {
	var that;
	function Game (map){
		this.food = new Food();
		this.snake = new Snake();
		this.map = map;
		that = this;
	}
	Game.prototype.start = function () {
		this.food.render(this.map);
		this.snake.render(this.map);
		// 测试move方法
	    // this.snake.move();
	    // this.snake.render(this.map);
	    // this.snake.move();
	    // this.snake.render(this.map);
	    // this.snake.move();
	    // this.snake.render(this.map);

	    runSnake();
	    bindKey();
	}
	function bindKey () {
		document.addEventListener('keydown',function(e){
			// console.log(e.keyCode);
			//a --> 65  w --> 87 d --> 68 s --> 83
			//left --> 37 top --> 38 right --> 39 bottom --> 40
			switch(e.keyCode){
				case 37 :
				case 65 :
					this.snake.direction = 'left';
					break;
				case 38 :
				case 87 :
					this.snake.direction = 'top';
					break;
				case 39 :
				case 68 :
					this.snake.direction = 'right';
					break;
				case 40 :
				case 83 :
					this.snake.direction = 'bottom';
					break;
			}
		}.bind(that),false);
	}




	function runSnake() {
		var timerId = setInterval(function () {
			this.snake.move(this.food,this.map);
			this.snake.render(this.map);

			var maxX = this.map.offsetWidth / this.snake.width;
			var maxY = this.map.offsetHeight / this.snake.height;
			var headX = this.snake.body[0].x;
			var headY = this.snake.body[0].y;
			if (headX < 0 || headX >= maxX) {
				alert('Gmae Over!!!');
				clearInterval(timerId);
			}
			if (headY < 0 || headY >= maxY) {
				alert('Gmae Over!!!');
				clearInterval(timerId);
			}


		}.bind(that),160)
	}
	window.Game = Game;
})()
//测试
// var map = document.getElementById('map');
// var game = new Game(map);
// game.start();

