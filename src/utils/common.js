// 公共类 2019-03-28 Hwi
//
export default {
    installForm: function (formStruct) {
        let result = {}
        for (let key in formStruct) {
            result[ key ] = ''
        }
        return result
    },
    changeItemsStruct: function (items) {
        let result = {
            'total': 0,
            'per_page': 0,
            'current_page': 0,
            'last_page': 0,
            'data': []
        }
        result.total = items.totalCount
        result.per_page = items.pageSize
        result.current_page = items.pageIndex
        result.last_page = items.totalPages
        result.data = items.items
        return result
    },
    installSelect: function ( arr , defaultName , type ) {
        let a = defaultName === "" ? []:[
            { value: 0, label: defaultName }
        ]
        for (let key in arr) {
            a.push( type ? { value: arr[key], label: arr[key] }:{ value: key, label: arr[key] } )
        }
        return a
    },
    defaultImport: function ( arr , defaultName , type ) {
        let a = defaultName === "" ? []:[
            { value: 0, label: defaultName }
        ]
        for (let key in arr) {
            a.push( type ? { value: arr[key], label: arr[key] }:{ value: key, label: arr[key] } )
        }
        return a
    },
    getSign: function(appKey){
        //封装sign
        let signData ={
            time:0,
            app_key:1,
            sign:""
        }
        let t = new Date
        let signStr = ""
        signData.time = parseInt(t.getTime()/1000)
        let rangdstr = this.GetRandStr(signData.time , appKey)
        let sortD = Object.keys(signData).sort()
        sortD.forEach(k =>{
            if( "sign" !== k  ){
                signStr += k+""+signData[k]
            }
        })
        signStr += rangdstr
        return  signStr.toLocaleUpperCase()
    },
    GetRandStr: function  (t , k){
        let str = ""+t
        str = str.slice(str.length-1 )
        return k.slice( str , 1  )
    }
}
