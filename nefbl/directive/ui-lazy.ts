import { Directive, mountComponent } from 'nefbl'

@Directive({
    selector: "ui-lazy"
})
export default class {
    $update(el, binding) {
        if (binding.value) {
            el.innerHTML = ""
            mountComponent(el, binding.value, this['_module'])
        }
    }
}
