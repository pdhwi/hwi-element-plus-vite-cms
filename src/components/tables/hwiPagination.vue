<template>
  <div class=" hwi-pagination ">
    <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="pageSizeList"
        :small="small"
        :disabled="disabled"
        :background="true"
        layout="->,total, sizes, prev, pager, next, jumper"
        :total="total"
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
console.log("page: ", props.itemsResult)
const pageSizeList = hwiConfigStore.hwiPageConfig.selectList
const currentPage = ref(props.itemsResult.current_page)
const pageSize = ref(props.itemsResult.per_page)
const total = ref(props.itemsResult.total)


const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

</script>
<style lang="scss" scoped>
.hwi-pagination{
  padding: 15px 0 ;
  width: 100%;
}
.hwi-pagination .el-pagination .el-input__inner {
  background-color: #fff ;
  color: #606266 ;
}
</style>
