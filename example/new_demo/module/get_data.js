/*
*	@author guzhihao
*	@date 20120818
*	@info 发送数据获取js data 用于生成模版
*/

define( function( require, exports, module ) {

	var $ = require("jquery"),	
		link = $("#sidebar a[type='get']");

	var buildTpl = require("../module/build_template");

	function getData( template, view ) {

		link.click(function(e){
			e.preventDefault();
			var url = this.getAttribute("href");

			$.ajax({
				"url": url,
				"type": "GET",
				"dataType": "JSON",
				"success": function( data ){
					buildTpl.build( data, template, view );
				},
				"error": function(){
					console.log("数据格式错误");	
				}
			});

		});
	}//end getData

	//对外接口
	module.exports = {
		getData: getData
	}

});