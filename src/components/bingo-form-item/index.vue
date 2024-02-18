<template>
    <FormItem v-bind="$attrs" v-on="$listeners" :class="tooltip?'has-tooltip':''">
        <template slot="label">
            <Tooltip v-if="tooltip" :content="label" transfer>
                {{ label }}
            </Tooltip>
            <template v-else>{{ label }}</template>
        </template>
        <slot></slot>
    </FormItem>
</template>
<script>
    export default {
        name: 'bingo-form-item',
        props: {
            label: { // 表单域标签文本
                type: String,
                default: ''
            },
            tooltip: { // 标签是否加tooltip
                type: Boolean,
                default: false
            }
        }
    }
</script>
<style lang="less">
.ivu-form{
    .ivu-form-item{
        .ivu-form-item-label{
            .ivu-tooltip{
                width: ~"calc(100% - 12px)";
                .ivu-tooltip-rel {
                    height: 16px;
                    line-height: 16px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 100%;
                    &:after {
                        content: '';
                    }
                }
            }
        }
    }
    .ivu-form-item-required.has-tooltip .ivu-form-item-label{
        &:before {
            content: '';
        }
        .ivu-tooltip{
            .ivu-tooltip-rel {
                &:before{
                    content: '*';
                    display: inline-block;
                    margin-right: 0;
                    line-height: 1;
                    font-family: SimSun;
                    font-size: 14px;
                    color: #ed4014;
                }
            }
        }
    }
}
</style>
