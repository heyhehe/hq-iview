<template>
    <div class="bmsa-layout-wrapper">
        <Dropdown trigger="custom" :visible="visible" transfer placement="top-end" transfer-class-name="layout-drop-transfer"
                  @on-click="handleClick" @on-clickoutside="handleClose">
            <span class="icon iconfont iconbiaogeshezhi2" @click="handleOpen"></span>
            <DropdownMenu slot="list">
                <DropdownItem class="layout-body">
                    <Card class="layout-card-class" :bordered="false" dis-hover>
                        <!--切换已存/新建布局区域-->
                        <div class="setting-tabs">
                            <span :class="activeTab=='1'?'setting-tab-active':'setting-tab'" @click="handleTab('1')">{{$t('components.table.layout1')}}</span>
                            <span class="separate">|</span>
                            <span :class="activeTab=='2'?'setting-tab-active':'setting-tab'" @click="handleTab('2')">{{$t('components.table.layout2')}}</span>
                            <span class="setting-tab-info" v-if="activeTab=='2'">{{$t('components.table.info')}}</span>
                        </div>
                        <!--切换布局/新建布局表单区域-->
                        <div>
                            <p v-show="activeTab=='1'">
                                <Radio-group v-model="selectLayout.name" @on-change="handleReloadLayout" type="button" size="small">
                                    <template v-for="(item,index) in layoutArr">
                                        <Radio :key="index" :label="item.name" class="table-setting_layout-item">
                                            {{item.name}}<span v-if="item.name!='默认布局'" class="table-setting_layout-close" @click="handleDeleteLayout(item, index)">X</span>
                                        </Radio>
                                    </template>
                                </Radio-group>
                            </p>
                            <div class="setting-form" v-show="activeTab=='2'">
                                <vxe-form size="mini"
                                        ref="bmsaLayoutForm"
                                        class="bmsa-bottom-layout--model"
                                        :title-asterisk="false"
                                        :data="formData"
                                        :items="formItems"
                                        :rules="formRules"
                                        title-width="100"
                                        @submit="handleSubmit">
                                </vxe-form>
                                <Button type="primary" class="setting-button" @click="handleSubmit">{{$t('components.table.save')}}</Button>
                            </div>
                        </div>
                        <!--显示模式-->
                        <div class="layout-show-body">
                            <div class="flex1">
                                <p class="title">{{$t('components.table.showMode')}}</p>
                                <p>
                                    <Radio-group v-model="selectLayout.size" type="button" size="small" @on-change="handleSizeChange">
                                        <Radio label="minimum">{{$t('components.table.minimum')}}</Radio>
                                        <Radio label="mini">{{$t('components.table.mini')}}</Radio>
                                        <Radio label="small">{{$t('components.table.small')}}</Radio>
                                        <Radio label="media">{{$t('components.table.media')}}</Radio>
                                    </Radio-group>
                                </p>
                                <p class="title">{{$t('components.table.info2')}}</p>
                                <p>
                                    <Radio-group v-model="selectLayout.page" @on-change="handlePageChange" type="button" size="small">
                                        <Radio :label="20">20</Radio>
                                        <Radio :label="40">40</Radio>
                                        <Radio :label="50">50</Radio>
                                        <Radio :label="100">100</Radio>
                                        <Radio :label="2147483647">{{$t('components.table.all')}}</Radio>
                                    </Radio-group>
                                </p>
                                <p class="title">{{$t('components.table.info3')}}</p>
                                <p>
                                    <Radio-group v-model="selectLayout.froze" @on-change="handleFrozeChange" type="button" size="small">
                                        <Radio :label="1">1</Radio>
                                        <Radio :label="2">2</Radio>
                                        <Radio :label="3">3</Radio>
                                        <Radio :label="4">4</Radio>
                                        <Radio :label="5">5</Radio>
                                        <Radio :label="6">6</Radio>
                                    </Radio-group>
                                </p>
                            </div>
                            <div class="flex1 i-scrollbar flex-right">
                                <div class="setting-checkall">
                                    <span class="setting-title"></span>
                                    <p class="title">{{$t('components.table.info4')}}</p>
                                    <Checkbox :value="isCheckAll" @click.prevent.native="handleCheckAll" class="allCheckBox">{{$t('components.table.all')}}</Checkbox>
                                </div>
                                <CheckboxGroup ref="checkGroup" v-model="getColumnSelect" @on-change="handleColumnChange" class="setting-check-column">
                                    <template v-for="(item, index) in nowColumn">
                                        <Checkbox :label="item.field" :key="item.field" class="setting-checkbox">{{item.title}}</Checkbox>
                                    </template>
                                </CheckboxGroup>
                            </div>
                        </div>
                    </Card>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>
