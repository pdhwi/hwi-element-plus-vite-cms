<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="功能区" name="1">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item>
            <el-button type="primary" v-if="sConfig.addUrl" @click="addUrl">+新增数据</el-button>
          </el-form-item>
          <el-form-item label="Approved by">
            <el-input v-model="formInline.user" placeholder="Approved by" />
          </el-form-item>
          <el-form-item label="Activity zone">
            <el-select v-model="formInline.region" placeholder="Activity zone">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Query</el-button>
          </el-form-item>
        </el-form>

      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts" name="search">
//search.vue-2023-04-10-16:17
import { ref , reactive } from 'vue'
import {configStore} from "~/store/hwiConfig"
const hwiConfigStore = configStore()

const props = defineProps({
  config: Object
})
let sConfig = props.config === undefined ? hwiConfigStore.searchConfig : props.config
const emit = defineEmits(["addUrl"])
const formInline = reactive({
  user: '',
  region: '',
})

const onSubmit = () => {
  console.log('submit!',formInline)
}
const activeName = ref('1')

function addUrl () {
 if (sConfig.addName === 'name') {
    console.log( "err: searchConfig not set ")
  }else if (sConfig.addUrl === 'function') {
    emit("addUrl",sConfig.addUrl)
  } else {
    routers.push({ path: sConfig.addUrl })
  }
}

</script>
<style lang="scss" scoped>

</style>
