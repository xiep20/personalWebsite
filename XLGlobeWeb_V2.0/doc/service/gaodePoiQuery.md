##  new XLGlobe.Service.gaodePoiQuery(key, viewer) 搞得POI查询

###### Parameters


|  Name |  Description |
| ------------ | ------------ |
|  key |  高德key |
|  viewer |  viewer |

#### 示例

``` javascript
    var gaodeQuery = new XLGlobe.Service.gaodePoiQuery(key, Viewer);
```
#### 成员方法
##### 指定城市搜索
``` javascript
    gaodeQuery.queryByCity({
      keyword: '景点',
      city: '武汉市',
      isMars: false,
      offset: 10,
      page: "1"
    })
```
##### 当前视窗搜索
``` javascript
    var s = [
      116.16650036719933,39.86153189086593|
      116.16651723176312,39.99450471451482|
      116.58697467688988,39.994219803578765|
      116.58695856048897,39.86124692297536|
      116.58695856048897,39.86124692297536
      ]
    gaodeQuery.queryByCurrentWindow({
      keyword: '景点',
      polygon: s,
      isMars: false,
      offset: 10,
      page: "1"
    })
```
##### 指定范围搜索
``` javascript
    var polygonStr = [
      116.39498666959511,39.93130551697375|
      116.39036511471558,39.91641928409937|
      116.45173210695918,39.941444211184965|
      116.40749559116762,39.94218947271275|
      116.40124757036129,39.94078412871064|
      116.38874413555779,39.92990465805187
      ]
    gaodeQuery.queryByCurrentWindow({
      keyword: '景点',
      polygon: polygonStr,
      isMars: false,
      offset: 10,
      page: "1"
    })
```
##### 清除搜索
``` javascript
    gaodeQuery.clear()
```