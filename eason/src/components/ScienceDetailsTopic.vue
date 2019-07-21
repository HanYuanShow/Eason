<template>
    <div>
        <div class="ScienceDetails"> 
            <div @click="routerGo()">
                <span><img src="../../static/w/a61.png"></span>
            </div>
            <div>
                <span class="ScienceDetailsRight"><img src="../../static/w/asj.png"><span class="ScienceDetailsRightone"></span></span>
                <span ><img src="../../static/w/a7r.png"><span class="ScienceDetailsRightone"></span></span>
            </div>
        </div>

        <div class="DetailsTopicBig">
            <h3 class="DetailsTopicTitle">{{arr.title}}</h3>

            <div>
                <div>
                    <div>
                        <img src="">
                        <span>{{arr.name}}</span>
                        <span>原创啊</span>
                        <span>{{arr.time}}</span>
                    </div>
                    <div>
                        <span>{{arr.desk}}</span>
                        <span>{{arr.position}}</span>
                        <span>{{arr.hospital}}</span>
                    </div>
                </div>
                <div>
                    关注
                </div>
            </div>

            <div>
                <p>{{arr.click.content}}</p>
            </div>
            <div>
                <span>阅读{{arr.readNumber}}</span>
            </div>
            <div>
                <span>点赞{{arr.praiseNumber}}</span>
                <span>送心意</span>
                <span>立即咨询</span>
            </div>

            <div>
                <input type="text" value="添加评论">
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
    .ScienceDetailsRight{
        margin-right:25px;
    }
    .ScienceDetailsRightone{
        line-height: 21px;
        color:black
    }
    .DetailsTopicBig{
        padding:0 15px;
    }
    .DetailsTopicTitle{
        font-size:20px;
        letter-spacing:5px;
    }
</style>


