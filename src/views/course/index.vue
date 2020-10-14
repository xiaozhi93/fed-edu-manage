<template>
  <section class="page course">
    <el-form :inline="true" :model="courseFilter" class="page-filter">
      <el-form-item label="课程名称" prop="courseName">
        <el-input placeholder="课程名称" v-model="courseFilter.courseName"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="courseFilter.status" placeholder="全部">
          <el-option value="1">上架</el-option>
          <el-option value="0">下架</el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" @click="handleFilter">查询</el-button>
      </el-form-item>
      <el-form-item class="page-filter-btn">
        <el-button type="primary" @click="$router.push({name: 'course-create'})">新建课程</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%" class="page-table">
      <el-table-column prop="id" label="ID" width="100" align="center" header-align="center"> </el-table-column>
      <el-table-column prop="courseName" label="课程名称" align="center" header-align="center"> </el-table-column>
      <el-table-column prop="price" label="价格" align="center" header-align="center"> </el-table-column>
      <el-table-column prop="sortNum" label="排序" align="center" header-align="center"> </el-table-column>
      <el-table-column prop="status" label="状态" align="center" header-align="center"> </el-table-column>
      <el-table-column label="操作" align="center" header-align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="changeCourseStatus(scope.row)">上架</el-button>
          <el-button type="text">编辑</el-button>
          <el-button type="text">内容管理</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="page-pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="courseFilter.currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="courseFilter.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { getQueryCourses, changeCourseState } from '@/services/course'
export default Vue.extend({
  name: 'CoursePage',
  data () {
    return {
      tableData: [
      ],
      courseFilter: {
        courseName: undefined,
        currentPage: 1,
        pageSize: 10,
        status: undefined
      },
      total: 0,
      loading: false
    }
  },
  created () {
    this.loadCourseList()
  },
  methods: {
    async loadCourseList () {
      const { data } = await getQueryCourses(this.courseFilter)
      this.tableData = data.data.records
      this.total = data.data.total
    },
    async handleFilter () {
      this.loading = true
      this.courseFilter.currentPage = 1
      await this.loadCourseList()
      this.loading = false
    },
    async changeCourseStatus (course: any) {
      this.$confirm('确定上架?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: async (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            try {
              await changeCourseState({ courseId: course.courseId, status: course.status })
              done()
            } catch (error) {} finally {
              instance.confirmButtonLoading = false
            }
          } else {
            done()
          }
        }
      }).then(async () => {
        this.loadCourseList()
        this.$message({
          type: 'success',
          message: '成功!'
        })
      })
    },
    handleSizeChange (size: number) {
      this.courseFilter.pageSize = size
      this.loadCourseList()
    },
    handleCurrentChange (current: number) {
      this.courseFilter.currentPage = current
      this.loadCourseList()
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
