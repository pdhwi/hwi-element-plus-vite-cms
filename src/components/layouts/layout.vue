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

<script>
export default {
  name: "layout"
}
</script>

<style scoped>
  .hwi-layout .el-aside{
    width: auto;
  }
</style>