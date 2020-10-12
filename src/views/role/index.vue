<template>
  <section class="page role">
    <el-form :inline="true" class="page-filter">
       <el-form-item label="角色名称">
        <el-input placeholder="角色名称"></el-input>
      </el-form-item>
       <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
      <el-form-item class="page-filter-btn">
        <el-button type="primary">添加角色</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="编号" width="180"> </el-table-column>
      <el-table-column prop="name" label="角色名称" width="180">
      </el-table-column>
      <el-table-column prop="address" label="描述"> </el-table-column>
      <el-table-column prop="address" label="添加世间"> </el-table-column>
      <el-table-column label="操作"> </el-table-column>
    </el-table>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import {} from '@/services/'
export default Vue.extend({
  name: 'RolePage',
  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
