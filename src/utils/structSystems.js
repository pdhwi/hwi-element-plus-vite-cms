const hwiSystems = {
    RoleStruct:{
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
        searchData: {
        }
    },
    permissionStruct:{
        struct: {
        },
        addStruct: {
            cn_name:'INPUT',
            name:'INPUT',
            pid:'SELECT',
        },
        editStruct: {
            cn_name:'INPUT',
            name:'INPUT',
            pid:'SELECT',
        },
        meaning: {
            id:'序号',
            cn_name:'权限名称',
            name:'name',
            pid:'上级ID',
        },
        topItems: [
            {
                key:'name',
                value:'name',
                type:'INPUT',
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
                key:'pid',
                name:'一级分类',
                selectArr:[
                    {key:'',v:'全部'},
                ],
                value:0,
                type:'SELECT',
            }
        ],
        searchData: {
            cn_name:'',
            pid:'',
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
