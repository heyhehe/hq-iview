import system from './system/en-US';
import bmsa from './system/en-US';
import components from './components/en-US';
import bingoUpload from './bingo-document/en-US'

export default {
    locale: 'en-US',
    language: 'English',
    menu: {
        i18n: 'Internationalization'
    },
    system: system,
    bmsa: bmsa,
    bingoUpload,
    page: {
        common:{
            SystemName:'Painting central control system',
            index:'Nr.',
            layout: 'Layout',
            import: 'Import',
            export: 'Export',
            search: 'Search',
            popupquery:'Pop up query',
            reset:'Reset',
            form:'Form',
            edit: 'Edit',
            delete: 'Delete',
            refresh: 'Refresh',
            more:'More',
            fullScreen:'Full screen',
            reduction:'Reduction',
            man:'Man',
            woman:'Woman',
            add: 'Add',
            new:'New',
            save:'Save',
            see:'See',
            cancel:'Cancel',
            sure: 'Determine',
            approval:'Approval',
            action: 'Action',
            download: 'Download',
            print:'Print',
            PleaseSelect:'Please select',
            PleaseEnter:'Please enter',
            noData:'No data available',
            noCheck:'Verification failed!',
            success:'Saved successfully!',
            PleaseConfirm:'Please confirm',
            isDelete:'Are you sure you want to delete?',
            isSure:'Confirm this reminder?',
            isSures:'Whether to confirm the batch confirmation?',
            isDeletes:'Are you sure you want to delete in batch?',
            delSuccess:'Deletion succeeded!',
            ExportSuccess:'Export succeeded!',
            CopySucceeded:'Copy succeeded!',
            PleaseSelectTheDataToDelete:'Select the data to operate on!',
            max500:'No more than 500 characters',
            term:'Term',
            Selected:'Selected',
            SelectedData:'Selected data',
            dataDuplication:'Data duplication!',
            eliminate:'Eliminate',
            //以下代码在2个版本后会删除，请避免使用，如使用请修改，引用alert
            noEmpty: 'Can not be empty',
            emailFormat: 'Please enter email format',
            confirmation: 'Second confirmation prompt',
            deleteConfirm: 'Are you sure to delete this operation',
            deleteConfirmBatch: 'Confirm to delete the selected items in batch',
            baseYong: 'Base application',
            myYong: 'Common application',
            preview:'Preview',
            password: 'Change password',
            modify:'Modify',
            PleaseSelectEquipmentNodeForAsset:'Please select equipment node for asset!',
            weekOrManth: 'Start week and end week',
            latestWeek: 'In the latest week',
            latestOneMonth: 'Last month',
            latestThreeMonth: 'Last three months',
            layoutSelect: 'Layout options',
            myCollection: 'My collection',
            topSelect: 'Top bar style selection',
            customTheme: 'Custom theme',
            classicTheme: 'Classic theme',
            blueTop: 'Blue top bar',
            mainTop: 'The main color bar',
            darkMain: 'Dark sidebar',
            lightMain: 'Bright sidebar',
            darkPri: 'Deep blue top bar',
            darkTop: 'Dark top bar',
            notice: 'Message to remind',
            viewMore: 'To view more',
            btnSure: 'Confirm',
            sureSuccess: 'Identify successful！',
            fabuTime: 'Time',
            sun: 'Sun.',
            mon: 'Mon.',
            tue: 'Tue.',
            wed: 'Wed.',
            thur: 'Thur.',
            fri: 'Fri.',
            sat: 'Sat.'
        },
        form: {
            have: 'Have',
            nothing: 'Nothing',
            StartAndEndDate:'Start and end date',
            StartAndEndMonth:'In start-stop',
            StartingAndEndingTime:'Starting and ending time',
            time:'Time',
            startTime:'StartTime',
            endTime:'EndTime',
            name: 'Name',
            groupName: 'GroupName',
            companyName: 'CompanyName',
            degree: 'Degree',
            email: 'Email',
            gesch: 'Gesch',
            age: 'Age',
            gbDat: 'GbDat',
            mobile: 'Mobile',
            open: 'on',
            close: 'off'
        },
        login: {
            title: 'Login',
            remember: 'Remember me',
            forgot: 'Forgot your password?',
            submit: 'Login',
            other: 'Sign in with',
            signup: 'Sign up'
        },
        register: {
            title: 'Register',
            submit: 'Register',
            other: 'Already have an account?'
        },
        exception: {
            e403: 'Sorry, you don\'t have access to this page.',
            e404: 'Sorry, the page you visited does not exist.',
            e500: 'Sorry, the server is reporting an error.',
            btn: 'Back to home'
        },
        i18n: {
            content: 'Hello, nice to meet you!'
        },
        alert:{
            noEmpty: 'Can not be empty',
            emailFormat: 'Please enter email format',
            confirmation: 'Second confirmation prompt',
            deleteConfirm: 'Are you sure to delete this operation',
            deleteConfirmBatch: 'Confirm to delete the selected items in batch',
        },
        title: {
            home: 'Home',

            user:'User manage',
            position:'Position manage',
            group:'group manage',
            role:'Role manage',
            menu:'Menu manage',
            organization:'Organizational manage',
            department:'Department manage',
            file:'File manage',
            dict:'Dictionary manage',
            fileSetting:'File configuration',
            smsSetting:'SMS configuration',
            emailSetting:'Mail configuration',
            product:'Product manage',
            basicPlatform:'Platform manage',
            systemCode:'System number',

            demo: 'Demo',
            shiftName: 'Shift',
            shift: 'Shifts define',
            template: 'Template',
            setupe: 'Shifts setting',
            calendar: 'Calendar view',

            count: 'Counter',
            target: 'Shift target',
            output: 'Shift output',
            team:'Team output statistics',
            pointRepair:'Point repair production',
            view: 'Comprehensive view',
            filing: 'Record filing',
            BodyRetentionRecord:'Body retention record',
            bodyRetentionSettings:'Body retention settings',
            stationActualBeat: 'Station actual beat',
            DwellTimeStatistics:'Body dwell time statistics',
            yield: 'Output statistics',
            skid: 'Skid statistics',
            model: 'Vehicle type definition',
            config: 'Configuration definition',
            color: 'Color definition',
            dataDistribution: 'Body data distribution',
            contrast :'Comparison vehicle sequence',
            plan :'Plan fulfillment rate',
            queue: 'Vehicle queue',
            trace: 'Vehicle tracking',
            modelsTimeCompare: 'Comparison and analysis of vehicle residence time',

            query: 'Passing record',
            manage: 'Data manage',
            definition: 'Skid type',
            administration: 'Skid manage',

            energy: 'Energy loss', // 能耗
            overview: 'Medium consumption',
            overviewAnalysis: 'Overview analysis',
            analysis: 'Proportio',
            month: 'Monthly output',
            week: 'Weekly output',
            rto: 'Day output',
            price: 'Price model',
            productionConsumption: 'Production consumption',
            electricityPrice: 'Unit electricity price',
            pureWater: 'Pure water conversion',
            Energy: 'Energy change point',

            ordermanage:'Order manage',
            order:'Order',
            task:'Task',

            defects: 'Defect definition', // 质量
            parts: 'Body parts library',
            bodyParts: 'Body parts',
            carCheck: 'Body inspection',
            carDefects: 'Ja, eine fehlermeldung.',
            integral: 'Test parameter record',
            card: 'Integral card',
            process: 'Process manage',

            other: 'Other', // 其他
            realtimeAlarm: 'Alarm view',
            historicalAlarm: 'Historical alarm',
            noticeView: 'Remind to check the',
            messageTemplate: 'Message template',
            historicalTrend: 'Historical trend analysis',

            StopLineStatistics: 'Equipment shutdown',
            CountChart: 'Point repair time statistics',

            productName: 'Product',
            quality: 'Quality',
            resource: 'Resource',
            otherName: 'Other applications',
            zutai: 'Configuration entry',

            LogManagement:'Operation log',
            ErrorLog:'Error log',

            deviceManagement:'Device manage',
            Computer:'Computer Settings',

            DataTypeManage:'Data type manage',
            DataSourceManage:' Data source manage',

            commodityCar: 'Vehicles in painting',
            production: 'Production statistics',
            productionDaily: 'Production daily report',
            groupView: 'Group view',
            lineLoadRate:'Line load rate',

            type:'Type',
            stopReason:'Stop Reason',
            content:'Content',
            alarm: 'Quality alarm configuration',
            RepairRime:'Repair rime',
            VehicleDefectStatistics:'Vehicle defect statistics',
            LineDefectStatistics: 'Line defect statistics',

            equipStart:'Equipment mobility',
            FunctionUsage: 'Function usage',
            OperationStation: 'Operation station usage',
            topN: 'Alarm topn statistics',
            player:'Player',

            ProductionArrivalExpectation:'Production arrival expectation',
            vin: 'vin',
            enterTheCoatingTime: 'enter The Coating Time',
            expectedTimeOfPretreatment: 'expected Time Of Pretreatment',
            actualTimeOfPretreatment: 'actual Time Of Pretreatment',
            expectedTimeOfPrimer:'expected TimeOf Primer',
            actualTimeOfPrimer:'actual Time Of Primer',
            expectedFinishTime:'expected Finish Time',
            topcoatActualTime:'topcoat Actual Time',

            paramList:'Parameter list',
            workShop:  'workshop',
            linearBody: 'Linear body',
            workingProcedure: 'working procedure',
            equipment: 'equipment',
            parameter:'parameter',
            value:'value',
            company:'Company',
            processEquipment:'process equipment',
            conveyingEquipment:'Conveying equipment',

            bodyPlan: 'Body path planning',
            filter: 'Filter plant prediction',
            robot: 'Robot prediction',
            inPaint: 'Into the painting plan',
            outPaint: 'Out of the painting plan',
            standard: 'Standard energy consumption',
            overviewEnergy: 'Energy conservation and the overview',
            statistical: 'Energy conservation statistics',

            customAssets:'Asset allocation',
            productView: 'Production overview',
            resourceView: 'Energy overview',
            qualityView: 'Quality overview',
            otherView: 'Equipment overview',
            lineAct: 'Line mobility',
            bodyStatistical: 'Body Retention Statistics',

            WorkshopOverview:'Workshop overview'
        },
        layout: {
            msg1: 'Cancel the collection 《',
            msg2: 'Collection《',
            msg3: '》menu success！'
        },
        notice:{
            news:'news',
            loadedAll: 'Loading complete',
            loading: 'Loading...',
            loadMore: 'Load more',
            clear: 'Empty',
            emptyText:'No notice'
        },
        time: {
            hours: 'Hours',
            minutes: 'Minute'
        },
        dateType:{
            lastWeek:'Last week',
            LastWeek:'Last week',
            ThisWeek:'This week',
            ThisMonth:'This month',
            LastMonth:'Last month',
            LastThreeMonths:'Three months',
            NearlyHalfAYear:'Half a year',
            NearlyAYear:'A year',
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
