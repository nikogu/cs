/*
*	@author guzhihao
*	@date 20120818
*	@info data数据信息
*/

define( function( require, exports, module ) {
	var menuData = 
		[
			{
				"title":"边框/背景/图形类",
				"sub":
				[
					{
						"title":"半透明支持",
						"info":"../data/data-fixed.js"
					},
					{
						"title":"PNG24 Alpha 背景图",
						"info":"sample_PNG.html"
					},
					{
						"title":"透明背景色",
						"info":"sample_rgba.html"
					},
					{
						"title":"线性渐变",
						"info":"sample_linear_gradient.html"
					},
					{
						"title":"阴影增强",
						"info":"sample_shadow.html"
					},
					{
						"title":"圆角增强",
						"info":"ow.html"
					},
					{
						"title":"图形边框",
						"info":"w.html"
					}
				]	
			}
			,{
				"title":"选择器语法",
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
				"title":"变形/动画/布局类",
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
		];
	exports.menuData = menuData;
});