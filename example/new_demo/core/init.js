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
	var menuData = require( "../data/menu_data" ).menuData;

	//建立菜单
	require( "../module/build_menu" ).build( menuData, $( "#sidebar" ) );

	//菜单逻辑
	require( "../module/menu" ).build( $( "#sidebar a" ), "children" );

    //iframe里面的逻辑
    /*
    if( $.browser.msie ) {
        //IE下iframe的load
        document.getElementById("article-iframe").onreadystatechange = function(){
            if( this.readyState == "complete" ) {
                var iframe = window.frames[ "article-iframe" ];
                require( "../module/iframe" ).control( iframe, $ );    
            }
        }

    } else {

        document.getElementById("article-iframe").onload = function(){
            var iframe = window.frames[ "article-iframe" ];
            require( "../module/iframe" ).control( iframe, $ );
        }

    }
    */

    //获取数据
    require("../module/get_data").getData( $("#template"), $("#view") );

    //绑定生成DEMO点击
    require("../module/build_demo").show( $("#exec"), "code-content", "show-content" );

});