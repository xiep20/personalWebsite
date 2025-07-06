##  new XLGlobe.Visualization.Windy(data,viewer) 风向图

###### Parameters


|  Name |  Description |
| ------------ | ------------ |
|  data |  风向数据 |
|  viewer |  viewer |

#### 示例

``` javascript
    var windy = new XLGlobe.Visualization.Windy(response, viewer);
    redraw();
    function redraw() {
        timer = setInterval(function () {
            windy.animate();
        }, 100);
    }
```
#### 示例展示
<iframe width="100%" height="430" src="#/editor?type=visualization%2Fvisualization_base&example=windy&label=风向图" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
