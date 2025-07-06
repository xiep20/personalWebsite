config = {
    //地图数据路径 内网ip: 外网ip:192.168.1.15:8080
    "dataUrl": "/wuhan_20201014/",
    "deuserver": "http://192.168.1.15:7090/deuserver", //deuserver
    "deuserver2": "http://192.168.1.15:7090/deuserver",
    "geoserver": "http://192.168.1.15:9090/geoserver"
};
var isonline = window.navigator.onLine; //是否联网
//var isonline = false; //未联网；
function _addbdlayer(Globe) {
    if (isonline) {
        //天地图影像
        var baselayer1 = new XLGlobe.Layer.TiandituImageryProvider({
            layer: "img",
            token: "6a043ce7d3a0791392dd921a6d6f5f29"
        });
        var baselayer2 = new XLGlobe.Layer.TiandituImageryProvider({
            layer: "cia",
            token: "6a043ce7d3a0791392dd921a6d6f5f29"
        });
        Globe.addBaseLayer(baselayer1);
        Globe.addLayer(baselayer2);
    } else {
        //全球
        var baselayer = new XLGlobe.Layer.createImageryProvider({
            "type": "image",
            "url": config.dataUrl + "img/world/world.jpg"
        });
        Globe.addBaseLayer(baselayer);
        //离线
        var dtlayer2 = new XLGlobe.Layer.TMSImageryProvider({
            url: config.dataUrl + "tile/arcgis_TMS/"
        });
        Globe.addLayer(dtlayer2);
    }
}