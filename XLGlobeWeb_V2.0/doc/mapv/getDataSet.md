## XLGlobe.MapV.getDataSet(geojson) 将geojson数据转换为MapV数据

[MapV](https://mapv.baidu.com/ "MapV") 图层

###### Parameters

|  Name |  Description |
| ------------ | ------------ |
|  geojson |  geojson数据 |

#### 示例

``` javascript
    var data = {
      type: "FeatureCollection",
      features:[
        {
          geometry: {
            type: "Polygon", 
            coordinates: [[96.416, 42.7588], [96.416, 42.7148],[95.9766, 42.4951],[96.0645, 42.3193],[96.2402, 42.2314]]
          },
          properties: {id: "65", name: "新疆", cp: [84.9023, 41.748], childNum: 18},
          type: "Feature"
        },
        {
          geometry: {
            type: "Polygon", 
            coordinates: [[79.0137, 34.3213], [79.1016, 34.4531],[79.8047, 34.4971],[79.8926, 34.8047],[80.2441, 35.2002]]
          },
          properties: {id: "54", name: "西藏", cp: [88.7695, 31.6846], childNum: 7},
          type: "Feature"
        },
        {
          geometry: {
            type: "Polygon", 
            coordinates: [[97.207, 42.8027], [99.4922, 42.583],[100.8105, 42.6709], [101.7773, 42.4951],[102.041, 42.2314]]
          },
          properties: {id: "15", name: "内蒙古", cp: [117.5977, 44.3408], childNum: 12},
          type: "Feature"
        }
      ]
    };
    var dataset = XLGlobe.MapV.DataSet( data )
    //转换后dataset数据为
    dataset = {
    _data:[
      {
        id: "65", name: "新疆", cp: [84.9023, 41.748], childNum: 18, 
        geometry: {
          type: "Polygon", 
          coordinates: [[96.416, 42.7588],[96.416, 42.7148],[95.9766, 42.4951],[96.0645, 42.3193],[96.2402, 42.2314]]
        }
      },
      {
        id: "54", name: "西藏", cp: [88.7695, 31.6846], childNum: 7, 
        geometry: {
          type: "Polygon", 
          coordinates: [[79.0137, 34.3213], [79.1016, 34.4531],[79.8047, 34.4971],[79.8926, 34.8047],[80.2441, 35.2002]]
        }
      },
      {
        id: "15", name: "内蒙古", cp: [117.5977, 44.3408], childNum: 12, 
        geometry: {
          type: "Polygon", 
          coordinates: [[97.207, 42.8027], [99.4922, 42.583],[100.8105, 42.6709], [101.7773, 42.4951],[102.041, 42.2314]]
        }
      }
      ]
    }
```

