<template>
  <div class="common-layout">
    <el-container>
      <el-aside >
        <BaseSide />
      </el-aside>
      <el-container>
        <el-header>
          <BaseHeader />
        </el-header>
        <el-main>
          <div>
            <img alt="Vue logo" class="element-plus-logo" src="./assets/logo.png" />
            <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite" />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.element-plus-logo {
  width: 50%;
}
</style>
