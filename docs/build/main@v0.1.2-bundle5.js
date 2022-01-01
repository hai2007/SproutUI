
/*************************** [bundle] ****************************/
// Original file:./src/pages/quick-paper/directive.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['38']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('42');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('43');


    script.render=function(createElement){

        return createElement('div',{"class":"doc-view","quickpaper":"","data-quickpaper-576b7f8a":""},[createElement('header',{"data-quickpaper-576b7f8a":""},["指令"]),createElement('h2',{"id":"fixed-q-code","data-quickpaper-576b7f8a":""},["q-code"]),createElement('pre',{"q-code":"","data-quickpaper-576b7f8a":""},["import QuickPaper from 'quick-paper';↵import qCode from 'sprout-ui/quick-paper/directive/q-code';↵↵QuickPaper.directive('qCode', qCode);"]),createElement('p',{"data-quickpaper-576b7f8a":""},["用于在页面显示一个内嵌的代码编辑器，不可编辑："]),createElement('pre',{"q-code":"html","data-quickpaper-576b7f8a":""},["<div q-code></div>"]),createElement('p',{"data-quickpaper-576b7f8a":""},["当然，你也可以设置代码语言，可选的语言有：javascript（默认值）、css、html。"]),createElement('p',{"data-quickpaper-576b7f8a":""},["如何指定？例如："]),createElement('pre',{"q-code":"html","data-quickpaper-576b7f8a":""},["<div q-code='html'></div>"])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/quick-paper/directive.paper?QuickPaper&type=script&lang=js&hash=576b7f8a
/*****************************************************************/
window.__etcpack__bundleSrc__['42']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/quick-paper/directive.paper?QuickPaper&type=style&lang=css&hash=576b7f8a
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
