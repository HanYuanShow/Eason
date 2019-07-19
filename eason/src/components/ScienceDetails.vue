<template>
    <div>
        <div class="ScienceDetails">
            <div @click="routerGo()">
                <span class="ScienceDetailsLeft"><img src="../../static/w/a61.png"></span>
            </div>
            <div>
                <span class="ScienceDetailsRight"><img src="../../static/w/asj.png"></span>
                <span><img src="../../static/w/a7r.png"></span>
            </div>
        </div>

        <div>
            <img src="">
            <h3></h3>
            <div>
                <img src="">
                <div>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                </div>
            </div>
            <p> </p>
            <p> </p>
            <img src="">
            <div>
                <span></span>
                <span></span>
            </div>

            <div>
                <span>分享到</span>
                <div>
                    <img src="../../static/w/arp.png">
                    <img src="../../static/w/arq.png">
                    <img src="../../static/w/arl.png">
                    <img src="../../static/w/aro.png">
                </div>
                <span v-for="(v,i) in arr" :key="i">{{}}</span>
            </div>
        </div>
        <div>
            <p>猜你还想读</p>
            <div class="ScienceDetailsFoot">
                <div>
                    <img src="">
                </div>
                <div class="ScienceDetailsFootRight">
                    <p>标题啊</p>
                    <span>2019-07-19</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props:{
        arr:"",
    },
    methods: {
        routerGo(){
            this.$router.go(-1)
        }
    },
}
</script>

<style scoped>
    .ScienceDetails{
        display: flex;
        justify-content: space-between;
        padding-left:17px;
        padding-right:25px;
        padding-top:12px;
        padding-bottom:12px;
        border-bottom:1px solid #dbdbdb;
        font-size:16px;
        color:#6bce72;
    }
    .ScienceDetails img {
        width:22px;
        height:21px;
    }
    .ScienceDetailsLeft{
        line-height: 21px;
    }
    .ScienceDetailsRight{
        margin-right:25px;
    }
    .ScienceDetailsFoot{
        display: flex;
        border-bottom:1px solid #e7e7e7;
        padding-bottom:20px;
        padding-top:20px;
        padding-left:15px;
        padding-right:15px;
    }
    .ScienceDetailsFoot img{
        width:90px;
        height:75px;
        margin-right:10px;
    }
    .ScienceDetailsFootRight{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
    }
    .ScienceDetailsFootRight p{
        font-size:15px;
        font-weight: 500;
    }
    .ScienceDetailsFootRight span{
        font-size:12px;
        color:#b2b2b2;
    }
</style>


