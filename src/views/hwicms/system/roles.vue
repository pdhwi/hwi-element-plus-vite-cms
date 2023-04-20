<template>
  <search :searchData ="searchData" :config ="config" @addUrl="addUrl"/>
  <add-dialog ref="addDialogRef"
              :title="config.addName"
              :config="config"
              :form="form"
              :dataStruct="dataStruct"
              @submitFormDialog="submitFormDialog"
  />
</template>

<script setup lang="ts" name="roles">
//roles.vue-2023-04-19-16:36

import hwiSystems from "~/utils/structSystems"
import { addRoles } from "~/api/systems"
import common from "~/utils/common"
//初始化参数

const dataStruct = hwiSystems.RoleStruct
let submitObj = addRoles
let formStruct = dataStruct.addStruct
let formMeaning = dataStruct.meaning
let form = common.installForm(formStruct)

//const changeObj = updateUser
const addDialogRef = ref()
const searchData = JSON.parse(JSON.stringify(dataStruct.searchData))
let config = {
      addUrl: 'function',
      addName: '新增角色',
      dialogWidth:'60%',
    };

function addUrl(aaa){
  addDialogRef.value.show(true)
}

function submitFormDialog(form){
    console.log("submitFormDialog",form)
}
</script>
<style lang="scss" scoped>

</style>
