<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      :router="true"
  >

    <el-menu-item index="/">
      <el-icon><HomeFilled /></el-icon>
      <template #title>首页</template>
    </el-menu-item>

    <el-sub-menu index="1">
      <template #title>
        <el-icon><Setting /></el-icon>
        <span>系统管理</span>
      </template>
      <el-menu-item-group >
        <el-menu-item index="/roles">角色管理</el-menu-item>
        <el-menu-item index="/permissions">权限管理</el-menu-item>
        <el-menu-item index="/users">用户管理</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>




    <el-menu-item index="/bbb">
      <el-icon><HomeFilled /></el-icon>
      <template #title>bbb</template>
    </el-menu-item>

    <el-menu-item index="/login">
      <el-icon><HomeFilled /></el-icon>
      <template #title>login</template>
    </el-menu-item>

  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  HomeFilled,
  Setting,
  Location,
} from '@element-plus/icons-vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 400px;
}
</style>
