<template>
  <search
      :searchData ="result.searchData"
      :dataStruct="dataStruct"
      :config ="config"
      @addUrl="addUrl"
      @searchItems="searchItems"
  />
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
              :changeObj="updateObj"
              @showItem="showItem"
              @resetItems="resetItems"
              @delItem="delItem"
  />

  <roles-edit ref="editDialogRef"
              :title="config.editName"
              :config="config"
              :form="{}"
              :dataStruct="dataStruct"
              @submitFormDialog="editFormDialog"
  />

  <hwi-pagination
      v-if="result.itemsResult.current_page  "
      :itemsResult="result.itemsResult"
      @resetItems="resetItems"
  />
</template>

<script setup lang="ts" name="roles">
//roles.vue-2023-04-19-16:36
import {configStore} from "~/store/hwiConfig"
import hwiSystems,  { HwiSysStruct} from "~/utils/structSystems"
import { addRoles ,getRoles , updateRoles , delRoles } from "~/api/systems"
import common from "~/utils/common"
import EditDialog from "~/components/dialog/editDialog.vue";
import rolesData from "~/utils/defaultData";
import { ElMessageBox } from 'element-plus'
import RolesEdit from "~/views/hwicms/system/rolesEdit.vue";

//初始化参数-获取items--start-- 自行修改const 变量
const hwiConfigStore = configStore()
const dataStruct:HwiSysStruct = hwiSystems.RoleStruct
const itemsObj = getRoles
const addObj = addRoles
const updateObj = updateRoles
const delObj = delRoles
const addDialogRef = ref()
const editDialogRef = ref()
let config = hwiConfigStore.addDataConfig
config.addName = '新增角色'
config.editName = '编辑角色'
hwiConfigStore.page = 1

let addForm = common.installForm(dataStruct.addStruct)
let result=reactive({
  itemsResult : hwiConfigStore.itemsResultStr,
  searchData: JSON.parse(JSON.stringify(dataStruct.searchData))
})

if (hwiConfigStore.defaultData){
  result.itemsResult = rolesData.data
}

getItems()
//初始化参数-获取items--end


//基础增删改查方法 --start
function addUrl(addUrl:string ){
  addDialogRef.value.show(true)
}

function addFormDialog(form:object){
    addData(form)
}

function editFormDialog(form:object , id:number ){
  updateData(form , id )
}
function resetItems(){
  getItems()
}

function searchItems(){
  console.log(result.searchData)
  hwiConfigStore.page = 1
  getItems()
}

function getItems (){
  let  data = result.searchData
  data.page = hwiConfigStore.page
  data.size = hwiConfigStore.size
  itemsObj(data).then(response => {
    let data = response.data
    let code = data.code
    if (code !== hwiConfigStore.successCode ) {
      return false
    }
    result.itemsResult = data.data
  })
}

function addData(form:object ){
  addObj(form).then(response => {
    let data = response.data
    let code = data.code
    if (code !== hwiConfigStore.successCode ) {
      return false
    }
    resetItems()
  })
}




function updateData(form:object , id:number ){
  updateObj(form , id ).then(response => {
    let data = response.data
    let code = data.code
    if (code !== hwiConfigStore.successCode ) {
      return false
    }
    resetItems()
  })
}

function showItem(item:object ){
  editDialogRef.value.show(true,item )
}

function delItem( item:object ){
  ElMessageBox.confirm('确认删除?')
      .then(() => {
        delObj(  item.id  ).then(response => {
          let data = response.data
          let code = data.code
          if (code !== hwiConfigStore.successCode ) {
            return false
          }
          resetItems()
        })
      })
      .catch(() => {
        // catch error
      })
}
//基础增删改查方法 --end
</script>
<style lang="scss" scoped>

</style>
