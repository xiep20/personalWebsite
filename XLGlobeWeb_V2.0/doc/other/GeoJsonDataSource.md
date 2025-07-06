##  new XLGlobe.GeoJsonDataSource() 加载geojson数据

#### 示例

``` javascript
var RJCesFun = new XLGlobe.GeoJsonDataSource();
$.get('./examples/pages/layer/data/wfsData.json',function(resData){//模拟arcgis数据
    var dataPromise = RJCesFun.load(resData);
})
```