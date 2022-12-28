<template>
  <div class='workList'>
    <div>
      <el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline" size="small">
        <el-form-item label="姓名" prop="user">
          <el-input v-model="formInline.user" placeholder="请输入姓名查询"></el-input>
        </el-form-item>
        <el-form-item label="学号" prop="id">
          <el-input v-model="formInline.id" placeholder="请输入学号查询"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="find">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="clearSearch('formInline')">重置</el-button>
        </el-form-item>
       
      </el-form>
      <el-table :data="userData" border style="width: 100%">
        <el-table-column prop="username" label="姓名" align="center"></el-table-column>
        <el-table-column prop="pass" label="密码" align="center"></el-table-column>
      </el-table>
      <Pagina @getData="showData" :apiName="apiName"></Pagina>
    </div>
  </div>
</template>

<script>
import { login} from '../../api/api'
import Pagina from '../common/Pagina.vue'
export default {
  components: {
    Pagina,
  },
  name: 'WorkList',
  data() {
    return {
      formInline: {
        user: "",
        id: "",
      },
      userData: [],
      apiName: 'getInfor'
    }
  },
  created() { },
  methods: {
    showData(val) {
      this.userData = val;
    },
    find() {
     login({username: this.formInline.user})
        .then(res => {
          this.userData = res.data;
        })
        .catch(error => {
          console.log(error);
        })
    },
    clearSearch(form) {
      this.$refs[form].resetFields();
      login().then(res=>{
        this.userData = res.data
      })
    },
  },
  mounted() { },
  computed: {}
}

</script>
<style lang='scss'>

</style>
