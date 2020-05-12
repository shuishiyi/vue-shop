<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avater_box">
        <img src="../assets/logo.png" alt />
      </div>
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="0px"
        class="login_form"
      >
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="iconfont icon-3702mima"
            type=""
          ></el-input>
        </el-form-item>

        <el-form-item class="btns">
          <el-button :plain="true" type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">再来</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLoginForm () {
      //   console.log(this)
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      // 预验证：el-form的实例方法
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return false
        const { data: res } = await this.$http.post('login', this.loginForm)
        // p.then(data => {
        //   console.log(data.data)
        // })
        if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
        this.$message.success(res.meta.msg)
        window.sessionStorage.setItem('token', res.data.token)
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avater_box {
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background: #eee;
  }
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box; //内容区（固定）包含padding border
}
.btns {
  //操作子元素
  display: flex;
  justify-content: center; //水平居中
  //   align-items: center;垂直居中
}
</style>
