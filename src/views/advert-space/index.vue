<template>
  <section class="page advert-space">
    <el-form :inline="true" class="page-filter">
      <el-form-item class="page-filter-btn">
        <el-button type="primary">添加广告位</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%" class="page-table">
      <el-table-column prop="spaceKey" label="spaceKey"> </el-table-column>
      <el-table-column prop="name" label="广告位名称"> </el-table-column>
      <el-table-column prop="createTime" label="创建时间"> </el-table-column>
      <el-table-column prop="updateTime" label="更新时间时间"> </el-table-column>
      <el-table-column label="操作">
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
  name: 'AdvertSpacePage',
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
