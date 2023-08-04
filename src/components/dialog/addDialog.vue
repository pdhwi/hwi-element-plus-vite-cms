<template>
  <el-dialog v-model="dialogVisible"
             :title="props.title"
             :width="config.dialogWidth"
             @close='handleClose'
             draggable>
        <auto-form  :form="state.form"
                    :dataStruct="props.dataStruct"
                    :addForm="true"
                    :selectObj="props.selectObj"
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
  dataStruct:Object,
  selectObj:Object
})

let state =  reactive({
  form:  props.form
})
function show( show  ){
  state.form = JSON.parse(JSON.stringify(props.form))
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
