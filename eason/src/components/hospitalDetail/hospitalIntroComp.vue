<template>
    <div class="hospitalIntrItem">
        <div class="title">
            <h3>{{titleCon}}</h3>
        </div>
        <div class="intr" v-html="introCon"></div>
        <slot name="morebtn"></slot>
        <slot name="moreCon" v-html="introCon"></slot>
    </div>
</template>
<script>
export default {
    props:{
        titleCon:String,
        introCon:String
    }
}
</script>
<style scoped>
.hospitalIntrItem{
    background: #fff;
    overflow: hidden;
    margin-bottom: 10px;
}
.title{
    padding: 15px;
    border-bottom: 1px solid #E7E7E7;
}
.title h3{
    font-weight: normal;
    font-size: 16px;
    color: #666;
}
.intr{
    line-height: 24px;
    font-size: 14px;
    color: #323232;
    padding: 0 15px;
    margin-top: 10px;
}

</style>
