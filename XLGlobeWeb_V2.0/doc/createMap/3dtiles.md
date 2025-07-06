## 快速开始

XLGlobe基于cesium开发，支持加载3dtiles格式数据。

## 如何使用

加载3DTiles

``` javascript
//加载人工模型
var tiles3d = new XLGlobe.Model.load3DTiles(viewer, {
    url: "tiles/tileset.json",
    hideGlobe: false,
    isZoomTo: true,
    height: 0
});
```

### 示例展示 <p align="right"><a href="#/editor?type=model%2F3dtiles&example=model_rgmx" target="_blank">加载模型</a></p>

<iframe width="100%" height="430" src="#/editor?type=model%2F3dtiles&example=model_rgmx" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

&emsp; 

&emsp; 

&emsp; 
