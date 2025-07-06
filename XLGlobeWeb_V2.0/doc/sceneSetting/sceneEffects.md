## 快速开始

XLGlobe中内置有各种场景特效，如 开场动画、雨雪雾天气效果、粒子效果等。

## 如何使用

设置天气效果

``` javascript
//雪
var skyBox = new XLGlobe.Scene.sceneEffects.weatherEffects(viewer, {
    name: "雪",
    type: "snow"
});
//雨
var skyBox = new XLGlobe.Scene.sceneEffects.weatherEffects(viewer, {
    name: "雨",
    type: "rain"
});
```

粒子效果

``` javascript
//粒子特效
var particalSystem = new XLGlobe.Scene.sceneEffects.ParticalSystem(viewer);
//粒子可调试
var particleSystemEx = new XLGlobe.Scene.sceneEffects.ParticleSystemEx(viewer, {
    position: position,
    viewModel
})
```

## 场景特效（XLGlobe. Scene.sceneEffects）

| 控件               | 简介           | 
| ------------------ | ------------- |
| weatherEffects     | 天气特效       |
| WaterReflection    | 水面倒影       |
| ParticalSystem     | 粒子特效       |
| CircleScanSystem   | 扩散及扫描特效 |
| ParticleSystemEx   | 粒子可调试     |

### 示例展示 <p align="right"><a href="#/editor?type=scene%2Feffect&example=snow" target="_blank">天气特效</a></p>

<iframe width="100%" height="430" src="#/editor?type=scene%2Feffect&example=snow" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### 示例展示 <p align="right"><a href="#/editor?type=scene%2Feffect&example=partical_system" target="_blank">雨雪火焰粒子特效</a></p>

<iframe width="100%" height="430" src="#/editor?type=scene%2Feffect&example=partical_system" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

&emsp; 

&emsp; 

&emsp; 
