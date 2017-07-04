function Slider(option) {
	this.el = document.getElementById(option.el);
	this.timeOut;
	this.lnks = this.el.firstElementChild.getElementsByTagName('li');
	this.len = this.lnks.length;
	this.init();
	var self = this;
	this.el.addEventListener('touchstart', function(e) {
		this.startX = e.targetTouches[0].pageX;
	}, false)
	this.el.addEventListener('touchend', function(e) {
		this.endX = e.changedTouches[0].pageX;
		var delta = this.endX - this.startX;
		if(delta > 30) {
			self.pre();
		} else if(delta < -30) {
			self.next();
		}
	}, false)
}
Slider.prototype.init = function() {
	var self = this;
	self.index = 1;
	self.showPage();
//	setTimeout(function(){
////		self.index++;
////		self.showPage();
//		console.log(1)
//	},1000)
	
}
Slider.prototype.next = function() {
	if(this.index === this.len) {
		this.index = 1;
	} else {
		this.index++;
	}
	this.showPage();
}
Slider.prototype.pre = function() {
	if(this.index === 1) {
		this.index = this.len;
	} else {
		this.index--;
	}
	this.showPage();
}
Slider.prototype.showPage = function() {
	for(var i = 0; i < this.len; i++) {
		this.lnks[i].style.opacity = 0;
		this.lnks[i].style.zIndex = 0;
	}
	this.lnks[this.index - 1].style.opacity = 1;
	this.lnks[this.index - 1].style.zIndex = 1;
	var pageEl = document.getElementById('page').getElementsByTagName('i')[0];
	pageEl.innerHTML = this.index + '/' + this.len;
}
Slider.prototype.move = function() {
	var touch = event.targetTouches[0];

}

//Slider.el.on("touchstart", function(e){
//	me.startY = e.originalEvent.targetTouches[0].pageY;
//}).on("touchend", function(e){
//	me.endY = e.originalEvent.changedTouches[0].pageY;
//	var delta = me.endY - me.startY;
//	if(me.canscroll){
//		if(delta > 30 && (me.index && !me.settings.loop || me.settings.loop)){
//			me.prve();
//		}else if(delta < -30 && (me.index < (me.pagesCount-1) && !me.settings.loop || me.settings.loop)){
//			me.next();
//		}
//	}
//});

global.Slider = Slider;