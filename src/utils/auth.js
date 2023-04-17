import Cookies from 'js-cookie'

const TokenKey = 'hwicms-Token'
const UserKey  = 'hwicms-User'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

export function getUser() {
    var user =  Cookies.get(UserKey);
    return user?JSON.parse( user ):{};
}

export function setUser(token) {
    return Cookies.set(UserKey, token)
}

export function removeUser() {
    return Cookies.remove(UserKey)
}

