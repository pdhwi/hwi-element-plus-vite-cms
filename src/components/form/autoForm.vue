<template>
  <el-form :model="form" label-width="120px">

    <el-form-item
        v-for="(f, key,index) in formStruct"
        :label ="formMeaning[key]"
    >
      <el-input v-if="formStruct[key] === 'INPUT'"  v-model="form[key]" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">创建</el-button>
    </el-form-item>
  </el-form>

</template>

<script setup lang="ts" name="autoForm">
//autoForm.vue-2023-04-20-17:27

const props = defineProps({
  form:Object,
  dataStruct:Object
})
const emit = defineEmits(["submitForm"])

let formStruct = props.dataStruct.addStruct
let formMeaning = props.dataStruct.meaning
let form = reactive(props.form)

const onSubmit = () => {
  emit("submitForm",form)
}

let installForm = computed(()=>{

})
</script>
<style lang="scss" scoped>

</style>
