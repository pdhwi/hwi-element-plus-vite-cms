<template>
  <el-button text @click="dialogVisible = true">
    Click to open Dialog
  </el-button>
  <el-dialog v-model="dialogVisible"
             :title="props.title"
             :width="config.dialogWidth"
             @close='handleClose'
             draggable>
        <auto-form  :form="props.form"
                    :dataStruct="props.dataStruct"
                    @submitForm="submitForm"
        > </auto-form>
  </el-dialog>
</template>

<script setup lang="ts" name="addDialog">
//addDialog.vue-2023-04-20-16:24
import AutoForm from "~/components/form/autoForm.vue";

const emit = defineEmits(["submitFormDialog"])
const dialogVisible = ref(false)
const props = defineProps({
  title:String,
  config:Object,
  form:Object,
  dataStruct:Object
})


function show( show ){
  dialogVisible.value = show
}

function submitForm(data){
  emit("submitFormDialog",data)
}

function  handleClose(){
  console.log("handleClose----")
}


defineExpose({
  show,
  dialogVisible
})


</script>
<style lang="scss" scoped>

</style>
