import Vue from 'vue'
import Alert from './index.vue'
const AlertBox = Vue.extend(Alert) // 创建的是一个组件构造器，不是实例
function alertMessage (options, type) {
    if (options === undefined || options === null) {
        options = {
            content: '是否确认删除？'
        }
    } else if (typeof options === 'string' || typeof options === 'number') {
        options = {
            content: options
        }
    }
    let instance = new AlertBox({
        data: {
            title: options.title,
            content: options.content,
            duration: options.duration,
            bodyTitle: options.bodyTitle,
            bodyList: options.bodyList ? options.bodyList : [],
            buttonName: options.buttonName ? options.buttonName : [],
            hideTime: options.hideTime,
            type: type,
            className: options.className,
            isDelete: options.isDelete,
            isHtml: options.isHtml || false
        },
        methods: {
            onOk () { // ok事件
                if ( !this.loading && options.onOk && typeof options.onOk === 'function') {
                    this.loading = true
                    options.onOk(this)
                }
            },
            onCancel () { // ok事件
                this.show = false;
                if ( options.onCancel && typeof options.onCancel === 'function') {
                    options.onCancel(this)
                }
            }
        }
    }).$mount()
    document.body.appendChild(instance.$el) // 添加dom元素
    Vue.nextTick(() => { // dom元素渲染完成后执行回调
        instance.show = true
    })
}
// Vue.prototype.$BAlert = BingoAlert.install;
// ['info', 'error'].forEach(type => {
//     Vue.prototype.$BAlert[type] = (option) => {
//         return Vue.prototype.$BAlert(option, type)
//     }
// })
export default {
    name: 'bingoAlert',
    info (options) {
        return alertMessage(options, 'info');
    },
    // confirm (options) {
    //     return alertMessage(options, 'confirm');
    // },
    error (options) {
        return alertMessage(options, 'error');
    },
    schedule (options) {
        return alertMessage(options, 'schedule');
    },
}
