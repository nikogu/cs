/**
 * SeaJS 入口文件
 * @author guzhihao-niko
 * @data 20120818
**/

//配置loader
seajs.config({

    //配置别称
    alias : {
        'jquery' : '../module/jquery.js'
    },

    charset : 'utf-8'

});

//初始化
define( function(require) {
	//基础
	var $ = require( "jquery" );

	//数据
	var menuData = require( "../module/data" ).menuData;

	//建立菜单
	require( "../module/build_menu" ).build( menuData, $( "#sidebar" ) );

	//菜单逻辑
	var menu = require( "../module/menu" );
    menu.build( $( "#sidebar a" ), "children" );

    //iframe里面的逻辑
    window.frames[ "article-iframe" ].onload = function(){
    	var iframe = window.frames[ "article-iframe" ];
    	require( "../module/iframe" ).control( iframe, $ );
    }
});