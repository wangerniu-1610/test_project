<template>
    <div>
        <!-- 轮播图 -->
        <Figure />
        <!-- 统计图 -->
        <statistical />
    </div>

</template>

<script>
import Figure from './Figure.vue';
import statistical from './statistical.vue';
export default {
  components: {
    statistical,
    Figure,
    },
    data(){
        return {
        }
    },
    mounted(){
    },
    methods: {
    }
}

</script>