<!--
 * 仅供表格使用
-->
<template>
    <div class="bingo-toolbar-new-wrapper">
        <!--左侧按钮-->
        <div class="button-left">
            <p :style="{width: titleWidth+'px'}" v-if="showTitle">{{tableTitle ? tableTitle : title}}</p>
            <slot name="h3"></slot>
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
                <slot name='layout'></slot>
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
            p {
                font-size: 16px;
                /*color: #333;*/
                width: 200px;
                position: absolute;
                top: 0;
                left: 0;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                background: -webkit-gradient(linear,right top,left top,color-stop(40%,#fff),to(#dbe8fb));
                background: linear-gradient(270deg,#fff 40%,#dbe8fb);
                border-radius: 4px;
                padding: 5px;
            }
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
                border: 1px solid #dcdee2;
                border-radius: 4px;
                padding: 0 10px;
                i {
                    padding: 0 8px;
                    &:hover {
                        color: #0077c8;
                    }
                }
                .i-link {
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    margin: 0 2px;
                }
            }
        }
    }
</style>
