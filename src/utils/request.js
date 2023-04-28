import axios from 'axios'
import { ElMessage } from "element-plus";
import {configStore} from "~/store/hwiConfig"
import { getToken, removeToken, removeUser } from '~/utils/auth'
import router from '~/router'
import common from '~/utils/common'
import getSign from '~/utils/sign'


// create an axios instance
const service = axios.create({
    baseURL: "http://localhost:8000/", // api 的 base_url
    //baseURL: window.Hwi.baseURL, // api 的 base_url
    timeout: 50000 // request timeout
})

const successCode = 200

// request interceptor
service.interceptors.request.use(
    config => {
        const hwiConfigStore = configStore()
        hwiConfigStore.bottomLoad = true
        hwiConfigStore.routerPath =router.currentRoute._value.path
        // Do something before request is sent
        if (hwiConfigStore.token) {
            // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
            config.headers['Accept'] = 'application/json'
            let token = getToken()
            token = token ? 'Bearer ' + getToken() : ''
            config.headers['Authorization'] = token
        }
        // 转换分页字段
        let params = config.params
        if (undefined !== params && params.size !== undefined) {
            config.params[ hwiConfigStore.pageKey ] = params.page
            config.params[ hwiConfigStore.sizeKey ] = params.size
            delete config.params.page
            delete config.params.size
        }
        //增加签名
        if(config.method ==='get'){
            config.params = getSign(config.data,hwiConfigStore.appKey)
        }else{
            config.data = getSign(config.data,hwiConfigStore.appKey)
        }
        /* if (config.method == 'get') {
          config.data = {hget:1}
        } */
        return config
    },
    error => {
        // Do something with request error
        // console.log(error) // for debug
        Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    // response => response,
    response => {
        const hwiConfigStore = configStore()

        hwiConfigStore.bottomLoad = false
        let result = response.data;
        let message = '';
        let action = ''
        let code = 0
        if (!result) {
            message = 'API未返回数据'
        } else if (!('code' in result)) {
            message = 'API返回错误数据'
        } else {
            message = result.msg
            code = result.code

            // 需要跳转的错误code
            switch (code) {
                // case 41001:
                case 401:
                    if (hwiConfigStore.routerPath !== '/login') { action = '/login' }
                    break
                case 20401:
                    if (hwiConfigStore.routerPath !== '/login') { action = '/login' }
                    ElMessage({
                        message: message,
                        type: code === successCode ? 'success' : 'error',
                        duration: 5 * 1000
                    })
                    removeToken()
                    removeUser()
                    break
                case 500:
                    ElMessage({
                        message: '服务器错误：' + message,
                        type: code === successCode ? 'success' : 'error',
                        duration: 5 * 1000
                    })
                    break
            }
        }

        // 转换列表数据结构
        let d = result.data
        if (d != null && undefined !== d.totalCount) {
            response.data.data = common.changeItemsStruct(d)
        }

        // 是否禁止弹出提示
        let config = response.config
        if (config.noPrompting !== 1) {
            ElMessage({
                message: message,
                type: code === successCode ? 'success' : 'error',
                duration: 5 * 1000
            })
        }

        if (action) {
            router.push(action)
        }

        if (code === 0) {
            return Promise.reject(response)
        } else if (successCode !== code) {
            // hwiConfigStore.dispatch('setBottomLoadStatus')
        }
        return response
    },
    error => {
        const hwiConfigStore = configStore()

        hwiConfigStore.bottomLoad = false
        let result = error.response
        console.log(error)
        console.log(result)
        if (!result || result === 'undefined') {
            ElMessage({
                message: '请求失败',
                type: 'error',
                duration: 5 * 1000
            })
            return false
        }
        let httpcode = error.response.status
        let headers = error.response.headers
        let data = error.response.data
        let message = error.message
        let restfulApi = 'restfulapi' in headers ? headers.restfulapi : 0
        if (!data) {
            message = 'api请求失败'
        } else if ('message' in data) {
            message = data.message
        }
        ElMessage({
            message: message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(data)
    }
)

export default service
