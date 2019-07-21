<template>
    <div>
        <div v-for="(v,i) in arr" :key="i" @click="topicid(v.id)" class="easons">
            <div class="photoBig">
                <img :src="v.imgurl" class="photo">
                <div class="photoBigRigth">
                    <div>
                        <span class="photoBigRigthTopa">{{v.name}}</span>
                        <span class="photoBigRigthTopb">{{v.desk}}</span>
                        <span class="photoBigRigthTopc">{{v.position}}</span>
                    </div>
                    <div>
                        <span class="photoBigRigthbottoma">原创</span>
                        <span class="photoBigRigthbottomb">{{v.time}}</span>
                    </div>
                </div>
            </div>

            <div>
                <p class="photoTitle">{{v.title}}</p>
            </div>
            <div>
                <span class="photoContent">{{v.click.content|s}}...</span>
            </div>
            <div>
                <span class="photoreadNumber">阅读{{v.readNumber}}</span>
                <span class="photopraiseNumber">赞{{v.praiseNumber}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        arr:"",
    },
    filters:{
        s(val){
            return val.slice(0,40)
        }
    },
    methods: {
        topicid(val){
            this.$router.push("/ContentTopic/"+val)
        }
    },
}
</script>

<style scoped>
    .easons{
        padding:10px 15px;
        border-bottom:1px solid #e7e7e7;
    }
    .photoBig{
        display: flex;
    }
    .photo{
        width:40px;
        height:40px;
        margin-right:14px;
    }
    .photoBigRigthTopa{
        font-size:14px;
        color:#323232;
    }
    .photoBigRigthTopb{
        color:#666666;
        font-size:12px;
    }
    .photoBigRigthTopc{
        color:#999999;
        font-size:12px;
    }
    .photoBigRigthbottoma{
        color:#999999;
        font-size:12px;
        border:1px solid #999999;
        padding:0 5px;
        border-radius: 10px;
    }
    .photoBigRigthbottomb{
        color:#999999;
        font-size:12px;

    }
    .photoTitle{
        font-size:16px;
        font-weight: 600;
        margin:10px 0;
    }
    .photoContent{
        color:#999999;
        font-size:13px;
        line-height:20px;
    }
    .photoreadNumber{
        font-size:12px;
        color:#666666;
        margin-right:8px;
    }
    .photopraiseNumber{
        font-size:12px;
        color:#666666;
    }
</style>


