<template>
  <el-table
      ref="multipleTableRef"
      :data="state.tableItems"
      style="width: 100%"
      :max-height="tableHeight"
      @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" label="全选"  width="55" />


    <el-table-column
      v-for="(topItem, index) in state.topItems"
      :prop="topItem.key"
      :label="topItem.value"
      :width="topItem.width"
      :min-width="topItem.minWidth"
      :class-name="topItem.className"
      align="center"
      :key="topItem.key"
    >
      <template #default="scope">
        <el-input @change.native="changeField(scope.row , topItem.key )"  :size="bottonSize" v-model="scope.row[topItem.key]" v-if="'input' == topItem.type " :value="scope.row[topItem.key]" :title="scope.row[topItem.key]" ></el-input>
        <span v-else-if="'index' === topItem.type " > {{ scope.row.i }}</span>
        <span v-else v-html="scope.row[topItem.key]" ></span>
      </template>
    </el-table-column>
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
        >查看</el-button
        >
        <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
        >删除</el-button
        >
      </template>
    </el-table-column>

  </el-table>
</template>

<script setup lang="ts" name="hwiTables">
//hwiTables.vue-2023-04-23-11:50
import { ElTable } from 'element-plus'
import {configStore} from "~/store/hwiConfig"
import {addRoles} from "~/api/systems";
/*import {ItemsStr}  from "./hwiTablesStr"*/

let hwiConfigStore = configStore()
let config = hwiConfigStore.searchConfig
let indexEx = ref(false)
const props = defineProps({
  itemsResult: Object,
  dataStruct: Object,
  changeCallBack:Boolean,
  changeObj:Function,
})

let tableResult:HwiTableStruct.Result = props.itemsResult
let tableHeight = ref(700)
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref([])
const bottonSize = hwiConfigStore.bottomSize
const emit = defineEmits(["changeCallBack","showItem","resetItems", "delObj"])

//初始化展示变量
let state = reactive({
  topItems: props.dataStruct.topItems,
  tableItems: tableResult.data
})

//初始化列表数据
initTopItems()
itemAddI()
function  onSubmit() {
  console.log(props.dataStruct)
}

function initTopItems(){
  state.topItems.forEach(item =>{
    if (item.type === 'index') indexEx.value = true
  })
  //添加序号
  if (!indexEx.value) {
    indexEx.value = true
    state.topItems.unshift({
      key: 'id',
      value: '序号',
      type: 'index',
      width: 60,
      fixed: true,
      minWidth: 50
    })

  }
}

function  itemAddI() {
  var per_page = tableResult.per_page
  var current_page = tableResult.current_page
  var n = (current_page - 1) * per_page
  // 为列表添加序号
  state.tableItems.forEach(function (fItem, index, key) {
    fItem.i = n + index + 1
  })
}

function handleEdit(index , item ){
  emit("showItem",item )
}

function handleDelete(index , item ){
  emit("delItem",item )

}

const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

function changeField (item, value) {
  if(props.changeCallBack ){
    emit("changeCallBack",item )
    return
  }

  if (undefined === props.changeObj )  return
  props.changeObj(item , item.id).then(response => {
    let data = response.data
    let code = data.code
    if (code !== hwiConfigStore.successCode ) {
      return false
    }

    emit("changeCallBack",item )
  })
}

watch(
    () => props.itemsResult,
    (newVal, oldVal) => {
      tableResult = newVal
      state.tableItems = tableResult.data
      itemAddI()
    }
)

</script>
<style lang="scss" scoped>

</style>
