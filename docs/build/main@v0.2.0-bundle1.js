
/*************************** [bundle] ****************************/
// Original file:./src/pages/begin.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['28']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('33');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('34');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-7e0d3d78":""},[createElement('div',{"class":"doc-view","data-quickpaper-7e0d3d78":""},[createElement('header',{"data-quickpaper-7e0d3d78":""},["安装"]),createElement('p',{"data-quickpaper-7e0d3d78":""},["首先你需要通过命令行安装，就像这样："]),createElement('pre',{"q-code":"","data-quickpaper-7e0d3d78":""},["npm install --save sprout-ui"]),createElement('p',{"data-quickpaper-7e0d3d78":""},["安装好了以后，根据你当前的开发环境的不同，请阅读对应的文档："]),createElement('div',{"class":"framework-list","data-quickpaper-7e0d3d78":""},[createElement('a',{"href":"#/html5","target":"_blank","data-quickpaper-7e0d3d78":""},[createElement('i',{"class":"html5","data-quickpaper-7e0d3d78":""},[]),"HTML5"]),createElement('a',{"href":"#/nefbl","target":"_blank","data-quickpaper-7e0d3d78":""},[createElement('i',{"class":"nefbl","data-quickpaper-7e0d3d78":""},[]),"nefbl.js"]),createElement('a',{"href":"#/quick-paper","target":"_blank","data-quickpaper-7e0d3d78":""},[createElement('i',{"class":"quick-paper","data-quickpaper-7e0d3d78":""},[]),"Quick Paper"])]),createElement('header',{"data-quickpaper-7e0d3d78":""},["问题"]),createElement('p',{"data-quickpaper-7e0d3d78":""},["如果你使用webpack配合babel进行项目打包，由于部分包采用了let等es6+语法，为了可以正常打包，你需要修改webpack的配置，参考如下："]),createElement('pre',{"q-code":"","data-quickpaper-7e0d3d78":""},["......↵rules: [{↵    test: /\\.js$/,↵    exclude: function (modulePath) {↵        return (↵            /node_modules/.test(modulePath) &&↵            !/sprout\\-ui/.test(modulePath)↵        );↵    },↵    loader: \"babel-loader\"↵},↵......"]),createElement('p',{"data-quickpaper-7e0d3d78":""},["其次，请确保你使用了babel.config.js而不是.babelrc，否则较高版本的babel可能依旧不会对你忽略的node_modules中的包进行转义。"]),createElement('header',{"data-quickpaper-7e0d3d78":""},["版本"]),createElement('p',{"data-quickpaper-7e0d3d78":""},["如果在使用的时候，发现文档中有的方法无法使用，可能是你的版本过低导致的，你可以",createElement('a',{"href":"https://github.com/hai2007/SproutUI/blob/master/CHANGELOG","target":"_blank","class":"link","data-quickpaper-7e0d3d78":""},["点击此处"]),"查看版本日志。"]),createElement('header',{"data-quickpaper-7e0d3d78":""},["建议"]),createElement('p',{"data-quickpaper-7e0d3d78":""},["由于项目的建立是来自日常工作的需求，如果你希望下一版本提供新的功能，可以提",createElement('a',{"href":"https://github.com/hai2007/SproutUI/issues","target":"_blank","class":"link","data-quickpaper-7e0d3d78":""},["issue"]),"告知我们！"])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/begin.paper?QuickPaper&type=script&lang=js&hash=7e0d3d78
/*****************************************************************/
window.__etcpack__bundleSrc__['33']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/begin.paper?QuickPaper&type=style&lang=css&hash=7e0d3d78
/*****************************************************************/
window.__etcpack__bundleSrc__['34']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n [quickpaper][data-quickpaper-7e0d3d78]{\n\nheight: calc(100vh - 60px);\n\noverflow: auto;\n\n}\n\n [quickpaper]>div[data-quickpaper-7e0d3d78]{\n\nwidth: 670px;\n\nmargin: auto;\n\n}\n\n [quickpaper]>div>.framework-list>a[data-quickpaper-7e0d3d78]{\n\nline-height: 50px;\n\ndisplay: inline-block;\n\nborder: 1px solid #efebea;\n\npadding: 5px 10px;\n\nborder-radius: 10px;\n\nmargin: 10px;\n\ncolor: #000;\n\nfont-weight: 200;\n\n}\n\n [quickpaper]>div>.framework-list>a[data-quickpaper-7e0d3d78]:hover{\n\ntext-decoration: underline;\n\n}\n\n [quickpaper]>div>.framework-list>a>i[data-quickpaper-7e0d3d78]{\n\ndisplay: inline-block;\n\nwidth: 50px;\n\nheight: 50px;\n\nbackground-size: 100% auto;\n\nvertical-align: top;\n\nmargin-right: 5px;\n\n}\n\n [quickpaper]>div>.framework-list>a>i.nefbl[data-quickpaper-7e0d3d78]{\n\nbackground-image: url('./image/nefbl.png');\n\n}\n\n [quickpaper]>div>.framework-list>a>i.quick-paper[data-quickpaper-7e0d3d78]{\n\nbackground-image: url('./image/quick-paper.png');\n\n}\n\n [quickpaper]>div>.framework-list>a>i.html5[data-quickpaper-7e0d3d78]{\n\nbackground-image: url('./image/html.png');\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
