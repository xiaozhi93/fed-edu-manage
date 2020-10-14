<template>
  <section class="advert course">
    <el-form :inline="true" class="page-filter">
      <el-form-item class="page-filter-btn">
        <el-button type="primary" @click="$router.push({ name: 'advert-create'})">添加广告</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%" class="page-table">
      <el-table-column prop="id" label="ID" width="90px" align="center" header-align="center"> </el-table-column>
      <el-table-column prop="name" label="广告名称" min-width="150px" align="center" header-align="center"> </el-table-column>
      <el-table-column prop="address" label="广告位置" min-width="120px" align="center" header-align="center"> </el-table-column>
      <el-table-column prop="name" label="广告图片" min-width="120px" align="center" header-align="center">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="" style="height: 80px" srcset="">
        </template>
      </el-table-column>
      <el-table-column prop="address" label="时间" min-width="160px" align="center" header-align="center">
        <template slot-scope="scope">
          <el-row>开始时间： {{ scope.row.startTimeFormatString }}</el-row>
          <el-row>结束时间： {{ scope.row.endTimeFormatString }}</el-row>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="上线/下线" min-width="120px" align="center" header-align="center"> </el-table-column>
      <el-table-column prop="address" label="操作" min-width="80px" align="center" header-align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="$router.push({ name: 'advert-edit', query: scope.row.id })">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { getAllSpaces, getAdList } from '@/services/advert'
export default Vue.extend({
  name: 'AdvertPage',
  data () {
    return {
      adverSpaceList: [],
      tableData: [
      ]
    }
  },
  async created () {
    await this.loadAdvertSpaceList()
    this.loadAdvertList()
  },
  methods: {
    async loadAdvertSpaceList () {
      const { data } = await getAllSpaces()
      this.adverSpaceList = data.content
    },
    async loadAdvertList () {
      const { data } = await getAdList()
      this.tableData = data.content
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
