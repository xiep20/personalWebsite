##   new XLGlobe.Utils.Tooltip(option) Tooltip气泡

###### Parameters

|  Name |  Description |
| ------------ | ------------ |
|  option.color |  背景色(默认值 rgb(32, 160, 255)) |
|  option.stroke |  描边颜色(默认值 rgb(56, 218, 255)) |
|  option.opacity |  透明度(默认值 0.6) |
|  option.textcolor |  文字颜色(默认值 white) |
|  option.strokewidth |  描边大小(默认值 3) |
|  option.lineheight |  行高(默认值 25 |
|  option.fontSize |  字体大小(默认值 14px) |
|  option.x |  x坐标(默认值 15) |
|  option.y |  y坐标(默认值 50) |
|  option.defaultHeight |  高度(默认值 200) |
|  option.width |  宽度(默认值 200) |

#### 示例

``` javascript
   var tooltip = new XLGlobe.Utils.Tooltip({
      viewer: viewer,
      lineheight: 20,
    });
```
#### 成员方法 
##### add()
``` javascript
  tooltip.add({
    position: new Cesium.Cartesian3 ( x , y , z ),
    header: "名称：标题名称",
    content: "地址：光谷大道15号"
  });
```

##### cleartooltip()
``` javascript
  tooltip.cleartooltip();
```
