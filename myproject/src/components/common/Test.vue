<template>
  <div class='test'>
    <el-button @click="childmsg">点击展示</el-button>
  </div>
</template>

<script>
export default {
  props:{
    abc:{
      type:String,
      default:''
    }
  },
  name: 'Test',
  data () {
    return {
      msg: "This is the first word from child",
      gender:"男"
    }
  },
  created () {},
  methods: {
    childmsg() {
      console.log(this.abc);
    },
    show(){

    }
  },
  mounted() {},
  computed: {}
}

</script>
<style scoped lang='scss'>
</style>
