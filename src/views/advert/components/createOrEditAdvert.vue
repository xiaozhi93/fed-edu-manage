<template>
  <el-card shadow="never">
    <el-form ref="advertForm" :model="advertForm">
      <el-form-item label="广告名称" prop="name" label-width="150px" :rules="[{required: true, message: '必填项', trigger: 'blur'}]">
        <el-input v-model="advertForm.name" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="广告位置" prop="spaceId" label-width="150px">
        <el-select v-model="advertForm.spaceId" placeholder="请选择位置">
          <el-option v-for="item in spaceList" :key="item.id" :value="item.id" :label="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="开始时间" prop="startTime" label-width="150px">
         <el-date-picker
          v-model="advertForm.startTime"
          type="date"
          placeholder="选择日期">
    </el-date-picker>
      </el-form-item>
      <el-form-item label="到期时间" prop="name" label-width="150px">
         <el-date-picker
          v-model="advertForm.endTime"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="上线/下线" prop="status" label-width="150px">
        <el-radio-group v-model="advertForm.status">
          <el-radio :label="1">下线</el-radio>
          <el-radio :label="0">上线</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="广告图片" prop="img" label-width="150px">
        <el-upload
        action="/boss/course/upload"
        list-type="picture-card"
        :limit="1"
        :file-list="advertForm.img"
        :on-exceed="handleExceed"
        :before-upload="handleFilter"
        :on-success="handleSuccess"
        :on-remove="handleRemove"
        :before-remove="handleRemoveBefore">
        <el-button type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">建议尺寸：230*300px，JPG、PNG格式，图片小于150K</div>
      </el-upload>
      </el-form-item>
      <el-form-item label="广告链接" prop="link" label-width="150px">
        <el-input v-model="advertForm.link" placeholder="请输入链接" :rules="[{required: true, message: '必填项', trigger: 'blur'}]"></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="name" label-width="150px">
        <el-input type="textarea" v-model="advertForm.text" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label-width="150px">
        <el-button type="primary" :loading="submitLoading" @click="saveOrUpdateAdvert">提交</el-button>
        <el-button v-if="!isEdit" @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script lang="ts">
import Vue from 'vue'
import { saveOrUpdateAd, getAdInfo, getAllSpaces } from '@/services/advert'
// import { upload } from '@/services/common'
import { Form } from 'element-ui'
interface UploadResponse {
  url: string;
  response?: { data: { name: string } };
}
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
        spaceId: null,
        startTime: null,
        endTime: null,
        status: 0,
        img: [],
        link: '',
        text: ''
      },
      spaceList: [],
      submitLoading: false
    }
  },
  created () {
    this.loadAdvertSpaceList()
    this.loadAdInfo()
  },
  methods: {
    async loadAdvertSpaceList () {
      const { data } = await getAllSpaces()
      this.spaceList = data.content
    },
    async loadAdInfo () {
      if (this.isEdit) {
        const { data } = await getAdInfo(this.$route.query.id as string)
        const { img, ...rest } = data.content

        this.advertForm = { ...rest, img: [{ url: img }] }
      }
    },
    async handleUpload (ctx: any) {
      console.log(ctx)
      const formData = new FormData()
      formData.append('file', ctx.file)
      // try {
      //   const { data } = await upload(formData)
      //   ctx.onSuccess(data.data)
      // } catch (error) {

      // }
    },
    handleFilter (file: any) {
      const isJPG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'
      const isLt150K = file.size / 1024 < 150

      if (!isJPG && !isPNG) {
        this.$message.error('上传头像图片只能是 JPG或PNG 格式!')
      }
      if (!isLt150K) {
        this.$message.error('上传头像图片大小不能超过 150KB!')
      }
      return isJPG && isLt150K
    },
    handleExceed () {
      this.$message.warning('当前限制选择 1 个文件，请移除文件再上传')
    },
    handleRemoveBefore () {
      return this.$confirm('确定移除 该文件吗？')
    },
    handleRemove (file: any, fileList: any) {
      this.$set(this.advertForm, 'img', fileList)
    },
    handleSuccess (response: any, file: any, fileList: any) {
      if (response) {
        this.$set(this.advertForm, 'img', fileList)
      }
    },
    async saveOrUpdateAdvert () {
      this.submitLoading = true
      try {
        await (this.$refs.advertForm as Form).validate()
        const { img, ...rest } = this.advertForm
        const image: UploadResponse = img[0]
        await saveOrUpdateAd({ ...rest, img: image.response ? image.response.data.name : image.url })
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
