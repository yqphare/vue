<template>
  <div>
    <h1>{{error}}</h1>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data () {
    return {
      error:"404！您所访问的页面不存在，请检查地址后重新访问！"
    }
  },
  created () {},
  methods: {},
  mounted() {},
  computed: {}
}

</script>
<style scoped lang="scss">
h1{
  text-align: center;
  font-size: 24px;
}
</style>
