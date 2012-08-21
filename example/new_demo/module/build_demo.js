/*
*	@author guzhihao
*	@date 20120818
*	@info 创建demo逻辑 
*/

define( function( require, exports, module ) {
		
	var $ = require("jquery");	

	//绑定事件
	function show( button, from, to ){

		button.live("click",function(){
			$( "#" + to ).html( $( "#" + from ).val() );
		});

	};//end show

	module.exports = {
		show: show
	}

});