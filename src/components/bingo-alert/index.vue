<template>
    <div>
        <bingo-modal :class-name="'bingo-alert-wrapper ' + className" :mask-closable="false" ref="alert" title="" :closable="false" :footer-hide="true" v-model="show" width="380" :show-close="false" v-if="type=='info'">
            <div class="ivu-result-info">
                <div v-if="isDelete" class="info"><!---->
                    <img class="back-m" src="@/assets/images/back1.png" alt="back1">
                    <img class="back" src="@/assets/images/delete2.png" alt="delete2">
                    <img class="del-back-icon" src="@/assets/images/delete1.png" alt="delete1">
                    <div class="info-title">
                        <p class="title" :style="content.length > 20 ? 'font-size: 16px' : ''" v-if="!isHtml">{{content}}</p>
                        <p class="title" :style="content.length > 20 ? 'font-size: 16px' : ''" v-else v-html="content"></p>
                    </div>
                </div>
                <div v-else class="info"><!---->
                    <img class="back-m" src="@/assets/images/back1.png" alt="back1">
                    <img class="back" src="@/assets/images/info2.png" alt="info2">
                    <img class="back-icon" src="@/assets/images/info1.png" alt="info1">
                    <div class="info-title">
                        <p class="title" :style="content.length > 20 ? 'font-size: 16px' : ''" v-if="!isHtml">{{content}}</p>
                        <p class="title" :style="content.length > 20 ? 'font-size: 16px' : ''" v-else v-html="content"></p>
                    </div>
                </div>
                <div class="buttons">
                    <button class="ok" :class="isDelete ? 'ivu-btn ivu-btn-error ivu-btn-circle' : 'ivu-btn ivu-btn-primary ivu-btn-circle'" @click="onOk">
                        <i class="ivu-load-loop ivu-icon ivu-icon-ios-loading" v-if="loading"></i>
                        <span class="name">{{okName}}</span>
                    </button>
                    <button :class="isDelete ? 'ivu-btn ivu-btn-error ivu-btn-circle ivu-btn-ghost del-canel' : 'ivu-btn ivu-btn-default ivu-btn-circle canel'" @click="onCancel">
                        <span class="name">{{canelName}}</span>
                    </button>
                </div>
            </div>
        </bingo-modal>
        <bingo-modal :class-name="'bingo-alert-wrapper ' + className" :mask-closable="false" ref="alert" title="" :closable="false" :footer-hide="true" v-model="show" :width="468" v-if="type=='error'">
            <div class="ivu-result-error">
                <div class="close">
                    <i class="ivu-icon ivu-icon-md-close" @click="onCancel"/>
                </div>
                <div class="error"><!---->
                    <img src="@/assets/images/back2.png" alt="back1">
                    <img class="back" src="@/assets/images/delete2.png" alt="delete2">
                    <img class="back-icon" src="@/assets/images/error1.png" alt="error1">
                    <div class="error-title">
                        <p class="title">{{title}}</p>
                        <p class="desc" v-if="!isHtml">{{content}}</p>
                        <p class="desc" v-else v-html="content"></p>
                    </div>
                </div>
                <div class="error-body" v-if="showBody">
                    <div>
                        <div>{{bodyTitle}}</div>
                        <div v-for="(item, key) in bodyList" :key="key">
                            <i class="ivu-icon ivu-icon-ios-close-circle-outline" style="color: rgb(237, 64, 20);"></i> {{item}}
                        </div>
                    </div>
                </div> <!---->
            </div>
        </bingo-modal>
        <bingo-modal :class-name="'bingo-alert-wrapper ' + className" :mask-closable="false" ref="alert" title="" :closable="false" :footer-hide="true" v-model="show" width="400" :show-close="false" v-if="type=='schedule'">
            <div class="ivu-result-schedule">
                <div class="info"><!---->
                    <img class="back-m" src="@/assets/images/back1.png" alt="back1">
                    <img class="back" src="@/assets/images/info2.png" alt="info2">
                    <img class="back-icon" src="@/assets/images/info3.png" alt="info1">
                    <div class="info-title">
                        <p class="title">{{title}}</p>
                        <p class="content" v-html="content"></p>
                    </div>
                </div>
                <div class="buttons">
                    <button class="ok" :class="isDelete ? 'ivu-btn ivu-btn-error ivu-btn-circle' : 'ivu-btn ivu-btn-primary ivu-btn-circle'" @click="onOk">
                        <i class="ivu-load-loop ivu-icon ivu-icon-ios-loading" v-if="loading"></i>
                        <span class="name">{{scheduleOkName}}</span>
                    </button>
                    <button v-if="scheduleCanelName" class="ivu-btn ivu-btn-default ivu-btn-circle canel" @click="onCancel">
                        <span class="name">{{scheduleCanelName}}</span>
                    </button>
                </div>
            </div>
        </bingo-modal>
    </div>
</template>
<script>
    import bingoModal from '@/components/bingo-modal';
    export default {
        name: 'bing-alert',
        props: {
        },
        data () {
            return {
                title:'',
                type: '',
                content:'',
                loading: false,
                isDelete: false,
                show: false, // 是否显示弹窗
                hideTime: false, //显示计数器
                showBody: true,
                bodyTitle: '',
                className: '',
                bodyList: [],
                canelName: $t('page.common.cancel'),
                okName: $t('page.common.sure'),
                buttonName: [$t('page.common.cancel'), $t('page.common.sure')],
                scheduleOkName: '',
                scheduleCanelName: '',
                timer: null,
                isHtml: false,
            }
        },
        computed: {
        },
        watch: {
        },
        components: {
            bingoModal
        },
        created () {
            if (this.buttonName.length > 0) {
                this.canelName = this.buttonName[0]
                this.okName = this.buttonName[1]
                this.scheduleOkName = this.buttonName[0]
                this.scheduleCanelName = this.buttonName[1]
            }
        },
        mounted () {
        },
        methods: {
            handleEnd(){
                this.onOk();
            },
            onCancel(){
                this.$parent.cancel()
            },
            onOk(){ // ok事件
                this.$parent.ok()
            }
        }
    }
</script>
<style lang="less">
</style>
