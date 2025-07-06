## 快速开始

XLGlobe支持在创建好的三维场景中添加种类丰富的数据图层

## 如何使用

添加地形图层

``` javascript
//地形
terrainProvider: new XLGlobe.Layer.layerTerrainProvider({
    url: "dem_tiles",
    requestWaterMask: true,
    requestVertexNormals: true
})
//arcgis地形
terrainProvider: new XLGlobe.Layer.ArcGISTiledElevationTerrainProvider({
    url: 'http://services.arcgisonline.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer',
    proxy: new Cesium.DefaultProxy('/terrain/')
});
```

添加影像图层

``` javascript
//xyz切片
var baselayer = new XLGlobe.Layer.TileImageryProvider({
    "url": "tile/{z}/{x}/{y}.jpg",
    "maximumLevel": 4
});
//google
var baselayer = new XLGlobe.Layer.GoogleImageryProvider({
    layer: "img_d"
});
```

其它图层

``` javascript
//单张图片
var baselayer = new XLGlobe.Layer.createImageryProvider({
    "type": "image",
    "url": "img/world.jpg"
});
//wmts服务
var layer = new XLGlobe.Layer.WMTSImageryProvider({
    name: "地图",
    type: "wmts",
    url: "/service/wmts",
    layer: "china:light",
    style: "",
    format: "image/png",
    tileMatrixSetID: "EPSG:4326",
    crs: "4326",
    alpha: .5,
    visible: true
});
```

### 示例展示 <p align="right"><a href="#/editor?type=baselayer%2Fter&example=terrain" target="_blank">地形</a></p>

<iframe width="100%" height="430" src="#/editor?type=baselayer%2Fter&example=terrain" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

&emsp; 

&emsp; 

&emsp; 