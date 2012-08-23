{
  "info-title": "圆角增强",
  "intro-content": "设置或检索对象使用圆角边框。",
  "set-value-content": "<table>\n                    <tr><th>属性名</th><th>属性值</th></tr>\n                    <tr><td>border-radius</td><td>[ length | percentage ]{1,4} [ / [ length | percentage ]{1,4} ]?</td></tr>\n                </table>\n                具体参数请点击<a href=\"http://www.php100.com/manual/css3_0/border-radius.shtml\" target=_blank>查看详细属性</a>",
  "code": "<style>\n    #test {\n        background: #cccccc;\n        display: block;\n        position: relative;\n        width: 100px;\n        height: 100px;\n        border-radius:10px 20px;\n    }\n    #test1 {\n        background: rgba(80,34,90,0.5);\n        position: absolute;\n        top: 30px;\n        left: 30px;\n        width: 100px;\n        height: 100px;\n        text-align: center;\n        border-radius:10px 20px 30px 40px;\n    }\n</style>\n<div id=\"test\">提供2个参数<div id=\"test1\">提供4个参数</div></div>"
}