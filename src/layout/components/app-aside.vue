<template>
  <div class="aside">
    <el-menu
      :default-active="$route.name"
      class="el-menu-vertical-demo"
      background-color="#ffffff"
      text-color="#303133"
      active-text-color="#ffd04b"
      :router="true"
      >
      <el-submenu index="auth-manage">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
         <el-menu-item index="role" :route="{name: 'role'}">角色列表</el-menu-item>
          <el-menu-item index="menu" :route="{name: 'menu'}">菜单列表</el-menu-item>
          <el-menu-item index="resource" :route="{name: 'resource'}">资源列表</el-menu-item>
      </el-submenu>
      <el-menu-item index="home" :route="{name: 'home'}">
        <i class="el-icon-menu"></i>
        <span slot="title">课程管理</span>
      </el-menu-item>
      <el-menu-item index="user" :route="{name: 'user'}">
        <i class="el-icon-document"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-submenu index="advert-manage">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>广告管理</span>
        </template>
        <el-menu-item index="advert" :route="{name: 'advert'}">广告列表</el-menu-item>
          <el-menu-item index="advert-space" :route="{name: 'advert-space'}">广告位列表</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppAside'
})
</script>
<style lang="scss" scoped>
  .aside {
    .el-menu {
      min-height: 100vh;
    }
  }
</style>
