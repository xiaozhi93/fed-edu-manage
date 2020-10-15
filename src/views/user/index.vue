<template>
  <section class="page course">
    <el-form :inline="true" :model="userFilter" class="page-filter">
      <el-form-item label="手机号" prop="phone">
        <el-input placeholder="请输入手机号" clearable v-model="userFilter.phone"></el-input>
      </el-form-item>
      <el-form-item label="注册时间" prop="createTime">
        <el-date-picker
          v-model="userFilter.createTime"
          clearable
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleFilter">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%" class="page-table">
      <el-table-column
        prop="id"
        label="ID"
        width="120px"
        align="center"
        header-align="center"
      >
      </el-table-column>
      <el-table-column
        prop="nportrait"
        label="头像"
        align="center"
        header-align="center"
      >
        <template slot-scope="scope">
          <el-avatar :src="scope.row.portrait || 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'"></el-avatar>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="用户名"
        align="center"
        header-align="center"
      >
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号"
        align="center"
        header-align="center"
      >
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="注册时间"
        align="center"
        header-align="center"
      >
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        align="center"
        header-align="center"
      >
      </el-table-column>
      <el-table-column label="操作" align="center" header-align="center">
        <template slot-scope="scope">
          <el-row>
            <el-button type="text">禁用</el-button>
            <el-button type="text" @click="addRoleToUser(scope.row.id)">分配角色</el-button>
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
      :total="total"
    >
    </el-pagination>
    <el-dialog
      title="分配角色"
      :visible.sync="dialogVisible"
      width="30%"
      >
      <el-select v-model="addRoleForm.roleIdList" multiple style="width: 100%">
        <el-option v-for="item in roleAll" :key="item.id" :value="item.id" :label="item.name"></el-option>
      </el-select>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" :loading="submitLoading" @click="submitRoleToUser">确 定</el-button>
      </span>
    </el-dialog>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { getUserPages } from '@/services/user'
import { getRoleAll, allocateRolesToUser, getRolesByUser } from '@/services/role'
export default Vue.extend({
  name: 'UserPage',
  data () {
    return {
      tableData: [],
      userFilter: {
        currentPage: 1,
        pageSize: 10,
        phone: undefined,
        createTime: [],
        startCreateTime: undefined,
        endCreateTime: undefined
      },
      total: 0,
      loading: false,
      dialogVisible: false,
      roleAll: [],
      addRoleForm: {
        userId: null,
        roleIdList: []
      },
      submitLoading: false
    }
  },
  created () {
    this.loadUserList()
  },
  methods: {
    async loadUserList () {
      this.loading = true
      try {
        const { createTime, ...rest } = this.userFilter
        if (createTime && createTime.length) {
          rest.startCreateTime = createTime[0]
          rest.endCreateTime = createTime[1]
        }
        const { data } = await getUserPages(rest)
        this.tableData = data.data.records
        this.total = data.data.total
      } catch (error) {

      } finally {
        this.loading = false
      }
    },
    // handleReset () {
    //   (this.$refs.filterForm as Form).resetFields()
    // },
    async addRoleToUser (id: any) {
      const [{ data: roleAll }, { data: userRoles }] = await Promise.all([getRoleAll(), getRolesByUser(id)])
      this.roleAll = roleAll.data
      this.addRoleForm.roleIdList = userRoles.data.map((item: any) => item.id)
      // TODO
      this.addRoleForm.userId = id
      this.dialogVisible = true
    },
    async submitRoleToUser () {
      this.submitLoading = true
      try {
        await allocateRolesToUser(this.addRoleForm)
        this.loadUserList()
        this.dialogVisible = false
      } catch (error) {

      } finally {
        this.submitLoading = false
      }
    },
    async handleFilter () {
      this.userFilter.currentPage = 1
      await this.loadUserList()
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
