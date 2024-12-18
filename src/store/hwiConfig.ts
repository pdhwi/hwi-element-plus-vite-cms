import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const configStore = defineStore('hwiConfig', {
    // other options...
    state: () => {
        return {
            // 所有这些属性都将自动推断其类型
            successCode: 1,
            structName: '',
            //baseURL: 'http://localhost:8000/',
            baseURL: 'http://43.139.6.210:7710/',
            imgBaseURL: 'http://server-api.qm.com/storage/',
            signalrUrl: 'http://***********',
            cmsName: 'Hwi-cms',
            routerPath: '/',
            restfulApi: true,
            bottomLoad: false,
            bottomSize: '',
            hwiUser: "",
            mainTitle: 'Hwi-cms',
            searchType: '1',
            pageKey: 'page',
            sizeKey: 'size',
            page: 1,
            size: 10,
            hasBack: false,
            hwiPageConfig: {
                selectList: [10, 20, 30, 50],
                perPage: 10
            },
            appKey:"FHuxSdi27I",
            addDataConfig : {
                addUrl: 'function',
                addName: 'name',
                editName: 'name',
                dialogWidth:'60%',
            },
            itemsResultStr : {
                current_page: 0,
                data: [],
                last_page:1,
                per_page:10,
                total:0,
            },
            defaultData:true,
            freeRoute: {
                'login': 1,
                '404': 1,
            }
        }
    },
    getters: {
        token () {
            return 1
        }
    },

})