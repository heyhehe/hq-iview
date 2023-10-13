<!--
 * 仅供表格使用
-->
<template>
    <div class="bingo-toolbar-new-wrapper">
        <!--左侧按钮-->
        <div class="button-left">
            <slot name="left-button"></slot>
        </div>
        <!--右侧按钮-->
        <div class="button-right">
            <div class="right-button">
                <slot name='right-button'></slot>
            </div>
            <div class="btns" v-if="showToolbarRight">
                <slot name='right-btns'></slot>
                <!-- 导出 -->
                <Tooltip :content="$t('page.common.export')" transfer v-if="showExport">
                    <div class="i-link" @click="handleExport">
                        <i class="icon iconfont icondaochu2"></i>
                    </div>
                </Tooltip>
                <!-- 导入 -->
                <Tooltip :content="$t('page.common.import')" transfer v-if="showImport">
                    <div class="i-link" @click="handleImport">
                        <i class="icon iconfont icondaoru2"></i>
                    </div>
                </Tooltip>
                <!-- 打印 -->
                <Tooltip :content="$t('page.common.print')" transfer v-if="showPrint">
                    <div class="i-link" @click="handlePrint">
                        <i class="icon iconfont icondayin2"></i>
                    </div>
                </Tooltip>
                <!-- 刷新 -->
                <Tooltip :content="$t('page.common.refresh')" transfer v-if="showRefresh">
                    <div class="i-link" @click="handleRefresh">
                        <i class="icon iconfont iconshuaxin1"></i>
                    </div>
                </Tooltip>
                <!-- 布局 -->
                <Tooltip :content="$t('page.common.layout')" transfer v-if="showLayout">
                    <div class="i-link">
                        <slot name='layout'></slot>
                    </div>
                </Tooltip>
                <!--全屏-->
                <Tooltip v-if="showFullScreen" transfer :content="!isFullscreen ? $t('page.common.fullScreen') : $t('page.common.reduction')">
                    <div class="i-link" @click="handleFullScreen">
                        <i :class="!isFullscreen ? 'icon iconfont iconfangda2' : 'icon iconfont iconsuoxiao2'"></i>
                    </div>
                </Tooltip>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'bingo-toolbar-new',
        data () {
            return {
                isFullscreen: false, // 全屏控制
            };
        },
        props: {
            showToolbarRight: { // 是否显示所有按钮
                type: Boolean,
                default: true
            },
            showExport: { // 是否显示导出
                type: Boolean,
                default: true
            },
            showImport: { // 是否显示导入
                type: Boolean,
                default: false
            },
            showPrint: { // 是否显示打印
                type: Boolean,
                default: false
            },
            showRefresh: { // 是否显示刷新
                type: Boolean,
                default: true
            },
            showLayout: { // 是否显示布局
                type: Boolean,
                default: true
            },
            showFullScreen: { // 是否显示全屏
                type: Boolean,
                default: true
            },
            tableTitle: { // 表格的标题
                type: String,
                default: '表格标题'
            },
            title: { // 表格的标题,此属性用于表格组件的话与表格原生属性title冲突
                type: String,
                default: '表格标题'
            },
            titleWidth: { // 表格标题的宽度
                type: Number,
                default: 200
            },
            showTitle:{ // 是否显示标题
                type:Boolean,
                default:true
            },
        },
        computed: {},
        created () {
        },
        mounted () {
        },
        watch: {
        },
        methods: {
            // 新建按钮
            handleNew () {
                this.$emit('on-new')
            },
            // 删除按钮
            handleDelete () {
                this.$emit('on-delete')
            },
            // 导出方法
            handleExport () {
                this.$emit('on-export');
            },
            // 导入方法
            handleImport () {
                this.$emit('on-import');
            },
            // 打印方法
            handlePrint () {
                this.$emit('on-print');
            },
            // 刷新方法
            handleRefresh () {
                this.$emit('on-refresh');
            },
            // 全屏方法
            handleFullScreen () {
                this.isFullscreen = !this.isFullscreen
                this.$emit('on-full-screen', this.isFullscreen);
            },
        }
    };
</script>

<style lang="less" scoped>
    .bingo-toolbar-new-wrapper {
        height: 38px;
        position: relative;
        .button-left {
            float: left;
            height: 32px;
        }
        .button-right { // toolbar工具栏区域
            position: absolute;
            right: 0;
            .right-button{
                float: left;
                display:flex;
                align-items: center;
            }
            .ivu-btn{
                margin-right:6px;
            }
            .btns {
                float: left;
                height: 32px;
                background: #eaeff7;
                border-radius: 16px;
                box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.09) inset;
                padding: 0 4px;
                display: flex;
                i {
                    font-size: 12px;
                    &:hover {
                        color: #0077c8;
                    }
                }
                .i-link {
                    display: inline-block;
                    width: 24px;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    margin: 4px 5px 0 5px;
                    background: linear-gradient(180deg,rgba(255,255,255,0.95), rgba(255,255,255,0.70));
                    border-radius: 50%;
                    box-shadow: 4px 3px 5px 0px rgba(0,0,0,0.13);
                }
            }
        }
    }
</style>
