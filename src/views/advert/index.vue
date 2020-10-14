<template>
  <section class="advert course">
    <el-form :inline="true" class="page-filter">
      <el-form-item class="page-filter-btn">
        <el-button type="primary">添加广告</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%" class="page-table">
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="name" label="广告名称"> </el-table-column>
      <el-table-column prop="address" label="广告位置"> </el-table-column>
      <el-table-column prop="name" label="广告图片"> </el-table-column>
      <el-table-column prop="address" label="时间"> </el-table-column>
      <el-table-column prop="name" label="上线/下线"> </el-table-column>
      <el-table-column prop="address" label="操作">
        <template>
          <el-button type="text">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AdvertPage',
  data () {
    return {
      tableData: [
      ]
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
