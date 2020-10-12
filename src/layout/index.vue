<template>
  <el-container class="app-container">
    <app-aside></app-aside>
    <el-container>
      <el-header class="app-header">
        <app-header></app-header>
      </el-header>
      <el-main class="app-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import Vue from 'vue'
import AppAside from './components/app-aside.vue'
import AppHeader from './components/app-header.vue'
export default Vue.extend({
  name: 'AppLayout',
  components: {
    AppAside,
    AppHeader
  }
})
</script>
<style lang="scss" scoped>
.app-container {
  height: 100vh;
  min-width: 980px;
}

</style>
