{
  "info-title": "阴影增强",
  "intro-content": "设置或检索对象阴影",
  "set-value-content": "<table>\n                    <tr><th>属性名</th><th>属性值</th></tr>\n                    <tr><td>box-shadow</td><td>none | shadow [ , shadow ]*</td></tr>\n                    <tr><td>shadow</td><td>inset? & [ length{2,4} & color? ]</td></tr>\n                </table>",
  "code": "<style>\n    #test {\n        background: #ccc;\n        -webkit-box-shadow:5px 5px rgba(0,0,0,.6);\n        display: block;\n        position: relative;\n        width: 100px;\n        height: 100px;\n    }\n    #test1 {\n        background: #ccc;\n        -webkit-box-shadow:2px 2px 5px 1px rgba(0,0,0,.6) inset;\n        position: absolute;\n        top: 30px;\n        left: 30px;\n        width: 100px;\n        height: 100px;\n        text-align: center;\n    }\n</style>\n<div id=\"test\">我是透明的<div id=\"test1\">我是透明的</div></div>"
}