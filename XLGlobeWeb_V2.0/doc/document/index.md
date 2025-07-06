## new XLGlobe. Echarts. CombineEcharts(viewer, option)

[Echarts](https://www.jq22.com/demo/jquerypdf201808150005/pdf1.pdf "Echarts") 相关文档

###### Parameters

|  Name |  Description |
| ------------ | ------------ |
|  viewer |  地图可视化展示的主窗口 |
|  option |  [Echarts](https://echarts.apache.org/zh/option.html#title "echarts") 配置 |

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

###### 2. Echarts配置项

``` javascript
var option = {
    animation: !1,
    GLMap: {},
    series: [{
      name: ' 武汉Top10',
      type: 'lines',
      coordinateSystem: 'GLMap',
      zlevel: 1,
      effect: {
        show: true,
        period: 6,
        trailLength: 0.7,
        color: '#fff',
        symbolSize: 3
      },
      lineStyle: {
        normal: {
          color: '#a6c84c',
          width: 0,
          curveness: 0.2
        }
      },
      data: convertData(WHData)
    },
    {
      name: ' 武汉Top10',
      type: 'lines',
      coordinateSystem: 'GLMap',
      zlevel: 2,
      symbol: ['none', 'arrow'],
      symbolSize: 10,
      effect: {
        show: true,
        period: 6,
        trailLength: 0,
        symbol: planePath,//飞机svg
        symbolSize: 15
      },
      lineStyle: {
        color: '#a6c84c',
        width: 1,
        opacity: 0.6,
        curveness: 0.2
      },
      data: convertData(WHData)
    },
    {
      name: ' 武汉Top10',
      type: 'effectScatter',
      coordinateSystem: 'GLMap',
      zlevel: 2,
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke'
      },
      hoverAnimation: true,
      label: {
        show: true,
        position: 'right',
        formatter: '{b}'
      },
      symbolSize: function(val) {
          return val[2] / 3;
      },
      itemStyle: {
        normal: {
          color: '#f4e925',
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },
      data: WHData.map(function(dataItem) {
        return {
          name: dataItem[1].name,
          value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
        };
      })
    },
  ]
};
```

###### 3. 初始化Echarts

``` javascript
	var combineEcharts = new XLGlobe.Echarts.CombineEcharts(viewer, option);
```

#### 示例展示
<iframe width="100%" height="430" src="#/editor?type=visualization%2Fecharts&example=e_lcx&label=流出线" allowfullscreen="allowfullscreen" frameborder="0"></iframe>