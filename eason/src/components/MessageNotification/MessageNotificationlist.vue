<template>
    <div class="conten">
        <div class="center">
            <div class="left">
                <div class="top">
                    {{arrb.title}}
                </div>
                <div class="bottom">
                    {{arrb.text}}
                </div>
            </div>
            <div class="reight">
                <van-switch
            v-model="checked"
            active-color="#07c160"
            inactive-color="#d4d2cf"
            />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components:{

    },
    data(){
        return{
              checked: false,
        }
    },
    props:{
        arrb:"",
    },

}
</script>
<style scoped>
.conten{
    width: 100%;
    /* height: 80px; */
    background: white;


}
.center{
    width: 90%;
    /* height: px; */
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    color:#5d5b5b;
    align-items: center;
    /* border-bottom:1px solid #989898; */
    border-top: 0.5px solid #969595;
    padding: 13px 0;


}
.top{
    color: #2e2d2d;
    font-size:16px;
    line-height: 25px;
    font-weight: 600;
    
}
.bottom{
    color: #5d5b5b;
    font-size: 14px;
    line-height: 30px;
}
</style>
