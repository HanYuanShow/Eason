<template>
    <div class="Details">
        <div class="ScienceDetails"> 

            <div @click="routerGo()">
                <span><img src="../../static/w/a61.png" class="ScienceDetailsImg"></span>
            </div>
            <div>
                <span><img src="../../static/w/asj.png" class="mid"><span class="mid">{{1}}</span></span>
                  
                <span>
                    <van-button type="primary" @click="showPopup()" class="showPopup"> 
                        <img src="../../static/w/a7r.png" class="mid">
                    </van-button>
                    <span class="mid">{{1}}</span>
                </span>
            </div>

        </div>
                    <!-- <van-button type="primary" @click="showPopup">
                                    展示弹出层
                    </van-button> -->
                    <van-popup v-model="show" position="bottom" :style="{ height: '20%' }">
                        <div>
                            <div class="shareTop">
                                <span>分享</span>
                            </div>
                            <div class="shareBottom">
                                <img src="../../static/w/arp.png">
                                <img src="../../static/w/arq.png">
                                <img src="../../static/w/arl.png">
                                <img src="../../static/w/aro.png">
                            </div>
                        </div>
                    </van-popup>
        <div v-if="bools">
            正在加载
        </div>
        <div class="DetailsBody" v-else>
            <div class="DetailsTopicBig">
                <h3 class="DetailsTopicTitle">{{arr[0].name}}</h3>

                <div class="DetailsTopicEasonBig">
                    <div>
                        <div class="DetailsTopicEasonTop">
                            <img :src="arr[0].img" class="DetailsTopicEasonTopImg">
                            <span class="DetailsTopicEasonTopName">{{arr[0].doctorinfor.realaName}}</span>
                            <span class="DetailsTopicEasonTopOriginal">原创</span>
                            <span class="DetailsTopicEasonTopDate">{{arr[0].date|filtersdate}}</span>
                        </div>
                        <div class="DetailsTopicEasonBottom">
                            <span class="DetailsTopicEasonBottomText">{{arr[0].doctorinfor.office}}</span>
                            <span class="DetailsTopicEasonBottomText">{{arr[0].doctorinfor.title}}</span>
                            <span class="DetailsTopicEasonBottomText">{{arr[0].doctorinfor.hospital}}</span>
                        </div>
                    </div>
                    <div>
                        <span class="DetailsTopicEasonBottomConcern">+ 关注</span>
                    </div>
                </div>

                <div>
                    <p>{{arr[0].text}}</p>
                </div>
                <div>
                    <span class="DetailsTopicEasonBottomText DetailsTopicEasonBottomTextTwo">阅读{{arr[0].reading}}</span>
                </div>
                <!-- <div>
                    
                    <span>点赞{{arr.praiseNumber}}</span>
                    <span>送心意</span>
                    <span>立即咨询</span>
                </div> -->
                <div class="praiseNumber">
                    <span class="praiseNumberLeft">{{arr[0].star}}</span>
                    <span class="praiseNumbermiddle">送心意</span>
                    <span  class="praiseNumberRight" @click="question()">立即咨询</span>
                </div>

                
            
            </div>
        </div>
        <div class="comment">
            <input class="commentInput" type="text" placeholder="评论一下~">
        </div>
    </div>
    
</template>

<script>
export default {
    props:{
        arr:"",
        show:false,
        bool:""

    },
    methods: {
        routerGo(){
            this.$router.go(-1)
        },
        question(){
            this.$router.push("/Question")
        },
        showPopup() {
            this.show = true;
        }
    },
    computed: {
        bools(){
            if(this.arr == ""){
                this.bool = true
            }else{
                this.bool = false
            }
            return this.bool
        }
    },
    filters:{
        filtersdate(val){
            return val.substring(0,10)
        }
    }

    
}
</script>

