<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="功能区" name="1">
        <el-form :inline="true" :model="props.searchData" class="demo-form-inline">
          <el-form-item>
            <el-button type="primary" v-if="sConfig.addUrl" @click="addUrl">+新增数据</el-button>
          </el-form-item>

          <el-form-item
              v-for="(item, index) in state.searchForm"
              :label="item.name"
          >
            <el-input  v-if="item.type === 'INPUT'" :size="hwiConfigStore.bottomSize"  v-model="props.searchData[item.key]" :placeholder="item.name" />
          </el-form-item>

<!--          <el-form-item label="Activity zone">
            <el-select placeholder="Activity zone">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>-->
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>

      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts" name="search">
//search.vue-2023-04-10-16:17
import {ref, reactive, PropType} from 'vue'
import {configStore} from "~/store/hwiConfig"
import {HwiSysStruct} from "~/utils/structSystems";
const hwiConfigStore = configStore()

const props = defineProps({
  config: Object,
  searchData:Object,
  dataStruct:Object as PropType<HwiSysStruct>,
  selectObj:Object
})
let sConfig = props.config === undefined ? hwiConfigStore.searchConfig : props.config
const  meaingStr = props.dataStruct.meaning
const emit = defineEmits(["addUrl","searchItems"])
const state = reactive({
  searchForm:props.dataStruct?.searchfrom
})

const onSubmit = () => {
  emit("searchItems")
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
