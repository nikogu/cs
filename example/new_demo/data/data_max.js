{
  "info-title": "溢出控制",
  "intro-content": "控制超出大小的切除和不足大小的补充。",
  "set-value-content": "<table>\n                    <tr><th>属性名</th><th>属性值</th></tr>\n                    <tr><td>max-width</td><td>[width]</td></tr>\n                    <tr><td>max-height</td><td>[height]</td></tr>\n                    <tr><td>min-width</td><td>[width]</td></tr>\n                    <tr><td>mmin-height</td><td>[height]</td></tr>\n                </table>\n                width:最大/最小宽度，height:最大/最小高度。",
  "code": "<style>\n    #test {\n        background: #cccccc;\n        display: block;\n        position: relative;\n        max-width: 50px;\n        max-height: 50px;\n    }\n    #test1 {\n        background: rgba(80,34,90,0.5);\n        position: absolute;\n        top: 30px;\n        left: 30px;\n        min-width: 200px;\n        min-height: 200px;\n        text-align: center;\n    }\n</style>\n<div id=\"test\">demo1</div><div id=\"test1\">demo2</div>"
}