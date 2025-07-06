## 快速开始

控件是用户和地图交互的重要手段，友好的交互控件功能能给使用者带来更好的体验。

## 如何使用

``` javascript
    var Globe = new XLGlobe.Globe("rjContainer", {
        homeButton: true, //回到默认视域按钮
        sceneModePicker: true, //是否显示投影方式控件
        baselayervis: true, //底图切换显示
        baseLayerPicker: true, //是否显示图层选择控件
        navigationHelpButton: true, //导航帮助控件
        animation: true, //是否创建动画小器件，左下角仪表
        timeline: true, //是否显示时间线控件
        fullscreenButton: true, //是否显示全屏控件
        geocoder: true, //是否显示地名查找控件
        logo: true, //是否显示logo
        navigation: true, //导航控件
        ZoomControls: true, //缩放控件
        DistanceLegend: true, //距离图例控件
        CompassOuterRing: true, //指南针外环
        mouseLocation: true //鼠标位置提示控件
    });
```

## 更多

除了上面的控件，还有其它一些控件，并且支持自定义扩展

  右键菜单
通过 XLGlobe. Control. ContextMenu 我们能设置自己的右键菜单功能，目前已经内置了
查看此处坐标(seeCoord)、显示此处经纬度（longlat）、开启深度监测（opendepth）、关闭深度监测（closedepth）、
初始视角（firstperspective）、绕点飞行（flyAroundPoint）、停止绕点飞行（stopFlyAroundPoint）

``` javascript
    //右键菜单
    var contextmenu = new XLGlobe.Control.ContextMenu({
        viewer: Globe.viewer,
        menuList: [{
                type: 'seeCoord'
            },
            {
                type: 'longlat'
            }, {
                type: 'opendepth'
            }, {
                type: 'closedepth'
            }, {
                type: 'firstperspective'
            }, {
                type: 'flyAroundPoint'
            }, {
                type: 'stopFlyAroundPoint'
            }
        ]
    });
```

自定义右键菜单

``` javascript
    //右键菜单
    var contextmenu = new XLGlobe.Control.ContextMenu({
        viewer: Globe.viewer,
        menuList: [{
            text: "弹窗对话",
            type: 'dialog',
            icon: 'icon-htmal5icon27',
            callback: function(e) {
                XLGlobe.eDialog.msg('弹出了一个信息');
            }
        }]
    });
```

我们能够通过 XLGlobe.Control.IControl 来自定义我们的控件，如下：

``` javascript
//自定义控件
var ic = new XLGlobe.Control.IControl({
    className: "controlbtn control_cestom",
    name: "自定义控件（旋转）",
    _globe: Globe,
    content: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path d="M512 928c-125.44 0-224-182.72-224-416s98.56-416 224-416 224 182.72 224 416-98.56 416-224 416z m0-768c-75.84 0-160 144.64-160 352s84.16 352 160 352 160-144.64 160-352-84.16-352-160-352z" fill="#ffffff" p-id="1926"></path><path d="M699.52 797.76a623.04 623.04 0 0 1-299.52-91.84C198.08 589.44 88.96 412.8 151.68 304s270.4-102.72 472.32 14.08 311.04 293.12 248.32 401.92c-30.08 51.84-93.12 77.76-172.8 77.76zM324.16 290.56c-57.6 0-100.16 16.32-117.12 45.44-37.76 65.6 45.44 210.88 224 314.56s346.88 103.04 384 37.44-45.44-210.88-224-314.56a560.32 560.32 0 0 0-266.88-82.88z" fill="#ffffff" p-id="1927"></path><path d="M324.48 797.76c-79.68 0-142.72-25.92-172.8-77.76-64-108.8 46.4-285.44 248.32-401.92S809.6 195.2 872.32 304s-46.4 285.44-248.32 401.92a623.04 623.04 0 0 1-299.52 91.84zM699.84 290.56a560.32 560.32 0 0 0-267.84 82.88c-179.52 103.68-262.72 248.96-224 314.56s205.44 66.24 384-37.44 262.72-248.96 224-314.56c-16-29.12-58.56-45.44-116.16-45.44z" fill="#ffffff" p-id="1928"></path><path d="M512 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#ffffff" p-id="1929"></path><path d="M512 592a80 80 0 1 1 80-80 80 80 0 0 1-80 80z m0-128a48 48 0 1 0 48 48 48 48 0 0 0-48-48z" fill="#ffffff" p-id="1930"></path></svg>`,
    click: function(e, _globe) {
        Globe.animationFly(114.429596, 30.43548, 300, 335, -36.5, 360, 2);
    },
    remove: function() {}
});
```

### 示例展示 <p align="right"><a href="#/editor?type=scene%2Fcontorl&example=contorl" target="_blank">Demo</a></p>

<iframe width="100%" height="430" src="#/editor?type=scene%2Fcontorl&example=contorl" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

&emsp; 

&emsp; 

&emsp; 