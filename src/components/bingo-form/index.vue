<template>
    <Form ref="form" class="form" :model="data" :label-width="labelW" :label-position="labelPosition" v-bind="$attrs" v-on="$listeners">
        <Grid :col="col" :border="false" justify="end" padding="2px">
            <slot></slot>
            <GridItem v-if="button" style="width: 100%;text-align: right;" >
                <FormItem>
                    <slot name="button-left"></slot>
                    <Button type="primary" @click="handleOne" v-if="buttonOne" :loading="loading">{{buttonOneText}}</Button>
                    <Button class="ivu-ml-8" @click="handleTwo" v-if="buttonTwo" :loading="loading">
                        {{buttonTwoText}}
                    </Button>
                    <slot name="button-right"></slot>
                </FormItem>
            </GridItem>
        </Grid>
    </Form>
</template>
<script>
    import { mapState } from 'vuex';
    export default {
        name: 'bingo-form',
        props: {
            button: {
                type: Boolean,
                default: true
            },
            buttonOne: {
                type: Boolean,
                default: true
            },
            buttonTwo: {
                type: Boolean,
                default: false
            },
            buttonOneText: {
                type: String,
                default: '保存'
            },
            buttonTwoText: {
                type: String,
                default: '提交'
            },
            col: {
                type: Number,
                default: 1
            },
            labelWidth: {
                type: Number
            },
            data: {
                type: Object
            }
        },
        data () {
            return {
                loading: false,
            };
        },
        computed: {
            ...mapState('admin/layout', [
                'isMobile'
            ]),
            labelW () {
                return this.isMobile ? undefined : this.labelWidth;
            },
            labelPosition () {
                return this.isMobile ? 'top' : 'right';
            }
        },
        methods: {
            handleOne () {
                this.$refs.form.validate((valid) => {
                    this.loading = true;
                    if (valid) {
                        let _this = this;
                        this.$emit('on-button-one', function () {
                            _this.loading = false;
                        });
                    } else {
                        this.loading = false;
                    }
                });
            },
            handleTwo () {
                this.$refs.form.validate((valid) => {
                    this.loading = true;
                    if (valid) {
                        let _this = this;
                        this.$emit('on-button-two', function () {
                            _this.loading = false;
                        });
                    } else {
                        this.loading = false;
                    }
                });
            }
        }
    };
</script>
