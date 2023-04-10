<template>
  <div class=" hwi-pagination ">
    <el-pagination
        v-model:current-page="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[10, 20, 30, 50]"
        :small="small"
        :disabled="disabled"
        :background="true"
        layout="->,total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts" name="hwiPagination">
//hwiPagination.vue-2023-04-10-17:40
import {ref} from "vue";

const currentPage4 = ref(4)
const pageSize4 = ref(100)
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
