{
  "info-title": "PNG24 Alpha 背景图",
  "intro-content": "读取png源码,判断是否为png24 且包含alpha半透明,如存在,在ie6下会自动转化为filter实现兼容(本实现无相对路径问题)",
  "set-value-content": "<table>\n                    <tr><th>属性名</th><th>属性值</th></tr>\n                    <tr><td>background-image</td><td>[url]</td></tr>\n                </table>\n                [url]为图片路径。",
  "code": "<style>\n    #test {\n        background: #cccccc;\n        display: block;\n        position: relative;\n        width: 100px;\n        height: 100px;\n    }\n    #test1 {\n        background-image: url(/example/new_demo/images/png31.png);\n        position: absolute;\n        top: 30px;\n        left: 30px;\n        width: 128px;\n        height: 128px;\n        text-align: center;\n    }\n</style>\n<div id=\"test\">我是demo<div id=\"test1\">我也是demo</div></div>"
}