// import bmsaDropGrid from './bmsa-drop-grid'
// import bmsaOrgTree from './bmsa-org-tree'
// import bmsaShearImage from './bmsa-shear-image'
// import bmsaActionDrop from './bmsa-action-drop'
// import bmsaDivide from './bmsa-divide'
// import bmsaModalSelect from './bmsa-modal-select'
// import bmsaInputPart from './bmsa-input-part'
// import bmsaRibbon from './bmsa-ribbon'
// import bmsaPep from './bmsa-pep'
// import bmsaFilter from './bmsa-filter'
// import bmsaMoreBtns from './bmsa-more-btns'
// import bmsaQuill from './bmsa-quill'
// import bmsaTabsNew from './bmsa-tabs-new'
// import bmsaRobot from './bmsa-robot-v2' // v2为演示版本
// import bmsaStep from './bmsa-step'
// import bmsaMenu from './bmsa-menu'
// import bmsaExcelWeb from './bmsa-excel-web'
//
import bingoForm from './bingo-form'
import bingoFormItem from './bingo-form-item'
import bingoGridItem from './bingo-grid-item'
// import bingoShrinkCard from './bingo-shrink-card'
// import bingoToolbar from './bingo-toolbar'
// import bingoQuery from './bingo-query'
import bingoModal from './bingo-modal'
// import bingoModalEdit from './bingo-modal-edit'
// import bingoHeadPhoto from './bingo-head-photo'
// import bingoSuperFlow from './bingo-super-flow'
// import bingoSelectIcon from './bingo-select-icon'
import bingoTree from './bingo-tree'
// import bingoSelect from './bingo-select'
// import bingoCreateInfo from './bingo-create-info'
// import bingoState from './bingo-state'
import bingoMessage from './bingo-message'
import bingoAlert from './bingo-alert'
// import bingoPart from './bingo-part'
// import bingoQuill from './bingo-quill'
// import bingoDateWeek from './bingo-date-week/index.vue'
// import bingoDatePicker from './bingo-date-picker/index.vue'
// import bingoCalendar from './bingo-calendar'
// import bingoCalendarJane from './bingo-calendar-jane'
// import bingoDragList from './bingo-drag-list'
// import bingoTable from './bingo-table'
import bingoVxeTable from './bingo-vxe-table'
// import bingoLayout from './bingo-layout'
// import bingoActionDrop from './bingo-action-drop'
import bingoToolbarNew from './bingo-toolbar-new'
// import bingoRun from './bingo-run'
// import bingoScroll from './bingo-scroll'
// import bmsaShrinkCard from './bmsa-shrink-card'
// import bmsaBillNew from './bmsa-bill-new'
import bmsaModal from './bmsa-modal'
// import bmsaDocument from './bmsa-document'
// import bmsaTag from './bmsa-tag'
// import bingoFileUpload from './bingo-file-upload'
// import bmsaToolbar from './bmsa-toolbar'
// import bmsaDateWeek from './bmsa-date-week'
// import bmsaCropTool from './bmsa-crop-tool'
// import bmsaRelationGraph from './bmsa-relation-graph'
// import bmsaInput from './bmsa-input'
// import bingoCalendarOver from './bingo-calendar-over'
// import bmsaTabs from './bmsa-tabs'
import bmsaPage from './bmsa-page'
// import bmsaListScroll from './bmsa-list-scroll'
// import bmsaSlider from './bmsa-slider'
// import bmsaCompoundQuery from './bmsa-compound-query'
// import bmsaGantt from './bmsa-gantt'
// import bmsaMettingForm from './bmsa-metting-form'
// import bmsaImageViewer from './bmsa-image-viewer'
// import bmsaFlowViewer from './bmsa-flow-viewer'
// import bmsaFlowLog from './bmsa-flow-log'
// import bmsaFullCalendar from './bmsa-full-calendar'
// import bmsaEmpty from './bmsa-empty'
const components = {
    // bmsaDropGrid,
    // bmsaOrgTree,
    // bmsaShearImage,
    // bmsaActionDrop,
    // bmsaDivide,
    // bmsaModalSelect,
    // bmsaInputPart,
    // bmsaRibbon,
    // bmsaPep,
    // bmsaFilter,
    // bmsaInput,
    // bmsaMoreBtns,
    // bmsaRobot,
    // bmsaStep,
    // bmsaMenu,
    // bmsaExcelWeb,
    // bmsaListScroll,
    // bmsaSlider,
    //
    bingoForm,
    bingoFormItem,
    bingoGridItem,
    // bingoShrinkCard,
    // bingoToolbar,
    // bingoQuery,
    bingoModal,
    // bingoModalEdit,
    // bingoHeadPhoto,
    // bingoSuperFlow,
    // bingoSelectIcon,
    bingoTree,
    // bingoSelect,
    // bingoCreateInfo,
    // bingoState,
    bingoMessage,
    bingoAlert,
    // bingoPart,
    // bingoQuill,
    // bingoDateWeek,
    // bingoDatePicker,
    // bingoCalendar,
    // bingoCalendarJane,
    // bingoDragList,
    // bingoTable,
    bingoVxeTable,
    // bingoLayout,
    // bingoActionDrop,
    bingoToolbarNew,
    // bingoRun,
    // bingoScroll,
    // bmsaShrinkCard,
    // bmsaBillNew,
    bmsaModal,
    // bmsaDocument,
    // bmsaTag,
    // bingoFileUpload,
    // bmsaToolbar,
    // bmsaDateWeek,
    // bmsaCropTool,
    // bmsaRelationGraph,
    // bingoCalendarOver,
    // bmsaTabs,
    // bmsaQuill,
    // bmsaTabsNew,
    bmsaPage,
    // bmsaCompoundQuery,
    // bmsaGantt,
    // bmsaMettingForm,
    // bmsaImageViewer,
    // bmsaFlowViewer,
    // bmsaFlowLog,
    // bmsaFullCalendar,
    // bmsaEmpty
}
const install = (Vue) => {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key])
    })
    Vue.prototype.$BAlert = bingoAlert
    Vue.prototype.$BMessage = bingoMessage
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default install
