<template>
    <div :class="isSquare ? 'ivu-grid-query' : 'ivu-grid-item'" :style="styles" ref="col">
        <div class="ivu-grid-item-main" :style="mainStyles">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import { getStyle } from '../../libs/system/assist.js';

    export default {
        name: 'grid-item22',
        inject: ['GridInstance'],
        props: {
            colspan: { // 合并的列数
                type: Number,
                default: null
            },
            isSquare: { // 判断是否自动计算每个grid的宽度
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                height: 0
            };
        },
        computed: {
            col () {
                return this.GridInstance.col;
            },
            square () {
                return this.GridInstance.square;
            },
            styles () {
                const style = {
                    width: this.isSquare || this.colspan?`${(100 / this.col) * this.colspan}%`:`${100 / this.col}%`
                };

                if (this.height && this.square) {
                    style.height = `${this.height}px`;
                }
                return style;
            },
            mainStyles () {
                return {
                    padding: this.GridInstance.padding
                };
            }
        },
        watch: {
            col () {
                this.$nextTick(() => {
                    this.handleChangeHeight();
                });
            },
            square () {
                this.handleChangeHeight();
            },
            'GridInstance.resizeCount' () {
                this.handleChangeHeight();
            }
        },
        methods: {
            handleChangeHeight () {
                if (this.square) {
                    const $col = this.$refs.col;
                    this.height = parseFloat(getStyle($col, 'width'));
                }
            }
        },
        mounted () {
            this.handleChangeHeight();
        }
    };
</script>
<style lang="less" scoped>

</style>
