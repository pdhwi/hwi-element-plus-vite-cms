<template>
  <div class="common-layout hwi-layout">
    <el-container>
      <el-header>
        <BaseHeader></BaseHeader>
      </el-header>
      <el-container>
        <el-aside >
          <BaseSide></BaseSide>
        </el-aside>
        <el-main>
         <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts" name="layout">
//roles.vue-2023-04-19-16:36

</script>

<style scoped>
  .hwi-layout .el-aside{
    width: auto;
  }
</style>