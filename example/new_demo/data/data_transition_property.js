{
  "info-title": "transition动画增强",
  "intro-content": "创建动画",
  "set-value-content": "<table>\n                    <tr><th>属性名</th><th>属性值</th></tr>\n                    <tr><td>transition-property</td><td>[?]</td></tr>\n                    <tr><td>transition-duration</td><td>[?]</td></tr>\n                    <tr><td>transition-timing-function</td><td>[?]</td></tr>\n                </table>\n                具体参数请点击<a href=\"http://www.zhangxinxu.com/css3/css3-transition-property.php\" target=_blank>查看详细属性</a>",
  "code": "<style>\n.transition_property{\n    -webkit-transform:rotate(10deg);\n    -webkit-transition-property:all; \n    -webkit-transition-duration:0.5s; \n    -webkit-transition-timing-function:ease-in;\n}\n.transition_property:hover{\n    -webkit-transform:rotate(40deg);\n}\n</style>\n鼠标滑过看效果\n<img class=\"transition_property\" alt=\"picture\" src=\"/example/new_demo/images/girl.gif\" width=\"176\" height=\"220\" />"
}