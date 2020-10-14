<template>
  <section class="page course">
    <el-form :inline="true" class="page-filter">
      <el-form-item label="手机号">
        <el-input placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="注册时间">
        <el-select>
          <el-option value="">全部</el-option>
          <el-option :value="1">上架</el-option>
          <el-option :value="2">下架</el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button>查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%" class="page-table">
      <el-table-column prop="id" label="ID" width="120px" align="center" header-align="center"> </el-table-column>
      <el-table-column prop="nportrait" label="头像" align="center" header-align="center"> </el-table-column>
      <el-table-column prop="name" label="用户名" align="center" header-align="center"> </el-table-column>
      <el-table-column prop="phone" label="手机号" align="center" header-align="center"> </el-table-column>
      <el-table-column prop="createTime" label="注册时间" align="center" header-align="center"> </el-table-column>
      <el-table-column prop="status" label="状态" align="center" header-align="center"> </el-table-column>
      <el-table-column label="操作" align="center" header-align="center">
        <template>
          <el-row>
            <el-button type="text">禁用</el-button>
            <el-button type="text">分配角色</el-button>
          </el-row>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="page-pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="userFilter.currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="userFilter.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { getUserPages } from '@/services/user'
export default Vue.extend({
  name: 'UserPage',
  data () {
    return {
      tableData: [
      ],
      userFilter: {
        currentPage: 1,
        pageSize: 10,
        phone: undefined,
        userId: undefined,
        startCreateTime: undefined,
        endCreateTime: undefined
      },
      total: 0,
      loading: false
    }
  },
  created () {
    this.loadUserList()
  },
  methods: {
    async loadUserList () {
      const { data } = await getUserPages(this.userFilter)
      this.tableData = data.data.records
      this.total = data.data.total
    },
    // handleReset () {
    //   (this.$refs.filterForm as Form).resetFields()
    // },
    async handleFilter () {
      this.loading = true
      this.userFilter.currentPage = 1
      await this.loadUserList()
      this.loading = false
    },
    handleSizeChange (size: number) {
      this.userFilter.pageSize = size
      this.loadUserList()
    },
    handleCurrentChange (current: number) {
      this.userFilter.currentPage = current
      this.loadUserList()
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
