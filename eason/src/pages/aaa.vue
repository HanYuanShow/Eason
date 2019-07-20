<template>
    <div>
        <!-- <img src="../../static/images/w/a60.png" alt="">
        <h3>快速提问</h3>
        <span>下一步</span> -->
        <van-nav-bar
            title="快速提问"
            left-text="返回"
            right-text="下一步"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />
    </div>
</template>

<script>
export default {
    components:{

    },
    methods: {
        onClickLeft(){
            Toast('返回');
        },
        onClickRight(){
            Toast('下一步');
        }
    },
}
</script>

<style scoped>

</style>
