<template>
  <div class="login-container">
    <div class="homepage-hero-module">
      <div class="video-container">
        <div :style="fixStyle" class="filter"></div>
        <video :style="fixStyle" autoplay loop class="fillWidth" v-on:canplay="canplay">
          <source src="../../assets/login.mp4" type="video/mp4"/>
          浏览器不支持 video 标签，建议升级浏览器。
          <source src="../../assets/login.webp" type="video/webm"/>
          浏览器不支持 video 标签，建议升级浏览器。
        </video>
        <div class="poster hidden" v-if="!vedioCanPlay">
          <img :style="fixStyle" src="../../assets/login.webp" alt="">
        </div>
      </div>
    </div>
    <el-row justify="center" align="middle" type="flex" @keyup.enter="testaa" >
      <el-col :xs="22"  :sm="16" :md="12" :lg="4" class="hwilogin" >
        <el-form  label-position="right" :model="hwiFrom">
          <h1 class="cms-name" >{{cmsName}}</h1>
          <el-form-item >
            <el-input placeholder="账号" v-model="hwiFrom.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" placeholder="密码" v-model="hwiFrom.password">
              <template #append>
                <el-button :icon="Right"  @keyup.enter.native="handleLogin" @click.native.prevent="handleLogin"   style="color: #fff" />
              </template></el-input>
          </el-form-item>
<!--          <el-button :loading="loading"  style="width:100%;" @keyup.enter.native="handleLogin"  type="primary"  @click.native.prevent="handleLogin">登录</el-button>-->
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="login">
  //login.vue-2023-04-11-12:04
  import {reactive, ref} from "vue";
  import { Right } from '@element-plus/icons-vue'
  import {configStore} from "~/store/hwiConfig"
  import {userLogin} from "~/api/users"
  import { setToken , setUser  } from '~/utils/auth'
  import { useRouter } from "vue-router";
  const router = useRouter();

  const hwiConfigStore = configStore()
  const imgSrc = "../assets/login.webp"
  let  fixStyle = ref("")
  let  vedioCanPlay = ref(false)
  let cmsName = ref("Hwi-cms")
  let hwiFrom = reactive({
    name: 'hwi',
    password: '123123',
  })
  function canplay () {
    vedioCanPlay.value = true
  }
  function testaa(){
    handleLogin()
  }

  function handleLogin(){
    userLogin(hwiFrom).then(response => {
      let data = response.data
      let code = data.code
      if (code !== hwiConfigStore.successCode ) {
        hwiFrom.password = ''
        return false
      }
      setToken(data.data.accessToken)
      data.data.name = data.data.account
      setUser(data.data)
      hwiConfigStore.hwiUser = data.data
      router.push('index')
    })

  }
</script>

<style lang="scss" scoped>

.homepage-hero-module,
.video-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.video-container .poster img,
.video-container video {
  z-index: 0;
  position: absolute;
}

.video-container .filter {
  z-index: 1;
  position: absolute;
}

.hwilogin{
  z-index:2;
  position:fixed;
  top:40%;
  text-align: center;
}

.hwilogin .el-form-item{
  :deep(.el-input__inner) {
    background-color: transparent;
    color: #fff;
  }

  :deep(.el-input__wrapper) ,  :deep(.el-input-group__append)  {
    background-color: transparent;
  }

}


 .hwilogin .el-form-item  .el-input__inner {
  background-color: transparent;
  color: #fff
}

 .hwilogin .el-input__wrapper{
   color: transparent;
 }

.hwilogin input::-webkit-input-placeholder{
  color:#fff !important;
}
.hwilogin input::-moz-placeholder{/* Mozilla Firefox 19+ */
  color:#fff !important;
}
.hwilogin input:-moz-placeholder{/* Mozilla Firefox 4 to 18 */
  color:#fff !important;
}
.hwilogin input:-ms-input-placeholder{/* Internet Explorer 10-11 */
  color:#fff !important;
}
.cms-name{
  color:#fff;
}
</style>
