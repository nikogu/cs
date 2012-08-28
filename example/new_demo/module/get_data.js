/*
*	@author guzhihao
*	@date 20120818
*	@info 发送数据获取js data 用于生成模版
*/

define( function( require, exports, module ) {

	var $ = require("jquery"),	
		link = $("#sidebar a[type='get']");

	var buildTpl = require("../module/build_template");
	var buildIfram = require("../module/build_iframe");

	function getData( template, view, iframe ) {

		link.click(function(e){
			e.preventDefault();
			var url = this.getAttribute("href");

			$.ajax({
				"url": url,
				"type": "GET",
				"dataType": "JSON",
				"success": function( data ){
					buildTpl.build( data, template, view );
					buildIfram.build( data["code"], iframe);

					/* chrome 下的聚焦问题 之前*/
					if( /*$.browser.chrome*/false ) {
						document.getElementById("iframe").onload = function(){
							function fn(){
								if ( document.getElementById("view").scrollTop != 0 ){
									document.getElementById("view").scrollTop = 0;
									timmer = setTimeout( fn, 20 );
								} else {
									clearTimeout( timmer );
								}
							}
							var timmer = setTimeout( fn ,10 );
						}
					}//end if
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