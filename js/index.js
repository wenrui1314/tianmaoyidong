/*
* @Author: Administrator
* @Date:   2017-04-01 11:12:16
* @Last Modified by:   Administrator
* @Last Modified time: 2017-04-01 17:15:39
*/

'use strict';
alert(1);

window.onload = function(){
	var designWidth = 375;

	function fontSize(){
		var CW = document.documentElement.clientWidth;
		var size = CW/designWidth*100+"px";
		document.querySelector("html").style .fontSize=size;
		console.log(size);
	}
	fontSize();
	window . onresize=fontSize;
}
window.onload = function(){
	var designWidth = 375;

	function fontSize(){
		var CW = document.documentElement.clientWidth;
		var size = CW/designWidth*100+"px";
		document.querySelector("html").style .fontSize=size;
		console.log(size);
	}
	fontSize();
	window . onresize=fontSize;
}
