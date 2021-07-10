<!-- 轮播图 -->
<template>
    <div class="shuffling_figure">
        <el-carousel :interval="4000" type="card" height="300px" width="100%">
                <el-carousel-item v-for="item in items" :key="item">
                <img  :src="item" />
                </el-carousel-item>
            </el-carousel>
    </div>
</template>

<script>
export default {
        data(){
        return {
            items:[
                require('@/assets/img/1.png'),
                require('@/assets/img/2.png'),
                require('@/assets/img/3.png'),
                require('@/assets/img/4.png'),
                require('@/assets/img/5.png'),
            ]
        }
    },
    mounted(){

    },
    methods: {
       
    }
}
</script>