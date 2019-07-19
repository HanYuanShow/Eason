<template>
    <div>
        <van-nav-bar
            :title="title"
            left-arrow
            @click-left="onClickLeft"
        />
    </div>
</template>

<script>
export default {
    // props:{
    //     title:String
    // },
    data() {
        return {
            title:"名医咨询"
        }
    },
    methods: {
        onClickLeft() {
        this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.van-icon-arrow-left:before {
    color: #6bce72;
    font-weight: 800;
    font-size: 25px;
}
.van-nav-bar__title{
    font-weight: 800;
}
.van-nav-bar{
    border-bottom: 1px solid #dbdbdb;
    position:sticky;
    top: 0;

}
</style>
