<template>
    <div>
        <van-search placeholder="输入关键字搜索科普文章" v-model="value" shape="round" class="van-search-class"/>
    </div>
</template>

<script>
export default {
    data(){
        return {
            value:""
        }
    }
}
</script>

<style scoped>
    .van-search-class{
        border-bottom:1px solid #b2b2b2;
    }
</style>


