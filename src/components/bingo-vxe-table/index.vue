<template>
    <div class="bingo-vxe-table" ref="table-list" v-resize="handleResize" :class="{'bingo-vxe-table-full-screen': isFullscreen, 'bingo-vxe-table-filter': !showFilter, 'bingo-vxe-table-filter-show': showFilter, 'bingo-vxe-table-borderLine': borderLine}">
        <!--toolbar-new区域-->
        <bingo-toolbar-new ref="toolbar" v-if="showToolbar" v-bind="$attrs" v-on="$listeners" :showLayout="layoutName && showType == 'top'" @on-full-screen="handleFullScreen">
            <!--左侧标题-->
            <template #left-button>
                <slot name='left-button'></slot>
            </template>
            <!--右侧按钮-->
            <template #right-button>
                <slot name='left-page-button'></slot>
                <bmsa-page v-if="showPage && showType == 'top'" class="table-new-page" :pageSetting="tablePage" @page-change="pageChange"></bmsa-page>
                <slot name='right-button'></slot>
            </template>
            <!--右侧固定按钮按钮-->
            <template #right-btns>
                <slot name='right-btns'></slot>
            </template>
            <!--右侧布局按钮-->
            <template #layout>
                <bmsa-layout class="bingo-vxe-table-pager-top"
                             v-if="layoutName && showType == 'top'"
                             :layoutName="layoutName"
                             :size="size"
                             :column="baseTableColumn"
                             :isChangeDefault="isChangeDefault"
                             @getLayoutData="getLayoutData"
                             @getLayout="getLayout"
                             @on-layout-page-change="getLayoutPageChange">
                </bmsa-layout>
            </template>
        </bingo-toolbar-new>
        <!-- 表格区域 -->
        <template>
            <div v-if="!showOtherView" class="bingo-vxe-table-body" :class="showPageBottom ? ' show-page-' + sizeVal : ''" :style="getBodyHeight">
                <vxe-grid ref="xTable"
                        :columns="columnsList"
                        :data="tableData"
                        :border="border"
                        :stripe="stripe"
                        :auto-resize="autoResize"
                        :show-overflow="showOverflow"
                        :show-header-overflow="showHeaderOverflow"
                        :show-footer-overflow='showFooterOverflow'
                        :align='align'
                        :header-align='headerAlign'
                        :row-config="rowConfig"
                        :highlight-hover-row="highlightHoverRow"
                        :height="height"
                        :max-height="!height ? maxHeight : ''"
                        :size="sizeVal"
                        :resizable="resizable"
                        v-bind="$attrs"
                        v-on="$listeners"
                        @sort-change="handleSortOrFilterChange"
                        @filter-change="handleSortOrFilterChange">
                    <template v-for="(index, name) in $slots" v-slot:[name]>
                        <slot :name="name" />
                    </template>
                    <!--可编辑列头-->
                    <template #edit-header="{ column }">
                        <span>{{column.title}}</span>
                        <span class="icon iconfont icon-kebianji"></span>
                    </template>
                    <template v-for="(index, name) in $scopedSlots"
                            v-slot:[name]="tableData">
                        <slot :name="name" v-bind="tableData"></slot>
                    </template>
                    <template #empty v-if="!tableData.length">
                        <span v-if="showEmptyImg"><slot name="empty"></slot></span>
                        <img v-else :src="emptyImg" width="344" height="160">
                    </template>
                </vxe-grid>
                <!--分页-->
                <vxe-pager
                        ref="vxePager"
                        class-name="bingo-vxe-page-wrapper"
                        v-if="showPage && showType == 'bottom'"
                        :size="sizeVal"
                        :border="pageBorder"
                        :current-page.sync="tablePage.currentPage"
                        :page-size.sync="tablePage.pageSize"
                        :total="tablePage.total"
                        :page-sizes.sync="pageSizes"
                        :layouts="pageLayouts"
                        :align="pageAlign"
                        :loading="false"
                        v-bind="$attrs"
                        v-on="$listeners"
                        @page-change="pageChange">
                    <template v-for="(index, name) in $slots" v-slot:[name]>
                        <slot :name="name" />
                    </template>
                    <template #left>
                        <div v-if="getTipShow" class="bingo-vxe-table-pager-left">{{ $t('components.table.totalCheck') }} {{ getTotalCheck }} {{ $t('components.table.strip') }}</div>
                    </template>
                    <template #right>
                        <bmsa-layout class="bingo-vxe-table-pager-bottom"
                                     v-if="layoutName && showType == 'bottom'"
                                    :layoutName="layoutName"
                                    :size="size"
                                    :column="baseTableColumn"
                                    @getLayoutData="getLayoutData"
                                    @getLayout="getLayout"
                                    @on-layout-page-change="getLayoutPageChange">
                        </bmsa-layout>
                    </template>
                </vxe-pager>
            </div>
            <div v-else :style="getBodyHeight">
                <slot name="other-view"></slot>
            </div>
        </template>
    </div>
