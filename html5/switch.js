class Switch extends HTMLElement {

    bgDiv
    btnDiv

    constructor() {
        super()

        // 创建shadow根
        const shadow = this.attachShadow({ mode: 'open' });

        // 创建轨迹背景并挂载到根结点
        this.bgDiv = document.createElement('div');
        shadow.appendChild(this.bgDiv);
        this.bgDiv.setAttribute('class', 'bg');

        // 添加控制按钮
        this.btnDiv = document.createElement('div');
        this.bgDiv.appendChild(this.btnDiv);
        this.btnDiv.setAttribute('class', 'btn');

        // 交互
        this.bgDiv.addEventListener('click', () => {
            if (this.getAttribute('value') == 'on') {
                this.setAttribute('value', 'off');
                this.bgDiv.setAttribute('class', 'bg off')
            } else {
                this.setAttribute('value', 'on');
                this.bgDiv.setAttribute('class', 'bg on');
            }

            if (this.oninput) this.oninput();

        });

        // 设置样式
        const style = document.createElement('style');
        style.textContent = `.bg{
            background-color:gray;
            padding:5px;
            display: inline-block;
            width: 50px;
            border-radius: 20px;
            position: relative;
            height: 30px;
            box-sizing: border-box;
            vertical-align: top;
        }
        .bg > .btn{
            display:inline-block;
            width:20px;
            height:20px;
            background-color:white;
            vertical-align: top;
            border-radius: 50%;
            position: absolute;
            transition-property: left;
            transition-duration: 0.5s;
        }
        .bg.on{
            background-color:#2196f3;
        }
         .bg.on> .btn{
            left:25px;
        }
        .bg.off> .btn{
            left:5px;
        }`;

        shadow.appendChild(style);

    }

    doUpdate() {
        if (this.getAttribute('value') == 'on') {
            this.setAttribute('value', 'on');
            this.bgDiv.setAttribute('class', 'bg on');
        } else {
            this.setAttribute('value', 'off');
            this.bgDiv.setAttribute('class', 'bg off')
        }
    }

    // 首次被插入到文档DOM节点上时被调用
    connectedCallback() {
        this.doUpdate();
        this.style.display = 'inline-block';
        this.style.cursor = "pointer";
    }

}

customElements.define('sprout-switch', Switch);