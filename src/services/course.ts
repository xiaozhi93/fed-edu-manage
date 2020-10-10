import request from '@/utils/request'

interface CourseParams {
  currentPage: number;
  pageSize: number;
  courseName?: string;
  status?: string;
}

export function getQueryCourses (data: CourseParams) {
  return request({
    method: 'POST',
    url: '/boss/course/getQueryCourses',
    data
  })
}
