
/*************************** [bundle] ****************************/
// Original file:./src/pages/nefbl/index.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['29']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('35');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('37');


    script.render=function(createElement){

        return createElement('div',{"class":"nav-view","quickpaper":"","data-quickpaper-088e5f2b":""},[createElement('div',{"class":"menu","data-quickpaper-088e5f2b":""},[createElement('ul',{":active":"pagename==\"directive\"?\"yes\":\"no\"","data-quickpaper-088e5f2b":""},[createElement('li',{"data-quickpaper-088e5f2b":""},[createElement('h3',{"@click":"openPage(\"directive\",\"top\",\"no\")","data-quickpaper-088e5f2b":""},["指令"]),createElement('ul',{"data-quickpaper-088e5f2b":""},[createElement('li',{"data-quickpaper-088e5f2b":""},[createElement('h4',{"@click":"doScroll(\"ui-bind\")","data-quickpaper-088e5f2b":""},["ui-bind"])]),createElement('li',{"data-quickpaper-088e5f2b":""},[createElement('h4',{"@click":"doScroll(\"ui-model\")","data-quickpaper-088e5f2b":""},["ui-model"])]),createElement('li',{"data-quickpaper-088e5f2b":""},[createElement('h4',{"@click":"doScroll(\"ui-on\")","data-quickpaper-088e5f2b":""},["ui-on"])]),createElement('li',{"data-quickpaper-088e5f2b":""},[createElement('h4',{"@click":"doScroll(\"ui-code\")","data-quickpaper-088e5f2b":""},["ui-code"])]),createElement('li',{"data-quickpaper-088e5f2b":""},[createElement('h4',{"@click":"doScroll(\"ui-lazy\")","data-quickpaper-088e5f2b":""},["ui-lazy"])])])])])]),createElement('div',{"id":"root-view","class":"view","data-quickpaper-088e5f2b":""},[createElement('div',{"id":"fixed-top","data-quickpaper-088e5f2b":""},[createElement('nav',{"class":"position","data-quickpaper-088e5f2b":""},["当前位置：",createElement('a',{"href":"#/","target":"_blank","title":"点击我返回SproutUI首页","data-quickpaper-088e5f2b":""},["SproutUI"]),"/",createElement('a',{"href":"https://nefbl.github.io/api/","target":"_blank","class":"nefbl","title":"点击我打开nefbl官网","data-quickpaper-088e5f2b":""},["nefbl"])]),createElement('component',{":is":"page","data-quickpaper-088e5f2b":""},[])])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/nefbl/index.paper?QuickPaper&type=script&lang=js&hash=088e5f2b
/*****************************************************************/
window.__etcpack__bundleSrc__['35']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('21');
var fixedScroll =__etcpack__scope_args__.default;


    let pages = {
        "directive": () => window.__etcpack__getLazyBundle('./build/main@v0.2.0-bundle5.js','36')
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
            this.openPage(urlJson.router[1] in pages ? urlJson.router[1] : "directive", urlJson.params.fixed || "top");
        },
        methods: {
            openPage(pagename, fixedName, flag) {
                pages[pagename]().then(data => {
                    this.page = data.default;
                    this.pagename = pagename;
                    if (flag == 'no') window.location.href = "#/nefbl/" + pagename + "?fixed=" + fixedName;
                    fixedScroll(fixedName);
                });
            },
            doScroll(fixedName) {
                window.location.href = "#/nefbl/" + this.pagename + "?fixed=" + fixedName;
                fixedScroll(fixedName);
            }
        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/nefbl/index.paper?QuickPaper&type=style&lang=css&hash=088e5f2b
/*****************************************************************/
window.__etcpack__bundleSrc__['37']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
