<template>
  <section class="advert course">
    <el-card>
      <el-form
        ref="filterForm"
        :inline="true"
        :model="filterForm"
        class="page-filter"
      >
        <el-form-item label="资源名称" prop="name">
          <el-input placeholder="资源名称" v-model="filterForm.name"></el-input>
        </el-form-item>
        <el-form-item label="资源路径" prop="url">
          <el-input placeholder="资源路径" v-model="filterForm.url"></el-input>
        </el-form-item>
        <el-form-item label="资源分类" prop="categoryId">
          <el-select v-model="filterForm.categoryId" placeholder="全部">
            <el-option
              :value="category.id"
              :label="category.name"
              v-for="category in categoryList"
              :key="category.id"
              >{{ category.name }}</el-option
            >
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="handleReset">重置</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleFilter">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
      <el-button>添加资源</el-button>
      <el-button>资源分类</el-button>
    </el-card>
    <el-table
      :data="tableData"
      v-loading="loading"
      border
      style="width: 100%"
      class="page-table"
    >
      <el-table-column prop="id" label="编号" width="150" align="center" header-align="center"> </el-table-column>
      <el-table-column prop="name" label="资源名称" align="center" header-align="center">
      </el-table-column>
      <el-table-column prop="url" label="资源路径" align="center" header-align="center"> </el-table-column>
      <el-table-column prop="description" label="描述" align="center" header-align="center"> </el-table-column>
      <el-table-column prop="createdTime" label="添加时间" align="center" header-align="center"> </el-table-column>
    </el-table>
    <el-pagination
      class="page-pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="filterForm.current"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="filterForm.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
    <el-dialog title="添加资源"></el-dialog>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { getResourcePages, getCateGoryAll } from '@/services/resource'
import { Form } from 'element-ui'
export default Vue.extend({
  name: 'ResourcePage',
  data () {
    return {
      loading: false,
      tableData: [],
      total: 0,
      filterForm: {
        current: 1,
        size: 10,
        name: null,
        url: null,
        categoryId: null
      },
      categoryList: []
    }
  },
  created () {
    this.loadResourceList()
    this.loadCateGoryAll()
  },
  methods: {
    async loadCateGoryAll () {
      const { data } = await getCateGoryAll()
      this.categoryList = data.data
    },
    async loadResourceList () {
      const { data } = await getResourcePages(this.filterForm)
      this.tableData = data.data.records
      this.total = data.data.total
    },
    handleReset () {
      (this.$refs.filterForm as Form).resetFields()
    },
    async handleFilter () {
      this.loading = true
      this.filterForm.current = 1
      await this.loadResourceList()
      this.loading = false
    },
    handleSizeChange (size: number) {
      this.filterForm.size = size
      this.loadResourceList()
    },
    handleCurrentChange (current: number) {
      this.filterForm.current = current
      this.loadResourceList()
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
