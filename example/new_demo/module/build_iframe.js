/*
*	@author guzhihao
*	@date 20120818
*	@info iframe显示demo
*/

define( function( require, exports, module ) {
		
	var $ = require("jquery");	

	//获取数据
	function build( code, iframe ){

		var temp = code,
			code = filter( code );	

		$.ajax({
			"url": "/css-temp",
			"type": "POST",
			"data": { "code": code },
			"success": function( data ){
				var iframe = window.frames["iframe"];
				iframe.document.write('<!doctype><html>'
                    + '<head>'
                        + '<script src="/static/cs.js"><\/script>'
                    +        '</head><body>'
                    + '<script>setTimeout(function() { CS.link("' + data + '");document.close();}, 20);<\/script>'
                    + temp 
                    + '</body></html>');
			}
		});

	};//end show

	//过滤
	function filter ( str ) {
		var a = [];
		a = str.match(/<style>[\s\S]*<\/style>/ig);
		var str = "";
		for ( var i = 0; i<a.length; i++ ) {
			str += a[i]; 
		}
		return str;
	}

	module.exports = {
		build: build 
	}

});