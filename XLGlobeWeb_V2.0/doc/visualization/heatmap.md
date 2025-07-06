##  new XLGlobe.Visualization.HeatMap(viewer, data, bounds, option) 热力图

###### Parameters

|  Name |  Description |
| ------------ | ------------ |
|  viewer | cesium viewer |
|  data |  数据 |
|  bounds |  热力图层边界(可选) |
|  option | 配置 (可选) |
|  option.backgroundColor |  背景 默认值  rgba(255,0,0,0) |
|  option.radius |  热力图半径 默认值 50 |
|  option.maxOpacity |  最大不透明度 默认值  0.93 |
|  option.minOpacity |  最小不透明度 默认值  0 |
|  option.blur |  模糊度 默认值 0.75 |
|  option.gradient |  热力渐变色 默认值 '.1': 'blue', '.35': 'yellow', '.6': 'orange', '.95': 'red' |

#### 示例

``` javascript
    var d = '';
    var bounds = {
          west: 115.8784,
          east: 115.9614,
          south: 39.9912,
          north: 40.0381
        }
    heatMapObj = new XLGlobe.Visualization.HeatMap(viewer, d, bounds, {
      gradient: {
        '.3': 'blue',
        '.5': 'green',
        '.7': 'yellow',
        '.95': 'red'
      },
      backgroundColor: "rgba(15 91 127,0)",
      radius: 30,
      maxOpacity: .93,
      minOpacity: .5,
      blur: .75
    });
```
#### 示例展示
<iframe width="100%" height="430" src="#/editor?type=visualization%2Fvisualization_base&example=heat&label=热区图层" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
