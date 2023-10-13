<template>
    <div class="bmsa-page-wrapper">
        <div class="page-con">
            <ul>
                <li class="page-left">
                    <Dropdown trigger="click" transfer transfer-class-name="toolbar-btn-filter" @on-click="handlePageSize">
                        <span>{{pageSetting.pageSize}}</span>
                        <Icon type="ios-arrow-down" />
                        <template #list>
                            <DropdownMenu>
                                <DropdownItem v-for="item in (pageSetting.pageSizes || pageSizes)" :key="item" :name="item">{{item}}</DropdownItem>
                            </DropdownMenu>
                        </template>
                    </Dropdown>
                </li>
                <li class="page-prev" @click="handlePageChange('prev')">
                    <span class="prev-con">
                        <i class="iconfont icon-xiangyou" :class="{'icon-disable':curFirstItem==1}" />
                    </span>
                </li>
                <li class="page-center">
                    <span class="center-con">{{curFirstItem}} - {{curLastItem}} / {{pageSetting.total}}</span>
                </li>
                <li class="page-next" @click="handlePageChange('next')">
                    <span class="prev-con">
                        <i class="iconfont icon-xiangzuo" :class="{'icon-disable':curLastItem==pageSetting.total}" />
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'bmsa-page',
        props:{
            pageSetting: { // 分页格式定制
                type: Object,
                default() {
                    return {
                        currentPage: 1,
                        pageSize: 20,
                        total: 2000,
                    }
                },
            },
        },
        data() {
            return {
                pageSizes:[10, 25, 50, 75, 100],
                curFirstItem:1,
            };
        },
        computed:{
            curLastItem(){
                let lastItem = Number(this.curFirstItem) + Number(this.pageSetting.pageSize) - 1
                if(lastItem > Number(this.pageSetting.total)){
                    lastItem = this.pageSetting.total
                }
                return lastItem
            },
        },
        watch: {
            'pageSetting.currentPage': {
                handler (val) {
                    if (val == 1) {
                        this.curFirstItem = 1
                    }
                },
                deep: true
            },
        },
        methods: {
            // 条数切换
            handlePageSize(value){
                this.curFirstItem = 1
                this.pageSetting.pageSize = value
                this.$emit('page-change', {type:'size', currentPage:1, pageSize:this.pageSetting.pageSize})
            },
            // 分页切换
            handlePageChange(type){
                if(type === 'prev'){
                    if(this.curFirstItem==1) return;
                    this.curFirstItem = Number(this.curFirstItem) - Number(this.pageSetting.pageSize);
                }else if(type === 'next'){
                    if(this.curLastItem==this.pageSetting.total) return;
                    this.curFirstItem = Number(this.curLastItem) + 1;
                }
                this.pageSetting.currentPage = ((Number(this.curFirstItem) - 1)/Number(this.pageSetting.pageSize) || 0) + 1
                this.$emit('page-change', {type:'current', currentPage:this.pageSetting.currentPage, pageSize:this.pageSetting.pageSize})
            }
        },
    };
</script>
<style lang="less" scoped>
    .bmsa-page-wrapper{
        .page-con{
            height:32px;
            line-height: 32px;
            background:#EAEFF7;
            width:300px;
            border-radius: 16px;
            box-shadow: 3px 3px 4px 0 rgba(0,0,0,0.09) inset;
            ul{
                display: flex;
                justify-content: space-between;
                padding:0 4px;
                height:100%;
                li{
                    &.page-left{
                        font-size:15px;
                        /deep/ .ivu-dropdown{
                            .ivu-dropdown-rel{
                                width:62px;
                                background-image: linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.7));
                                height:24px;
                                line-height: 24px;
                                border-radius: 12px;
                                padding:0 8px;
                                display: flex;
                                justify-content: space-between;
                                i{
                                    font-size:18px;
                                    margin-top:3px;
                                }
                            }
                        }
                    }
                    &.page-center{
                        text-align: center;
                        font-size:15px;
                        .center-con{
                            width:170px;
                            background-image: linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.7));
                            height:24px;
                            line-height: 24px;
                            border-radius: 12px;
                            display: inline-block;
                            padding: 0 8px;
                        }
                    }
                    .prev-con{
                        width:24px;
                        height:24px;
                        line-height: 24px;
                        border-radius: 24px;
                        margin-top:4px;
                        background-image: linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.7));
                        box-shadow: 4px 3px 5px 0 rgba(0,0,0,0.13);
                        display: inline-block;
                        text-align: center;
                        cursor: pointer;
                        i{
                            font-size:12px;
                            color:#5289FF;
                            &.icon-disable{
                                color:rgba(82, 137, 255,0.25)
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<style lang="less">
    .ivu-select-dropdown  {
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    }
</style>
