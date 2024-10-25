<template>
  <el-card >
    <template #header>
      <div class="card-header">
        <span>demo1 简单表单</span>
      </div>
    </template>
    <auto-form  :form="demoResult.demo1FormData"
                :dataStruct="demoResult.demo1Str"
                :addForm="true"
    > </auto-form>
  </el-card>


  <el-card >
    <template #header>
      <div class="card-header">
        <span>demo2   SELECT 下拉选项</span>
      </div>
    </template>
    <el-text >
      form: 数据结构<br />
      dataStruct: 数据表单<br />
      addForm: 新增数据模式<br />
      selectObj: select下拉选择内容数据<br />
      selectCallBackFunc: select change callback 回调<br />
    </el-text>
    <auto-form  :form="demoResult.demo2FormData"
                :dataStruct="demoResult.demo2Str"
                :addForm="true"
                :selectObj="demoResult.demo2SelectObj"
                :selectCallBackFunc="selectCallBackFunc"
    > </auto-form>
  </el-card>


</template>

<script setup lang="ts" name="hwiFormDemo">
//hwiCmsTemplate.vue-2023-05-10-16:36 列表页模板
import {configStore} from "~/store/hwiConfig"
import hwiFromDemoData from "~/utils/hwiFromDemoData"

const hwiConfigStore = configStore()
//demo2
let demoResult=reactive({
  demo1Str : hwiFromDemoData.demo1Struct,
  demo1FormData : hwiFromDemoData.demo1FormData,
  demo2Str : hwiFromDemoData.demo2Struct,
  demo2FormData : hwiFromDemoData.demo2FormData,
  demo2SelectObj : {
    'select':[
      {label:'全部',value:0,},
      {label:'区域1',value:1},
      {label:'区域2',value:2},
      {label:'区域3',value:3,disabled:true},
    ],
    'multiple':[
      {label:'全部',value:0,},
      {label:'区域11',value:1},
      {label:'区域22',value:2},
      {label:'区域33',value:3},
    ],

    'multiple_collapse':[
      {label:'全部',value:0,},
      {label:'collapse1',value:1},
      {label:'collapse2',value:2},
      {label:'collapse3',value:3},
    ],
  }
})


console.log(hwiFromDemoData)

/**
 * 下拉回调
 * @param val  变动后的值
 * @param type 表单key值
 */
function  selectCallBackFunc(val , type   ){
    console.log("selectCallBackFunc--", val , type )
}


</script>
<style lang="scss" scoped>

</style>
