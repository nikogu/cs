/*
*	@author guzhihao
*	@date 20120818
*	@info data数据信息
*/

define( function( require, exports, module ) {
	var menuData = 
		[
			{
				"title":"属性",
				"sub":
				[
					{
						"title":"圆角",
						"sub":
						[
							{
								"title":"圆角1",
								"info":"sample_fixed.html"
							}
							,{
								"title":"圆角2",
								"info":"12"
							}
						]
					}
					,{
						"title":"变形",
						"info":"2"
					}
				]	
			}
			,{
				"title":"选择器",
				"sub":
				[
					{
						"title":"子选择器",
						"info":"3"
					}
					,{
						"title":"属性选择器",
						"info":"4"
					}
				]	
			}
			,{
				"title":"语法与规则",
				"sub":[]	
			}	
			,{
				"title":"单位",
				"sub":[]	
			}
		];
	exports.menuData = menuData;
});