<template>
  <div class=" hwi-pagination ">
    <el-pagination
        v-model:current-page="state.currentPage"
        v-model:page-size="state.pageSize"
        :page-sizes="state.pageSizeList"
        :small="small"
        :disabled="disabled"
        :background="true"
        layout="->,total, sizes, prev, pager, next, jumper"
        :total="state.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts" name="hwiPagination">
//hwiPagination.vue-2023-04-10-17:40
import {ref} from "vue";
import {configStore} from "~/store/hwiConfig";

const hwiConfigStore = configStore()
const props = defineProps({
  itemsResult: Object
})
const emit = defineEmits(["resetItems"])

let state = reactive({
  pageSizeList:hwiConfigStore.hwiPageConfig.selectList,
  currentPage:0,
  pageSize:0,
  total:0,
})

setPage(props.itemsResult)

const small = ref(false)
const background = ref(false)
const disabled = ref(false)


function setPage(pageResult:HwiTableStruct.Result ){
  state.currentPage = pageResult.current_page
  state.pageSize = pageResult.per_page
  state.total = pageResult.total
}


const handleSizeChange = (val: number) => {
  hwiConfigStore.size = val
  emit("resetItems" )
}
const handleCurrentChange = (val: number) => {
  hwiConfigStore.page = val
  emit("resetItems" )
}

watch(
    () => props.itemsResult,
    (newVal, oldVal) => {
      setPage(newVal)
    }
)


</script>
<style lang="scss" scoped>
.hwi-pagination{
  padding: 15px 0 ;
  width: 100%;


  @media (min-width: 600px) {
    position:fixed;
    bottom:0px;
    right:20px;
  }

}
.hwi-pagination .el-pagination .el-input__inner {
  background-color: #fff ;
  color: #606266 ;
}
</style>
