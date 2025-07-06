## 快速开始

用户有时需要在地图中进行一些要素的绘制，提供了前端实时进行点、线、面的绘制接口。

## 如何使用

地图上各种形状进行绘制

``` javascript
//绘制控件
var drawControl = XLGlobe.Utils.draw({
    viewer: viewer,
    hasEdit: true,
    onStopDrawing: function(entity) {},
    onStartEditing: function(entity) {},
    onChangeEditing: function(entity) {},
    onStopEditing: function(entity) {}
});
//绘制文字
drawControl.startDraw({
    type: "label",
    style: {
        text: "文字点",
        color: "#0081c2",
        font_size: 50,
        border: true,
        border_color: "#ffffff",
        border_width: 2
    }
});
//绘制点
drawControl.startDraw({
    type: "point",
    style: {
        pixelSize: 12,
        color: '#3388ff',
    }
});
//绘制线
drawControl.startDraw({
    type: "polyline",
    style: {
        color: "#55ff33",
        width: 3,
        clampToGround: false,
    }
});
//绘制面
drawControl.startDraw({
    type: "polygon",
    style: {
        color: "#29cf34",
        opacity: 0.5,
        clampToGround: false,
        extrudedHeight: 1
    }
});
//绘制墙
drawControl.startDraw({
    type: "wall",
    style: {
        color: "#8a1930",
        opacity: 0.8,
        extrudedHeight: 200,
    }
});
```

### 示例展示 <p align="right"><a href="#/editor?type=overlay%2Fplot&example=plot-overlay" target="_blank">Demo</a></p>

<iframe width="100%" height="430" src="#/editor?type=overlay%2Fplot&example=plot-overlay" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

&emsp; 

&emsp; 

&emsp; 
