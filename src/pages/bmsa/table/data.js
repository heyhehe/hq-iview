// 输入型组件 【左面板】
export const getJson = [{
    name: '表格组件',
    children: [
        {
            name:'toolbar',
            children: [
                {
                    name: '左侧有新建按钮，默认显示，并提供扩展插槽',
                },
                {
                    name: '右侧有布局/导出/打印/刷新/全屏按钮，打印默认隐藏，其他默认显示，并提供扩展插槽',
                },
                {
                    name: '布局调用布局组件，直接作为表格组件中的固定功能，不再对外暴漏，只可以控制显示隐藏',
                },
            ]
        },
        {
            name:'表格',
            children: [
                {
                    name: '继承vxe-table表格所有属性',
                },
                {
                    name: '修改vxe-table表格样式，普通表格和高级表格风格一致',
                },
                {
                    name: '部分属性设置默认值，统一表格风格',
                },
                {
                    name: '表格高度height响应式计算',
                },
            ]
        },
        {
            name:'分页',
            children: [
                {
                    name: '显示总数/显示电梯，可以快速切换到某一页/显示分页，用来改变page-size',
                },
                {
                    name: '提供pageSetting属性，包含当前页面/总数/每页条数，page-size固定为可选择 20/40/50/100，默认当前表格显示20条',
                },
                {
                    name: '提供切换分页事件，提供切换每页条数事件',
                },
            ]
        },
    ]
}]
// 表格数据
export const getDatas = [
    // {
    //     id: '100',
    //     props: '继承vxe-table表格所有属性',
    //     explain: 'https://xuliangzhan_admin.gitee.io/vxe-table/v3/#/table/grid/basic',
    // },
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
]