<style scoped>
    .showPopup{
        background:none;
        border:none;
        padding:0 0;
    }
    .showPopupP{
        text-align: center;
    }
    .ScienceDetails{
        display: flex;
        justify-content: space-between;
        padding-left:17px;
        padding-right:25px;
        border-bottom:1px solid #dbdbdb;
        font-size:16px;
        position:fixed;
        top:0;
        background: #ffffff;
        width:100%;
        box-sizing: border-box;
    }
    .ScienceDetails img {
        width:22px;
        height:21px;
    }
    .ScienceDetailsImg{
        margin-top:12px;
    }
    .mid{
        vertical-align: middle;
        margin-right:5px;
    }


    .DetailsTopicBig{
        padding:10px 15px 0;
    }
    .DetailsTopicTitle{
        font-size:20px;
        letter-spacing:5px;
    }
    .comment{
        padding:7px 15px;
        background: #f0f0f0;
        position:fixed;
        bottom:0;
        width:100%;
        z-index: 1;
        box-sizing: border-box;
    }
    .commentInput{
        width:100%;
        border-radius: 20px;;
        border:1px solid #cdcdcd;
        line-height: 28px;
        text-indent: 15px;
    }
    .commentInput::-webkit-input-placeholder{
         color:#7f7f7f; 
        padding-left:15px;
    }
    .DetailsTopicEasonBig{
        display: flex;
        justify-content: space-between;
        padding:18px 0;
    }
    .DetailsTopicEasonTopImg{
        width:24px;
        height:24px;
        vertical-align: middle;
    }
    .DetailsTopicEasonTopName{
        font-size: 15px;
        font-weight: 600;
        /* vertical-align: middle; */
    }
    .DetailsTopicEasonTopOriginal{
        border: 1px solid #9a9a9a;
        border-radius: 10px;
        color:#9a9a9a;
        padding:0 5px;
        font-size: 12px;
        margin:0 5px;
    }
    .DetailsTopicEasonTopDate{
        color:#9a9a9a;
        font-size: 12px;
    }
    .DetailsTopicEasonBottomText{
        color:#9a9a9a;
        font-size: 12px;
    }
    .DetailsTopicEasonBottomConcern{
        display:inline-block;
        border:1px solid #6bce72;
        color:#6bce72;
        font-size: 14px;
        line-height:22px;
        padding:0 8px;
        border-radius: 2px;
        
    }
    .DetailsTopicEasonBottomTextTwo{
        /* line-height:40px; */
        display: inline-flex;
        margin:40px 0;
    }

    .praiseNumber{
        display: flex;
        justify-content: space-between;
        margin-bottom:20px;
    }
    .praiseNumbermiddle{
        display: inline-block;
        background:url(../../static/w/asc.png) no-repeat 15px 10px;
        background-size:14px auto;
        width:97px;
        height:35px;
        color:#ec704a;
        border-radius: 18px;
        border:1px solid #ec704a;
        text-indent:40px; 
        box-sizing: border-box;
        font-size:12px;
        line-height:35px;
    }
    .praiseNumberLeft{
        display: inline-block;
        background:url(../../static/w/avc.png) no-repeat 15px 10px;
        background-size:14px auto;
        width:97px;
        height:35px;
        color:#bababa;
        border-radius: 18px;
        border:1px solid #bababa;
        text-indent:40px; 
        box-sizing: border-box;
        font-size:12px;
        line-height:35px;
    }
    /* b5q.9.png */
    .praiseNumberRight{
        display: inline-block;
        background:url(../../static/w/ag4.png) no-repeat 15px 10px;
        background-size:14px auto;
        width:97px;
        height:35px;
        color:#75de7e;
        border-radius: 18px;
        border:1px solid #75de7e;
        text-indent:32px;
        box-sizing: border-box;
        font-size:12px;
        line-height:35px;
    }
    

     .shareTop{
        text-align: center;
        margin-bottom:15px;
    }
    .shareBottom{
        display: flex;
        justify-content: space-around;
        padding:0 10px;
    }
    .shareBottom img{
        width:45px;
    }
</style>


