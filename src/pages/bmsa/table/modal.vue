<template>
    <div>
        <bmsa-modal title="modal" v-model="isShow" :fullscreen="true">
          <bingo-vxe-table
            :tableData="data"
            :columns="columns"
            :treeConfig="{
            rowField: 'props',
         }"
            >
          </bingo-vxe-table>
        </bmsa-modal>
    </div>
</template>

<script>
    export default {
        name: "modal",
        data(){
          return{
            isShow:false,
            data:[
              {
                id: '111',
                props: '表格属性',
                _showChildren: true,
                children: [
                  {
                    id: '112',
                    props: ':showType',
                    explain: '表格展示类型，主要分页和布局显示的位置',
                    type: 'String',
                    value: '为top时，分页和布局显示再toolbar上，为bottom时显示在表格下面',
                    defaultValue: 'top'
                  },
                  {
                    id: '113',
                    props: ':showFilter',
                    explain: '是否显示列过滤条件',
                    type: 'Boolean',
                    value: '',
                    defaultValue: 'null'
                  },
                  {
                    id: '1',
                    props: ':showToolbar',
                    explain: '是否显示toolbar',
                    type: 'Boolean',
                    value: 'true/false',
                    defaultValue: 'true'
                  },
                  {
                    id: '2',
                    props: ':showPage',
                    explain: '是否显示分页',
                    type: 'Boolean',
                    value: 'true/false',
                    defaultValue: 'true'
                  },
                  {
                    id: '4',
                    props: ':layoutName',
                    explain: '布局的名称，一个表格对应一个布局名称',
                    type: 'String',
                    value: '',
                    defaultValue: ''
                  },
                  {
                    id: '5',
                    props: ':columns',
                    explain: '表格列',
                    type: 'Array',
                    value: '',
                    defaultValue: '[]'
                  },
                  {
                    id: '6',
                    props: ':height',
                    explain: '自定义表格高度',
                    type: 'Number，String',
                    value: '',
                    defaultValue: '0'
                  },
                  {
                    id: '6.1',
                    props: ':maxHeight',
                    explain: '表格最大高度',
                    type: 'Number，String',
                    value: '',
                    defaultValue: '100%'
                  },
                  {
                    id: '6.2',
                    props: ':size',
                    explain: '表格尺寸大小',
                    type: 'String',
                    value: '',
                    defaultValue: '默认取全局大小，有size的话取自己大小'
                  },
                  {
                    id: '6.11',
                    props: ':borderLine',
                    explain: '是否显示单元格线',
                    type: 'Boolean',
                    value: '取代原border',
                    defaultValue: 'false'
                  },
                  {
                    id: '6.3',
                    props: ':showPageBottom',
                    explain: '表格底部默认空出两条数据高度，这个是取消那个高度的属性',
                    type: 'Boolean',
                    value: '',
                    defaultValue: 'true'
                  },
                  {
                    id: '6.4',
                    props: ':showOtherView',
                    explain: '显示其他内容，隐藏表格，常用于切换视图',
                    type: 'Boolean',
                    value: '',
                    defaultValue: 'false'
                  },
                  {
                    id: '6.5',
                    props: ':showToolbarRight',
                    explain: '是否显示toolbar上右侧的所有按钮',
                    type: 'Boolean',
                    value: '',
                    defaultValue: 'true'
                  },
                  {
                    id: '6.13',
                    props: ':exportInfo',
                    explain: '获取布局列信息，用于传到后台进行导出',
                    type: 'Array',
                    value: '',
                    defaultValue: '[]'
                  },
                  {
                    id: '8',
                    props: '@getLayoutData',
                    explain: '获取表格数据（带过滤条件和排序条件），只有布局和表格列排序调用',
                    type: '',
                    value: '',
                    defaultValue: '排序条件/过滤条件'
                  },
                  {
                    id: '9',
                    props: '@getPageData',
                    explain: '获取表格数据（分页切换时触发）',
                    type: '',
                    value: '',
                    defaultValue: ''
                  },
                ]
              },
              {
                id: '222',
                props: 'toolbar',
                _showChildren: true,
                children: [
                  {
                    id: '11',
                    props: ':showExport',
                    explain: '是否显示导出',
                    type: 'Boolean',
                    value: 'true/false',
                    defaultValue: 'true'
                  },
                  {
                    id: '12',
                    props: ':showImport',
                    explain: '是否显示导入',
                    type: 'Boolean',
                    value: 'true/false',
                    defaultValue: 'false'
                  },
                  {
                    id: '13',
                    props: ':showPrint',
                    explain: '是否显示打印',
                    type: 'Boolean',
                    value: 'true/false',
                    defaultValue: 'false'
                  },
                  {
                    id: '14',
                    props: ':showRefresh',
                    explain: '是否显示刷新',
                    type: 'Boolean',
                    value: 'true/false',
                    defaultValue: 'true'
                  },
                  {
                    id: '14',
                    props: ':showFullScreen',
                    explain: '是否显示全屏',
                    type: 'Boolean',
                    value: 'true/false',
                    defaultValue: 'true'
                  },
                  {
                    id: '17',
                    props: ':@on-export',
                    explain: '导出方法',
                    type: '',
                    value: '',
                    defaultValue: ''
                  },
                  {
                    id: '18',
                    props: ':@on-import',
                    explain: '导入方法',
                    type: '',
                    value: '',
                    defaultValue: ''
                  },
                  {
                    id: '19',
                    props: ':@on-print',
                    explain: '打印方法',
                    type: '',
                    value: '',
                    defaultValue: ''
                  },
                  {
                    id: '20',
                    props: ':@on-refresh',
                    explain: '刷新方法',
                    type: '',
                    value: '',
                    defaultValue: ''
                  },
                  {
                    id: '20',
                    props: ':@on-full-screen',
                    explain: '全屏方法',
                    type: '',
                    value: '',
                    defaultValue: ''
                  },
                  {
                    id: '21',
                    props: ':@on-layout-page-change',
                    explain: '布局中切换每页显示条数触发的方法',
                    type: '',
                    value: '',
                    defaultValue: ''
                  },
                ]
              },
              {
                id: '333',
                props: '分页',
                _showChildren: true,
                children: [
                  {
                    id: '7',
                    props: ':tablePage',
                    explain: '分页配置',
                    type: 'Object',
                    value: '',
                    defaultValue: '{currentPage: 1,total: 0,pageSize: 20,}'
                  },
                ]
              },
              {
                id: '444',
                props: '插槽',
                _showChildren: true,
                children: [
                  {
                    id: '441',
                    props: '#left-button',
                    explain: 'toolbar左侧区域配置',
                    type: '',
                    value: '',
                    defaultValue: ''
                  },
                  {
                    id: '442',
                    props: '#right-button',
                    explain: 'toolbar右侧，按钮区域左侧插槽',
                    type: '',
                    value: '',
                    defaultValue: ''
                  },
                  {
                    id: '443',
                    props: '#right-btns',
                    explain: 'toolbar右侧，按钮区域内插槽',
                    type: '',
                    value: '',
                    defaultValue: ''
                  },
                  {
                    id: '444',
                    props: '#empty',
                    explain: '表格无数据时自定义空内容插槽',
                    type: '',
                    value: '',
                    defaultValue: ''
                  },
                  {
                    id: '445',
                    props: '#other-view',
                    explain: '不使用表格，空白区域的插槽',
                    type: '',
                    value: '',
                    defaultValue: ''
                  },
                ]
              },
            ],
            columns:[
              {
                type: 'seq',
                title: '序号',
                width: 65,
                align: 'center',
                fixed: 'left'
              },
              {
                title: '属性/方法',
                field: 'props',
                width: 240,
                treeNode: true,
              },
              {
                title: '说明',
                field: 'explain',
              },
              {
                title: '类型/返回类型',
                field: 'type',
                width: 200,
              },
              {
                title: '可选值',
                field: 'value',
                width: 200,
              },
              {
                title: '默认值/参数',
                field: 'defaultValue',
              },
            ],
          }
        }
    }
</script>

<style scoped>

</style>
