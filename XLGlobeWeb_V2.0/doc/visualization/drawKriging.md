##  XLGlobe.Visualization.drawKriging(data, poly, option) 克里金插值

###### Parameters


|  Name |  Description |
| ------------ | ------------ |
|  data |  数据 |
|  poly |  多边形 |
|  option |  配置 |

###### option
|  Name |  Description |
| ------------ | ------------ |
|  propname |  值字段 |
|  krigingModel |  插值模型，可选'exponential'（指数）,'gaussian'（高斯）,'spherical'（球形） |
|  krigingSigma2 |  0 |
|  krigingAlpha |  100 |
|  alpha |  颜色透明度 |
|  width |  网格宽度 |
|  colors |  颜色数组 |
|  colorsNum |  颜色数量（颜色区间取值时可用） |

#### 示例

``` javascript
    var poly = [
          [
            [114.2, 30.4],
            [114.6, 30.4],
            [114.6, 30.8],
            [114.2, 30.8],
            [114.2, 30.4]
          ]
        ];
    var data = XLGlobe.Utils.util.randomPointsWithinBbox(114.2, 114.6, 30.4, 30.8, 10, 'geojson')
    var _Rectangle = XLGlobe.Visualization.drawKriging(data, poly, {
        propname: 'value',
        alpha: 0.8,
        colors: ["#ff0000", "#00ff00"],
        colorsNum: 8
    });
```
#### 示例展示
<iframe width="100%" height="430" src="#/editor?type=overlay%2Fpolygon&example=polygon_isosurface&label=等值面" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
