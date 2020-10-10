import request from '@/utils/request'

interface LoginParams {
  phone: string;
  password: string;
}

export function login (params: LoginParams) {
  return request({
    method: 'GET',
    url: '/front/user/login',
    params
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
    url: '/front/user/getInfo'
  })
}

export function refreshToken (params: { refreshtoken: string }) {
  return request({
    method: 'GET',
    url: '/front/user/refresh_token',
    params
  })
}
