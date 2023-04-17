import request from '~/utils/request'

export function userLogin (data) {
    return request({
        url: 'api/login',
        method: 'post',
        data: data
    })
}

export function userSLogin (data) {
    return request({
        url: 'api/admin/login',
        method: 'post',
        data: data
    })
}

export function userLogout () {
    return request({
        url: 'api/logout',
        method: 'get',
    })
}

