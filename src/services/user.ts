import request from '@/utils/request'

export function login (data: Record<string, any>) {
  return request({
    method: 'POST',
    url: '/',
    data
  })
}
