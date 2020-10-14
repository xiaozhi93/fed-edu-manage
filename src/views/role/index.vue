<template>
  <section class="page role">
    <el-form :inline="true" :model="filterForm" class="page-filter">
       <el-form-item label="角色名称" prop="name">
        <el-input placeholder="角色名称" clearable  v-model="filterForm.name"></el-input>
      </el-form-item>
       <el-form-item>
        <el-button type="primary" :loading="loading" @click="handleFilter">查询</el-button>
      </el-form-item>
      <el-form-item class="page-filter-btn">
        <el-button type="primary">添加角色</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" v-loading="loading" border style="width: 100%">
      <el-table-column prop="code" label="编号" width="180"> </el-table-column>
      <el-table-column prop="name" label="角色名称" width="180">
      </el-table-column>
      <el-table-column prop="description" label="描述"> </el-table-column>
      <el-table-column prop="createdTime" label="添加时间"> </el-table-column>
      <el-table-column label="操作">
        <template v-slot="scope">
          <el-row>
            <el-button type="text" @click="$router.push({ name: 'role-menu', query: { roleId: scope.row.id}})">
              分配菜单
            </el-button>
            <el-button type="text" @click="$router.push({ name: 'role-resource', query: { roleId: scope.row.id}})">
              分配资源
            </el-button>
          </el-row>
          <el-row>
            <el-button type="text">
              编辑
            </el-button>
            <el-button type="text" @click="deleteRole(scope.row.id)">
              删除
            </el-button>
          </el-row>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { getRolePages, deleteRole, saveOrUpdateRole } from '@/services/role'
export default Vue.extend({
  name: 'RolePage',
  data () {
    return {
      tableData: [],
      total: 0,
      loading: false,
      filterForm: {
        current: 1,
        size: 10,
        name: ''
      },
      roleForm: {
        name: '',
        code: '',
        description: ''
      },
      submitLoading: false
    }
  },
  created () {
    this.loadRoleList()
  },
  methods: {
    async loadRoleList () {
      const { data } = await getRolePages(this.filterForm)
      this.tableData = data.data.records
      this.total = data.data.total
    },
    async handleFilter () {
      this.loading = true
      try {
        this.loadRoleList()
      } catch (error) {
      } finally {
        this.loading = false
      }
    },
    async createOrUpdateRole () {
      this.submitLoading = true
      try {
        await saveOrUpdateRole(this.roleForm)
      } catch (error) {

      } finally {
        this.submitLoading = false
      }
    },
    deleteRole (roleId: number) {
      this.$confirm('确定要删除吗', '删除提示', {
        type: 'warning'
      }).then(async () => {
        await deleteRole(roleId)
        this.$message.success('删除成功')
      })
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
