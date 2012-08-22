/*
*	@author guzhihao
*	@date 20120818
*	@info 生成模版
*/

define( function( require, exports, module ) {

	var $ = require("jquery");	

	//模版生成
	function build( data, template, view ) {

		if ( template.find ) {
			var	source = template[0].innerHTML;
		} else {
			var source = template.innerHTML;
		}

		//取的模版变量
		var match = source.match(/<%=(.*)=%>/ig);

		//替换模版变量
		for ( var i = match.length; i-- ; ) {

			var value = getValue( match[i] ),
				temp = match[i];

			var re = new RegExp( temp , "gi" );

			if( value in data ) {

				/*
					while( source.indexOf(temp) > -1 ) {
					source = source.replace( temp, data[value] );
				}
				*/

				if ( $.isArray( data[value] ) ) {

					var str = "",
						arr = data[value];
					for ( var j=0; j<arr.length; j++ ) {
						str += arr[j] + "\n";
					}//end for
					source = source.replace( re, str );

				} else {
					source = source.replace( re, data[value] );
				}//end if

			}//end if

		}//end for

		//插入HTML
		if ( template.find ) {
			view[0].innerHTML = source;
		} else {
			view.innerHTML = source;
		}//end if

	}//end build	

	//工具函数-取值
	function getValue( str ){
		return $.trim(str.replace(/(<%=)|(=%>)/ig,""));
	}

	module.exports = {
		build: build
	}
});