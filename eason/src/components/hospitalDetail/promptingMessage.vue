<template>

    <div class="hospital-tips">
        <div class="tips">
            <span>【温馨提示】</span>去医院前先进行线上咨询，提前了解病情，避免乱花钱。
        </div>
        <div class="tipsBtn"><a href="#" @click="toQuestion()">去提问</a></div>
    </div>

</template>

<script>

export default {
    methods: {
        toQuestion(){
            this.$router.push("/Question")
        }
    },
}

</script>

<style scoped>
.hospital-tips{
    background-color: #FEF8F3;
    display: flex;
    justify-content: space-between;
    padding: 8px 15px;
}
.tips{
    width: 80%;
    font-size: 14px;
    line-height: 22px;
    color: #999;
}
.tips span{
    color: #FFA800;
}
.tipsBtn{
    width: 20%;
    text-align: right;
    margin: auto;
}
.tipsBtn a{
    display: inline-block;
    padding: 6px 10px;
    font-size: 14px;
    border-radius: 20px;
    color: #fff;
    background: #FFA800;
}
</style>

