import request from '@/utils/request'
import qs from 'qs'

interface LoginParams {
  phone: string;
  password: string;
}

export function login (data: LoginParams) {
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
