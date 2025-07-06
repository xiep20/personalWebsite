# XLGlobe For WebGL

* XLGlobe是一个 JavaScript 库，它基于 WebGL 技术实现的三维客户端开发平台，可用于构建无插件、 跨浏览器的三维 GIS 应用程序，轻松实现三维场景的加载与分析与可视化展示，可帮助您在网站中构建功能丰富、交互性强、可定制的三维地图应用。

* 开发者无需关心 gis 地图相关原理就可以轻松创建地图应用。

## 引入

文件方式引入

获取文件后，只需要像普通的 JavaScript 库一样用 `<script>` 标签引入即可。

首先获取到Cesium开发包，先将Cesium引入到应用中，再引入XLGlobe。

``` html
  <script src="Cesium/Cesium.js"></script>
<script src="XLGlobe.js"></script>
```

另外还需要css样式

``` css
  @import url(Cesium/Widgets/widgets.css);
@import url(XLGlobe.css);
```

### 创建地图容器

``` html
<div id="rjContainer"></div>
```

### 地图初始化 

``` javascript
  var Globe = new XLGlobe.Globe("rjContainer");
```

&emsp; 

&emsp; 

&emsp; 