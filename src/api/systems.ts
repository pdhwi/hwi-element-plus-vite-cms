import request from '~/utils/request'

export function getSystemInfo () {
    return request({
        url: 'api/system',
        method: 'get',
        noPrompting: 1
    })
}


export function getRoles(data) {
    return request({
        url: 'api/roles',
        method: 'get',
        params: data,
        noPrompting: 1
    })
}

export function getRolesById( id ) {
    return request({
        url: 'api/roles/'+id,
        method: 'get',
        noPrompting: 1
    })
}

export function addRoles( data ) {
    return request({
        url: 'api/roles?',
        method: 'post',
        data: data,
    })
}

export function updateRoles( data , id ) {
    return request({
        url: 'api/roles/'+id,
        method: 'put',
        data: data,
    })
}


export function delRoles( id ) {
    return request({
        url: 'api/roles/'+id,
        method: 'delete',
    })
}


export function getPermissions( data ) {
    return request({
        url: 'api/permissions',
        method: 'get',
        params: data,
        noPrompting: 1
    })
}

export function updatePermissions( data , id ) {
    return request({
        url: 'api/permissions/'+id,
        method: 'put',
        data: data,
    })
}

export function addPermissions( data ) {
    return request({
        url: 'api/permissions',
        method: 'post',
        data: data,
    })
}

export function delPermissions( id ) {
    return request({
        url: 'api/permissions/'+id,
        method: 'delete',
    })
}



export function getUsers( data ) {
    return request({
        url: 'api/users',
        method: 'get',
        params: data,
        noPrompting: 1
    })
}

export function updateUsers( data , id ) {
    return request({
        url: 'api/users/'+id,
        method: 'put',
        data: data,
    })
}

export function addUsers( data ) {
    return request({
        url: 'api/users',
        method: 'post',
        data: data,
    })
}

export function delUsers( id ) {
    return request({
        url: 'api/users/'+id,
        method: 'delete',
    })
}


export function getUsersById( id ) {
    return request({
        url: 'api/users/'+id,
        method: 'get',
        noPrompting: 1
    })
}

export function setRPermissions( data , id ) {
    return request({
        url: 'api/set_roles_permissions/'+id,
        method: 'post',
        data: data,
    })
}

export function getRPermissions( id ) {
    return request({
        url: 'api/get_roles_permissions/'+id,
        method: 'get',
        noPrompting: 1
    })
}


