## 快速开始

XLGlobe开发实际功能的时候，需要调整或者固定相机视角，支持用户完成操作吗，控制场景的视图。有很多方法可以操作相机，如旋转、缩放、平移和飞到目的地。

## 如何使用

设置相机视角

``` javascript
//飞到目的地
Globe.viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(x, y, z)
});
//设置相机的位置，方向和变换。
Globe.viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(x, y, z),
    orientation: {
        heading: heading,
        pitch: pitch,
        roll: roll
    }
});
```

### 示例展示 <p align="right"><a href="#/editor?type=scene%2Froaming&example=operaCamera" target="_blank">Demo</a></p>

<iframe width="100%" height="430" src="#/editor?type=scene%2Froaming&example=operaCamera" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

&emsp; 

&emsp; 

&emsp; 
