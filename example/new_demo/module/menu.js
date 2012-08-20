/*
*	@author guzhihao
*	@date 20120818
*	@info sidebar的菜单逻辑
*/

define( function( require, exports, module ) {

	var $ = require("jquery");	

	exports.build = function( target, childrenClass ) {

		//是否为jq对象
		if ( !target.find ) {
			target = $(target);
		}

		target.click( function( e ) {

			var parent = $( this ).parent();
			var children = parent.children( "." + childrenClass );

			if ( children.length > 0 ) {
				if ( parent.hasClass( "show-children" ) ) {
					children.stop(true,true).slideDown(); 
					parent.removeClass("show-children").addClass("hide-children");
				} else {
					children.stop(true,true).slideUp();
					parent.removeClass("hide-children").addClass("show-children");
				}
			}//end if

		});

	};//end build

});