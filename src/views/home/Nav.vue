<template>
<!-- 左边导航栏 -->
    <el-aside width="200px">
        <el-menu
            :default-active="$route.path" exact
            class="el-menu-vertical-demo"  router><!-- 如果页面要刷新仍然保留对应的状态信息就使用exact -->
        <!-- 无子集的菜单 -->
        <!-- v-for="(v,i) in items"::key="i" -->
            <el-menu-item index="index">
                <i class="el-icon-menu"></i>
                <!-- {{v.name}} -->
                <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="stats">
                <i class="el-icon-menu"></i>
                <span slot="title">数据统计</span>
            </el-menu-item>
        <!-- 有子集的菜单 -->
            <el-submenu>
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>信息管理</span>
                </template>
                    <el-menu-item index="wms/list">列表展示</el-menu-item>
            </el-submenu>
            <el-submenu>
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>用户管理</span>
                </template>
                    <el-menu-item index="user/statistics">用户统计</el-menu-item>
                    <el-menu-item index="user/role">角色统计</el-menu-item>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>

<script>
export default {
    data(){
        return {
            items:[]
        }
    },
    mounted(){
        this.getNav();
    },
    // 发送请求
    methods: {
        getNav(){
            // get请求
            this.$http.get('/get_nav').then(res=>{
                console.log(res);
                let{code,result} = res.data;
                if(code == '200'){
                    this.items = result;
                }
            })
        }
        }
    }
</script>