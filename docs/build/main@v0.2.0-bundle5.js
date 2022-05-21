
/*************************** [bundle] ****************************/
// Original file:./src/pages/nefbl/directive.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['36']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('44');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('45');


    script.render=function(createElement){

        return createElement('div',{"class":"doc-view","quickpaper":"","data-quickpaper-cf20d130":""},[createElement('header',{"data-quickpaper-cf20d130":""},["指令"]),createElement('h2',{"id":"fixed-ui-bind","data-quickpaper-cf20d130":""},["ui-bind"]),createElement('pre',{"q-code":"","data-quickpaper-cf20d130":""},["import uiBind from 'sprout-ui/nefbl/directive/ui-bind'↵↵@Module({↵    declarations: [uiBind]↵})↵export default class {}"]),createElement('p',{"data-quickpaper-cf20d130":""},["只会主动同步数据到视图。"]),createElement('pre',{"q-code":"html","data-quickpaper-cf20d130":""},["<div ui-bind='param' ui-bind:param='param'></div>"]),createElement('p',{"data-quickpaper-cf20d130":""},["上面我们演示了两种用法，第一种会修改标签的value或innerText,第二种会修改标签的param属性。"]),createElement('p',{"class":"warn","data-quickpaper-cf20d130":""},["温馨提示：其中param表示双向绑定的数据（下同）。"]),createElement('h2',{"id":"fixed-ui-model","data-quickpaper-cf20d130":""},["ui-model"]),createElement('pre',{"q-code":"","data-quickpaper-cf20d130":""},["import uiModel from 'sprout-ui/nefbl/directive/ui-model'↵↵@Module({↵    declarations: [uiModel]↵})↵export default class {}"]),createElement('p',{"data-quickpaper-cf20d130":""},["一般用于输入框，可以实现视图和数据之间的同步。"]),createElement('pre',{"q-code":"html","data-quickpaper-cf20d130":""},["<input ui-model='param'/>"]),createElement('h2',{"id":"fixed-ui-on","data-quickpaper-cf20d130":""},["ui-on"]),createElement('pre',{"q-code":"","data-quickpaper-cf20d130":""},["import uiOn from 'sprout-ui/nefbl/directive/ui-on'↵↵    @Module({↵        declarations: [uiOn]↵    })↵    export default class {}"]),createElement('p',{"data-quickpaper-cf20d130":""},["用于在标签中注册DOM事件。"]),createElement('pre',{"q-code":"html","data-quickpaper-cf20d130":""},["<div ui-on:click='doit'>点击我</div>"]),createElement('p',{"data-quickpaper-cf20d130":""},["上面我们演示的是单击，如果把.click改成.dblclick就是双击，别的DOM事件也类似。"]),createElement('p',{"data-quickpaper-cf20d130":""},["除此之外，还有几个特殊的选项（可以同时使用）："]),createElement('pre',{"q-code":"html","data-quickpaper-cf20d130":""},["<div ui-on:click.once='doit'>点击我</div>"]),createElement('p',{"data-quickpaper-cf20d130":""},["上面我们添加了.once，表示点击一次后就会失效,一共有以下可选："]),createElement('ul',{"data-quickpaper-cf20d130":""},[createElement('li',{"data-quickpaper-cf20d130":""},["1.prevent 阻止默认事件"]),createElement('li',{"data-quickpaper-cf20d130":""},["2.stop 阻止冒泡"]),createElement('li',{"data-quickpaper-cf20d130":""},["3.once 只执行一次"])]),createElement('h2',{"id":"fixed-ui-code","data-quickpaper-cf20d130":""},["ui-code"]),createElement('pre',{"q-code":"","data-quickpaper-cf20d130":""},["import uiCode from 'sprout-ui/nefbl/directive/ui-code'↵↵@Module({↵    declarations: [uiCode]↵})↵export default class {}"]),createElement('p',{"data-quickpaper-cf20d130":""},["用于在页面显示一个内嵌的代码编辑器，不可编辑："]),createElement('pre',{"q-code":"html","data-quickpaper-cf20d130":""},["<div ui-code></div>"]),createElement('p',{"data-quickpaper-cf20d130":""},["当然，你也可以设置代码语言，可选的语言有：javascript（默认值）、css、html。"]),createElement('p',{"data-quickpaper-cf20d130":""},["如何指定？例如："]),createElement('pre',{"q-code":"html","data-quickpaper-cf20d130":""},["<div ui-code='html'></div>"]),createElement('h2',{"id":"fixed-ui-lazy","data-quickpaper-cf20d130":""},["ui-lazy"]),createElement('pre',{"q-code":"","data-quickpaper-cf20d130":""},["import uiLazy from 'sprout-ui/nefbl/directive/ui-lazy'↵↵@Module({↵    declarations: [uiLazy]↵})↵export default class {}"]),createElement('p',{"data-quickpaper-cf20d130":""},["用于实现页面懒加载。比如现在有一个懒加载定义的页面："]),createElement('pre',{"q-code":"","data-quickpaper-cf20d130":""},["let page1=()=>import(`./page1/index`)"]),createElement('p',{"data-quickpaper-cf20d130":""},["通过ref定义了一个双向绑定的变量page，你可以先把上面懒加载的页面加载后赋值给变量："]),createElement('pre',{"q-code":"","data-quickpaper-cf20d130":""},["page1().then(data=>{↵    this.page=data.default↵})"]),createElement('p',{"data-quickpaper-cf20d130":""},["如何让page1在页面中显示？此时就可以使用这个指令了："]),createElement('pre',{"q-code":"","data-quickpaper-cf20d130":""},["<div ui-lazy='page'></div>"]),createElement('p',{"data-quickpaper-cf20d130":""},["当然，后续你可以通过修改this.page的值来实现显示别的懒加载页面，也就是实现了局部的翻页功能。"])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/nefbl/directive.paper?QuickPaper&type=script&lang=js&hash=cf20d130
/*****************************************************************/
window.__etcpack__bundleSrc__['44']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/nefbl/directive.paper?QuickPaper&type=style&lang=css&hash=cf20d130
/*****************************************************************/
window.__etcpack__bundleSrc__['45']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
