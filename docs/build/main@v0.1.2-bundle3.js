
/*************************** [bundle] ****************************/
// Original file:./src/pages/quick-paper/index.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['30']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('37');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('39');


    script.render=function(createElement){

        return createElement('div',{"class":"nav-view","quickpaper":"","data-quickpaper-dc272d04":""},[createElement('div',{"class":"menu","data-quickpaper-dc272d04":""},[createElement('ul',{":active":"pagename==\"directive\"?\"yes\":\"no\"","data-quickpaper-dc272d04":""},[createElement('li',{"data-quickpaper-dc272d04":""},[createElement('h3',{"@click":"openPage(\"directive\",\"top\",\"no\")","data-quickpaper-dc272d04":""},["指令"]),createElement('ul',{"data-quickpaper-dc272d04":""},[createElement('li',{"data-quickpaper-dc272d04":""},[createElement('h4',{"@click":"doScroll(\"q-code\")","data-quickpaper-dc272d04":""},["q-code"])])])])])]),createElement('div',{"id":"root-view","class":"view","data-quickpaper-dc272d04":""},[createElement('div',{"id":"fixed-top","data-quickpaper-dc272d04":""},[createElement('nav',{"class":"position","data-quickpaper-dc272d04":""},["当前位置：",createElement('a',{"href":"#/","target":"_blank","title":"点击我返回SproutUI首页","data-quickpaper-dc272d04":""},["SproutUI"]),"/",createElement('a',{"href":"https://hai2007.gitee.io/quick-paper/","target":"_blank","class":"quick-paper","title":"点击我打开Quick Paper官网","data-quickpaper-dc272d04":""},["Quick Paper"])]),createElement('component',{":is":"page","data-quickpaper-dc272d04":""},[])])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/quick-paper/index.paper?QuickPaper&type=script&lang=js&hash=dc272d04
/*****************************************************************/
window.__etcpack__bundleSrc__['37']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('21');
var fixedScroll =__etcpack__scope_args__.default;


    let pages = {
        "directive": () => window.__etcpack__getLazyBundle('./build/main@v0.1.2-bundle5.js','38')
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
// Original file:./src/pages/quick-paper/index.paper?QuickPaper&type=style&lang=css&hash=dc272d04
/*****************************************************************/
window.__etcpack__bundleSrc__['39']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
