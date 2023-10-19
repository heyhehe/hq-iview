import system from './system/zh-CN';
import bmsa from './bmsa/zh-CN';
import components from './components/zh-CN';
import bingoUpload from './bingo-document/zh-CN'

export default {
    locale: 'zh-CN',
    language: '简体中文',
    menu: {
        i18n: '多语言'
    },
    system: system,
    bmsa: bmsa,
    bingoUpload,
    page: {
        common:{
            SystemName:'涂装中控系统',
            index:'序号',
            layout: '布局',
            import: '导入',
            export: '导出',
            search: '查询',
            popupquery:'弹出层查询',
            reset:'重置',
            form:'表单',
            edit: '编辑',
            delete: '删除',
            refresh: '刷新',
            more:'更多',
            fullScreen:'全屏',
            reduction:'还原',
            man:'男',
            woman:'女',
            add: '新增',
            new:'新建',
            save:'保存',
            see:'查看',
            cancel:'取消',
            sure: '确定',
            approval:'审批',
            action: '操作',
            download: '下载',
            print:'打印',
            PleaseSelect:'请选择',
            PleaseEnter:'请输入',
            noData:'暂无数据',
            noCheck:'校验未通过!',
            success:'保存成功！',
            PleaseConfirm:'请确认',
            isDelete:'是否确定删除?',
            isSure:'是否确认此提醒?',
            isSures:'是否确定批量确认?',
            isDeletes:'是否确定批量删除?',
            delSuccess:'删除成功！',
            ExportSuccess:'导出成功!',
            CopySucceeded:'复制成功!',
            PleaseSelectTheDataToDelete:'请选择要操作的数据！',
            max500:'不得超过500个字符',
            term:'项',
            Selected:'已选择',
            SelectedData:'选定的数据',
            dataDuplication:'数据重复!',
            eliminate:'清除',
            loading: '数据正在加载，请稍后...',
            //以下代码在2个版本后会删除，请避免使用，如使用请修改，引用alert
            noEmpty: '不能为空',
            emailFormat: '请输入邮箱格式',
            confirmation: '二次确认提示',
            deleteConfirm: '确定删除此操作吗',
            deleteConfirmBatch: '确定批量删除选中项吗',
            openNewTab:'新标签',
            baseYong: '基础应用',
            myYong: '常用应用',
            preview:'预览',
            password: '修改密码',
            modify:'修改',
            PleaseSelectEquipmentNodeForAsset:'资产请选中设备节点!',
            weekOrManth: '开始周和结束周',
            latestWeek: '最近一周',
            latestOneMonth: '最近一个月',
            latestThreeMonth: '最近三个月',
            layoutSelect: '布局选择',
            myCollection: '我的收藏',
            topSelect: '顶栏风格选择',
            customTheme: '定制主题',
            classicTheme: '经典主题',
            blueTop: '蓝色顶栏',
            mainTop: '主色顶栏',
            darkMain: '暗色侧边栏',
            lightMain: '亮色侧边栏',
            darkPri: '深蓝顶栏',
            darkTop: '暗色顶栏',
            notice: '消息提醒',
            viewMore: '查看更多',
            btnSure: '确认',
            sureSuccess: '确认成功！',
            fabuTime: '发布时间',
            sun: '星期日',
            mon: '星期一',
            tue: '星期二',
            wed: '星期三',
            thur: '星期四',
            fri: '星期五',
            sat: '星期六'
        },
        form: {
            have: '有',
            nothing: '无',
            StartAndEndDate:'起止日期',
            StartAndEndMonth:'起止月份',
            StartingAndEndingTime:'起止时间',
            time:'时间',
            startTime:'开始时间',
            endTime:'结束时间',
            name: '姓名',
            groupName: '组名称',
            companyName: '公司名称',
            degree: '学位',
            email: '邮箱',
            gesch: '性别',
            age: '年龄',
            gbDat: '出生日期',
            mobile: '移动电话',
            open: '开',
            close: '关'
        },
        login: {
            title: '登录',
            remember: '自动登录',
            forgot: '忘记密码',
            submit: '登录',
            other: '其它登录方式',
            signup: '注册账户'
        },
        register: {
            title: '注册',
            submit: '注册',
            other: '使用已有账户登录'
        },
        exception: {
            e403: '抱歉，你无权访问该页面',
            e404: '抱歉，你访问的页面不存在',
            e500: '抱歉，服务器出错了',
            btn: '返回首页'
        },
        i18n: {
            content: '你好，很高兴认识你！'
        },
        alert:{
            noEmpty: '不能为空',
            emailFormat: '请输入邮箱格式',
            confirmation: '二次确认提示',
            deleteConfirm: '确定删除此操作吗',
            deleteConfirmBatch: '确定批量删除选中项此吗',
        },
        title: {
            home: '首页',

            user:'用户管理',
            position:'职位管理',
            group:'群组管理',
            role:'角色管理',
            menu:'菜单管理',
            organization:'机构管理',
            department:'部门管理',
            file:'文件管理',
            dict:'字典管理',
            fileSetting:'文件配置',
            smsSetting:'短信配置',
            emailSetting:'邮件配置',
            product:'产品管理',
            basicPlatform:'平台管理',
            systemCode:'系统编号',

            demo: '代码示例',
            shiftName: '班次',
            shift: '班次定义',
            template: '模板管理',
            setupe: '班次设置',
            calendar: '日历查看',

            count: '计数器',
            target: '班次目标管理',
            output: '班次产量分析',
            team:' 班组产量统计',
            pointRepair:'点修补生产统计',
            view: '综合查看',
            filing: '记录归档',
            BodyRetentionRecord:'车身滞留记录',
            bodyRetentionSettings:'车身滞留设置',
            stationActualBeat: '站点实际节拍',
            DwellTimeStatistics:'车身驻留时间统计',
            yield: '产量统计',
            skid: '滑撬统计',
            model: '车型定义',
            config: '配置定义',
            color: '颜色定义',
            dataDistribution: '车身数据下发',
            contrast :'车序对比',
            plan :'计划兑现率',
            queue: '车身队列',
            trace: '车身追踪',
            modelsTimeCompare: '车型停留时间对比分析',

            query: '过点记录',
            management: '车身数据管理',
            definition: '滑橇类型定义',
            administration: '滑橇管理',

            energy: '能耗', // 能耗
            overview: '介质消耗',
            overviewAnalysis: '总览分析',
            analysis: '能耗比重分析',
            month: '月产量能耗分析',
            week: '周产量能耗分析',
            rto: '日产量能耗分析',
            price: '价格模型',
            productionConsumption: '生产消耗成本',
            electricityPrice: '单位电价分析',
            pureWater: '纯水转化率分析',
            Energy: '能源变化点分析',

            orderManagement:'订单管理',
            order:'订单',
            task:'作业',

            defects: '缺陷定义', // 质量
            parts: '车身零件库',
            bodyParts: '车身零件管理',
            carCheck: '车身检测',
            carDefects: '车辆缺陷跟踪',
            integral: '化验参数记录',
            card: '积分卡配置及显示',
            process: '工艺参数管理',

            other: '其他应用', // 其他
            realtimeAlarm: '实时报警查看',
            historicalAlarm: '历史报警分析',
            noticeView: '提醒查看',
            messageTemplate: '消息模板',
            historicalTrend: '历史趋势分析',

            StopLineStatistics: '设备停线统计',
            CountChart: '点修补时长统计',

            productName: '生产管理',
            quality: '质量管理',
            resource: '资源管理',
            otherName: '其他应用',
            zutai: '组态入口',

            LogManagement:'操作日志',
            ErrorLog:'错误日志',

            deviceManagement:'设备管理',
            Computer:'计算机设置',

            DataTypeManage:'数据类型管理',
            DataSourceManage:' 数据源管理',

            commodityCar: '车在涂top时长统计', //涂装车辆涂top时长统计表
            production: '生产统计表',
            productionDaily: '生产日报',
            groupView: '班组综合查看',
            lineLoadRate:'产线负荷率',

            type:'类型',
            stopReason:'停止原因',
            content:'内容',
            alarm:'质量报警配置',
            RepairRime:'点修补时长统计',
            VehicleDefectStatistics:'车型缺陷统计',
            LineDefectStatistics: '线体缺陷统计',

            equipStart:'设备可动率',
            FunctionUsage: '功能使用统计',
            OperationStation: '操作站使用统计',
            topN: '报警TopN统计',
            player:'播放器',

            ProductionArrivalExpectation:'生产到车预期',
            vin: 'VIN',
            enterTheCoatingTime: '进入涂装时间',
            expectedTimeOfPretreatment: '前处理预期时间',
            actualTimeOfPretreatment: '前处理实际时间',
            expectedTimeOfPrimer:'底涂预期时间',
            actualTimeOfPrimer:'底涂实际时间',
            expectedFinishTime:'面漆预期时间',
            topcoatActualTime:'面漆实际时间',

            paramList:'参数清单',
            workShop:  '车间',
            linearBody: '线体',
            workingProcedure: '工序',
            equipment: '设备',
            parameter:'参数',
            value:'值',
            company:'单位',
            processEquipment:'工艺设备',
            conveyingEquipment:'输送设备',

            bodyPlan: '车身路径规划',
            filter: '过滤装置预测',
            robot: '机器人预测',
            inPaint: '进涂装计划',
            outPaint: '出涂装计划',
            standard: '标准能耗值',
            overviewEnergy: '节能总览',
            statistical: '节能统计',

            customAssets:'资产配置',
            productView: '生产日报',
            resourceView: '能源总览',
            qualityView: '质量总览',
            otherView: '设备总览',
            lineAct: '产线可动率',
            bodyStatistical: '车身滞留统计',

            WorkshopOverview:'车间总览'
        },
        layout: {
            msg1: '取消收藏 《',
            msg2: '收藏《',
            msg3: '》菜单成功！'
        },
        notice:{
            news:'消息',
            loadedAll: '加载完毕',
            loading: '加载中...',
            loadMore: '加载更多',
            clear: '清空',
            emptyText:'目前没有通知'
        },
        time: {
            hours: '小时',
            minutes: '分钟'
        },
        dateType:{
            lastWeek:'上周',
            LastWeek:'最近一周',
            ThisWeek:'本周',
            ThisMonth:'本月',
            LastMonth:'最近一月',
            LastThreeMonths:'最近三个月',
            NearlyHalfAYear:'近半年',
            NearlyAYear:'近一年',
        },
        bmsa: {
            edit: '编辑',
            delete: '删除',
            more: '更多',
            totalCheck: '总共选择',
            strip: '条',
            layout: '布局管理',
            update: '更新'
        },
        gantt:{
            moreOperation:'更多',
            list:'参照',
            left:'列表区域',
            default:'全部',
            right:'甘特图区域',
            units:'单位',
            unit:{
                day:'天',
                week:'周',
                month:'月',
                year:'年'
            },
            buttons:{
                expand:'展开',
                collapse:'折叠',
            }
        },
    },
    components: components.components,
    vxe: components.vxe
};
