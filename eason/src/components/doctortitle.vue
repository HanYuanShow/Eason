<template>
    <div class="doctortitle">
        <!-- 科室名称 -->
        <p class="doctortitlename">{{title}}</p>
    </div>

</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        title:String
    }
}
</script>

<style scoped>
.doctortitle{
    background: #ffffff;
    margin: 0 10px;
    border-radius: 5px 5px 0 0;
}
.doctortitlename{
    border-bottom: 1px solid #f4f4f4;
    font-size: 16px;
    color: #323232;
    text-align: center;
    line-height: 40px;
}
</style>
