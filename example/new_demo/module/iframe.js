/*
*	@author guzhihao
*	@date 20120818
*	@info iframe
*/
define( function( require, exports, module ) {

	function control ( iframe , $ ) {
		var win = iframe.window,
			dom = iframe.document;
			win.$ = $;

		var changeBtn = $(dom).find("#exec");
		changeBtn.click( function() {
			var code = dom.getElementById("code-content").value,
				show = dom.getElementById("show-content");	
			console.log( code );
			show.innerHTML = code;
		});

	}

	module.exports = {
		control : control
	}

});