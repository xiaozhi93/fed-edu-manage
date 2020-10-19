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

export function saveOrUpdateResource (data: any) {
  return request({
    method: 'POST',
    url: '/boss/resource/saveOrUpdate',
    data
  })
}

export function deleteResource (id: number) {
  return request({
    method: 'DELETE',
    url: `/boss/resource/${id}`
  })
}

export function getResource (id: number) {
  return request({
    method: 'GET',
    url: `/boss/resource/${id}`
  })
}
