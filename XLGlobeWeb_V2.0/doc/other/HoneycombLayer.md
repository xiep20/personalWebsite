##  XLGlobe.MapV.HoneycombLayer(optino) MapV

###### Parameters


|  Name |  Description |
| ------------ | ------------ |
|  viewer |  viewer |
|  point |  点数据集合 |
|  billboardStyle |  点样式 |
|  offsetHeight |  偏移高度 |

#### 示例

``` javascript
    var point = [{
          lng: 114.40526537187039,
          lat: 30.45970187654479,
          field: {
            name: '光电谷',
            add: '长咀科技园'
          }
        },
        {
          lng: 114.40410519108665,
          lat: 30.458322827005723,
          field: {
            name: '光电谷1楼',
            add: '长咀科技园'
          }
        }
      ]
    var billboardStyle = {
      image: "images/marker/mark1.png", //marker点图片路径
      scale: 0.8 //设置图片大小
    }
    let offsetHeight = 3.5 //矢量点偏移高度

    XLGlobe.PointOnMode(viewer, point, billboardStyle, offsetHeight)
```
