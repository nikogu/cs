{
  "info-title": "半透明支持",
  "intro-content": "检索或设置对象的不透明度。IE6、IE7、IE8及以下不支持此参数值。",
  "set-value-content": "<table>\n                    <tr><th>属性名</th><th>属性值</th></tr>\n                    <tr><td>opacity</td><td>[number]</td></tr>\n                </table>\n                使用浮点数[number]指定对象的不透明度。值被约束在[0.0-1.0]范围内，如果超过了这个范围，其计算结果将截取到与之最相近的值",
  "code": "<style>\n    #test {\n        background: #cccccc;\n        display: block;\n        position: relative;\n        width: 100px;\n        height: 100px;\n        opacity: 0.8;\n    }\n    #test1 {\n        background: #999;\n        position: absolute;\n        top: 30px;\n        left: 30px;\n        width: 100px;\n        height: 100px;\n        text-align: center;\n        opacity: 0.3;\n    }\n        </style>\n<div id=\"test\">我是透明的<div id=\"test1\">我也是透明的</div></div>"
}