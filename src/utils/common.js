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
}
