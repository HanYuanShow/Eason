<template>
    <div class="Details">
        <div class="ScienceDetails">
            <div @click="routerGo()">
                <span><img src="../../static/w/a61.png"></span>
            </div>
            <div class="ScienceDetailsRightBig">
                <div class="ScienceDetailsRightone ScienceDetailsRight"><img src="../../static/w/asj.png"><p>{{arr.click.collectNumber}}</p></div>
                <div class="ScienceDetailsRightone" ><img src="../../static/w/a7r.png"><p>{{arr.click.transmitNumber}}</p></div>
            </div>
        </div>
        
        <div class="DetailsBody">
            <img class="ScienceDetailsTitleImg" :src="arr.imgurl">
            <div class="ScienceDetailsBody">
                
                <h3>{{arr.title}}</h3>

                <div class="public">
                    <img :src="arr.click.logurl" class="publicLeft">
                    <div class="publicRigth">
                        <div class="publicRigthTop">
                            <span class="publicRigthTopLeft">{{arr.click.title}}</span>
                            <span class="publicRigthTopRight">{{arr.click.subtitle}}</span>
                        </div>
                        <div class="publicRigthBottom">
                            <span>{{arr.time}}</span>
                        </div>
                    </div>
                </div>

                <p>{{arr.click.content}}</p>
                <p class="urlmapDepot">图片来源:{{arr.click.mapDepot}}</p>
                <img :src="arr.click.warrantyUrl" class="warrantyUrl">
                <div class="praiseNumber">
                    <span class="praiseNumberLeft">{{arr.praiseNumber}}</span>
                    <span  class="praiseNumberRight">立即咨询</span>
                </div>

                <div>
                    <div class="shareBig">
                        <img src="../../static/w/ay2.png" class="share">
                        <span class="sharetwo">分享到</span>
                        <img src="../../static/w/ay2.png" class="share">
                    </div>
                    
                    <div class="sharepic">
                        <img src="../../static/w/arp.png">
                        <img src="../../static/w/arq.png">
                        <img src="../../static/w/arl.png">
                        <img src="../../static/w/aro.png">
                    </div>
                    <span class="sharepiclist" v-for="(v,i) in arr.click.smallLabel" :key="i">{{v.title}}</span>
                </div>
            </div>
            <div class="zhandifang">

            </div>

            <div>
                <p class="ScienceDetailsFootP">猜你还想读</p>
                <div class="ScienceDetailsFoot">
                    <div>
                        <img src="../../static/w/azc.png">
                    </div>
                    <div class="ScienceDetailsFootRight">
                        <p>标题啊</p>
                        <span>2019-07-19</span>
                    </div>
                </div>
                <div class="ScienceDetailsFoot">
                    <div>
                        <img src="../../static/w/azc.png">
                    </div>
                    <div class="ScienceDetailsFootRight">
                        <p>标题啊</p>
                        <span>2019-07-19</span>
                    </div>
                </div>
                <div class="ScienceDetailsFoot">
                    <div>
                        <img src="../../static/w/azc.png">
                    </div>
                    <div class="ScienceDetailsFootRight">
                        <p>标题啊</p>
                        <span>2019-07-19</span>
                    </div>
                </div>
            </div>
            <!-- <div class="youzhandifang">

            </div> -->
            <div class="comment">
                <input class="commentInput" type="text" placeholder="评论一下~">
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
        },

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
        position: fixed;
        top:0;
        width:100%;
        box-sizing: border-box;
        background: #ffffff;
    }
    .ScienceDetailsRightBig{
        display: flex;
    }
    .ScienceDetails img {
        width:22px;
        height:21px;
        margin-right:5px;
    }
    .ScienceDetailsRight{
        margin-right:25px; 
    }
    
    .ScienceDetailsRightone{
        display: flex;
        vertical-align:middle;
        line-height: 21px;
        color:black
    }
    .ScienceDetailsFoot{
        display: flex;
        border-bottom:1px solid #e7e7e7;
        padding-bottom:20px;
        padding-top:20px;
        padding-left:15px;
        padding-right:15px;
    }
    .ScienceDetailsFootP{
        border-bottom:1px solid #e7e7e7;
        text-indent: 15px;
        line-height: 42px;
        color:#333333;
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
    .ScienceDetailsTitleImg{
        width:100%;
        height:160px;
        margin-bottom:20px;
    }
    .ScienceDetailsBody{
        padding:0 15px;
    }

    /* 公众号 */
    .public{
        display: flex;
        margin:15px 0;
    }
    .publicLeft{
        width:40px;
        height:40px;
        margin-right:10px;
    }
    .publicRigth{
        font-size:14px;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        
    }
    .publicRigthTopRight{
        border-radius:5px;
        background:#ec706b;
        color:#ffff;
        padding:0 5px;
        font-style:italic
    }
    .publicRigthBottom{
        color:#999999;
    }

    .urlmapDepot{
        line-height:27px;
        font-size:16px;
        margin:20px 0;
        padding:0 10px;
        border-left:5px solid #6cca7d;
    }
    /* 116 */
    .warrantyUrl{
        width:100%;
        height:116px;
        margin-bottom:37px;
    }
    .praiseNumber{
        padding:22px 52px;
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
        margin-right:35px;
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
    .share{
        width:120px;
        height:1px;
        vertical-align:middle;
    }
    .sharetwo{
        padding:0 24px;
        line-height: 0;
        vertical-align:middle;
        color:#9b9b9b;
        font-size:14px;
    }
    .sharepic{
        display: flex;
        justify-content: space-around;
        padding:0 28px;
        margin:30px 0;
    }
    .sharepic img{
        width:45px;
    }
    .sharepiclist{
        /* 116 48 */
        padding:0 16px;
        /* line-height: 28px; */
        font-size: 14px;
        color:#666666;
        border:1px solid #e7e7e7;
        margin-right:10px;
        height:24px;
        line-height: 24px;
    }
    .zhandifang{
        width:100%;
        height:10px;
        background: #f3f3f3;
        margin-top:15px;
    }
    .youzhandifang{
        width:100%;
        height:auto;
        background: #f3f3f3;
        border-bottom:1px solid #dedede;
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
    
</style>

