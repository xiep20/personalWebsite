## new XLGlobe.MapV.utilForceEdgeBundling().nodesEdges(node_data, edge_data) 数据集对象

[MapV](https://mapv.baidu.com/ "MapV") 强袭图层

##### 起始点和终点的点集合
###### Parameters

|  Name |  Description |
| ------------ | ------------ |
|  node_data |  起点坐标集合 |
|  edge_data |  起点指向目标点数据 |

#### 示例

``` javascript
    var node_data = [{x: 108.154518, y: 36.643346},{x: 118.73566341069616, y: 32.34205647152572}];
    var edge_data = [{source: "1", target: "0"},{source: 0, target: "0"}];//source：资源数，target：node_data数组的下标为目标点坐标
    var dataset = new XLGlobe.MapV.utilForceEdgeBundling().nodesEdges(node_data, edge_data);
    var result = dataset();
    //result数据为
    result = [
      {x: 118.73566341069616, y: 32.34205647152572},
      {x: 118.57287655822391, y: 32.40823015657917},
      {x: 118.41008970575166, y: 32.47440384163263},
       ...中间省略500字...
       {x: 108.31730485247225, y: 36.57717231494655},
      {x: 108.154518, y: 36.643346},
      {x: 108.154518, y: 36.643346}
    ]
```
