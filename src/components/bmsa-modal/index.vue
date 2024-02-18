<template>
    <vxe-modal
            v-model="show"
            :title="title"
            :width="width"
            :height="height"
            :min-width="minWidth"
            :min-height="minHeight"
            :transfer="transfer"
            :show-zoom="showZoom"
            :resize="resize"
            :showFooter="isShowFooter"
            v-bind="$attrs"
            v-on="$listeners"
    >
        <template slot="header">
            <slot name="header"></slot>
        </template>
        <template slot="title">
            <div class="vxe-modal-title">
                <div class="title-left">
                    <!--title不要放到slot下,打包不好使-->
                    {{title}}
                    <slot name="title"></slot>
                </div>
                <div class="title-right">
                    <!--暂时放一个带业务的图标，后续有需求再改 别人要求的-->
                    <span :class="'icon iconfont ' + urlIcon" v-if="url" @click="handleUrl"></span>
                </div>
            </div>
        </template>
        <template #default>
            <bmsa-toolbar class="modal-toolbar" :showAllButton="false" :hidden-left="true" :hidden-right="true" :showOpenButton="false" v-if="showToolbar">
                <template slot="other">
                    <template v-if="showBaseToolbar">
                        <Button v-waves type="primary" ghost v-if="showSave" @click="save">
                            <i class="icon iconfont iconbaocun1" style="font-size: 14px;margin-right: 8px;"/>
                            <span>{{ $t('bmsa.baise.save') }}</span>
                        </Button>
                        <Button v-waves type="primary" ghost v-if="showSaveCancel" @click="saveCancel">
                            <i class="icon iconfont iconbaocunbingguanbi1" style="font-size: 14px;margin-right: 8px;"/>
                            <span>{{ $t('bmsa.baise.saveClose') }}</span>
                        </Button>
                        <Button v-waves type="primary" ghost v-if="showCancel" @click="cancel">
                            <i class="icon iconfont icon-quxiao" style="font-size: 14px;margin-right: 8px;"/>
                            <span>{{ $t('bmsa.baise.close') }}</span>
                        </Button>
                    </template>
                    <slot name="toolbar"></slot>
                </template>
            </bmsa-toolbar>
            <div :class="showToolbar ? 'toolbar-con' : 'no-toolbar-con'">
                <slot name="default"></slot>
            </div>
        </template>
        <template #footer>
            <slot name="footer"></slot>
        </template>
    </vxe-modal>
</template>
<script>
    export default {
        props: {
            // v-model 绑定值
            value: {
                type: Boolean,
                default: false
            },
            url: { // 右上角图标跳转,业务属性,别人要求这样做的
                type: String,
                default: ''
            },
            // 重做slot=title，后面加上可自定义图标
            title: {
                type: String,
                default: ''
            },
            // 是否显示toolbar
            showToolbar: {
                type: Boolean,
                default: true
            },
            // 是否显示（保存，保存并关闭，关闭）
            showBaseToolbar: {
                type: Boolean,
                default: true
            },
            // 是否显示保存按钮
            showSave: {
                type: Boolean,
                default: true
            },
            // 是否显示保存并关闭
            showSaveCancel: {
                type: Boolean,
                default: true
            },
            // 是否显示关闭
            showCancel: {
                type: Boolean,
                default: true
            },
            // 是否将弹框容器插入于 body 内
            transfer: {
                type: Boolean,
                default: false
            },
            // 标题是否显示最大化与还原按钮
            showZoom: {
                type: Boolean,
                default: true
            },
            // 是否允许窗口边缘拖动调整窗口大小
            resize: {
                type: Boolean,
                default: true
            },
            // 是否显示底部
            showFooter: {
                type: Boolean,
                default: false
            },
            // 窗口的宽度
            width: {
                type: [Number, String],
                default: 800
            },
            // 窗口的高度
            height: {
                type: [Number, String],
                default: 'auto'
            },
            // 窗口的最小宽度
            minWidth: {
                type: [Number, String],
                default: 460
            },
            // 窗口的最小高度
            minHeight: {
                type: [Number, String],
                default: 320
            },
            urlIcon: { // iconquanping1
                type: String,
                default: 'iconiconxinchuangkouyulan'
            },
            // 是否自定义url跳转方法
            isOwnUrl: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                isShowFooter: true
            }
        },
        created() {
            if(this.showFooter){
                //this.isShowFooter = this.showFooter
                this.isShowFooter = !this.showToolbar;
            }else{
                this.isShowFooter = false
            }

        },
        computed: {
            show: {
                get: function() {
                    return this.value
                },
                set: function(value) {
                    this.$emit('input', value)
                }
            }
        },
        methods: {
            // 保存
            save() {
                this.$emit('on-save', this)
            },
            // 保存并关闭
            saveCancel() {
                this.$emit('on-save-cancel', this)
            },
            // 保存关闭
            cancel() {
                this.show = false
            },
            // 路径跳转,别人要求加的业务代码
            handleUrl () {
                if (!this.isOwnUrl) {
                    window.open(this.url, '_blank')
                } else {
                    this.$emit('on-open-url', this.url)
                }
            }
        }
    }
</script>
<style lang="less" scoped>

</style>
