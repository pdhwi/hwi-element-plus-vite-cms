<template>
  <search :searchData ="searchData" :config ="config" @addUrl="addUrl"/>
  <add-dialog ref="addDialogRef"
              :title="config.addName"
              :config="config"
              :form="addForm"
              :dataStruct="dataStruct"
              @submitFormDialog="addFormDialog"
  />
  <hwi-tables v-if="result.itemsResult.current_page  " key="hwiTable"
              :itemsResult="result.itemsResult"
              :dataStruct="dataStruct"
              :changeObj="updateRoles"
              @showItem="showItem"
  />

  <edit-dialog ref="editDialogRef"
               :title="config.editName"
              :config="config"
              :form="result.editForm"
              :dataStruct="dataStruct"
              @submitFormDialog="editFormDialog"
  />

  <hwi-pagination
      v-if="result.itemsResult.current_page  "
      :itemsResult="result.itemsResult"
  />
</template>

<script setup lang="ts" name="roles">
//roles.vue-2023-04-19-16:36
import {configStore} from "~/store/hwiConfig"
import hwiSystems from "~/utils/structSystems"
import { addRoles ,getRoles , updateRoles  } from "~/api/systems"
import common from "~/utils/common"
import EditDialog from "~/components/dialog/editDialog.vue";
import rolesData from "~/utils/defaultData";
//初始化参数
const hwiConfigStore = configStore()
const dataStruct = hwiSystems.RoleStruct
let submitObj = addRoles
let formMeaning = dataStruct.meaning
let addForm = common.installForm(dataStruct.addStruct)
let editForm = common.installForm(dataStruct.editStruct)
let result=reactive({
  itemsResult : hwiConfigStore.itemsResultStr,
})

if (hwiConfigStore.defaultData){
  result.itemsResult = rolesData.data
}

//const changeObj = updateUser
const addDialogRef = ref()
const editDialogRef = ref()
const searchData = JSON.parse(JSON.stringify(dataStruct.searchData))
let config = hwiConfigStore.searchConfig
config.addName = '新增角色'
config.editName = '编辑角色'
getList()

function addUrl(aaa){
  addDialogRef.value.show(true)
}

function addFormDialog(form){
    addData(form)
}

function editFormDialog(form , id ){
  updateData(form , id )
}
function resetItems(){
  getList()
}

function getList (){
  let  data = searchData
  data.page = hwiConfigStore.page
  data.size = hwiConfigStore.size
  getRoles(data).then(response => {
    let data = response.data
    let code = data.code
    if (code !== hwiConfigStore.successCode ) {
      return false
    }
    result.itemsResult = data.data
  })
}

function addData(form ){
  addRoles(form).then(response => {
    let data = response.data
    let code = data.code
    if (code !== hwiConfigStore.successCode ) {
      return false
    }
    resetItems()
  })
}

function updateData(form , id ){
  updateRoles(form , id ).then(response => {
    let data = response.data
    let code = data.code
    if (code !== hwiConfigStore.successCode ) {
      return false
    }
    resetItems()
  })
}

function showItem(item ){
  console.log("showItem--",item )
  editDialogRef.value.show(true,item )
}

</script>
<style lang="scss" scoped>

</style>
