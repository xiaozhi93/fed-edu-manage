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
      <el-table-column prop="spaceName" label="广告位置" min-width="120px" align="center" header-align="center"> </el-table-column>
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
      <el-table-column prop="status" label="上线/下线" min-width="120px" align="center" header-align="center">
        <template slot-scope="scope">
          <el-switch
            :value="scope.row.status"
            :active-value="1"
            :inactive-value="0"
            active-color="#13ce66"
            @change="handleChangeStatus(scope.row)"
            >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作" min-width="80px" align="center" header-align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="$router.push({ name: 'advert-edit', query: { id: scope.row.id } })">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { getAllSpaces, getAdList, updateAdStatus } from '@/services/advert'
interface AdvertResponse {
  content: { spaceId: number; spaceName?: string }[];
}
interface SpaceResponse {
  content: Array<{ id: number; name: string }>;
}
interface Advert {
  spaceId: number;
  spaceName?: string;
}
interface Space {
  id: number;
  name: string;
}
export default Vue.extend({
  name: 'AdvertPage',
  data () {
    return {
      adverSpaceList: [],
      tableData: [
      ],
      loading: false
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
      this.loading = true
      const { data } = await getAdList()
      data.content = data.content.map((item: any) => {
        const spaceInfo: any = this.adverSpaceList.find((i: Space) => i.id === item.spaceId)
        item.spaceName = spaceInfo === undefined ? '' : spaceInfo.name
        return item
      })
      this.tableData = data.content
      this.loading = false
    },
    async handleChangeStatus (row: { id: number; status: number }) {
      this.$confirm(`确定${row.status ? '下架' : '上架'}`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: async (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            try {
              await updateAdStatus({ id: row.id, status: row.status ? 0 : 1 })
              done()
            } catch (error) {} finally {
              instance.confirmButtonLoading = false
            }
          } else {
            done()
          }
        }
      }).then(async () => {
        this.loadAdvertList()
        this.$message({
          type: 'success',
          message: '成功!'
        })
      })
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
