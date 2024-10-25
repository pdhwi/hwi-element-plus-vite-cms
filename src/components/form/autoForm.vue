<template>
  <el-form :model="props.form" class="hwi-autoForm" label-width="120px">

    <el-form-item
        v-for="(f, key,index) in formStruct"
        :label ="formMeaning[key]"
    >
      <el-input v-if="formStruct[key] === 'INPUT'"  v-model="props.form[key]" />

      <el-checkbox-group v-else-if="formStruct[key]  === 'CHECKBOX'"  v-model="props.form[key]" >
        <el-checkbox
            v-for="checkbox_item in selectObj[key]"
            :label="checkbox_item.label"
        >{{checkbox_item.value}}</el-checkbox>
      </el-checkbox-group>

      <el-select v-else-if="formStruct[key]  === 'SELECT'"  v-model="props.form[key]" filterable placeholder="请选择"
                 @change="selectCallBack(props.form[key], key )"
      >
        <el-option
            v-for="select_item in props.selectObj[key]"
            :key="select_item.label"
            :label="select_item.label"
            :value="select_item.value"
            :disabled="select_item.disabled"
        >
        </el-option>
      </el-select>

      <el-select v-else-if="formStruct[key]  === 'SELECT_MULTIPLE'"  multiple    v-model="props.form[key]" filterable placeholder="请选择"
                 @change="selectCallBack(props.form[key], key )"
         >
        <el-option
            v-for="select_item in props.selectObj[key]"
            :key="select_item.label"
            :label="select_item.label"
            :value="select_item.value"
            :disabled="select_item.disabled"
        >
        </el-option>
      </el-select>

      <el-select v-else-if="formStruct[key]  === 'SELECT_MULTIPLE_COLLAPSE'"   multiple  collapse-tags  collapse-tags-tooltip
                 v-model="props.form[key]"
                 filterable placeholder="请选择"
                 @change="selectCallBack(props.form[key], key )"
      >
        <el-option
            v-for="select_item in props.selectObj[key]"
            :key="select_item.label"
            :label="select_item.label"
            :value="select_item.value"
            :disabled="select_item.disabled"
        >
        </el-option>
      </el-select>

    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">保存</el-button>
    </el-form-item>
  </el-form>

</template>

<script setup lang="ts" name="autoForm">
//autoForm.vue-2023-04-20-17:27

const props = defineProps({
  form:Object,
  dataStruct:Object,
  addForm:Boolean,
  selectObj:Object,
  selectCallBackFunc:Function
})

const emit = defineEmits(["submitForm"])
let formStruct = props.addForm ? props.dataStruct.addStruct : props.dataStruct.editStruct
let formMeaning = props.dataStruct.meaning

const onSubmit = () => {
  emit("submitForm",props.form)
}

let installForm = computed(()=>{

})


/**
 * 下拉选项回调
 * @param type
 * @param val
 */
function selectCallBack(type , val ){
  console.log(type,val )
  if( props.selectCallBackFunc !== undefined ){
    props.selectCallBackFunc(type , val )
  }
}


</script>
<style lang="scss" scoped>
    .hwi-autoForm  .el-select{
        width: 100%;
      }
</style>
