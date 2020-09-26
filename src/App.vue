<template>
  <div id="app">
    <h1>拉勾教育</h1>
    <router-view/>
  </div>
</template>
<script lang="ts">
// 1. 编辑器给的类型提示
// 2. typescirpt 编译期间的类型提示
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      a: 1
    }
  },
  methods: {
    test () {
      this.a.aaa()
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
