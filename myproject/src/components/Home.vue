<template>
  <div class="home">
    <Header></Header>
    <el-container class="content">
      <div>
        <Menu></Menu>
      </div>
      <el-main>
        <el-card>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index">
              {{ item.name }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </el-card>
        <div class="cont">
          <router-view></router-view>
        </div>
        <Footer></Footer>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
import Menu from "./common/Menu.vue";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Menu,
  },
  data() {
    return {};
  },
  created() { },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
  }

  .cont {
    margin: 20px auto;
  }
}
</style>
