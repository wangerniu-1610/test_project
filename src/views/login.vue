// 登录页
<template>
    <div class="login">
        <p class="login-title">管理平台</p>
        <div class="login-main">
            <div class="login-container">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="用戶名" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>

                    <el-form-item label="密  碼" prop="password">
                        <el-input type="password" v-model="ruleForm.password"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="login()">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
// 导出
export default {
    name: 'login',
    data(){
        return{
            ruleForm: {
                name:'wangyufei',
                password:'1234'
            },
            rules: {
            // 对谁校验就写谁
            name: [
                //是否是必填       //裡面輸入的具體的名字信息
                { required: true, message: '請輸入用戶名', trigger: 'blur' },
                { min: 3, max: 18, message: '长度在 3 到 18个字符', trigger: 'blur' }
            ],
            password: [
                { required: true, message: '請輸入密碼', trigger: 'blur' },
                { min: 3, max: 18, message: '长度在 3 到18 个字符', trigger: 'blur' }
            ],
            }
        }
    },
    //發送請求
    methods:{
        login(){
            //获取值
            let{name,password} = this.ruleForm;
            this.$http({
                methods: 'post',
                url:'get_login',
                data:{user:name,password:password}
            }).then(res=>{
                console.log(res);
                let{code} = res.data;
                if(code ==200){
                    //存储内容，进行缓存
                    sessionStorage.setItem('username',name)
                    this.$router.pash('/home');
                }
            })


        }
    }
}
</script>