<script>
    import Sortable from 'sortablejs'
    export default {
        name: 'tableSetting',
        props: {
            // 表格列，所有列，基础列
            column: {
                type: Array,
                default: () => {
                    return []
                }
            },
            // 布局名称
            layoutName: {
                type: String,
                default: 'layout'
            },
            // 布局大小
            size: {
                type: String,
                default: ''
            },
            // 冻结前几列
            froze: {
                type: Number,
                default: 1
            }
        },
        data() {
            const self = this
            return {
                visible: false, // 控制drop展开
                activeTab: '1', // 已存布局/新建布局
                defaultLayoutName: '', // 选中布局名称
                layoutArr: [], // 已存布局集合
                nowColumn: [], // 当前显示的列，即布局中显示的列
                selectLayout: {}, // 当前选择的布局
                formData: { // 新建布局的表单
                    projectName: null,
                },
                formItems: [{ field: 'projectName', itemRender: { name: '$input', props: { placeholder: this.$t('components.table.info6') } } }],
                formRules: { // 新建布局的规则
                    projectName: [
                        { required: true, message: this.$t('components.table.info6') },
                        { min: 3, max: 10, message: this.$t('components.table.length') + ' 0 ' + this.$t('components.table.to') + ' 10 ' + this.$t('components.table.numStr')},
                        {
                            validator ({ itemValue }) {
                                let flag = false
                                self.layoutArr.forEach(item => {
                                    if (item.name == itemValue) {
                                        flag = true
                                    }
                                })
                                if (flag) {
                                    return new Error(self.$t('components.table.info7'))
                                }
                            }
                        }
                    ]
                },
                isCheckAll: true, // 是否全选
                sortable2: {}, // 列拖拽
                sizeGlobal: '', // 全局布局
            }
        },
        computed: {
            getColumnSelect: { // 获取选中的列集合
                get: function () {
                    let selectArr = []
                    if (!this.selectLayout.column) {
                        return selectArr
                    }
                    JSON.parse(this.selectLayout.column).forEach(item => {
                        if (item.visible && item.field && item.type != 'group') {
                            selectArr.push(item.field)
                        }
                    })
                    return selectArr
                },
                set: function (value) {
                }
            },
        },
        watch:{
            column: {
                handler: function (value) {
                    if (value && value.length) {
                        // 获取表格布局
                        this.handleSaveDefault()
                    }
                }
            },
            // 监听是否全选
            getColumnSelect: {
                handler: function (value) {
                    let nums = 0
                    JSON.parse(this.selectLayout.column).forEach(item => {
                        if (item.field && item.type != 'group') { // 去掉序号和操作列和分组列
                            nums += 1
                        }
                    })
                    if (value.length == nums) {
                        this.isCheckAll = true
                    } else {
                        this.isCheckAll = false
                    }
                }
            },
            // 监听布局中列发生的改变
            'selectLayout.column': {
                handler: function (value) {
                    if (!value) return
                    let newArr = JSON.parse(value).filter(item => item.field && item.type != 'group')
                    this.nowColumn = newArr
                }
            },
        },
        methods: {
            // 打开下拉
            handleOpen () {
                this.visible = true;
            },
            // 关闭下拉
            handleClose () {
                this.visible = false;
            },
            // 下拉框内点击事件，阻止冒泡
            handleClick () {
                event.stopPropagation()
            },
            // 切换TAB
            handleTab (val) {
                this.formData.projectName = null
                this.activeTab = val
            },
            // 布局选择
            handleReloadLayout (val) {
                let that = this
                this.layoutArr.forEach(item => {
                    if (item.name == val) {
                        this.selectLayout = JSON.parse(JSON.stringify(item))
                    }
                })
                // 存储到表中, 选择这个布局后则每次都会定位到这个布局
                this.$db.transaction(function (tx) {
                    tx.executeSql('update tableBaseLayout set isDefault=0 where layout=? and name!=?', [that.layoutName, that.selectLayout.name])
                    tx.executeSql('update tableBaseLayout set isDefault=1 where layout=? and name=?', [that.layoutName, that.selectLayout.name])
                })
                this.handleGetLayoutData() // 走布局方法，获取数据，渲染表格
            },
            // 新建布局
            handleSubmit () {
                this.$refs['bmsaLayoutForm'].validate((valid) => {
                    if (!valid) {
                        let that = this
                        this.selectLayout.name = this.formData.projectName
                        that.layoutArr.push(JSON.parse(JSON.stringify(this.selectLayout)))
                        this.activeTab = '1'
                        // 新建布局存储到表中，先将其他布局的isDefault都变成0
                        this.$db.transaction(function (tx) {
                            tx.executeSql('update tableBaseLayout set isDefault=0 where layout=?', [that.layoutName])
                            let size = that.size ? that.selectLayout.size : that.sizeGlobal
                            let newLayout = [
                                that.layoutName,
                                that.selectLayout.name,
                                1,
                                that.selectLayout.page,
                                that.selectLayout.froze,
                                that.selectLayout.column,
                                size,
                                that.$Date().format('YYYY-MM-DD HH:mm:ss')
                            ]
                            tx.executeSql('insert into tableBaseLayout (layout, name, isDefault, page, froze, column, size, date) values (?,?,?,?,?,?,?,?)', newLayout)
                        })
                    }
                })
            },
            // 删除布局
            handleDeleteLayout (layout, index) {
                let that = this;
                this.$BAlert.info({
                    isDelete: true,
                    content: this.$t('components.table.info5'),
                    onOk: (e) => {
                        this.layoutArr.splice(index, 1);
                        // 删除后定位到默认布局
                        this.$db.transaction(function (tx) {
                            tx.executeSql('DELETE FROM tableBaseLayout  WHERE layout=? and name=?', [that.layoutName, layout.name], function (tx1) {
                                that.handleReloadLayout('默认布局')
                                e.show = false // 关闭弹窗
                            })
                        })
                    }
                });
            },
            // 全选
            handleCheckAll () {
                const flag = !this.isCheckAll
                let that = this
                let columnFields = JSON.parse(this.selectLayout.column)
                columnFields.forEach(item => {
                    if (item.field && item.type != 'group') {
                        item.visible = flag
                    }
                })
                this.selectLayout.column = JSON.stringify(columnFields)
                // 存储到表中
                // if (!(that.selectLayout.name == '默认布局')) { // 默认布局不可以修改
                this.$db.transaction(function (tx) {
                    tx.executeSql('update tableBaseLayout set column = ? where name = ? and layout = ?', [that.selectLayout.column, that.selectLayout.name, that.layoutName])
                })
                // }
                this.layoutArr.forEach((item, index) => {
                    if (item.name == this.selectLayout.name) {
                        this.layoutArr[index] = JSON.parse(JSON.stringify(this.selectLayout))
                    }
                })
                that.handleGetLayout() // 触发表格渲染
                // this.$emit('layout-check-all', this.isCheckAll)
            },
            // 布局大小发生改变
            handleSizeChange (val) {
                let that = this
                // 存储到表中
                if (this.size) { // 存在自定义大小，存在自己表中
                    // if (!(that.selectLayout.name == '默认布局')) { // 默认布局不可以修改
                    this.$db.transaction(function (tx) {
                        tx.executeSql('update tableBaseLayout set size = ? where name = ? and layout = ?', [that.selectLayout.size, that.selectLayout.name, that.layoutName])
                    })
                    // }
                    that.handleGetLayout() // 触发表格渲染
                } else { // 存到全局
                    this.$db.transaction(function (tx) {
                        tx.executeSql('update global set size=? where system=?', [that.selectLayout.size, that.Global.SystemName])
                        that.handleGetLayout()
                    })
                }
                this.layoutArr.forEach((item, index) => {
                    if (item.name == this.selectLayout.name) {
                        this.layoutArr[index] = JSON.parse(JSON.stringify(this.selectLayout))
                    }
                })
            },
            // 分页切换
            handlePageChange (val) {
                let that = this
                // 存储到表中
                // if (!(that.selectLayout.name == '默认布局')) { // 默认布局不可以修改
                this.$db.transaction(function (tx) {
                    tx.executeSql('update tableBaseLayout set page = ? where name = ? and layout = ?', [that.selectLayout.page, that.selectLayout.name, that.layoutName])
                })
                // }
                this.layoutArr.forEach((item, index) => {
                    if (item.name == this.selectLayout.name) {
                        this.layoutArr[index] = JSON.parse(JSON.stringify(this.selectLayout))
                    }
                })
                that.handleGetLayoutData() // 触发表格渲染
                that.$emit('on-layout-page-change', val)
            },
            // 选择冻结前几列
            handleFrozeChange (val) {
                let that = this
                // 存储到表中
                // if (!(that.selectLayout.name == '默认布局')) { // 默认布局不可以修改
                this.$db.transaction(function (tx) {
                    tx.executeSql('update tableBaseLayout set froze = ? where name = ? and layout = ?', [that.selectLayout.froze, that.selectLayout.name, that.layoutName])
                })
                // }
                this.layoutArr.forEach((item, index) => {
                    if (item.name == this.selectLayout.name) {
                        this.layoutArr[index] = JSON.parse(JSON.stringify(this.selectLayout))
                    }
                })
                that.handleGetLayout() // 触发表格渲染
            },
            // 表格列勾选触发
            handleColumnChange (data) {
                let that = this
                let columnFields = JSON.parse(this.selectLayout.column)
                columnFields.forEach(item => {
                    if (item.field && item.type != 'group') {
                        item.visible = false
                        data.forEach(item2 => {
                            if (item.field == item2) {
                                item.visible = true
                            }
                        })
                    }
                })
                this.selectLayout.column = JSON.stringify(columnFields)
                // 存储到表中
                // if (!(that.selectLayout.name == '默认布局')) { // 默认布局不可以修改
                this.$db.transaction(function (tx) {
                    tx.executeSql('update tableBaseLayout set column = ? where name = ? and layout = ?', [that.selectLayout.column, that.selectLayout.name, that.layoutName])
                })
                // }
                this.layoutArr.forEach((item, index) => {
                    if (item.name == this.selectLayout.name) {
                        this.layoutArr[index] = JSON.parse(JSON.stringify(this.selectLayout))
                    }
                })
                that.handleGetLayout() // 触发表格渲染
            },
            // 列拖拽
            handleCheckDrag () {
                let that = this
                this.sortable2 = Sortable.create(this.$refs.checkGroup.$el, {
                    animation: 150,
                    onEnd: ({ item, newIndex, oldIndex }) => {
                        let addColumn = JSON.parse(this.selectLayout.column)
                        // 去掉序号和布局列和分组列
                        let indexArr = []
                        let columnArr = []
                        addColumn.forEach((item, index) => {
                            if (!item.field || item.type == 'group') { // 所有没有field的列或者分组列
                                indexArr.push(index)
                                columnArr.push(JSON.parse(JSON.stringify(item)))
                            }
                        })
                        addColumn = addColumn.filter(item => item.field && item.type != 'group')

                        let currRow = addColumn.splice(oldIndex, 1)[0];
                        addColumn.splice(newIndex, 0, currRow); // 调整顺序

                        if (indexArr.length) { // 把所有没有field的列拼上
                            indexArr.forEach((item, index) => {
                                addColumn.splice(item, 0, columnArr[index])
                            })
                        }

                        this.selectLayout.column = JSON.stringify(addColumn)
                        // if (!(that.selectLayout.name == '默认布局')) { // 默认布局不可以修改
                        // 存储到表中
                        this.$db.transaction(function (tx) {
                            tx.executeSql('update tableBaseLayout set column = ? where name = ? and layout = ?', [that.selectLayout.column, that.selectLayout.name, that.layoutName])
                        })
                        // }
                        this.layoutArr.forEach((item, index) => {
                            if (item.name == this.selectLayout.name) {
                                this.layoutArr[index] = JSON.parse(JSON.stringify(this.selectLayout))
                            }
                        })
                        that.handleGetLayout() // 触发表格渲染
                    }
                })
            },
            // ----------------布局存储，websql形式，后续可修改成后台存储形式---------------------------
            // 初始化布局，没有布局的话创建一个默认布局，有默认布局和其他布局的话根据开发人员传的columns对其整体修改一遍
            handleSaveDefault () {
                let that = this
                that.$db.transaction(function (tx) {
                    tx.executeSql('SELECT * FROM global where system=?', [that.Global.SystemName], function (tx, results) {
                        var size = results.rows
                        if (size.length > 0) {
                            that.sizeGlobal = size.item(0).size
                        }
                    })
                })
                that.$db.transaction(function (tx) {
                    tx.executeSql('SELECT * FROM tableBaseLayout where layout=?', [that.layoutName], function (tx, results) {
                        // 去表里查询此条数据是否已存在
                        let len = results.rows.length;
                        that.layoutArr = []
                        if (len > 0) {
                            let selectLayout = {} // 获取默认选中的布局
                            for (let i = 0; i < len; i++) { // 所有的布局
                                let layout = results.rows.item(i)
                                let baseColumn = JSON.parse(JSON.stringify(that.column)) // 全局列
                                let layoutColumn = JSON.parse(layout.column) // 布局存储的列
                                let addColumn = [] // 用于记录开发人员新增的列
                                let newColumn = [] // 全局列和布局列最终合并完的列
                                // 合并步骤一，全局列，将布局列中的visible合并到全局列上
                                baseColumn.forEach((item, index) => {
                                    let isNew = true // 用于判断是否是新增的列
                                    for (let j = 0; j < layoutColumn.length; j++) {
                                        let item2 = layoutColumn[j]
                                        if (item.field && item.type != 'group' && item.field == item2.field) {
                                            item.visible = item2.visible
                                            isNew = false
                                            break
                                        }
                                    }
                                    if (isNew) { // 记录新增的列和新增的位置
                                        addColumn.push({data: item, index: index})
                                    }
                                })
                                // 合并步骤二，根据布局列调整顺序，调整完顺序后再将新增的列插入指定位置
                                layoutColumn.forEach(item => {
                                    for (let j = 0; j < baseColumn.length; j++) {
                                        let item2 = baseColumn[j]
                                        if (item.field && item.type != 'group' && item.field == item2.field) {
                                            newColumn.push(JSON.parse(JSON.stringify(item2)))
                                            break
                                        }
                                    }
                                })
                                addColumn.forEach(item => {
                                    newColumn.splice(item.index, 0, item.data);
                                })
                                if (layout.isDefault) { // 找到当前选中的布局
                                    selectLayout = {
                                        layout: layout.layout,
                                        size: that.size ? layout.size : that.sizeGlobal,
                                        page: layout.page,
                                        froze: layout.froze,
                                        name: layout.name,
                                        column: JSON.stringify(newColumn), // 这里取全局列和布局存储列构造完的结构
                                    }
                                }
                                // 把当前开发人员传过来的表格列重新存到各个布局中，避免每次开发人员修改布列都得修改布局名称
                                let saveColumn = JSON.stringify(newColumn)
                                let row = JSON.parse(JSON.stringify(layout))
                                row.size = that.size ? row.size : that.sizeGlobal  // 有布局取当前布局，没有取全局布局
                                row.column = saveColumn
                                that.layoutArr.push(row) // 所有布局的集合
                                tx.executeSql('update tableBaseLayout set column = ? where name = ? and layout = ?', [saveColumn, layout.name, that.layoutName])
                            }
                            that.selectLayout = selectLayout  // 当前选中的布局
                        } else {
                            let size = that.size ? that.size : that.sizeGlobal
                            // 存储默认布局
                            let defaultLayout = [
                                that.layoutName,
                                '默认布局',
                                1,
                                40,
                                1,
                                JSON.stringify(that.column),
                                size,
                                that.$Date().format('YYYY-MM-DD HH:mm:ss')
                            ]
                            tx.executeSql('insert into tableBaseLayout (layout, name, isDefault, page, froze, column, size, date) values (?,?,?,?,?,?,?,?)', defaultLayout)
                            that.selectLayout = {layout: that.layoutName, size: size, page: 40, froze: 1, name: '默认布局', column: JSON.stringify(that.column)} // 当前选中的布局
                            that.layoutArr.push({
                                ...that.selectLayout,
                                isDefault: 1
                            })
                        }
                        that.handleGetLayoutData() // 获取表格数据
                    })
                })
            },
            // 通过布局触发表格获取数据， 初始时/切换布局/分页时触发
            handleGetLayoutData () {
                this.$emit('getLayoutData', this.selectLayout.page)
                this.handleGetLayout()
            },
            // 通过布局触发表格渲染，大小/冻结/勾选列时触发
            handleGetLayout () {
                this.$emit('getLayout', this.selectLayout)
            },
        },
        mounted () {
            // 列拖拽
            this.handleCheckDrag()
        },
        beforeDestroy () {
            if (this.sortable2) {
                this.sortable2.destroy()
            }
        }
    }
