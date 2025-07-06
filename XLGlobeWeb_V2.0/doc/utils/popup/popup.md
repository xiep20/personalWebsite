##   new XLGlobe.Utils.DragBox(option) popup气泡

###### Parameters


|  Name |  Description |
| ------------ | ------------ |
|  option.viewer |  地球viewer |
|  option.className |  popup气泡样式(可选值[bx-popup-ctn1,bx-popup-ctn2,bx-popup-ctn3,bx-popup-ctn4]) |

#### 示例

``` javascript
   popup1 = new XLGlobe.Utils.Popup({
    viewer: viewer,
    className: "bx-popup-ctn1"
  });
```
#### 成员方法 
##### add()
``` javascript
  popup1.add({
      geometry: cartesian,
      content: {
          header: "信息",
          content: `
          <div><span>名称：</span><span>标题名称</span></div>
          <div><span>层高：</span><span>30层</span></div>`
      }
  });
```
##### render()
``` javascript
  popup1.render();
```
##### createHtml()
``` javascript
  popup1.createHtml(header, content, isclose);
```
##### close()
``` javascript
  popup1.close();
```
##### closeAll()
``` javascript
  popup1.closeAll();
```
