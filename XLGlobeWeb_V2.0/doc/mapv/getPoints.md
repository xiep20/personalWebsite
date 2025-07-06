## XLGlobe.MapV.getPoints([fromCenter, toCenter]) 数据集对象

[MapV](https://mapv.baidu.com/ "MapV") 迁徙图层

##### 起始点和终点连线的所有点集合
###### Parameters

|  Name |  Description |
| ------------ | ------------ |
|  fromCenter |  起点坐标 |
|  toCenter |  终点坐标 |

#### 示例

``` javascript
    var fromCenter = {lng: 119.368489, lat: 33.013797};
    var toCenter = {lng: 116.395645, lat: 39.929986};
    var dataset = XLGlobe.MapV.getPoints([fromCenter, toCenter]);
    //dataset数据为
    dataset = [
      [119.368489, 33.013797],
      [119.20891703916135, 33.1119126821831],
      [119.05371691734007, 33.21386369989529],
      [118.90288863453615, 33.31965005313654],
       ...中间省略500字...
      [116.37815731734008, 39.43843379989529],
      [116.38471523916135, 39.682292232183116],
      [116.395645, 39.92998600000001]
    ]
```
