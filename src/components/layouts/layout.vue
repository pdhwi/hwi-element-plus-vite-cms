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
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts" name="layout">
//layout.vue-2023-04-19-16:36

//设置页面Class
</script>

<style scoped>
  .hwi-layout .el-aside{
    width: auto;
  }

  .hwi-layout .hwi-pagination {
    position: absolute;
    bottom: 15px;
    background-color: #fff;
    z-index: 99;
    border-top: 1px solid #e4e7ed;
    width: 96%;
  }

</style>