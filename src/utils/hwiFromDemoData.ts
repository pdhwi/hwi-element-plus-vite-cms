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
            select: 'SELECT',
            multiple:'SELECT_MULTIPLE',
            multiple_collapse:'SELECT_MULTIPLE_COLLAPSE'
        },
        editStruct: {
            select: 'SELECT',
            multiple:'SELECT_MULTIPLE_COLLAPSE',
            multiple_collapse:'SELECT_MULTIPLE_COLLAPSE'
        },
        meaning: {
            id: '序号',
            select: 'select',
            multiple: 'multiple',
            multiple_collapse: 'multiple_collapse',
        },
        topItems: [
            {
                key: 'zone',
                value: 'zone',
                type: 'text',
            }
        ],
        searchfrom: [
            {
                key: 'select',
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
        "select": 1,
        "multiple": [],
        "multiple_collapse":[]
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
    },
    demo3Struct: {
        struct: {},
        addStruct: {
            checkboxSingle: 'CHECKBOX-SINGLE',
            checkbox: 'CHECKBOX',
        },
        editStruct: {
            checkboxSingle: 'CHECKBOX-SINGLE',
            checkbox: 'CHECKBOX',
        },
        meaning: {
            id: '序号',
            checkbox: 'CHECKBOX',
            checkboxSingle: 'checkboxSingle',
        },
        topItems: [
            {
                key: 'zone',
                value: 'zone',
                type: 'text',
            }
        ],
        searchfrom: [
            {
                key: 'select',
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
    demo3FormData: {
        "checkbox": ["a"],
        "checkboxSingle": ["a"],
    },
    demo3Data: {
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
