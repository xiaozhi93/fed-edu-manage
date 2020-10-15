<template>
  <section class="page advert-space">
    <el-form :inline="true" class="page-filter">
      <el-form-item class="page-filter-btn">
        <el-button type="primary" @click="$router.push({ name: 'advert-space-create'})">添加广告位</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%" class="page-table">
      <el-table-column prop="spaceKey" label="spaceKey" min-width="100px" align="center" header-align="center"> </el-table-column>
      <el-table-column prop="name" label="广告位名称" min-width="150px" align="center" header-align="center"> </el-table-column>
      <el-table-column prop="createTime" label="创建时间" min-width="150px" align="center" header-align="center"> </el-table-column>
      <el-table-column prop="updateTime" label="更新时间" min-width="150px" align="center" header-align="center"> </el-table-column>
      <el-table-column label="操作" width="90px" align="center" header-align="center">
         <template slot-scope="scope">
          <el-button type="text" @click="$router.push({ name: 'advert-space-edit', query: { id: scope.row.id }})">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { getAllSpaces } from '@/services/advert'
export default Vue.extend({
  name: 'AdvertSpacePage',
  data () {
    return {
      tableData: [
      ],
      loading: true
    }
  },
  created () {
    this.loadAdvertSpaceList()
  },
  methods: {
    async loadAdvertSpaceList () {
      this.loading = true
      const { data } = await getAllSpaces()
      this.tableData = data.content
      this.loading = false
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
