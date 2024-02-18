<template>
    <div class="content-inner">
      <card>
        <bingo-vxe-table
          ref="xGrid"
          :tableData="data"
          :borderLine="true"
          :showFilter="false"
          :columns="columns"
          :showEmptyImg="false"
          :edit-config="{trigger: 'manual', mode: 'row'}">
          <template slot="left-button">
            <Button type="primary" ghost @click="">新建</Button>
          </template>
          <template slot="right-button">
            <Button type="primary" ghost @click="openApi">API</Button>
          </template>
          <template slot="right-btns">
              <div class="i-link" @click="handleExport">
                <i class="icon iconfont icondaochu2"></i>
              </div>
          </template>
          <template slot="empty">

          </template>
          <template  #action="{row}">
            <Tooltip content="编辑">
              <Button type="text" custom-icon="iconfont iconbianji1" class="operation-btn operation-btn-edit" @click="edit(row)"></Button>
            </Tooltip>
          </template>
          <template #explain_edit="{ row }">
            <vxe-input v-model="row.explain"></vxe-input>
          </template>
        </bingo-vxe-table>
        <modal
          ref="modal">

        </modal>
      </card>
    </div>
</template>

<script>
    import { getJson, getDatas } from './data'
    import modal from './modal'
    export default {
        name: "index",
        data(){
            return{
              data:[],
              columns:[
                {
                  type: 'seq',
                  title: '序号',
                  width: 65,
                  align: 'center',
                  fixed: 'left'
                },
                {
                  title: '属性/方法',
                  field: 'pprops',
                  width: 240,
                },
                {
                  title: '说明',
                  field: 'explain',
                  editRender: {},
                  slots:{
                    edit:'explain_edit'
                  }
                },
                {
                  title: '类型/返回类型',
                  field: 'type',
                  width: 200,
                },
                {
                  title: '可选值',
                  field: 'value',
                  width: 200,
                },
                {
                  title: '默认值/参数',
                  field: 'defaultValue',
                },
                {
                  title: '操作列',
                  field: 'action',
                  slots:{
                    default:'action'
                  }
                }
              ],
              showModal:false
            }
        },
        components:{
          modal
        },
        mounted(){
            this.getData()
        },
        methods:{
          getData(){
            this.data= [{
              pprops:'数据1'
            },{
              pprops:'数据2'
            },{
              pprops:'数据2'
            },{
              pprops:'数据2'
            },{
              pprops:'数据2'
            },{
              pprops:'数据2'
            },{
              pprops:'数据2'
            },{
              pprops:'数据2'
            },{
              pprops:'数据2'
            },{
              pprops:'数据2'
            },{
              pprops:'数据2'
            },{
              pprops:'数据2'
            },{
              pprops:'数据2'
            },{
              pprops:'数据2'
            },{
              pprops:'数据2'
            },{
              pprops:'数据2'
            },{
              pprops:'数据2'
            },{
              pprops:'数据2'
            },{
              pprops:'数据2'
            }
            ]
          },
          openApi(){
            this.$refs.modal.isShow=true
          },
          handleExport(){

          },
          edit(row){
            this.$refs.xGrid.$refs.xTable.setEditRow(row);
          }
        }
    }
</script>

<style lang="less" scoped>

</style>
