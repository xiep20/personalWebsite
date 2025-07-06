## 快速开始

接口提供弹窗接口，方便在地图上展示属性信息。

## 如何使用

地图上显示div弹窗

``` javascript
        //弹窗
        var popup = new XLGlobe.Utils.Popup({
            viewer: viewer,
            className: "bx-popup-ctn1"
        });
        //添加点
        popup.add({
            geometry: geometry,
            content: {
                header: "名称",
                content: ``
            },
            isclose: false
        });
```

地图上显示文字弹窗信息

``` javascript
//弹窗
var tooltip = new XLGlobe.Utils.Tooltip({
    viewer: viewer,
    width: 130,
    lineheight: 20,
});
//添加点
tooltip.add({
    id: '信息牌',
    position: position,
    header: "标题",
    content: "名称：名称<br/>地址：长咀科技园"
});
```

### 示例展示 <p align="right"><a href="#/editor?type=overlay%2Fpoint&example=point_div" target="_blank">Demo</a></p>

<iframe width="100%" height="430" src="#/editor?type=overlay%2Fpoint&example=point_div" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### 示例展示 <p align="right"><a href="#/editor?type=overlay%2Fpoint&example=point_svg" target="_blank">Demo</a></p>

<iframe width="100%" height="430" src="#/editor?type=overlay%2Fpoint&example=point_svg" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

&emsp; 

&emsp; 

&emsp; 
