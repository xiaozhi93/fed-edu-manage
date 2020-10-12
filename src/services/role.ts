import request from '@/utils/request'
import qs from 'qs'

interface Role {
  id?: number;
  code: string;
  name: string;
  description?: string;
}

export function getRoleAll () {
  return request({
    method: 'GET',
    url: '/front/role/all'
  })
}

export function getRoleAllAndPermission (userId: number) {
  return request({
    method: 'GET',
    url: '/role/getRolesWithUserPermission',
    params: { userId }
  })
}

export function getRolePages (data: object) {
  return request({
    method: 'POST',
    url: '/role/getRolePages',
    data: qs.stringify(data)
  })
}

export function allocateRolesToUser (data: { userId: number; roleIdList: number[]}) {
  return request({
    method: 'POST',
    url: '/front/role/allocateUserRoles',
    data: qs.stringify(data)
  })
}

export function saveOrUpdateRole (data: Role) {
  return request({
    method: 'POST',
    url: '/role/saveOrUpdate',
    data: qs.stringify(data)
  })
}

export function deleteRole (id: number) {
  return request({
    method: 'DELETE',
    url: `/role/${id}`
  })
}

export function getRole (id: number) {
  return request({
    method: 'GET',
    url: `/role/${id}`
  })
}
export function getRolesByUser (userId: number) {
  return request({
    method: 'GET',
    url: `/role/user/${userId}`
  })
}
