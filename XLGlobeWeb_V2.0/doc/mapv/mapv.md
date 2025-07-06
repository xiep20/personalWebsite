## new XLGlobe.MapV.CombineMapV(viewer,data,options)

[MapV](https://mapv.baidu.com/ "MapV") 图层

###### Parameters

|  Name |  Description |
| ------------ | ------------ |
|  viewer |  地图可视化展示的主窗口 |
|  data |  数据 |
|  options |  MapV配置项 |

#### 如何使用

###### 1. 初始化地图

``` javascript
  
  var Globe = new XLGlobe.Globe("rjContainer", {});
  var viewer = Globe.viewer;
  var scene = viewer.scene;
  //google底图
  var baselayer = [
      new XLGlobe.Layer.GoogleImageryProvider({
          layer: "img_d"
      })
  ];
  Globe.addBaseLayer(baselayer);
  viewer.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(114.3896, 30.6628, 8000000)
  });
```

###### 2. 获取数据

``` javascript
  var data = [];
  $.get('/examples/pages/visualization/mapV/data/china-point.json', function (res) {
    for (var i = 0; i < res[0].length; i++) {
      var geoCoord = res[0][i].geoCoord;
      data.push({
        geometry: {
          type: 'Point',
          coordinates: geoCoord 
        },
        time: Math.random() * 10
      });
    }
  });
```
###### 3. MapV配置项

``` javascript
   var options = {
        fillStyle: 'rgba(255, 250, 50, 0.6)',
        size: 3,
        draw: 'simple',
        animation: {
          type: 'time',
          stepsRange: {
              start: 0,
              end: 10
          },
          trails: 1,
          duration: 6,
        }
      }
```
###### 4. 初始化MapV

``` javascript
	var MapVLayer = new XLGlobe.MapV.CombineMapV(viewer,data,options);
```

#### 示例展示
<iframe width="100%" height="430" src="#/editor?type=visualization%2FmapV&example=m_point_d&label=动画点" allowfullscreen="allowfullscreen" frameborder="0"></iframe>