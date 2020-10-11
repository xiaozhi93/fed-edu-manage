import request from '@/utils/request'
import qs from 'qs'
import store from '@/store'

interface User {
  phone: string;
  password: string;
}

export function login (data: User) {
  return request({
    method: 'POST',
    url: '/front/user/login',
    data: qs.stringify(data)
  })
}

export function getUserPermissions () {
  return request({
    method: 'GET',
    url: '/boss/permission/getUserPermissions'
  })
}

export function getInfo () {
  return request({
    method: 'GET',
    url: '/front/user/getInfo',
    headers: {
      Authorization: store.state.user.access_token
    }
  })
}

export function refreshToken (params: { refreshtoken: string }) {
  return request({
    method: 'GET',
    url: '/front/user/refresh_token',
    params
  })
}
