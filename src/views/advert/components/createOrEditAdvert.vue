<template>
  <el-card shadow="never">
    <el-form ref="advertForm" :model="advertForm">
      <el-form-item label="广告名称" prop="name" label-width="150px">
        <el-input v-model="advertForm.name" placeholder="请输入名称" :rules="[{required: true, message: '必填项', trigger: 'blur'}]"></el-input>
      </el-form-item>
      <el-form-item label="广告位置" prop="name" label-width="150px">
        <el-input v-model="advertForm.name" placeholder="请输入名称" :rules="[{required: true, message: '必填项', trigger: 'blur'}]"></el-input>
      </el-form-item>
      <el-form-item label="开始时间" prop="name" label-width="150px">
        <el-input v-model="advertForm.name" placeholder="请输入名称" :rules="[{required: true, message: '必填项', trigger: 'blur'}]"></el-input>
      </el-form-item>
      <el-form-item label="到期时间" prop="name" label-width="150px">
        <el-input v-model="advertForm.name" placeholder="请输入名称" :rules="[{required: true, message: '必填项', trigger: 'blur'}]"></el-input>
      </el-form-item>
      <el-form-item label="上线/下线" prop="name" label-width="150px">
        <el-input v-model="advertForm.name" placeholder="请输入名称" :rules="[{required: true, message: '必填项', trigger: 'blur'}]"></el-input>
      </el-form-item>
      <el-form-item label="广告图片" prop="name" label-width="150px">
        <el-input v-model="advertForm.name" placeholder="请输入名称" :rules="[{required: true, message: '必填项', trigger: 'blur'}]"></el-input>
      </el-form-item>
      <el-form-item label="广告链接" prop="name" label-width="150px">
        <el-input v-model="advertForm.name" placeholder="请输入名称" :rules="[{required: true, message: '必填项', trigger: 'blur'}]"></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="name" label-width="150px">
        <el-input v-model="advertForm.name" placeholder="请输入名称" :rules="[{required: true, message: '必填项', trigger: 'blur'}]"></el-input>
      </el-form-item>
      <el-form-item label-width="150px">
        <el-button type="primary" :loading="submitLoading" @click="saveOrUpdateSpace">提交</el-button>
        <el-button v-if="!isEdit" @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
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
      advertForm: {
        name: '',
        spaceId: undefined,
        startTime: null,
        endTime: null,
        status: 0,
        img: '',
        link: '',
        text: ''
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
        this.advertForm = data.content
      }
    },
    async saveOrUpdateSpace () {
      this.submitLoading = true
      try {
        await (this.$refs.advertForm as Form).validate()
        await saveOrUpdateSpace(this.advertForm)
        this.$router.back()
      } catch (error) {

      } finally {
        this.submitLoading = false
      }
    },
    handleReset () {
      (this.$refs.advertForm as Form).resetFields()
    }
  }
})
</script>
