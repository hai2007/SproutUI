import QuickPaper from 'quick-paper';

// 兼容文件
import '@hai2007/polyfill/Promise.js';

// 引入样式
import '@hai2007/style/normalize.css';

import qCode from 'sprout-ui/quick-paper/directive/q-code'; QuickPaper.directive('qCode', qCode);

import App from './App.paper';

//根对象
window.quickPaper = new QuickPaper({

    //挂载点
    el: document.getElementById('root'),

    // 启动页面
    render: createElement => createElement(App)

});
