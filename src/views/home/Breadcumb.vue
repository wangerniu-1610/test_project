<template>
    <!-- 面包屑 -->
    <div class="breadcrumbs">
        <el-breadcrumb >
            <!-- <el-breadcrumb-item v-for="breadCrumbItem in breadCrumbList" :key ="breadCrumbItem.path">
                {{breadCrumbItem.meta.title}}
            </el-breadcrumb-item> -->
             <el-breadcrumb-item :to="v.path" v-for="(v,i) in list" :key="i">
                {{v.meta.title}}
             </el-breadcrumb-item>
        <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
    </el-breadcrumb>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[]
        }
    },
    created() {
        this.list = this.$route.matched;
    },
    //监听值的变化
    watch:{
        $route(to){
            console.log(to);
            let matched = to.matched;
            this.list = matched;
        }
    }
    // computed:{
    //     breadCrumbList(){
    //         return this.$route.matched;
    //     }
    // },
    // mounted(){
    //     console.log(this.$route);
    // }
};
</script>