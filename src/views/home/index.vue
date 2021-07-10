<template>
    <div id = 'module'>
        <el-container>
            <!-- 左边导航栏 -->
            <Nav />
            <el-container>
                <!-- 头部信息 -->
                <el-header>
                    <!-- 面包屑 -->
                    <breadcumb />
                    <!-- 退出按钮 -->
                    <div class="exit-botton">
                        <el-button type="primary" @click="goBack">退出</el-button>
                    </div>
                </el-header>
                <!-- 主要内容 -->
                <el-main>
                    <!-- //路由的出口 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
// 引入nav.vue文件
import Breadcumb from './Breadcumb.vue'
import Nav from './Nav.vue'
export default {
  components: {
    Nav,
    Breadcumb
       },
    data(){
        return {
        }
    },
    methods: {
        goBack(){
            sessionStorage.removeItem("username");
            this.$router.push('./login');
        }
    }
}
</script>

