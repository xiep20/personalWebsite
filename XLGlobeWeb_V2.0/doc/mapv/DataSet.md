## XLGlobe.MapV.DataSet(array) 数据集对象

[MapV](https://mapv.baidu.com/ "MapV") 图层

###### Parameters

|  Name |  Description |
| ------------ | ------------ |
|  array |  数据 |

#### 示例

``` javascript
    var data = [
      // 点数据
    {
        geometry: {
            type: 'Point',
            coordinates: [123, 23]
        },
        fillStyle: 'red',
        size: 30
    },
    {
        geometry: {
            type: 'Point',
            coordinates: [121, 33]
        },
        fillStyle: 'rgba(255, 255, 50, 0.5)',
        size: 90
    },
    // 线数据
    {
        geometry: {
            type: 'LineString',
            coordinates: [
                [123, 23], 
                [124, 24]
            ]
        },
        count: 30
    },
    // 面数据
    {
        geometry: {
            type: 'Polygon',
            coordinates: [
                [
                    [123, 23], 
                    [123, 23], 
                    [123, 23]
                ]
            ]
        },
        count: 30 * Math.random()
    }
    ];
    var dataset = XLGlobe.MapV.DataSet( data )
```

##### 数据集的get()方法
###### 通过此方法可以获取当前数据集的数据
``` javascript
    var data = dataset.get()
```
###### 同时可通过filter参数方法获取过滤后的数据
``` javascript
    var data = dataset.get({
    filter: function(item){
        if (item.count > 10 && item.count < 50) {
            return true;
        } else {
            return false;
        }
      }
    });
```
##### 数据集的set()方法
###### 通过此方法可以修改数据集的内容
``` javascript
    dataset.set([
      {
        geometry: {
            type: 'Point',
            coordinates: [123, 23]
        },
        fillStyle: 'red',
        size: 30
      }
    ]);
```

