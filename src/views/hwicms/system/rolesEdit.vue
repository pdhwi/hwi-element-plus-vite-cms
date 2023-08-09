<template>
  <el-dialog v-model="dialogVisible"
             :title="props.title"
             :width="config.dialogWidth"
             @close='handleClose'
             draggable>
    <el-form :model="state.form" label-width="120px">

      <el-form-item label="角色">
        <el-input disabled v-model="state.form.name" />
      </el-form-item>

      <el-form-item label="">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="权限控制" name="permissions">
            <el-tree
            ref="treeRef"
            :data="state.permissions"
            show-checkbox
            default-expand-all
            node-key="id"
            highlight-current
            :props='{children: "children", label: "cn_name", class: customNodeClass }'
            />

          </el-tab-pane>
          <el-tab-pane label="菜单控制" disabled name="menus">

          </el-tab-pane>
        </el-tabs>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>

  </el-dialog>
</template>

<script setup lang="ts" name="rolesEdit">
//rolesEdit.vue-2023-06-25-15:02
import {getPermissions, setRPermissions , getRPermissions } from "~/api/systems"
import {configStore} from "~/store/hwiConfig";
import { ElTree } from 'element-plus'
import type Node from 'element-plus/es/components/tree/src/model/node'


const emit = defineEmits(["submitFormDialog","submitForm"])
const dialogVisible = ref(false)
const hwiConfigStore = configStore()
let id = ref(0)
const props = defineProps({
  title:String,
  config:Object,
  form:Object,
  dataStruct:Object,
  selectObj:Object
})

let state =  reactive({
  form:  props.form,
  permissions:[],
  menus:[]
})



function show( show:boolean , item:object  ){
  state.form = JSON.parse(JSON.stringify(item))
  id = item.id
  dialogVisible.value = show
  getPTree()
  getRPTree()
}

function submitForm(data:object){
  emit("submitFormDialog",data , id )
}

function  handleClose(){
}


let formStruct = props.addForm ? props.dataStruct.addStruct : props.dataStruct.editStruct
let formMeaning = props.dataStruct.meaning

const onSubmit = () => {
  /*let cKeys = treeRef.value!.getCheckedKeys(false)
  let fKeys = treeRef.value!.getHalfCheckedKeys()
  let keys = cKeys.concat(fKeys)*/
  let keys = treeRef.value!.getCheckedKeys(false)

  let form = {
      'id':id,
      'keys':keys.join(",")
  }
  setRPermissions(form,id).then(response => {
    let data = response.data
    let code = data.code
    if (code !== hwiConfigStore.successCode ) {
      return false
    }

  })

  //emit("submitForm",props.form)
}


//tabs
const activeName = ref('permissions')

const treeRef = ref<InstanceType<typeof ElTree>>()

const handleClick = (tab: TabsPaneContext, event: Event) => {
}

//permissions
function getPTree (){
  let  data = {
    'tree':1,
    'all':1
  }

  getPermissions(data).then(response => {
    let data = response.data
    let code = data.code
    if (code !== hwiConfigStore.successCode ) {
      return false
    }
    //填充数据
    state.permissions = data.data
  })
}

function getRPTree (){
  let  data = {
    'tree':1,
    'all':1
  }

  getRPermissions(id).then(response => {
    let data = response.data
    let code = data.code
    if (code !== hwiConfigStore.successCode ) {
      return false
    }
    //填充数据
    let pIds =[]
    data.data.forEach( p => {
        pIds.push(p[3])
    })

    treeRef.value!.setCheckedKeys(pIds)
  })
}




// tree
interface Tree {
  id: number
  cn_name: string
  p_id: number
  isPenultimate?: boolean
  children?: Tree[]
}

const customNodeClass = (data: Tree, node: Node) => {
  if (data.p_id === 0 ) {
    return 'is-penultimate'
  }
  return null
}

defineExpose({
  show,
  dialogVisible
})


</script>
<style lang="scss" scoped>
/* 权限展示样式 */
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
// el-tree 三级菜单横向布局 样式
.el-tree {
  :v-deep( .el-tree-node__children ){
      display: flex;
      flex-direction: row;
      .el-tree__children {
        display: flex;
        flex-direction: column;
      }
      //color: #909399;
    }
}
</style>
