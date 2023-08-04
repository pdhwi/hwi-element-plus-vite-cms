<template>
  <search
      :searchData ="state.searchData"
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
  <hwi-tables v-if="state.itemsResult.current_page  " key="hwiTable"
              :itemsResult="state.itemsResult"
              :dataStruct="dataStruct"
              :changeObj="updateObj"
              @showItem="showItem"
              @resetItems="resetItems"
              @delItem="delItem"
  />

  <edit-dialog ref="editDialogRef"
               :title="config.editName"
               :config="config"
               :form="{}"
               :dataStruct="dataStruct"
               @submitFormDialog="editFormDialog"
  />

  <hwi-pagination
      v-if="state.itemsResult.current_page  "
      :itemsResult="state.itemsResult"
      @resetItems="resetItems"
  />
</template>

<script setup lang="ts" name="roles">
//hwiCmsTemplate.vue-2023-05-10-16:36 列表页模板
// 1. 创建 ~/api/XXX api 接口文件，可参考~/api/systems 文件
// 2. 创建 ~/utils/XXX 结构体文件,用于界面展示和表单填充 , 可参考 ~/utils/structSystems 文件。
// 3. 引入上面2个文件并替换 const 变量。
import {configStore} from "~/store/hwiConfig"
import hwiSystems, {HwiSelectStruct, HwiSysStruct} from "~/utils/structSystems"
import { addRoles ,getRoles , updateRoles , delRoles } from "~/api/systems"
import common from "~/utils/common"
import EditDialog from "~/components/dialog/editDialog.vue";
import rolesData from "~/utils/defaultData";
import { ElMessageBox } from 'element-plus'

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
let state=reactive({
  itemsResult : hwiConfigStore.itemsResultStr,
  searchData: JSON.parse(JSON.stringify(dataStruct.searchData)),
  selectObj:{}
})

if (hwiConfigStore.defaultData){
  state.itemsResult = rolesData.data
}

getItems()
//初始化参数-获取items--end



//基础增删改查方法 --start
/**
 * addUrl 新增跳转
 * @Hwi    pandehui 2023-05-130 14:46:57
 * @param addUrl
 */
function addUrl(addUrl:string ){
  addDialogRef.value.show(true)
}

/**
 * addFormDialog  新增提交回调
 * @Hwi    pandehui 2023-05-130 14:46:35
 * @param form
 */
function addFormDialog(form:object){
  addData(form)
}

/**
 * editFormDialog 编辑提交回调
 * @Hwi    pandehui 2023-05-130 14:45:32
 * @param form
 * @param id
 */
function editFormDialog(form:object , id:number ){
  updateData(form , id )
}

/**
 * resetItems 重置列表数据
 * @Hwi    pandehui 2023-05-130 14:45:16
 * @param
 */
function resetItems(){
  getItems()
}

/**
 * searchItems  搜索列表
 * @Hwi    pandehui 2023-05-130 14:44:42
 * @param
 */
function searchItems(){
  hwiConfigStore.page = 1
  getItems()
}

/**
 * getItems 获取列表数据
 * @Hwi    pandehui 2023-05-130 14:44:24
 * @param
 */
function getItems (){
  let  data = state.searchData
  data.page = hwiConfigStore.page
  data.size = hwiConfigStore.size
  itemsObj(data).then(response => {
    let data = response.data
    let code = data.code
    if (code !== hwiConfigStore.successCode ) {
      return false
    }
    state.itemsResult = data.data
  })
}

/**
 * addData 添加数据
 * @Hwi    pandehui 2023-05-130 14:44:07
 * @param
 */
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

/**
 * updateData 更新数据
 * @Hwi    pandehui 2023-05-130 14:31:05
 * @param form  表单数据
 * @param id    数据ID
 */
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

/**
 * showItem 编辑跳转
 * @Hwi    pandehui 2023-05-130 14:30:28
 * @param item
 */
function showItem(item:object ){
  editDialogRef.value.show(true,item )
}

/**
 * delItem 删除数据
 * @Hwi    pandehui 2023-05-130 14:29:47
 * @param item
 */
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

function installStructSelect(type:string , data:Array){
  console.log('installStructSelect',data , dataStruct)
  let arr = undefined === state.selectObj[type]?[]:state.selectObj[type]
  data.forEach(item=>{
    let o:HwiSelectStruct ={
      label:item.id,
      value:item.cn_name,
      disabled: false
    }
    arr.push(o)
  })
  state.selectObj[type] = arr
}

//基础增删改查方法 --end
</script>
<style lang="scss" scoped>

</style>
