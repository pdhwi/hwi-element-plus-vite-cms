<template>
  <el-form :model="props.form" label-width="120px">

    <el-form-item
        v-for="(f, key,index) in formStruct"
        :label ="formMeaning[key]"
    >
      <el-input v-if="formStruct[key] === 'INPUT'"  v-model="props.form[key]" />
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
  addForm:Boolean
})
const emit = defineEmits(["submitForm"])
let formStruct = props.addForm ? props.dataStruct.addStruct : props.dataStruct.editStruct
let formMeaning = props.dataStruct.meaning

const onSubmit = () => {
  emit("submitForm",props.form)
}

let installForm = computed(()=>{

})
</script>
<style lang="scss" scoped>

</style>
