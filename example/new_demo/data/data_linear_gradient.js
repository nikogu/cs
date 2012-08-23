{
  "info-title": "线性渐变",
  "intro-content": "用线性渐变创建图像",
  "set-value-content": "<table>\n                    <tr><th>属性名</th><th>属性值</th></tr>\n                    <tr><td>linear-gradient</td><td>[ point,]? color-stop[, color-stop]+</td></tr>\n                    <tr><td>point</td><td>[ left | right ]? [ top | bottom ]? || angle?</td></tr>\n                    <tr><td>color-stop</td><td>color [ length | percentage ]?</td></tr>\n                </table>\n                具体参数请点击<a href=\"http://www.cnblogs.com/gaoxue/articles/CSS3Gradient-1.html\" target=_blank>查看详细属性</a>",
  "code": "<style>\n    #test {\n        background: #cccccc;\n        display: block;\n        position: relative;\n        width: 100px;\n        height: 100px;\n    }\n    #test1 {\n        background: rgba(80,34,90,0.5);\n        position: absolute;\n        top: 30px;\n        left: 30px;\n        width: 100px;\n        height: 100px;\n        text-align: center;\n    }\n</style>\n<div id=\"test\">我是不透明的<div id=\"test1\">我是透明的</div></div>"
}