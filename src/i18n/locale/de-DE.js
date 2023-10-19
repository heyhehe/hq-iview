import system from './system/de-DE';
import bmsa from './bmsa/de-DE';
import components from './components/de-DE';
import bingoUpload from './bingo-document/de-DE'

export default {
    locale: 'de-DE',
    language: 'German',
    menu: {
        i18n: 'Internationalization'
    },
    system: system,
    bmsa: bmsa,
    bingoUpload,
    page: {
        common: {
            SystemName:'Anwendungsplattform für Beschichtung',
            index:'Nr.',
            layout: 'Layout',
            import: 'Import',
            export: 'Export',
            search: 'Search',
            popupquery:'Abfrage der Ebene öffnen',
            reset: 'Reset',
            form: 'Form',
            edit: 'Edit',
            delete: 'Delete',
            refresh: 'Refresh',
            more:'Mehr',
            fullScreen:'Voller Bildschirm',
            reduction:'Reduzierung',
            man: 'Man',
            woman: 'Woman',
            add: 'Add',
            new: 'New',
            save:'Save',
            see:'siehe',
            cancel:'Stornieren',
            sure: 'Könnten?',
            approval: 'Approval',
            action: 'Action',
            download: 'Download',
            print:'Drucken',
            PleaseSelect:'Bitte wählen',
            PleaseEnter:'Bitte geben Sie ein',
            noData:'Keine Daten verfügbar',
            noCheck:'Prüfung fehlgeschlagen!',
            success:'Speichern erfolgreich!',
            PleaseConfirm:'Bitte bestätigen',
            isDelete:'Sind Sie sicher, dass Sie löschen möchten?',
            isSure:'Ob wir uns das merken?',
            isSures:'Ob man die mengenbestätigung bestätigen kann?',
            isDeletes:'Sind Sie sicher, dass Sie im Stapel löschen möchten?',
            delSuccess:'Löschen erfolgreich!',
            ExportSuccess:'Export erfolgreich!',
            CopySucceeded:'Copy succeeded!',
            PleaseSelectTheDataToDelete:'Wählen Sie die zu bedienenden Daten!',
            max500:'Nicht mehr als 500 Zeichen',
            term:'Begriff',
            Selected:'Ausgewählte',
            SelectedData:'Ausgewählte Daten',
            dataDuplication:'Vervielfältigung von Daten!',
            eliminate:'Eliminieren',
            //以下代码在2个版本后会删除，请避免使用，如使用请修改，引用alert
            noEmpty: 'Can not be empty',
            emailFormat: 'Please enter email format',
            confirmation: 'Second confirmation prompt',
            deleteConfirm: 'Are you sure to delete this operation',
            deleteConfirmBatch: 'Confirm to delete the selected items in batch',
            baseYong: 'Grundlagen.',
            myYong: 'Üble anwenden.',
            preview:'Vorschau',
            password: 'Codes ändern.',
            modify:'ändern',
            PleaseSelectEquipmentNodeForAsset:'Bitte wählen Sie den Geräteknoten für den Vermögenswert!',
            weekOrManth: 'Fang die woche an und ende der woche',
            latestWeek: 'Das war die letzte woche.',
            latestOneMonth: 'Der letzte monat',
            latestThreeMonth: 'Die letzten drei monate,',
            layoutSelect: 'Das layout aussuchen.',
            myCollection: 'Für mich.',
            topSelect: 'Top-down-stil stil gewählt',
            customTheme: 'Ein maßgeschneidertes thema.',
            classicTheme: 'Ein klassiker.',
            blueTop: 'Blaues dach!',
            mainTop: 'Hauptfarbendach',
            darkMain: 'Der dunklere seitenrahmen',
            lightMain: 'Helligkeit im navigationsbereich',
            darkPri: 'Dunkelblaues dach',
            darkTop: 'Der dunkle türrahmen',
            notice: 'Nachricht hier.',
            viewMore: 'Ich will mehr sehen.',
            btnSure: 'Abschuss bestätigen.',
            sureSuccess: 'Bestätige erfolg.！',
            fabuTime: 'Zeit, bitte.',
            sun: 'Sun.',
            mon: 'Mon.',
            tue: 'Tue.',
            wed: 'Wed.',
            thur: 'Thur.',
            fri: 'Fri.',
            sat: 'Sat.'
        },
        form: {
            have: 'Haben',
            nothing: 'Ohne',
            StartAndEndDate:'Datum des Beginns und Ends',
            StartAndEndMonth:'Die monate',
            StartingAndEndingTime:'Start- und Endzeit',
            time:'Zeit',
            startTime: 'StartTime',
            endTime: 'EndTime',
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
        alert: {
            noEmpty: 'Can not be empty',
            emailFormat: 'Please enter email format',
            confirmation: 'Second confirmation prompt',
            deleteConfirm: 'Are you sure to delete this operation',
            deleteConfirmBatch: 'Confirm to delete the selected items in batch',
        },
        title: {
            home: 'Die titelseite.',

            user:'Verwaltung der Benutzer',
            position:'Management von Positionen',
            group:'Management der Gruppe',
            role:'Das Rollenmanagement',
            menu:'Verwaltung des Menüs',
            organization:'organisatorisches Management',
            department:'Leitung der Abteilung',
            file:'Verwaltung von Dateien',
            dict:'Verwaltung des Wörterbuchs',
            fileSetting:'Konfiguration der Datei',
            smsSetting:'Konfiguration der SMS',
            emailSetting:'Konfiguration der Mail',
            product:'Product Management',
            basicPlatform:'Management der Plattform',
            systemCode:'Nummer des Systems',

            demo: 'Demo', // 班次
            shiftName: 'So was.',
            shift: 'Definition',
            template: 'Die vorlage',
            setupe: 'Und einstellung.',
            calendar: 'Kalender.',

            count: 'Das ist ein zähler.',  // 计数器
            target: 'Colonel wong.',
            output: 'So eine nummer.',
            team:'Statistik Teamleistung',
            pointRepair:'Point Repair Produktion',
            view: 'Umfassende Ansicht',
            filing: 'Notiert.',
            BodyRetentionRecord:'Aufzeichnung Körperspeicherung',
            bodyRetentionSettings:'Einstellungen für die Körperspeicherung',
            stationActualBeat: 'Tatsächlicher Takt',
            DwellTimeStatistics:'Statistik Verweilzeit',
            yield: 'Statistik Produktion',
            skid: 'Statistiken Skipisten',
            model: 'Definition Fahrzeugtyps',
            config: 'Definition Konfiguration',
            color: 'Definition Farbe',
            dataDistribution: 'Verteilung Körperdaten',
            contrast :'Vergleich  Fahrzeugfolge',
            plan :'Laufzeit des Plans',
            queue: 'Eine brandmarke.',
            trace: 'Suche die karosserie.',
            modelsTimeCompare: 'Die dauer des kontakts wird überprüft',

            query: 'Eintrag übergeben',  // avi
            management: 'Daten Körpers',
            definition: 'Art schlitten',
            administration: 'Fackler management',

            energy: 'Energie schaden.', // 能耗
            overview: 'Der totale aufwand.',
            overviewAnalysis: 'Analyse im Überblick',
            analysis: 'Als anteil.',
            month: 'Monat Ertrag Analyse',
            week: 'Woche Ertrag Analyse',
            rto: 'Vom produktion.',
            price: 'Ein preismodell?',
            productionConsumption: 'Konsumkosten Produktion',
            electricityPrice: 'Preis je Einheit',
            pureWater: 'Umwandlung von reinem Wasser',
            Energy: 'Energie veränderungspunkt',

            orderManagement:'Management von Bestellungen',
            order:'Bestellung',
            task:'Aufgabe',

            defects: 'Defekt.', // 质量
            parts: 'Bibliothek für Körperteile',
            bodyParts: 'Die karosserie.',
            carCheck: 'Kontrolle der Stelle',
            carDefects: 'Mängel Fahrzeugs',
            integral: 'Analyse und analyse.',
            card: 'Karte karte.',
            process: 'Technisches manage',

            other: 'Other', // 其他
            realtimeAlarm: 'Alarm in echtzeit.',
            historicalAlarm: 'Geschichte der polizei',
            noticeView: 'Nur eine erinnerung.',
            messageTemplate: 'Neues modell.',
            historicalTrend: 'Eine trendanalyse.',

            StopLineStatistics: 'Abschaltung der Anlage',
            CountChart: 'Statistik der Punktreparatur',

            productName: 'Produktion',
            quality: 'Qualität.',
            resource: 'Ressourcen.',
            otherName: 'Andere anwendungen.',
            zutai: 'Eingang in die gruppe.',

            LogManagement:'Logbuch Operation',
            ErrorLog:'Logbuch Fehler',

            deviceManagement:'Geräten Manage',
            Computer:'Einstell Computers',

            DataTypeManage:'Verwaltung Datentyps',
            DataSourceManage:' Verwaltung Datentyps',

            commodityCar: 'Fahrzeuge in Malerei',
            production: 'Statistik der Produktion',
            productionDaily: 'Bericht der Produktion',
            groupView: 'Klassencrew kontrolliert.',
            lineLoadRate:'Takt Linienlast',

            type:'Typ',
            stopReason:'Stoppen Sie die Vernunft',
            content:'Inhalt',
            alarm:'Qualitative Alarmkonfiguration',
            RepairRime:'Zeit der Reparatur',
            VehicleDefectStatistics:'Statistiken über Fahrzeugfehler',
            LineDefectStatistics: 'Statistik von Streckenfehlern',

            equipStart:'Mobilität der Ausrüstung',
            FunctionUsage: 'Funktional okay.',
            OperationStation: 'Operation "go", bitte',
            topN: 'Statistiken über Erinnerungen',
            player:'Spieler',

            ProductionArrivalExpectation:'Erwartungshaltung der Produktion',
            vin: 'vin',
            enterTheCoatingTime: 'Geben Sie die Beschichtungszeit ein',
            expectedTimeOfPretreatment: 'voraussichtliche Zeit der Vorbehandlung',
            actualTimeOfPretreatment: 'tatsächliche Zeit der Vorbehandlung',
            expectedTimeOfPrimer:'erwartete Zeit des Primers',
            actualTimeOfPrimer:'tatsächliche Zeit des Primers',
            expectedFinishTime:'voraussichtliche Endzeit',
            topcoatActualTime:'Tatsächliche Zeit des Topcoats',

            paramList:'Liste der Parameter',
            workShop:  'Werkstatt',
            linearBody: 'Lineare Karosserie',
            workingProcedure: 'Arbeitsweise der',
            equipment: 'Ausrüstung',
            parameter:'Parameter',
            value:'Wert',
            company:'Unternehmen',
            processEquipment:'Prozesstechnik und -technik',
            conveyingEquipment:'Ausrüstung für Förderer',

            bodyPlan: 'Zugang zu den lastern.',
            filter: 'Filtergeräte schauten voraus',
            robot: 'Roboter voraussagen',
            inPaint: 'Ein werbeplan. - alles klar',
            outPaint: 'Ein male-up',
            standard: 'Normen für den energieverbrauch',
            overviewEnergy: 'Weltweite ansicht über die energieeinsparung',
            statistical: 'Energiesparende statistik',

            customAssets:'Zuweisung von Vermögenswerten',
            productView: 'Gesamtausstellung der produktion',
            resourceView: 'Kampagne des energieverbrauchs',
            qualityView: 'Qualität für das hauptangebot',
            otherView: 'Auktion der instrumente',
            lineAct: 'Der durchlauf der strecke',
            bodyStatistical: 'Stalken Von motoren.',

            WorkshopOverview:'Übersicht der Workshops'
        },
        layout: {
            msg1: 'Zieh die sammlung aus. 《',
            msg2: 'Sammle sie.《',
            msg3: '》speisekarte erfolgreich.！'
        },
        notice:{
            news:'News',
            loadedAll: 'Laden abgeschlossen',
            loading: 'Laden...',
            loadMore: 'Laden Sie mehr',
            clear: 'Leer',
            emptyText:'Keine Mitteilung'
        },
        time: {
            hours: 'Hours',
            minutes: 'Minute'
        },
        dateType:{
            lastWeek:'Letzte Woche',
            LastWeek:'Letzte Woche',
            ThisWeek:'Diese Woche',
            ThisMonth:'Diesen Monat',
            LastMonth:'Letzter Monat',
            LastThreeMonths:'Drei Monate',
            NearlyHalfAYear:'Ein halbes Jahr',
            NearlyAYear:'Ein Jahr',
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
