import request from '@/utils/request'

export function getResourcePages (data: object) {
  return request({
    method: 'POST',
    url: '/boss/resource/getResourcePages',
    data
  })
}

export function getCateGoryAll () {
  return request({
    method: 'GET',
    url: '/boss/resource/category/getAll'
  })
}
