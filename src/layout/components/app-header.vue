<template>
  <div class="header">
    <el-button type="text" class="hamburger" @click="toggleCollapse">
      <i class="el-icon-s-fold"></i>
    </el-button>
    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>
  <el-dropdown>
  <span class="el-dropdown-link">
    <el-avatar :src="userInfo.portrait || 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'"></el-avatar>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>{{ userInfo.userName }}</el-dropdown-item>
    <el-dropdown-item divided @click.native="handleLogout">登出</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

  </div>
</template>
<script>
import Vue from 'vue'
import { getInfo } from '@/services/user'
export default Vue.extend({
  name: 'AppHeader',
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    this.loadUserInfo()
  },
  methods: {
    toggleCollapse () {
      this.$store.commit('setIsCollapse', !this.$store.state.isCollapse)
    },
    async loadUserInfo () {
      const { data } = await getInfo()
      this.userInfo = data.content
    },
    handleLogout () {
      this.$confirm('确认退出吗？', '退出提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.commit('setUser', null)
        this.$router.push({
          name: 'login'
        })
      })
    }
  }
})
</script>
<style lang="scss" scoped>
  .header {
    height: 100%;
    margin: 0 -20px;
    display: flex;
    align-items: center;
    background: #ffffff;
    .hamburger {
      font-size: 20px;
      margin-right: 10px;
      padding: 15px 20px;
    }
    .el-dropdown {
      margin-left: auto;
    }
  }
</style>
