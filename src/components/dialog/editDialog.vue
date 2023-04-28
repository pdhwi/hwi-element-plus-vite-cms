<template>
  <el-dialog v-model="dialogVisible"
             :title="props.title"
             :width="config.dialogWidth"
             @close='handleClose'
             draggable>
    <auto-form  :form="state.form"
                :dataStruct="props.dataStruct"
                :addForm="false"
                @submitForm="submitForm"
    > </auto-form>
  </el-dialog>
</template>

<script setup lang="ts" name="editDialog">
//editDialog.vue-2023-04-28-15:58
import AutoForm from "~/components/form/autoForm.vue";

const emit = defineEmits(["submitFormDialog"])
const dialogVisible = ref(false)
let id = ref(0)
const props = defineProps({
  title:String,
  config:Object,
  form:Object,
  dataStruct:Object
})

let state =  reactive({
  form:  props.form
})

function show( show , item  ){
  state.form = JSON.parse(JSON.stringify(item))
  id = item.id
  dialogVisible.value = show
}

function submitForm(data){
  emit("submitFormDialog",data , id )
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
