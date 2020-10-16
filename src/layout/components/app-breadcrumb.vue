<template>
  <el-breadcrumb separator="/">
     <el-breadcrumb-item v-for="(item) in levelList" :key="item.path">
        <!-- <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span> -->
        <a @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script lang="ts">
import Vue from 'vue'
import { RawLocation, RouteRecord } from 'vue-router'
import pathToRegexp from 'path-to-regexp'
const levelList: RouteRecord[] = [] // 给data的状态定义类型
export default Vue.extend({
  name: 'AppBreadcrumb',
  data () {
    return {
      levelList: levelList
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      // only show routes with meta.title
      const matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      // const first = matched[0]
      // if (!this.isDashboard(first)) {
      //   matched = [{ path: '/dashboard', meta: { title: 'Dashboard' } }].concat(matched)
      // }
      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    },
    pathCompile (path: string) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      const toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink (item: RouteRecord) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect as RawLocation)
        return
      }
      this.$router.push(this.pathCompile(path))
    }
  }
})
</script>
