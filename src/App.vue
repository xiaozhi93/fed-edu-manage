<template>
  <div id="app">
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
    }
  },
  methods: {
  }
})
</script>
<style lang="scss" scoped>
h1 {
  color: $primary-color
}
</style>
