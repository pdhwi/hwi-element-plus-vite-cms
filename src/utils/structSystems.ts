export interface HwiSysStruct {
    struct:Object,
    addStruct:Object,
    editStruct:Object,
    meaning:Object,
    topItems:Array<any>,
    searchfrom:Array<any>,
    searchData:Object,
}

export interface HwiSelectStruct {
    label: string
    value: number | string | boolean
    disabled: boolean
}

const hwiSystems = {
     RoleStruct: {
        struct: {
        },
        addStruct: {
            cn_name:'INPUT',
            name:'INPUT',
        },
        editStruct: {
            cn_name:'INPUT',
            name:'INPUT',
        },
        meaning: {
            id:'序号',
            cn_name:'角色名称',
            name:'name',
        },
        topItems: [
            {
                key:'cn_name',
                value:'角色名称',
                type:'input',
            },
            {
                key:'name',
                value:'name',
                type:'text',
            }
        ],
        searchfrom: [
            /* {
                key:'projectIds',
                name:'项目',
                value:0,
                type:'SELECT',
                selectArr:[
                    {key:0,v:'全部'},
                ],
           }, */
            {
                key: 'cn_name',
                name: '角色名',
                value: '',
                type: 'INPUT'
            }
        ],
        searchData: {
            cn_name:'',
        }
    },
    permissionStruct:{
        struct: {
        },
        addStruct: {
            cn_name:'INPUT',
            name:'INPUT',
            p_id:'SELECT',
        },
        editStruct: {
            cn_name:'INPUT',
            name:'INPUT',
            p_id:'SELECT',
        },
        meaning: {
            id:'序号',
            cn_name:'权限名称',
            name:'name',
            p_id:'上级分类',
        },
        topItems: [
            {
                key:'p_id_name',
                value:'上级分类',
                type:'text',
            },
            {
                key:'name',
                value:'name',
                type:'input',
            },{
                key:'cn_name',
                value:'权限名称',
                type:'input',
            }
        ],
        searchfrom: [
            {
                key:'cn_name',
                name:'权限名称',
                value:'',
                type:'INPUT',
            },
            {
                key:'p_id',
                name:'上级分类',
                selectArr:[
                    {label:'全部',value:''},
                ],
                value:0,
                type:'SELECT',
            }
        ],
        searchData: {
            cn_name:'',
            p_id:'',
        }
    },
    usersStruct:{
        struct: {
        },
        addStruct: {
            name:'INPUT',
            password:'INPUT',
            roles:'CHECKBOX',
        },
        editStruct: {
            name:'INPUT',
            password:'INPUT',
            roles:'CHECKBOX',
        },
        meaning: {
            id:'序号',
            name:'name',
            password:'密码',
            roles:'角色',
        },
        topItems: [
            {
                key:'name',
                value:'name',
                type:'TEXT',
            }
        ],
        searchfrom: [
            {
                key:'name',
                name:'账号',
                value:'',
                type:'INPUT',
            }
        ],
        searchData: {
            name:'',
        }
    },
};
export default hwiSystems
