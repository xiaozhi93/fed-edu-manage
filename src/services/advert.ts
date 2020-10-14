import request from '@/utils/request'
import qs from 'qs'

interface Space {
  id?: number;
  code: string;
  name: string;
  description?: string;
}

export function getAllSpaces () {
  return request({
    method: 'GET',
    url: '/front/ad/space/getAllSpaces'
  })
}

export function saveOrUpdateSpace (data: Space) {
  return request({
    method: 'POST',
    url: '/front/ad/space/saveOrUpdate',
    data
  })
}

export function getAdList () {
  return request({
    method: 'GET',
    url: '/front/ad/getAdList'
  })
}

export function saveOrUpdateAd (data: Space) {
  return request({
    method: 'POST',
    url: '/front/ad/saveOrUpdate',
    data
  })
}
