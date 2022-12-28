<template>
  <div class="header">
    <el-header>
      <div class="title"><i class=" fa fa-money"></i>
        工资管理系统</div>
      <div>{{userName}}</div>
    </el-header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      userName:'',
    };
  },
  created() {
    this.userName = localStorage.getItem("userName");
  },
  methods: {},
  mounted() {},
  computed: {},
};
</script>
<style scoped lang="scss">
.header{
  .el-header {
  background-color: #2578b5;
  color: #fafafa;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
}
.title {
  width: 200px;
  font-size: 24px;
}
}

</style>
