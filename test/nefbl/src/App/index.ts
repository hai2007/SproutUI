import { Component, ref } from 'nefbl'

let lazyPage = () => import('./newPage/index')

import style from './index.scss'
import template from './index.html'

@Component({
    selector: "app-root",
    template,
    styles: [style]
})
export default class {

    info: any
    page: any

    $setup() {
        return {
            info: ref('默认信息'),
            page: ref(null)
        }
    }

    doit1() {
        this.info = new Date().toDateString()
    }

    $mounted() {
        lazyPage().then(data => {
            this.page = data.default
        })
    }

}
