<template>
  <el-breadcrumb separator="/">
     <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span v-if="index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script lang="ts">
import Vue from 'vue'
import { RawLocation, RouteRecord } from 'vue-router'
import { compile } from 'path-to-regexp'
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
      const matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    },
    handleLink (item: RouteRecord) {
      const { redirect } = item
      if (redirect) { // 重定向的
        this.$router.push(redirect as RawLocation)
        return
      }
      this.$router.push(item)
    }
  }
})
</script>
