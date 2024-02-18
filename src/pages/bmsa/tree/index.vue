<template>
    <div class="tree-wrapper">
      <card class="card-class">
        <Row class="row-class" :gutter="16">
          <Col span="8">
            <div class="left-tree">
              <Tree
                :data="data"
                show-checkbox
                @on-select-change="handelClick">
              </Tree>
            </div>
          </Col>
          <Col span="16">
            <div class="right-form">
              <div>
                <div>
                  <h2>{{title}}</h2>
                </div>
                <bingo-form :data="formData" :labelWidth="70" :button="false">
                  <bingo-grid-item colspan="0.5">
                    <FormItem label="编码">
                      <Input v-model="formData.code" type="text" disabled/>
                    </FormItem>
                  </bingo-grid-item>
                  <bingo-grid-item>
                    <FormItem label="描述">
                      <Input v-model="formData.des" type="textarea" disabled/>
                    </FormItem>
                  </bingo-grid-item>
                </bingo-form>
              </div>
              <div>
                <div>技能列表</div>
                <bingo-vxe-table
                  :tableData="tableData"
                  :columns="columns">
                <template slot="left-button">
                  <Button type="primary" ghost @click="handelNewClick">新建</Button>
                </template>
                </bingo-vxe-table>
              </div>
            </div>
          </Col>
        </Row>

      </card>

    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
          return{
            data:[],
            title:'',
            formData:{
              code:'',
              des:''
            },
            tableData:[],
            columns:[
              {
                title:'技能',
                field:'a'
              },
              {
                title: '属性/方法',
                field: 'b',
                width: 240,
              },
            ]
          }
        },
      mounted(){
          this.getData()
      },
      methods:{
        getData(){
          this.data=[
            {
              title:'1',children:[
                {
                  title:'1-1',children:[
                    {
                      title:'1-1-1'
                    }
                  ]
                },
                {
                  title:'1-2'
                }
              ],

            },
            {
              title:'2',children:[
                {
                  title:'2-1'
                }
              ],
            }
          ]
        },
        handelClick(i,b){
          debugger
          this.title=b.title
          this.getFormData()
          this.getTableData()
        },
        getFormData(){
          this.formData = {
            code:'abcd',
            des:'技能描述技能描述技能描述技能描述技能描述技能描述技能描述技能描述技能描述技能描述'
          }
        },
        getTableData(){
          this.tableData =  [
            {a:'111',b:222}
          ]
        },
        handelNewClick(){

        }
      }
    }
</script>

<style lang="less" scoped>
  .tree-wrapper{
    height: 100%;
  }
  .card-class{
    height: 100%;
  }
 /deep/.ivu-card-body{
    height: 100%!important;
  }
   /deep/.ivu-row {
      height: 100%!important;
    }
  .left-tree,.right-form{
    border: 1px solid #D1D1D1;
    height: 100%;
    padding: 12px;
  }
</style>
