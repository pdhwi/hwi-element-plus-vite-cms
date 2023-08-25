<script lang="ts" setup>

import { getUser , removeToken , removeUser  } from '~/utils/auth'
import {configStore} from "~/store/hwiConfig"
import router from "~/router";
const hwiConfigStore = configStore()

let user = getUser()

function  lougout(){
  removeToken()
  removeUser()
  router.push('login')
}
</script>

<template>
  <el-row class="hwi-header-row">
    <el-col :span="6"><div class="grid-content ep-bg-purple" />{{hwiConfigStore.cmsName}}</el-col>
    <el-col :span="12"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6" class="hwi-user-box">
      <span class="user-name">{{user.name}} </span>
      <el-button type="primary"  v-if="user" @click="lougout">退出</el-button>
    </el-col>
  </el-row>
</template>


<style lang="scss" scoped>
  .hwi-header-row{
    padding-top: 20px;
  }

  .hwi-user-box{
    text-align: right;
  }
  .hwi-user-box .user-name{
    margin: 0 20px;
  }

</style>

