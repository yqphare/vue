<template>
  <div class="studentList">
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
        <el-form-item>
          <el-button type="primary" @click="addStudent">新增</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="name" label="姓名" align="center"></el-table-column>
        <el-table-column prop="gender" label="性别" align="center"></el-table-column>
        <el-table-column prop="age" label="年龄" align="center"></el-table-column>
        <el-table-column prop="studentId" label="学号" align="center"></el-table-column>
        <el-table-column prop="class" label="班级" align="center"></el-table-column>
        <el-table-column prop="state" label="状态" align="center"></el-table-column>
        <el-table-column prop="address" label="地址" align="center"></el-table-column>
        <el-table-column prop="phone" label="联系方式" align="center"></el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" icon="el-icon-edit" @click="updateInfo(scope.row)"></el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="delInfo(scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页展示 -->
      <el-pagination background layout="prev, pager, next, jumper, total, sizes" :total="total"
        :current-page="currentPage" :page-size="pageSize" :page-sizes="[5, 10, 20]" @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
      </el-pagination>
      <!--新增信息弹出框 -->
      <el-dialog :title="isUpdate === false ? '新增信息' : '修改信息'" :visible.sync="addStudentFormVisible" width="500px">
        <el-form :model="addStudentForm" :rules="rules" ref="addStudentForm">
          <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
            <el-input v-model="addStudentForm.name"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth" prop="gender">
            <el-radio v-model="addStudentForm.gender" label="1">男</el-radio>
            <el-radio v-model="addStudentForm.gender" label="2">女</el-radio>
          </el-form-item>
          <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
            <el-input v-model.number="addStudentForm.age"></el-input>
          </el-form-item>
          <el-form-item label="学号" :label-width="formLabelWidth" prop="id">
            <el-input v-model="addStudentForm.studentId"></el-input>
          </el-form-item>
          <el-form-item label="班级" :label-width="formLabelWidth" prop="class">
            <el-select v-model="addStudentForm.class" placeholder="请选择班级">
              <el-option :label="item.className" :value="item.value" v-for="(item, index) in classList"
                :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态" :label-width="formLabelWidth" prop="state">
            <el-select v-model="addStudentForm.state" placeholder="请选择状态">
              <el-option :label="item.label" :value="item.value" v-for="(item, index) in calssState"
                :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="地址" :label-width="formLabelWidth" prop="address">
            <el-input v-model="addStudentForm.address"></el-input>
          </el-form-item>
          <el-form-item label="联系方式" :label-width="formLabelWidth" prop="phone">
            <el-input v-model="addStudentForm.phone"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="cancelAddStudent">取 消</el-button>
          <el-button type="primary" @click="confirmAddStuent('addStudentForm')">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import service from '../../service';
import { getData } from '../../api/api'
export default {
  name: "StudentList",
  data() {
    return {
      formInline: {
        user: "",
        id: "",
      },
      tableData: [],
      totalData: [],
      addStudentFormVisible: false,
      isUpdate: false,
      addStudentForm: {
        name: "",
        gender: "",
        age: "",
        studentId: "",
        class: "",
        state: "",
        address: "",
        phone: "",
      },
      formLabelWidth: "80px",
      classList: [
        { className: "测试1班", value: 1 },
        { className: "测试2班", value: 2 },
        { className: "测试3班", value: 3 },
        { className: "测试4班", value: 4 },
        { className: "测试5班", value: 5 },
      ],
      calssState: [
        { label: "已入学", value: 1 },
        { label: "未入学", value: 0 },
        { label: "休学中", value: -1 },
      ],
      rules: {
        name: [{ required: true, message: "请输入姓名" }],
        gender: [{ required: true }],
        age: [
          { required: true, message: "请输入年龄" },
          {
            type: "number",
            min: 18,
            max: 60,
            message: "年龄必须为数值,且年龄范围在18-60岁之间",
            trigger: "blur",
          },
        ],
        studentId: [{ required: true, message: "请输入学号" }],
        class: [{ required: true, message: "请输入班级" }],
        state: [{ required: true, message: "请选择状态" }],
        address: [{ required: true, message: "请输入地址" }],
        phone: [{ required: true, message: "请输入联系方式" }],
      },
      total: 0,
      currentPage: 1,
      pageSize: 10,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    // 当前页数
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getList();
    },
    // 每页数量 
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
      this.getList();
    },
    getList() {
      getData({ limit: this.pageSize, offset: (this.currentPage - 1) * this.pageSize }).then(res => {
        res.data.forEach(item => {
          item.gender === "1" ? item.gender = "男" : item.gender = "女"
          switch (item.class) {
            case "1":
              item.class = "测试一班"
              break;
            case "2":
              item.class = "测试二班"
              break;
            case "3":
              item.class = "测试三班"
              break;
            case "4":
              item.class = "测试四班"
            case "5":
              item.class = "测试五班"
              break;
            default:
              break;
          }
          if (item.state === "1") {
            item.state = "已入学";
          } else if (item.state === "0") {
            item.state = "未入学";
          } else if (item.state === "-1") {
            item.state = "休学中";
          }
        });
        this.tableData = res.data;
      })
        .catch(error => {
          console.log(error);
        })
        getData().then(res => {
        this.total = res.data.length;
      })
    },
    updateInfo(record) {
      this.isUpdate = true;
      this.addStudentFormVisible = true;
      this.addStudentForm = { ...record };
    },
    delInfo(record) {
      this.$confirm(`确定删除${record.name}, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        service.delete('persons/' + record.id).then(res => {
          if (res.status >= 200 && res.status < 400) {
            this.$message.success("删除成功！")
            this.getList();
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    find() {
      console.log(this.formInline);
      service.get('persons', {
        params: {
          name: this.formInline.user
        }
      })
        .then(res => {
          this.tableData = res.data;
        })
        .catch(error => {
          console.log(error);
        })
    },
    clearSearch(form) {
      console.log(this.$refs[form]);
      this.$refs[form].resetFields();
    },
    addStudent() {
      this.isUpdate = false;
      this.addStudentFormVisible = true;
    },
    cancelAddStudent() {
      this.addStudentFormVisible = false;
    },
    confirmAddStuent(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {

          if (this.isUpdate) {
            // 调用更新接口
            console.log(this.addStudentForm);
            service.patch('persons/' + this.addStudentForm.id, this.addStudentForm).then(res => {
              if (res.status >= 200 && res.status < 400) {
                this.$message.success("修改成功！")
                this.$refs[form].resetFields();
                this.addStudentFormVisible = false;
                this.getList();
              }
            })
          } else {
            // 调用新增接口
            service.post('persons', this.addStudentForm).then(res => {
              if (res.status >= 200 && res.status < 400) {
                this.$message.success("创建成功！")
                this.$refs[form].resetFields();
                this.addStudentFormVisible = false;
                this.getList();
              }
            })
          }
        } else {
          console.error(this.addStudentForm);
        }
      });
    },
  },
  mounted() { },
  computed: {},
};
</script>
<style lang='scss'>
.studentList {

  .demo-form-inline,
  .el-form-item {
    text-align: left;
  }

  .el-select {
    width: 100%;
  }

  .el-pagination {
    text-align: right;
    margin: 20px;
  }
}
</style>
