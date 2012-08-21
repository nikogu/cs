/*
*	@author guzhihao
*	@date 20120818
*	@info 建立菜单
*/

define( function( require, exports, module ) {

	var $ = require("jquery");	

	var html = "<ul>";

	function create ( data ) {
		
		if( $.isArray(data) ) {

			for( var i=0,len=data.length; i<len; i++ ) {
				//有子列表加icon
				if ( data[i]["sub"] && data[i]["sub"].length > 0 ) {
					html += '<li class="show-children">';
				} else {
					html += '<li>'
				}

				//有显示加info
				if ( data[i]["info"] ) {
					html += '<a target="article-iframe" type="get" href="sample/' + data[i]["info"] + '">'+data[i]["title"]+'</a>';
				} else {
					html += '<a href="#">'+data[i]["title"]+'</a>';
				}

				//有子列表就建立它
				if ( data[i]["sub"] && data[i]["sub"].length > 0 ) {
					html += '<ul class="children">';
					create( data[i]["sub"] );
					html += '</ul>';
				}

				html += "</li>";

			}//end for

		}//end if 	

	}//end create 

	function build ( data, target ) {

		create( data );

		html += "</ul>";

		if ( target.find ) {
			target.html( html );
		} else {
			target.innerHTML = html;
		}

	}

	//导出接口
	module.exports = {
		build: build
	}

});