</template>
<script>
    import bmsaLayout from './tableSetting.vue'
    import emptyImg from '../../assets/images/empty.png'
    export default {
        name: 'bingo-vxe-table',
        components: { bmsaLayout },
        props: {
            showType: { // 表格展示类型，主要分页和布局显示的位置
                type: String,
                default: 'top'
            },
            showToolbar: { // 是否显示toolbar
                type: Boolean,
                default: true
            },
            showPage: { // 是否显示分页
                type: Boolean,
                default: true
            },
            layoutName: { // 布局的名称，一个表格对应一个布局名称
                type: String,
                default: null
            },
            columns: { // 列配置
                type: Array,
                default() {
                    return []
                },
            },
            tableData: { // 表格数据（与 loadData 行为一致，更新数据是不会重置状态）
                type: Array,
                default() {
                    return []
                },
            },
            height: { // 滚动区域高度
                type: [Number, String],
                default: 0
            },
            maxHeight: { // 最大高度
                type: [Number, String],
                default: '100%'
            },
            rowConfig: { // 行配置
                type: Object,
                default() {
                    return { isHover: true }
                },
            },
            border: { // 是否带有边框  default（默认）, full（完整边框）, outer（外边框）, inner（内边框）, none（无边框）
                type: [Boolean, String],
                default: true,
            },
            borderLine: { // 是否显示单元格线
                type: [Boolean, String],
                default: false,
            },
            stripe: { // 是否带有斑马纹（需要注意的是，在可编辑表格场景下，临时插入的数据不会有斑马纹样式）
                type: Boolean,
                default: true,
            },
            showHeaderOverflow: { // 设置表头所有内容过长时显示为省略号 ellipsis（只显示省略号）,title（并且显示为原生 title）,tooltip（并且显示为 tooltip 提示）
                type: [Boolean, String],
                default: true,
            },
            showFooterOverflow: { // 设置表尾所有内容过长时显示为省略号 ellipsis（只显示省略号）,title（并且显示为原生 title）,tooltip（并且显示为 tooltip 提示）
                type: [Boolean, String],
                default: true,
            },
            align: { // 列对齐方式
                type: String,
                default: 'left',
            },
            headerAlign: { // 列头对齐方式
                type: String,
                default: 'left',
            },
            showOverflow: { // 设置所有内容过长时显示为省略号（如果是固定列建议设置该值，提升渲染速度）
                type: [Boolean, String],
                default: true,
            },
            autoResize: { // 自动监听父元素的变化去重新计算表格（对于父元素可能存在动态变化、显示隐藏的容器中、列宽异常等场景中的可能会用到）
                type: Boolean,
                default: true,
            },
            highlightHoverRow: {  // 鼠标移到行是否要高亮显示
                type: Boolean,
                default: true,
            },
            size: { // 表格的尺寸 medium, small, mini
                type: String,
                default: '',
            },
            resizable: { // 所有的列是否允许拖动列宽调整大小
                type: Boolean,
                default: true,
            },
            pageBorder: { // 分页带边框
                type: Boolean,
                default: false,
            },
            tablePage: { // 分页格式定制
                type: Object,
                default() {
                    return {
                        currentPage: 1,
                        pageSize: 20,
                        total: 0
                    }
                },
            },
            pageSizes:{ // 每页大小选项列表
                type:Array,
                default(){
                    return [20, 40, 50, 100]
                } 
            },
            pageLayouts: {  // 分页自定义布局
                type: Array,
                default() {
                    return ['PrevPage', 'JumpNumber', 'NextPage', 'Total']
                },
            },
            pageAlign: { // 分页对齐方式
                type: String,
                default: 'center',
            },
            defaultOrder: { // 有布局的话默认排序
                type: String,
                default: 'createTime desc'
            },
            // 是否显示分页与表格之间的距离
            showPageBottom: {
                type: Boolean,
                default: false
            },
            showOtherView: { // 是否显示其他内容
                type: Boolean,
                default: false
            },
            exportInfo: { // 用于导出的列信息，传到开发人员页面，用于后台导出
                type: Array,
                default: () => {return []}
            },
            checkSelectAll: { // 全部选中的数据，不区分分页
                type: Number,
                default: 0
            },
            showEmptyImg: { // 是否自定义空图片
                type: Boolean,
                default: false
            },
            showFilter: { // 是否显示过滤条件
                type: Boolean,
                default: null
            },
            isChangeDefault: { // 是否保存切换的布局为默认选中
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                emptyImg: emptyImg, // 暂无数据的图片
                isFullscreen:false, // 是否全屏
                tHeight: 'auto', // 响应式计算表格的高度
                columnsList: this.columns, // columns
                baseTableColumn: [], // 表格底层的列结合，全局列，包含不显示的列
                sizeVal: '', // 表格尺寸大小，值为布局返回的
            }
        },
        computed: {
            getBodyHeight () { // 表格实体高度的计算
                let style = ''
                let height = this.sizeVal == 'minimum' ? 58 : this.sizeVal == 'mini' ? 58 : this.sizeVal == 'small' ? 62 : this.sizeVal == 'media' ? 68 : 0
                height = this.showToolbar ? height + 'px' : (height - 38) + 'px'
                style = {
                    height: `calc(100% - ${height})`
                }
                return style
            },
            getTipShow () { // 判断是否有复选框，是否显示勾选的数量
                let flag = false
                for (let i=0; i<this.columns.length; i++) {
                    if (this.columns[i].type == 'checkbox') { // 有复选框
                        flag = true
                        break
                    }
                }
                return flag
            },
            getTotalCheck () {
                if (this.checkSelectAll > 0) {
                    return this.checkSelectAll
                }
                if (this.$refs.xTable) {
                    return this.$refs.xTable.getCheckboxRecords().length
                }
                return 0
            }
        },
        watch:{
            columns:{
                handler(value) {
                    this.columnsList = value
                    setTimeout(() => { // 异步
                        // 获取全量列,初始化后获取，column改变后监听再获取，只拿他进行对比存储
                        this.getBaseColumn()
                    }, 0)
                },
                deep: true,
                immediate: true,
            }
        },
        methods: {
            // 全屏方法
            handleFullScreen (isFullscreen) {
                this.isFullscreen = isFullscreen
            },
            // 布局触发获取表格数据
            getLayoutData (pageSize) {
                if (pageSize) {
                    let newPage = {
                        currentPage: this.tablePage.currentPage,
                        total: this.tablePage.total,
                        pageSize: pageSize == 'all' ? this.tablePage.total : pageSize,
                    }
                    this.$emit('update:tablePage', newPage)
                }
                this.$emit('getLayoutData')
            },
            // 布局触发重新渲染表格
            getLayout (layout) {
                let newColumn = JSON.parse(layout.column) // 获取布局中的列配置
                let froze = layout.froze
                newColumn.forEach((item, index) => { // 冻结列
                    if (item.fixed == 'right' || !item.visible) { // 存在定位到右侧的数据或者隐藏的数据，froze增加1
                        froze += 1
                    } else {
                        if (index < froze) {
                            item.fixed = 'left'
                        }
                    }
                })
                this.sizeVal = layout.size // 表格大小
                // 渲染表格会将表格列上的过滤和排序都重置掉，如果列上有过滤和排序则从新触发getLayoutData
                let sortArr = this.$refs.xTable.getSortColumns()
                let filterArr = this.$refs.xTable.getCheckedFilters()
                if (sortArr.length || filterArr.length) { // 有条件
                    this.getLayoutData()
                }
                this.$refs.xTable.loadColumn(newColumn) // 渲染表格
                // 渲染表格列后，将当前展示的表格列信息通过exportInfo属性传到开发人员页面，用于导出
                let exportInfo = []
                newColumn.forEach(item => {
                    if (item.field && item.type != 'group') {
                        exportInfo.push({
                            aggFunc: null,
                            colId: item.field,
                            colName: item.title,
                            pivotIndex: null,
                            rowGroupIndex: null,
                        })
                    }
                })
                this.$emit('update:exportInfo', exportInfo)
            },
            // 表格响应式 TODO 此方法没有用到，暂时保留
            handleResize () {
                if (this.height && !this.isFullscreen) { // 如果存在height属性并且不是全屏，则取自定义的高度
                    this.tHeight = this.height;
                } else { // 组件的高度 - 分页的固定高度(35) - toolbar固定高度(38) TODO
                    if (this.showToolbar && this.showPage) {
                        this.tHeight = this.$refs['table-list'].offsetHeight - 35 - 38;
                    } else if (this.showToolbar) {
                        this.tHeight = this.$refs['table-list'].offsetHeight - 35;
                    } else if (this.showPage) {
                        this.tHeight = this.$refs['table-list'].offsetHeight - 38;
                    }
                    if (this.isFullscreen) { // 如果全屏的话,再减去card padding的高度
                        this.tHeight -=  24;
                    }
                }
            },
            // 表格列箭头排序或者列过滤条件
            handleSortOrFilterChange () {
                let sortArr = this.$refs.xTable.getSortColumns()
                let filterArr = this.$refs.xTable.getCheckedFilters()
                let params = {} // 最终条件
                if (sortArr.length || filterArr.length) { // 有条件
                    sortArr.forEach(item => {
                        params['orderBy'] = item.property + ' ' + item.order
                    })
                    filterArr.forEach(item => {
                        params[item.property] = item.datas[0] ? item.datas : item.values
                    })
                    this.$emit('getLayoutData', params)
                } else { // 无条件
                    this.getLayoutData() // 走布局
                }
            },
            // 分页改变
            pageChange({ type, currentPage, pageSize }) {
                this.tablePage.currentPage = currentPage
                // 切换每页条数返回第一页
                if(type=='size'){
                    this.tablePage.pageSize = pageSize
                    this.tablePage.currentPage = 1
                }
                this.$emit('update:tablePage', this.tablePage)
                this.$emit('getPageData')
            },
            // 构造基础列
            getBaseColumn () {
                // 获取全量列,初始化后获取，column改变后监听再获取，只拿他进行对比存储
                let baseColumns = [] // 底层列
                let groupField = [] // 分组的field
                let groupColumn = [] // 分组的column
                let groupIndex = [] // 分组列的位置
                baseColumns = this.$refs.xTable.getTableColumn().fullColumn
                this.columns.forEach(item => {
                    if (item.children && item.children) { // 说明有分组列
                        groupField.push(item.field)
                    }
                })
                groupField.forEach(item => {
                    let column = this.$refs.xTable.getColumnByField(item)
                    let index = this.$refs.xTable.getColumnIndex(column)
                    groupIndex.push(index)
                    groupColumn.push(column)
                })
                baseColumns = baseColumns.filter(item => !item.parentId) // 去掉分组列下面的所有列
                if (!(this.showFilter === null)) { // 为null时代表没有下拉过滤，有下拉过滤的话开发人员会传false
                    baseColumns.forEach(item => {
                        if (item.slots && item.slots.edit && !item.slots.header) { // 存在行编辑，并且没自定义列头插槽
                            item.slots.header = 'edit-header'
                        }
                        item.children = [{field: item.field, type: item.type, minWidth: item.minWidth, width: item.width, slots: item.slots, align: item.align, editRender: item.editRender}]
                        if (item.field) item.field = item.field + '-parent'
                    })
                }
                groupColumn.forEach((item, index) => {
                    // 判断分组是不是单层，判断两个层级就够了，单层的话不用加group属性，让其可以在布局里控制
                    if (!(item.children && (item.children.length == 1 || (item.children.children && item.children.children.length == 1)))) {
                        item.type = 'group'
                    }
                    baseColumns.splice(groupIndex[index], 0, item); // 添加分组列
                })
                this.baseTableColumn = baseColumns
                if (!(this.showFilter === null) && !this.layoutName) { // 如果有下拉过滤，并且没有布局，则手动渲染下表格
                    this.$refs.xTable.loadColumn(this.baseTableColumn) // 渲染表格
                }
            },
            // 布局中切换每页显示条数触发的方法
            getLayoutPageChange (val) {
                this.$emit('on-layout-page-change', val)
            }
        },
        mounted () {
            if (!this.layoutName) { // 没有布局的话
                this.sizeVal = this.size ? this.size : 'mini'
            }
        },
    }
