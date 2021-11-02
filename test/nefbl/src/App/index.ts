import { Component, ref } from 'nefbl'

import style from './index.scss'
import template from './index.html'

@Component({
    selector: "app-root",
    template,
    styles: [style]
})
export default class {

    info: any

    $setup() {
        return {
            info: ref('默认信息')
        }
    }

    doit1() {
        this.info = new Date().toDateString()
    }

}
