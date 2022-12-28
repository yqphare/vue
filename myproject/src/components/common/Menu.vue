<template>
  <div class="menu">
    <el-aside width="200px">
      <el-menu
        router
        :default-active="activePath"
        @open="handleOpen"
        @close="handleClose"
        background-color="#2578b5"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <template v-for="(item, index) in menus">
          <el-submenu :index="index + ''" :key="index" v-if="!item.hidden">
            <template slot="title">
              <i :class="item.icon" style="color:#fafafa"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item-group
              v-for="(child, index) in item.children"
              :key="index"
            >
              <el-menu-item :index="child.path">
                <i :class="child.icon"></i>
                {{ child.name }}</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      isCollapse: true,
      menus: [],
      activePath:''
    };
  },
  created() {
    this.menus = [...this.$router.options.routes];
    this.activePath = this.$router.currentRoute.path;
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {},
  computed: {},
};
</script>
<style lang="scss" >
.menu {
  height: 100%;
  .el-aside {
    height: 100%;
    .el-menu {
      height: 100%;
    }
    .el-submenu .el-menu-item {
      min-width: 0;
    }
  }
}
</style>