</script>
<style lang="less">
.bingo-vxe-table {
    height: 100%;
    .vxe-table--render-default.size--medium .vxe-body--column.col--ellipsis,
    .vxe-table--render-default.size--medium .vxe-footer--column.col--ellipsis,
    .vxe-table--render-default.size--medium .vxe-header--column.col--ellipsis,
    .vxe-table--render-default.vxe-editable.size--medium .vxe-body--column {
        height: 36px;
    }
    .vxe-table--empty-block {
        padding: 179px 0 126px 0;
    }
    .vxe-table--render-default {
        .vxe-body--row.row--stripe {
            background-color: #F5F7F9;
        }
        .vxe-table--border-line {
            border: 1px solid #F5F7F9;
        }
        .vxe-table--header-border-line {
            display: none;
        }
        .vxe-body--column {
            background-image: unset;
        }
        .row--hover {
            background-color: #E4F7FF!important;
        }
    }
    .vxe-table--header-wrapper {
        background-color: #eaeff7!important;
        .vxe-header--column {
            border-right: 1px solid #D4DBE5;
            &.col--seq {
                border-right: 1px solid #E2E8F1;
            }
            .vxe-cell--edit-icon {
                display: none;
            }
            .icon-kebianji {
                font-size: 12px;
                margin-left: 6px;
                color: #a2adc0;
            }
        }
        &.fixed-right--wrapper {
            overflow-y: hidden;
        }
    }
    .vxe-pager.size--minimum {
        height: 36px;
    }
    .operation-btn { // 操作列按钮
        box-shadow: unset!important;
        background-color: transparent!important;
    }
    .size--minimum {
        font-size: 12px!important;
        .vxe-header--column { // 头
            height: 22px!important;
        }
        .vxe-body--column {
            height: 22px!important;
        }
        .vxe-cell {
            max-height: 22px!important;
            input {
                height: 20px!important;
            }
        }
        .ivu-btn{
            height: 22px;
            font-size: 12px;
            padding: 0 6px;
            .iconfont{
                font-size: 14px;
            }
        }
    }
    .show-page-minimum{ // 表格距离底部的高度
        .vxe-table--body-wrapper {
            padding-bottom: 44px;
        }
    }
    .show-page-mini{
        .vxe-table--body-wrapper {
            padding-bottom: 72px;
        }
    }
    .show-page-small{
        .vxe-table--body-wrapper {
            padding-bottom: 80px;
        }
    }
    .show-page-media{
        .vxe-table--body-wrapper {
            padding-bottom: 96px;
        }
    }
    .bingo-vxe-table-pager-left {
        position: absolute;
        left: 0
    }
    .bingo-vxe-table-pager-bottom {
        position: absolute;
        right: 10px
    }
    .bingo-vxe-table-pager-top {
        display: inline-block;
        padding: 0 6px;
    }
    .table-new-page {
        margin-right: 12px;
    }
}
/*表格中header checkbox样式*/
.vxe-table-checkbox-span {
    display: inline-block;
    width: 3em;
    margin-left: -5em;
    text-align: right;
    color: #606266;
}
.vxe-table-header-check {
    .vxe-cell {
        margin-left: 9px;
    }
    .vxe-cell--title {
        overflow: unset!important;
    }
}
// 表格全屏
.bingo-vxe-table-full-screen {
    position: fixed !important;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    height: 100%;
    padding: 8px;
    z-index: 999;
}
// 过滤条件
.bingo-vxe-table-filter {
    .vxe-header--row:not(:first-child) {
        &:last-child {
            opacity: 0;
            position: absolute;
        }
        .vxe-resizable {
            height: 200%;
        }
    }
}
.bingo-vxe-table-borderLine {
    .vxe-table--render-default {
        .vxe-body--column {
            background-image: -webkit-gradient(linear, left top, left bottom, from(#f5f7f9), to(#f5f7f9));
        }
    }
}
.bingo-vxe-table-filter-show {
    .vxe-header--row {
        &:last-child {
            background-color: #F5F7F9;
            .vxe-header--column {
                background-image: unset;
                border-right: unset;
                &.col--seq, &.col--checkbox, &.col--radio {
                    .vxe-cell {
                        display: none;
                    }
                }
                .icon-kebianji {
                    display: none;
                }
            }
            .vxe-resizable {
                height: 200%;
            }
        }
        .is--line {
            display: none;
        }
    }
}
// 分页
.bingo-vxe-page-wrapper {
    .vxe-pager--num-btn:focus {
        box-shadow: unset!important;
    }
}
</style>
