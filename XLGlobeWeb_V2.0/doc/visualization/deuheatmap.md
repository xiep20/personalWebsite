##  new XLGlobe. Visualization. RJHeatMap() 热力图

###### Parameters

|  Name |  Description |
| ------------ | ------------ |

#### 示例

``` javascript
    var RJHeatMap = new XLGlobe.Visualization.RJHeatMap()
```

#### new RJHeatMap. CesiumHeatmap()

###### Parameters

|  Name |  Description |
| ------------ | ------------ |
|  viewer | cesium viewer |
|  geojson |  geojson格式数据或geojson文件路径 |
|  option | 配置 (可选) |
|  option.value |  大小值或字段名 |
|  option.maxOpacity |  最大透明度 |
|  option.minOpacity |  最小透明度 |
|  option.radius |  热力半径 |
|  option.gradient |  热力图颜色 |

#### 示例

``` javascript
    var RJHeatMap = new XLGlobe.Visualization.RJHeatMap()
    var heatmap = new RJHeatMap.CesiumHeatmap(viewer, geojson, {
        maxOpacity: .9,
        radius: 10,
        minOpacity: .1,
        gradient: {
            '.3': 'blue',
            '.5': 'green',
            '.7': 'yellow',
            '.95': 'red'
        },
        value: 'serial'
    });
```

#### new RJHeatMap. CesiumHeatmapGL(viewer, geojson, options)

###### Parameters

|  Name |  Description |
| ------------ | ------------ |
|  viewer | cesium viewer |
|  geojson |  geojson格式数据或geojson文件路径 |
|  option | 配置 (可选) |
|  option.size |  热力点的大小（值或字段名） |
|  option.intensity |  发光强度(0-1) |
|  option.gradientTexture |  颜色纹理（用于代替颜色计算的纹理，可以是路径或图像） |
|  option.intensityToAlpha |  是否可设强度 |

#### 示例

``` javascript
    var RJHeatMap = new XLGlobe.Visualization.RJHeatMap()
    new RJHeatMap.CesiumHeatmapGL(viewer, geojson, {
        size: "value", //size:100
        intensity: .5
    });
```

#### 示例展示

<iframe width="100%" height="430" src="#/editor?type=visualization%2Fvisualization_base&example=heat&label=热区图层" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
