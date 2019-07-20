<template>
    <div class="kong">
        <div class="contnt">
            <div class="top">
                <img :src="kongimg" alt="">
            </div>
            <div class="bottom">
                {{kongtext}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    props:{
        kongtext:String,
        kongimg:String
    }
}
</script>
<style scoped>
.kong{
    width: 100%;
}
.contnt{
    /* width: 200px; */
    margin:150px auto 0;
}
.top img{
    width: 70px;
    height: 70px;
    display: block;
    margin: 0 auto;
    
}
.bottom{
    text-align: center;
    color: #ccc8c8;
    margin-top: 15px;
}
</style>
