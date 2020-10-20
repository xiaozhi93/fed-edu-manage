<template>
  <el-form>
  <el-card shadow="never">
    <el-form ref="spaceForm" :model="spaceForm">
      <el-form-item label="广告位名称" prop="name" label-width="150px">
        <el-input v-model="spaceForm.name" placeholder="请输入名称" :rules="[{required: true, message: '必填项', trigger: 'blur'}]"></el-input>
      </el-form-item>
      <el-form-item label-width="150px">
        <el-button type="primary" :loading="submitLoading" @click="saveOrUpdateSpace">提交</el-button>
        <el-button v-if="!isEdit" @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  </el-form>
</template>
<script lang="ts">
import Vue from 'vue'
import { saveOrUpdateSpace, getSpacesById } from '@/services/advert'
import { Form } from 'element-ui'
export default Vue.extend({
  name: 'CreateOrEditSpace',
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      spaceForm: {
        name: ''
      },
      submitLoading: false
    }
  },
  created () {
    this.loadSpaceInfo()
  },
  methods: {
    async loadSpaceInfo () {
      if (this.isEdit) {
        const { data } = await getSpacesById(this.$route.query.id as string)
        this.spaceForm = data.content
      }
    },
    async saveOrUpdateSpace () {
      this.submitLoading = true
      try {
        await (this.$refs.spaceForm as Form).validate()
        await saveOrUpdateSpace(this.spaceForm)
        this.$router.back()
      } catch (error) {

      } finally {
        this.submitLoading = false
      }
    },
    handleReset () {
      (this.$refs.spaceForm as Form).resetFields()
    }
  }
})
</script>