</script>
<style lang="less">
    .bmsa-layout-wrapper {
        .iconbiaogeshezhi2 {
            cursor: pointer;
            color: rgba(51,63,72,.5);
        }
    }
    .layout-drop-transfer { // 下拉框样式
        max-height: unset!important;
        width: 470px!important;
        margin: unset!important;
        .ivu-dropdown-menu {
            width: 100%;
            .layout-body {
                width: 100%;
                padding: unset;
                &:hover {
                    background-color: unset;
                }
            }
        }
        .layout-card-class { // 布局里样式
            /*.ivu-card-body {*/
                /*padding: 8px;*/
            /*}*/
            .setting-tabs {
                margin-bottom: 10px;
            }
            .separate{ // 分割线
                color: #d8d8d8;
                margin:0 10px
            }
            .setting-tab {
                opacity: 0.8;
                font-weight: 500;
                text-align: left;
                color: #333333;
                line-height: 20px;
                letter-spacing: 0.58px;
            }
            .setting-tab-active {
                opacity: 0.8;
                font-weight: 600;
                text-align: left;
                color: #1478f6;
                line-height: 20px;
                letter-spacing: 0.58px;
            }
            .setting-tab-info {
                margin-left: 12px;
                font-size: 12px;
                color: red;
                white-space: normal;
            }

            .table-setting_layout-item{
                border: 1px solid #efefef !important;
                margin-left: 4px;
            }
            .table-setting_layout-close{
                padding-left: 10px;
                zoom:0.8
            }
            /*布局名称标签的样式*/
            .ivu-radio-group {
                line-height: 28px;
            }
            .ivu-radio-group-button .ivu-radio-wrapper-checked {
                box-shadow: none!important;
                border: none;
                font-weight: bolder;
            }
            .ivu-radio-group-button.ivu-radio-group-small .ivu-radio-wrapper {
                padding: 0px 8px;
                border: none;
            }
            .ivu-radio-group-button .ivu-radio-wrapper:before, .ivu-radio-group-button .ivu-radio-wrapper:after {
                width: 0px;
            }
            /*新建布局表单的样式*/
            .setting-form{
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .setting-button{
                width: 93px;
                height: 24px;
                background: #1478f6;
                border-radius: 2px;
            }
            .bmsa-bottom-layout--model {
                .vxe-form--item-inner {
                    flex-direction: column;
                    align-items: flex-start;
                }

                .vxe-input {
                    width: 150px;
                }
            }
            // 显示区域
            .layout-show-body {
                display: flex;
                height: 200px;
                .flex1{
                    flex:1;
                }
                .flex-right{
                    height: 100%;
                    overflow-y: scroll
                }
                .title {
                    color: #9f9f9f;
                    height: 32px;
                    line-height: 32px;
                    overflow: hidden;
                    display: block;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                // 选择显示字段区域样式
                .setting-checkall {
                    padding: 8px 8px 0 0;
                    position: relative;
                    .allCheckBox {
                        position: absolute;
                        top: 14px;
                        right: 8px;
                    }
                }
                .setting-title{
                    font-weight: 400;
                    text-align: left;
                    line-height: 20px;
                    letter-spacing: 0.58px;
                }
                .setting-check-column {
                    .ivu-checkbox-wrapper-checked {
                        // margin-right: 0;
                        color: #3b97d7;
                        background: #cfeefd;

                    }
                }
                .setting-checkbox{
                    display: block;
                    width:200px;
                    position: relative;
                    margin: 1px 2px 1px 0;
                    padding: 0 5px;
                    line-height: 24px;
                }
            }
        }
    }
</style>
