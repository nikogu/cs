{
  "info-title": "透明背景色",
  "intro-content": "RGB色彩模式（也翻译为“红绿蓝”，比较少用）是工业界的一种颜色标准，是通过对红(R)、绿(G)、蓝(B)三个颜色通道的变化以及它们相互之间的叠加来得到各式各样的颜色的，RGB即是代表红、绿、蓝三个通道的颜色，这个标准几乎包括了人类视力所能感知的所有颜色，是目前运用最广的颜色系统之一。RGBA在RGB的基础上多了控制alpha透明度的参数。",
  "set-value-content": "<table>\n                    <tr><th>属性名</th><th>属性值</th></tr>\n                    <tr><td>background-color</td><td>rgba[r, g, b, a]</td></tr>\n                </table>\n                rgba[r, g, b, a]中参数r、g、b分别代表红色、绿色、蓝色值，取值范围为0~255的正整数或者百分数，参数a为Alpha不透明度参数，取值为0~1之间，不可为负值。",
  "code": "<style>\n    #test {\n        background: #cccccc;\n        display: block;\n        position: relative;\n        width: 100px;\n        height: 100px;\n    }\n    #test1 {\n        background: rgba(80,34,90,0.5);\n        position: absolute;\n        top: 30px;\n        left: 30px;\n        width: 100px;\n        height: 100px;\n        text-align: center;\n    }\n</style>\n<div id=\"test\">我是不透明的<div id=\"test1\">我是透明的</div></div>"
}