<template>
  <div class='Pagina'>
    <el-pagination background layout="prev, pager, next, jumper, total, sizes" :total="total"
      :current-page="currentPage" :page-size="pageSize" :page-sizes="[5, 10, 20]" @size-change="handleSizeChange"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
import { getInfor } from '../../api/api';
export default {
  name: 'Pagina',
  props: {
    apiName: {
      type: String,
    }
  },

  data() {
    return {
      total: 0,
      currentPage: 1,
      pageSize: 10,
    }
  },
  created() {
    this.getTableData();
  },
  methods: {
    getTableData() {
      getInfor({ limit: this.pageSize, offset: (this.currentPage - 1) * this.pageSize }, this.apiName).then(res => {
        this.$emit('getData', res.data)
      })
      getInfor({}, this.apiName).then(res => {
        this.total = res.data.length;
      })
    },
    // 当前页数
    handleCurrentChange(val) {
      this.currentPage = val;
      getInfor({ limit: this.pageSize, offset: (this.currentPage - 1) * this.pageSize }, this.apiName).then(res => {
        this.$emit('getData', res.data)
      })
    },
    // 每页数量 
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
      getInfor({ limit: this.pageSize, offset: (this.currentPage - 1) * this.pageSize }, this.apiName).then(res => {
        this.$emit('getData', res.data)
      })
    },
  },
  mounted() {
  },
  computed: {}
}

</script>
<style  lang='scss'>

</style>
 