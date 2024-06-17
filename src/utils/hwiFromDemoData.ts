import hwiSystems from "~/utils/structSystems";

const hwiFromDemoData = {
    demo1Struct: {
        struct: {},
        addStruct: {
            cn_name: 'INPUT',
            name: 'INPUT',
        },
        editStruct: {
            cn_name: 'INPUT',
            name: 'INPUT',
        },
        meaning: {
            id: '序号',
            cn_name: '角色名称',
            name: 'name',
        },
        topItems: [
            {
                key: 'cn_name',
                value: '角色名称',
                type: 'input',
            },
            {
                key: 'name',
                value: 'name',
                type: 'text',
            }
        ],
        searchfrom: [
            {
                key: 'cn_name',
                name: '角色名',
                value: '',
                type: 'INPUT'
            }
        ],
        searchData: {
            cn_name: '',
        }
    },
    demo1FormData: {
        "cn_name": "cn_name1",
        "name": "name1"
    },
    demo1Data: {
        "code": 1,
        "msg": "Success",
        "data": {
            "total": 3,
            "per_page": 10,
            "current_page": 1,
            "last_page": 1,
            "data": [
                {
                    "cn_name": "cn_name1",
                    "name": "name1"
                },
                {
                    "cn_name": "cn_name2",
                    "name": "name2"
                },
                {
                    "cn_name": "cn_name3",
                    "name": "name3"
                }
            ]
        },
    },
    demo2Struct: {
        struct: {},
        addStruct: {
            cn_name: 'INPUT',
            name: 'INPUT',
            zone: 'SELECT',
        },
        editStruct: {
            cn_name: 'INPUT',
            name: 'INPUT',
            zone: 'SELECT',
        },
        meaning: {
            id: '序号',
            cn_name: '角色名称',
            name: 'name',
            zone: 'zone',
        },
        topItems: [
            {
                key: 'cn_name',
                value: '角色名称',
                type: 'input',
            },
            {
                key: 'name',
                value: 'name',
                type: 'text',
            },
            {
                key: 'zone',
                value: 'zone',
                type: 'text',
            }
        ],
        searchfrom: [
            {
                key: 'cn_name',
                name: '角色名',
                value: '',
                type: 'INPUT'
            },
            {
                key: 'zone',
                name: '区域',
                value: '',
                selectArr:[
                    {label:'全部',value:''},
                ],
                type: 'SELECT'
            },
        ],
        searchData: {
            cn_name: '',
        }
    },
    demo2FormData: {
        "cn_name": "cn_name2",
        "name": "name2",
        "zone": 1
    },
    demo2Data: {
        "code": 1,
        "msg": "Success",
        "data": {
            "total": 3,
            "per_page": 10,
            "current_page": 1,
            "last_page": 1,
            "data": [
                {
                    "cn_name": "cn_name1",
                    "name": "name1",
                    "zone": "zone1"
                },
                {
                    "cn_name": "cn_name2",
                    "name": "name2",
                    "zone": "zone2"
                },
                {
                    "cn_name": "cn_name3",
                    "name": "name3",
                    "zone": "zone3"
                }
            ]
        },
    }
}

export default hwiFromDemoData
