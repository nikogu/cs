{
  "info-title": "图形边框",
  "intro-content": "设置或检索对象的边框样式使用图像来填充。",
  "set-value-content": "<table>\n                    <tr><th>属性名</th><th>属性值</th></tr>\n                    <tr><td>border-image</td><td>border-image-source || border-image-slice [ / border-image-width? [ / border-image-outset ]? ]? || border-image-repeat</td></tr>\n                </table>\n                具体参数请点击<a href=\"http://www.php100.com/manual/css3_0/border-image.shtml\" target=_blank>查看详细属性</a>",
  "code": "<style>\n    #test {\n        background: #cccccc;\n        display: block;\n        position: relative;\n        width: 100px;\n        height: 100px;\n        -moz-border-image:url(/example/new_demo/images/border.jpg) 11; \n        -webkit-border-image:url(/example/new_demo/images/border.jpg) 11;\n    }\n    #test1 {\n        background: rgba(80,34,90,0.5);\n        position: absolute;\n        top: 30px;\n        left: 30px;\n        width: 100px;\n        height: 100px;\n        text-align: center;\n        -moz-border-image:url(/example/new_demo/images/border.jpg) 0; \n        -webkit-border-image:url(/example/new_demo/images/border.jpg) 0;\n    }\n</style>\n<div id=\"test\">提供2个参数<div id=\"test1\">提供4个参数</div></div>"
}