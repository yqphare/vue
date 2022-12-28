<template>
  <div class='dataOverView'>
    <el-card>
      <div id="main1"></div>
    </el-card>
    <el-card>
      <div id="main2"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'DataOverView',
  data () {
    return {}
  },
  created () {},
  methods: {},
  mounted() {
    // 基于准备好的dom，初始化echarts实例
var myChart = this.$echarts.init(document.getElementById('main1'));
// 绘制图表
myChart.setOption({
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
});
var myChart2 = this.$echarts.init(document.getElementById('main2'));
let options={
  title:{
    text:""
  }
}

  },
  computed: {}
}

</script>
<style scoped lang='scss'>
.dataOverView{
  width: 100%;
  display: flex;
  justify-content: space-between;
  .el-card{
    width: 50%;
    #main1,#main2{
      height: 500px;
    }
  }
}
</style>
