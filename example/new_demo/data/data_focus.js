{
  "info-title": "焦点效果",
  "intro-content": "在元素获得焦点时向元素添加特殊的样式",
  "set-value-content": "<table>\n                    <tr><th>属性名</th><th>属性值</th></tr>\n                    <tr><td>:focus</td><td>-</td></tr>\n                </table>\n                具体说明请点击<a href=\"http://www.w3school.com.cn/css/pr_pseudo_focus.asp\" target=_blank>查看详细属性</a>",
  "code": "<style>\n    #test {\n        background: #cccccc;\n        border: 3px solid #666;\n        display: block;\n        width: 100px;\n        height: 100px;\n    }\n    #test:focus {\n        background: #abc;\n        border: 3px solid #ccc;\n        display: block;\n        width: 100px;\n        height: 100px;\n    }\n\n</style>\n<input type=\"text\" id=\"test\" value=\"获得焦点颜色改变\">"
}