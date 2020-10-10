<template>
  <section class="login">
    <header>
      <h1>Edu boss管理系统</h1>
    </header>
    <el-form class="login-form" ref="form" :model="form" label-position="top">
      <h2>登录</h2>
      <el-form-item label="手机号" prop="phone" :rules="[{ required: true, message: '手机号必填', trigger: 'blur' }]">
        <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" :rules="[{ required: true, message: '密码必填', trigger: 'blur' }]">
        <el-input v-model="form.password"  placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-button" :loading="loading" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { login } from '@/services/user'
import { Form } from 'element-ui'
export default Vue.extend({
  name: 'LoginPage',
  data () {
    return {
      form: {
        phone: '',
        password: ''
      },
      loading: false
    }
  },
  methods: {
    async onSubmit () {
      this.loading = true
      try {
        await (this.$refs.form as Form).validate()
        const { data } = await login(this.form)
        if (data.state !== 1) {
          return this.$message.error(data.message)
        }
        this.$router.push({
          name: 'home'
        })
      } catch (e) {
      } finally {
        this.loading = false
      }
    }
  }
})
</script>
<style lang="scss" scoped>
.login {
  width: 90%;
  max-width: 22rem;
  margin: 1rem auto;
}
.login header {
  margin-bottom: 1rem;
  h1 {
    text-align: center;
    margin: 4rem 0;
  }
}
.login-form {
  background: #ffffff;
  padding: 20px;
}
.login-button {
  width: 100%;
}
</style>
