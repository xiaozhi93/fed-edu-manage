<template>
  <section class="page course">
    <el-form :inline="true" class="page-filter">
      <el-form-item label="手机号">
        <el-input placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="注册时间">
        <el-select>
          <el-option value="">全部</el-option>
          <el-option :value="1">上架</el-option>
          <el-option :value="2">下架</el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button>查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%" class="page-table">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <el-pagination
      class="page-pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'UserPage',
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
      ],
      currentPage4: 1
    }
  },
  methods: {
    handleSizeChange (size) {
      console.log(size)
    },
    handleCurrentChange (page) {
      console.log(page)
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
