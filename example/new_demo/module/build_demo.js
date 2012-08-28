/*
*	@author guzhihao
*	@date 20120818
*	@info 创建demo逻辑 
*/

define( function( require, exports, module ) {
		
	var $ = require("jquery");	
	var buildIfram = require("../module/build_iframe");

	//绑定事件
	function show( button, from, to ){

		button.live("click",function(){
			buildIfram.build( $( "#" + from ).val() )
		});

	};//end show

	module.exports = {
		show: show
	}

});