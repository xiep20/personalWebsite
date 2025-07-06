## 快速开始

本文将带你迅速了解 XLGlobe javascript API 的基本使用，学习如何基于 XLGlobe JavaScript API
开始地图应用的开发，使您在最短时间内成为 webgis 的开发者。
最简单的方式是看一个简单的示例, 该示例帮助您快速了解XLGlobe API 的基本使用，快速创建一张“地图”。

## 第一个示例

``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>基础地图</title>
    <script src="Cesium/Cesium.js"></script>
    <script src="XLGlobe.js"></script>
    <style type="text/css">
        @import url(libs/Cesium1.130/Widgets/widgets.css);
        @import url(libs/XLGlobe.css);

        html,
        body,
        #rjContainer {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
    </style>
</head>

<body>
    <div id="rjContainer"></div>
    <script>
        //初始化地图
        var Globe = new XLGlobe.Globe("rjContainer");
    </script>
</body>

</html>
```

### 示例展示 <p align="right"><a href="#/editor?type=baselayer%2Fcustommap&example=oneimg" target="_blank">Demo</a></p>

<iframe width="100%" height="430" src="#/editor?type=baselayer%2Fcustommap&example=oneimg" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

&emsp; 

&emsp; 

&emsp; 