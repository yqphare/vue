<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>工资管理系统</span>
      </div>
      <el-form :model="form" ref="form" label-width="80px">
        <el-form-item label="用户名" prop="username" :rules="[
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 4, max: 10, message: '长度在4-10位字符' },
        ]">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass" :rules="[
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在6-12位字符' },
        ]">
          <el-input type="password" v-model="form.pass" show-password></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submit('form')">登录</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { login } from '../api/api';
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        pass: "",
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {

    },
    submit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          login(this.form)
            .then(res => {
              console.log(res);
              if (res.data.length === 1) {
                localStorage.setItem("userName", res.data[0].username);
                this.$router.push("/home");
                this.$notify({
                  title: '登录成功',
                  message: '欢迎 ' + res.data[0].username,
                  type: 'success',
                  offset: 100
                });
              } else {
                this.$message.error("账号或密码错误，请重新输入！")
              }
            })
            .catch(err => {
              this.$message.error("登录失败");
            })
        } else {
          this.$message.error("登录失败");
        }
      });
    },
    resetForm(form) {
      this.$refs[form].resetFields();
    },
  },
  mounted() { },
  computed: {},
};
</script>
<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #409eff;

  .box-card {
    width: 450px;
    margin: 200px auto;

    .el-card__header {
      font-size: 34px;
    }

    .el-button {
      width: 47%;
    }
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
    clear: both;
  }
}
</style>
