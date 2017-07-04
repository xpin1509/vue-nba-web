function Slider() {
	this.el = document.getElementById('slider-wrap');

//	this.lnks = this.el.firstElementChild.children;
//	this.len = this.lnks.length;
	this.init();
}
Slider.prototype.init = function() {
	this.index = 0;
	this.showPage();
}
Slider.prototype.next = function() {
	if(this.index === this.len) {
		this.index == 0;
	} else {
		this.index++;
	}
	this.showPage();
}
Slider.prototype.pre = function() {
	if(this.index === 0) {
		this.index = this.len;
	} else {
		this.index--;
	}
	this.showPage();
}
Slider.prototype.showPage = function() {
	console.log(this.index);
//	this.lnks[this.index].style.opacity = 1;
//	this.lnks[this.index].style.zIndex = 1;
}

global.Slider=Slider;