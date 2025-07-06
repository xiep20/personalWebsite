##  new XLGlobe.Visualization.video(viewer, options) 视频投射

###### Parameters

|  Name |  Description |
| ------------ | ------------ |
|  viewer |  当前new XLGlobe实例 |
|  options.videoElement |  自定义视频HTMLElement |
|  options.positions |  位置坐标 |
|  options.clampToGround |  地面夹角 |
|  options.horizontalViewAngle |  水平视角 |
|  options.verticalViewAngle | 垂直视角 |
|  options.video |  视频容器id |
|  options.viewPosition |  投射起点 |
|  options.viewPositionEnd |  投射终点 |

#### 示例

``` javascript
    var options = {
      horizontalViewAngle: 60,
      verticalViewAngle: 40,
      video: "video_dom",
      viewPosition: {
        "x": -2273579.1031458573,
        "y": 5011075.774174137,
        "z": 3214252.247588271,
      },
      viewPositionEnd: {
        "x": -2273570.492500592,
        "y": 5011061.894257468,
        "z": 3214282.3418900105
      }
    };
    var v = new XLGlobe.Visualization.video(viewer, options);
    
```
#### 成员方法 
##### drawVideo()
``` javascript
  v.drawVideo();
```
##### clear()
``` javascript
  v.clear();
```
##### clearAll()
``` javascript
  v.clearAll();
```
#### 示例展示
<iframe width="100%" height="430" src="#/editor?type=visualization%2Fvisualization_base&example=sptf3&label=视频投射（MP4）" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
