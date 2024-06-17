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
        <span>demo2 简单下拉选项</span>
      </div>
    </template>
    <auto-form  :form="demoResult.demo2FormData"
                :dataStruct="demoResult.demo2Str"
                :addForm="true"
                :selectObj="demoResult.demo2SelectObj"
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
    'zone':[
      {label:'全部',value:0},
      {label:'区域1',value:1},
      {label:'区域2',value:2},
      {label:'区域3',value:3},
    ],
  }
})


console.log(hwiFromDemoData)

</script>
<style lang="scss" scoped>

</style>
