
/*************************** [bundle] ****************************/
// Original file:./src/pages/html5/index.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['31']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('41');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('43');


    script.render=function(createElement){

        return createElement('div',{"class":"nav-view","quickpaper":"","data-quickpaper-65a28d7c":""},[createElement('div',{"class":"menu","data-quickpaper-65a28d7c":""},[createElement('ul',{":active":"pagename==\"switch\"?\"yes\":\"no\"","data-quickpaper-65a28d7c":""},[createElement('li',{"data-quickpaper-65a28d7c":""},[createElement('h3',{"@click":"openPage(\"switch\",\"top\",\"no\")","data-quickpaper-65a28d7c":""},["开关",createElement('span',{"data-quickpaper-65a28d7c":""},["switch"])]),createElement('ul',{"data-quickpaper-65a28d7c":""},[createElement('li',{"data-quickpaper-65a28d7c":""},[createElement('h4',{"@click":"doScroll(\"switch-import\")","data-quickpaper-65a28d7c":""},["引入&使用"])]),createElement('li',{"data-quickpaper-65a28d7c":""},[createElement('h4',{"@click":"doScroll(\"switch-attr\")","data-quickpaper-65a28d7c":""},["属性"]),createElement('ul',{"data-quickpaper-65a28d7c":""},[createElement('li',{"data-quickpaper-65a28d7c":""},[createElement('h4',{"@click":"doScroll(\"switch-attr-value\")","data-quickpaper-65a28d7c":""},["value"])])])]),createElement('li',{"data-quickpaper-65a28d7c":""},[createElement('h4',{"@click":"doScroll(\"switch-event\")","data-quickpaper-65a28d7c":""},["事件"]),createElement('ul',{"data-quickpaper-65a28d7c":""},[createElement('li',{"data-quickpaper-65a28d7c":""},[createElement('h4',{"@click":"doScroll(\"switch-event-oninput\")","data-quickpaper-65a28d7c":""},["oninput"])])])])])])])]),createElement('div',{"id":"root-view","class":"view","data-quickpaper-65a28d7c":""},[createElement('div',{"id":"fixed-top","data-quickpaper-65a28d7c":""},[createElement('nav',{"class":"position","data-quickpaper-65a28d7c":""},["当前位置：",createElement('a',{"href":"#/","target":"_blank","title":"点击我返回SproutUI首页","data-quickpaper-65a28d7c":""},["SproutUI"]),"/",createElement('a',{"href":"javascript:void(0)","class":"html5","data-quickpaper-65a28d7c":""},["html5"])]),createElement('component',{":is":"page","data-quickpaper-65a28d7c":""},[])])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/html5/index.paper?QuickPaper&type=script&lang=js&hash=65a28d7c
/*****************************************************************/
window.__etcpack__bundleSrc__['41']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('21');
var fixedScroll =__etcpack__scope_args__.default;


    let pages = {
        "switch": () => window.__etcpack__getLazyBundle('./build/main@v0.2.0-bundle7.js','42')
    };

    __etcpack__scope_bundle__.default= {
        data() {
            return {
                page: null,
                pagename: ""
            };
        },
        mounted() {
            let urlJson = this.$urlFormat(window.location.href);
            this.openPage(urlJson.router[1] in pages ? urlJson.router[1] : "switch", urlJson.params.fixed || "top");
        },
        methods: {
            openPage(pagename, fixedName, flag) {
                pages[pagename]().then(data => {
                    this.page = data.default;
                    this.pagename = pagename;
                    if (flag == 'no') window.location.href = "#/html5/" + pagename + "?fixed=" + fixedName;
                    fixedScroll(fixedName);
                });
            },
            doScroll(fixedName) {
                window.location.href = "#/html5/" + this.pagename + "?fixed=" + fixedName;
                fixedScroll(fixedName);
            }
        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/html5/index.paper?QuickPaper&type=style&lang=css&hash=65a28d7c
/*****************************************************************/
window.__etcpack__bundleSrc__['43']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
